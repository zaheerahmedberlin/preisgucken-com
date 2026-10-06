import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatik oder Quarz? Uhrenkauf",
  description: "Uhren kaufen: Automatik, Quarz oder Solar, Glas und Armband, Wasserdichtigkeit, Garantie und Fälschungen – der Ratgeber mit Preisvergleich.",
  keywords: ["uhren kaufen", "armbanduhr damen kaufen", "herrenuhr online kaufen", "automatikuhr oder quarzuhr", "uhren preisvergleich", "uhrwerk vergleich", "uhr saphirglas oder mineralglas", "uhrenarmband wechseln", "uhr geschenk", "damenuhr herrenuhr größe"],
  openGraph: {
    title: "Automatik oder Quarz? Uhrenkauf",
    description: "Automatik oder Quarz? Welches Material hält am längsten? Werke, Größen und Preisklassen im Ratgeber.",
    url: "https://www.preisgucken.com/blog/uhren-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-08-01",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Automatik oder Quarz? Uhrenkauf" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/uhren-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Automatik oder Quarz? Uhrenkauf",
    description: "Automatik oder Quarz? Welches Material hält am längsten? Werke, Größen und Preisklassen im Ratgeber.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Automatik oder Quarz? Uhrenkauf",
  datePublished: "2026-08-01",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function UhrenKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Uhren kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Automatik oder Quarz? Uhrenkauf</h1>
          <p className="lead text-muted">Automatik, Quarz oder Solar – und aus welchem Material sollte das Gehäuse sein? Wir erklären, worauf es bei einer guten Uhr wirklich ankommt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Welches Uhrwerk passt zu dir?</h2>
          <p>Das Uhrwerk entscheidet über Genauigkeit, Wartungsaufwand und Preis. Die drei gängigsten Typen im Vergleich:</p>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚙️ Automatik</h3>
                <p className="small text-muted mb-0">Zieht sich durch Armbewegung selbst auf, keine Batterie nötig. Braucht regelmäßiges Tragen, sonst bleibt sie stehen. Beliebt wegen des mechanischen Charmes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔋 Quarz</h3>
                <p className="small text-muted mb-0">Batteriebetrieben, sehr präzise (Abweichung meist unter 1 Sek./Tag), wartungsarm und günstiger in der Anschaffung. Die pragmatischste Wahl für den Alltag.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">☀️ Solar</h3>
                <p className="small text-muted mb-0">Lädt sich über Licht auf, kein Batteriewechsel nötig. Umweltfreundlich und wartungsarm, aber seltener in klassischen Designs erhältlich.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Material – was hält wirklich lange?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Material</th><th>Vorteile</th><th>Nachteile</th></tr>
              </thead>
              <tbody>
                <tr><td>Edelstahl</td><td>Robust, kratzfest, günstig zu polieren</td><td>Vergleichsweise schwer</td></tr>
                <tr><td>Titan</td><td>Sehr leicht, hypoallergen, extrem stabil</td><td>Teurer, schwerer zu polieren</td></tr>
                <tr><td>Carbon</td><td>Federleicht, modernes Design</td><td>Weniger kratzfest als Metall</td></tr>
                <tr><td>Vergoldet/PVD</td><td>Edle Optik zum kleinen Preis</td><td>Beschichtung kann mit der Zeit abnutzen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Gehäusegröße & Passform</h2>
          <ul>
            <li><strong>34–38 mm:</strong> Klassisch und zierlich, meist für Damenuhren</li>
            <li><strong>39–42 mm:</strong> Universalgröße, für die meisten Handgelenke geeignet</li>
            <li><strong>43–46 mm:</strong> Auffällig und sportlich, für kräftigere Handgelenke</li>
            <li><strong>über 46 mm:</strong> Statement-Uhren, z. B. Chronographen oder Taucheruhren</li>
          </ul>
          <p className="small text-muted">Miss dein Handgelenk mit einem Maßband: Die Gehäusegröße sollte nicht breiter sein als der sichtbare Bereich des Handgelenks von oben.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Preisklassen im Überblick</h2>
          <ul>
            <li><strong>Unter 100 €:</strong> Solide Einsteigermodelle, meist Quarzwerk</li>
            <li><strong>100–500 €:</strong> Gute Materialqualität, teils erste Automatikmodelle</li>
            <li><strong>500–2.000 €:</strong> Hochwertige Verarbeitung, Manufaktur-Details, Saphirglas</li>
            <li><strong>Über 2.000 €:</strong> Premium-Uhrwerke, limitierte Editionen, Sammlerstücke</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Limitierte Editionen und Sondermodelle werden nach Ablauf der Erstverkaufsphase oft deutlich günstiger. Ein Preisvergleich auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Uhren lohnt sich fast immer.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Pflege & Wartung</h2>
          <ol>
            <li><strong>Wasserdichtigkeit prüfen:</strong> 30 m (3 ATM) reicht für Spritzwasser, ab 100 m (10 ATM) auch für Schwimmen</li>
            <li><strong>Saphirglas statt Mineralglas:</strong> deutlich kratzfester, besonders beim Alltagstragen relevant</li>
            <li><strong>Automatikuhren regelmäßig tragen</strong> oder ein Uhrenbeweger verwenden, damit sie nicht stehen bleibt</li>
            <li><strong>Armband regelmäßig reinigen</strong>, besonders bei Leder- oder Metallarmbändern mit Hautkontakt</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Glas, Armband und Funktionen: Details, die den Alltag prägen</h2>
          <h3 className="h6 fw-bold mt-3">Uhrenglas</h3>
          <p>
            Das Glas entscheidet darüber, wie lange die Uhr gut aussieht. <strong>Mineralglas</strong> ist
            günstig, kratzt aber schneller. <strong>Saphirglas</strong> ist deutlich kratzfester und kommt
            meist ab der mittleren Preisklasse zum Einsatz. <strong>Acrylglas</strong> (Plexiglas) findet
            sich vor allem bei sehr günstigen oder bewusst klassisch gestalteten Modellen; es kratzt
            leicht, lässt sich aber oft wieder aufpolieren.
          </p>
          <h3 className="h6 fw-bold mt-3">Armband</h3>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Armband</th><th>Passt zu</th><th>Zu beachten</th></tr>
              </thead>
              <tbody>
                <tr><td>Metall (Edelstahl)</td><td>Alltag, Büro, Wasserkontakt</td><td>Länge muss meist angepasst werden, schwerer</td></tr>
                <tr><td>Leder</td><td>Klassische und elegante Uhren</td><td>Empfindlich gegen Wasser und Schweiß</td></tr>
                <tr><td>Silikon / Kautschuk</td><td>Sport, Schwimmen, Freizeit</td><td>Zieht Staub an, wirkt weniger elegant</td></tr>
                <tr><td>Textil / Nylon</td><td>Casual, Sommer</td><td>Nutzt sich bei Dauergebrauch schneller ab</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Prüfe vor dem Kauf die <strong>Bandbreite</strong> in Millimetern (Abstand der Bandanstöße): Sie
            bestimmt, welche Wechselarmbänder später passen. Mit Schnellwechsel-Federstegen lässt sich das
            Armband ohne Werkzeug tauschen, sodass eine Uhr mit mehreren Bändern ganz unterschiedlich wirken kann.
          </p>
          <h3 className="h6 fw-bold mt-3">Zusatzfunktionen</h3>
          <ul>
            <li><strong>Datumsanzeige:</strong> Praktisch im Alltag, bei Automatikuhren muss das Datum nach längerem Stillstand neu eingestellt werden.</li>
            <li><strong>Chronograph:</strong> Stoppfunktion über Drücker; nützlich, aber für den Alltag nicht zwingend.</li>
            <li><strong>Leuchtziffern:</strong> Gut ablesbar im Dunkeln, besonders bei Sport- und Taucheruhren.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Damenuhr oder Herrenuhr? Eine Frage der Größe, nicht des Labels</h2>
          <p>
            Die Unterscheidung ist in erster Linie eine Frage von Gehäusegröße und Armbandbreite. Viele
            Frauen tragen bewusst größere Uhren, und manche Herren bevorzugen schmale, klassische Modelle.
            Entscheidend ist, dass das Gehäuse zum Handgelenk passt (siehe Schritt 3) und das Armband
            bequem sitzt. Als Geschenk ist die Größe der heikelste Punkt: Frage im Zweifel die Person
            vorsichtig nach dem Handgelenkumfang oder schaue, welche Uhren sie bereits trägt.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Garantie, Gewährleistung und Fälschungen</h2>
          <ul>
            <li><strong>Gewährleistung:</strong> Bei neuer Ware gilt gegenüber dem Händler eine gesetzliche Gewährleistung von zwei Jahren. Sie ist von einer Herstellergarantie zu unterscheiden, die freiwillig ist und eigene Bedingungen hat.</li>
            <li><strong>Seriöse Händler wählen:</strong> Sehr günstige Angebote für bekannte Markenuhren sind ein Warnzeichen. Prüfe Impressum, Bewertungen und Rückgabebedingungen des Händlers, bevor du kaufst.</li>
            <li><strong>Batteriewechsel:</strong> Wird das Gehäuse einer wasserdichten Uhr geöffnet, sollte danach die Dichtung geprüft werden. Lass die Batterie deshalb vom Fachmann wechseln.</li>
            <li><strong>Magnetfelder und Stöße:</strong> Lautsprecher, Handyhüllen mit Magnet und starke Erschütterungen können mechanische Uhren beeinträchtigen.</li>
          </ul>
          <p>
            Wer sich für hochpreisige Modelle interessiert, findet im Beitrag{" "}
            <a href="/blog/luxusuhren-kaufen/">Luxusuhren kaufen</a> zusätzliche Hinweise. Als Geschenkidee
            passt die Uhr in die Auswahl des{" "}
            <a href="/blog/weihnachtsgeschenke-ideen-guide/">Weihnachtsgeschenke-Ratgebers</a>, und eine
            Übersicht über Schmuck als Geschenk gibt{" "}
            <a href="/blog/schmuck-als-geschenk-ratgeber/">dieser Beitrag</a>.
          </p>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Uhren-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Automatik-, Quarz- und Sonderedition-Uhren aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/uhren" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Uhren-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
