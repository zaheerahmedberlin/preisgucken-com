const latestPosts = [
  {
    slug: "/blog/boxspringbett-kaufen-ratgeber",
    title: "Boxspringbett kaufen 2026: Der ultimative Ratgeber",
    excerpt: "Welche Größe, Härtegrad und Qualität lohnt sich wirklich?",
    category: "Kaufberatung",
    date: "20. Juli 2026",
  },
  {
    slug: "/blog/schnaeppchen-tipps-2026",
    title: "15 Schnäppchen-Tipps 2026",
    excerpt: "Wie du nie wieder zu viel bezahlst – 15 Tricks die sofort funktionieren.",
    category: "Spartipps",
    date: "19. Juli 2026",
  },
  {
    slug: "/blog/sofa-kaufen-ratgeber",
    title: "Sofa kaufen: Ratgeber 2026",
    excerpt: "Größe, Stoff, Budget – Schritt für Schritt zum richtigen Sofa.",
    category: "Kaufberatung",
    date: "17. Juli 2026",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Deals finden. Schlau sparen.</h1>
          <p className="lead mb-4 opacity-75">
            Kaufberatung, Schnäppchen-Tipps und Preisvergleiche aus Deutschland.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/blog" className="btn btn-light btn-lg px-4 fw-semibold">Zum Blog</a>
            <a href="https://www.preisgucken.de" className="btn btn-outline-light btn-lg px-4" target="_blank" rel="noopener">Preise vergleichen →</a>
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold h5 mb-0">Aktuelle Ratgeber & Tipps</h2>
          <a href="/blog" className="small text-decoration-none" style={{ color: "var(--pg-blue)" }}>Alle Artikel →</a>
        </div>
        <div className="row g-4">
          {latestPosts.map((post, i) => (
            <div className="col-md-4" key={i}>
              <a href={post.slug} className="text-decoration-none text-dark">
                <div className="card h-100 p-4">
                  <span className="tag mb-2 d-inline-block">{post.category}</span>
                  <h3 className="h6 fw-bold mb-2">{post.title}</h3>
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
      </section>

      {/* Feature blocks */}
      <section className="container pb-5">
        <div className="row g-4 justify-content-center">
          <div className="col-md-5">
            <div className="card h-100 p-4">
              <div className="fs-2 mb-3">📝</div>
              <h3 className="h5 fw-bold">Kaufberatung & Tipps</h3>
              <p className="text-muted small">Welches Produkt lohnt sich wirklich? Unsere Artikel helfen dir, die beste Entscheidung zu treffen.</p>
              <a href="/blog" className="btn btn-brand btn-sm mt-auto d-inline-block">Alle Artikel lesen →</a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card h-100 p-4">
              <div className="fs-2 mb-3">💰</div>
              <h3 className="h5 fw-bold">Preise vergleichen</h3>
              <p className="text-muted small">Über 8.000 Produkte im Preisvergleich auf preisgucken.de – kostenlos und ohne Anmeldung.</p>
              <a href="https://www.preisgucken.de" className="btn btn-brand btn-sm mt-auto d-inline-block" target="_blank" rel="noopener">Zu preisgucken.de →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
