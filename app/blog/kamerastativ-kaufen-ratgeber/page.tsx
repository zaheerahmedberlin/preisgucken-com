import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Carbon oder Aluminium? Das richtige Kamerastativ für deinen Einsatzzweck | Preisgucken",
  description: "Reisestativ, Videostativ oder Einbeinstativ? Der Ratgeber zu Material, Traglast und Stativkopf – mit Preisvergleich für Foto- und Videozubehör.",
  keywords: ["kamerastativ kaufen", "reisestativ ratgeber", "carbon oder aluminium stativ", "kugelkopf kaufen", "videostativ kaufen", "einbeinstativ ratgeber"],
  openGraph: {
    title: "Carbon oder Aluminium? Das richtige Kamerastativ für deinen Einsatzzweck",
    description: "Reisestativ, Videostativ oder Einbeinstativ? Der Ratgeber zu Material, Traglast und Stativkopf.",
    url: "https://www.preisgucken.com/blog/kamerastativ-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-07-29",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/kamerastativ-kaufen-ratgeber" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Carbon oder Aluminium? Das richtige Kamerastativ für deinen Einsatzzweck",
  datePublished: "2026-07-29",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function KamerastativKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Kamerastativ Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Carbon oder Aluminium? Das richtige Kamerastativ für deinen Einsatzzweck</h1>
          <p className="lead text-muted">Carbon oder Aluminium, Kugelkopf oder Videokopf – welches Stativ wirklich zu deinem Einsatzzweck passt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 29. Juli 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Carbon oder Aluminium?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-3">🪶 Carbon</h3>
                <ul className="small text-muted mb-0">
                  <li>Bis zu 30% leichter als Aluminium</li>
                  <li>Dämpft Vibrationen besser</li>
                  <li>Unempfindlich gegen Korrosion</li>
                  <li>Deutlich teurer in der Anschaffung</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-3">⚙️ Aluminium</h3>
                <ul className="small text-muted mb-0">
                  <li>Günstiger, robust im Alltag</li>
                  <li>Schwerer, dafür oft standfester</li>
                  <li>Ideal für Studio- oder Heimeinsatz</li>
                  <li>Gute Wahl für Einsteiger</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Welcher Stativkopf für welchen Zweck?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Stativkopf</th><th>Ideal für</th></tr>
              </thead>
              <tbody>
                <tr><td>Kugelkopf</td><td>Fotografie, schnelles Ausrichten in alle Richtungen</td></tr>
                <tr><td>Fluid-Videokopf</td><td>Video, weiche Schwenks ohne Ruckeln</td></tr>
                <tr><td>3-Wege-Neiger</td><td>Präzise Ausrichtung, Architektur- und Produktfotografie</td></tr>
                <tr><td>Getriebeneiger</td><td>Makro- und Studioaufnahmen mit Feinjustierung</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Traglast richtig einschätzen</h2>
          <p>Rechne immer mit Reserve: Die angegebene Traglast eines Stativs sollte mindestens 1,5-mal so hoch sein wie das Gewicht deiner schwersten Kamera-Objektiv-Kombination. So bleibt das Setup auch bei Wind oder beim Anfassen der Kamera stabil.</p>
          <ul className="mb-0">
            <li><strong>Bis 2 kg:</strong> Smartphone-Halterungen, kompakte Reisestative</li>
            <li><strong>2–6 kg:</strong> Systemkameras mit Standardobjektiv</li>
            <li><strong>Über 6 kg:</strong> Vollformatkameras mit Teleobjektiven, Videosetups</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Reisestativ – worauf achten?</h2>
          <ol>
            <li><strong>Packmaß:</strong> Faltbare Beine unter 40 cm passen in die meisten Handgepäckstücke</li>
            <li><strong>Anzahl der Beinsegmente:</strong> Mehr Segmente = kompakter, aber weniger stabil bei Wind</li>
            <li><strong>Maximale Arbeitshöhe:</strong> Sollte mindestens Augenhöhe erreichen, um Rückenschmerzen zu vermeiden</li>
            <li><strong>Mittelsäule umkehrbar:</strong> Praktisch für Makroaufnahmen nah am Boden</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Budget-Orientierung</h2>
          <ul>
            <li><strong>Unter 100 €:</strong> Einsteiger-Stative, meist Aluminium, für Smartphone/leichte Kameras</li>
            <li><strong>100–300 €:</strong> Solide Allrounder mit Kugelkopf, teils schon Carbon</li>
            <li><strong>300–600 €:</strong> Profi-Reisestative, hochwertige Videoköpfe</li>
            <li><strong>Über 600 €:</strong> Profi-Videostative, Cine-Objektivadapter, Spezialzubehör</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Stativ-Kits (Stativ + Kopf zusammen) sind meist günstiger als der Einzelkauf. Vergleiche Foto- und Videozubehör auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Elektronik &amp; Foto &amp; Optik.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Foto- &amp; Videozubehör vergleichen</h3>
          <p className="text-muted small mb-3">Stative, Stativköpfe und mehr im direkten Preisvergleich.</p>
          <a href="https://www.preisgucken.de/kategorie/foto-optik" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
