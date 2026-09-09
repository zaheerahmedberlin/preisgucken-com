const latestPosts = [
  {
    slug: "/blog/parfuem-kaufen-edt-edp-guide/",
    title: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
    excerpt: "Eau de Toilette, Eau de Parfum oder Parfum Extrait – was den Preisunterschied wirklich erklärt.",
    category: "Kosmetik & Beauty",
    date: "9. September 2026",
  },
  {
    slug: "/blog/hochzeitsgeschenke-brautpaar-gaeste/",
    title: "Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich",
    excerpt: "Vom Brautkleid über Schmucksets bis zu Gastgeschenken – was für Brautpaar, Gäste und Ausstatter wirklich zählt.",
    category: "Anlässe & Geschenke",
    date: "9. September 2026",
  },
  {
    slug: "/blog/grill-kaufen-gas-kohle-elektro-guide/",
    title: "Grill kaufen: Gas, Kohle oder Elektro? Der Grilltyp-Guide",
    excerpt: "Rauchgeschmack, Anzündzeit und Balkon-Tauglichkeit im Vergleich – welcher Grilltyp wirklich zu dir passt.",
    category: "Möbel & Wohnen",
    date: "9. September 2026",
  },
];

export default function Home() {
  return (
    <>
      <section className="hero text-center">
        <div className="container">
          <h1 className="brand-heading-light display-5 fw-bold mb-3">Preisvergleich, Deals & schlau sparen</h1>
          <p className="brand-body lead mb-4 opacity-75">
            Kaufberatung, Schnäppchen-Tipps und Preisvergleich-Ratgeber aus Deutschland.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/blog/" className="btn btn-light btn-lg px-4 fw-semibold">Zum Blog</a>
            <a href="https://www.preisgucken.de" className="btn btn-outline-light btn-lg px-4" target="_blank" rel="noopener">Preise vergleichen →</a>
          </div>
        </div>
      </section>

      {/* Latest blog posts */}
      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2 className="fw-bold h5 mb-0">Aktuelle Ratgeber & Tipps</h2>
          <a href="/blog/" className="small text-decoration-none" style={{ color: "var(--pg-blue)" }}>Alle Artikel →</a>
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
              <a href="/blog/" className="btn btn-brand btn-sm mt-auto d-inline-block">Alle Artikel lesen →</a>
            </div>
          </div>
          <div className="col-md-5">
            <div className="card h-100 p-4">
              <div className="fs-2 mb-3">💰</div>
              <h3 className="h5 fw-bold">Preise vergleichen</h3>
              <p className="text-muted small">Tausende Produkte im Preisvergleich auf preisgucken.de – kostenlos und ohne Anmeldung.</p>
              <a href="https://www.preisgucken.de" className="btn btn-brand btn-sm mt-auto d-inline-block" target="_blank" rel="noopener">Zu preisgucken.de →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
