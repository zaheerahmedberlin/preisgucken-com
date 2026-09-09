import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kinderwagen kaufen: Buggy, Kombikinderwagen oder Geschwisterwagen?",
  description: "Welcher Kinderwagen-Typ wirklich zu eurem Alltag passt, worauf du beim Kauf achten solltest und wo sich ein Trio-Set lohnt – mit Preisvergleich.",
  keywords: [
    "kinderwagen kaufen",
    "kombikinderwagen kaufen",
    "buggy oder kinderwagen",
    "geschwisterwagen kaufen",
    "kinderwagen trio set",
    "welcher kinderwagen",
  ],
  openGraph: {
    title: "Kinderwagen kaufen: Buggy, Kombikinderwagen oder Geschwisterwagen?",
    description: "Welcher Kinderwagen-Typ wirklich zu eurem Alltag passt, worauf du beim Kauf achten solltest und wo sich ein Trio-Set lohnt.",
    url: "https://www.preisgucken.com/blog/kinderwagen-kaufen-typ-guide",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Kinderwagen kaufen: Buggy, Kombikinderwagen oder Geschwisterwagen?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/kinderwagen-kaufen-typ-guide" },
  twitter: {
    card: "summary_large_image",
    title: "Kinderwagen kaufen: Buggy, Kombikinderwagen oder Geschwisterwagen?",
    description: "Welcher Kinderwagen-Typ wirklich zu eurem Alltag passt, worauf du beim Kauf achten solltest und wo sich ein Trio-Set lohnt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Kinderwagen kaufen: Buggy, Kombikinderwagen oder Geschwisterwagen?",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function KinderwagenKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Kinderwagen kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Familie & Kinder</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Kinderwagen kaufen: Buggy, Kombikinderwagen oder Geschwisterwagen?</h1>
          <p className="lead text-muted">
            Kaum eine Baby-Anschaffung ist so teuer und gleichzeitig so unterschiedlich in ihren Varianten wie
            der Kinderwagen. Welcher Typ wirklich zu eurem Alltag passt, entscheidet sich weniger am Budget als
            an der Frage, wie und wo ihr ihn tatsächlich nutzt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die Kinderwagen-Typen im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🚼 Buggy</h3>
                <p className="small text-muted mb-0">
                  Leicht, kompakt zusammenklappbar, meist ab dem Sitzalter (ca. 6 Monate). Ideal für Städtereisen,
                  ÖPNV und Alltag, wenn viel Platzersparnis zählt.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👶 Kombikinderwagen</h3>
                <p className="small text-muted mb-0">
                  Wächst mit: Babyschale oder Wanne fürs Neugeborene, später Sportsitz für den Buggy-Modus.
                  Ein Gestell für mehrere Lebensphasen – meist die teurere, aber langlebigere Wahl.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👯 Geschwisterwagen</h3>
                <p className="small text-muted mb-0">
                  Für Zwillinge oder Geschwister mit kleinem Altersabstand – als Doppelsitzer oder mit
                  Geschwistersitz nachrüstbar an ein bestehendes Gestell.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie stark der Preis je nach Typ und Ausstattung schwankt, zeigt ein Blick in den aktuellen
            Preisvergleich: Ein einfacher, leichter <strong>Buggy</strong> gibt es schon ab rund{" "}
            <strong>53 €</strong>. Ein <strong>Kombikinderwagen als Trio-Set</strong> – Gestell, Babyschale und
            Sportsitz zusammen – liegt meist zwischen <strong>218 € und 240 €</strong>, je nach Marke und
            Ausstattung. Für Geschwister lässt sich ein bestehender Kinderwagen mit einem{" "}
            <strong>Geschwistersitz</strong> für rund <strong>200 €</strong> nachrüsten – oft günstiger, als
            direkt einen kompletten Geschwisterwagen neu zu kaufen.
          </p>
          <p className="small text-muted">
            Auffällig: Ein Trio-Set spart gegenüber dem Einzelkauf von Gestell, Babyschale und Sportsitz oft
            mehrere Hundert Euro – lohnt sich fast immer, wenn ihr ohnehin alle drei Teile braucht.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Alltag zuerst, Prestige zweitrangig:</strong> Wer viel Treppen steigt oder Bus/Bahn fährt, profitiert mehr von geringem Gewicht und kompaktem Faltmaß als von großen Rädern für Feldwege.</li>
            <li><strong>Trio-Set nur kaufen, wenn du wirklich alle Teile brauchst:</strong> Wer schon eine Babyschale fürs Auto hat, spart mit einem reinen Gestell-plus-Sportsitz-Kauf oft mehr.</li>
            <li><strong>Geschwisterlösung früh planen:</strong> Ob nachrüstbarer Geschwistersitz oder komplettes Zwillingsgestell reicht, hängt vom Altersabstand ab – bei unter 18 Monaten lohnt sich meist die feste Doppellösung.</li>
            <li><strong>Kompatibilität prüfen:</strong> Nicht jede Babyschale passt auf jedes Gestell – bei Trio-Sets ist das bereits abgestimmt, bei Einzelkäufen unbedingt vorher die Adaptersysteme vergleichen.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Zubehör wie Regenschutz, Insektenschutz oder Fußsack separat zu
            kaufen ist günstiger als vermeintliche Komplettpakete – die Grundausstattung liegt oft schon bei
            wenigen Euro pro Teil.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Kinderwagen im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Buggys, Kombikinderwagen und Zubehör von Cybex, Bugaboo, Stokke & Co. — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/kinderwagen-unterwegs" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
