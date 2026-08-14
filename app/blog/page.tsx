import type { Metadata } from "next";
import { BLOG_CATEGORIES, getAllPosts } from "@/lib/blogCategories";

// No manual "| Preisgucken" — see the matching comment in
// app/blog/kategorie/[slug]/page.tsx for why (root layout's title
// template already appends the brand suffix once).
export const metadata: Metadata = {
  title: "Blog: Kaufberatung, Spartipps & Preisvergleich",
  description: "Expertenratgeber rund um Möbel, Elektronik, Schmuck und Sparen: Kaufberatungen, Preisvergleich-Tipps und Schnäppchen-Guides aus Deutschland.",
  alternates: { canonical: "https://www.preisgucken.com/blog" },
  openGraph: {
    title: "Blog – Kaufberatung & Spartipps",
    description: "Expertenratgeber rund um Möbel, Elektronik, Schmuck und Sparen.",
    url: "https://www.preisgucken.com/blog",
    images: [{ url: "https://www.preisgucken.com/logo.png", width: 1536, height: 1024, alt: "Preisgucken Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog – Kaufberatung & Spartipps",
    description: "Expertenratgeber rund um Möbel, Elektronik, Schmuck und Sparen.",
  },
};

export default function BlogPage() {
  const posts = getAllPosts();
  const featured = posts.filter((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: "https://www.preisgucken.com" },
      { "@type": "ListItem", position: 2, name: "Blog", item: "https://www.preisgucken.com/blog" },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container py-5">
        <div className="text-center mb-4">
          <h1 className="fw-bold">Kaufberatung & Spartipps</h1>
          <p className="text-muted">Experten-Ratgeber rund um Möbel, Schmuck, Elektronik und cleveres Sparen</p>
        </div>

        {/* Category hubs — the main "browse by category" entry point for
            both users and Google (internal links to every topic cluster) */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {BLOG_CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`/blog/kategorie/${c.slug}`}
              className="small text-decoration-none px-3 py-2 rounded-pill"
              style={{ background: "var(--pg-blue-light)", color: "var(--pg-blue)", fontWeight: 600 }}
            >
              {c.name} ({c.posts.length})
            </a>
          ))}
        </div>

        {/* Featured Posts */}
        <div className="row g-4 mb-5">
          {featured.map((post) => (
            <div className="col-md-6" key={post.slug}>
              <a href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                <div className="card h-100 p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="tag">{post.category.name}</span>
                    <span className="text-muted small">⏱ {post.readTime}</span>
                  </div>
                  <h2 className="h5 fw-bold mb-2">{post.title}</h2>
                  <p className="text-muted small mb-3">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <small className="text-muted">{post.date}</small>
                    <span className="small fw-semibold" style={{ color: "var(--pg-blue)" }}>Lesen →</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* Rest of posts */}
        <div className="row g-4 mb-5">
          {rest.map((post) => (
            <div className="col-md-4" key={post.slug}>
              <a href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                <div className="card h-100 p-4">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <span className="tag">{post.category.name}</span>
                    <span className="text-muted small">⏱ {post.readTime}</span>
                  </div>
                  <h2 className="h6 fw-bold mb-2">{post.title}</h2>
                  <p className="text-muted small mb-3">{post.excerpt}</p>
                  <div className="d-flex justify-content-between align-items-center mt-auto">
                    <small className="text-muted">{post.date}</small>
                    <span className="small fw-semibold" style={{ color: "var(--pg-blue)" }}>Lesen →</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-5 card">
          <h4 className="fw-bold mb-2">Preise direkt vergleichen</h4>
          <p className="text-muted small mb-3">Setze unsere Ratgeber-Tipps sofort um – über 8.000 Produkte im Preisvergleich.</p>
          <a href="https://www.preisgucken.de" className="btn btn-brand px-4" target="_blank" rel="noopener">Zu preisgucken.de →</a>
        </div>
      </div>
    </>
  );
}
