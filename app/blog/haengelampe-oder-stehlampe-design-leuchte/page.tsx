import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte",
  description: "Hängelampe, Stehlampe oder Wandlampe: Welcher Leuchtentyp für welchen Raum passt und worauf du bei Design-Lampen achten solltest, mit Preisvergleich für ausgefallene Wohnaccessoires.",
  keywords: [
    "hängelampe kaufen",
    "stehlampe design",
    "wandlampe kaufen",
    "design lampe wohnzimmer",
    "esstisch hängelampe",
    "ausgefallene lampen kaufen",
    "led leuchtmittel dimmbar",
    "designerlampe kaufen",
    "welche stehlampe passt ins wohnzimmer",
  ],
  openGraph: {
    title: "Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte",
    description: "Welcher Leuchtentyp für welchen Raum passt und worauf du bei Design-Lampen achten solltest.",
    url: "https://www.preisgucken.com/blog/haengelampe-oder-stehlampe-design-leuchte",
    type: "article",
    publishedTime: "2026-08-14",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte",
    description: "Welcher Leuchtentyp für welchen Raum passt und worauf du bei Design-Lampen achten solltest.",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/haengelampe-oder-stehlampe-design-leuchte" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte",
  datePublished: "2026-08-14",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function HaengelampeStehlampePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Hängelampe oder Stehlampe
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte</h1>
          <p className="lead text-muted">
            Eine gute Lampe verändert einen Raum mehr als fast jedes andere Möbelstück – aber nicht jeder
            Leuchtentyp passt zu jedem Einsatzort. Wir zeigen, welche Leuchte wohin gehört und worauf du bei
            Design-Lampen wirklich achten solltest.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 14. August 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welcher Leuchtentyp passt zu welchem Raum?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💡 Hängelampe</h3>
                <p className="small text-muted mb-0">
                  Ideal über dem Esstisch oder in der Küche – eine Hängelampe schafft gezielte Beleuchtung
                  und wird zum optischen Mittelpunkt des Raums, statt nur Licht zu spenden.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🕯️ Stehlampe</h3>
                <p className="small text-muted mb-0">
                  Flexibel positionierbar und ideal für indirektes Licht in der Wohnzimmerecke oder neben dem
                  Sofa – ohne dass Bohrlöcher oder feste Anschlüsse nötig sind. Welche Stehlampe ins Wohnzimmer
                  passt, hängt vor allem von Raumgröße und Deckenhöhe ab: Schlanke Bogenlampen wirken über dem
                  Sofa, während bodenstehende Stehleuchten mit breiterem Fuß in größeren Räumen besser
                  proportioniert sind.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🐸 Wandlampe</h3>
                <p className="small text-muted mb-0">
                  Spart Stellfläche und eignet sich besonders für Flure, Kinderzimmer oder als verspieltes
                  Detail – gerade Tierform-Wandlampen sind ein beliebtes Statement-Piece.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🖥️ Schreibtischlampe</h3>
                <p className="small text-muted mb-0">
                  Für den Arbeitsplatz zählt vor allem blendfreies, gut fokussierbares Licht – Design ist hier
                  Zusatz, nicht Hauptkriterium.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie vielseitig das Angebot an Design-Leuchten ist, zeigt sich im Preisvergleich auf Preisgucken.de:
            Kleinere Hängelampen-Sets gibt es bereits ab rund <strong>43 €</strong>, eine einzelne
            Design-Hängelampe meist zwischen <strong>50 € und 70 €</strong>. Aufwendigere Kollektionsstücke mit
            mehreren Schirmen oder XL-Varianten liegen dagegen zwischen <strong>210 € und 345 €</strong>. Auch
            verspielte Wandlampen in Tierform sind Teil des Sortiments, ebenso wie einzelne
            <strong> LED-Leuchtmittel</strong> ab rund <strong>7 €</strong>, falls nur der Leuchtkörper
            selbst getauscht werden soll.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Leuchtentypen im Überblick</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Hängelampe</td><td>Esstisch, Küche, Raummitte als Blickfang</td></tr>
                <tr><td>Stehlampe</td><td>Wohnzimmerecke, Leseecke, flexible Platzierung</td></tr>
                <tr><td>Wandlampe</td><td>Flur, Kinderzimmer, platzsparende Akzentbeleuchtung</td></tr>
                <tr><td>Schreibtischlampe</td><td>Arbeitsplatz, fokussiertes Licht</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Farbtemperatur beachten:</strong> Warmweißes Licht (rund 2700K) wirkt gemütlicher, während kühleres Licht eher für Arbeitsbereiche geeignet ist.</li>
            <li><strong>Dimmbarkeit prüfen:</strong> Nicht jede Design-Leuchte ist automatisch dimmbar – bei Bedarf vorab in der Produktbeschreibung nachsehen.</li>
            <li><strong>Kabellänge und Aufhängehöhe:</strong> Gerade bei Hängelampen über dem Esstisch entscheidet die richtige Höhe über Wirkung und Blendfreiheit.</li>
            <li><strong>Preisvergleich nutzen:</strong> Bei Design-Leuchten schwanken die Preise zwischen Anbietern oft deutlich – ein Vergleich lohnt sich besonders bei größeren Kollektionsstücken.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Mini-Versionen großer Lampenkollektionen kosten oft nur einen
            Bruchteil der XL-Variante und wirken in kleineren Räumen ohnehin stimmiger.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Leuchten im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von Hängelampen bis Wandlampen – vergleiche Design-Leuchten direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/leuchten" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
