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
