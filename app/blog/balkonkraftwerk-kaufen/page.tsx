import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Balkonkraftwerk kaufen 2026: Leistung, Speicher & Montage im Überblick | Preisgucken",
  description: "800-Watt-Einspeisegrenze, Speicher ja oder nein, welche Halterung für welchen Montageort – der Kaufguide für Balkonkraftwerke, mit Preisvergleich für Systeme wie Indevolt.",
  keywords: [
    "balkonkraftwerk kaufen",
    "balkonkraftwerk mit speicher",
    "solaranlage balkon",
    "steckersolargerät",
    "balkonkraftwerk 800 watt",
    "indevolt balkonkraftwerk",
    "balkonkraftwerk halterung",
    "solarpanel balkon",
    "balkonkraftwerk preisvergleich",
  ],
  openGraph: {
    title: "Balkonkraftwerk kaufen 2026: Leistung, Speicher & Montage im Überblick",
    description: "800-Watt-Einspeisegrenze, Speicher ja oder nein, die richtige Halterung – der Kaufguide mit Preisvergleich.",
    url: "https://www.preisgucken.com/blog/balkonkraftwerk-kaufen",
    type: "article",
    publishedTime: "2026-08-08",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/balkonkraftwerk-kaufen" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Balkonkraftwerk kaufen 2026: Leistung, Speicher & Montage im Überblick",
  datePublished: "2026-08-08",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function BalkonkraftwerkKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Balkonkraftwerk kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Mit oder ohne Speicher? So wählst du das richtige Balkonkraftwerk</h1>
          <p className="lead text-muted">
            Zwischen dem günstigsten Steckersolargerät und einem System mit Speicher liegen oft mehrere Hundert Euro –
            und nicht jedes Modell passt auf jeden Balkon. Wir zeigen, worauf es bei Leistung, Speicher und Montage
            wirklich ankommt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 8. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Was ein gutes Balkonkraftwerk ausmacht</h2>
          <p>
            Balkonkraftwerke unterscheiden sich stärker als es auf den ersten Blick wirkt – vier Faktoren bestimmen,
            ob sich ein System für deinen Balkon oder dein Dach eignet:
          </p>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚡ Leistung (Watt)</h3>
                <p className="small text-muted mb-0">
                  Die Einspeisegrenze für Steckersolargeräte liegt in Deutschland bei 800 Watt Wechselrichterleistung –
                  die Solarmodule selbst dürfen mehr Peak-Leistung haben, der Wechselrichter deckelt aber die Einspeisung.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔋 Speicher ja oder nein</h3>
                <p className="small text-muted mb-0">
                  Ohne Speicher wird Strom nur genutzt, wenn er direkt erzeugt wird – tagsüber ungenutzter Strom geht
                  ins Netz. Ein Speicher puffert die Energie für den Abend, kostet aber spürbar mehr.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔧 Montageort & Halterung</h3>
                <p className="small text-muted mb-0">
                  Balkongeländer, Flachdach, Schrägdach oder Garten benötigen jeweils eigene Halterungssysteme –
                  die Halterung ist oft nicht im Grundpaket enthalten und muss passend zum Montageort dazugekauft werden.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔌 Wechselrichter-Qualität</h3>
                <p className="small text-muted mb-0">
                  Der Wechselrichter muss nach VDE-AR-N 4105 zertifiziert sein, um netzkonform einzuspeisen –
                  ein Qualitätsmerkmal, das sich direkt auf Sicherheit und Langlebigkeit des Systems auswirkt.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich: Indevolt</h2>
          <p>
            Ein gutes Beispiel für die Bandbreite bei Balkonkraftwerken ist <strong>Indevolt</strong>, aktuell im
            Preisvergleich auf Preisgucken.de. Das Einstiegsmodell <strong>BK1600 Balkonkraftwerk mit Speicher</strong>{" "}
            liegt bei <strong>399 €</strong>, die <strong>BK1600 Ultra</strong>-Variante bei 449 €. Wer mehr Speicher
            will, kann mit Erweiterungsakkus wie dem <strong>SFA1800</strong> (499 €) nachrüsten. Solarmodule gibt es
            separat ab 299 € für ein 2er-Pack, Mikrowechselrichter wie der <strong>Deye M80G4</strong> ab 99 €, und
            Montage-Halterungen für Balkon, Flachdach oder Schrägdach zwischen 49 € und 149 € – je nach Befestigungsart.
          </p>
          <p className="small text-muted">
            Wer bereits Solarmodule oder eine Halterung besitzt, kann bei modularen Systemen wie diesem gezielt nur
            die fehlende Komponente nachkaufen, statt ein komplettes Set zu bezahlen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Systemtypen im Überblick</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Systemtyp</th><th>Worauf du achten solltest</th></tr>
              </thead>
              <tbody>
                <tr><td>Ohne Speicher</td><td>Günstigster Einstieg, Strom muss direkt beim Erzeugen verbraucht werden – lohnt sich bei hohem Tagesverbrauch</td></tr>
                <tr><td>Mit integriertem Speicher</td><td>Puffert Solarstrom für abends, höherer Anschaffungspreis, dafür bessere Eigenverbrauchsquote</td></tr>
                <tr><td>Mit Erweiterungsakku</td><td>Speicherkapazität lässt sich nachträglich erhöhen – sinnvoll, wenn der Verbrauch später steigt</td></tr>
                <tr><td>Halbfeste Module (SolidFlex)</td><td>Flexibel und leicht, ideal für unebene oder empfindliche Montageflächen wie Blechdächer</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Einspeisegrenze prüfen:</strong> Der Wechselrichter darf maximal 800 Watt einspeisen – Systeme mit höherer Modulleistung sind trotzdem zulässig, solange der Wechselrichter das begrenzt.</li>
            <li><strong>Anmeldung nicht vergessen:</strong> Balkonkraftwerke müssen im Marktstammdatenregister angemeldet werden – seit der vereinfachten Regelung reicht das meist ohne Elektriker-Termin.</li>
            <li><strong>Montageort vorher klären:</strong> Balkongeländer, Flachdach und Schrägdach brauchen unterschiedliche Halterungen – vor dem Kauf prüfen, ob die passende Halterung im Set enthalten ist.</li>
            <li><strong>Amortisationszeit realistisch einschätzen:</strong> Bei typischem Verbrauch amortisiert sich ein Balkonkraftwerk je nach Systemgröße und Eigenverbrauch meist innerhalb weniger Jahre.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Wer bereits eine Halterung oder Solarmodule besitzt, sollte gezielt nach
            einzelnen Komponenten statt Komplettsets suchen – bei modularen Systemen lässt sich so oft mehrere Hundert
            Euro sparen.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Balkonkraftwerke im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Vom Einsteiger-Set bis zum Erweiterungsakku – vergleiche Indevolt und weitere Anbieter direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/balkonkraftwerke" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
