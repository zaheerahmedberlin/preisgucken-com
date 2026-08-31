import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Auto-Zubehör: Dachbox bis Anhängerkupplung",
  description: "Traglast, Kompatibilität und Sicherheitsnormen im Überblick – worauf es bei Auto-Zubehör ankommt.",
  keywords: ["auto zubehör kaufen", "dachbox kaufen ratgeber", "anhängerkupplung nachrüsten", "dachträger traglast", "auto pflegeprodukte ratgeber", "warndreieck verbandskasten pflicht"],
  openGraph: {
    title: "Auto-Zubehör: Dachbox bis Anhängerkupplung",
    description: "Traglast, Kompatibilität und Sicherheitsnormen im Überblick – worauf es bei Auto-Zubehör ankommt.",
    url: "https://www.preisgucken.com/blog/auto-zubehoer-kaufratgeber",
    type: "article",
    publishedTime: "2026-08-19",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Auto-Zubehör: Dachbox bis Anhängerkupplung" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/auto-zubehoer-kaufratgeber" },
  twitter: {
    card: "summary_large_image",
    title: "Auto-Zubehör: Dachbox bis Anhängerkupplung",
    description: "Traglast, Kompatibilität und Sicherheitsnormen im Überblick – worauf es bei Auto-Zubehör ankommt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Auto-Zubehör: Dachbox bis Anhängerkupplung",
  datePublished: "2026-08-19",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function AutoZubehoerKaufratgeberPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Auto-Zubehör kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Auto-Zubehör: Dachbox bis Anhängerkupplung</h1>
          <p className="lead text-muted">Nicht jedes Zubehörteil passt an jedes Auto. Wir zeigen dir, worauf es bei Kompatibilität und Sicherheit wirklich ankommt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Dachbox und Dachträger richtig auswählen</h2>
          <ul>
            <li><strong>Dachlast prüfen:</strong> Die maximale Dachlast steht im Fahrzeugschein – Dachbox-Eigengewicht plus Zuladung dürfen diese nicht überschreiten</li>
            <li><strong>Fahrzeugspezifische Träger:</strong> Universalträger passen selten optimal – fahrzeugspezifische Fußsätze sitzen sicherer und windschlüpfriger</li>
            <li><strong>Volumen realistisch wählen:</strong> 300–400 Liter reichen für die meisten Familienurlaube, größere Boxen erhöhen den Spritverbrauch spürbar</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Anhängerkupplung nachrüsten</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Vorteil</th><th>Hinweis</th></tr>
              </thead>
              <tbody>
                <tr><td>Starre Kupplung</td><td>Günstigste Variante, hohe Stabilität</td><td>Ragt dauerhaft hervor, kann beim Einparken stören</td></tr>
                <tr><td>Abnehmbare Kupplung</td><td>Kann bei Nichtgebrauch entfernt werden</td><td>Etwas teurer, regelmäßige Prüfung der Verriegelung nötig</td></tr>
                <tr><td>Schwenkbare Kupplung</td><td>Elektrisch einklappbar per Knopfdruck</td><td>Höchster Komfort, höchster Preis</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Wichtig: Eine nachgerüstete Anhängerkupplung muss in die Fahrzeugpapiere eingetragen werden – das übernimmt in der Regel die Fachwerkstatt bei der Montage.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Pflegeprodukte, die wirklich helfen</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🧴 Lackversiegelung</h3>
                <p className="small text-muted mb-0">Schützt vor UV-Schäden und erleichtert die Reinigung – Wachs hält Wochen, Keramikversiegelung Monate bis Jahre.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🪑 Innenraumpflege</h3>
                <p className="small text-muted mb-0">Leder benötigt spezielle, rückfettende Pflegemittel – normaler Kunststoffreiniger trocknet Leder auf Dauer aus.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🚿 Hochdruckreiniger</h3>
                <p className="small text-muted mb-0">Praktisch für die Grundreinigung, aber zu hoher Druck kann Dichtungen und Lack beschädigen – Herstellerangaben beachten.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Pflicht-Zubehör nicht vergessen</h2>
          <ul>
            <li><strong>Warndreieck & Warnweste:</strong> In Deutschland gesetzlich vorgeschrieben, mindestens eine Warnweste pro Fahrzeug</li>
            <li><strong>Verbandskasten:</strong> Pflicht mit regelmäßiger Prüfung des Verfallsdatums der Inhalte</li>
            <li><strong>Ersatzglühlampen:</strong> Empfohlen, da ein Lichtausfall unterwegs sonst zum Problem wird</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Sicherheits-Sets mit Warndreieck, Weste und Verbandskasten sind im Bundle meist günstiger als der Einzelkauf der drei Pflichtartikel.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Auto-Zubehör im Preisvergleich</h3>
          <p className="text-muted small mb-3">Dachboxen, Pflegeprodukte und Sicherheitsausstattung aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/auto-fahrzeugzubehoer" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Auto-Zubehör-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
