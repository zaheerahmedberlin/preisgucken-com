import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beschläge & Schlösser kaufen: Material, Maße und Belastbarkeit im Überblick",
  description: "Edelstahl oder beschichteter Stahl, welches Bohrbild passt und worauf es bei Belastbarkeit ankommt – mit Preisvergleich für Treppengeländer, Fenstergriffe und Beschläge.",
  keywords: [
    "beschläge kaufen",
    "möbelbeschläge kaufen ratgeber",
    "türbeschläge material",
    "fenstergriff abschließbar",
    "treppengeländer kaufen",
    "beschläge edelstahl",
  ],
  openGraph: {
    title: "Beschläge & Schlösser kaufen: Material, Maße und Belastbarkeit im Überblick",
    description: "Welches Material und Bohrbild passt, und worauf es bei Belastbarkeit ankommt.",
    url: "https://www.preisgucken.com/blog/beschlaege-schloesser-kaufen",
    type: "article",
    publishedTime: "2026-08-30",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Beschläge & Schlösser kaufen: Material, Maße und Belastbarkeit im Überblick" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/beschlaege-schloesser-kaufen" },
  twitter: {
    card: "summary_large_image",
    title: "Beschläge & Schlösser kaufen: Material, Maße und Belastbarkeit im Überblick",
    description: "Welches Material und Bohrbild passt, und worauf es bei Belastbarkeit ankommt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beschläge & Schlösser kaufen: Material, Maße und Belastbarkeit im Überblick",
  datePublished: "2026-08-30",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function BeschlaegeSchloesserKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Beschläge & Schlösser kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Beschläge & Schlösser kaufen: Material, Maße und Belastbarkeit im Überblick</h1>
          <p className="lead text-muted">
            Ob Fenstergriff, Treppengeländer oder Türbeschlag: Beschläge wirken auf den ersten Blick
            austauschbar, doch Material und Maße entscheiden über Sicherheit und Haltbarkeit. Wir zeigen, worauf es ankommt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 30. August 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welcher Beschlag passt zu deinem Projekt?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🪜 Treppen- &amp; Eingangsgeländer</h3>
                <p className="small text-muted mb-0">
                  Edelstahl-Geländer bieten Witterungsbeständigkeit und hohe Belastbarkeit – die Länge muss
                  exakt zur Treppe bzw. zum Eingangsbereich passen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🪟 Fenstergriffe</h3>
                <p className="small text-muted mb-0">
                  Abschließbare Fenstergriffe erhöhen die Einbruchsicherheit – erhältlich meist im Set für
                  mehrere Fenster, oft günstiger als Einzelkauf.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🚪 Türbeschläge</h3>
                <p className="small text-muted mb-0">
                  Material und Oberfläche (Edelstahl, Messing, Chrom) bestimmen sowohl Optik als auch
                  Korrosionsbeständigkeit – wichtig besonders bei Außentüren.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🗄 Möbelbeschläge</h3>
                <p className="small text-muted mb-0">
                  Scharniere, Verschlüsse und Griffe für Möbel – hier zählt vor allem, dass Bohrbild und
                  Einbautiefe zum vorhandenen Möbelstück passen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich Größe und Material auf den Preis auswirken, zeigt der aktuelle Preisvergleich auf
            Preisgucken.de: Ein <strong>Edelstahl-Treppengeländer</strong> mit 80 cm und 3 Streben liegt bei
            rund <strong>64 €</strong>, mit 4 Streben bei etwa <strong>66 €</strong> – ein längeres{" "}
            <strong>Eingangsgeländer mit 160 cm</strong> kostet rund <strong>67 €</strong>. Ein{" "}
            <strong>2er-Set abschließbare Fenstergriffe</strong> ist bereits ab rund <strong>14 €</strong>
            zu haben, ein <strong>8er-Set</strong> liegt bei etwa <strong>32 €</strong> – pro Griff also
            günstiger im größeren Set.
          </p>
          <p className="small text-muted">
            Auffällig: bei Fenstergriffen lohnt sich das Set fast immer stärker als der Einzelkauf, während
            bei Geländern die Länge (nicht die Streben-Anzahl) den größten Preisunterschied ausmacht.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beschlagtypen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Edelstahl-Geländer</td><td>Außenbereich, hohe Belastung, Witterung</td></tr>
                <tr><td>Abschließbarer Fenstergriff</td><td>Einbruchschutz, besonders im Erdgeschoss</td></tr>
                <tr><td>Türbeschlag (Chrom/Messing)</td><td>Optik-Abstimmung mit vorhandener Tür</td></tr>
                <tr><td>Möbelbeschlag</td><td>Reparatur/Nachrüstung an vorhandenen Möbeln</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Material zum Einsatzort passend wählen:</strong> Edelstahl empfiehlt sich bei Feuchtigkeit oder im Außenbereich, beschichteter Stahl ist für trockene Innenräume oft ausreichend und günstiger.</li>
            <li><strong>Maße vor dem Kauf exakt nachmessen:</strong> Türgewicht, Türhöhe und vorhandenes Bohrbild mit den Herstellerangaben abgleichen – Einbautiefe und Seitenabstand entscheiden über Funktionsspiel und Montagefreiheit.</li>
            <li><strong>Belastbarkeit nicht unterschätzen:</strong> Geländer und stark frequentierte Beschläge sollten geprüfte Festigkeit haben, besonders wenn Kinder oder hohe Nutzungsfrequenz im Spiel sind.</li>
            <li><strong>Oberflächenfarbe zwischen Herstellern vergleichen:</strong> Auch identisch benannte Farbtöne (z. B. Chrom matt) können zwischen Herstellern leicht abweichen – bei Ergänzungskäufen lohnt der direkte Vergleich vor Ort oder anhand von Produktfotos.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Fenstergriffe und ähnliche Kleinbeschläge im Mehrfach-Set zu
            kaufen ist fast immer günstiger pro Stück als der Einzelkauf – besonders wenn ohnehin mehrere
            Fenster im Haus betroffen sind.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Beschläge & Schlösser im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von Fenstergriff bis Treppengeländer — vergleiche Beschläge direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/beschlaege-schloesser" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
