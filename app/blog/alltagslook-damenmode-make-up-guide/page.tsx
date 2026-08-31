import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alltagslook: Mode & Make-up kombinieren",
  description: "Basic-Teile, Layering und Everyday-Make-up: So baust du dir einen Alltagslook für jeden Tag – mit Preisvergleich.",
  keywords: ["alltagslook damen", "damenmode alltag", "capsule wardrobe frauen", "everyday make-up", "basic outfit damen", "make-up alltag anleitung"],
  openGraph: {
    title: "Alltagslook: Mode & Make-up kombinieren",
    description: "Basic-Teile, Layering und Everyday-Make-up: So baust du dir einen Alltagslook für jeden Tag – mit Preisvergleich.",
    url: "https://www.preisgucken.com/blog/alltagslook-damenmode-make-up-guide",
    type: "article",
    publishedTime: "2026-08-19",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Alltagslook: Mode & Make-up kombinieren" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/alltagslook-damenmode-make-up-guide" },
  twitter: {
    card: "summary_large_image",
    title: "Alltagslook: Mode & Make-up kombinieren",
    description: "Basic-Teile, Layering und Everyday-Make-up: So baust du dir einen Alltagslook für jeden Tag – mit Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Alltagslook: Mode & Make-up kombinieren",
  datePublished: "2026-08-19",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function AlltagslookDamenmodeMakeUpGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Alltagslook: Mode & Make-up
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Alltagslook: Mode & Make-up kombinieren</h1>
          <p className="lead text-muted">Ein guter Alltagslook lebt nicht von einzelnen Teilen, sondern vom Zusammenspiel: die richtigen Basics, cleveres Layering und ein Make-up, das im Büro genauso funktioniert wie abends. Wir zeigen dir, wie du beides aufeinander abstimmst, ohne jeden Tag neu zu überlegen.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Die Basics-Garderobe — wenige Teile, viele Kombinationen</h2>
          <p>Ein alltagstauglicher Kleiderschrank braucht keine riesige Auswahl, sondern Teile, die sich untereinander kombinieren lassen. Fünf Kategorien bilden das Fundament:</p>
          <ul>
            <li><strong>Damenshirts & Tops:</strong> Neutrale Farben (Weiß, Schwarz, Beige) lassen sich mit fast jeder Hose und jedem Rock kombinieren</li>
            <li><strong>Damenhosen & Damenjeans:</strong> Ein gerader Schnitt in dunkler Waschung funktioniert sowohl leger als auch aufgewertet mit Blazer</li>
            <li><strong>Damenpullover & Strickwaren:</strong> Als Übergangsschicht zwischen T-Shirt und Jacke unverzichtbar, besonders in Wolle oder Feinstrick</li>
            <li><strong>Kleider:</strong> Ein Alltagskleid spart morgens Zeit, weil Ober- und Unterteil nicht kombiniert werden müssen</li>
            <li><strong>Blazer:</strong> Verwandelt jedes Basic-Outfit in einen büro- oder anlassfähigen Look, ohne dass du dich umziehen musst</li>
          </ul>
          <p className="small text-muted">Faustregel: Je neutraler die Grundfarbe der Basics, desto seltener stehst du morgens vor der Frage "passt das überhaupt zusammen?".</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Layering — für Temperaturschwankungen gerüstet</h2>
          <p>Gerade im Übergang zwischen Jahreszeiten entscheidet die richtige Schichtung, ob ein Outfit den ganzen Tag funktioniert:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Schicht</th><th>Funktion</th></tr>
              </thead>
              <tbody>
                <tr><td>Shirt oder Top</td><td>Direkter Hautkontakt — hier lohnt sich Baumwolle oder ein atmungsaktives Mischgewebe</td></tr>
                <tr><td>Pullover oder Strickjacke</td><td>Wärmt, lässt sich bei Bedarf ausziehen, ohne den Look zu zerstören</td></tr>
                <tr><td>Jacke oder Mantel</td><td>Wetterschutz — Schnitt sollte über der Zwischenschicht noch bequem sitzen</td></tr>
              </tbody>
            </table>
          </div>
          <p>Accessoires wie Schals oder Taschen sind die schnellste Möglichkeit, ein bestehendes Outfit optisch zu verändern, ohne neue Kleidungsstücke zu kaufen.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Everyday-Make-up — drei Zonen, die den Look tragen</h2>
          <p>Ein alltagstaugliches Make-up muss nicht aufwendig sein. Drei Bereiche reichen, um gepflegt und wach zu wirken, ohne dass es nach "viel Make-up" aussieht:</p>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">✨ Gesicht</h3>
                <p className="small text-muted mb-0">Leichte Foundation oder getönte Creme statt Vollabdeckung, dazu Concealer punktuell unter den Augen — wirkt frischer als eine dicke Schicht.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👁 Augen</h3>
                <p className="small text-muted mb-0">Ein neutraler Lidschatten plus Mascara reicht für den Alltag völlig aus — Lidschattenpaletten mit Erdtönen sind am vielseitigsten kombinierbar.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💋 Lippen</h3>
                <p className="small text-muted mb-0">Ein Lippenstift oder Lipgloss in Nude- oder gedeckten Rosétönen passt zu fast jedem Look und lässt sich schnell nachziehen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Die richtigen Tools machen den Unterschied</h2>
          <p>Auch das beste Make-up wirkt nur so gut wie sein Auftrag. Ein Beauty-Blender oder Foundation-Pinsel verteilt Produkte gleichmäßiger als die Finger und verbraucht dabei meist weniger Produkt — auf Dauer also auch eine Preisfrage. Für den Alltag reichen drei Basics: ein Foundation-Schwamm oder -Pinsel, eine Wimpernzange und ein weicher Lidschattenpinsel.</p>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Gesichtspflege vor dem Make-up nicht unterschätzen — eine gut eingezogene Feuchtigkeitscreme lässt Foundation länger halten und gleichmäßiger aussehen, wodurch du insgesamt weniger Produkt brauchst.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Typische Fehler beim Alltagslook vermeiden</h2>
          <ul>
            <li><strong>Zu viele Statement-Teile gleichzeitig:</strong> Ein auffälliges Kleidungsstück und ein auffälliges Make-up-Detail (z. B. knalliger Lippenstift) konkurrieren optisch miteinander — meist wirkt eins von beiden zurückhaltender besser</li>
            <li><strong>Falsche Foundation-Nuance:</strong> Am Kiefer, nicht am Handrücken testen — die Hautfarbe im Gesicht weicht oft von der an der Hand ab</li>
            <li><strong>Nur eine Jahreszeiten-Garderobe:</strong> Wer ausschließlich auf dicke Pullover oder ausschließlich auf leichte Shirts setzt, muss bei Wetterumschwüngen improvisieren — ein paar Übergangsteile sparen langfristig Geld</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Damenmode & Make-up im Preisvergleich</h3>
          <p className="text-muted small mb-3">Von Basic-Shirts über Blazer bis Everyday-Make-up und Beauty-Tools — jetzt die günstigsten Preise aus deutschen Online-Shops finden.</p>
          <a href="https://www.preisgucken.de/?category=damenmode,kosmetik-beauty" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Mode- & Make-up-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
