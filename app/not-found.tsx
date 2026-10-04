import type { Metadata } from "next";
import { BLOG_CATEGORIES, getAllPosts } from "@/lib/blogCategories";

// Branded German 404 (replaces Next's default English "404: This page could
// not be found."). Next serves this with a real 404 status and noindex; the
// links give visitors and crawlers a way back into the blog.
export const metadata: Metadata = {
  title: "Seite nicht gefunden",
  description: "Diese Seite gibt es nicht (mehr). Hier geht es zurück zu unseren Ratgebern und zum Preisvergleich.",
};

export default function NotFound() {
  const latest = getAllPosts().slice(0, 5);
  return (
    <main className="container py-5" style={{ maxWidth: 820 }}>
      <p className="text-muted small mb-2">Fehler 404</p>
      <h1 className="brand-heading fw-bold mb-3">Diese Seite gibt es leider nicht</h1>
      <p className="lead text-muted mb-4">
        Der Link ist vielleicht veraltet oder falsch geschrieben. Hier kommst du schnell wieder zurück:
      </p>
      <div className="d-flex flex-wrap gap-2 mb-5">
        <a href="/blog/" className="btn btn-brand px-4">Zu den Ratgebern</a>
        <a href="/" className="btn btn-outline-secondary px-4">Zur Startseite</a>
        <a href="https://www.preisgucken.de" className="btn btn-outline-secondary px-4" target="_blank" rel="noopener">Preise vergleichen auf Preisgucken.de</a>
      </div>

      <h2 className="fw-bold h5 mb-3">Neueste Ratgeber</h2>
      <ul className="mb-5">
        {latest.map((p) => (
          <li key={p.slug}>
            <a href={`/blog/${p.slug}/`}>{p.title}</a>
          </li>
        ))}
      </ul>

      <h2 className="fw-bold h5 mb-3">Nach Thema stöbern</h2>
      <div className="d-flex flex-wrap gap-2">
        {BLOG_CATEGORIES.map((c) => (
          <a key={c.slug} href={`/blog/kategorie/${c.slug}/`} className="btn btn-sm btn-outline-secondary">
            {c.name}
          </a>
        ))}
      </div>
    </main>
  );
}
