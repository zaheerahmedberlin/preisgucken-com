import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Handgelenk richtig messen: So sitzt dein Armband perfekt",
  description: "Charm-Armband, Armreif oder Kette? Handgelenk richtig messen und das passende Material finden.",
  keywords: ["armband kaufen", "armband damen silber", "charm-armband", "armband größe messen", "armreif vs armband"],
  openGraph: {
    title: "Handgelenk richtig messen: So sitzt dein Armband perfekt",
    description: "Charm-Armband, Armreif oder Kette? Handgelenk richtig messen und das passende Material finden.",
    url: "https://www.preisgucken.com/blog/armbaender-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-08-01",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Handgelenk richtig messen: So sitzt dein Armband perfekt" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/armbaender-kaufen-ratgeber" },
  twitter: {
    card: "summary_large_image",
    title: "Handgelenk richtig messen: So sitzt dein Armband perfekt",
    description: "Charm-Armband, Armreif oder Kette? Handgelenk richtig messen und das passende Material finden.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Handgelenk richtig messen: So sitzt dein Armband perfekt",
  datePublished: "2026-08-01",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function ArmbaenderKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Armbänder kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Handgelenk richtig messen: So sitzt dein Armband perfekt</h1>
          <p className="lead text-muted">Charm-Armband, starrer Armreif oder feine Kette – die richtige Passform entscheidet über den Tragekomfort. So triffst du die richtige Wahl.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Armband-Typen im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔗 Kettenarmband</h3>
                <p className="small text-muted mb-0">Flexibel und meist verstellbar, ideal für den täglichen Gebrauch und zum Kombinieren.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⭕ Armreif</h3>
                <p className="small text-muted mb-0">Starr und ohne Verschluss, braucht die passende Innengröße, um über die Hand zu passen.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🎗️ Charm-Armband</h3>
                <p className="small text-muted mb-0">Erweiterbar mit einzelnen Anhängern, beliebt als personalisierbares Geschenk.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Handgelenk richtig messen</h2>
          <ol>
            <li>Ein Maßband oder einen Streifen Papier locker um das Handgelenk legen, dort wo das Armband später sitzen soll</li>
            <li>Den Umfang in Zentimetern notieren</li>
            <li>Für Kettenarmbänder: 1–2 cm für lockeren Sitz hinzurechnen</li>
            <li>Für starre Armreife: die Innengröße muss über die breiteste Stelle der Hand passen – im Zweifel eine Nummer größer wählen</li>
          </ol>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Handgelenkumfang</th><th>Übliche Armbandgröße</th></tr>
              </thead>
              <tbody>
                <tr><td>14–15 cm</td><td>Extra Small (XS)</td></tr>
                <tr><td>15–16 cm</td><td>Small (S)</td></tr>
                <tr><td>16–18 cm</td><td>Medium (M)</td></tr>
                <tr><td>18–20 cm</td><td>Large (L)</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Material & Verträglichkeit</h2>
          <p>Armbänder haben durch den ständigen Hautkontakt am Handgelenk – ähnlich wie Uhren – erhöhten Verschleiß durch Schweiß, Wasser und Reibung. Hypoallergener Edelstahl und Titan sind hier besonders alltagstauglich, während Sterlingsilber und Vermeil eher für seltener getragene Stücke geeignet sind.</p>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Verstellbare Kettenarmbänder passen sich mehreren Handgelenkgrößen an – praktisch als Geschenk, wenn du die genaue Größe nicht kennst. Preisvergleich auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a>.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Armbänder kombinieren</h2>
          <ul>
            <li><strong>Stacking (Stapeln):</strong> mehrere dünne Armbänder in unterschiedlichen Höhen tragen</li>
            <li><strong>Material mischen:</strong> Silber und Gold gemeinsam wirken modern, solange die Stile zueinander passen</li>
            <li><strong>Mit der Uhr abstimmen:</strong> Armband-Material an das Uhrenarmband oder -gehäuse anlehnen</li>
            <li><strong>Nicht überladen:</strong> 2–3 Armbänder pro Handgelenk wirken meist stimmiger als fünf oder mehr</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Armbänder-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Kettenarmbänder, Armreife und Charm-Armbänder aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schmuck" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Armbänder-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
