import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Elektroinstallation kaufen: Was zählt",
  description: "Elektroinstallation kaufen: Dosen, Schalterprogramme, Schutz, Smart-Home-Aktoren und wann eine Elektrofachkraft nötig ist – mit Preisvergleich.",
  keywords: [
    "elektroinstallation kaufen",
    "schalter steckdosen kaufen",
    "unterputz aufputz dose",
    "schalterprogramm kompatibel",
    "schutzkontakt steckdose",
    "smart home aktoren",
    "gira jung schalter",
    "elektroinstallationsmaterial ratgeber",
    "elektroinstallation selbst machen",
    "hohlwanddose trockenbau",
    "fi schalter leitungsschutzschalter",
    "smart home aktor einbauen",
  ],
  openGraph: {
    title: "Elektroinstallation kaufen: Was zählt",
    description: "Unterputz oder Aufputz, Schalterprogramm-Kompatibilität und Schutzkontakt – worauf es wirklich ankommt.",
    url: "https://www.preisgucken.com/blog/elektroinstallation-kaufen/",
    type: "article",
    publishedTime: "2026-08-30",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Elektroinstallation kaufen: Was zählt" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/elektroinstallation-kaufen/" },
  twitter: {
    card: "summary_large_image",
    title: "Elektroinstallation kaufen: Was zählt",
    description: "Unterputz oder Aufputz, Schalterprogramm-Kompatibilität und Schutzkontakt – worauf es wirklich ankommt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Elektroinstallation kaufen: Was zählt",
  datePublished: "2026-08-30",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function ElektroinstallationKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Elektroinstallation kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Elektroinstallation kaufen: Was zählt</h1>
          <p className="lead text-muted">
            Ob Neubau, Sanierung oder Smart-Home-Nachrüstung: Elektroinstallationsmaterial wirkt austauschbar,
            ist es aber nicht. Wir zeigen, worauf es bei Dosentyp, Schalterprogramm und Sicherheit wirklich ankommt –
            bevor die erste Steckdose bestellt wird.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 30. August 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 11 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welche Komponente brauchst du wirklich?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🧱 Unterputz-Dosen</h3>
                <p className="small text-muted mb-0">
                  Für massive Wände die Standardlösung, für Gips- oder Trockenbauwände braucht es dagegen
                  spezielle Hohlwanddosen – eine normale Unterputzdose hält dort nicht sicher.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">📦 Aufputz-Dosen</h3>
                <p className="small text-muted mb-0">
                  Ideal für nachträgliche Installation ohne Stemmarbeiten – etwa im Keller, in der Werkstatt
                  oder wenn eine Wand nicht geöffnet werden soll.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🎛 Schalter &amp; Steckdosen</h3>
                <p className="small text-muted mb-0">
                  Schutzkontakt-Steckdosen leiten Fehlerströme sicher ab – der Standard in jeder
                  Wohninstallation. Design-Schalterprogramme (z. B. Gira, Jung) kommen meist als komplette
                  Systemfamilie, nicht einzeln.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🤖 Smart-Home-Aktoren</h3>
                <p className="small text-muted mb-0">
                  Schaltaktoren, Jalousieaktoren und Dimmer sitzen meist in der Unterverteilung oder direkt
                  hinter der Dose – hier lohnt sich die Abstimmung mit einem Elektriker, bevor bestellt wird.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit das Preisspektrum bei Elektroinstallationsmaterial ist, zeigt der aktuelle
            Preisvergleich auf Preisgucken.de: Ein <strong>3-Loch Universal-SAT/BK-Anschlussdose</strong> liegt
            bei rund <strong>28 €</strong>, ein einzelner <strong>Schaltaktor</strong> für die
            Unterverteilung bei etwa <strong>129 €</strong>, während ein komplettes{" "}
            <strong>Smart-Home-Bediensystem mit Touch-Display</strong> (z. B. Gira G1) mit rund{" "}
            <strong>1.436 €</strong> zu Buche schlägt. Dazwischen liegen Komponenten wie ein{" "}
            <strong>Funk-Rauchwarnmelder-Modul</strong> für etwa <strong>65 €</strong> oder ein{" "}
            <strong>Smart-Radio-Modul</strong> für Unterputzeinbau ab rund <strong>183 €</strong>.
          </p>
          <p className="small text-muted">
            Auffällig: bei Markenschalterprogrammen (Gira, Jung, Eaton, Eltako) bestimmt meist die einmal
            gewählte Systemfamilie den Preis über Jahre hinweg – ein Nachkauf einzelner Module bleibt nur
            günstig, solange man beim gleichen Programm bleibt.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Komponenten im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Komponente</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Unterputz-Dose</td><td>Massivwand, dauerhafte Installation im Neubau</td></tr>
                <tr><td>Hohlwanddose</td><td>Gips- und Trockenbauwände</td></tr>
                <tr><td>Aufputz-Dose</td><td>Nachrüstung ohne Stemmarbeiten</td></tr>
                <tr><td>Smart-Home-Aktor</td><td>Automatisierung von Licht, Jalousie, Heizung</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Dosentyp zur Wand passend wählen:</strong> Unterputz-, Hohlwand- und Aufputzdosen sind nicht austauschbar – die Wandart entscheidet, welcher Typ überhaupt sicher hält.</li>
            <li><strong>Schalterprogramm-Kompatibilität prüfen:</strong> Rahmen, Wippen und Einsätze verschiedener Hersteller passen in der Regel nicht zusammen, und selbst Farbtöne (z. B. Reinweiß) unterscheiden sich zwischen Herstellern spürbar – bei einer Erweiterung lohnt sich der Blick auf das exakt gleiche Programm.</li>
            <li><strong>Schutzkontakt nicht optional denken:</strong> Schutzkontakt-Steckdosen sind in Wohninstallationen Standard und leiten Fehlerströme sicher ab – bei Ersatz oder Nachrüstung immer gleichwertig oder besser wählen, nie schlechter.</li>
            <li><strong>Kabelquerschnitt zur Last passend wählen:</strong> Kabelkanäle, Verbinder und Klemmen müssen zum tatsächlichen Kabelquerschnitt passen – zu knapp bemessene Komponenten sind ein Sicherheitsrisiko, nicht nur ein Passungsproblem.</li>
            <li><strong>Smart-Home-Komponenten vorab abstimmen:</strong> Aktoren für Schalten, Dimmen oder Jalousiesteuerung sitzen oft in der Unterverteilung – hier vor dem Kauf klären, ob eine Fachkraft die Installation übernimmt, gerade bei Eingriffen in die Verteilung.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Bei einem geplanten Schalterprogramm-Wechsel lohnt sich der
            Preisvergleich besonders für die Grundausstattung (Rahmen, Wippen, Steckdoseneinsätze) in
            größerer Stückzahl – Einzelstücke sind pro Teil meist teurer als ein direkter Mehrfachkauf
            beim günstigsten Anbieter.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Was darfst du selbst machen – und was nicht?</h2>
          <p>
            Arbeiten an der festen Elektroinstallation gehören in die Hände einer Elektrofachkraft. Dazu
            zählen Eingriffe im Zählerschrank und in der Unterverteilung, das Verlegen von Leitungen und das
            Anschließen von Steckdosen, Schaltern und Aktoren an das Hausnetz. Laien können dabei
            lebensgefährlichen Spannungen ausgesetzt sein, und fehlerhafte Installationen können Brände
            auslösen. Auch Versicherung und Netzbetreiber können Anforderungen an die Ausführung stellen.
          </p>
          <ul>
            <li><strong>Meist unproblematisch:</strong> Leuchtmittel tauschen, Stecker anschließen oder Geräte mit Schutzkontakt-Stecker in eine vorhandene Steckdose stecken.</li>
            <li><strong>Mit Fachkraft:</strong> Steckdosen und Schalter wechseln oder neu setzen, Leitungen verlegen, Verteilung erweitern, Smart-Home-Aktoren einbauen.</li>
            <li><strong>Sicherheit zuerst:</strong> Wer als ausgebildete Person arbeitet, hält die fünf Sicherheitsregeln ein: Freischalten, gegen Wiedereinschalten sichern, Spannungsfreiheit feststellen, Erden und Kurzschließen sowie benachbarte unter Spannung stehende Teile abdecken.</li>
          </ul>
          <p className="small text-muted">
            Dieser Beitrag ist ein Einkaufsratgeber und ersetzt weder eine Beratung noch die Arbeit einer
            Elektrofachkraft. Bei Zweifeln beauftrage einen Fachbetrieb.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schutzgeräte und Schutzarten verstehen</h2>
          <ul>
            <li><strong>Leitungsschutzschalter (Sicherungsautomat):</strong> Schützt Leitungen vor Überlast und Kurzschluss.</li>
            <li><strong>Fehlerstrom-Schutzschalter (FI / RCD):</strong> Schaltet bei Fehlerströmen ab und schützt Personen. In vielen Bereichen vorgeschrieben; die genaue Ausstattung klärt die Fachkraft.</li>
            <li><strong>Schutzart (IP-Code):</strong> Sie gibt Schutz gegen Staub und Wasser an. Feuchträume und der Außenbereich verlangen höhere Schutzarten als trockene Wohnräume.</li>
            <li><strong>Kinderschutz:</strong> Steckdosen mit erhöhtem Berührungsschutz verhindern, dass Kinder Gegenstände einführen.</li>
            <li><strong>Prüfzeichen:</strong> Achte auf CE-Kennzeichnung und, wo vorhanden, auf VDE-Zeichen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Smart Home: Funk, Draht oder Nachrüstlösung?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Variante</th><th>Vorteil</th><th>Zu beachten</th></tr>
              </thead>
              <tbody>
                <tr><td>Funk-Aktoren und Funk-Schalter</td><td>Nachrüstbar ohne Wände aufzustemmen</td><td>Reichweite und Störquellen prüfen; Einbau hinter der Dose braucht Fachkraft</td></tr>
                <tr><td>Verdrahtetes System (zum Beispiel Bus)</td><td>Sehr zuverlässig, ideal für Neubau und Sanierung</td><td>Höherer Planungsaufwand und Kosten</td></tr>
                <tr><td>Steckdosenadapter</td><td>Ohne Eingriff in die Installation, für Mietwohnungen</td><td>Auf Leistung des Adapters achten, nicht für alle Geräte geeignet</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Wichtig bei allen Systemen: Prüfe, ob die Komponenten zum gewählten Schalterprogramm und zum
            Smart-Home-System passen, und kläre vorab, wer installiert und programmiert.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Planung: So gehst du beim Einkauf vor</h2>
          <ol>
            <li><strong>Bestand erfassen:</strong> Welche Wandarten gibt es, welche Dosen sind verbaut, welches Schalterprogramm ist vorhanden?</li>
            <li><strong>Bedarf festlegen:</strong> Steckdosen, Schalter, USB-Anschlüsse und gewünschte Smart-Home-Funktionen je Raum aufschreiben.</li>
            <li><strong>Mit der Fachkraft abstimmen:</strong> Lass dir eine Materialliste geben oder besprich deine Auswahl, bevor du bestellst.</li>
            <li><strong>Mengen und Reserve:</strong> Plane einige Ersatzteile ein, zum Beispiel Rahmen und Abdeckungen. Beim gleichen Programm bleiben spart Abstimmungsaufwand.</li>
            <li><strong>Werkzeug und Prüfgeräte:</strong> Zum Messen und Prüfen helfen die Beiträge <a href="/blog/messwerkzeuge-kaufen-ratgeber/">Messwerkzeuge kaufen</a> und <a href="/blog/werkstatt-ausstattung-was-du-wirklich-brauchst/">Werkstatt-Ausstattung</a>. Zur Schutzausrüstung siehe <a href="/blog/arbeitskleidung-arbeitsschutz-kaufen/">Arbeitskleidung &amp; Arbeitsschutz</a>.</li>
          </ol>
          <p>
            Wenn es um eigene Stromerzeugung geht, etwa Balkonkraftwerke, gelten zusätzliche Regeln zur
            Anmeldung und zum Anschluss. Eine Übersicht dazu findest du im Beitrag{" "}
            <a href="/blog/balkonkraftwerk-kaufen/">Balkonkraftwerk kaufen</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Kauf von Elektromaterial</h2>
          <ul>
            <li><strong>Falsche Dose:</strong> Hohlwand und Massivwand brauchen unterschiedliche Dosen.</li>
            <li><strong>Programme mischen:</strong> Rahmen und Einsätze verschiedener Hersteller passen oft nicht zusammen.</li>
            <li><strong>Billiges Material ohne Prüfzeichen:</strong> Bei Elektrik ist Sicherheit wichtiger als der Preis.</li>
            <li><strong>Selbst an der Installation arbeiten:</strong> Dafür braucht es eine Elektrofachkraft.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Verbaute Teile lassen sich in der Regel nicht mehr zurückgeben.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Elektroinstallation im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von der Steckdose bis zum Smart-Home-Aktor — vergleiche Elektroinstallationsmaterial direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/elektroinstallation" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
