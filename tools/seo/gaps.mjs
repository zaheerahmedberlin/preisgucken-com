#!/usr/bin/env node
// Content-gap report for the preisgucken.com blog.
//
// Combines three sources and tells you what to write or deepen next:
//   1. preisgucken.de categories + product counts (public pages, read-only GET)
//   2. which of them the blog already covers (pgLink in lib/blogCategories.ts)
//   3. optional: Search Console CSV exports and an audit report
//
//   node tools/seo/gaps.mjs                         # category gaps only
//   node tools/seo/gaps.mjs --gsc ~/Downloads/gsc   # + queries/pages from GSC
//   node tools/seo/gaps.mjs --audit /tmp/report.json --top 15 --out gaps.md
//
// GSC: in Search Console > Performance > Export > Download CSV, unzip, and point
// --gsc at the folder (needs Queries.csv and/or Pages.csv). Nothing is written
// to the site; the output is a Markdown plan that a human reviews.

import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const args = process.argv.slice(2);
const opt = (n, d) => {
  const i = args.indexOf(n);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : d;
};
const TOP = Number(opt("--top", 15));
const GSC_DIR = opt("--gsc", null);
const AUDIT = opt("--audit", null);
const OUT = opt("--out", null);
const DE = "https://www.preisgucken.de";
const CACHE = join(ROOT, "tools/seo/.cache/categories.json");
const STOP = new Set(["kaufen", "guide", "ratgeber", "tipps", "der", "die", "das", "und", "oder", "für", "mit", "von", "online", "günstig", "beste", "bester", "bestes", "was", "wie", "ohne", "nach", "über", "unter", "aus", "bei", "eigene", "beim", "zum", "zur", "dein", "deine"]);

const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'");
const tokens = (s) => decode(s).toLowerCase().split(/[^a-zäöüß0-9]+/).filter((t) => t.length > 3 && !STOP.has(t));
const intDE = (s) => Number(String(s).replace(/\./g, ""));

// ------------------------------------------------------------ blog coverage
const catSrc = readFileSync(join(ROOT, "lib/blogCategories.ts"), "utf8");
const posts = [...catSrc.matchAll(/\{ slug: "([^"]+)", title: "([^"]*)".*?pgLink: "([^"]*)"/g)].map((m) => ({ slug: m[1], title: m[2], pg: m[3].split(",").map((x) => x.trim()) }));
const keywordsOf = (slug) => {
  const f = join(ROOT, "app/blog", slug, "page.tsx");
  if (!existsSync(f)) return [];
  const m = readFileSync(f, "utf8").match(/keywords: \[([\s\S]*?)\]/);
  return m ? [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]) : [];
};
for (const p of posts) p.slugTok = new Set(tokens(p.slug.replace(/-/g, " ")));
for (const p of posts) p.tok = new Set([...tokens(p.slug.replace(/-/g, " ")), ...tokens(p.title), ...keywordsOf(p.slug).flatMap(tokens)]);
const coverage = new Map();
for (const p of posts) for (const s of p.pg) coverage.set(s, [...(coverage.get(s) || []), p]);

// ------------------------------------------------------------ .de categories (cached 24h)
async function loadCategories() {
  if (existsSync(CACHE)) {
    const c = JSON.parse(readFileSync(CACHE, "utf8"));
    if (Date.now() - c.at < 24 * 3600 * 1000) return c.rows;
  }
  const sm = await (await fetch(`${DE}/sitemap.xml`)).text();
  const slugs = [...sm.matchAll(/<loc>[^<]*\/kategorie\/([^<]+)<\/loc>/g)].map((m) => m[1]).filter((s) => s !== "sonstiges");
  const rows = [];
  let i = 0;
  await Promise.all(
    Array.from({ length: 6 }, async () => {
      while (i < slugs.length) {
        const slug = slugs[i++];
        try {
          const h = await (await fetch(`${DE}/kategorie/${slug}`, { headers: { "user-agent": "Mozilla/5.0 (compatible; seo-gaps)" }, signal: AbortSignal.timeout(40000) })).text();
          const d = decode((h.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "");
          const m = d.match(/^([\d.]+) Angebote für (.+?) im (.+?)-Preisvergleich/);
          const name = m ? m[2] : decode(((h.match(/<title>([^<]*?) günstig kaufen/) || [])[1] || slug));
          rows.push({ slug, name, count: m ? intDE(m[1]) : null, parent: m ? m[3] : null });
        } catch {
          rows.push({ slug, name: slug, count: null, parent: null });
        }
      }
    })
  );
  mkdirSync(dirname(CACHE), { recursive: true });
  writeFileSync(CACHE, JSON.stringify({ at: Date.now(), rows }));
  return rows;
}

// ------------------------------------------------------------ GSC csv
function readCsv(dir, name) {
  if (!dir) return [];
  const file = readdirSync(dir).find((f) => f.toLowerCase() === name.toLowerCase());
  if (!file) return [];
  const lines = readFileSync(join(dir, file), "utf8").trim().split(/\r?\n/);
  const cells = (l) => [...l.matchAll(/("([^"]*)"|[^,]*)(,|$)/g)].map((m) => (m[2] !== undefined ? m[2] : m[1])).slice(0, -1);
  const head = cells(lines[0]).map((h) => h.toLowerCase());
  const col = (re) => head.findIndex((h) => re.test(h));
  const [k, cl, im, ps] = [0, col(/click/), col(/impress/), col(/position/)];
  return lines.slice(1).map((l) => {
    const c = cells(l);
    return { key: c[k], clicks: Number(c[cl]) || 0, impressions: Number(String(c[im]).replace(/[.,]/g, "")) || 0, position: Number(String(c[ps]).replace(",", ".")) || 0 };
  });
}

// ------------------------------------------------------------ build report
const cats = await loadCategories();
const gaps = cats
  .map((c) => {
    // covered by pgLink, or by a post whose title/slug/keywords contain every word of the category name
    const nameTok = tokens(c.name);
    const byText = nameTok.length ? posts.filter((p) => nameTok.every((t) => p.tok.has(t))) : [];
    return { ...c, posts: [...new Set([...(coverage.get(c.slug) || []), ...byText])] };
  })
  .filter((c) => c.posts.length === 0 && c.count)
  .sort((a, b) => b.count - a.count);

const related = (c) => {
  const t = new Set(tokens(c.name));
  return posts
    .map((p) => ({ p, s: [...t].filter((x) => p.tok.has(x)).length + (c.parent && p.pg.some((s) => cats.find((k) => k.slug === s)?.parent === c.parent) ? 0.5 : 0) }))
    .filter((x) => x.s > 0)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3)
    .map((x) => x.p);
};

const out = [];
out.push(`# Content-gap report\n`);
out.push(`${cats.length} preisgucken.de categories, ${posts.length} blog posts, ${gaps.length} categories with products but no post.\n`);

out.push(`## 1. Categories without a blog post (most products first)\n`);
out.push(`| # | Category | Products | Parent | Working title | Related posts to link |`);
out.push(`|---|---|---|---|---|---|`);
gaps.slice(0, TOP).forEach((c, i) => {
  const rel = related(c).map((p) => `[${p.slug}](/blog/${p.slug}/)`).join(", ") || "–";
  out.push(`| ${i + 1} | [${c.name}](${DE}/kategorie/${c.slug}) | ${c.count.toLocaleString("de-DE")} | ${c.parent || "–"} | ${c.name}: Kaufberatung – worauf achten? | ${rel} |`);
});
out.push(`\n**Brief template for each** (fill from a real SERP check before writing): search intent; 5–7 sections (types, key criteria, budget tiers, common mistakes, care/usage); FAQ with 4–5 questions that also appear visibly on the page; link to the .de category and 2–3 related posts; no prices or statistics without a linked source.\n`);

if (AUDIT && existsSync(AUDIT)) {
  const rep = JSON.parse(readFileSync(AUDIT, "utf8"));
  const pageImp = new Map(readCsv(GSC_DIR, "Pages.csv").map((r) => [r.key.replace(/\/$/, "").split("/").pop(), r]));
  const thin = rep.findings
    .filter((f) => f.code === "thin-content")
    .map((f) => {
      const slug = f.url.replace(/\/$/, "").split("/").pop();
      return { slug, words: Number((f.msg.match(/^(\d+) words/) || [])[1]) || 0, imp: pageImp.get(slug)?.impressions || 0 };
    })
    .sort((a, b) => b.imp - a.imp || a.words - b.words)
    .slice(0, TOP);
  out.push(`## 2. Posts to deepen (thin content${GSC_DIR ? ", most Search Console impressions first" : ", shortest first"})\n`);
  out.push(`| Post | Words | Impressions |\n|---|---|---|`);
  for (const t of thin) out.push(`| [${t.slug}](/blog/${t.slug}/) | ${t.words} | ${GSC_DIR ? t.imp : "n/a"} |`);
  out.push("");
}

const queries = readCsv(GSC_DIR, "Queries.csv");
if (queries.length) {
  const near = queries.filter((q) => q.position >= 8 && q.position <= 40 && q.impressions >= 3).sort((a, b) => b.impressions - a.impressions);
  const matched = [];
  const unmatched = [];
  for (const q of near) {
    // a word in the post's slug counts double; at least one slug hit or two other hits is needed
    const qt = tokens(q.key);
    // German compounds: "werkstattbedarf" should match "werkstatt" (substring, both >= 5 chars)
    const hit = (set, t) => set.has(t) || (t.length >= 5 && [...set].some((x) => x.length >= 5 && (x.includes(t) || t.includes(x))));
    const score = (p) => qt.reduce((n, t) => n + (hit(p.slugTok, t) ? 2 : hit(p.tok, t) ? 1 : 0), 0);
    const best = posts.map((p) => ({ p, s: score(p) })).sort((a, b) => b.s - a.s || a.p.tok.size - b.p.tok.size)[0];
    (best && best.s >= 2 ? matched : unmatched).push({ q, p: best?.p });
  }
  out.push(`## 3. Striking-distance queries (position 8–40): improve the matching post\n`);
  out.push(`| Query | Impressions | Position | Best matching post |\n|---|---|---|---|`);
  for (const m of matched.slice(0, TOP * 2)) out.push(`| ${m.q.key} | ${m.q.impressions} | ${m.q.position.toFixed(1)} | [${m.p.slug}](/blog/${m.p.slug}/) |`);
  out.push(`\n## 4. Queries with no matching post: new-post candidates\n`);
  out.push(`| Query | Impressions | Position |\n|---|---|---|`);
  for (const m of unmatched.slice(0, TOP * 2)) out.push(`| ${m.q.key} | ${m.q.impressions} | ${m.q.position.toFixed(1)} |`);
  out.push("");
} else if (GSC_DIR) {
  out.push(`_No Queries.csv found in ${GSC_DIR}._\n`);
}

const text = out.join("\n");
if (OUT) {
  writeFileSync(OUT, text);
  console.log(`Report written to ${OUT}`);
} else console.log(text);
