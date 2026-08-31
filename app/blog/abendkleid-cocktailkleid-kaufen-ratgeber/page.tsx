import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kleid für den Anlass richtig wählen",
  description: "Cocktailparty, Hochzeit oder Gala – welches Kleid passt? Schnitt, Länge und Farbe im Ratgeber mit Preisvergleich.",
  keywords: ["abendkleid kaufen", "cocktailkleid ratgeber", "kleid für hochzeit als gast", "abendkleid welcher schnitt", "kleid online kaufen 2026", "brautjungfernkleid kaufen"],
  openGraph: {
    title: "Kleid für den Anlass richtig wählen",
    description: "Cocktailparty, Hochzeit oder Gala – welches Kleid passt? Schnitt, Länge und Farbe im Ratgeber mit Preisvergleich.",
    url: "https://www.preisgucken.com/blog/abendkleid-cocktailkleid-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-07-29",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Kleid für den Anlass richtig wählen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/abendkleid-cocktailkleid-kaufen-ratgeber" },
  twitter: {
    card: "summary_large_image",
    title: "Kleid für den Anlass richtig wählen",
    description: "Cocktailparty, Hochzeit oder Gala – welches Kleid passt? Schnitt, Länge und Farbe im Ratgeber mit Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Kleid für den Anlass richtig wählen",
  datePublished: "2026-07-29",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function AbendkleidKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Abendkleid &amp; Cocktailkleid Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Kleid für den Anlass richtig wählen</h1>
          <p className="lead text-muted">Von der Hochzeit als Gast bis zur Gala – welcher Schnitt, welche Länge und welche Farbe wirklich passen.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 29. Juli 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Welches Kleid für welchen Anlass?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Anlass</th><th>Empfohlene Länge</th><th>Stil</th></tr>
              </thead>
              <tbody>
                <tr><td>Hochzeit als Gast (tagsüber)</td><td>Midi oder Maxi</td><td>Zurückhaltend, nicht weiß/creme</td></tr>
                <tr><td>Cocktailparty / Afterwork</td><td>Mini bis Midi</td><td>Verspielt, gerne mit Statement-Detail</td></tr>
                <tr><td>Gala / Abendveranstaltung</td><td>Maxi (bodenlang)</td><td>Elegant, hochwertige Stoffe</td></tr>
                <tr><td>Büro-Weihnachtsfeier</td><td>Midi</td><td>Festlich, aber nicht zu freizügig</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Welcher Schnitt passt zu deiner Figur?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👗 Wickelkleid & Cutout-Kleid</h3>
                <p className="small text-muted mb-0">Betont die Taille, schmeichelt fast jeder Figur. Cutouts setzen gezielte Akzente an Taille oder Rücken.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🎀 Korsett-Kleid</h3>
                <p className="small text-muted mb-0">Formt die Silhouette, ideal für definierte Taille. Auf gute Verarbeitung des Korsetteinsatzes achten.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌊 A-Linie</h3>
                <p className="small text-muted mb-0">Kaschiert Bauch und Hüfte, universell einsetzbar. Klassiker für Hochzeitsgäste.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">✨ Bodycon</h3>
                <p className="small text-muted mb-0">Eng anliegend, betont die Figur. Am besten mit hochwertigem, nicht durchscheinendem Stoff.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Stoffe erkennen, die wirklich hochwertig wirken</h2>
          <ul>
            <li><strong>Satin/Mousseline:</strong> Fließender Fall, ideal für Maxikleider und Galaanlässe</li>
            <li><strong>Spitze:</strong> Klassisch-elegant, oft als Overlay über Futterstoff verarbeitet</li>
            <li><strong>Eco-Leder:</strong> Für kürzere, modernere Cocktailkleider mit Struktur</li>
            <li><strong>Crepe:</strong> Fällt schwerer und kaschiert dadurch gut, matte Optik</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Budget-Orientierung</h2>
          <ul>
            <li><strong>Unter 50 €:</strong> Fast Fashion, für einmaligen Anlass ausreichend</li>
            <li><strong>50–150 €:</strong> Solide Verarbeitung, gute Auswahl an Boutique-Marken</li>
            <li><strong>150–400 €:</strong> Hochwertige Stoffe, oft Sondergrößen und Custom-Anfertigung möglich</li>
            <li><strong>Über 400 €:</strong> Premium-Segment mit Designdetails und Maßschneiderung</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Boutique-Anbieter mit Custom-/Order-made-Optionen sind oft günstiger als Filialketten, weil sie ohne teure Ladenmiete auskommen. Vergleiche die Preise auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Mode &amp; Accessories.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Größentabelle richtig lesen</h2>
          <p>Viele Boutique-Marken produzieren nach eigenen Maßtabellen statt Konfektionsgrößen. Miss vor der Bestellung immer Oberweite, Taille und Hüfte selbst nach und vergleiche mit der Größentabelle des jeweiligen Shops – so vermeidest du teure Retouren.</p>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Kleider-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Cocktailkleider, Abendkleider und Alltagskleider im direkten Preisvergleich.</p>
          <a href="https://www.preisgucken.de/kategorie/kleider" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Kleider-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
