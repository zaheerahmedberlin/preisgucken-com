import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kleider für jeden Anlass: 3 Schnitte",
  description: "Kleider für jeden Anlass: Alltag, Brautkleid und Umstandskleid – Schnitte, Stoffe, Größe und Rückgabe. Mit Wegweiser zu den Detail-Ratgebern.",
  keywords: [
    "kleider kaufen",
    "kleid für jeden anlass",
    "alltagskleid damen",
    "brautkleid online kaufen",
    "umstandskleid kaufen",
    "sommerkleid kaufen",
    "damenkleider preisvergleich",
    "kleid stoffe vergleich",
    "kleidergröße bestimmen",
    "kleid für anlass finden",
    "brautkleid online bestellen zeitplan",
    "kleid stoffe pflege",
    "kleid größe bestimmen online",
  ],
  openGraph: {
    title: "Kleider für jeden Anlass: 3 Schnitte",
    description: "Alltagskleid, Brautkleid oder Umstandskleid – welcher Schnitt und Stoff passt zu welchem Anlass?",
    url: "https://www.preisgucken.com/blog/kleider-fuer-jeden-anlass/",
    type: "article",
    publishedTime: "2026-08-04",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Kleider für jeden Anlass: 3 Schnitte" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/kleider-fuer-jeden-anlass/" },
  twitter: {
    card: "summary_large_image",
    title: "Kleider für jeden Anlass: 3 Schnitte",
    description: "Alltagskleid, Brautkleid oder Umstandskleid – welcher Schnitt und Stoff passt zu welchem Anlass?",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Kleider für jeden Anlass: 3 Schnitte",
  datePublished: "2026-08-04",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function KleiderFuerJedenAnlassPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Kleider für jeden Anlass
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Kleider für jeden Anlass: 3 Schnitte</h1>
          <p className="lead text-muted">
            Ein Kleid ist selten nur ein Kleid – Schnitt, Stoff und Passform entscheiden, ob es für den Büroalltag,
            den großen Tag oder die Schwangerschaft wirklich funktioniert. Wir zeigen, worauf es bei den vier
            häufigsten Anlässen ankommt, und wo sich ein Preisvergleich vor dem Kauf besonders lohnt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 4. August 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Alltagskleider: Vielseitigkeit vor Aufwand</h2>
          <p>
            Ein gutes Alltagskleid muss zwei Dinge gleichzeitig können: bequem genug für einen langen Tag sein und
            trotzdem nicht wie „nur bequem" aussehen. Entscheidend ist der Stoff – Jersey und Viskose fallen weich
            und knittern kaum, während reine Baumwolle atmungsaktiver, aber pflegeintensiver ist.
          </p>
          <ul>
            <li><strong>A-Linien-Schnitt:</strong> kaschiert die Körpermitte, passt zu fast jeder Figur</li>
            <li><strong>Wickelkleider:</strong> flexibel in der Passform, ideal bei schwankendem Gewicht</li>
            <li><strong>Midi-Länge:</strong> die vielseitigste Wahl zwischen Büro und Freizeit</li>
          </ul>
          <p className="small text-muted">
            Im Preisvergleich für Alltagskleider lohnt sich ein Blick auf die Materialangabe im Detail: Pflegehinweis und
            Zusammensetzung geben Hinweise auf Langlebigkeit: Natürliche Fasern sind atmungsaktiv, Mischgewebe oft pflegeleichter.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Brautkleider: Silhouette vor Trend</h2>
          <p>
            Bei Brautkleidern zählt die Silhouette mehr als der aktuelle Trend, da das Kleid oft Monate im Voraus
            bestellt wird und Änderungen Zeit brauchen. Die vier klassischen Grundformen im Überblick:
          </p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Silhouette</th><th>Wirkung</th><th>Passt gut zu</th></tr>
              </thead>
              <tbody>
                <tr><td>A-Linie</td><td>Zeitlos, kaschiert die Hüfte</td><td>Fast allen Figurtypen</td></tr>
                <tr><td>Meerjungfrau (Mermaid)</td><td>Betont Taille und Kurven</td><td>Schlanke bis kurvige Silhouetten</td></tr>
                <tr><td>Empire</td><td>Fällt unter der Brust locker</td><td>Birnenform, auch für Schwangere geeignet</td></tr>
                <tr><td>Bodenlanges Etuikleid</td><td>Schlicht und modern</td><td>Standesamtliche Hochzeiten</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">
            Plane bei Brautkleidern ausreichend Zeit für mögliche Änderungen ein – besonders bei Bestellungen aus
            dem Online-Preisvergleich, da eine persönliche Anprobe vor dem Kauf meist entfällt.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Umstandskleider: Komfort mit Reserve</h2>
          <p>
            Ein gutes Umstandskleid begleitet idealerweise mehrere Monate der Schwangerschaft – dafür braucht es
            Dehnungsreserve an den richtigen Stellen, ohne dabei aus der Form zu geraten.
          </p>
          <ul>
            <li><strong>Elasthan-Anteil:</strong> mindestens 5–10 % sorgen für Mitwachsen ohne Formverlust</li>
            <li><strong>Wickel- oder Raffungsdetails:</strong> lassen sich mit wachsendem Bauch nachjustieren</li>
            <li><strong>Empire-Schnitt:</strong> betont die Brust, fällt locker über den Bauch – auch nach der Geburt tragbar</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Cocktail- und Abendkleider: der Sonderfall</h2>
          <p>
            Für festliche Anlässe wie Cocktailpartys oder Abendveranstaltungen gelten eigene Regeln bei Länge,
            Stoffwahl und Dresscode-Etikette – dazu haben wir einen eigenen, ausführlichen Guide:{" "}
            <a href="/blog/abendkleid-cocktailkleid-kaufen-ratgeber/">Abendkleid & Cocktailkleid kaufen</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die richtige Kleidergröße bestimmen</h2>
          <ol>
            <li><strong>Oberweite, Taille und Hüfte messen</strong> – nicht nur die gewohnte Konfektionsgröße verwenden, Schnitte unterscheiden sich je nach Marke</li>
            <li><strong>Größentabelle des Shops prüfen</strong>, da deutsche, europäische und asiatische Größensysteme oft abweichen</li>
            <li><strong>Bei Zwischengrößen eine Nummer größer wählen</strong> – enger nachschneidern lassen ist meist einfacher als ein zu kleines Kleid zu weiten</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Ein Preisvergleich lohnt sich bei Kleidern besonders, da baugleiche
            Schnitte oft unter mehreren Bezeichnungen bei verschiedenen Händlern gelistet sind. Auf{" "}
            <a href="https://www.preisgucken.de/kategorie/kleider" target="_blank" rel="noopener">
              preisgucken.de unter Kleider
            </a>{" "}
            siehst du tagesaktuelle Preise für Alltags-, Braut-, Umstands- und Cocktailkleider auf einen Blick.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Anlass-Finder: Welcher Ratgeber passt zu deiner Situation?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Anlass</th><th>Worauf es ankommt</th><th>Weiterlesen</th></tr>
              </thead>
              <tbody>
                <tr><td>Alltag und Büro</td><td>Bequem, pflegeleicht, vielseitig kombinierbar</td><td><a href="/blog/alltagslook-damenmode-make-up-guide/">Alltagslook-Guide</a></td></tr>
                <tr><td>Cocktail, Gala, Hochzeitsgast</td><td>Dresscode, Länge, Stoff und Accessoires</td><td><a href="/blog/abendkleid-cocktailkleid-kaufen-ratgeber/">Abend- und Cocktailkleid</a></td></tr>
                <tr><td>Brautkleid und Hochzeit</td><td>Silhouette, Zeitplan, Änderungen, Geschenke</td><td><a href="/blog/hochzeitsgeschenke-brautpaar-gaeste/">Hochzeit planen</a></td></tr>
                <tr><td>Schwangerschaft</td><td>Mitwachsen, Stillfunktion, Nutzungsdauer</td><td><a href="/blog/umstandsmode-kaufen-guide/">Umstandsmode</a></td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Stoffe und Pflege: Was passt zu welchem Kleid?</h2>
          <ul>
            <li><strong>Jersey und Viskose:</strong> Weich fallend und knitterarm, ideal für Alltagskleider. Viskose kann beim Waschen einlaufen, daher Pflegehinweis beachten.</li>
            <li><strong>Baumwolle und Leinen:</strong> Atmungsaktiv und angenehm im Sommer, aber knitteranfälliger und pflegeintensiver.</li>
            <li><strong>Satin und Chiffon:</strong> Elegant für festliche Anlässe, empfindlich bei Reibung und Flecken.</li>
            <li><strong>Spitze und Tüll:</strong> Häufig bei Brautkleidern. Prüfe Futter und Innenverarbeitung, damit nichts kratzt.</li>
            <li><strong>Pflegeetikett:</strong> Es entscheidet, ob ein Kleid in die Maschine darf oder zur Reinigung muss. Lies es vor dem Kauf, nicht erst nach der ersten Wäsche.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Online bestellen: Zeitplan, Anprobe und Rückgabe</h2>
          <ul>
            <li><strong>Plane Puffer ein:</strong> Brautkleider und Sonderanfertigungen brauchen oft mehrere Monate. Rechne zusätzlich Zeit für Änderungen ein.</li>
            <li><strong>Maße nehmen:</strong> Vergleiche Oberweite, Taille und Hüfte mit der Größentabelle des Shops, nicht mit deiner gewohnten Konfektionsgröße.</li>
            <li><strong>Widerruf:</strong> Bei Online-Käufen gilt grundsätzlich ein gesetzliches Widerrufsrecht von 14 Tagen. Wird ein Kleid nach deinen Maßen individuell gefertigt, entfällt es in der Regel. Prüfe die Bedingungen des Shops vor der Bestellung.</li>
            <li><strong>Anprobe:</strong> Probiere zu Hause an, ohne das Kleid zu tragen oder Etiketten zu entfernen, wenn du eine Rückgabe offenhalten möchtest.</li>
            <li><strong>Änderungen:</strong> Ein Schneider kann Länge, Träger und Taille oft anpassen. Bei Brautkleidern plane mehrere Termine ein.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Kleiderkauf</h2>
          <ul>
            <li><strong>Nur nach Foto kaufen:</strong> Stoffbeschreibung, Futter und Größentabelle gehören zur Entscheidung.</li>
            <li><strong>Zu spät bestellen:</strong> Für Brautkleider und Anlässe mit festem Termin braucht es Reserve.</li>
            <li><strong>Pflege ignorieren:</strong> Ein Kleid, das nur chemisch gereinigt werden darf, kostet im Unterhalt mehr.</li>
            <li><strong>Die falsche Länge wählen:</strong> Absatzhöhe und Anlass beeinflussen die Länge, die dir steht.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Damenkleider im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Alltags-, Braut- und Umstandskleider aus deutschen Online-Shops – täglich aktualisierte Preise für
            jeden Anlass.
          </p>
          <a href="https://www.preisgucken.de/kategorie/kleider" className="btn btn-brand px-4" target="_blank" rel="noopener">
            Zum Kleider-Preisvergleich →
          </a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
