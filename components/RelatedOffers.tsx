"use client";

import { usePathname } from "next/navigation";
import { getPost, getCategory, pgUrl } from "@/lib/blogCategories";
import { PG_CATEGORY_NAMES } from "@/lib/pgCategoryNames";

// Rendered once from app/blog/layout.tsx so every post gets the same
// "Passende Angebote" block without touching each post's page.tsx. It renders
// nothing on the blog index and category hub pages (no matching post slug).
export default function RelatedOffers() {
  const pathname = usePathname() ?? "";
  const match = pathname.match(/^\/blog\/([^/]+)\/?$/);
  const post = match ? getPost(match[1]) : undefined;
  if (!post) return null;

  const offerLinks = post.pgLink
    .split(",")
    .map((s) => s.trim())
    .filter((s) => PG_CATEGORY_NAMES[s])
    .map((s) => ({ href: pgUrl(s), label: `${PG_CATEGORY_NAMES[s]} im Preisvergleich` }));

  const related = (getCategory(post.category.slug)?.posts ?? [])
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  if (offerLinks.length === 0 && related.length === 0) return null;

  return (
    <aside className="container pb-5" style={{ maxWidth: 820 }} aria-label="Passende Angebote und weitere Ratgeber">
      {offerLinks.length > 0 && (
        <div className="card p-4 mb-4" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h2 className="h5 fw-bold mb-3">Passende Angebote</h2>
          <ul className="mb-0">
            {offerLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      {related.length > 0 && (
        <div>
          <h2 className="h5 fw-bold mb-3">Weitere Ratgeber: {post.category.name}</h2>
          <ul className="mb-0">
            {related.map((p) => (
              <li key={p.slug}>
                <a href={`/blog/${p.slug}/`}>{p.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
