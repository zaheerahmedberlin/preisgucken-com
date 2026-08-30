import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Die richtige Kettenlänge finden: Choker bis Opernkette erklärt",
  description: "Choker, Layering-Kette oder lange Halskette? So findest du die richtige Länge und das passende Material.",
  keywords: ["halskette kaufen", "kette damen silber", "choker kaufen", "halskette länge tabelle", "anhänger halskette", "layering kette"],
  openGraph: {
    title: "Die richtige Kettenlänge finden: Choker bis Opernkette erklärt",
    description: "Choker, Layering-Kette oder lange Halskette? So findest du die richtige Länge und das passende Material.",
    url: "https://www.preisgucken.com/blog/halsketten-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-08-01",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Die richtige Kettenlänge finden: Choker bis Opernkette erklärt" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/halsketten-kaufen-ratgeber" },
  twitter: {
    card: "summary_large_image",
    title: "Die richtige Kettenlänge finden: Choker bis Opernkette erklärt",
    description: "Choker, Layering-Kette oder lange Halskette? So findest du die richtige Länge und das passende Material.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Die richtige Kettenlänge finden: Choker bis Opernkette erklärt",
  datePublished: "2026-08-01",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function HalskettenKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Halsketten kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Die richtige Kettenlänge finden: Choker bis Opernkette erklärt</h1>
          <p className="lead text-muted">Choker, Princess-Länge oder lange Kette zum Layering – die richtige Länge macht den Unterschied. Unser Ratgeber hilft bei der Wahl.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Kettenlängen-Tabelle</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Länge</th><th>Bezeichnung</th><th>Sitzt auf Höhe von</th></tr>
              </thead>
              <tbody>
                <tr><td>35–40 cm</td><td>Choker</td><td>Direkt am Hals</td></tr>
                <tr><td>40–45 cm</td><td>Princess</td><td>Schlüsselbein</td></tr>
                <tr><td>45–50 cm</td><td>Matinee</td><td>Oberhalb des Dekolletés</td></tr>
                <tr><td>60–70 cm</td><td>Opera</td><td>Brustbereich, oft zum Doppeltragen</td></tr>
                <tr><td>über 90 cm</td><td>Rope/Sautoir</td><td>Bauchnabelhöhe, sehr lang</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Verschlussarten</h2>
          <ul>
            <li><strong>Karabinerverschluss:</strong> robust und einfach zu bedienen, Standard bei den meisten Ketten</li>
            <li><strong>Federringverschluss:</strong> filigraner, oft bei dünnen Ketten verwendet</li>
            <li><strong>Magnetverschluss:</strong> sehr leicht zu schließen, praktisch bei eingeschränkter Fingerfertigkeit</li>
            <li><strong>Verlängerungskettchen:</strong> ermöglicht mehrere Trageslängen mit einer Kette</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Material im Vergleich</h2>
          <p>Wie bei anderem Schmuck gilt: 925er Sterlingsilber und Vermeil bieten die beste Balance aus Optik und Langlebigkeit, hypoallergener Edelstahl punktet bei Alltagstauglichkeit und Preis. Wer die Kette dauerhaft trägt – etwa beim Duschen oder Sport – sollte auf ein anlaufresistentes Material achten.</p>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Feine Ketten in Sets (z. B. drei Layering-Ketten) sind meist günstiger als einzeln gekaufte Modelle. Preise dazu findest du auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a>.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Der Layering-Trend</h2>
          <p>Mehrere Ketten in unterschiedlichen Längen übereinander zu tragen, ist einer der langlebigsten Schmucktrends. Die Grundregel:</p>
          <ol>
            <li><strong>Kürzeste Kette</strong> (Choker) als Basis nah am Hals</li>
            <li><strong>Mittlere Länge</strong> (Princess) mit Anhänger als Blickfang</li>
            <li><strong>Lange Kette</strong> (Opera oder länger) für Tiefe im Look</li>
            <li>Unterschiedliche Kettengliederungen (z. B. Panzerkette + Ankerkette) sorgen für optische Abwechslung</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Halsketten-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Choker, Anhänger und Layering-Sets aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schmuck" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Halsketten-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
