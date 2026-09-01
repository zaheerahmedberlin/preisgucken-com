import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Muttertag-Geschenke: Ideen nach Budget",
  description: "Schmuck, Kosmetik oder Schokolade? Geschenkideen für den Muttertag nach Budget – mit Preisvergleich.",
  keywords: [
    "muttertag geschenk",
    "muttertag geschenkideen",
    "was schenkt man zum muttertag",
    "muttertagsgeschenk günstig",
    "geschenk für mama",
  ],
  openGraph: {
    title: "Muttertag-Geschenke: Ideen nach Budget",
    description: "Geschenkideen für den Muttertag nach Budget – Schmuck, Kosmetik oder Schokolade.",
    url: "https://www.preisgucken.com/blog/muttertag-geschenkideen",
    type: "article",
    publishedTime: "2026-09-01",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Muttertag-Geschenke: Ideen nach Budget" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/muttertag-geschenkideen" },
  twitter: {
    card: "summary_large_image",
    title: "Muttertag-Geschenke: Ideen nach Budget",
    description: "Geschenkideen für den Muttertag nach Budget – Schmuck, Kosmetik oder Schokolade.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Muttertag-Geschenke: Ideen nach Budget",
  datePublished: "2026-09-01",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function MuttertagGeschenkideenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Muttertag-Geschenke
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Geschenkideen</span>
          <h1 className="fw-bold display-6 mb-3">Muttertag-Geschenke: Ideen nach Budget</h1>
          <p className="lead text-muted">
            Es muss nicht das teuerste Geschenk sein — es muss das richtige sein. Ideen für jedes Budget,
            von der kleinen Aufmerksamkeit bis zum besonderen Anlass.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. September 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Geschenkideen nach Budget</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🍫 Bis 10 €: Kleine Aufmerksamkeit</h3>
                <p className="small text-muted mb-0">
                  Eine hochwertige Schokoladentafel oder ein Lippenpflegestift aus natürlicher Kosmetik –
                  klein, aber mit Qualität statt Masse überzeugend.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💍 10-20 €: Schmuck als Klassiker</h3>
                <p className="small text-muted mb-0">
                  Creolen, eine dezente Kette oder ein schlichter Ring – zeitlose Stücke, die zu jedem
                  Anlass passen und nicht aus der Mode kommen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🎁 20-40 €: Kombination aus mehreren Ideen</h3>
                <p className="small text-muted mb-0">
                  Ein Schmuckstück plus eine kleine Süßigkeit, oder ein Kosmetik-Set – die Kombination
                  wirkt oft persönlicher als ein einzelnes teureres Stück.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">✨ Ab 40 €: Etwas Besonderes</h3>
                <p className="small text-muted mb-0">
                  Ein hochwertigeres Schmuckstück oder ein größeres Geschenkset – für runde Geburtstage
                  oder wenn es dieses Jahr etwas mehr sein darf.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich ein stimmiges Geschenk zusammenstellen lässt, zeigt der aktuelle Preisvergleich auf
            Preisgucken.de: <strong>Hoop Circle Earrings</strong> in Gold, Silber oder Roségold liegen bei
            rund <strong>13 €</strong>, ein schlichter <strong>Ring im Wellen-Design</strong> ebenfalls bei
            etwa <strong>13 €</strong>. Dazu passt eine <strong>Mini-Tafel Cremino-Schokolade</strong> für
            rund <strong>3,50 €</strong> oder ein natürlicher <strong>Lippenpflegestift</strong> für etwa{" "}
            <strong>8,50 €</strong> — zusammen ein stimmiges Set unter 25 €.
          </p>
          <p className="small text-muted">
            Auffällig: Die Kombination aus einem kleinen Schmuckstück und einer hochwertigen Süßigkeit
            liegt preislich oft unter einem einzelnen Mittelklasse-Geschenk — wirkt aber durchdachter.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Geschenktypen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Schokolade oder Pralinen</td><td>Kurzfristig, kleines Budget, immer passend</td></tr>
                <tr><td>Schmuck (Ohrringe, Ring, Kette)</td><td>Zeitloses Geschenk, jedes Budget</td></tr>
                <tr><td>Natürliche Kosmetik</td><td>Persönliche, alltagstaugliche Aufmerksamkeit</td></tr>
                <tr><td>Kombination mehrerer kleiner Geschenke</td><td>Persönlicher Eindruck ohne hohes Budget</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>Material bei Schmuck prüfen:</strong> Sterlingsilber oder hypoallergener Edelstahl vertragen empfindliche Haut besser als billige Legierungen.</li>
            <li><strong>Lieferzeit einplanen:</strong> Besonders bei personalisierten Stücken rechtzeitig vor dem Muttertag bestellen.</li>
            <li><strong>Nicht nur auf den Preis schauen:</strong> Ein kleineres, hochwertiges Geschenk wirkt oft persönlicher als ein großes, generisches.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Die Woche vor dem Muttertag ziehen viele Shops die Preise
            an — wer schon 2-3 Wochen vorher bestellt, bekommt Schmuck und Kosmetik oft günstiger als in
            letzter Minute.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Geschenkideen im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Schmuck, Kosmetik und Süßwaren — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/?category=schmuck,kosmetik-beauty,suesswaren" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
