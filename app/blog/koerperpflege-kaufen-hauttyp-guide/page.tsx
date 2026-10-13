import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Körperpflege kaufen: Duschgel, Lotion & Öl",
  description: "Duschgel, Bodylotion, Körperöl und Peeling passend zum Hauttyp auswählen, Inhaltsstoffe lesen, Routine aufbauen und Preise pro 100 ml vergleichen.",
  keywords: ["körperpflege kaufen", "bodylotion hauttyp", "duschgel trockene haut", "körperöl oder bodylotion", "körperpflege routine"],
  openGraph: {
    title: "Körperpflege kaufen: Duschgel, Lotion und Öl nach Hauttyp",
    description: "Duschgel, Bodylotion, Körperöl und Peeling passend zum Hauttyp auswählen, Inhaltsstoffe lesen, Routine aufbauen und Preise pro 100 ml vergleichen.",
    url: "https://www.preisgucken.com/blog/koerperpflege-kaufen-hauttyp-guide/",
    type: "article",
    publishedTime: "2026-10-13",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Körperpflege kaufen: Duschgel, Lotion und Öl nach Hauttyp" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/koerperpflege-kaufen-hauttyp-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Körperpflege kaufen: Duschgel, Lotion und Öl nach Hauttyp",
    description: "Duschgel, Bodylotion, Körperöl und Peeling passend zum Hauttyp auswählen, Inhaltsstoffe lesen, Routine aufbauen und Preise pro 100 ml vergleichen.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Körperpflege kaufen: Duschgel, Lotion und Öl nach Hauttyp",
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
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Körperpflege kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Beauty & Pflege</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Körperpflege kaufen: Duschgel, Lotion und Öl nach Hauttyp</h1>
          <p className="lead text-muted">Von Duschgel bis Bodylotion: Wir zeigen, wie du Körperpflege nach Hauttyp und Jahreszeit auswählst, Inhaltsstoffe einordnest und Preise sinnvoll vergleichst.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 13. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die Produktarten im Überblick</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Produkt</th><th>Wofür</th><th>Hinweise</th></tr>
              </thead>
              <tbody>
                <tr><td>Duschgel / Duschöl</td><td>Reinigung unter der Dusche</td><td>Milde Formeln sind für trockene und empfindliche Haut gedacht</td></tr>
                <tr><td>Bodylotion / Creme</td><td>Feuchtigkeit nach dem Duschen</td><td>Leichte Lotion für den Alltag, reichhaltige Creme für trockene Haut</td></tr>
                <tr><td>Körperöl</td><td>Pflege und Glanz</td><td>Auf feuchter Haut auftragen, wenig Menge</td></tr>
                <tr><td>Peeling</td><td>Entfernt abgestorbene Hautschüppchen</td><td>Nicht täglich, auf gereizter Haut meiden</td></tr>
                <tr><td>Handcreme / Fußcreme</td><td>Zielgerichtete Pflege</td><td>Beanspruchte Stellen brauchen oft reichhaltigere Formeln</td></tr>
                <tr><td>Deodorant</td><td>Geruchsschutz</td><td>Mit oder ohne Aluminiumsalze, nach Verträglichkeit wählen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Hauttyp und Jahreszeit: Die Pflege anpassen</h2>
          <ul>
            <li><strong>Trockene Haut:</strong> Reichhaltige Cremes und Öle, lauwarmes statt heißes Wasser, kürzer duschen.</li>
            <li><strong>Normale bis Mischhaut:</strong> Leichte Lotion nach dem Duschen genügt oft.</li>
            <li><strong>Empfindliche Haut:</strong> Produkte ohne starke Duftstoffe und mit kurzer Inhaltsstoffliste. Teste neue Produkte an einer kleinen Stelle.</li>
            <li><strong>Winter:</strong> Heizungsluft und Kälte trocknen die Haut aus. Pflege häufiger und intensiver.</li>
            <li><strong>Sommer:</strong> Leichte Texturen, nach Sonne oder Meerwasser pflegen und Sonnenschutz nicht vergessen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Inhaltsstoffe und Siegel verstehen</h2>
          <ul>
            <li><strong>INCI-Liste:</strong> Die Zutaten stehen in absteigender Reihenfolge der Menge. Das Wichtigste steht vorn.</li>
            <li><strong>Duftstoffe:</strong> Sie sind eine häufige Ursache für Hautreaktionen. „Ohne Parfüm“ ist für empfindliche Haut oft sinnvoll.</li>
            <li><strong>Naturkosmetik-Siegel:</strong> Sie folgen eigenen Kriterien, die sich unterscheiden. Auch „natürlich“ ist nicht automatisch hautverträglicher.</li>
            <li><strong>Mikroplastik und Umwelt:</strong> Manche Produkte verzichten auf bestimmte Kunststoffe. Informiere dich über die Angaben des Herstellers und beachte Siegel.</li>
            <li><strong>Dermatologisch getestet:</strong> Das ist ein Hinweis auf eine Prüfung, aber keine Garantie, dass jeder Mensch das Produkt verträgt.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Eine einfache Routine für den Alltag</h2>
          <ol>
            <li><strong>Reinigen:</strong> Mildes Duschgel, lauwarmes Wasser, nicht zu lange duschen.</li>
            <li><strong>Abtrocknen:</strong> Haut tupfen statt rubbeln.</li>
            <li><strong>Eincremen:</strong> Direkt nach dem Duschen, solange die Haut noch leicht feucht ist.</li>
            <li><strong>Extras:</strong> Peeling ein- bis zweimal pro Woche oder seltener, Handcreme nach dem Händewaschen.</li>
          </ol>
          <p className="small text-muted">
            Bei Ekzemen, starkem Juckreiz oder anhaltenden Hautproblemen ist ärztlicher Rat wichtiger als
            ein neues Produkt. Dieser Beitrag ist keine medizinische Beratung.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Preise vergleichen und typische Fehler vermeiden</h2>
          <ul>
            <li><strong>Preis pro 100 ml:</strong> Vergleiche Füllmengen, nicht nur Packungspreise.</li>
            <li><strong>Großpackungen:</strong> Sie sind pro Milliliter meist günstiger, solange du sie vor Ablauf der Haltbarkeit aufbrauchst.</li>
            <li><strong>Zu heißes Duschen:</strong> Es trocknet die Haut aus und macht die Pflege schwerer.</li>
            <li><strong>Zu viele Produkte:</strong> Wenige passende Produkte sind oft besser als ein volles Regal.</li>
            <li><strong>Weitere Pflege:</strong> Ergänzend helfen die Ratgeber <a href="/blog/gesichtspflege-routine-hauttyp-guide/">Gesichtspflege-Routine</a> und <a href="/blog/haarpflege-kaufen-haartyp-guide/">Haarpflege kaufen</a>.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Geschenkideen und Sets</h2>
          <ul>
            <li><strong>Pflege-Sets:</strong> Praktisch als Geschenk. Prüfe, ob die Produkte zum Hauttyp passen und ob Duftstoffe enthalten sind.</li>
            <li><strong>Reisegrößen:</strong> Gut für Urlaub und Handgepäck.</li>
            <li><strong>Mehr Ideen:</strong> Anregungen findest du im <a href="/blog/weihnachtsgeschenke-ideen-guide/">Weihnachtsgeschenke-Ratgeber</a> und im Beitrag <a href="/blog/muttertag-geschenkideen/">Muttertag Geschenkideen</a>.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Spezielle Stellen: Hände, Füße, Ellbogen und Rasur</h2>
          <ul>
            <li><strong>Hände:</strong> Sie sind Wasser, Seife und Kälte ausgesetzt. Eine Handcreme nach dem Waschen und ein reichhaltiges Produkt über Nacht helfen.</li>
            <li><strong>Füße:</strong> Hornhaut lässt sich durch Peeling und regelmäßige Pflege mit Fußcreme reduzieren. Trockene Fersen brauchen oft reichhaltige Produkte mit höherem Fettanteil.</li>
            <li><strong>Ellbogen und Knie:</strong> Diese Stellen haben dickere Haut und profitieren von gelegentlichem Peeling und reichhaltiger Pflege.</li>
            <li><strong>Nach der Rasur:</strong> Haut kann gereizt sein. Verwende milde, duftstofffreie Pflege und vermeide Alkohol-haltige Produkte auf frischen Stellen.</li>
            <li><strong>Sonnenschutz:</strong> Der Körper braucht bei Sonne zusätzlichen Schutz. Ein Pflegeprodukt mit Lichtschutzfaktor kann im Alltag helfen, ersetzt aber bei intensiver Sonne keine Sonnencreme.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du beim Kauf noch achten kannst</h2>
          <ul>
            <li><strong>Spender und Verpackung:</strong> Pumpspender sind hygienisch und sparsam, Tuben lassen sich gut leeren, und Tiegel verlangen saubere Finger oder einen Spatel.</li>
            <li><strong>Duft:</strong> Starke Düfte sind Geschmackssache und können Parfüm überlagern. Wer Parfüm trägt, greift oft zu dezenten oder unparfümierten Produkten.</li>
            <li><strong>Einziehverhalten:</strong> Wer morgens wenig Zeit hat, bevorzugt Produkte, die schnell einziehen und nicht auf der Kleidung abfärben.</li>
            <li><strong>Haltbarkeit:</strong> Prüfe das Symbol für die Verwendungsdauer nach dem Öffnen und kaufe nur so viel, wie du in dieser Zeit aufbrauchst.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Bei geöffneten Pflegeprodukten kann die Rückgabe aus Hygienegründen eingeschränkt sein; die Bedingungen nennt der Händler.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Körperpflege im Preisvergleich</h3>
          <p className="text-muted small mb-3">Duschgel, Lotion, Körperöl und mehr aus deutschen Online-Shops vergleichen.</p>
          <a href="https://www.preisgucken.de/kategorie/koerperpflege" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
