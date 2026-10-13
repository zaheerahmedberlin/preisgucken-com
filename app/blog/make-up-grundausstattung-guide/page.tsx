import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make-up Grundausstattung: Was du brauchst",
  description: "Make-up Basics: Foundation, Concealer, Mascara und Lippenprodukte auswählen, Hautunterton erkennen, Haltbarkeit und Hygiene beachten und Preise vergleichen.",
  keywords: ["make-up grundausstattung", "foundation farbton finden", "mascara auswählen", "make-up für anfänger", "kosmetik haltbarkeit pao"],
  openGraph: {
    title: "Make-up Grundausstattung: Teint, Augen und Lippen für den Einstieg",
    description: "Make-up Basics: Foundation, Concealer, Mascara und Lippenprodukte auswählen, Hautunterton erkennen, Haltbarkeit und Hygiene beachten und Preise vergleichen.",
    url: "https://www.preisgucken.com/blog/make-up-grundausstattung-guide/",
    type: "article",
    publishedTime: "2026-10-13",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Make-up Grundausstattung: Teint, Augen und Lippen für den Einstieg" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/make-up-grundausstattung-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Make-up Grundausstattung: Teint, Augen und Lippen für den Einstieg",
    description: "Make-up Basics: Foundation, Concealer, Mascara und Lippenprodukte auswählen, Hautunterton erkennen, Haltbarkeit und Hygiene beachten und Preise vergleichen.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Make-up Grundausstattung: Teint, Augen und Lippen für den Einstieg",
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
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Make-up Grundausstattung
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Beauty & Pflege</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Make-up Grundausstattung: Teint, Augen und Lippen für den Einstieg</h1>
          <p className="lead text-muted">Wer mit Make-up beginnt, muss nicht alles kaufen. Wir zeigen, welche Produkte die Basis bilden, wie du Farbtöne findest und worauf du bei Hygiene, Haltbarkeit und Preisen achtest.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 13. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die Grundausstattung: Was du wirklich brauchst</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Bereich</th><th>Produkte</th><th>Worauf du achten kannst</th></tr>
              </thead>
              <tbody>
                <tr><td>Teint</td><td>Foundation oder Tinted Moisturizer, Concealer, Puder</td><td>Farbton am Kiefer bei Tageslicht testen, Deckkraft nach Wunsch</td></tr>
                <tr><td>Augen</td><td>Mascara, Brauenprodukt, Lidschatten oder Eyeliner</td><td>Mascara zuerst, der Rest ist Geschmackssache</td></tr>
                <tr><td>Lippen</td><td>Lippenstift, Gloss oder getönter Balsam</td><td>Pflege vorher, Farbe passend zum Hautunterton</td></tr>
                <tr><td>Wangen</td><td>Rouge, Bronzer, Highlighter</td><td>Cremeprodukte wirken natürlicher, Puder hält länger</td></tr>
                <tr><td>Werkzeuge</td><td>Pinsel, Schwämmchen, Wimpernzange</td><td>Sauber halten und regelmäßig reinigen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Teint: Den richtigen Ton und die richtige Textur finden</h2>
          <ul>
            <li><strong>Hautunterton:</strong> Warm (goldene Töne), kühl (rosige Töne) oder neutral. Dein Unterton bestimmt, welche Nuancen natürlich wirken.</li>
            <li><strong>Textur:</strong> Flüssig für gleichmäßigen Teint, Creme für trockene Haut, Puder für fettige Haut oder zum Fixieren.</li>
            <li><strong>Testen:</strong> Trage etwas am Kiefer oder Unterarm auf und beurteile bei Tageslicht. Foundation oxidiert teils und kann nach einigen Minuten dunkler wirken.</li>
            <li><strong>Concealer:</strong> Etwas heller als der Teint setzt Akzente, im gleichen Ton deckt er Unebenheiten.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Augen und Lippen: Wirkung ohne Aufwand</h2>
          <ul>
            <li><strong>Mascara:</strong> Wähle Bürste und Formel nach Wunsch: Volumen, Länge oder Definition. Für empfindliche Augen gibt es Produkte, die für Kontaktlinsenträger getestet sind.</li>
            <li><strong>Augenbrauen:</strong> Ein Stift oder Gel rahmt das Gesicht und wirkt oft stärker als Lidschatten.</li>
            <li><strong>Lidschatten und Eyeliner:</strong> Matte Töne für den Alltag, Glanz für Anlässe. Beginne mit wenigen Farben, die zu deiner Augenfarbe passen.</li>
            <li><strong>Lippen:</strong> Lippenstift für Farbe, Gloss für Glanz, Balsam für Pflege. Ein Konturenstift hilft beim Halt, ist aber kein Muss.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Haltbarkeit, Hygiene und Verträglichkeit</h2>
          <ul>
            <li><strong>PAO-Symbol:</strong> Die Zahl auf dem geöffneten Tiegel-Symbol nennt die Monate, die das Produkt nach dem Öffnen verwendet werden sollte.</li>
            <li><strong>Augenprodukte:</strong> Mascara und Eyeliner sollten nach einigen Monaten ersetzt werden. Verwende sie nicht, wenn du eine Augeninfektion hast.</li>
            <li><strong>Pinsel reinigen:</strong> Regelmäßiges Waschen von Pinseln und Schwämmchen beugt Unreinheiten vor.</li>
            <li><strong>Verträglichkeit:</strong> Bei empfindlicher Haut oder Allergien lohnt der Blick auf Duftstoffe und Inhaltsstoffe. Teste neue Produkte zunächst an einer kleinen Stelle.</li>
            <li><strong>Teilen vermeiden:</strong> Gerade Mascara und Lippenprodukte solltest du nicht mit anderen teilen.</li>
          </ul>
          <p className="small text-muted">
            Bei Hautproblemen oder Reaktionen auf Kosmetik hilft eine Hautärztin oder ein Hautarzt. Dieser
            Beitrag ist keine medizinische Beratung.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Preise vergleichen und typische Fehler vermeiden</h2>
          <ul>
            <li><strong>Teuer heißt nicht besser:</strong> Preis und Qualität hängen nicht immer zusammen. Wichtig sind Textur, Farbe und Verträglichkeit bei dir.</li>
            <li><strong>Proben nutzen:</strong> Kleine Größen und Probiergrößen reduzieren das Risiko eines Fehlkaufs.</li>
            <li><strong>Farbnuancen:</strong> Bildschirmfarben weichen von der Realität ab. Lies Beschreibung und Bewertungen genau.</li>
            <li><strong>Zu viel auf einmal:</strong> Starte mit wenigen Basisprodukten und ergänze nach und nach.</li>
            <li><strong>Seriöse Händler:</strong> Bei Kosmetik sind Originalware und Haltbarkeitsdatum wichtig.</li>
          </ul>
          <p>
            Passende Ergänzungen findest du in den Ratgebern{" "}
            <a href="/blog/alltagslook-damenmode-make-up-guide/">Alltagslook: Damenmode und Make-up</a>,{" "}
            <a href="/blog/natuerliche-kosmetik-fruchtpigmente/">Natürliche Kosmetik mit Fruchtpigmenten</a> und{" "}
            <a href="/blog/gesichtspflege-routine-hauttyp-guide/">Gesichtspflege-Routine</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Vorher und nachher: Pflege, Abschminken und Alltag vs. Abend</h2>
          <ul>
            <li><strong>Vorher:</strong> Eine saubere, eingecremte Haut hält Make-up besser. Gib der Creme einige Minuten zum Einziehen, bevor du die Foundation aufträgst.</li>
            <li><strong>Sonnenschutz:</strong> Am Tag gehört ein Sonnenschutz unter das Make-up. Manche Foundations enthalten einen Lichtschutzfaktor, ersetzen aber keine ausreichend dosierte Sonnencreme.</li>
            <li><strong>Abschminken:</strong> Entferne Make-up vor dem Schlafen mit einem milden Reiniger, Reinigungsöl oder Mizellenwasser. Augen-Make-up braucht besonders sanfte Produkte und sanftes Tupfen statt Reiben.</li>
            <li><strong>Alltag:</strong> Leichter Teint, Mascara, Brauen und ein Hauch Lippenfarbe genügen und lassen sich in wenigen Minuten auftragen.</li>
            <li><strong>Abend und Anlass:</strong> Mehr Deckkraft, Puder zum Fixieren, ein dunklerer Lidschatten oder kräftigere Lippen. Ein Fixierspray kann die Haltbarkeit verbessern.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Make-up im Preisvergleich</h3>
          <p className="text-muted small mb-3">Teint, Augen und Lippen aus deutschen Online-Shops vergleichen.</p>
          <a href="https://www.preisgucken.de/kategorie/make-up-gesicht" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
