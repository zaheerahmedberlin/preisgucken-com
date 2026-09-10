import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Babyschlafsack kaufen: Welcher TOG-Wert für welche Jahreszeit?",
  description: "0.5, 1.0 oder 2.5 TOG – wie der TOG-Wert mit Raumtemperatur zusammenhängt und wie viele Schlafsäcke du wirklich brauchst, mit Preisvergleich.",
  keywords: [
    "babyschlafsack tog wert",
    "schlafsack baby jahreszeit",
    "welcher tog wert schlafsack",
    "sommerschlafsack winterschlafsack",
    "babyschlafsack kaufen",
    "ganzjahresschlafsack baby",
  ],
  openGraph: {
    title: "Babyschlafsack kaufen: Welcher TOG-Wert für welche Jahreszeit?",
    description: "0.5, 1.0 oder 2.5 TOG – wie der TOG-Wert mit Raumtemperatur zusammenhängt und wie viele Schlafsäcke du wirklich brauchst.",
    url: "https://www.preisgucken.com/blog/babyschlafsack-tog-wert-guide/",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Babyschlafsack kaufen: Welcher TOG-Wert für welche Jahreszeit?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/babyschlafsack-tog-wert-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Babyschlafsack kaufen: Welcher TOG-Wert für welche Jahreszeit?",
    description: "0.5, 1.0 oder 2.5 TOG – wie der TOG-Wert mit Raumtemperatur zusammenhängt und wie viele Schlafsäcke du wirklich brauchst.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Babyschlafsack kaufen: Welcher TOG-Wert für welche Jahreszeit?",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function BabyschlafsackTogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Babyschlafsack kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Familie & Kinder</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Babyschlafsack kaufen: Welcher TOG-Wert für welche Jahreszeit?</h1>
          <p className="lead text-muted">
            Der TOG-Wert auf jedem Babyschlafsack ist keine Marketing-Zahl, sondern die Wärmeleistung des
            Materials – und entscheidet direkt darüber, ob dein Baby nachts zu warm oder zu kalt schläft.
            Wichtiger als Marke oder Muster.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Was der TOG-Wert eigentlich bedeutet</h2>
          <p>
            TOG (Thermal Overall Grade) misst die Wärmeisolierung eines Materials – je höher die Zahl, desto
            wärmer der Schlafsack. Da Babys ihre Körpertemperatur schlechter selbst regulieren als Erwachsene,
            ersetzt der richtige Schlafsack die Bettdecke komplett und sollte zur Raumtemperatur im
            Schlafzimmer passen, nicht zur Jahreszeit allein.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">TOG-Werte nach Raumtemperatur</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">☀️ 0.5 TOG (Sommer)</h3>
                <p className="small text-muted mb-0">
                  Für Raumtemperaturen ab 24°C. Dünnstes Material, oft aus Baumwollmusselin – die richtige
                  Wahl für heiße Sommernächte.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌤️ 1.0 TOG (Übergang)</h3>
                <p className="small text-muted mb-0">
                  Für Raumtemperaturen um 20-24°C. Der Allrounder für Frühling und Herbst bei normal beheizten
                  Schlafzimmern.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">❄️ 2.5 TOG (Winter)</h3>
                <p className="small text-muted mb-0">
                  Für Raumtemperaturen um 16-20°C. Dickeres, wärmeres Material für die kalte Jahreszeit oder
                  schlecht beheizte Räume.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔄 Ganzjahresschlafsack</h3>
                <p className="small text-muted mb-0">
                  Meist 1.5-2.5 TOG mit abnehmbarer Innenschicht – flexibel für mehrere Jahreszeiten, aber
                  meist nicht so warm oder kühl wie ein spezialisierter Schlafsack am jeweiligen Extrem.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich die Preise nach TOG-Wert und Marke unterscheiden, zeigt ein Blick in den aktuellen
            Preisvergleich: Ein <strong>Meyco Baby Sommerschlafsack</strong> (0.3 TOG) gibt es schon ab rund{" "}
            <strong>11,59 €</strong>. <strong>Ganzjahresschlafsäcke</strong> (1.5-2.5 TOG) von Marken wie{" "}
            <strong>Träumeland</strong> oder <strong>Sterntaler</strong> liegen meist zwischen{" "}
            <strong>40 € und 50 €</strong>. Wer den Schlafsack lieber separat für jede Jahreszeit kauft statt
            eines Ganzjahresmodells, zahlt für zwei spezialisierte Schlafsäcke oft ähnlich viel wie für ein
            einzelnes Ganzjahresmodell.
          </p>
          <p className="small text-muted">
            Bedenke: Babys wachsen schnell aus einer Schlafsack-Größe heraus – meist lohnt sich der Kauf von
            zwei bis drei Größen im Voraus mehr als ein einzelnes, teures Premium-Modell.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>Raumtemperatur regelmäßig prüfen:</strong> Ein Thermometer im Kinderzimmer hilft mehr als Vermutungen über "wie warm es sich anfühlt".</li>
            <li><strong>Passform vor Muster:</strong> Der Halsausschnitt sollte eng genug sein, dass der Kopf nicht hindurchrutscht, aber nicht einschnüren.</li>
            <li><strong>Mehrere Größen einplanen:</strong> Ein Schlafsack sollte alle paar Monate an die Körpergröße angepasst werden – nicht auf Vorrat in einer Größe kaufen.</li>
            <li><strong>Material nach Hauttyp:</strong> Bio-Baumwolle oder Musselin bei empfindlicher Haut, Fleece nur für sehr kalte Räume, da es weniger atmungsaktiv ist.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Zwei günstigere Schlafsäcke in unterschiedlichen TOG-Werten
            decken die meisten Raumtemperaturen zuverlässiger ab als ein einzelnes teures
            Ganzjahresmodell mit Kompromiss-Wärmeleistung.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Babyschlafsäcke im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Sommer-, Winter- und Ganzjahresschlafsäcke von Träumeland, Sterntaler & Co. — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/kinderzimmer" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
