import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hoverboard kaufen: Zollgröße, Sicherheit & Kart-Umbau erklärt",
  description: "6,5\" oder 8,5\" Zoll, mit oder ohne Sitz? Worauf es beim Hoverboard-Kauf wirklich ankommt – Sicherheitszertifikat, Geländetauglichkeit und Preisvergleich.",
  keywords: [
    "hoverboard kaufen",
    "hoverboard test",
    "hoverboard für kinder",
    "hoverboard mit sitz",
    "bestes hoverboard",
    "hoverboard gelände",
  ],
  openGraph: {
    title: "Hoverboard kaufen: Zollgröße, Sicherheit & Kart-Umbau erklärt",
    description: "6,5\" oder 8,5\" Zoll, mit oder ohne Sitz? Worauf es beim Hoverboard-Kauf wirklich ankommt.",
    url: "https://www.preisgucken.com/blog/hoverboard-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-09-19",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Hoverboard kaufen: Zollgröße, Sicherheit & Kart-Umbau erklärt" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/hoverboard-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Hoverboard kaufen: Zollgröße, Sicherheit & Kart-Umbau erklärt",
    description: "6,5\" oder 8,5\" Zoll, mit oder ohne Sitz? Worauf es beim Hoverboard-Kauf wirklich ankommt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Hoverboard kaufen: Zollgröße, Sicherheit & Kart-Umbau erklärt",
  datePublished: "2026-09-19",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function HoverboardKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Hoverboard kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Auto & Fahrzeugzubehör</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Hoverboard kaufen: Zollgröße, Sicherheit & Kart-Umbau erklärt</h1>
          <p className="lead text-muted">
            Anders als der E-Scooter kommt das Hoverboard ohne Lenker aus – balanciert wird per Gewichtsverlagerung.
            Das macht die Wahl der richtigen Zollgröße und die Geländetauglichkeit wichtiger als bei den meisten
            anderen Elektro-Fahrgeräten. Ein Überblick, bevor du dich für ein Modell entscheidest.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. September 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">6,5" oder 8,5" Zoll: Welche Radgröße für wen?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🛞 6,5 Zoll — kompakt & leicht</h3>
                <p className="small text-muted mb-0">
                  Die klassische Größe für Innenräume, Bürgersteige und Einsteiger, oft auch für Kinder
                  geeignet. Leichter und wendiger, aber weniger geeignet für Schlaglöcher oder Kopfsteinpflaster.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🏔️ 8,5 Zoll — geländetauglich</h3>
                <p className="small text-muted mb-0">
                  Größere, oft profilierte Reifen verkraften Unebenheiten und leichtes Gelände deutlich besser –
                  die richtige Wahl für alles außerhalb glatter Innenstadt-Gehwege.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich die Preise je nach Ausstattung unterscheiden, zeigt ein Blick in den aktuellen
            Preisvergleich: Ein <strong>iHoverboard H1</strong> mit 6,5 Zoll und Bluetooth-Lautsprecher liegt
            bei rund <strong>99 €</strong>. Wer das Hoverboard mit einem Sitzaufsatz zum Elektro-Kart umbauen
            will, findet mit dem <strong>iHoverboard H2</strong> eine Kombination ab etwa{" "}
            <strong>129 €</strong>. Für unwegsameres Gelände liegt das geländetaugliche{" "}
            <strong>iHoverboard H8</strong> mit 8,5 Zoll bei rund <strong>179 €</strong> bis{" "}
            <strong>269 €</strong>, je nach Ausführung.
          </p>
          <p className="small text-muted">
            Auffällig: Der Sitzaufsatz für den Kart-Umbau kostet als Einzelzubehör oft fast so viel wie der
            Aufpreis für ein Modell, das ihn direkt im Set enthält – ein Blick auf Kombi-Angebote lohnt sich vor
            dem Einzelkauf.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Sicherheitszertifikat:</strong> Ein GS-Zeichen oder vergleichbares Prüfsiegel sollte vorhanden sein – gerade bei sehr günstigen Modellen ohne Markennamen ein häufiger Schwachpunkt.</li>
            <li><strong>Nutzergewicht und Altersfreigabe:</strong> Modelle unterscheiden sich in maximaler Zuladung und empfohlenem Mindestalter – wichtig bei der Wahl für Kinder oder schwerere Nutzer.</li>
            <li><strong>Reichweite pro Ladung:</strong> Für den täglichen Weg zur Schule oder Arbeit reicht meist weniger Kapazität als fürs Gelände-Fahren am Wochenende.</li>
            <li><strong>Bluetooth & App-Anbindung:</strong> Praktisch für Musik unterwegs, aber kein Muss – wer nur kurze Strecken fährt, kann darauf verzichten und sparen.</li>
            <li><strong>Untergrund realistisch einschätzen:</strong> Kopfsteinpflaster, Waldwege oder nur glatte Gehwege entscheiden mit, ob 6,5 oder 8,5 Zoll die bessere Wahl ist.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Wer sowohl drinnen als auch im Kart-Modus fahren will, sollte
            gleich zum Set mit Sitzaufsatz greifen statt später nachzurüsten – einzeln gekauft ist der
            Sitzaufsatz meist teurer als der Aufpreis im Komplettpaket.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Hoverboards im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Hoverboards für drinnen, draußen und mit Kart-Umbau von iHoverboard — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/hoverboards" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
