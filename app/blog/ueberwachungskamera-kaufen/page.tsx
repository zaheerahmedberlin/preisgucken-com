import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Überwachungskamera kaufen: Akku oder Solar?",
  description: "Outdoor, Video-Türklingel oder Innenkamera – welcher Kameratyp zu welchem Einsatzort passt.",
  keywords: [
    "überwachungskamera kaufen",
    "outdoor kamera akku",
    "video türklingel kaufen",
    "smart home kamera vergleich",
    "solar überwachungskamera",
    "imou kamera",
    "wlan kamera außen",
    "sicherheitskamera zuhause",
  ],
  openGraph: {
    title: "Überwachungskamera kaufen: Akku oder Solar?",
    description: "Outdoor, Video-Türklingel oder Innenkamera – welcher Kameratyp zu welchem Einsatzort passt.",
    url: "https://www.preisgucken.com/blog/ueberwachungskamera-kaufen",
    type: "article",
    publishedTime: "2026-08-11",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Überwachungskamera kaufen: Akku oder Solar?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/ueberwachungskamera-kaufen" },
  twitter: {
    card: "summary_large_image",
    title: "Überwachungskamera kaufen: Akku oder Solar?",
    description: "Outdoor, Video-Türklingel oder Innenkamera – welcher Kameratyp zu welchem Einsatzort passt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Überwachungskamera kaufen: Akku oder Solar?",
  datePublished: "2026-08-11",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function UeberwachungskameraKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Überwachungskamera kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Akku, Solar oder Stromkabel? Der richtige Kameratyp für jeden Einsatzort</h1>
          <p className="lead text-muted">
            Nicht jede Überwachungskamera passt an jeden Ort. Eine Kamera an der Haustür hat andere Anforderungen
            als eine im Garten oder eine im Wohnzimmer. Wir zeigen, welcher Typ wohin gehört und worauf es bei
            Auflösung, Speicher und Stromversorgung wirklich ankommt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 11. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welcher Kameratyp passt zu welchem Einsatzort?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🚪 Video-Türklingel</h3>
                <p className="small text-muted mb-0">
                  Ersetzt die klassische Klingel, zeigt Besucher live aufs Handy und speichert kurze Klingel-Clips.
                  Meist verkabelt oder mit Akku — beim Akku-Modell auf Ladeintervall achten (oft alle 1-3 Monate).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">☀️ Outdoor-Kamera mit Solar</h3>
                <p className="small text-muted mb-0">
                  Ideal für Garten, Einfahrt oder Terrasse ohne Stromanschluss in der Nähe. Ein Solarpanel hält den
                  Akku dauerhaft geladen — wichtig ist ein sonniger, unverschatteter Montageort.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔌 Kamera mit Stromkabel</h3>
                <p className="small text-muted mb-0">
                  Wo ein Stromanschluss verfügbar ist (z. B. an der Fassade oder im Innenbereich), liefert eine
                  festverkabelte Kamera durchgehenden Betrieb ohne Akku-Sorgen und oft höhere Auflösung im Dauerbetrieb.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🐾 Innenkamera mit Zusatzfunktion</h3>
                <p className="small text-muted mb-0">
                  Manche Innenkameras sind mit Zusatzgeräten kombiniert — etwa ein Futterautomat mit Kamera für
                  Haustiere. Praktisch, wenn Überwachung nicht der einzige Zweck ist.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich: Imou</h2>
          <p>
            Wie breit das Angebot inzwischen ist, zeigt <strong>Imou</strong> (Sicherheitstechnik-Marke von Dahua),
            aktuell im Preisvergleich auf Preisgucken.de. Eine solarbetriebene 4G-Outdoor-Kamera liegt dort bei rund{" "}
            <strong>150 €</strong>, eine klassische Video-Türklingel bei etwa <strong>80-100 €</strong>, und ein{" "}
            10-Kanal-NVR-Rekorder für mehrere Kameras bei rund <strong>120 €</strong>. Am günstigeren Ende gibt es
            auch reine Glühbirnen-Kameras (Lampenfassung + Kamera kombiniert) bereits ab rund <strong>40 €</strong>.
          </p>
          <p className="small text-muted">
            Wer mehrere Bereiche gleichzeitig absichern will, findet dort auch fertige Sets aus Innen- und
            Außenkamera zusammen — meist günstiger als zwei Einzelkameras separat zu kaufen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Kameratypen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Video-Türklingel</td><td>Haustür, Paketzustellung im Blick behalten</td></tr>
                <tr><td>Outdoor-Kamera (Solar/Akku)</td><td>Garten, Einfahrt — ohne vorhandenen Stromanschluss</td></tr>
                <tr><td>Kamera mit Stromkabel</td><td>Fassade oder Innenbereich mit Steckdose in der Nähe</td></tr>
                <tr><td>NVR-Rekorder</td><td>Mehrere Kameras zentral aufzeichnen, ohne Dauer-Cloud-Abo</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Auflösung passend zum Zweck wählen:</strong> Für Gesichtserkennung an der Haustür lohnt sich mindestens 2K — für eine grobe Übersicht im Garten reicht oft Full-HD.</li>
            <li><strong>Speicherart klären:</strong> Cloud-Abo, lokale SD-Karte oder NVR-Rekorder — ein Abo verursacht laufende Kosten, lokale Speicherung ist einmalig, aber bei Diebstahl der Kamera unter Umständen weg.</li>
            <li><strong>Reichweite von WLAN und 4G prüfen:</strong> Kameras am Gartenrand haben oft schwächeres WLAN-Signal — hier kann eine 4G-Variante mit SIM-Karte zuverlässiger sein.</li>
            <li><strong>Wetterfestigkeit (IP-Schutzklasse) beachten:</strong> Für den Außenbereich mindestens IP65, damit Regen und Staub der Kamera nichts anhaben.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Ein NVR-Rekorder mit mehreren Kameras ist oft günstiger als die
            gleiche Anzahl an Einzelkameras mit jeweils eigenem Cloud-Abo — besonders wenn du mehr als zwei Bereiche
            dauerhaft überwachen willst.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Überwachungskameras im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von der Video-Türklingel bis zum Kamera-Set — vergleiche smarte Sicherheitstechnik direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/ueberwachungskameras" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
