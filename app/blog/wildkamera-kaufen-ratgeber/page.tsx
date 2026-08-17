import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check",
  description: "Trigger-Geschwindigkeit, PIR-Reichweite, Auflösung und Solarpanel im Vergleich – so findest du die richtige Wildkamera für Jagd, Garten oder Grundstücksschutz.",
  keywords: ["wildkamera kaufen", "jagdkamera ratgeber", "wildtierkamera vergleich", "wildkamera auslöserzeit", "wildkamera solarpanel", "wildkamera reichweite"],
  openGraph: {
    title: "Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check",
    description: "Trigger-Geschwindigkeit, PIR-Reichweite, Auflösung und Solarpanel im Vergleich – so findest du die richtige Wildkamera.",
    url: "https://www.preisgucken.com/blog/wildkamera-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-08-17",
    images: [{ url: "https://www.preisgucken.com/logo.png", width: 1536, height: 1024, alt: "Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/wildkamera-kaufen-ratgeber" },
  twitter: {
    card: "summary_large_image",
    title: "Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check",
    description: "Trigger-Geschwindigkeit, PIR-Reichweite, Auflösung und Solarpanel im Vergleich – so findest du die richtige Wildkamera.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check",
  datePublished: "2026-08-17",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function WildkameraKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Wildkamera kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check</h1>
          <p className="lead text-muted">Ob Jagdrevier, Gartenüberwachung oder Naturbeobachtung – die richtige Wildkamera hängt stark vom Einsatzzweck ab. Wir zeigen dir, worauf es ankommt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 17. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Auslöserzeit — je schneller, desto weniger verpasst du</h2>
          <p>Die Auslöserzeit (Trigger-Geschwindigkeit) bestimmt, wie schnell die Kamera nach einer erkannten Bewegung auslöst:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Auslöserzeit</th><th>Eignung</th></tr>
              </thead>
              <tbody>
                <tr><td>0,1 Sekunden</td><td>Schnelles Wild (Rehe, Vögel), Grundstücksüberwachung — Referenzwert am Markt</td></tr>
                <tr><td>0,3–0,5 Sekunden</td><td>Langsamere Tiere oder Bereiche mit weniger Durchgangsverkehr</td></tr>
                <tr><td>über 1 Sekunde</td><td>Nur für sehr ruhige Standorte geeignet, sonst häufig leere Aufnahmen</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Bei schnellen Tieren oder engen Wildwechseln lohnt sich eine niedrige Auslöserzeit fast immer — sonst ist das Tier oft schon aus dem Bild, bevor die Kamera reagiert.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: PIR-Reichweite und Erfassungswinkel</h2>
          <ul>
            <li><strong>Erfassungsreichweite:</strong> Modelle mit 75–100 Fuß (ca. 23–30 m) decken die meisten Standorte ab, für offene Flächen lohnen sich Modelle mit größerer Reichweite</li>
            <li><strong>PIR-Winkel:</strong> 110–120° ist Standard und deckt die meisten Wildwechsel gut ab, ohne dass die Kamera exakt ausgerichtet werden muss</li>
            <li><strong>Montagehöhe:</strong> Je nach Zieltier (Reh vs. Wildschwein vs. Vogel) variiert die ideale Anbringungshöhe deutlich — Herstellerangaben zur empfohlenen Höhe beachten</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Auflösung und Nachtsicht</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">📷 Auflösung</h3>
                <p className="small text-muted mb-0">Je höher die MP-Zahl, desto mehr Detail bei Zoom/Crop — wichtig, um Tiere auch aus größerer Entfernung sicher zu erkennen.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌙 Nachtsicht</h3>
                <p className="small text-muted mb-0">Infrarot-LEDs liefern auch bei völliger Dunkelheit brauchbare Aufnahmen — Reichweite der Nachtsicht separat prüfen, sie ist oft geringer als am Tag.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💧 Wasserdichtigkeit</h3>
                <p className="small text-muted mb-0">IP66 ist für den Dauereinsatz im Freien Standard — schützt zuverlässig vor Regen, Staub und Feuchtigkeit über Monate.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Stromversorgung — Batterien oder Solarpanel?</h2>
          <p>Da Wildkameras meist an entlegenen, unzugänglichen Standorten hängen, ist die Stromversorgung ein zentrales Kaufkriterium:</p>
          <ul>
            <li><strong>Batteriebetrieb:</strong> Günstigster Einstieg, aber regelmäßiges Nachschauen und Batteriewechsel nötig — bei häufigen Auslösungen können Batterien in wenigen Wochen leer sein</li>
            <li><strong>Solarpanel-Kit:</strong> Deutlich weniger Wartungsaufwand, ideal für Standorte, die selten besucht werden — die Anfangsinvestition ist höher, macht sich aber schnell bezahlt</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Viele Wildkameras werden im Bundle mit passendem Solarpanel angeboten — das ist meist günstiger, als beides einzeln zu kaufen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Rechtliches nicht vergessen</h2>
          <p>Wildkameras im Wald oder auf fremdem Grund berühren in Deutschland schnell Datenschutzrecht (DSGVO), wenn Personen erkennbar aufgezeichnet werden — etwa Wanderer oder Spaziergänger. Vor dem Aufstellen im Wald oder an öffentlich zugänglichen Wegen lohnt sich ein Blick in die jeweiligen landesrechtlichen Jagdgesetze und ein Gespräch mit dem zuständigen Jagdpächter oder Grundstückseigentümer — auf dem eigenen, nicht öffentlich zugänglichen Grundstück ist die Nutzung in der Regel unproblematisch.</p>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Wildkameras im Preisvergleich</h3>
          <p className="text-muted small mb-3">Wildkameras, Jagdkameras und passende Solarpanel-Kits aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/ueberwachungskameras" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Wildkamera-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
