import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Painter Pant oder Cargo? Workwear-Guide",
  description: "Painter Pants, Chore Jacket und Co.: Stoffe, Passform, Waschung, Schrumpfen, Pflege und Styling – so kaufst du Workwear für den Alltag.",
  keywords: [
    "workwear kaufen",
    "painter pants herren",
    "chore jacket kaufen",
    "arbeitshose herren modisch",
    "coverall jacke herren",
    "workwear trend 2026",
    "herren arbeitskleidung freizeit",
    "vintage workwear kaufen",
    "painter pants stil",
    "chore jacket kombinieren",
    "workwear pflege",
    "workwear stoffe twill canvas",
  ],
  openGraph: {
    title: "Painter Pant oder Cargo? Workwear-Guide",
    description: "Was Workwear-Kleidung von normaler Freizeitmode unterscheidet und worauf du beim Kauf achten solltest.",
    url: "https://www.preisgucken.com/blog/workwear-trend-painter-pants-chore-jacket/",
    type: "article",
    publishedTime: "2026-08-14",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Painter Pant oder Cargo? Workwear-Guide" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Painter Pant oder Cargo? Workwear-Guide",
    description: "Was Workwear-Kleidung von normaler Freizeitmode unterscheidet und worauf du beim Kauf achten solltest.",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/workwear-trend-painter-pants-chore-jacket/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Painter Pant oder Cargo? Workwear-Guide",
  datePublished: "2026-08-14",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function WorkwearGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Workwear kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Painter Pant oder Cargo? Workwear-Guide</h1>
          <p className="lead text-muted">
            Was früher reine Berufskleidung für Maler und Handwerker war, ist längst im Alltag angekommen:
            Painter Pants, Chore Jackets und Coverall-Jacken kombinieren robuste Verarbeitung mit einem Look,
            der sich mit fast allem tragen lässt. Wir erklären die wichtigsten Workwear-Stücke und worauf du
            beim Kauf achten solltest.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 14. August 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die wichtigsten Workwear-Stücke im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👖 Painter Pant</h3>
                <p className="small text-muted mb-0">
                  Die klassische Malerhose: robuster Baumwollstoff, weites Bein, praktische Werkzeugtaschen an
                  der Seite. Ursprünglich für Handwerker gedacht, heute vor allem wegen des lässigen Schnitts beliebt.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🧥 Chore Jacket / Shop Jacket</h3>
                <p className="small text-muted mb-0">
                  Eine kurze, robuste Arbeitsjacke mit Knopfleiste – ursprünglich für Werkstattarbeit, heute ein
                  vielseitiges Übergangsteil zu T-Shirt und Hemd gleichermaßen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🦺 Coverall Jacket</h3>
                <p className="small text-muted mb-0">
                  Etwas leichter und kürzer geschnitten als klassische Arbeitsjacken, oft aus strapazierfähigem
                  Twill-Stoff – ein Mittelding zwischen Hemdjacke und klassischer Arbeitsjacke.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👕 Double Knee Pant</h3>
                <p className="small text-muted mb-0">
                  Hosen mit doppelter Stofflage am Knie – ursprünglich für zusätzlichen Verschleißschutz bei
                  körperlicher Arbeit, heute auch einfach ein charakteristisches Detail im Workwear-Look.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit das Angebot inzwischen ist, zeigt sich im Preisvergleich auf Preisgucken.de: Eine klassische
            Painter Pant liegt dort meist zwischen <strong>68 € und 84 €</strong>, je nach Waschung und Stoff.
            Eine Coverall Jacket ist schon ab rund <strong>54 €</strong> zu finden, eine aufwendiger verarbeitete
            Shop Jacket kann dagegen auch <strong>150 € und mehr</strong> kosten. Wer es unifarben und schlicht
            mag, findet Fünf-Pocket-Hosen im Workwear-Stil bereits ab rund <strong>57 €</strong>, während gestrickte
            Pullover in der gleichen Produktlinie bei etwa <strong>126 €</strong> liegen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Workwear-Teile im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Teil</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Painter Pant</td><td>Lässiger Alltagslook, viel Bewegungsfreiheit</td></tr>
                <tr><td>Chore / Shop Jacket</td><td>Übergangsjacke zu Hemd oder T-Shirt</td></tr>
                <tr><td>Coverall Jacket</td><td>Leichteres Übergangsteil für wärmere Monate</td></tr>
                <tr><td>Double Knee Pant</td><td>Alltag mit erhöhter Beanspruchung, z. B. Fahrrad oder Garten</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Schnitt vor Größentabelle prüfen:</strong> Workwear-Marken schneiden oft weiter als gewöhnliche Alltagsmode – ein Blick in die Größentabelle des Anbieters lohnt sich.</li>
            <li><strong>Material beachten:</strong> Schwerer Baumwolltwill hält länger, ist aber steifer als leichtere Mischgewebe – je nach Einsatzzweck abwägen.</li>
            <li><strong>Waschung als Stilfrage:</strong> Washed- oder Stonewashed-Varianten wirken lässiger, unbehandelte Stoffe wirken formeller und dunkler in der Farbe.</li>
            <li><strong>Preisvergleich nutzen:</strong> Gerade bei Farbvarianten und Größen schwanken die Preise zwischen Anbietern spürbar.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Painter Shorts sind meist deutlich günstiger als die lange
            Painter-Pant-Variante und eignen sich gut, um den Workwear-Look für den Sommer auszuprobieren, bevor
            du in ein teureres Stück investierst.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Stoffe und Verarbeitung: Woran du Qualität erkennst</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Stoff</th><th>Eigenschaften</th><th>Passt zu</th></tr>
              </thead>
              <tbody>
                <tr><td>Twill</td><td>Diagonale Webart, robust und geschmeidiger als Canvas</td><td>Hosen, Hemdjacken</td></tr>
                <tr><td>Canvas / Duck</td><td>Dicht und steif, wird mit der Zeit weicher</td><td>Arbeitsjacken, strapazierfähige Hosen</td></tr>
                <tr><td>Denim</td><td>Klassisch, in vielen Gewichten und Waschungen</td><td>Hosen, Jacken</td></tr>
                <tr><td>Baumwollmischungen</td><td>Oft knitterärmer, weicher und leichter</td><td>Alltag und wärmere Monate</td></tr>
              </tbody>
            </table>
          </div>
          <ul>
            <li><strong>Nähte:</strong> Doppelnähte und Vernähungen an Taschen und Knien sprechen für Haltbarkeit.</li>
            <li><strong>Knöpfe und Reißverschlüsse:</strong> Robuste Metallteile halten länger als dünne Kunststoffknöpfe.</li>
            <li><strong>Taschen:</strong> Praktische Taschen sind Teil des Looks, aber prüfe, ob sie tief genug für Handy und Schlüssel sind.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Passform und Größe: Weiter geschnitten, aber nicht beliebig</h2>
          <ul>
            <li><strong>Größentabelle nutzen:</strong> Vergleiche Bund- und Beinlänge mit einer Hose, die gut sitzt, nicht nur mit der Konfektionsgröße.</li>
            <li><strong>Schrumpfen einplanen:</strong> Unbehandelte Baumwolle kann beim ersten Waschen einlaufen. Achte auf Hinweise des Herstellers wie „vorgewaschen“ (pre-washed).</li>
            <li><strong>Länge und Umschlag:</strong> Weite Hosen werden oft umgeschlagen. Das Bein sollte nicht zu stark über die Schuhe fallen.</li>
            <li><strong>Jacken:</strong> Prüfe Schulterbreite und Armlänge. Eine Chore Jacket darf locker sitzen, soll aber nicht überladen wirken.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Pflege: So hält Workwear lange</h2>
          <ul>
            <li><strong>Waschen:</strong> Nach Etikett bei niedriger Temperatur und auf links gewaschen bleiben Farbe und Stoff besser erhalten.</li>
            <li><strong>Trocknen:</strong> Luftgetrocknet schont Fasern. Im Trockner kann die Hose einlaufen.</li>
            <li><strong>Flecken:</strong> Farbe, Öl und Schmutz zeitnah behandeln. Bei Malerhosen gehören Farbspritzer für viele zum Look.</li>
            <li><strong>Flicken statt wegwerfen:</strong> Kleine Risse lassen sich gut nähen oder mit Patches reparieren.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Workwear als Mode oder als echte Arbeitskleidung?</h2>
          <p>
            Die Modelle in diesem Beitrag sind für den Alltag und den lässigen Look gedacht. Sie sind keine
            Schutzkleidung: Wer auf Baustelle oder in der Werkstatt Sicherheit braucht, benötigt Kleidung
            und Ausrüstung mit entsprechenden Normen, etwa Warnschutz oder Sicherheitsschuhe. Hinweise dazu
            gibt der Ratgeber{" "}
            <a href="/blog/arbeitskleidung-arbeitsschutz-kaufen/">Arbeitskleidung &amp; Arbeitsschutz</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Styling: So kombinierst du Workwear</h2>
          <ul>
            <li><strong>Painter Pant:</strong> Zu einfachem T-Shirt oder Sweatshirt und Sneakern oder Boots.</li>
            <li><strong>Chore Jacket:</strong> Über Hemd, Hoodie oder T-Shirt, in gedeckten Farben vielseitig kombinierbar.</li>
            <li><strong>Farben:</strong> Naturtöne wie Beige, Oliv, Braun und Navy lassen sich leicht mischen.</li>
            <li><strong>Proportionen:</strong> Zu einer weiten Hose passt oben ein etwas kürzeres oder schmaleres Teil.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Workwear-Kauf</h2>
          <ul>
            <li><strong>Nur nach Konfektionsgröße bestellen:</strong> Workwear fällt oft anders aus.</li>
            <li><strong>Einlaufen vergessen:</strong> Unbehandelte Stoffe können nach dem Waschen kleiner sein.</li>
            <li><strong>Nur auf den Look achten:</strong> Stoff, Nähte und Pflegehinweise bestimmen die Haltbarkeit.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Probiere die Kleidung an, ohne sie bereits zu waschen oder zu tragen.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Workwear & Herrenmode im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von Painter Pants bis Chore Jacket – vergleiche Herrenmode direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/herrenmode" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
