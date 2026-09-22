import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vitamin D Mangel im Winter: Symptome, Dosierung & Preisvergleich",
  description: "Warum die Vitamin-D-Bildung ab Oktober in Deutschland fast zum Stillstand kommt, welche Dosierung sinnvoll ist und was Vitamin D3 im Preisvergleich wirklich kostet.",
  keywords: [
    "vitamin d mangel winter",
    "vitamin d3 kaufen",
    "vitamin d mangel symptome",
    "vitamin d3 dosierung",
    "vitamin d tropfen oder tabletten",
    "vitamin d3 apotheke online",
  ],
  openGraph: {
    title: "Vitamin D Mangel im Winter: Symptome, Dosierung & Preisvergleich",
    description: "Warum die Vitamin-D-Bildung ab Oktober in Deutschland fast zum Stillstand kommt, welche Dosierung sinnvoll ist und was Vitamin D3 im Preisvergleich wirklich kostet.",
    url: "https://www.preisgucken.com/blog/vitamin-d-mangel-herbst-winter/",
    type: "article",
    publishedTime: "2026-09-22",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Vitamin D Mangel im Winter" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/vitamin-d-mangel-herbst-winter/" },
  twitter: {
    card: "summary_large_image",
    title: "Vitamin D Mangel im Winter: Symptome, Dosierung & Preisvergleich",
    description: "Warum die Vitamin-D-Bildung ab Oktober fast zum Stillstand kommt, plus Preisvergleich für Vitamin D3.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Vitamin D Mangel im Winter: Symptome, Dosierung & Preisvergleich",
  datePublished: "2026-09-22",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function VitaminDMangelPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Vitamin D Mangel im Winter
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Gesundheit</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Vitamin D Mangel im Winter: Symptome, Dosierung & Preisvergleich</h1>
          <p className="lead text-muted">
            Ab Oktober reicht die Sonneneinstrahlung in Deutschland nicht mehr aus, um Vitamin D über die Haut zu
            bilden – bis in den März hinein. Was das für deinen Körper bedeutet, welche Dosierung sinnvoll ist und
            was Vitamin D3 im Preisvergleich tatsächlich kostet.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 22. September 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <div className="alert alert-warning small mb-5">
          ⚕️ <strong>Hinweis:</strong> Dieser Artikel dient zur allgemeinen Information und ersetzt keine
          medizinische Beratung. Ob und in welcher Dosierung eine Supplementierung sinnvoll ist, lässt sich
          zuverlässig nur über eine Blutuntersuchung (25-OH-Vitamin-D-Wert) beim Arzt klären.
        </div>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Warum der Winter in Deutschland zum Problem wird</h2>
          <p>
            Über 80% des Vitamin-D-Bedarfs deckt der Körper normalerweise selbst – durch UVB-Strahlung, die in der
            Haut die Vitamin-D-Synthese anstößt. Das Problem: Auf der Breite Deutschlands reicht der
            Sonnenstand zwischen Oktober und März nicht mehr aus, damit UVB-Strahlen überhaupt die Atmosphäre in
            ausreichender Intensität durchdringen. Selbst an einem klaren Wintertag im Freien bildet die Haut
            praktisch kein Vitamin D.
          </p>
          <p>
            Die körpereigenen Speicher aus dem Sommer reichen bei den meisten Menschen nicht über den ganzen
            Winter. Laut Robert Koch-Institut weist etwa jeder zweite Erwachsene in Deutschland in den
            Wintermonaten einen unzureichenden Vitamin-D-Spiegel auf.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Mögliche Anzeichen eines Mangels</h2>
          <p>
            Ein leichter bis moderater Mangel verläuft oft unauffällig oder äußert sich in unspezifischen
            Beschwerden, die leicht anderen Ursachen zugeschrieben werden:
          </p>
          <ul>
            <li>Anhaltende Müdigkeit und Antriebslosigkeit trotz ausreichend Schlaf</li>
            <li>Muskelschwäche oder häufige Muskelkrämpfe</li>
            <li>Erhöhte Infektanfälligkeit</li>
            <li>Gedrückte Stimmung, die sich vom klassischen Winterblues unterscheidet</li>
            <li>Knochen- oder Gelenkschmerzen bei stärkerem, lang anhaltendem Mangel</li>
          </ul>
          <p className="small text-muted">
            Diese Symptome sind nicht beweisend – sie können viele andere Ursachen haben. Sicherheit gibt nur ein
            Bluttest.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Tabletten, Kapseln, Brausetabletten oder Tropfen?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💊 Tabletten & Kapseln</h3>
                <p className="small text-muted mb-0">
                  Meist die günstigste Form pro I.E. (Internationale Einheit), gut für feste tägliche oder
                  wöchentliche Einnahme. Vitamin D ist fettlöslich – am besten zu einer fetthaltigen Mahlzeit
                  einnehmen, das verbessert die Aufnahme spürbar.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💧 Tropfen</h3>
                <p className="small text-muted mb-0">
                  Lassen sich fein dosieren (praktisch bei individuell verordneten Mengen oder für Kinder),
                  meist in Öl gelöst, was die Aufnahme zusätzlich begünstigt. Pro I.E. tendenziell etwas teurer
                  als Tabletten.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🫧 Brausetabletten</h3>
                <p className="small text-muted mb-0">
                  Angenehm einzunehmen, oft mit weiteren Vitaminen (K2, C) kombiniert. Enthalten meist Zucker
                  oder Süßstoff und niedrigere Einzeldosierungen als reine D3-Präparate.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">➕ Kombipräparate (D3 + K2, D3 + Calcium)</h3>
                <p className="small text-muted mb-0">
                  K2 unterstützt den Calciumtransport in die Knochen statt in die Gefäße – sinnvoll bei
                  Dauereinnahme höherer D3-Dosen. Meist teurer als reine Monopräparate gleicher Dosierung.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Vitamin D3 im aktuellen Preisvergleich</h2>
          <p>
            Wie groß die Preisspanne bei Vitamin-D3-Präparaten tatsächlich ist, zeigt ein Blick in den aktuellen
            Preisvergleich – von einfachen Basis-Tabletten bis zu höher dosierten Kombipräparaten:
          </p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Produkt</th><th>Dosierung</th><th>Preis</th></tr>
              </thead>
              <tbody>
                <tr><td>VIGANTOL Vitamin D3, 50 Tabletten</td><td>500 I.E.</td><td>3,19 €</td></tr>
                <tr><td>Doppelherz aktiv Vitamin D3, 15 Brausetabletten</td><td>2.000 I.E.</td><td>3,25 €</td></tr>
                <tr><td>Vitagamma Vitamin D3, 50 Tabletten</td><td>1.000 I.E.</td><td>3,79 €</td></tr>
                <tr><td>Vitamin D3 STADA, 60 Kapseln</td><td>2.000 I.E.</td><td>3,99 €</td></tr>
                <tr><td>Doppelherz aktiv Vitamin K2+D3, 30 Tabletten</td><td>1.000 I.E. D3</td><td>3,91 €</td></tr>
                <tr><td>VITAMIN D3 HEVERT, 20 Tabletten</td><td>4.000 I.E.</td><td>4,90 €</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">
            Auffällig: Die Dosierung pro Tablette sagt wenig über den Gesamtpreis aus. Ein 4.000-I.E.-Präparat
            kostet hier nicht automatisch mehr als ein 500-I.E.-Präparat – entscheidend ist die Packungsgröße
            und der Preis pro 1.000 I.E., nicht der Packungspreis allein.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>D3 statt D2 wählen:</strong> Cholecalciferol (D3) wird vom Körper deutlich besser verwertet als die pflanzliche Form Ergocalciferol (D2).</li>
            <li><strong>Preis pro 1.000 I.E. berechnen:</strong> Erst so werden unterschiedliche Dosierungen und Packungsgrößen wirklich vergleichbar.</li>
            <li><strong>Dosierung nicht auf eigene Faust eskalieren:</strong> Hochdosierte Präparate (ab ca. 5.000 I.E.) sollten nur nach ärztlicher Rücksprache und idealerweise mit bekanntem Blutwert eingenommen werden – Vitamin D ist fettlöslich und kann sich im Körper anreichern.</li>
            <li><strong>Kombipräparate hinterfragen:</strong> Wenn du bereits andere Nahrungsergänzung nimmst, prüfe auf Doppelversorgung, statt automatisch zum Kombipräparat zu greifen.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Bei Dauereinnahme über den ganzen Winter lohnt sich fast immer die
            größere Packung – rechne den Preis pro 1.000 I.E. aus, statt nach dem niedrigsten Packungspreis zu
            gehen. Reine D3-Monopräparate sind zudem meist günstiger als beworbene Kombiformeln mit ähnlicher
            D3-Dosierung.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Vitamin D3 & Nahrungsergänzung im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Tabletten, Kapseln, Brausetabletten und Tropfen – aktuelle Preise direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/nahrungsergaenzung-vitamine" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
