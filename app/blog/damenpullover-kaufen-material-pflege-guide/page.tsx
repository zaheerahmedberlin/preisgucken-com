import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damenpullover kaufen: Material, Passform, Pflege",
  description: "Merino, Kaschmir, Baumwolle oder Mischgewebe? Damenpullover nach Material, Schnitt und Pflege auswählen – mit Tipps zu Qualität und Preisvergleich.",
  keywords: ["damenpullover kaufen", "pullover material vergleich", "merino oder kaschmir", "pullover pflegen", "wollpullover waschen"],
  openGraph: {
    title: "Damenpullover kaufen: Material, Passform und Pflege im Überblick",
    description: "Merino, Kaschmir, Baumwolle oder Mischgewebe? Damenpullover nach Material, Schnitt und Pflege auswählen – mit Tipps zu Qualität und Preisvergleich.",
    url: "https://www.preisgucken.com/blog/damenpullover-kaufen-material-pflege-guide/",
    type: "article",
    publishedTime: "2026-10-13",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Damenpullover kaufen: Material, Passform und Pflege im Überblick" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/damenpullover-kaufen-material-pflege-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Damenpullover kaufen: Material, Passform und Pflege im Überblick",
    description: "Merino, Kaschmir, Baumwolle oder Mischgewebe? Damenpullover nach Material, Schnitt und Pflege auswählen – mit Tipps zu Qualität und Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Damenpullover kaufen: Material, Passform und Pflege im Überblick",
  datePublished: "2026-10-13",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Damenpullover kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Mode & Kleidung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Damenpullover kaufen: Material, Passform und Pflege im Überblick</h1>
          <p className="lead text-muted">Ein guter Pullover begleitet dich viele Winter. Welche Materialien sich eignen, woran du Qualität erkennst und wie du Strick richtig pflegst, zeigt dieser Ratgeber.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 13. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Materialien im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Material</th><th>Eigenschaften</th><th>Zu beachten</th></tr>
              </thead>
              <tbody>
                <tr><td>Schurwolle / Merino</td><td>Wärmt, atmungsaktiv, Merino ist feiner und weniger kratzig</td><td>Pflege nach Etikett; kann bei falschem Waschen einlaufen</td></tr>
                <tr><td>Kaschmir</td><td>Sehr weich und leicht, wärmt gut</td><td>Empfindlich, braucht schonende Pflege; Qualität variiert stark</td></tr>
                <tr><td>Baumwolle</td><td>Atmungsaktiv, hautfreundlich, pflegeleicht</td><td>Wärmt weniger, kann ausleiern</td></tr>
                <tr><td>Mischgewebe</td><td>Kombiniert Eigenschaften, oft pflegeleichter und günstiger</td><td>Synthetikanteil kann weniger atmungsaktiv sein</td></tr>
                <tr><td>Acryl / Polyester</td><td>Günstig, formstabil</td><td>Neigt zu Pilling und elektrostatischer Aufladung</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schnitt und Passform: Welcher Pullover steht dir?</h2>
          <ul>
            <li><strong>Rundhals:</strong> Der Klassiker, vielseitig unter Blazern und Jacken.</li>
            <li><strong>V-Ausschnitt:</strong> Streckt optisch und passt gut zu Hemdblusen.</li>
            <li><strong>Rollkragen:</strong> Wärmt den Hals und wirkt elegant. Er sollte nicht zu eng sitzen.</li>
            <li><strong>Oversize:</strong> Locker und bequem, gut mit schmalen Hosen kombinierbar.</li>
            <li><strong>Länge:</strong> Kurz zu hoch taillierten Hosen, lang zu Leggings und schmalen Röcken.</li>
          </ul>
          <p>
            Achte bei Online-Käufen auf die Größentabelle und die Angaben zur Passform (normal, locker,
            figurbetont). Strick gibt in der Regel nach, aber nicht unendlich.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Qualität erkennen</h2>
          <ul>
            <li><strong>Maschenbild:</strong> Gleichmäßig und dicht gestrickt deutet auf gute Verarbeitung hin.</li>
            <li><strong>Nähte und Abschlüsse:</strong> Bündchen und Saum sollten sauber verarbeitet sein und nicht ausleiern.</li>
            <li><strong>Zusammensetzung:</strong> Das Etikett nennt die Fasern. Naturfasern fühlen sich oft angenehmer an, Mischungen halten teils länger.</li>
            <li><strong>Pilling:</strong> Kleine Knötchen entstehen an stark beanspruchten Stellen. Das ist bei vielen Strickwaren normal und lässt sich mit einem Fusselrasierer entfernen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Pflege: So hält der Pullover länger</h2>
          <ol>
            <li><strong>Etikett beachten:</strong> Wolle verlangt meist Schonprogramm oder Handwäsche mit Wollwaschmittel, bei niedriger Temperatur.</li>
            <li><strong>Nicht auswringen:</strong> Das Wasser vorsichtig ausdrücken und den Pullover flach liegend trocknen.</li>
            <li><strong>Nicht aufhängen:</strong> Im nassen Zustand dehnt sich Strick aus. Falte ihn zur Lagerung, statt ihn aufzuhängen.</li>
            <li><strong>Lüften statt waschen:</strong> Wolle muss nicht nach jedem Tragen gewaschen werden. Auslüften reicht oft.</li>
            <li><strong>Motten vermeiden:</strong> Lagere Wolle sauber und trocken, damit sie nicht von Motten befallen wird.</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Kombinieren: Drei einfache Ideen</h2>
          <ul>
            <li><strong>Büro:</strong> Feiner Pullover zu Stoffhose und Blazer, in gedeckten Farben.</li>
            <li><strong>Freizeit:</strong> Lockerer Strick zu Jeans und Sneakern.</li>
            <li><strong>Festlich:</strong> Feine Merino- oder Kaschmir-Strickware zu Rock und Schmuck.</li>
          </ul>
          <p>
            Weitere Ideen für Anlässe und Schnitte findest du im Ratgeber{" "}
            <a href="/blog/kleider-fuer-jeden-anlass/">Kleider für jeden Anlass</a> und im{" "}
            <a href="/blog/alltagslook-damenmode-make-up-guide/">Alltagslook-Guide</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Pullover-Kauf</h2>
          <ul>
            <li><strong>Nur nach Optik kaufen:</strong> Material und Pflegeaufwand entscheiden, wie oft du ihn trägst.</li>
            <li><strong>Zu eng oder zu kurz wählen:</strong> Strick sollte bequem sitzen und Bewegungen mitmachen.</li>
            <li><strong>Pflege ignorieren:</strong> Ein falsch gewaschener Wollpullover läuft ein.</li>
            <li><strong>Nur auf den Preis achten:</strong> Ein sehr günstiger Pullover kann nach wenigen Wäschen unansehnlich sein. Vergleiche Material und Verarbeitung.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Probiere den Pullover an, ohne ihn zu waschen oder Etiketten zu entfernen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Nachhaltig kaufen: Worauf du achten kannst</h2>
          <ul>
            <li><strong>Lange tragen:</strong> Ein gut verarbeiteter Pullover, den du viele Jahre trägst, ist oft nachhaltiger als mehrere günstige Teile.</li>
            <li><strong>Siegel:</strong> Zeichen wie OEKO-TEX oder Responsible Wool Standard weisen auf bestimmte Anforderungen hin. Was sie genau prüfen, legt der jeweilige Siegelgeber fest.</li>
            <li><strong>Second-Hand und Reparatur:</strong> Hochwertiger Strick lässt sich gebraucht kaufen, stopfen und aufbereiten. Kleine Löcher repariert eine Änderungsschneiderei oder du selbst mit Nadel und Garn.</li>
            <li><strong>Wasser und Energie sparen:</strong> Lüften statt Waschen und niedrige Temperaturen verlängern die Lebensdauer und senken den Verbrauch.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Farben und Muster: Was lässt sich gut kombinieren?</h2>
          <ul>
            <li><strong>Basisfarben:</strong> Schwarz, Navy, Grau, Creme und Kamel passen zu fast allem und sind als erster Pullover eine sichere Wahl.</li>
            <li><strong>Akzentfarben:</strong> Ein farbiger Pullover wirkt zu neutralen Hosen und lässt sich leicht mit einem Schal oder Schmuck ergänzen.</li>
            <li><strong>Muster:</strong> Zopfmuster, Streifen oder Norwegerstrick sind markant. Kombiniere sie mit schlichten Teilen, damit der Look ruhig bleibt.</li>
            <li><strong>Hauttyp und Lichtfarbe:</strong> Probiere Farben bei Tageslicht an, denn sie wirken drinnen oft anders als im Freien oder auf dem Bildschirm.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Damenpullover im Preisvergleich</h3>
          <p className="text-muted small mb-3">Pullover und Strickwaren aus deutschen Online-Shops vergleichen.</p>
          <a href="https://www.preisgucken.de/kategorie/damenpullover" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
