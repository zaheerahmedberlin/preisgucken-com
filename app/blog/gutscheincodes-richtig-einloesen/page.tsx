import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gutscheincodes richtig einlösen: Mindestbestellwert, Ausschlüsse und Ablauf im Überblick",
  description: "Warum ein Rabattcode manchmal nicht funktioniert: Mindestbestellwert, ausgeschlossene Marken und Ablaufzeiten im Überblick, damit du beim nächsten Einkauf wirklich sparst.",
  keywords: [
    "gutscheincode einlösen",
    "rabattcode gültig",
    "gutschein mindestbestellwert",
    "gutschein ausgeschlossene marken",
    "aktuelle gutscheine 2026",
  ],
  openGraph: {
    title: "Gutscheincodes richtig einlösen: Mindestbestellwert, Ausschlüsse und Ablauf im Überblick",
    description: "Warum ein Rabattcode manchmal nicht funktioniert und worauf du vor dem Einlösen achten solltest.",
    url: "https://www.preisgucken.com/blog/gutscheincodes-richtig-einloesen",
    type: "article",
    publishedTime: "2026-08-31",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Gutscheincodes richtig einlösen: Mindestbestellwert, Ausschlüsse und Ablauf im Überblick" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/gutscheincodes-richtig-einloesen" },
  twitter: {
    card: "summary_large_image",
    title: "Gutscheincodes richtig einlösen: Mindestbestellwert, Ausschlüsse und Ablauf im Überblick",
    description: "Warum ein Rabattcode manchmal nicht funktioniert und worauf du vor dem Einlösen achten solltest.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Gutscheincodes richtig einlösen: Mindestbestellwert, Ausschlüsse und Ablauf im Überblick",
  datePublished: "2026-08-31",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function GutscheincodesRichtigEinloesenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Gutscheincodes richtig einlösen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Spartipps</span>
          <h1 className="fw-bold display-6 mb-3">Gutscheincodes richtig einlösen: Mindestbestellwert, Ausschlüsse und Ablauf im Überblick</h1>
          <p className="lead text-muted">
            Code kopiert, im Warenkorb eingefügt — und der Preis ändert sich trotzdem nicht? Meistens liegt es
            nicht am Code selbst, sondern an einer der drei Bedingungen, die fast jeder Gutschein im Kleingedruckten hat.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 31. August 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Wie ein Gutscheincode wirklich aufgebaut ist</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💶 Mindestbestellwert</h3>
                <p className="small text-muted mb-0">
                  Die häufigste Ursache, warum ein Code "nicht funktioniert": Der Warenkorb liegt knapp unter
                  der Schwelle. 10% ab 24€ oder 15% ab 49€ sind typische Staffelungen — ein Blick auf den
                  Warenkorb-Zwischenstand vor dem Einlösen spart Frust.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🚫 Marken- und Kategorieausschlüsse</h3>
                <p className="small text-muted mb-0">
                  Viele Rabattaktionen gelten nicht auf das ganze Sortiment. Premium-Marken, bereits
                  reduzierte Artikel oder bestimmte Produktgruppen sind oft explizit ausgenommen — steht
                  meist in einer längeren Liste direkt unter dem Code.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⏰ Enges Zeitfenster</h3>
                <p className="small text-muted mb-0">
                  "Nur heute" heißt oft wörtlich nur heute — mit einer festen Uhrzeit, zu der der Code
                  offline geht, nicht erst um Mitternacht. Wer abends bestellen will, sollte das Ablaufdatum
                  genau prüfen, nicht nur das Datum.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔗 Nicht kombinierbar</h3>
                <p className="small text-muted mb-0">
                  Die meisten Shops akzeptieren nur einen Code pro Bestellung. Ein Rabattcode und ein
                  Cashback-Portal lassen sich oft trotzdem kombinieren — zwei Gutscheincodes gleichzeitig in
                  der Regel nicht.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Gutschein-Feed</h2>
          <p>
            Wie unterschiedlich Gutscheine in der Praxis aufgebaut sind, zeigen aktuelle Aktionen bei
            Partnern auf Preisgucken.de: Bei <strong>babymarkt.de</strong> laufen zeitgleich mehrere
            gestaffelte Codes — etwa <strong>10% Rabatt ab 24€</strong> und <strong>15% Rabatt ab 49€</strong>{" "}
            Einkaufswert, jeweils mit einer längeren Liste ausgeschlossener Premium-Marken wie Bugaboo,
            Stokke oder Cybex Platinum. Bei <strong>Peter Hahn</strong> gab es zuletzt einen Code, der
            zusätzlich 20% auf bereits reduzierte Sale-Artikel gewährte — kombinierbar mit dem
            Bestandsrabatt, aber nur für wenige Tage gültig. Und bei manchen Shops wie Dowinx läuft parallel
            ein reiner <strong>Fixbetrag-Code</strong> (z. B. 15€ Rabatt ab einem bestimmten Bestellwert), der
            unabhängig von Prozentaktionen funktioniert.
          </p>
          <p className="small text-muted">
            Auffällig: Je großzügiger der Rabatt, desto kürzer meist das Zeitfenster und desto länger die
            Ausschlussliste — ein 25%-Code auf eine einzelne Marke ist selten ein Zufall, sondern gezielte
            Verkaufsförderung für genau dieses Sortiment.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Gutschein-Typen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Prozentualer Rabatt ab Mindestbestellwert</td><td>Größere Bestellungen bündeln, um die Schwelle zu erreichen</td></tr>
                <tr><td>Fixbetrag-Gutschein (z. B. 15€ off)</td><td>Kleinere, gezielte Käufe knapp über dem Schwellenwert</td></tr>
                <tr><td>Marken-spezifischer Code</td><td>Gezielter Kauf innerhalb einer bestimmten Marke</td></tr>
                <tr><td>Sale-Stacking-Code (Extra-% auf Sale)</td><td>Zusätzlicher Rabatt auf bereits reduzierte Ware</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Einlösen achten solltest</h2>
          <ol>
            <li><strong>Ablaufzeit genau prüfen:</strong> Nicht nur das Datum, sondern die genaue Uhrzeit — viele Codes laufen schon am frühen Abend ab, nicht erst um Mitternacht.</li>
            <li><strong>Mindestbestellwert einplanen:</strong> Lohnt es sich, ein zweites Produkt dazuzunehmen, um die Rabattschwelle zu erreichen? Oft macht das den Unterschied zwischen 0% und 15%.</li>
            <li><strong>Markenausschlüsse lesen:</strong> Ein Code auf "das ganze Sortiment" schließt in der Praxis fast immer bestimmte Premium-Marken oder Kategorien aus.</li>
            <li><strong>Nur einen Code pro Bestellung einplanen:</strong> Die meisten Shops akzeptieren keine zwei Gutscheincodes gleichzeitig — vorher entscheiden, welcher sich mehr lohnt.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Statt einzelne Shops nach Codes zu durchsuchen, lohnt sich ein
            Blick auf eine zentrale, laufend aktualisierte Übersicht — so siehst du auf einen Blick, welcher
            Code gerade wirklich gültig ist, statt einen abgelaufenen Code aus einem alten Forenpost zu testen.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Alle aktuellen Gutscheine im Überblick</h3>
          <p className="text-muted small mb-3">
            Laufend aktualisierte, geprüfte Rabattcodes unserer Partner-Shops — direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/gutscheine" className="btn btn-brand px-4" target="_blank" rel="noopener">
            Zu den Gutscheinen →
          </a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
