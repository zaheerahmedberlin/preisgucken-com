# SEO tooling for preisgucken.com

Small, dependency-free helpers (Node 18+). Nothing here publishes anything:
you review and merge every change yourself.

## Audit — `npm run seo:audit`

Crawls every URL in the sitemap of a **running** site and checks on-page SEO.

```bash
npm run build && npm start &              # start the site
npm run seo:audit                         # audits http://localhost:3000
npm run seo:audit -- --base https://www.preisgucken.com   # audit production
npm run seo:audit -- --ci --json report.json              # exit 1 on errors
```

**Errors** (block the PR in CI): HTTP errors, missing/duplicate title or
description, not exactly one `<h1>`, wrong canonical, noindex pages in the
sitemap, images without `alt`, invalid JSON-LD, `FAQPage` answers that are not
visible on the page, broken internal links, unknown URLs that do not return 404.

**Warnings** (listed, never block): thin posts (< 600 words), bare title over
50 characters, description length, no FAQ, no visible date, few headings,
orphan-ish posts (fewer than two internal links), internal links that redirect,
images without width/height, statistics without a linked source, identical
sitemap `lastmod`.

The GitHub Action `.github/workflows/seo-audit.yml` runs the audit on every
pull request to `main`.

## Content gaps — `npm run seo:gaps`

Tells you what to write or deepen next. It combines the preisgucken.de
categories and their product counts (public pages, read-only, cached 24 h in
`tools/seo/.cache/`), what the blog already covers (`pgLink` plus category words
in post titles/keywords), and optionally Search Console and the audit.

```bash
npm run seo:gaps                                   # categories without a post
npm run seo:audit -- --json /tmp/report.json       # (site must be running)
npm run seo:gaps -- --audit /tmp/report.json --gsc ~/Downloads/gsc --top 20 --out gaps.md
```

`--gsc` is a folder with the CSVs from Search Console (Performance > Export >
Download CSV): `Queries.csv` and/or `Pages.csv`. With them the report adds
posts to deepen ranked by impressions, striking-distance queries (position
8–40) mapped to the best matching post, and queries that need a new post.

A report is a plan, not an article: before writing, check the real search
results for intent, use only facts you can source, and never add statistics
without a linked source (the audit warns about those).
