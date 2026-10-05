import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Echt oder Fake? Schmuck erkennen",
  description: "Schmuck kaufen: Materialkunde von 925er Silber über Edelstahl bis Gold (333, 585, 750), Vergoldung und Vermeil, Echtheit, Allergien und Pflege im Überblick.",
  keywords: ["schmuck kaufen", "schmuck online kaufen", "925 sterlingsilber", "hypoallergener schmuck", "hochwertigen schmuck erkennen", "schmuck qualität", "schmuck feingehalt 585 333 750", "vergoldet haltbarkeit", "vermeil oder vergoldet", "schmuck online kaufen echtheit", "schmuck pflege"],
  openGraph: {
    title: "Echt oder Fake? Schmuck erkennen",
    description: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück.",
    url: "https://www.preisgucken.com/blog/schmuck-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-08-01",
    modifiedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Echt oder Fake? Schmuck erkennen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/schmuck-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Echt oder Fake? Schmuck erkennen",
    description: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Echt oder Fake? Schmuck erkennen",
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

export default function SchmuckKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Schmuck kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Echt oder Fake? Schmuck erkennen</h1>
          <p className="lead text-muted">925er Sterlingsilber, hypoallergener Edelstahl oder vergoldet – welches Material hält, was es verspricht? Der Grundlagen-Ratgeber für alle Schmuckstücke.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Materialkunde für Schmuckstücke</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Material</th><th>Merkmale</th><th>Preisniveau</th></tr>
              </thead>
              <tbody>
                <tr><td>925er Sterlingsilber</td><td>92,5% Feinsilber, glänzend, kann anlaufen</td><td>Mittel</td></tr>
                <tr><td>Hypoallergener Edelstahl</td><td>Läuft nicht an, sehr hautverträglich, robust</td><td>Günstig bis mittel</td></tr>
                <tr><td>Vergoldet (Gold-Plated)</td><td>Dünne Goldschicht auf Basismetall, edle Optik</td><td>Günstig bis mittel</td></tr>
                <tr><td>Vermeil</td><td>Dickere Goldschicht auf Sterlingsilber, langlebiger als normal vergoldet</td><td>Mittel bis hoch</td></tr>
                <tr><td>Echtgold (333–750)</td><td>Läuft nie an, sehr langlebig, hoher Materialwert</td><td>Hoch</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Qualitätsmerkmale erkennen</h2>
          <ul>
            <li><strong>Stempelung suchen:</strong> Echtes Silber trägt meist einen "925"-Stempel, Gold eine Karat- oder Feingehaltsangabe</li>
            <li><strong>Verarbeitung prüfen:</strong> Saubere Lötstellen, gleichmäßige Oberfläche, kein sichtbarer Grat</li>
            <li><strong>Verschluss testen:</strong> Ein guter Karabiner- oder Federringverschluss lässt sich leicht öffnen, sitzt aber fest</li>
            <li><strong>Steine prüfen:</strong> Bei Zirkonia oder Glassteinen auf saubere Fassung achten, keine wackelnden Steine</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Allergien vermeiden</h2>
          <p>Nickelallergien sind einer der häufigsten Gründe für Hautreaktionen bei Modeschmuck. Wer empfindliche Haut hat, sollte auf folgende Angaben achten:</p>
          <div className="alert alert-info small">
            💡 <strong>Achte auf:</strong> "nickelfrei", "hypoallergen" oder "chirurgischer Edelstahl" (Surgical Steel) in der Produktbeschreibung – diese Materialien verursachen bei den meisten Menschen keine Hautreaktionen, auch bei Dauertragen wie Ohrringen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Schmuck nach Anlass wählen</h2>
          <ul>
            <li><strong>Alltag:</strong> Robuste, hypoallergene Materialien wie Edelstahl – hält Duschen und Sport aus</li>
            <li><strong>Büro:</strong> Dezente Stücke in Silber oder Vermeil, keine zu großen Statement-Teile</li>
            <li><strong>Festliche Anlässe:</strong> Sterlingsilber oder Echtgold mit Steinbesatz für mehr Glanz</li>
            <li><strong>Geschenke:</strong> Vermeil oder Echtgold gelten als besonders wertig und langlebig</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Pflegetipps für langen Glanz</h2>
          <ol>
            <li><strong>Erst nach Make-up und Parfüm anlegen</strong> – Chemikalien beschleunigen das Anlaufen</li>
            <li><strong>Vor dem Duschen und Schwimmen abnehmen</strong>, besonders bei Silber und vergoldeten Stücken</li>
            <li><strong>Trocken und einzeln lagern</strong>, idealerweise in einem Schmuckbeutel, um Kratzer zu vermeiden</li>
            <li><strong>Mit einem weichen Tuch polieren</strong> statt aggressiver Reiniger zu verwenden</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Gold: Was die Feingehalte 333, 585 und 750 bedeuten</h2>
          <p>Die Zahl gibt den Goldanteil in Tausendsteln an. Zu 24 Karat reinem Gold sind es 1000 Teile:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Feingehalt</th><th>Karat</th><th>Goldanteil</th></tr>
              </thead>
              <tbody>
                <tr><td>333</td><td>8 Karat</td><td>33,3 %</td></tr>
                <tr><td>585</td><td>14 Karat</td><td>58,5 %</td></tr>
                <tr><td>750</td><td>18 Karat</td><td>75 %</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Je höher der Feingehalt, desto mehr Gold enthält das Stück und desto weicher ist es. Für Alltagsschmuck ist 585 verbreitet, 333 ist günstiger und härter.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Vergoldet oder Vermeil: Wie lange hält die Schicht?</h2>
          <p>Eine Vergoldung ist eine dünne Goldschicht und nutzt sich bei häufigem Tragen ab, oft nach etwa ein bis zwei Jahren. Vermeil hat eine dickere Schicht auf Sterlingsilber und hält meist länger. Pflege verlängert die Lebensdauer: Reinige vergoldeten Schmuck sanft mit einem weichen Tuch oder in lauwarmer Seifenlauge und reibe nicht stark. Nimm ihn zum Schwimmen, Duschen und Sport ab.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schmuck online kaufen: Echtheit und Rückgabe</h2>
          <ul>
            <li><strong>Angaben prüfen:</strong> Seriöse Shops nennen Material, Feingehalt oder Stempel und Gewicht.</li>
            <li><strong>Stempel suchen:</strong> Echtes Silber trägt meist „925“, Gold eine Feingehaltsangabe.</li>
            <li><strong>Rückgabe klären:</strong> Online gilt in der Regel ein 14-tägiges Widerrufsrecht. Bei personalisiertem Schmuck gilt es meist nicht.</li>
            <li><strong>Misstrauisch bei Schnäppchen:</strong> Sehr niedrige Preise für Echtgold oder Markenschmuck sind ein Warnzeichen.</li>
          </ul>
          <p className="small text-muted">Vertiefend findest du Ratgeber zu <a href="/blog/ohrringe-kaufen-ratgeber/">Ohrringen</a>, <a href="/blog/halsketten-kaufen-ratgeber/">Halsketten</a>, <a href="/blog/ringe-kaufen-ratgeber/">Ringen</a>, <a href="/blog/armbaender-kaufen-ratgeber/">Armbändern</a>, <a href="/blog/fusskettchen-kaufen-ratgeber/">Fußkettchen</a> und <a href="/blog/schmucksets-kaufen-ratgeber/">Schmucksets</a>. Silber und Edelstahl vergleicht der Artikel <a href="/blog/sterlingsilber-vs-edelstahl-schmuck/">Sterlingsilber vs. Edelstahl</a>. Als Geschenk lies den <a href="/blog/schmuck-als-geschenk-ratgeber/">Geschenk-Ratgeber</a>.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Schmuckkauf</h2>
          <ol>
            <li><strong>Material nicht prüfen:</strong> Vergoldet, Vermeil und Echtgold unterscheiden sich stark in Haltbarkeit und Preis.</li>
            <li><strong>Allergien ignorieren:</strong> Bei empfindlicher Haut zählt die Verträglichkeit, besonders bei Ohrringen.</li>
            <li><strong>Auf den Stempel verzichten:</strong> Ohne Angabe von Material und Feingehalt kannst du den Wert nicht einschätzen.</li>
            <li><strong>Pflege vergessen:</strong> Silber läuft an, Vergoldung nutzt sich ab. Schmuck braucht etwas Pflege.</li>
            <li><strong>Zu günstig kaufen:</strong> Sehr niedrige Preise bei Echtgold sind ein Warnsignal.</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Schmuck-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Ohrringe, Ketten, Armbänder, Ringe und Sets aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schmuck" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Schmuck-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
