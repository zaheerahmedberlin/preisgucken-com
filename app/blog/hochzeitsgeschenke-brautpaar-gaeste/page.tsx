import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich",
  description: "Vom Brautkleid über Schmucksets bis zu Gastgeschenken – was für Brautpaar, Gäste und Ausstatter wirklich zählt, mit Preisvergleich.",
  keywords: [
    "brautkleid kaufen",
    "hochzeitsgeschenk ideen",
    "schmuckset hochzeit",
    "partnerring paar",
    "gastgeschenke hochzeit",
    "geschenk zur hochzeit",
    "brautkleid preisvergleich",
  ],
  openGraph: {
    title: "Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich",
    description: "Vom Brautkleid über Schmucksets bis zu Gastgeschenken – was für Brautpaar, Gäste und Ausstatter wirklich zählt.",
    url: "https://www.preisgucken.com/blog/hochzeitsgeschenke-brautpaar-gaeste/",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/hochzeitsgeschenke-brautpaar-gaeste/" },
  twitter: {
    card: "summary_large_image",
    title: "Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich",
    description: "Vom Brautkleid über Schmucksets bis zu Gastgeschenken – was für Brautpaar, Gäste und Ausstatter wirklich zählt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function HochzeitPlanenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Hochzeit planen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Anlässe & Geschenke</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Hochzeit planen: Brautkleid, Schmuck und Geschenke im Preisvergleich</h1>
          <p className="lead text-muted">
            Egal ob du selbst heiratest, als Gast eingeladen bist oder Gastgeschenke für die eigene Feier
            suchst – rund um eine Hochzeit gibt es für fast jede Rolle etwas zu kaufen. Ein Guide nach Anlass,
            nicht nach Budget allein.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Das Brautkleid: Worauf es wirklich ankommt</h2>
          <p>
            Beim Brautkleid entscheidet die Silhouette meist mehr über den Look als der Preis. A-Linie kaschiert
            und passt zu fast jeder Figur, Meerjungfrau-Schnitt betont die Taille, braucht aber die richtige
            Körperhaltung, und der klassische Prinzessinnenschnitt bleibt der Allrounder für große Feiern. Wichtiger
            als der Trend: genug Zeit für mindestens eine Änderungsschneiderei einplanen – Konfektionsgrößen
            passen selten ohne Anpassung perfekt.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Geschenkideen nach Anlass</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👰 Schmuck zum Tragen am großen Tag</h3>
                <p className="small text-muted mb-0">
                  Dreiteilige Schmucksets aus Halskette, Ohrsteckern und Armband – schlicht genug fürs
                  Brautkleid, ohne den Look zu überladen. Deutlich günstiger als Einzelstücke separat zu kaufen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💍 Fürs Brautpaar selbst</h3>
                <p className="small text-muted mb-0">
                  Partnerringe als Paar-Set sind eine beliebte, bezahlbare Alternative oder Ergänzung zu
                  klassischen Eheringen – als Alltagsschmuck statt für den großen Tag selbst.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🎁 Als Hochzeitsgast</h3>
                <p className="small text-muted mb-0">
                  Hochwertige Pralinen in einer echten Geschenkbox wirken persönlicher als eine anonyme
                  Tafel Schokolade – und lassen sich gut mit einem klassischen Umschlag kombinieren.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🍫 Gastgeschenke für Gäste</h3>
                <p className="small text-muted mb-0">
                  Kleine, einzeln verpackte Pralinen-Sets sind der Klassiker unter Gastgeschenken – genug
                  Auswahl an Größen, um auch bei vielen Gästen im Budget zu bleiben.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie unterschiedlich die Preisspannen je nach Anlass ausfallen, zeigt ein Blick in den aktuellen
            Preisvergleich: Brautkleider liegen aktuell zwischen rund <strong>400 €</strong> (Modell{" "}
            <strong>&quot;Wedding 12&quot;</strong>) und <strong>820 €</strong> (Modell <strong>&quot;Poetry 1&quot;</strong>),
            je nach Schnitt und Verarbeitung. Ein dreiteiliges <strong>Schmuckset aus Halskette, Ohrsteckern und
            Armband</strong> für den Auftritt am Hochzeitstag ist schon ab rund <strong>13 €</strong> zu haben. Ein{" "}
            <strong>vergoldeter Partnerring im Paar-Set</strong> gibt es bereits ab rund <strong>38,95 €</strong>{" "}
            für beide Ringe zusammen. Kleine <strong>Venchi Geschenkdosen mit assortierten Pralinen</strong> liegen
            bei etwa <strong>11 €</strong>, während größere <strong>Geschenkkoffer mit Pralinen-Sortiment</strong>{" "}
            für ein Brautpaar-Geschenk bei rund <strong>22-24 €</strong> liegen.
          </p>
          <p className="small text-muted">
            Für Gastgeschenke lohnt sich der Blick auf die kleineren Größen derselben Serie – oft nur wenige
            Euro pro Stück, aber optisch genauso hochwertig wie die großen Geschenkboxen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>Brautkleid früh genug bestellen:</strong> Zwischen Bestellung, Lieferung und Änderungsschneiderei solltest du mindestens 8-12 Wochen einplanen, besser mehr.</li>
            <li><strong>Ringgröße vorher klären:</strong> Bei Partnerringen als Geschenk (nicht als Ehering) lieber auf verstellbare Modelle oder eine Umtauschmöglichkeit achten.</li>
            <li><strong>Material für den Alltag:</strong> Wolfram und Edelstahl sind robuster im Alltag als klassisches Gold – wichtig, wenn der Ring dauerhaft getragen wird.</li>
            <li><strong>Bei Gastgeschenken früh bestellen:</strong> Größere Stückzahlen derselben Serie können je nach Anbieter Lieferzeit brauchen – nicht erst die Woche vor der Feier bestellen.</li>
            <li><strong>Haltbarkeit bei Schokolade prüfen:</strong> Bei Sommerhochzeiten auf Versand mit Kühlung oder kurze Lieferwege achten, damit die Pralinen nicht schmelzen.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Für Gastgeschenke lohnt sich der Preisvergleich pro Stück, nicht
            pro Packung – bei größeren Mengen ist oft eine andere Verpackungsgröße desselben Produkts deutlich
            günstiger pro Gast.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Brautkleider, Schmuck & Pralinen im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Brautkleider, Schmucksets, Partnerringe und Geschenkboxen für jeden Anlass — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/?category=brautkleider,schmuck,suesswaren" className="btn btn-brand px-4" target="_blank" rel="noopener">
            Zum Preisvergleich →
          </a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
