import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Smartphone kaufen 2026: Speicher, Kamera & Akku im Ratgeber | Preisgucken",
  description: "Wie viel Speicher brauchst du wirklich, worauf achten bei der Kamera und wann lohnt sich ein Vorjahresmodell? Der Smartphone-Ratgeber mit Preisvergleich.",
  keywords: ["smartphone kaufen", "handy kaufen ratgeber 2026", "welches smartphone kaufen", "smartphone speicher wieviel gb", "handy kaufberatung", "günstiges smartphone finden"],
  openGraph: {
    title: "Smartphone kaufen 2026: Speicher, Kamera & Akku im Ratgeber",
    description: "Wie viel Speicher brauchst du wirklich und wann lohnt sich ein Vorjahresmodell?",
    url: "https://www.preisgucken.com/blog/smartphone-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-07-29",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/smartphone-kaufen-ratgeber" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Smartphone kaufen 2026: Speicher, Kamera & Akku im Ratgeber",
  datePublished: "2026-07-29",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function SmartphoneKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Smartphone kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Smartphone kaufen 2026: Speicher, Kamera &amp; Akku richtig einschätzen</h1>
          <p className="lead text-muted">Neues Flaggschiff oder Vorjahresmodell? Wir zeigen dir, wo sich Sparen lohnt und worauf du wirklich achten solltest.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 29. Juli 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Wie viel Speicher brauchst du wirklich?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Speicher</th><th>Passt für</th></tr>
              </thead>
              <tbody>
                <tr><td>128 GB</td><td>Normale Nutzung, wenig Fotos/Videos, Cloud-Nutzer</td></tr>
                <tr><td>256 GB</td><td>Standard-Empfehlung für die meisten Nutzer</td></tr>
                <tr><td>512 GB+</td><td>Viele 4K-Videos, Vielfotografierer, kein Cloud-Abo</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Da sich der Speicher später nicht erweitern lässt, lieber eine Stufe großzügiger kalkulieren als knapp.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Worauf es bei der Kamera wirklich ankommt</h2>
          <p>Die Megapixel-Zahl allein sagt wenig über die Bildqualität aus. Wichtiger sind:</p>
          <ul>
            <li><strong>Sensorgröße:</strong> Größere Sensoren sammeln mehr Licht – wichtig bei Dunkelheit</li>
            <li><strong>Optische Bildstabilisierung (OIS):</strong> Verhindert verwackelte Fotos, besonders bei Video</li>
            <li><strong>Anzahl der Objektive:</strong> Weitwinkel und Tele bieten mehr Flexibilität als reine Megapixel-Zahlen</li>
            <li><strong>Software-Verarbeitung:</strong> Computational Photography macht bei ähnlicher Hardware oft den größten Unterschied</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Akku &amp; Ladegeschwindigkeit</h2>
          <ul>
            <li><strong>Akkukapazität:</strong> Ab 4.500 mAh gilt als komfortabel für einen ganzen Tag</li>
            <li><strong>Schnellladung:</strong> 30+ Watt bedeutet meist 0–50% in unter 30 Minuten</li>
            <li><strong>Kabelloses Laden:</strong> Praktisch, aber langsamer als Kabelladen – kein Muss-Kriterium</li>
            <li><strong>Akkugesundheit nach 2 Jahren:</strong> Hersteller mit Software-Akkumanagement altern spürbar besser</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Lohnt sich das Vorjahresmodell?</h2>
          <p>In den meisten Fällen: ja. Ein Jahr altes Flaggschiff kostet oft 30–40% weniger, bietet aber fast identische Alltagsleistung. Sinnvoll ist der Griff zum aktuellen Modell nur, wenn:</p>
          <ul className="mb-0">
            <li>Du die neueste Kameratechnik oder ein spezielles Feature brauchst</li>
            <li>Du das Gerät möglichst lange (5+ Jahre) mit Software-Updates nutzen willst</li>
            <li>Der Akku im Vorjahresmodell bereits spürbar gealtert ist (bei B-Ware/Refurbished)</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Budget-Orientierung</h2>
          <ul>
            <li><strong>Unter 250 €:</strong> Einsteiger-Smartphones, solide für Basisnutzung</li>
            <li><strong>250–500 €:</strong> Gutes Mittelklasse-Segment mit ordentlicher Kamera</li>
            <li><strong>500–900 €:</strong> Obere Mittelklasse, oft mit Flaggschiff-Chip zum kleineren Preis</li>
            <li><strong>Über 900 €:</strong> Aktuelle Flaggschiffe mit bester verfügbarer Kamera- und Displaytechnik</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Die Preise für ein Modell fallen oft stark, sobald der Nachfolger angekündigt wird. Ein Preisvergleich zwischen Händlern spart zusätzlich oft 50–150 €. Vergleiche jetzt auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Elektronik &amp; Smartphones.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Smartphone-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Aktuelle Smartphones aller Marken im direkten Preisvergleich.</p>
          <a href="https://www.preisgucken.de" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Smartphone-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
