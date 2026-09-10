import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gesichtspflege-Routine: Die 4 Schritte, die wirklich zählen",
  description: "Reinigung, Serum, Feuchtigkeitscreme und Sonnenschutz – welche Routine für welchen Hauttyp Sinn ergibt, mit Preisvergleich für jedes Budget.",
  keywords: [
    "gesichtspflege routine",
    "hautpflege reihenfolge",
    "welche gesichtscreme für welchen hauttyp",
    "serum vor oder nach creme",
    "gesichtspflege kaufen",
    "skincare routine reihenfolge",
  ],
  openGraph: {
    title: "Gesichtspflege-Routine: Die 4 Schritte, die wirklich zählen",
    description: "Reinigung, Serum, Feuchtigkeitscreme und Sonnenschutz – welche Routine für welchen Hauttyp Sinn ergibt.",
    url: "https://www.preisgucken.com/blog/gesichtspflege-routine-hauttyp-guide/",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Gesichtspflege-Routine: Die 4 Schritte, die wirklich zählen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/gesichtspflege-routine-hauttyp-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Gesichtspflege-Routine: Die 4 Schritte, die wirklich zählen",
    description: "Reinigung, Serum, Feuchtigkeitscreme und Sonnenschutz – welche Routine für welchen Hauttyp Sinn ergibt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Gesichtspflege-Routine: Die 4 Schritte, die wirklich zählen",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function GesichtspflegeRoutinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Gesichtspflege-Routine
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kosmetik & Beauty</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Gesichtspflege-Routine: Die 4 Schritte, die wirklich zählen</h1>
          <p className="lead text-muted">
            Zehn-Schritte-Routinen aus dem Internet überfordern mehr, als sie helfen. Tatsächlich reichen vier
            Schritte in der richtigen Reihenfolge für die meisten Hauttypen völlig aus – der Rest ist Kür, nicht
            Pflicht.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die 4 Schritte in der richtigen Reihenfolge</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">1️⃣ Reinigung</h3>
                <p className="small text-muted mb-0">
                  Entfernt Talg, Make-up und Umweltschmutz, bevor Wirkstoffe überhaupt in die Haut einziehen
                  können. Ohne diesen Schritt bringt jedes Serum danach weniger.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">2️⃣ Serum</h3>
                <p className="small text-muted mb-0">
                  Konzentrierte Wirkstoffe wie Hyaluronsäure oder Vitamin C – wird auf die gereinigte,
                  noch leicht feuchte Haut aufgetragen, damit die Wirkstoffe besser einziehen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">3️⃣ Feuchtigkeitscreme</h3>
                <p className="small text-muted mb-0">
                  Versiegelt die Feuchtigkeit und das Serum darunter. Bei fettiger Haut reicht oft eine
                  leichte Gel-Creme, trockene Haut profitiert von reichhaltigeren Formeln.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">4️⃣ Sonnenschutz (morgens)</h3>
                <p className="small text-muted mb-0">
                  Der meistübersprungene, aber wichtigste Schritt gegen Hautalterung – ein SPF30 in der
                  Tagescreme reicht für den Alltag völlig aus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie günstig eine vollständige 4-Schritte-Routine tatsächlich sein kann, zeigt ein Blick in den
            aktuellen Preisvergleich: Eine <strong>Reinigungs-Stick</strong> gibt es schon ab rund{" "}
            <strong>3,50 €</strong>, ein <strong>Hyaluronsäure-Serum</strong> ab etwa <strong>3,75 €</strong>,
            eine <strong>Tagescreme mit SPF30</strong> (Nivea) ab rund <strong>6,42 €</strong>. Am oberen Ende
            der Preisspanne liegen Marken wie <strong>Dr. Hauschka</strong> (Gesichtscreme, ca. <strong>24 €</strong>)
            oder <strong>Elizabeth Arden</strong> (Anti-Aging Augencreme, ca. <strong>31 €</strong>).
          </p>
          <p className="small text-muted">
            Eine komplette Routine mit allen vier Schritten ist damit schon für unter 20 € im Monat möglich –
            der Unterschied zu teureren Marken liegt meist eher bei Textur und Duft als bei der Grundwirkung.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>Hauttyp vor Trend:</strong> Fettige, trockene, Misch- oder empfindliche Haut brauchen unterschiedliche Texturen – ein Bestseller für trockene Haut kann fettige Haut zusätzlich belasten.</li>
            <li><strong>Weniger Produkte, aber konsequent:</strong> Vier Schritte täglich angewendet bringen mehr als zehn Schritte, die nach zwei Wochen im Schrank landen.</li>
            <li><strong>Neue Produkte einzeln testen:</strong> Bei Unverträglichkeiten lässt sich sonst schwer nachvollziehen, welches Produkt die Ursache war.</li>
            <li><strong>SPF nicht nur im Sommer:</strong> UV-A-Strahlung, die für Hautalterung verantwortlich ist, kommt auch im Winter und bei bewölktem Himmel durch.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Eine Tagescreme mit eingebautem SPF30 spart einen kompletten
            Produktschritt gegenüber separater Creme und Sonnenschutz – meist günstiger und weniger Aufwand
            als zwei einzelne Produkte.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Gesichtspflege im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Reinigung, Seren und Cremes für jeden Hauttyp — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/gesichtspflege" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
