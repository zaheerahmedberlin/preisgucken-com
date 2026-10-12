import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Umstandsmode kaufen: Was sich wirklich lohnt",
  description: "Umstandsmode kaufen: Kapselgarderobe, Stillmode, Passform, Schuhe, Second-Hand und Pflege – welche Teile sich wirklich lohnen.",
  keywords: [
    "umstandsmode kaufen",
    "umstandsmode schwangerschaft",
    "umstands und stillmode",
    "umstandskleidung",
    "schwangerschaftsmode",
    "umstandsleggings",
    "umstandsmode kapselgarderobe",
    "still bh kaufen wann",
    "umstandsmode second hand",
    "stillmode lohnt sich",
  ],
  openGraph: {
    title: "Umstandsmode kaufen: Welche Teile sich wirklich lohnen",
    description: "Umstands- und Stillmode, die über die Schwangerschaft hinaus nutzbar bleibt – worauf du beim Kauf achten solltest.",
    url: "https://www.preisgucken.com/blog/umstandsmode-kaufen-guide/",
    type: "article",
    publishedTime: "2026-09-09",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Umstandsmode kaufen: Welche Teile sich wirklich lohnen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/umstandsmode-kaufen-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Umstandsmode kaufen: Welche Teile sich wirklich lohnen",
    description: "Umstands- und Stillmode, die über die Schwangerschaft hinaus nutzbar bleibt – worauf du beim Kauf achten solltest.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Umstandsmode kaufen: Welche Teile sich wirklich lohnen",
  datePublished: "2026-09-09",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function UmstandsmodeKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Umstandsmode kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Mode & Kleidung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Umstandsmode kaufen: Welche Teile sich wirklich lohnen</h1>
          <p className="lead text-muted">
            Umstandsmode wird oft nur wenige Monate getragen – umso wichtiger, gezielt in Teile zu investieren,
            die tatsächlich mitwachsen und über die Geburt hinaus nutzbar bleiben, statt in eine komplett neue
            Garderobe.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Umstands- und Stillmode: der doppelte Nutzen</h2>
          <p>
            Viele Umstandsteile sind mittlerweile gleichzeitig als Stillmode konzipiert – ein Shirt mit
            Stillfunktion trägst du also nicht nur während der Schwangerschaft, sondern auch danach beim
            Stillen weiter. Das verlängert die tatsächliche Nutzungsdauer eines einzelnen Teils erheblich und
            macht den höheren Anschaffungspreis gegenüber normaler Kleidung wieder wett.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welche Teile sich am meisten lohnen</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👖 Umstandsleggings & -hosen</h3>
                <p className="small text-muted mb-0">
                  Der Bauchbund wächst mit der gesamten Schwangerschaft mit – meist die Teile mit der längsten
                  tatsächlichen Tragedauer im gesamten Umstandsschrank.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👕 Umstands- und Stillshirts im Set</h3>
                <p className="small text-muted mb-0">
                  2er-Packs aus Umstands- und Stillshirt sind oft günstiger pro Teil als Einzelkauf – und
                  decken beide Phasen ab, ohne zweimal neu kaufen zu müssen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🧥 Eine wärmende Übergangsjacke</h3>
                <p className="small text-muted mb-0">
                  Bei Herbst- oder Winterschwangerschaften eine der teureren, aber lohnenswertesten
                  Anschaffungen – normale Jacken schließen über dem Bauch oft nicht mehr.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👔 Ein Business-Teil bei Bedarf</h3>
                <p className="small text-muted mb-0">
                  Nur sinnvoll, wenn der Job es erfordert – für die meisten reichen Basics aus Leggings, Shirts
                  und einer Strickjacke völlig aus.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich die Preise je nach Teil unterscheiden, zeigt ein Blick in den aktuellen Preisvergleich:
            Eine <strong>Umstandsleggings</strong> (Mamalicious) liegt bei rund <strong>25 €</strong>, ein{" "}
            <strong>2er-Pack Umstands- und Stillshirt</strong> bei etwa <strong>22 €</strong> – für beide Teile
            zusammen. Eine <strong>Umstandsjacke für den Winter</strong> (Noppies) liegt bei rund{" "}
            <strong>128 €</strong>, während eine <strong>Business-Hose</strong> für den Bürojob bei etwa{" "}
            <strong>60 €</strong> liegt.
          </p>
          <p className="small text-muted">
            Auffällig: Die Basics (Leggings, Shirts) liegen preislich nah an normaler Kleidung – der
            Preisaufschlag für Umstandsmode zeigt sich vor allem bei Jacken und strukturierten Teilen wie
            Blusen oder Business-Hosen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf achten solltest</h2>
          <ol>
            <li><strong>Nicht zu früh die ganze Garderobe kaufen:</strong> Der Bauchumfang verändert sich stark – bei den meisten reicht normale Kleidung noch bis zum 2. Trimester.</li>
            <li><strong>Auf Umstands-UND-Still-Kombiteile achten:</strong> Verlängert die Nutzungsdauer am stärksten und ist meist die wirtschaftlichste Wahl.</li>
            <li><strong>Dehnbare Materialien bevorzugen:</strong> Elasthan-Anteil in Leggings und Shirts verlängert die Passform über mehr Wochen der Schwangerschaft.</li>
            <li><strong>Second-Hand für kurzlebige Teile in Betracht ziehen:</strong> Gerade Business-Kleidung oder Anlassmode wird oft nur wenige Male getragen.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> 2er- oder 3er-Sets aus Umstands- und Stillshirts sind fast immer
            günstiger pro Teil als der Einzelkauf derselben Stücke – besonders bei Basics lohnt sich das
            Set nachzurechnen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Kapselgarderobe: Das reicht für die meisten</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Teil</th><th>Anzahl als Richtwert</th><th>Hinweis</th></tr>
              </thead>
              <tbody>
                <tr><td>Hosen oder Leggings</td><td>2–3</td><td>Bauchbund wächst mit; dunkle Farben sind vielseitig</td></tr>
                <tr><td>Shirts und Oberteile</td><td>4–6</td><td>Stillfunktion verlängert die Tragedauer</td></tr>
                <tr><td>Kleid</td><td>1–2</td><td>Sowohl für Alltag als auch für Anlässe nutzbar</td></tr>
                <tr><td>Strickjacke oder Pullover</td><td>1–2</td><td>Lässt sich über Basics schichten</td></tr>
                <tr><td>Jacke</td><td>1</td><td>Je nach Jahreszeit, mit Platz über dem Bauch</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">
            Die Zahlen sind eine grobe Orientierung. Dein Bedarf hängt von Jahreszeit, Job und
            Waschrhythmus ab. Kaufe lieber später nach, als zu viel auf einmal.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Still-BH, Schuhe und Basics: Worauf du achten solltest</h2>
          <ul>
            <li><strong>Still-BH:</strong> Die Brust verändert sich während der Schwangerschaft und nach der Geburt noch einmal. Viele kaufen deshalb nur wenige Stück zu Beginn und ergänzen gegen Ende der Schwangerschaft, wenn sich die Größe besser einschätzen lässt. Eine Fachberatung im Laden oder durch die Hebamme kann helfen.</li>
            <li><strong>Schuhe:</strong> Füße können anschwellen. Bequeme Schuhe mit etwas Spielraum und gutem Halt sind sinnvoll. Prüfe die Passform am besten am Nachmittag.</li>
            <li><strong>Unterwäsche:</strong> Nahtlose, dehnbare Modelle mit weichem Bund sind angenehm. Der Bund sollte nicht einschneiden.</li>
            <li><strong>Stützgürtel und Kompressionsstrümpfe:</strong> Ob sie für dich sinnvoll sind, besprich mit Ärztin, Arzt oder Hebamme. Kaufe sie nicht auf Verdacht.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Normale Kleidung weiter nutzen</h2>
          <ul>
            <li><strong>Größer kaufen:</strong> Weite Oberteile, Wickelkleider und dehnbare Stoffe aus der normalen Garderobe tragen sich oft lange weiter.</li>
            <li><strong>Bauchband:</strong> Mit einem Bauchband für Hosen lässt sich der Knopf offen lassen, ohne eine neue Hose zu kaufen.</li>
            <li><strong>Leihen und tauschen:</strong> Freundinnen, Familie und Tauschbörsen sind eine gute Quelle für Umstandsmode, die oft nur wenige Monate getragen wurde.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Pflege und Weiterverwendung</h2>
          <ul>
            <li><strong>Waschen:</strong> Wähle pflegeleichte Stoffe und beachte die Etiketten, damit Dehnbarkeit und Passform erhalten bleiben.</li>
            <li><strong>Nach der Geburt:</strong> Stillmode und weite Basics lassen sich in der Stillzeit weiter tragen. Danach kannst du sie weitergeben oder verkaufen.</li>
            <li><strong>Aufbewahren:</strong> Wenn du ein weiteres Kind planst, lagere gut erhaltene Teile trocken und luftig.</li>
          </ul>
          <p>
            Weitere Themen rund um die erste Zeit findest du in den Beiträgen{" "}
            <a href="/blog/kinderwagen-kaufen-typ-guide/">Kinderwagen kaufen</a> und{" "}
            <a href="/blog/babyschlafsack-tog-wert-guide/">Babyschlafsack und TOG-Wert</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Kauf von Umstandsmode</h2>
          <ul>
            <li><strong>Zu früh zu viel kaufen:</strong> Der Bauch wächst individuell und nicht linear.</li>
            <li><strong>Nur auf Optik achten:</strong> Komfort, Bund und Stoff entscheiden, wie oft du ein Teil trägst.</li>
            <li><strong>Die Jahreszeit vergessen:</strong> Ein Winterbauch braucht andere Teile als ein Sommerbauch.</li>
            <li><strong>Stillfunktion übersehen:</strong> Sie verlängert die Nutzungsdauer erheblich.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Bestelle bei Unsicherheit zwei Größen und sende eine zurück.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Umstandsmode im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Umstands- und Stillmode von Noppies, Mamalicious & Co. — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/umstandsmode" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
