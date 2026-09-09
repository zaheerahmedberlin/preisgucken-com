import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grill kaufen: Gas, Kohle oder Elektro? Der Grilltyp-Guide",
  description: "Rauchgeschmack, Anzündzeit und Balkon-Tauglichkeit im Vergleich – welcher Grilltyp wirklich zu dir passt, mit Preisvergleich für die letzte große Grillsaison des Jahres.",
  keywords: [
    "grill kaufen",
    "gasgrill oder holzkohlegrill",
    "elektrogrill balkon",
    "grill vergleich",
    "gasgrill kaufen",
    "holzkohlegrill kaufen",
  ],
  openGraph: {
    title: "Grill kaufen: Gas, Kohle oder Elektro? Der Grilltyp-Guide",
    description: "Rauchgeschmack, Anzündzeit und Balkon-Tauglichkeit im Vergleich – welcher Grilltyp wirklich zu dir passt.",
    url: "https://www.preisgucken.com/blog/grill-kaufen-gas-kohle-elektro-guide",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Grill kaufen: Gas, Kohle oder Elektro?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/grill-kaufen-gas-kohle-elektro-guide" },
  twitter: {
    card: "summary_large_image",
    title: "Grill kaufen: Gas, Kohle oder Elektro? Der Grilltyp-Guide",
    description: "Rauchgeschmack, Anzündzeit und Balkon-Tauglichkeit im Vergleich – welcher Grilltyp wirklich zu dir passt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Grill kaufen: Gas, Kohle oder Elektro? Der Grilltyp-Guide",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function GrillKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Grill kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Möbel & Wohnen</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Grill kaufen: Gas, Kohle oder Elektro? Der Grilltyp-Guide</h1>
          <p className="lead text-muted">
            Der 3. Oktober ist für viele die letzte große Grillgelegenheit vor dem Herbst – ob Familienfeier im
            Garten oder spontane Grillparty mit Freunden. Wer jetzt noch ohne eigenen Grill dasteht, sollte
            wissen: Der Grilltyp entscheidet mehr über Geschmack und Aufwand als die Marke.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die drei Grilltypen im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔥 Holzkohlegrill</h3>
                <p className="small text-muted mb-0">
                  Bestes Raucharoma, günstigster Einstieg. Nachteil: 20-30 Minuten Anzündzeit, Asche-Entsorgung
                  danach. Ideal für alle, denen der klassische Grillgeschmack wichtiger ist als Tempo.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💨 Gasgrill</h3>
                <p className="small text-muted mb-0">
                  Startklar in 5-10 Minuten, präzise Temperatursteuerung, kein Rauch für Nachbarn. Höherer
                  Anschaffungspreis, dafür planbarer für spontane Grillabende unter der Woche.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚡ Elektrogrill</h3>
                <p className="small text-muted mb-0">
                  Einzige Option für die meisten Balkone und Mietwohnungen ohne offenes Feuer. Geringere
                  Grilltemperatur als Gas oder Kohle, dafür rauch- und geruchsarm.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit die Preisspanne je nach Grilltyp tatsächlich ist, zeigt ein Blick in den aktuellen
            Preisvergleich: Ein <strong>Weber Original Kettle</strong> (47 cm, Holzkohle) liegt bei rund{" "}
            <strong>89 €</strong> – der klassische Einstieg. Ein <strong>Char Broil Performance CORE B 2 Gasgrill</strong>{" "}
            mit zwei Brennern gibt es ab etwa <strong>399 €</strong>, während ein <strong>Weber Genesis SP-435W</strong>{" "}
            mit deutlich mehr Leistung und Ausstattung bei rund <strong>1.679 €</strong> liegt. Passendes Zubehör wie
            eine <strong>Grillbürste</strong> ist schon ab <strong>12 €</strong> zu haben.
          </p>
          <p className="small text-muted">
            Auffällig: Innerhalb derselben Marke liegen zwischen Einstiegs- und Premium-Gasgrill oft mehrere
            Tausend Euro – meist wegen Brenneranzahl, Grillfläche und Zusatzfunktionen wie Sear-Zonen oder
            Smart-Steuerung, nicht wegen der reinen Grillqualität.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Balkon oder Mietwohnung?</strong> Viele Hausordnungen erlauben nur Elektrogrills – Holzkohle- und Gasgrills sind auf Balkonen oft explizit verboten. Vorher in den Mietvertrag oder die Hausordnung schauen.</li>
            <li><strong>Wie oft grillst du wirklich?</strong> Bei gelegentlichem Grillen lohnt sich ein günstiger Holzkohlegrill mehr als ein teurer Gasgrill, der die meiste Zeit ungenutzt steht.</li>
            <li><strong>Grillfläche realistisch einschätzen:</strong> Für 4-6 Personen reichen meist 47-57 cm Durchmesser – größere Modelle lohnen sich erst bei regelmäßigen größeren Runden.</li>
            <li><strong>Zubehör mitdenken:</strong> Abdeckhaube, Grillbesteck und Reinigungsbürste separat einkalkulieren – bei den meisten Grills nicht im Lieferumfang enthalten.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Anfang Oktober ist für viele Händler das Ende der Grillsaison –
            ein guter Zeitpunkt, um nach Restposten und Vorjahresmodellen zu suchen, die preislich oft deutlich
            unter aktuellen Modellen liegen, ohne dass sich an der Grillleistung etwas ändert.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Grills im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Gas-, Kohle- und Elektrogrills von Weber, Char Broil & Co. — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/grills-outdoor-kueche" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
