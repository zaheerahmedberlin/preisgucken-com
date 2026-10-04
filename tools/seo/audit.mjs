#!/usr/bin/env node
// SEO audit for preisgucken.com — crawls every URL in the sitemap of a running
// build and checks on-page SEO. No dependencies (Node 18+).
//
//   npm run build && npm start &            # then:
//   node tools/seo/audit.mjs                 # audits http://localhost:3000
//   node tools/seo/audit.mjs --base https://www.preisgucken.com
//   node tools/seo/audit.mjs --ci            # exit code 1 if any ERROR
//   node tools/seo/audit.mjs --json out.json # machine-readable report
//
// ERRORs are things that are wrong (broken links, duplicate titles, schema that
// does not match the visible text, images without alt, ...). WARNs are quality
// signals (thin content, long titles, missing FAQ, orphan-ish pages) that are
// reported but never fail the gate.

import { writeFileSync } from "node:fs";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  return i >= 0 && args[i + 1] && !args[i + 1].startsWith("--") ? args[i + 1] : fallback;
};
const BASE = opt("--base", "http://localhost:3000").replace(/\/$/, "");
const CI = args.includes("--ci");
const JSON_OUT = opt("--json", null);
const MIN_WORDS = Number(opt("--min-words", 600));
const PROD = "https://www.preisgucken.com";
const TITLE_SUFFIX = " | Preisgucken Preisvergleich";
const MAX_BARE_TITLE = 50;

const findings = [];
const add = (level, code, url, msg) => findings.push({ level, code, url: url.replace(BASE, "").replace(PROD, "") || "/", msg });

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");
const textOf = (html) => decode(html.replace(/<script[\s\S]*?<\/script>/g, " ").replace(/<style[\s\S]*?<\/style>/g, " ").replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ").trim();

async function get(url) {
  try {
    const res = await fetch(url, { redirect: "manual", headers: { "user-agent": "Mozilla/5.0 (compatible; Googlebot/2.1; seo-audit)" } });
    return { status: res.status, location: res.headers.get("location"), html: res.status === 200 ? await res.text() : "" };
  } catch (e) {
    return { status: 0, location: null, html: "", error: String(e) };
  }
}

async function pool(items, size, fn) {
  const out = new Array(items.length);
  let i = 0;
  await Promise.all(
    Array.from({ length: size }, async () => {
      while (i < items.length) {
        const k = i++;
        out[k] = await fn(items[k]);
      }
    })
  );
  return out;
}

// ---------------------------------------------------------------- sitemap
const sm = await get(`${BASE}/sitemap.xml`);
if (sm.status !== 200) {
  console.error(`Cannot read ${BASE}/sitemap.xml (status ${sm.status}). Is the site running?`);
  process.exit(2);
}
const locs = [...sm.html.matchAll(/<loc>([^<]+)<\/loc>\s*(?:<lastmod>([^<]+)<\/lastmod>)?/g)].map((m) => ({ loc: m[1], lastmod: m[2] }));
const urls = locs.map((l) => l.loc.replace(PROD, BASE));
const lastmods = locs.map((l) => l.lastmod).filter(Boolean);
if (lastmods.length === 0) add("warn", "sitemap-lastmod", "/sitemap.xml", "no <lastmod> values");
else if (new Set(lastmods).size === 1 && locs.length > 5) add("warn", "sitemap-lastmod", "/sitemap.xml", "every URL has the same <lastmod>; Google learns to ignore it");
for (const l of locs) if (l.lastmod && Number.isNaN(Date.parse(l.lastmod))) add("error", "sitemap-lastmod", l.loc, `invalid lastmod "${l.lastmod}"`);

// ---------------------------------------------------------------- crawl
const isPost = (u) => /\/blog\/[^/]+\/$/.test(u) && !/\/blog\/kategorie\//.test(u);

const pages = await pool(urls, 6, async (url) => {
  const r = await get(url);
  const p = { url, status: r.status, links: [], isPost: isPost(url) };
  if (r.status !== 200) {
    add("error", "status", url, `HTTP ${r.status}`);
    return p;
  }
  const h = r.html;
  const grab = (re) => (h.match(re) || [])[1];

  p.title = decode(grab(/<title>([\s\S]*?)<\/title>/) || "").trim();
  p.desc = decode(grab(/<meta name="description" content="([^"]*)"/) || "");
  p.canonical = grab(/<link rel="canonical" href="([^"]*)"/) || "";
  p.robots = [...h.matchAll(/<meta name="robots" content="([^"]*)"/g)].map((m) => m[1]).join(",");
  p.h1 = [...h.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)].map((m) => textOf(m[1]));

  const art = h.includes("<article") ? h.slice(h.indexOf("<article"), h.indexOf("</article>") > 0 ? h.indexOf("</article>") : undefined) : "";
  p.article = art;
  p.words = art ? textOf(art).split(" ").length : 0;
  p.h2 = (art.match(/<h2/g) || []).length;
  p.fullText = textOf(h);
  p.imgs = [...h.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
  p.links = [...h.matchAll(/<a [^>]*href="([^"#]+)"/g)].map((m) => m[1]);
  p.ld = [...h.matchAll(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  return p;
});
const ok = pages.filter((p) => p.status === 200);

// ---------------------------------------------------------------- per-page checks
for (const p of ok) {
  const { url } = p;
  const expectedCanonical = url.replace(BASE, PROD);
  if (!p.title) add("error", "title-missing", url, "no <title>");
  else {
    const bare = p.title.endsWith(TITLE_SUFFIX) ? p.title.slice(0, -TITLE_SUFFIX.length) : p.title;
    if (bare.length > MAX_BARE_TITLE) add("warn", "title-long", url, `title is ${bare.length} chars before the suffix (max ${MAX_BARE_TITLE}): "${bare}"`);
  }
  if (!p.desc) add("error", "description-missing", url, "no meta description");
  else if (p.desc.length > 160) add("warn", "description-length", url, `description is ${p.desc.length} chars (max 160)`);
  else if (p.desc.length < 70 && p.isPost) add("warn", "description-length", url, `description is only ${p.desc.length} chars`);
  if (p.h1.length !== 1) add("error", "h1", url, `${p.h1.length} <h1> elements (expected 1)`);
  if (p.canonical && p.canonical.replace(/\/$/, "") !== expectedCanonical.replace(/\/$/, "")) add("error", "canonical", url, `canonical is ${p.canonical}`);
  if (!p.canonical) add("error", "canonical", url, "no canonical link");
  if (/noindex/.test(p.robots)) add("error", "noindex", url, "page is in the sitemap but has noindex");

  for (const img of p.imgs) {
    if (!/\balt="[^"]+"/.test(img)) add("error", "img-alt", url, `image without alt text: ${img.slice(0, 80)}`);
    if (!(/\bwidth=/.test(img) && /\bheight=/.test(img))) add("warn", "img-size", url, "image without width/height (layout shift)");
  }

  // structured data must parse, and FAQ markup must match the visible text
  for (const raw of p.ld) {
    let data;
    try {
      data = JSON.parse(raw);
    } catch {
      add("error", "schema-json", url, "JSON-LD block is not valid JSON");
      continue;
    }
    const nodes = Array.isArray(data) ? data : [data];
    for (const n of nodes) {
      if (n["@type"] === "Article") {
        if (!n.headline || !n.datePublished) add("error", "schema-article", url, "Article schema without headline/datePublished");
        if (n.headline && n.headline.length > 110) add("warn", "schema-article", url, `Article headline is ${n.headline.length} chars (max 110)`);
      }
      if (n["@type"] === "FAQPage") {
        for (const q of n.mainEntity || []) {
          const a = q?.acceptedAnswer?.text || "";
          if (!p.fullText.includes(decode(q.name || "").replace(/\s+/g, " ")) || !p.fullText.includes(decode(a).replace(/\s+/g, " ")))
            add("error", "schema-faq-mismatch", url, `FAQPage question/answer is not visible on the page: "${(q.name || "").slice(0, 60)}"`);
        }
      }
    }
  }

  // Quantified savings promises ("bis zu 40 %") are only safe when they are true and typical (UWG § 5).
  // Claims about vendor coupons are fine as long as real, current coupons back them, so a
  // promise next to "Gutschein/Coupon/Rabattcode" is skipped; the rest is flagged as a warning.
  const claimText = `${p.title} ${p.desc} ${p.isPost ? textOf(p.article) : ""}`;
  const promiseRe = /(bis zu \d{1,3}\s?(%|Prozent)|spar\w* (dir )?bis (zu )?\d{1,3}\s?(%|Prozent)|\d{1,3}\s?[–-]\s?\d{1,3}\s?(%|Prozent) (günstiger|billiger|sparen|reduziert|Rabatt|Ersparnis))/gi;
  for (const m of claimText.matchAll(promiseRe)) {
    const around = claimText.slice(Math.max(0, m.index - 140), m.index + m[0].length + 140);
    if (/Gutschein|Coupon|Rabattcode|Aktionscode/i.test(around)) continue;
    add("warn", "savings-claim", url, `savings promise outside a coupon context: "${m[0]}" – keep it qualitative unless real data backs it`);
  }
  if (/Idealo|Check24|Geizhals|billiger\.de/i.test(claimText)) add("warn", "competitor-name", url, "names a competing price-comparison brand; make sure it is a truthful, necessary reference");

  if (p.isPost) {
    if (p.words < MIN_WORDS) add("warn", "thin-content", url, `${p.words} words in the article (target ${MIN_WORDS}+)`);
    if (p.h2 < 3) add("warn", "few-headings", url, `only ${p.h2} <h2> sections`);
    if (!p.ld.some((r) => r.includes('"FAQPage"'))) add("warn", "no-faq", url, "no FAQ section / FAQPage schema");
    if (!/Aktualisiert:/.test(p.fullText) && !/(\d{1,2}\. \w+ \d{4})/.test(p.fullText)) add("warn", "no-date", url, "no visible date");
    // statistics should come with a source (link) in the same paragraph
    for (const m of p.article.matchAll(/<(p|li)\b[^>]*>([\s\S]*?)<\/\1>/g)) {
      const inner = m[2];
      const t = textOf(inner);
      if (/\b\d{1,3}\s?(%|Prozent)/.test(t) && /(Studie|Umfrage|Statistik|laut (einer|dem|der) |Bitkom|Idealo|Verbraucherzentrale|Stiftung Warentest)/i.test(t) && !/<a\s/.test(inner))
        add("error", "unsourced-statistic", url, `statistic attributed to a study/organisation without a linked source (UWG: misleading): "${t.slice(0, 110)}…"`);
    }
  }
}

// ---------------------------------------------------------------- cross-page checks
const dupes = (key, code, label) => {
  const seen = new Map();
  for (const p of ok) if (p[key]) seen.set(p[key], [...(seen.get(p[key]) || []), p.url]);
  for (const [v, list] of seen) if (list.length > 1) for (const u of list) add("error", code, u, `duplicate ${label}: "${v.slice(0, 70)}"`);
};
dupes("title", "duplicate-title", "title");
dupes("desc", "duplicate-description", "description");

const siteSet = new Set(urls);
const norm = (href) => {
  if (href.startsWith("/")) return BASE + href.split("?")[0];
  if (href.startsWith(PROD) || href.startsWith(BASE)) return href.replace(PROD, BASE).split("?")[0];
  return null;
};
const inbound = new Map();
const internal = new Set();
for (const p of ok) {
  for (const href of new Set(p.links)) {
    const u = norm(href);
    if (!u) continue;
    internal.add(u);
    if (u !== p.url) inbound.set(u, (inbound.get(u) || 0) + 1);
    // a path without trailing slash 308-redirects (trailingSlash: true)
    if (u !== BASE && !u.endsWith("/") && !/\.[a-z0-9]+$/i.test(u.split("/").pop() || "x.")) add("warn", "redirecting-link", p.url, `internal link without trailing slash (308): ${href}`);
  }
}
// links that appear on almost every page (nav/footer) say nothing about relevance
const common = new Set([...inbound].filter(([, c]) => c > ok.length * 0.8).map(([u]) => u));
for (const p of ok.filter((p) => p.isPost)) {
  const c = inbound.get(p.url) || 0;
  if (!common.has(p.url) && c < 2) add("warn", "orphan-ish", p.url, `only ${c} internal link(s) point here`);
}
const toCheck = [...internal].filter((u) => !siteSet.has(u) && !siteSet.has(u.replace(/\/$/, "")));
const checked = await pool(toCheck, 6, async (u) => ({ u, r: await get(u) }));
for (const { u, r } of checked) {
  const ok2 = r.status === 200 || ((r.status === 301 || r.status === 308) && r.location);
  if (!ok2) add("error", "broken-link", u, `internal link returns HTTP ${r.status}`);
}

// 404 page must be a real 404
const nf = await get(`${BASE}/__seo-audit-missing__/`);
if (nf.status !== 404) add("error", "soft-404", "/__seo-audit-missing__/", `unknown URL returns HTTP ${nf.status}, expected 404`);

// ---------------------------------------------------------------- report
const byCode = new Map();
for (const f of findings) {
  const k = `${f.level}:${f.code}`;
  byCode.set(k, [...(byCode.get(k) || []), f]);
}
const errors = findings.filter((f) => f.level === "error");
const warns = findings.filter((f) => f.level === "warn");

console.log(`SEO audit of ${BASE}`);
console.log(`${ok.length}/${pages.length} pages crawled, ${pages.filter((p) => p.isPost).length} posts\n`);
for (const level of ["error", "warn"]) {
  const keys = [...byCode.keys()].filter((k) => k.startsWith(level + ":")).sort();
  if (!keys.length) {
    console.log(`${level.toUpperCase()}: none\n`);
    continue;
  }
  console.log(`${level.toUpperCase()}S`);
  for (const k of keys) {
    const list = byCode.get(k);
    const show = level === "error" ? list : list.slice(0, 3);
    console.log(`  ${k.split(":")[1]}  x${list.length}`);
    for (const f of show) console.log(`    ${f.url}  ${f.msg}`);
    if (list.length > show.length) console.log(`    … and ${list.length - show.length} more (use --json for the full list)`);
  }
  console.log("");
}
console.log(`Summary: ${errors.length} error(s), ${warns.length} warning(s)`);

if (JSON_OUT) {
  writeFileSync(JSON_OUT, JSON.stringify({ base: BASE, pages: ok.length, errors: errors.length, warnings: warns.length, findings }, null, 2));
  console.log(`Full report written to ${JSON_OUT}`);
}
process.exit(CI && errors.length ? 1 : 0);
