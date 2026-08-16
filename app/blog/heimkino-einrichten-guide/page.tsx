import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein",
  description: "Lumen, Kontrast, Leinwandtyp und Soundsystem im Überblick – so baust du dir ein Heimkino, das wirklich überzeugt. Der komplette Guide mit Preisvergleich.",
  keywords: ["heimkino einrichten", "beamer kaufen ratgeber", "beamer lumen tabelle", "leinwand oder wand", "heimkino soundsystem", "beamer verdunkelung raum"],
  openGraph: {
    title: "Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein",
    description: "Lumen, Kontrast, Leinwandtyp und Soundsystem im Überblick – so baust du dir ein Heimkino, das wirklich überzeugt.",
    url: "https://www.preisgucken.com/blog/heimkino-einrichten-guide",
    type: "article",
    publishedTime: "2026-08-16",
    images: [{ url: "https://www.preisgucken.com/logo.png", width: 1536, height: 1024, alt: "Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/heimkino-einrichten-guide" },
  twitter: {
    card: "summary_large_image",
    title: "Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein",
    description: "Lumen, Kontrast, Leinwandtyp und Soundsystem im Überblick – so baust du dir ein Heimkino, das wirklich überzeugt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein",
  datePublished: "2026-08-16",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function HeimkinoEinrichtenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Heimkino einrichten
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein</h1>
          <p className="lead text-muted">Ein Heimkino steht und fällt mit drei Entscheidungen: Beamer, Projektionsfläche und Ton. Wir zeigen dir, worauf es bei jeder ankommt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 16. August 2026</span>
            <span>⏱ 8 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Lumen und Kontrast richtig einschätzen</h2>
          <p>Die Helligkeit (gemessen in ANSI-Lumen) entscheidet, wie gut das Bild bei Umgebungslicht sichtbar bleibt. Der Kontrastwert bestimmt, wie tief Schwarztöne wirken:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Lumen</th><th>Raumsituation</th><th>Eignung</th></tr>
              </thead>
              <tbody>
                <tr><td>bis 2.000 ANSI-Lumen</td><td>Komplett abgedunkelter Raum</td><td>Reines Heimkino, Abendnutzung</td></tr>
                <tr><td>2.000–3.500 ANSI-Lumen</td><td>Leicht abgedunkelt, Dämmerlicht</td><td>Wohnzimmer mit Vorhängen</td></tr>
                <tr><td>3.500–5.000 ANSI-Lumen</td><td>Tageslicht, größere Räume</td><td>Business/Präsentation, helle Wohnräume</td></tr>
                <tr><td>über 5.000 ANSI-Lumen</td><td>Sehr helle Umgebung</td><td>Events, große Leinwände</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Für ein klassisches Heimkino im abgedunkelten Wohnzimmer reichen meist 2.000–3.000 ANSI-Lumen völlig aus – mehr Lumen bedeutet vor allem einen höheren Preis, nicht automatisch ein besseres Bild.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Laser, LED oder Lampen-Beamer?</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💡 Lampen-Beamer</h3>
                <p className="small text-muted mb-0">Günstigster Einstieg, aber Lampen müssen nach 2.000–5.000 Stunden ersetzt werden – zusätzliche Folgekosten einplanen.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔷 LED-Beamer</h3>
                <p className="small text-muted mb-0">Lange Lebensdauer (20.000+ Stunden), meist kompakter, aber begrenzter in der maximalen Helligkeit.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚡ Laser-Beamer</h3>
                <p className="small text-muted mb-0">Höchste Helligkeit und Farbtreue, sehr lange Lebensdauer, dafür der höchste Anschaffungspreis.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Leinwand oder weiße Wand?</h2>
          <ul>
            <li><strong>Rahmenleinwand:</strong> Beste Bildqualität, plane Oberfläche, feste Montage – die Referenz für echte Heimkino-Räume</li>
            <li><strong>Rollo-Leinwand:</strong> Platzsparend, bei Nichtgebrauch unsichtbar, guter Kompromiss für Mehrzweckräume</li>
            <li><strong>Rahmenlose/tragbare Leinwand:</strong> Flexibel einsetzbar, ideal für Garten oder wechselnde Räume</li>
            <li><strong>Weiße Wand:</strong> Kostenlos, aber selbst die glatteste Wandfarbe kommt nicht an die Lichtreflexion einer echten Leinwand heran</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Eine graue statt weiße Leinwand erhöht den wahrgenommenen Kontrast bei Umgebungslicht – oft die bessere Wahl für Wohnzimmer, die nicht komplett verdunkelt werden können.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Der Ton macht das Kino-Gefühl</h2>
          <p>Die eingebauten Lautsprecher der meisten Beamer reichen für echtes Kino-Feeling nicht aus. Sinnvolle Optionen:</p>
          <ol>
            <li><strong>Soundbar:</strong> Einfachster Einstieg, deutliche Verbesserung gegenüber Beamer-Lautsprechern</li>
            <li><strong>2.1-System:</strong> Stereo-Lautsprecher plus Subwoofer für spürbaren Bass</li>
            <li><strong>5.1/7.1-Surround:</strong> Echtes Raumklang-Erlebnis, erfordert mehr Verkabelung und Planung</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Raum und Budget realistisch planen</h2>
          <ul>
            <li><strong>Unter 500 €:</strong> Einsteiger-Beamer plus tragbare Leinwand, solide Basis</li>
            <li><strong>500–1.500 €:</strong> LED-Beamer mit guter Auflösung, Rahmenleinwand, Soundbar</li>
            <li><strong>1.500–4.000 €:</strong> Laser-Beamer, feste Leinwand, 2.1- oder 5.1-Soundsystem</li>
            <li><strong>Über 4.000 €:</strong> Referenzklasse mit High-End-Optik und vollständigem Surround-Setup</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Heimkino-Ausstattung im Preisvergleich</h3>
          <p className="text-muted small mb-3">Beamer, Leinwände und Soundsysteme aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/heimkino" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Heimkino-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
