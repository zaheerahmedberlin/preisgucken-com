<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Blog post metadata length

Every post's `<title>` gets " | Preisgucken – Preisvergleich" appended by the
root layout (31 characters) — that's not optional, don't try to omit it.
Found 2026-08-31: a sample of 16 existing posts averaged 96 characters for
the full title (up to 119) and many exceeded 160 for the description, both
well past what Google reliably shows before truncating with "…" in search
results — losing the actual hook of the title right when it matters most.

For **new** posts going forward:
- Full `<title>` (post title + the 31-char brand suffix): keep to **≤70
  characters**, hard cap 75. That leaves roughly 35-40 characters for the
  post-specific part — enough for a real hook ("Original oder kompatibel?"
  is 25), not enough for a full compound sentence.
- `description` (both the plain meta description and openGraph/twitter
  variants): keep to **≤155 characters**, hard cap 160.
- Existing posts are intentionally left as-is — this only applies when
  writing a new post's `page.tsx`, not as a retroactive cleanup task.
