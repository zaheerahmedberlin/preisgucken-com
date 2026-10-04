import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ringgröße zuhause bestimmen",
  description: "Ringe kaufen: Ringgröße zuhause bestimmen, Umfang und Durchmesser umrechnen, Ringbreite, Materialien, Stapelringe und Pflege – mit Tabelle.",
  keywords: ["ring kaufen", "ringgröße bestimmen", "ring damen silber", "stapelringe", "ring als geschenk", "ringgröße tabelle", "ringgröße bestimmen", "ringgröße umrechnen", "ringbreite sitz", "ring größe ändern", "stapelringe kombinieren"],
  openGraph: {
    title: "Ringgröße zuhause bestimmen",
    description: "So findest du die richtige Ringgröße zuhause, welche Materialien halten und welcher Ringstil zu dir passt.",
    url: "https://www.preisgucken.com/blog/ringe-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-08-01",
    modifiedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Ringgröße zuhause bestimmen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/ringe-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Ringgröße zuhause bestimmen",
    description: "So findest du die richtige Ringgröße zuhause, welche Materialien halten und welcher Ringstil zu dir passt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Ringgröße zuhause bestimmen",
  datePublished: "2026-08-01",
  dateModified: "2026-10-04",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function RingeKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Ringe kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Ringgröße zuhause bestimmen</h1>
          <p className="lead text-muted">Die häufigste Fehlerquelle beim Ringkauf ist die falsche Größe. Wir zeigen dir, wie du sie zuhause bestimmst – und welcher Stil zu dir passt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Ringgröße zuhause messen</h2>
          <ol>
            <li>Einen schmalen Papierstreifen um die Basis des Fingers wickeln, dort wo der Ring später sitzen soll</li>
            <li>Die Stelle markieren, an der sich das Papier überlappt</li>
            <li>Den Streifen mit einem Lineal messen (Innenumfang in Millimetern)</li>
            <li>Am besten abends messen, da Finger im Tagesverlauf leicht anschwellen</li>
          </ol>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Innenumfang (mm)</th><th>Innendurchmesser (mm)</th><th>Deutsche Ringgröße (nach Umfang)</th></tr>
              </thead>
              <tbody>
                <tr><td>50</td><td>15,9</td><td>50</td></tr>
                <tr><td>52</td><td>16,6</td><td>52</td></tr>
                <tr><td>54</td><td>17,2</td><td>54</td></tr>
                <tr><td>56</td><td>17,8</td><td>56</td></tr>
                <tr><td>58</td><td>18,5</td><td>58</td></tr>
                <tr><td>60</td><td>19,1</td><td>60</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Manche Shops geben die Größe als Durchmesser an (zum Beispiel 17) statt als Umfang (zum Beispiel 54). Umrechnen kannst du so: Umfang ÷ 3,14 = Durchmesser.</p>
          <p className="small text-muted">Tipp: Miss den Finger, an dem der Ring getragen werden soll – Ringgrößen unterscheiden sich je nach Finger und Hand.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Material im Vergleich</h2>
          <p>Ringe sind durch Handkontakt mit Wasser, Seife und Reibung besonders beansprucht. Hypoallergener Edelstahl und Titan sind kratzfest und alltagstauglich, während 925er Sterlingsilber und Vermeil edler wirken, aber etwas mehr Pflege brauchen.</p>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Verstellbare Ringe (Open Ring) umgehen das Größenproblem komplett und eignen sich gut als Geschenk. Preisvergleich auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a>.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Der Stapelring-Trend</h2>
          <ul>
            <li><strong>Dünne Bänder kombinieren:</strong> 2–4 schmale Ringe übereinander wirken modern und leicht</li>
            <li><strong>Unterschiedliche Texturen mischen:</strong> glatt, gedreht und mit Steinbesatz zusammen tragen</li>
            <li><strong>Auf verschiedene Finger verteilen:</strong> nicht alle Ringe auf einen Finger stapeln</li>
            <li><strong>Ein Statement-Stück als Anker:</strong> ein auffälligerer Ring plus mehrere schlichte Bänder</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Ringe nach Fingertyp</h2>
          <ul>
            <li><strong>Kurze Finger:</strong> schmale Ringbänder strecken optisch</li>
            <li><strong>Lange, schlanke Finger:</strong> breitere Bänder oder auffällige Steine wirken proportionaler</li>
            <li><strong>Für den Alltag:</strong> niedrig sitzende Steine vermeiden Verhaken an Kleidung</li>
            <li><strong>Für besondere Anlässe:</strong> höher gefasste Steine sorgen für mehr Glanz</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Ringbreite: Warum breite Ringe enger sitzen</h2>
          <p>Ein breiter Ring fühlt sich bei gleicher Größe enger an als ein schmaler. Üblich sind Breiten von etwa 1,6 bis 6 mm, bei manchen Eheringen auch mehr. Wenn du zwischen zwei Größen schwankst oder einen breiten Ring wählst, ist die größere Größe oft die bessere Wahl.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Ring ändern oder tauschen</h2>
          <ul>
            <li><strong>Gold und Silber:</strong> Ein Goldschmied kann sie meist weiten oder verengen.</li>
            <li><strong>Edelstahl und Titan:</strong> Sie lassen sich in der Regel nicht oder nur eingeschränkt ändern. Hier solltest du die Größe vorher sicher kennen.</li>
            <li><strong>Zum Messen:</strong> Mit einem Ringgrößenmesser (Multisizer) bestimmst du die Größe zuhause. Er deckt deutsche Größen von etwa 41 bis 76 ab.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Pflege und Tragekomfort</h2>
          <ul>
            <li>Nimm Ringe bei Handarbeit, Sport und beim Putzen ab.</li>
            <li>Reinige Silber mit einem weichen Tuch, Edelstahl mit Wasser und etwas Seife.</li>
            <li>Ein Ring mit Stein sollte in einer Box liegen, damit nichts verkratzt.</li>
          </ul>
          <p className="small text-muted">Eine Ringgröße als Geschenk zu erraten ist riskant. Wie du sie heimlich bestimmst, steht im <a href="/blog/schmuck-als-geschenk-ratgeber/">Geschenk-Ratgeber</a>. Passende Kombinationen findest du bei den <a href="/blog/schmucksets-kaufen-ratgeber/">Schmucksets</a>.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Ring-Kauf</h2>
          <ol>
            <li><strong>Die Größe raten:</strong> Gerade bei Edelstahl und Titan ist ein späteres Ändern kaum möglich.</li>
            <li><strong>Morgens messen:</strong> Am Abend sind die Finger etwas dicker, das entspricht dem Alltag.</li>
            <li><strong>Die Breite vergessen:</strong> Breite Ringe sitzen enger als schmale.</li>
            <li><strong>Notation verwechseln:</strong> Umfang (zum Beispiel 54) und Durchmesser (zum Beispiel 17) sind nicht dasselbe.</li>
            <li><strong>Falschen Finger messen:</strong> Jeder Finger hat eine andere Größe.</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Ringe-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Stapelringe, Statement-Ringe und Sets aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schmuck" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Ringe-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
