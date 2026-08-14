import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BLOG_CATEGORIES, getCategory, pgUrl } from "@/lib/blogCategories";

const BASE = "https://www.preisgucken.com";

export async function generateStaticParams() {
  return BLOG_CATEGORIES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) return {};
  // No manual "| Preisgucken" here — the root layout's title template
  // already appends "| Preisgucken – Preisvergleich" to every page title,
  // so adding it here too doubled the brand name in every rendered
  // <title> tag (found 2026-08-14 while verifying the same bug's fix on
  // individual blog posts).
  const title = `${category.name}: Ratgeber & Kaufberatung 2026`;
  const description = `${category.description} ${category.posts.length} Experten-Ratgeber mit direktem Preisvergleich.`;
  const socialTitle = `${category.name} – Kaufberatung & Preisvergleich`;
  return {
    title,
    description,
    alternates: { canonical: `${BASE}/blog/kategorie/${category.slug}` },
    // openGraph/twitter fully replace (not merge with) the root layout's
    // defaults once a page defines its own — image has to be repeated
    // here or it's silently dropped, same gap found on individual posts.
    openGraph: {
      title: socialTitle,
      description,
      url: `${BASE}/blog/kategorie/${category.slug}`,
      type: "website",
      images: [{ url: `${BASE}/logo.png`, width: 1536, height: 1024, alt: category.name }],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
    },
  };
}

export default async function BlogCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const category = getCategory(slug);
  if (!category) notFound();

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Startseite", item: BASE },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${BASE}/blog` },
      { "@type": "ListItem", position: 3, name: category.name, item: `${BASE}/blog/kategorie/${category.slug}` },
    ],
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${category.name} – Ratgeber`,
    itemListElement: category.posts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `${BASE}/blog/${p.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />

      <div className="container py-5">
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> ›{" "}
          <a href="/blog" className="text-muted text-decoration-none">Blog</a> › {category.name}
        </nav>

        {/* Category nav — every hub links to every other, for internal linking depth */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          {BLOG_CATEGORIES.map((c) => (
            <a
              key={c.slug}
              href={`/blog/kategorie/${c.slug}`}
              className="small text-decoration-none px-3 py-1 rounded-pill"
              style={
                c.slug === category.slug
                  ? { background: "var(--pg-blue)", color: "#fff", fontWeight: 600 }
                  : { background: "var(--pg-blue-light)", color: "var(--pg-blue)" }
              }
            >
              {c.name}
            </a>
          ))}
        </div>

        <div className="mb-5">
          <h1 className="fw-bold mb-2">{category.name}</h1>
          <p className="text-muted">{category.description}</p>
        </div>

        <div className="row g-4 mb-5">
          {category.posts.map((post) => (
            <div className="col-md-6" key={post.slug}>
              <a href={`/blog/${post.slug}`} className="text-decoration-none text-dark">
                <div className="card h-100 p-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="tag">{category.name}</span>
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

        <div className="text-center p-5 card">
          <h4 className="fw-bold mb-2">{category.name} im Preisvergleich</h4>
          <p className="text-muted small mb-3">
            Setze unsere Ratgeber-Tipps sofort um – vergleiche {category.name.toLowerCase()} aus deutschen Online-Shops.
          </p>
          <a href={pgUrl(category.pgLink)} className="btn btn-brand px-4" target="_blank" rel="noopener">
            Jetzt Preise vergleichen →
          </a>
        </div>
      </div>
    </>
  );
}
