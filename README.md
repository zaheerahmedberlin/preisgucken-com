# preisgucken.com

SEO blog ("Ratgeber") for [preisgucken.de](https://www.preisgucken.de). Next.js 16 (App Router, TypeScript).

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build — run before pushing
```

## Adding a blog post

1. Create `app/blog/{slug}/page.tsx` (copy an existing post).
2. Add the post to the right category in `lib/blogCategories.ts` — the blog index, category hubs and sitemap update from it.
3. Optional: add FAQs for the post in `lib/blogFaqs.ts`.

The "Passende Angebote" and FAQ blocks are rendered for every post by `app/blog/layout.tsx`.

## Deployment

Production runs on a netcup VPS. Push feature work to `develop`; merging into `main` triggers `.github/workflows/deploy.yml`, which deploys over SSH and restarts the `preisgucken-com` systemd service.
