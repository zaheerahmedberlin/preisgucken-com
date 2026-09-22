import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elektroheizung kaufen: Heizlüfter, Konvektor oder Ölradiator?",
  description: "Heizlüfter, Heizstrahler, Konvektor oder Ölradiator – welcher Typ für welchen Einsatzzweck taugt, was er im Betrieb wirklich kostet, mit Preisvergleich.",
  keywords: [
    "heizlüfter kaufen",
    "elektroheizung günstig kaufen",
    "ölradiator oder konvektor",
    "heizstrahler kaufen",
    "elektroheizung stromkosten",
    "mobile heizung kaufen",
  ],
  openGraph: {
    title: "Elektroheizung kaufen: Heizlüfter, Konvektor oder Ölradiator?",
    description: "Heizlüfter, Heizstrahler, Konvektor oder Ölradiator – welcher Typ für welchen Einsatzzweck taugt, was er im Betrieb wirklich kostet, mit Preisvergleich.",
    url: "https://www.preisgucken.com/blog/elektroheizung-kaufen-heizluefter-konvektor-oelradiator/",
    type: "article",
    publishedTime: "2026-09-22",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Elektroheizung kaufen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/elektroheizung-kaufen-heizluefter-konvektor-oelradiator/" },
  twitter: {
    card: "summary_large_image",
    title: "Elektroheizung kaufen: Heizlüfter, Konvektor oder Ölradiator?",
    description: "Welcher Elektroheizung-Typ für welchen Einsatzzweck taugt, mit Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Elektroheizung kaufen: Heizlüfter, Konvektor oder Ölradiator?",
  datePublished: "2026-09-22",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function ElektroheizungKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Elektroheizung kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Elektronik & Technik</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Elektroheizung kaufen: Heizlüfter, Konvektor oder Ölradiator?</h1>
          <p className="lead text-muted">
            Ein kalter Altbau-Raum, das Homeoffice im ungeheizten Zimmer oder die Übergangszeit vor der zentralen
            Heizsaison: Elektrische Zusatzheizungen sind eine schnelle Lösung für einzelne Räume – aber keine
            austauschbare Alternative zur Zentralheizung. Welcher Typ wofür taugt und was der Betrieb wirklich kostet.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 22. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <div className="alert alert-warning small mb-5">
          ⚡ <strong>Wichtig vorweg:</strong> Elektrische Heizgeräte wandeln Strom nahezu 1:1 in Wärme um – anders
          als eine Wärmepumpe oder Gasheizung sind sie damit im Dauerbetrieb spürbar teurer als zentrale
          Heizsysteme. Sinnvoll sind sie für einzelne, selten genutzte Räume oder als Überbrückung – nicht als
          Ersatz für die Zentralheizung.
        </div>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Vier Bauarten, vier Einsatzzwecke</h2>
          <p>
            "Elektroheizung" ist ein Sammelbegriff für technisch sehr unterschiedliche Geräte. Sie unterscheiden
            sich vor allem darin, wie schnell sie wärmen, wie sie die Wärme verteilen und wie laut sie dabei sind:
          </p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Funktionsweise</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Heizlüfter</strong></td>
                  <td>Ventilator bläst Luft über ein heißes Heizelement – sofort warm, aber ungleichmäßig und hörbar.</td>
                  <td>Kurzes, schnelles Aufwärmen eines kleinen Raums (Bad, Homeoffice-Ecke)</td>
                </tr>
                <tr>
                  <td><strong>Heizstrahler</strong></td>
                  <td>Infrarot-Strahlung erwärmt direkt Personen und Oberflächen, nicht die Raumluft.</td>
                  <td>Terrasse, Balkon, Werkstatt – Wärme genau dort, wo man steht oder sitzt</td>
                </tr>
                <tr>
                  <td><strong>Konvektor</strong></td>
                  <td>Kalte Luft wird unten angesaugt, über ein Heizelement erwärmt und strömt oben wieder aus – leise, gleichmäßiger als der Heizlüfter.</td>
                  <td>Längerer Betrieb in einem Zimmer, z. B. als Ergänzung im Gästezimmer</td>
                </tr>
                <tr>
                  <td><strong>Ölradiator</strong></td>
                  <td>Elektrisch erhitztes Öl zirkuliert im geschlossenen Gehäuse – langsamer Start, aber lange, gleichmäßige Wärmeabgabe auch nach dem Abschalten.</td>
                  <td>Längeres, leises Heizen über mehrere Stunden, z. B. im Schlafzimmer</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiele aus dem aktuellen Preisvergleich</h2>
          <p>
            Die Preisspanne ist je nach Typ und Leistung groß. Ein Auszug aus dem aktuellen Sortiment zeigt, wie
            unterschiedlich die vier Bauarten eingepreist sind:
          </p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Produkt</th><th>Typ</th><th>Leistung</th><th>Preis</th></tr>
              </thead>
              <tbody>
                <tr><td>SHX Heizstrahler, Kippschutz</td><td>Heizstrahler</td><td>800 W</td><td>12,57 €</td></tr>
                <tr><td>Brunner Heizstrahler DEVIL HEATSTAR</td><td>Heizstrahler</td><td>–</td><td>15,90 €</td></tr>
                <tr><td>Nedis Heizlüfter Keramik</td><td>Heizlüfter</td><td>500 W</td><td>30,99 €</td></tr>
                <tr><td>Nedis Konvektor, 3-stufig</td><td>Konvektor</td><td>750/1.250/2.000 W</td><td>41,63 €</td></tr>
                <tr><td>Deuba Heizlüfter Keramik</td><td>Heizlüfter</td><td>2.000 W</td><td>42,95 €</td></tr>
                <tr><td>Dimplex Standkonvektor</td><td>Konvektor</td><td>2.000 W</td><td>77,95 €</td></tr>
                <tr><td>Delonghi Dragon 4</td><td>Ölradiator</td><td>–</td><td>139,99 €</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">
            Auffällig: Heizstrahler sind meist die günstigste Anschaffung, dafür heizen sie nur einen begrenzten
            Bereich direkt an – nicht den ganzen Raum. Ölradiatoren sind in der Anschaffung teurer, dafür deutlich
            leiser im Dauerbetrieb.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Was der Betrieb wirklich kostet</h2>
          <p>
            Die Anschaffung ist meist der kleinere Posten. Ein 2.000-Watt-Gerät verbraucht bei voller Leistung
            2 kWh pro Stunde – bei aktuellen Strompreisen von rund 30 Cent/kWh sind das etwa 60 Cent pro Stunde
            Dauerbetrieb. Über einen ganzen Wintertag gerechnet, summiert sich das schnell auf einen zweistelligen
            Betrag – deutlich mehr, als dieselbe Wärmemenge über eine Gasheizung oder Wärmepumpe kosten würde.
          </p>
          <p>
            Deshalb lohnen sich Elektroheizungen vor allem dort, wo eine Zentralheizung fehlt oder unwirtschaftlich
            wäre – nicht als dauerhafter Ersatz für ein durchgehend genutztes Zimmer.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>Raumgröße gegen Leistung prüfen:</strong> Als grobe Faustregel gelten etwa 60–100 Watt pro Quadratmeter bei normaler Deckenhöhe – ein zu schwaches Gerät läuft dauerhaft auf voller Stufe, ohne den Raum wirklich warm zu bekommen.</li>
            <li><strong>Sicherheitsfunktionen nicht als Extra behandeln:</strong> Kippschutz und Überhitzungsschutz sollten Standard sein, kein Aufpreis-Feature – gerade bei Geräten, die unbeaufsichtigt laufen.</li>
            <li><strong>Thermostat und Stufenschaltung nutzen:</strong> Ein Gerät mit Thermostat schaltet automatisch ab, sobald die Zieltemperatur erreicht ist, statt durchgehend auf voller Leistung zu laufen.</li>
            <li><strong>Lautstärke im Dauerbetrieb bedenken:</strong> Heizlüfter sind meist deutlich hörbar – für Schlaf- oder Arbeitszimmer sind Konvektor oder Ölradiator oft die angenehmere Wahl.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Ein Heizstrahler mit Infrarot-Technik erwärmt dich direkt, nicht
            die Raumluft – auf Terrasse oder in der Werkstatt oft die sparsamere Wahl gegenüber einem Konvektor,
            der erst den ganzen Raum aufheizen muss.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Elektroheizungen im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Heizlüfter, Heizstrahler, Konvektor und Ölradiator – aktuelle Preise direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/heizung" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
