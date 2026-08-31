import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Werkstatt ausstatten: Was du brauchst",
  description: "Womit du deine Werkstatt sinnvoll ausstattest, ohne unnötig Geld auszugeben – mit Preisvergleich.",
  keywords: [
    "werkstatt ausstatten",
    "werkzeug set kaufen",
    "handwerkzeug grundausstattung",
    "elektrowerkzeug kaufen",
    "arbeitsschutz kaufen",
    "werkzeugkoffer grundausstattung",
    "heimwerker werkzeug set",
    "akkuschrauber vergleich",
    "werkstatt grundausstattung für heimwerker",
  ],
  openGraph: {
    title: "Werkstatt ausstatten: Was du brauchst",
    description: "Womit du deine Werkstatt sinnvoll ausstattest, ohne unnötig Geld auszugeben – mit Preisvergleich.",
    url: "https://www.preisgucken.com/blog/werkstatt-ausstattung-was-du-wirklich-brauchst",
    type: "article",
    publishedTime: "2026-08-14",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Werkstatt ausstatten: Was du brauchst" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Werkstatt ausstatten: Was du brauchst",
    description: "Womit du deine Werkstatt sinnvoll ausstattest, ohne unnötig Geld auszugeben – mit Preisvergleich.",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/werkstatt-ausstattung-was-du-wirklich-brauchst" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Werkstatt ausstatten: Was du brauchst",
  datePublished: "2026-08-14",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function WerkstattAusstattungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Werkstatt ausstatten
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Werkstatt ausstatten: Was du brauchst</h1>
          <p className="lead text-muted">
            Ein voller Werkzeugkoffer ist schnell gekauft – aber nicht jedes Teil darin wird auch wirklich
            gebraucht. Wir zeigen, welche Werkstatt-Grundausstattung sich für Heimwerker wirklich lohnt und
            wo du am Anfang getrost sparen kannst.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 14. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die fünf Grundbereiche einer Werkstatt</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔧 Handwerkzeug</h3>
                <p className="small text-muted mb-0">
                  Schraubendreher-Set, Steckschlüssel, Zangen und eine gute Wasserwaage decken den Großteil
                  aller Alltagsreparaturen ab – hier lohnt sich Qualität, weil du diese Werkzeuge am häufigsten nutzt.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚡ Elektrowerkzeug</h3>
                <p className="small text-muted mb-0">
                  Eine Akku-Bohrschrauber-Kombi deckt für die meisten Heimwerker 80 % aller Anwendungen ab –
                  Spezialgeräte wie Schlagbohrmaschinen erst bei konkretem Bedarf dazukaufen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🦺 Arbeitsschutz</h3>
                <p className="small text-muted mb-0">
                  Schutzbrille, Arbeitshandschuhe und Sicherheitsschuhe sind keine Kür, sondern die Basis –
                  gerade beim Arbeiten mit Elektrowerkzeug oder auf der Leiter.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">📏 Messwerkzeuge</h3>
                <p className="small text-muted mb-0">
                  Ein gutes Bandmaß und ein Wasserwaage-Set reichen für die meisten Projekte – ein
                  Laser-Entfernungsmesser lohnt sich erst bei größeren oder wiederkehrenden Vorhaben.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit das Angebot ist, zeigt sich im Preisvergleich auf Preisgucken.de: Ein 6-teiliges
            Schraubendreher-Set gibt es dort bereits ab rund <strong>23 €</strong>, ein einzelner
            hochwertiger Sechskant-Schraubendreher mit Quergriff ab etwa <strong>9 €</strong>. Bei der
            Arbeitsschutz-Ausstattung liegen Sicherheitsschuhe der Klasse S1P meist zwischen
            <strong> 100 € und 130 €</strong>, Arbeitshandschuhe schon ab rund <strong>10 €</strong> pro Paar.
            Markenwerkzeug von Bosch, Makita, Metabo, Wera oder Gedore ist durchgehend vertreten – von
            einzelnen Bohrern für unter <strong>15 €</strong> bis zu professionellem Elektrowerkzeug im
            höheren dreistelligen Bereich.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Werkstatt-Grundausstattung für Heimwerker im Überblick</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Bereich</th><th>Sinnvoll für den Einstieg</th></tr>
              </thead>
              <tbody>
                <tr><td>Handwerkzeug</td><td>Schraubendreher-Set, Steckschlüssel, Zangen, Wasserwaage</td></tr>
                <tr><td>Elektrowerkzeug</td><td>Akku-Bohrschrauber mit zwei Akkus</td></tr>
                <tr><td>Arbeitsschutz</td><td>Schutzbrille, Arbeitshandschuhe, Sicherheitsschuhe</td></tr>
                <tr><td>Messwerkzeuge</td><td>Bandmaß, kleine Wasserwaage</td></tr>
                <tr><td>Werkstattbedarf</td><td>Klebeband, Schmiermittel, Aufbewahrungsboxen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Erst Bedarf, dann Marke:</strong> Ein günstiges Set reicht für gelegentliche Reparaturen oft völlig aus – Profi-Werkzeug lohnt sich erst bei regelmäßiger, intensiver Nutzung.</li>
            <li><strong>Akku-System bedenken:</strong> Bleibst du bei einer Marke, passen Akkus zwischen mehreren Geräten – das spart auf Dauer Geld.</li>
            <li><strong>Arbeitsschutz nicht als letztes einplanen:</strong> Schutzausrüstung wird oft vergessen, ist aber Teil der Grundausstattung, nicht optionales Zubehör.</li>
            <li><strong>Preisvergleich nutzen:</strong> Gerade bei Verbrauchsmaterial wie Bohrern, Bits oder Schleifpapier lohnt sich ein Vergleich, da hier die Preisunterschiede zwischen Anbietern besonders groß sind.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Einzelne, hochwertige Handwerkzeuge wie Schraubendreher oder
            Zangen halten oft jahrzehntelang – hier lohnt sich die Investition in Qualität eher als bei
            Elektrowerkzeug, das ohnehin schneller technisch veraltet.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Werkzeug & Heimwerken im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von Handwerkzeug bis Arbeitsschutz – vergleiche Werkzeug direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/werkzeug-heimwerken" className="btn btn-brand px-4" target="_blank" rel="noopener">
            Zum Preisvergleich →
          </a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
