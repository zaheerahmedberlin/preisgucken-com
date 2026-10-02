import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Büro-Grundausstattung: Was du wirklich brauchst (und was nicht)",
  description: "Ordner, Schreibgeräte, Klebeband und Schreibtisch-Zubehör: Womit du dein Homeoffice oder kleines Büro sinnvoll ausstattest, ohne unnötig Geld auszugeben – mit Preisvergleich.",
  keywords: [
    "büro grundausstattung",
    "homeoffice einrichten",
    "büromaterial kaufen",
    "schreibwaren online kaufen",
    "büroausstattung günstig",
    "aktenordner kaufen",
  ],
  openGraph: {
    title: "Büro-Grundausstattung: Was du wirklich brauchst (und was nicht)",
    description: "Ordner, Schreibgeräte, Klebeband und Schreibtisch-Zubehör: Womit du dein Homeoffice oder kleines Büro sinnvoll ausstattest, ohne unnötig Geld auszugeben.",
    url: "https://www.preisgucken.com/blog/buero-grundausstattung-was-du-wirklich-brauchst/",
    type: "article",
    publishedTime: "2026-09-25",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Büro-Grundausstattung" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/buero-grundausstattung-was-du-wirklich-brauchst/" },
  twitter: {
    card: "summary_large_image",
    title: "Büro-Grundausstattung: Was du wirklich brauchst (und was nicht)",
    description: "Womit du dein Homeoffice sinnvoll ausstattest, mit Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Büro-Grundausstattung: Was du wirklich brauchst (und was nicht)",
  datePublished: "2026-09-25",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function BueroGrundausstattungPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Büro-Grundausstattung
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Büro & Schreibwaren</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Büro-Grundausstattung: Was du wirklich brauchst (und was nicht)</h1>
          <p className="lead text-muted">
            Ein neues Homeoffice oder ein kleines Büro einzurichten, verleitet schnell zum Sammelbestellungs-Overkill.
            Was du für den Alltag tatsächlich brauchst, was Markenqualität wirklich bringt und wo ein günstiges
            Nachfüllpaket genauso gut funktioniert.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 25. September 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Papier & Ordnung: die Basis, die sich auszahlt</h2>
          <p>
            Ein Aktenordner ist keine spannende Anschaffung, aber die häufigste Fehlerquelle beim Büro-Einkauf ist
            genau hier: entweder zu wenige (und dann liegt alles lose herum), oder gleich ein ganzer Karton, von dem
            die Hälfte leer im Regal steht. Rechne lieber grob: ein Ordner pro laufendem Projekt oder Jahr, nicht
            pro Aktenberg.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Produkt</th><th>Preis</th></tr>
              </thead>
              <tbody>
                <tr><td>ELBA Smart, Aktenordner A4, Rückenbreite 50 mm</td><td>6,06 €</td></tr>
                <tr><td>HERMA Paris, Aktenordner, Rückenbreite 70 mm</td><td>6,38 €</td></tr>
                <tr><td>Esselte Leitz Solid, Notizbuch A5</td><td>4,46 €</td></tr>
                <tr><td>ELBA Oxford Office, Notizbuch A6, kariert, 90 Blatt</td><td>6,71 €</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schreibgeräte: wann sich Markenqualität lohnt</h2>
          <p>
            Bei einem Kugelschreiber, den du täglich mehrere Stunden in der Hand hältst, macht sich ein besseres
            Schreibgefühl tatsächlich bemerkbar — Griffzone, Tintenfluss und wie schnell die Mine leer wird,
            unterscheiden sich spürbar zwischen Discounter-Ware und Markenstiften wie Faber-Castell. Für den
            Schreibtisch-Becher mit zehn Ersatzstiften, die eh nur rumliegen, lohnt sich der Aufpreis dagegen kaum.
          </p>
          <p className="small text-muted">
            Ein FABER-CASTELL POLY BALL liegt aktuell bei rund <strong>6,31 €</strong> — teurer als ein 10er-Pack
            No-Name-Kugelschreiber, aber für den Stift, den du tatsächlich täglich benutzt, ist das eine einmalige
            Anschaffung, kein wiederkehrender Kostenpunkt.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Klebeband, Kleber & Kleinkram</h2>
          <p>
            Die Dinge, die man erst dann sucht, wenn man sie dringend braucht: Klebeband, Alleskleber, Klebeknete
            für Poster ohne Wandschaden. Hier lohnt sich keine Markenfixierung — ein Tesa-Klebeband und ein
            No-Name-Klebeband aus derselben Papierfabrik kleben in der Praxis identisch.
          </p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Produkt</th><th>Preis</th></tr>
              </thead>
              <tbody>
                <tr><td>Tesa 57654, Klebepads quadratisch, 75 × 75 mm</td><td>0,57 €</td></tr>
                <tr><td>Tesa 57043, Klebefilm transparent, 33 m × 19 mm</td><td>1,94 €</td></tr>
                <tr><td>Henkel Pritt Alleskleber, 150 g</td><td>2,31 €</td></tr>
                <tr><td>Tesa Tack Klebeknete</td><td>2,65 €</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schreibtisch-Zubehör: worauf es ankommt</h2>
          <p>
            Eine Schreibtischunterlage schützt nicht nur die Tischplatte — bei einer glatten Oberfläche merkt man
            im Alltag auch, ob die Maus präzise reagiert oder ruckelt. Eine gute Unterlage (z. B. Fellowes Breyta,
            ab <strong>15,12 €</strong>) ist eine der wenigen Anschaffungen hier, die man wirklich täglich spürt —
            im Gegensatz zu Deko-Organizern, die meist nach zwei Wochen ungenutzt herumstehen.
          </p>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Kaufe Verbrauchsmaterial (Klebeband, Papier, Kugelschreibermienen)
            in größeren Gebinden, sobald du weißt, dass du es regelmäßig brauchst — der Preis pro Stück sinkt
            spürbar. Bei Dingen, die du nur gelegentlich brauchst (Locher, Hefter, Aktenordner für ein einmaliges
            Projekt), lohnt sich dagegen die kleine Packung, nicht der Vorratskauf.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Büro & Schreibwaren im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Ordner, Schreibgeräte, Klebeband und mehr — aktuelle Preise direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/buero-schreibwaren" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
