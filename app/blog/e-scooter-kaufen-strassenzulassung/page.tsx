import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-Scooter kaufen: ABE und eKFV erklärt",
  description: "E-Scooter kaufen: ABE und eKFV, Versicherungskennzeichen, Alter, Alkohol, wo du fahren darfst, Akku-Pflege und Reichweite im Alltag erklärt.",
  keywords: [
    "e-scooter kaufen",
    "e scooter mit strassenzulassung",
    "e scooter abe pflicht",
    "ekfv e-scooter",
    "e scooter versicherungskennzeichen",
    "elektroroller kaufen",
    "e scooter versicherungskennzeichen",
    "e scooter alter",
    "e scooter wo fahren",
    "e scooter akku pflege",
  ],
  openGraph: {
    title: "E-Scooter kaufen: ABE und eKFV erklärt",
    description: "ABE, eKFV und Reichweite im Überblick – worauf es beim E-Scooter-Kauf wirklich ankommt.",
    url: "https://www.preisgucken.com/blog/e-scooter-kaufen-strassenzulassung/",
    type: "article",
    publishedTime: "2026-09-01",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "E-Scooter kaufen: ABE und eKFV erklärt" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/e-scooter-kaufen-strassenzulassung/" },
  twitter: {
    card: "summary_large_image",
    title: "E-Scooter kaufen: ABE und eKFV erklärt",
    description: "ABE, eKFV und Reichweite im Überblick – worauf es beim E-Scooter-Kauf wirklich ankommt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "E-Scooter kaufen: ABE und eKFV erklärt",
  datePublished: "2026-09-01",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function EScooterKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › E-Scooter kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">E-Scooter kaufen: ABE und eKFV erklärt</h1>
          <p className="lead text-muted">
            Nicht jeder E-Scooter darf einfach auf die Straße. Was ABE und eKFV bedeuten, worauf du bei
            Reichweite und Zulassung achten musst, und wo der Kauf sich wirklich lohnt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. September 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Was ABE und eKFV überhaupt bedeuten</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">📋 ABE (Allgemeine Betriebserlaubnis)</h3>
                <p className="small text-muted mb-0">
                  Bestätigt, dass ein Modell die technischen Voraussetzungen für den Straßenverkehr
                  erfüllt. Ohne ABE darfst du einen E-Scooter nicht auf öffentlichen Wegen fahren – auch
                  nicht auf dem Radweg.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚖️ eKFV (Elektrokleinstfahrzeuge-Verordnung)</h3>
                <p className="small text-muted mb-0">
                  Die Verordnung, die Elektrokleinstfahrzeuge wie E-Scooter überhaupt erst zulässt – mit
                  festen Grenzen für Geschwindigkeit (max. 20 km/h) und Bauart (Lenk- oder Haltestange,
                  zwei Bremsen).
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🏷️ Versicherungskennzeichen</h3>
                <p className="small text-muted mb-0">
                  Auch mit ABE brauchst du ein jährliches Versicherungskennzeichen (Plakette) für die
                  Haftpflicht – ohne drohen Bußgeld und im Schadensfall persönliche Haftung.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔋 Reichweite und Akku</h3>
                <p className="small text-muted mb-0">
                  Die Ah-Zahl des Akkus bestimmt die reale Reichweite – für den täglichen Arbeitsweg
                  lohnt sich ein größerer Akku, auch wenn er den Scooter etwas schwerer macht.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie stark der Preis zwischen Modellen mit gleicher Zulassung schwankt, zeigt der aktuelle
            Preisvergleich auf Preisgucken.de: Ein <strong>faltbarer E9 E-Scooter mit ABE und eKFV-Zulassung</strong>{" "}
            liegt bei rund <strong>219 €</strong>, während Modelle mit Doppelfederung und größerem Akku wie
            der <strong>S9Pro City-Pendler</strong> oder <strong>S9Max Komfort-Pendler</strong> zwischen{" "}
            <strong>229 € und 299 €</strong> liegen. Reines Zubehör wie Schloss oder Lenkertasche gibt es
            schon ab rund 20-30 €.
          </p>
          <p className="small text-muted">
            Auffällig: Der Preisunterschied zwischen den Modellen liegt fast ausschließlich an Federung,
            Akkugröße und Komfort-Ausstattung – die Straßenzulassung selbst ist bei praktisch allen
            aktuellen Modellen bereits eingepreist, nicht länger ein Kostentreiber.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">E-Scooter-Typen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Ultraleicht, faltbar</td><td>Kurzstrecken, Mitnahme in Bus/Bahn</td></tr>
                <tr><td>City-Pendler mit größerem Akku</td><td>Täglicher Arbeitsweg, längere Strecken</td></tr>
                <tr><td>Mit Doppelfederung</td><td>Unebene Wege, mehr Fahrkomfort</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>ABE-Nummer im Angebot prüfen:</strong> Steht keine ABE-Nummer in der Produktbeschreibung, ist der Scooter nicht automatisch straßenzugelassen.</li>
            <li><strong>Versicherungskennzeichen einplanen:</strong> Läuft jährlich neu und kostet zusätzlich zum Kaufpreis – gehört fest zur Anschaffung dazu.</li>
            <li><strong>Reichweite realistisch einschätzen:</strong> Herstellerangaben gelten meist unter Idealbedingungen – bei Steigungen oder Kälte rechne mit spürbar weniger.</li>
            <li><strong>Gewicht nicht unterschätzen:</strong> Ein Scooter, den du täglich Treppen hochtragen musst, sollte nicht schwerer sein, als du bequem tragen kannst.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Zubehör wie Schloss oder Lenkertasche separat zu kaufen ist
            oft günstiger als ein Komplettpaket mit demselben Zubehör vom Scooter-Hersteller – lohnt sich,
            beides einzeln zu vergleichen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Regeln im Straßenverkehr: Das darfst du mit dem E-Scooter</h2>
          <p>
            Die folgenden Punkte beschreiben die grundlegenden Regeln für E-Scooter mit Straßenzulassung in
            Deutschland. Sie sind eine allgemeine Orientierung und keine Rechtsberatung; maßgeblich sind die
            aktuellen Vorschriften und die Angaben des Herstellers.
          </p>
          <ul>
            <li><strong>Mindestalter:</strong> Für die Nutzung ist ein Mindestalter von 14 Jahren vorgesehen. Ein Führerschein ist nicht nötig.</li>
            <li><strong>Wo du fährst:</strong> Auf Radwegen, Radfahrstreifen und in Fahrradstraßen. Gibt es keine, nutzt du die Fahrbahn. Gehwege sind tabu.</li>
            <li><strong>Geschwindigkeit:</strong> Bauartbedingt bis höchstens 20 km/h.</li>
            <li><strong>Personen:</strong> Nur eine Person pro Scooter. Mitfahren ist nicht erlaubt.</li>
            <li><strong>Alkohol:</strong> Es gelten ähnliche Regeln wie für Kraftfahrzeuge. Für junge Fahrende und in der Probezeit gilt ein striktes Alkoholverbot. Trinke nicht und fahre danach, denn Verstöße können hohe Bußgelder, Fahrverbote oder Strafverfahren nach sich ziehen.</li>
            <li><strong>Helm:</strong> Eine Helmpflicht besteht nicht, aber ein Helm schützt bei Stürzen und wird dringend empfohlen.</li>
            <li><strong>Handy:</strong> Wie bei anderen Fahrzeugen gilt ein Verbot der Handynutzung während der Fahrt.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Versicherungskennzeichen: Was du wissen musst</h2>
          <ul>
            <li><strong>Pflicht:</strong> Ohne gültiges Versicherungskennzeichen darfst du nicht fahren.</li>
            <li><strong>Laufzeit:</strong> Die Kennzeichen gelten für ein Verkehrsjahr, das jeweils am 1. März beginnt und Ende Februar endet. Danach brauchst du ein neues.</li>
            <li><strong>Abschluss:</strong> Du erhältst es bei einem Versicherer, in der Regel online oder über Vermittler. Halte Personalausweis und Daten des Scooters bereit.</li>
            <li><strong>Anbringen:</strong> Das Kennzeichen muss fest und gut sichtbar am Fahrzeug befestigt sein.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Technik im Alltag: Akku, Reifen und Bremsen</h2>
          <ul>
            <li><strong>Akku laden:</strong> Verwende das Original-Ladegerät und lade nicht unbeaufsichtigt oder auf brennbarem Untergrund. Beschädigte Akkus gehören nicht ans Netz.</li>
            <li><strong>Reichweite:</strong> Kälte, Steigungen, hohes Fahrergewicht und Gegenwind senken die Reichweite. Plane Reserve ein.</li>
            <li><strong>Reifen:</strong> Luftreifen federn besser, können aber einen Platten bekommen. Vollgummireifen sind pannensicher, aber härter.</li>
            <li><strong>Bremsen:</strong> Prüfe regelmäßig beide Bremssysteme und lasse Beläge rechtzeitig wechseln.</li>
            <li><strong>Beleuchtung und Klingel:</strong> Sie sind für die Zulassung vorgeschrieben. Prüfe Licht und Reflektoren vor jeder Fahrt in der Dämmerung.</li>
            <li><strong>Regen:</strong> Achte auf die Schutzklasse (IP-Angabe) des Herstellers und fahre bei Nässe langsamer.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Mitnahme, Aufbewahrung und Diebstahlschutz</h2>
          <ul>
            <li><strong>Bus und Bahn:</strong> Ob du den Scooter mitnehmen darfst, regeln die Verkehrsbetriebe unterschiedlich. Informiere dich vor der Fahrt, besonders wenn der Akku groß ist.</li>
            <li><strong>Treppen und Wohnung:</strong> Plane Gewicht und Faltmaß ein, wenn du den Scooter täglich tragen musst.</li>
            <li><strong>Schloss:</strong> Verwende ein stabiles Schloss und schließe den Rahmen an einem festen Gegenstand an. Der Akku sollte nicht dauerhaft in der Kälte oder Hitze lagern.</li>
            <li><strong>Winterpause:</strong> Lade den Akku auf ein mittleres Niveau und lagere ihn trocken und frostfrei.</li>
          </ul>
          <p>
            Wer sich für Hoverboards interessiert: Sie haben keine Zulassung für den öffentlichen Verkehr und
            dürfen nur auf privatem Gelände genutzt werden. Mehr dazu im{" "}
            <a href="/blog/hoverboard-kaufen-ratgeber/">Hoverboard-Ratgeber</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim E-Scooter-Kauf</h2>
          <ul>
            <li><strong>Ohne ABE kaufen:</strong> Ein Modell ohne Zulassung darf nicht auf öffentlichen Wegen fahren.</li>
            <li><strong>Versicherung vergessen:</strong> Ohne Kennzeichen riskierst du Bußgeld und im Schadensfall Haftung.</li>
            <li><strong>Reichweite überschätzen:</strong> Herstellerangaben gelten unter Idealbedingungen.</li>
            <li><strong>Gewicht nicht prüfen:</strong> Schwere Modelle sind im Alltag schwer zu tragen.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Teste das Fahrverhalten auf privatem Gelände, bevor du das Fahrzeug im Straßenverkehr nutzt.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">E-Scooter im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Straßenzugelassene Modelle mit ABE und eKFV — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/e-scooter" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
