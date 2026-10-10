import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fräser, Trenn- und Schleifscheiben kaufen",
  description: "Fräser, Trenn- und Schleifscheiben kaufen: Norm, Drehzahl, Winkelschleifer-Maße, Schutzausrüstung, Lagerung und Sicherheit – mit Preisvergleich.",
  keywords: [
    "trennscheiben kaufen",
    "schleifscheiben kaufen ratgeber",
    "fräser kaufen",
    "materialbearbeitung werkzeug",
    "trennscheibe drehzahl",
    "fräser holzbearbeitung",
    "trennscheibe schleifscheibe unterschied",
    "winkelschleifer scheibe 125 mm",
    "fräser hss oder hartmetall",
    "trennscheibe verfallsdatum",
  ],
  openGraph: {
    title: "Fräser, Trenn- und Schleifscheiben kaufen",
    description: "Welche Scheibe für welches Material, worauf bei Durchmesser und Drehzahl zu achten ist.",
    url: "https://www.preisgucken.com/blog/materialbearbeitung-fraeser-schleifscheiben-kaufen/",
    type: "article",
    publishedTime: "2026-08-30",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Fräser, Trenn- und Schleifscheiben kaufen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/materialbearbeitung-fraeser-schleifscheiben-kaufen/" },
  twitter: {
    card: "summary_large_image",
    title: "Fräser, Trenn- und Schleifscheiben kaufen",
    description: "Welche Scheibe für welches Material, worauf bei Durchmesser und Drehzahl zu achten ist.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Fräser, Trenn- und Schleifscheiben kaufen",
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

export default function MaterialbearbeitungKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Materialbearbeitung kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Fräser, Trenn- und Schleifscheiben kaufen</h1>
          <p className="lead text-muted">
            Eine Trennscheibe für Stahl trennt Beton nur schlecht – und ein Fräser für Holz hat andere
            Anforderungen als einer für Metall. Wir zeigen, worauf es bei Materialbearbeitungswerkzeug wirklich ankommt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 30. August 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 11 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welches Werkzeug für welche Bearbeitung?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">✂️ Trennscheiben</h3>
                <p className="small text-muted mb-0">
                  Zum Durchtrennen von Material – speziell für Stahl, Edelstahl oder Beton, nicht
                  universell einsetzbar. Falsches Material auf der Scheibe verschleißt sie extrem schnell.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌀 Schleifscheiben</h3>
                <p className="small text-muted mb-0">
                  Zum Abtragen und Glätten von Oberflächen – Aluminiumoxid- oder Zirkonkorund-Körnung je
                  nach Material, mit direktem Einfluss auf Standzeit und Ergebnis.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🪵 Fräser für Holzbearbeitung</h3>
                <p className="small text-muted mb-0">
                  Abrund-, Fase- und Gehrungsverleimfräser für unterschiedliche Kantenprofile – Schaftdurchmesser
                  muss exakt zur Frässpindel der Maschine passen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">📦 Fräserkassetten</h3>
                <p className="small text-muted mb-0">
                  Mehrteilige Sets für unterschiedliche Profile in einem Kauf – praktisch für wechselnde
                  Projekte, aber nur sinnvoll, wenn die enthaltenen Profile wirklich gebraucht werden.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie stark sich Fräserwerkzeug preislich unterscheidet, zeigt der aktuelle Preisvergleich auf
            Preisgucken.de: Ein einzelner <strong>Abrundfräser</strong> (12 mm Radius) liegt bei rund{" "}
            <strong>107 €</strong>, ein größerer mit 15 mm Radius bei etwa <strong>131 €</strong>. Ein{" "}
            <strong>Gehrungsverleimfräser</strong> kostet je nach Durchmesser zwischen{" "}
            <strong>112 €</strong> und <strong>150 €</strong>, während eine{" "}
            <strong>3-teilige Fräserkassette</strong> im Set bei rund <strong>102 €</strong> liegt – ein
            <strong>6-teiliges Set</strong> dagegen bei etwa <strong>168 €</strong>.
          </p>
          <p className="small text-muted">
            Auffällig: ein mehrteiliges Set ist pro Fräser oft günstiger als der Einzelkauf, lohnt sich
            aber nur, wenn tatsächlich mehrere der enthaltenen Profile gebraucht werden – sonst zahlt man
            für ungenutzte Fräser mit.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Werkzeugtypen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Werkzeug</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Trennscheibe</td><td>Material durchtrennen (material-spezifisch)</td></tr>
                <tr><td>Schleifscheibe</td><td>Oberflächen abtragen und glätten</td></tr>
                <tr><td>Fräser (Einzelprofil)</td><td>Ein wiederkehrendes Kantenprofil</td></tr>
                <tr><td>Fräserkassette</td><td>Wechselnde Projekte mit mehreren Profilen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Material-Kompatibilität zuerst prüfen:</strong> Für jedes Material (Stahl, Edelstahl, Beton, Holz) gibt es spezialisierte Scheiben – eine falsch gewählte Scheibe trennt schlecht und verschleißt überproportional schnell.</li>
            <li><strong>Norm und Sicherheitskennzeichnung beachten:</strong> Genormte Trenn- und Schleifscheiben (z. B. nach EN 12413) entsprechen geprüften Sicherheitsvorschriften – bei der maximal zulässigen Drehzahl gibt es keinen Spielraum nach oben.</li>
            <li><strong>Durchmesser und Drehzahl zur Maschine passend wählen:</strong> Scheibendurchmesser und die auf dem Typenschild der Maschine angegebene maximale Drehzahl müssen übereinstimmen – ein Überschreiten kann zum Versagen der Scheibe führen.</li>
            <li><strong>Schaftdurchmesser bei Fräsern exakt abgleichen:</strong> Der Schaft muss zur Aufnahme der Frässpindel passen (häufig 8 oder 12 mm) – ein falscher Durchmesser lässt sich nicht einfach adaptieren.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Wer regelmäßig mehrere Kantenprofile fräst, fährt mit einer
            Fräserkassette im Set oft günstiger als mit nacheinander einzeln gekauften Fräsern –
            vorausgesetzt, die enthaltenen Profile werden auch wirklich genutzt.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Trennen, Schruppen, Schleifen: Den Unterschied kennen</h2>
          <ul>
            <li><strong>Trennscheibe:</strong> Dünn und nur für den Schnitt gedacht. Sie darf nicht seitlich belastet werden, also nicht zum Schleifen verwendet werden, weil sie brechen kann.</li>
            <li><strong>Schruppscheibe:</strong> Dicker, zum Abtragen großer Mengen und für Kanten und Flächen. Sie ist nicht für Trennschnitte gedacht.</li>
            <li><strong>Fächerscheibe und Lamellenscheibe:</strong> Zum Schleifen und für Oberflächen; sie sind weniger aggressiv und gut für Metall und Schweißnähte.</li>
            <li><strong>Diamant-Trennscheibe:</strong> Für Stein, Beton und Fliesen. Prüfe, ob sie für Trockenschnitt oder Nassschnitt geeignet ist.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Passende Maße für Winkelschleifer und Oberfräse</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Maß</th><th>Worauf du achten solltest</th></tr>
              </thead>
              <tbody>
                <tr><td>Scheibendurchmesser</td><td>Muss zur Maschine und zur Schutzhaube passen. Gängig sind unter anderem 115 mm und 125 mm bei Winkelschleifern.</td></tr>
                <tr><td>Bohrung</td><td>Bei Winkelschleifer-Scheiben ist 22,23 mm üblich. Verwende keine Adapter, die nicht für die Scheibe zugelassen sind.</td></tr>
                <tr><td>Maximale Drehzahl</td><td>Die Scheibe muss mindestens für die Drehzahl der Maschine zugelassen sein. Überschreiten ist gefährlich.</td></tr>
                <tr><td>Schaft des Fräsers</td><td>Muss zur Spannzange der Oberfräse passen, zum Beispiel 8 mm oder 12 mm.</td></tr>
                <tr><td>Schneidstoff beim Fräser</td><td>HSS ist günstiger und eignet sich für weiches Holz; Hartmetall (HM) hält bei harten Hölzern und Plattenwerkstoffen länger.</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Sicherheit: So arbeitest du mit Scheiben und Fräsern</h2>
          <ul>
            <li><strong>Schutzausrüstung:</strong> Schutzbrille oder Gesichtsschutz, Gehörschutz, Handschuhe und bei Staub eine Atemschutzmaske. Mehr dazu im Beitrag <a href="/blog/arbeitskleidung-arbeitsschutz-kaufen/">Arbeitskleidung &amp; Arbeitsschutz</a>.</li>
            <li><strong>Schutzhaube verwenden:</strong> Nimm sie nicht ab, und stelle sie so ein, dass sie dich vor Funken und Bruchstücken schützt.</li>
            <li><strong>Scheibe prüfen:</strong> Kontrolliere vor dem Einbau auf Risse und Beschädigungen. Prüfe auch das auf der Scheibe angegebene Verfallsdatum, da gebundene Scheiben altern.</li>
            <li><strong>Probelauf:</strong> Lass eine neu montierte Scheibe zunächst kurz im Leerlauf laufen und halte dich dabei seitlich der Scheibenebene auf.</li>
            <li><strong>Material sichern:</strong> Spanne das Werkstück fest ein. Wer es in der Hand hält, riskiert einen Rückschlag.</li>
            <li><strong>Brandschutz:</strong> Funkenflug kann brennbare Stoffe entzünden. Räume den Arbeitsbereich frei.</li>
          </ul>
          <p className="small text-muted">
            Bedienungsanleitung und Herstellerangaben haben Vorrang vor allgemeinen Hinweisen. Wer unsicher
            ist, sollte eine Einweisung bei einem Fachhändler oder Fachbetrieb einholen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Fräsen: Profile, Drehzahl und Pflege</h2>
          <ul>
            <li><strong>Profil wählen:</strong> Abrund-, Fase-, Nut- und Gehrungsfräser haben unterschiedliche Aufgaben. Entscheide nach dem Kantenprofil, das du brauchst.</li>
            <li><strong>Drehzahl und Vorschub:</strong> Größere Fräser brauchen geringere Drehzahlen. Orientiere dich an den Angaben des Fräserherstellers und der Maschine.</li>
            <li><strong>Einspannen:</strong> Setze den Schaft nach Herstellerangabe tief genug in die Spannzange ein und ziehe sie fest an.</li>
            <li><strong>Pflege:</strong> Harz und Staub regelmäßig entfernen, da verschmutzte Fräser schlechter schneiden und schneller stumpf werden.</li>
            <li><strong>Lagerung:</strong> Fräser einzeln und geschützt aufbewahren, damit die Schneiden nicht beschädigt werden.</li>
          </ul>
          <p>
            Zum richtigen Abmessen und Prüfen der Werkstücke findest du Hinweise in den Beiträgen{" "}
            <a href="/blog/messwerkzeuge-kaufen-ratgeber/">Messwerkzeuge kaufen</a> und{" "}
            <a href="/blog/werkstatt-ausstattung-was-du-wirklich-brauchst/">Werkstatt-Ausstattung</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Kauf und Einsatz</h2>
          <ul>
            <li><strong>Trennscheibe zum Schleifen nutzen:</strong> Sie ist nur für Schnitte gedacht.</li>
            <li><strong>Falsche Drehzahl:</strong> Prüfe Maschine und Scheibe, bevor du kaufst.</li>
            <li><strong>Material verwechseln:</strong> Scheiben für Stahl sind nicht für Edelstahl, Stein oder Aluminium geeignet.</li>
            <li><strong>Abgelaufene Scheiben verwenden:</strong> Prüfe das Verfallsdatum.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Benutzte Verschleißteile lassen sich nicht zurückgeben.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Materialbearbeitung im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von der Trennscheibe bis zum Fräser — vergleiche Materialbearbeitungswerkzeug direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/materialbearbeitung" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
