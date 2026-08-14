import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden",
  description: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück – mit Preisvergleich.",
  keywords: ["schmuck kaufen", "schmuck online kaufen", "925 sterlingsilber", "hypoallergener schmuck", "hochwertigen schmuck erkennen", "schmuck qualität"],
  openGraph: {
    title: "Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden",
    description: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück.",
    url: "https://www.preisgucken.com/blog/schmuck-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-08-01",
    images: [{ url: "https://www.preisgucken.com/logo.png", width: 1536, height: 1024, alt: "Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/schmuck-kaufen-ratgeber" },
  twitter: {
    card: "summary_large_image",
    title: "Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden",
    description: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden",
  datePublished: "2026-08-01",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function SchmuckKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Schmuck kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden</h1>
          <p className="lead text-muted">925er Sterlingsilber, hypoallergener Edelstahl oder vergoldet – welches Material hält, was es verspricht? Der Grundlagen-Ratgeber für alle Schmuckstücke.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Materialkunde für Schmuckstücke</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Material</th><th>Merkmale</th><th>Preisniveau</th></tr>
              </thead>
              <tbody>
                <tr><td>925er Sterlingsilber</td><td>92,5% Feinsilber, glänzend, kann anlaufen</td><td>Mittel</td></tr>
                <tr><td>Hypoallergener Edelstahl</td><td>Läuft nicht an, sehr hautverträglich, robust</td><td>Günstig bis mittel</td></tr>
                <tr><td>Vergoldet (Gold-Plated)</td><td>Dünne Goldschicht auf Basismetall, edle Optik</td><td>Günstig bis mittel</td></tr>
                <tr><td>Vermeil</td><td>Dickere Goldschicht auf Sterlingsilber, langlebiger als normal vergoldet</td><td>Mittel bis hoch</td></tr>
                <tr><td>Echtgold (333–750)</td><td>Läuft nie an, sehr langlebig, hoher Materialwert</td><td>Hoch</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Qualitätsmerkmale erkennen</h2>
          <ul>
            <li><strong>Stempelung suchen:</strong> Echtes Silber trägt meist einen "925"-Stempel, Gold eine Karat- oder Feingehaltsangabe</li>
            <li><strong>Verarbeitung prüfen:</strong> Saubere Lötstellen, gleichmäßige Oberfläche, kein sichtbarer Grat</li>
            <li><strong>Verschluss testen:</strong> Ein guter Karabiner- oder Federringverschluss lässt sich leicht öffnen, sitzt aber fest</li>
            <li><strong>Steine prüfen:</strong> Bei Zirkonia oder Glassteinen auf saubere Fassung achten, keine wackelnden Steine</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Allergien vermeiden</h2>
          <p>Nickelallergien sind einer der häufigsten Gründe für Hautreaktionen bei Modeschmuck. Wer empfindliche Haut hat, sollte auf folgende Angaben achten:</p>
          <div className="alert alert-info small">
            💡 <strong>Achte auf:</strong> "nickelfrei", "hypoallergen" oder "chirurgischer Edelstahl" (Surgical Steel) in der Produktbeschreibung – diese Materialien verursachen bei den meisten Menschen keine Hautreaktionen, auch bei Dauertragen wie Ohrringen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Schmuck nach Anlass wählen</h2>
          <ul>
            <li><strong>Alltag:</strong> Robuste, hypoallergene Materialien wie Edelstahl – hält Duschen und Sport aus</li>
            <li><strong>Büro:</strong> Dezente Stücke in Silber oder Vermeil, keine zu großen Statement-Teile</li>
            <li><strong>Festliche Anlässe:</strong> Sterlingsilber oder Echtgold mit Steinbesatz für mehr Glanz</li>
            <li><strong>Geschenke:</strong> Vermeil oder Echtgold gelten als besonders wertig und langlebig</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Pflegetipps für langen Glanz</h2>
          <ol>
            <li><strong>Erst nach Make-up und Parfüm anlegen</strong> – Chemikalien beschleunigen das Anlaufen</li>
            <li><strong>Vor dem Duschen und Schwimmen abnehmen</strong>, besonders bei Silber und vergoldeten Stücken</li>
            <li><strong>Trocken und einzeln lagern</strong>, idealerweise in einem Schmuckbeutel, um Kratzer zu vermeiden</li>
            <li><strong>Mit einem weichen Tuch polieren</strong> statt aggressiver Reiniger zu verwenden</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Schmuck-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Ohrringe, Ketten, Armbänder, Ringe und Sets aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schmuck" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Schmuck-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
