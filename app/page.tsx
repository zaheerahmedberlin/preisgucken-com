const latestPosts = [
  {
    slug: "/blog/luxusuhren-kaufen",
    title: "Luxusuhren kaufen 2026: Was den Preis rechtfertigt",
    excerpt: "Material, Limitierung & Fertigung – mit der Dark Matter 4 von Tsarbomba als Beispiel.",
    category: "Kaufberatung",
    date: "4. August 2026",
  },
  {
    slug: "/blog/smartwatch-armband-kaufen-guide",
    title: "Smartwatch Armband kaufen 2026: Material & Größe",
    excerpt: "Apple Watch, Garmin, Samsung oder Fitbit – welches Ersatzarmband passt?",
    category: "Kaufberatung",
    date: "4. August 2026",
  },
  {
    slug: "/blog/uhren-kaufen-ratgeber",
    title: "Uhren kaufen 2026: Automatik, Quarz & Material",
    excerpt: "Automatik oder Quarz? Welches Material hält am längsten?",
    category: "Kaufberatung",
    date: "1. August 2026",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Preisvergleich, Deals & schlau sparen</h1>
          <p className="lead mb-4 opacity-75">
            Kaufberatung, Schnäppchen-Tipps und Preisvergleich-Ratgeber aus Deutschland.
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
