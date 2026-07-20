import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: Kaufberatung, Spartipps & Preisvergleich | Preisgucken",
  description: "Expertenratgeber rund um Möbel, Elektronik, Gesundheit und Sparen: Kaufberatungen, Preisvergleich-Tipps und Schnäppchen-Guides aus Deutschland.",
  alternates: { canonical: "https://www.preisgucken.com/blog" },
  openGraph: {
    title: "Blog – Kaufberatung & Spartipps | Preisgucken",
    description: "Expertenratgeber rund um Möbel, Elektronik, Gesundheit und Sparen.",
    url: "https://www.preisgucken.com/blog",
  },
};

const posts = [
  {
    slug: "/blog/boxspringbett-kaufen-ratgeber",
    title: "Boxspringbett kaufen 2026: Der ultimative Ratgeber",
    excerpt: "Welche Größe, Härtegrad und Qualität lohnt sich wirklich? Unser Experten-Ratgeber mit Preisvergleich – spare bis zu 40% beim Kauf.",
    category: "Kaufberatung",
    date: "20. Juli 2026",
    readTime: "8 Min.",
    featured: true,
  },
  {
    slug: "/blog/schnaeppchen-tipps-2026",
    title: "15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro",
    excerpt: "Wie du nie wieder zu viel bezahlst – diese 15 Tricks funktionieren sofort und kosten dich nichts.",
    category: "Spartipps",
    date: "19. Juli 2026",
    readTime: "6 Min.",
    featured: true,
  },
  {
    slug: "/blog/sofa-kaufen-ratgeber",
    title: "Sofa kaufen 2026: Ratgeber für das perfekte Wohnzimmersofa",
    excerpt: "Größe, Form, Stoff – beim Sofakauf gibt es viele Entscheidungen. Wir führen dich Schritt für Schritt zum richtigen Sofa.",
    category: "Kaufberatung",
    date: "17. Juli 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/gesundheitsprodukte-online-kaufen",
    title: "Gesundheitsprodukte online kaufen: Worauf du achten musst",
    excerpt: "Nahrungsergänzungsmittel, Massagegeräte & Co. sicher kaufen – Qualität erkennen, Fakes vermeiden und bis zu 35% sparen.",
    category: "Gesundheit",
    date: "16. Juli 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/preisvergleich-tipps",
    title: "Preisvergleich richtig nutzen: So sparst du bis zu 40%",
    excerpt: "Gleiche Produkte, verschiedene Preise – manchmal bis zu 40% Unterschied. So nutzt du Preisvergleich optimal.",
    category: "Ratgeber",
    date: "15. Juli 2026",
    readTime: "5 Min.",
    featured: false,
  },
];

const categoryColors: Record<string, string> = {
  Kaufberatung: "#1A3A6B",
  Spartipps: "#2a7a4f",
  Gesundheit: "#8b1a1a",
  Ratgeber: "#7a4f00",
};

export default function BlogPage() {
  const featured = posts.filter(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Kaufberatung & Spartipps</h1>
        <p className="text-muted">Experten-Ratgeber rund um Möbel, Elektronik, Gesundheit und cleveres Sparen</p>
      </div>

      {/* Featured Posts */}
      <div className="row g-4 mb-5">
        {featured.map((post, i) => (
          <div className="col-md-6" key={i}>
            <a href={post.slug} className="text-decoration-none text-dark">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="tag" style={{ background: `${categoryColors[post.category]}18`, color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
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
        {rest.map((post, i) => (
          <div className="col-md-4" key={i}>
            <a href={post.slug} className="text-decoration-none text-dark">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="tag" style={{ background: `${categoryColors[post.category]}18`, color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
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
  );
}
