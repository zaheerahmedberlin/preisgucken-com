import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rezeptfreie Medikamente online kaufen: OTC & Homöopathie im Preisvergleich",
  description: "Apothekenpflichtig, freiverkäuflich oder verschreibungspflichtig? Der Unterschied erklärt – plus Preisvergleich für OTC-Medikamente, Homöopathie und Nahrungsergänzung.",
  keywords: [
    "rezeptfreie medikamente online kaufen",
    "otc medikamente kaufen",
    "apotheke online günstig",
    "versandapotheke preisvergleich",
    "homöopathie online kaufen",
    "freiverkäufliche medikamente",
    "online apotheke deutschland",
  ],
  openGraph: {
    title: "Rezeptfreie Medikamente online kaufen: OTC & Homöopathie im Preisvergleich",
    description: "Apothekenpflichtig, freiverkäuflich oder verschreibungspflichtig? Der Unterschied erklärt – plus Preisvergleich für OTC-Medikamente, Homöopathie und Nahrungsergänzung.",
    url: "https://www.preisgucken.com/blog/rezeptfreie-medikamente-online-kaufen",
    type: "article",
    publishedTime: "2026-09-08",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Rezeptfreie Medikamente online kaufen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/rezeptfreie-medikamente-online-kaufen" },
  twitter: {
    card: "summary_large_image",
    title: "Rezeptfreie Medikamente online kaufen: OTC & Homöopathie im Preisvergleich",
    description: "Apothekenpflichtig, freiverkäuflich oder verschreibungspflichtig? Der Unterschied erklärt – plus Preisvergleich für OTC-Medikamente, Homöopathie und Nahrungsergänzung.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Rezeptfreie Medikamente online kaufen: OTC & Homöopathie im Preisvergleich",
  datePublished: "2026-09-08",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function RezeptfreieMedikamentePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Rezeptfreie Medikamente
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Gesundheit</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Rezeptfreie Medikamente online kaufen: OTC & Homöopathie im Preisvergleich</h1>
          <p className="lead text-muted">
            Nicht jedes Medikament in der Online-Apotheke lässt sich im Preis vergleichen – und das ist auch
            gut so. Was apothekenpflichtig, freiverkäuflich und verschreibungspflichtig wirklich bedeutet,
            und wo du beim OTC-Kauf wirklich sparen kannst.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 8. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <div className="alert alert-warning small mb-5">
          ⚕️ <strong>Hinweis:</strong> Dieser Artikel dient zur allgemeinen Information und ersetzt keine
          medizinische Beratung. Bei gesundheitlichen Beschwerden oder Unsicherheiten bei der Einnahme wende
          dich bitte an einen Arzt oder Apotheker.
        </div>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Warum du nicht jedes Medikament im Preis vergleichen kannst</h2>
          <p>
            Deutschland hat eine Besonderheit, die viele beim Online-Kauf überrascht: Für verschreibungspflichtige
            Arzneimittel gilt die Arzneimittelpreisverordnung (AMPreisV) – der Preis ist gesetzlich festgelegt und
            bei jeder Apotheke identisch. Ein Preisvergleich bringt hier nichts, weil es schlicht nichts zu
            vergleichen gibt.
          </p>
          <p>
            Anders sieht es bei rezeptfreien Produkten aus: Freiverkäufliche und apothekenpflichtige Mittel,
            Nahrungsergänzung, Homöopathie und Pflegebedarf haben keine Preisbindung – hier können zwischen
            Anbietern mehrere Euro Unterschied liegen, gerade bei Dauereinnahme über Monate ein spürbarer Betrag.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die drei Kategorien im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🟢 Freiverkäuflich</h3>
                <p className="small text-muted mb-0">
                  Keine Apothekenpflicht – theoretisch auch im Supermarkt oder der Drogerie erhältlich (z. B.
                  viele Nahrungsergänzungsmittel, Tees, Verbandsmaterial). Preis frei kalkulierbar, Vergleich
                  lohnt sich am meisten.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🟡 Apothekenpflichtig (OTC)</h3>
                <p className="small text-muted mb-0">
                  Nur in Apotheken verkäuflich, aber ohne Rezept – z. B. viele Erkältungsmittel, Schmerztabletten
                  in kleiner Packungsgröße, Homöopathika. Kein Rezept nötig, Preis variiert zwischen Anbietern.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔴 Verschreibungspflichtig</h3>
                <p className="small text-muted mb-0">
                  Nur mit ärztlichem Rezept, Preis gesetzlich fixiert (AMPreisV). Kein Preisvergleich möglich
                  oder nötig – bei uns findest du diese Produkte deshalb nicht.
                </p>
              </div>
            </div>
          </div>
          <p className="small text-muted mt-3">
            Preisgucken listet ausschließlich freiverkäufliche und apothekenpflichtige (OTC) Produkte – genau die
            Kategorien, in denen ein Preisvergleich tatsächlich Geld spart.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit das freiverkäufliche und apothekenpflichtige Sortiment tatsächlich ist, zeigt ein Blick in
            den aktuellen Preisvergleich: <strong>Umckaloabo</strong> (pflanzlich, bei Erkältung) liegt bei rund{" "}
            <strong>16,49 €</strong>, ein <strong>DHU Schüßler-Salz</strong> in der 200er-Packung bei{" "}
            <strong>8,99 €</strong>, <strong>Canephron N Tropfen</strong> bei rund <strong>19,99 €</strong> und ein
            hochdosiertes <strong>Q10-Präparat</strong> mit 120 Kapseln bei <strong>39,46 €</strong>. Auch
            Pflegebedarf ist dabei: <strong>Inkontinenz-Einlagen</strong> im 6er-Set liegen bei etwa{" "}
            <strong>39,99 €</strong>.
          </p>
          <p className="small text-muted">
            Gerade bei Produkten, die du regelmäßig nachkaufst – Nahrungsergänzung, Homöopathie, Pflegebedarf –
            summiert sich ein Preisunterschied von wenigen Euro pro Packung über das Jahr schnell auf einen
            zweistelligen Betrag.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die wichtigsten Apotheken-Kategorien im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Kategorie</th><th>Typische Produkte</th></tr>
              </thead>
              <tbody>
                <tr><td>Homöopathie & Naturheilmittel</td><td>Globuli, Schüßler-Salze, Bachblüten, Komplexmittel</td></tr>
                <tr><td>Nahrungsergänzung & Vitamine</td><td>Vitamine, Mineralstoffe, Aminosäuren, Nahrungsergänzung für Sport</td></tr>
                <tr><td>Erkältung & Immunsystem</td><td>Hustenmittel, Halstabletten, Nasensprays, Immunstärkung</td></tr>
                <tr><td>Verbandsmaterial & Erste Hilfe</td><td>Pflaster, Kompressen, Binden, Hausapotheken-Bedarf</td></tr>
                <tr><td>Pflegebedarf & Inkontinenz</td><td>Inkontinenzprodukte, Stomabedarf, Pflegehilfsmittel</td></tr>
                <tr><td>Haut- & Gesichtspflege</td><td>Medizinische Hautpflege, Cremes bei Hauterkrankungen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Online-Kauf achten solltest</h2>
          <ol>
            <li><strong>Versandhandelserlaubnis prüfen:</strong> Seriöse Online-Apotheken sind beim DIMDI registriert und tragen ein Versandapotheken-Logo mit Registrierungsnummer im Impressum.</li>
            <li><strong>Apothekenpflicht respektieren:</strong> Wird ein eigentlich apothekenpflichtiges Produkt ohne jede Einschränkung verkauft, ist Vorsicht geboten – das gehört nicht in den freien Handel.</li>
            <li><strong>Wechselwirkungen im Blick behalten:</strong> Auch freiverkäufliche Nahrungsergänzung kann sich mit bestehenden Medikamenten überschneiden – im Zweifel den Apotheker fragen, nicht nur den Beipackzettel.</li>
            <li><strong>Packungsgröße statt Einzelpreis vergleichen:</strong> Bei Dauereinnahme lohnt sich oft die größere Packung – rechne immer den Preis pro Einheit (Stück, ml, g) aus.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Bei Homöopathie und Nahrungsergänzung sind wirkstoffgleiche
            Generika oft deutlich günstiger als das Markenprodukt – auf Wirkstoff und Dosierung achten, nicht
            auf den Markennamen.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Apotheken-Sortiment im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Homöopathie, Nahrungsergänzung, Erkältungsmittel und mehr — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/gesundheit" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
