import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stecker, Creolen oder Dangle: Welche Ohrringe passen zu dir? | Preisgucken",
  description: "Stecker, Creolen oder Dangle-Ohrringe? Materialien, Verschlüsse und Preise im Vergleich – für jeden Anlass das passende Paar.",
  keywords: ["ohrringe kaufen", "ohrstecker damen", "creolen kaufen", "hypoallergene ohrringe", "ohrringe empfindliche ohren", "ohrringe gesichtsform"],
  openGraph: {
    title: "Stecker, Creolen oder Dangle: Welche Ohrringe passen zu dir?",
    description: "Stecker, Creolen oder Dangle-Ohrringe? Materialien, Verschlüsse und Preise im Vergleich.",
    url: "https://www.preisgucken.com/blog/ohrringe-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-08-01",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/ohrringe-kaufen-ratgeber" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Stecker, Creolen oder Dangle: Welche Ohrringe passen zu dir?",
  datePublished: "2026-08-01",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function OhrringeKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Ohrringe kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Stecker, Creolen oder Dangle: Welche Ohrringe passen zu dir?</h1>
          <p className="lead text-muted">Vom dezenten Ohrstecker bis zur auffälligen Creole – wir zeigen dir Typen, Materialien und Verschlüsse, damit du die richtige Wahl triffst.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Ohrring-Typen im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💎 Ohrstecker</h3>
                <p className="small text-muted mb-0">Dezent und vielseitig, liegt eng am Ohrläppchen an. Ideal für Büro und Alltag.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⭕ Creolen</h3>
                <p className="small text-muted mb-0">Runde oder ovale Reifen, von schlicht bis auffällig. Klassiker mit modernem Comeback.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">✨ Dangle & Threader</h3>
                <p className="small text-muted mb-0">Hängende Modelle mit Bewegung, wirken elegant bei festlichen Anlässen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Material & Verträglichkeit</h2>
          <p>Ohrringe haben durch das Ohrloch dauerhaften Hautkontakt – die Materialwahl ist hier besonders wichtig:</p>
          <ul>
            <li><strong>Chirurgischer Edelstahl (Surgical Steel):</strong> nickelfrei, ideal für empfindliche und frisch gestochene Ohren</li>
            <li><strong>925er Sterlingsilber:</strong> hochwertig, kann bei sehr empfindlicher Haut leicht reizen</li>
            <li><strong>Titan:</strong> sehr gut verträglich, oft für Erstohrringe empfohlen</li>
            <li><strong>Vergoldet:</strong> edle Optik, bei Nickelallergie auf "nickelfrei" achten</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Verschlussarten erklärt</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Verschluss</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Schmetterlingsverschluss</td><td>Ohrstecker, sicherer Halt im Alltag</td></tr>
                <tr><td>Klappcreole (Hinged Hoop)</td><td>Creolen, einfaches An- und Ablegen</td></tr>
                <tr><td>Fischhaken (French Hook)</td><td>Dangle-Ohrringe, leichtes Einhängen</td></tr>
                <tr><td>Threader</td><td>Minimalistischer Look, durchs Ohrloch gezogen</td></tr>
              </tbody>
            </table>
          </div>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Sets mit mehreren Ohrringpaaren im selben Design sind oft günstiger pro Stück als Einzelkäufe. Ein Preisvergleich auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> lohnt sich.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Ohrringe nach Gesichtsform</h2>
          <ul>
            <li><strong>Rundes Gesicht:</strong> Längliche Dangle-Ohrringe strecken optisch</li>
            <li><strong>Eckiges Gesicht:</strong> Runde Creolen wirken weicher</li>
            <li><strong>Herzförmiges Gesicht:</strong> Ohrstecker mit breiterer Basis balancieren das Kinn aus</li>
            <li><strong>Ovales Gesicht:</strong> Nahezu jede Form passt – hier ist Geschmackssache gefragt</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Ohrringe-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Stecker, Creolen und Dangle-Ohrringe aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schmuck" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Ohrringe-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
