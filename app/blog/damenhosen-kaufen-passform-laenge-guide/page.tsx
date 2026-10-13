import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Damenhosen kaufen: Passform, Länge, Stoff",
  description: "Slim, Straight, Wide oder Comfort Fit? Damenhosen nach Passform, Länge, Stoff und Größe auswählen – mit Pflegetipps und Preisvergleich.",
  keywords: ["damenhosen kaufen", "hosen passform", "7/8 hose oder capri", "hose größe bestimmen", "comfort fit hose"],
  openGraph: {
    title: "Damenhosen kaufen: Passform, Länge und Stoff im Überblick",
    description: "Slim, Straight, Wide oder Comfort Fit? Damenhosen nach Passform, Länge, Stoff und Größe auswählen – mit Pflegetipps und Preisvergleich.",
    url: "https://www.preisgucken.com/blog/damenhosen-kaufen-passform-laenge-guide/",
    type: "article",
    publishedTime: "2026-10-13",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Damenhosen kaufen: Passform, Länge und Stoff im Überblick" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/damenhosen-kaufen-passform-laenge-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Damenhosen kaufen: Passform, Länge und Stoff im Überblick",
    description: "Slim, Straight, Wide oder Comfort Fit? Damenhosen nach Passform, Länge, Stoff und Größe auswählen – mit Pflegetipps und Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Damenhosen kaufen: Passform, Länge und Stoff im Überblick",
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
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Damenhosen kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Mode & Kleidung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Damenhosen kaufen: Passform, Länge und Stoff im Überblick</h1>
          <p className="lead text-muted">Eine Hose sitzt oder sie sitzt nicht. Wir zeigen, wie du Schnitt, Länge und Stoff passend zu Figur und Anlass auswählst, worauf es bei Maßen ankommt und wie du Hosen richtig pflegst.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 13. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Passformen im Überblick: Welcher Schnitt passt zu dir?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Schnitt</th><th>Beschreibung</th><th>Passt gut zu</th></tr>
              </thead>
              <tbody>
                <tr><td>Slim / Skinny</td><td>Eng anliegend vom Oberschenkel bis zum Saum</td><td>Längeren Oberteilen, Stiefeln und Sneakern</td></tr>
                <tr><td>Straight</td><td>Gerade geschnitten, weder eng noch weit</td><td>Fast jedem Anlass, zeitlos und vielseitig</td></tr>
                <tr><td>Tapered</td><td>Oben etwas weiter, zum Saum hin schmaler</td><td>Alltag und Büro, besonders bei kräftigeren Oberschenkeln</td></tr>
                <tr><td>Wide Leg</td><td>Weites Bein, fließend oder gerade</td><td>Schlichten, körpernahen Oberteilen und Absätzen</td></tr>
                <tr><td>Comfort Fit</td><td>Mehr Platz an Hüfte und Oberschenkel, oft mit Dehnbund</td><td>Langem Sitzen, Reisen und bequemem Alltag</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Längen: 7/8, Capri, Shorts und knöchellang</h2>
          <ul>
            <li><strong>Knöchellang:</strong> Die Hose endet am Knöchel und lässt Schuhe sichtbar. Praktisch für Übergangszeit und Sneaker.</li>
            <li><strong>7/8-Hose:</strong> Endet knapp über dem Knöchel und streckt optisch. Gut mit Ballerinas, Loafern und Sandalen.</li>
            <li><strong>Capri:</strong> Reicht bis unter das Knie oder zur Wade. Sommerlich und luftig, wirkt bei breiteren Waden aber oft kürzer.</li>
            <li><strong>Shorts:</strong> Für Hitze und Urlaub. Achte auf Beinlänge und Bundweite, damit sie nicht rutschen oder einschneiden.</li>
            <li><strong>Lang:</strong> Bodennah mit Absatz oder Stiefel. Die Schrittlänge sollte zur Schuhhöhe passen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Stoffe und Materialien</h2>
          <ul>
            <li><strong>Baumwolle mit Stretch:</strong> Bequem, formstabil und pflegeleicht. Der Elasthan-Anteil sorgt für Bewegungsfreiheit.</li>
            <li><strong>Leinen und Leinenmischungen:</strong> Luftig im Sommer, knittert aber stark. Das gehört zum Look.</li>
            <li><strong>Viskose und Jersey:</strong> Fließend und weich, empfindlich bei Reibung und Wäsche. Pflegeetikett beachten.</li>
            <li><strong>Wolle und Wollmischungen:</strong> Warm für Herbst und Winter, oft für Stoffhosen im Büro. Meist nur schonend zu waschen.</li>
            <li><strong>Denim:</strong> Robust, in vielen Waschungen und Dehnbarkeiten. Reiner Denim ist steifer, Stretch-Denim bequemer.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Größe und Maße richtig bestimmen</h2>
          <ol>
            <li><strong>Bund und Hüfte messen:</strong> Miss Taille und Hüfte an der breitesten Stelle und vergleiche mit der Größentabelle des Shops.</li>
            <li><strong>Schrittlänge:</strong> Die Innenbeinlänge entscheidet, ob die Hose am Knöchel oder am Boden endet. Miss sie von Schritt bis Knöchel.</li>
            <li><strong>Leibhöhe (Rise):</strong> Hoch, mittel oder niedrig. Eine hohe Leibhöhe betont die Taille, eine niedrige sitzt auf der Hüfte.</li>
            <li><strong>Größensysteme:</strong> Deutsche Größen (36, 38, 40 …), Kurz-, Normal- und Langgrößen und internationale Größen unterscheiden sich. Prüfe, welches System der Shop nutzt.</li>
            <li><strong>Dehnbarkeit:</strong> Hosen mit Elasthan geben nach. Reine Baumwolle oder Wolle sitzt von Anfang an enger.</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Kombinieren: Von Büro bis Freizeit</h2>
          <ul>
            <li><strong>Büro:</strong> Gerade oder tapered geschnittene Stoffhose mit Bluse und Blazer.</li>
            <li><strong>Alltag:</strong> Comfort Fit oder Straight mit Pullover oder Shirt und Sneakern. Ideen zu Strick findest du im <a href="/blog/damenpullover-kaufen-material-pflege-guide/">Damenpullover-Ratgeber</a>.</li>
            <li><strong>Sommer:</strong> Leinenhose, Capri oder Shorts mit leichtem Oberteil und Sandalen.</li>
            <li><strong>Festlich:</strong> Wide Leg oder elegante Stoffhose mit Schmuck und Absatz. Mehr zu Anlässen im Beitrag <a href="/blog/kleider-fuer-jeden-anlass/">Kleider für jeden Anlass</a>.</li>
          </ul>
          <p>
            Wie du Basisteile zu einem stimmigen Look kombinierst, zeigt der{" "}
            <a href="/blog/alltagslook-damenmode-make-up-guide/">Alltagslook-Guide</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Pflege und Haltbarkeit</h2>
          <ul>
            <li><strong>Waschen:</strong> Nach dem Etikett bei niedriger Temperatur, auf links und mit passendem Waschmittel. Dunkle Hosen behalten ihre Farbe mit Colorwaschmittel besser.</li>
            <li><strong>Trocknen:</strong> Luftgetrocknet bleibt Stretch länger elastisch. Im Trockner kann die Hose einlaufen.</li>
            <li><strong>Bügeln:</strong> Beachte die Temperaturangabe, da Synthetik und Viskose empfindlich reagieren.</li>
            <li><strong>Lüften:</strong> Nicht jede Hose muss nach einem Tragen gewaschen werden.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Hosenkauf</h2>
          <ul>
            <li><strong>Nur nach Konfektionsgröße bestellen:</strong> Schnitte fallen je nach Hersteller sehr unterschiedlich aus.</li>
            <li><strong>Die Länge nicht prüfen:</strong> Gerade bei 7/8- und Caprihosen entscheidet die Beinlänge über die Wirkung.</li>
            <li><strong>Den Sitz im Sitzen vergessen:</strong> Probiere im Sitzen, ob der Bund einschneidet oder rutscht.</li>
            <li><strong>Pflegehinweise ignorieren:</strong> Ein falsch gewaschener Stoff verliert Form und Farbe.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Probiere die Hose an, ohne sie zu waschen oder Etiketten zu entfernen.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Damenhosen im Preisvergleich</h3>
          <p className="text-muted small mb-3">Hosen, Shorts und Caprihosen aus deutschen Online-Shops vergleichen.</p>
          <a href="https://www.preisgucken.de/kategorie/damenhosen" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
