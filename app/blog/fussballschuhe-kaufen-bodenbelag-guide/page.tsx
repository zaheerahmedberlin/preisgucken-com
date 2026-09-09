import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fußballschuhe kaufen: FG, SG oder AG? Der Bodenbelag-Guide",
  description: "Fester Rasen, Kunstrasen oder weicher Boden – welches Stollenmuster wirklich passt und worauf du beim Kauf achten solltest, mit Preisvergleich.",
  keywords: [
    "fußballschuhe kaufen",
    "fg sg ag fußballschuhe",
    "fußballschuhe bodenbelag",
    "fußballschuhe kunstrasen",
    "welche fußballschuhe für welchen boden",
    "trikot kaufen fußball",
  ],
  openGraph: {
    title: "Fußballschuhe kaufen: FG, SG oder AG? Der Bodenbelag-Guide",
    description: "Fester Rasen, Kunstrasen oder weicher Boden – welches Stollenmuster wirklich passt und worauf du beim Kauf achten solltest.",
    url: "https://www.preisgucken.com/blog/fussballschuhe-kaufen-bodenbelag-guide",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Fußballschuhe kaufen: Bodenbelag-Guide" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/fussballschuhe-kaufen-bodenbelag-guide" },
  twitter: {
    card: "summary_large_image",
    title: "Fußballschuhe kaufen: FG, SG oder AG? Der Bodenbelag-Guide",
    description: "Fester Rasen, Kunstrasen oder weicher Boden – welches Stollenmuster wirklich passt und worauf du beim Kauf achten solltest.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Fußballschuhe kaufen: FG, SG oder AG? Der Bodenbelag-Guide",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function FussballschuheKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Fußballschuhe kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Sport & Fitness</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Fußballschuhe kaufen: FG, SG oder AG? Der Bodenbelag-Guide</h1>
          <p className="lead text-muted">
            Mit Jürgen Klopps Debüt als Bundestrainer am 24. September in Amsterdam startet die Nations-League-Saison
            der Nationalmannschaft – und bei vielen wächst wieder die Lust, selbst den Ball ins Rollen zu bringen.
            Das falsche Stollenmuster ist dabei einer der häufigsten Fehlkäufe.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Warum das Stollenmuster wichtiger ist als die Marke</h2>
          <p>
            Der größte Fehlkauf bei Fußballschuhen ist nicht die falsche Marke, sondern der falsche Bodenbelag.
            Ein Schuh für festen Naturrasen rutscht auf Kunstrasen weg, ein Kunstrasen-Schuh nutzt sich auf hartem
            Boden schnell ab. Das Kürzel auf der Schachtel oder im Produktnamen (FG, SG, AG, TF) verrät, wofür der
            Schuh gemacht ist – wichtiger als jedes Markenlogo.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die vier Bodenbeläge im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌱 FG (Firm Ground)</h3>
                <p className="small text-muted mb-0">
                  Für normalen, festen Naturrasen – der Allrounder für die meisten Vereins- und Freizeitplätze.
                  Feste, gegossene Stollen in mittlerer Länge.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌧️ SG (Soft Ground)</h3>
                <p className="small text-muted mb-0">
                  Für weichen, nassen Boden – oft mit auswechselbaren, längeren Stollen für zusätzlichen Halt bei
                  Regen oder auf durchweichtem Rasen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🟢 AG (Artificial Grass)</h3>
                <p className="small text-muted mb-0">
                  Speziell für Kunstrasen entwickelt – mehr, aber kürzere Stollen als FG, verteilen den Druck
                  gleichmäßiger und schonen Knie und Kunstrasenfasern.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚫ TF / MG (Turf / Multinocken)</h3>
                <p className="small text-muted mb-0">
                  Für Hartplatz oder kurzfaserigen Kunstrasen – viele kleine Noppen statt Stollen, meist die
                  langlebigste und günstigste Option für den Bolzplatz.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit die Auswahl über alle Bodenbeläge hinweg tatsächlich ist, zeigt ein Blick in den aktuellen
            Preisvergleich: <strong>adidas Predator League SG</strong> (Soft Ground, Fold-Over Tongue) liegt bei rund{" "}
            <strong>54,99 €</strong>, <strong>adidas Copa Pure+ FG</strong> (Firm Ground) bei <strong>77,99 €</strong>,
            während <strong>Joma Dribling Turf</strong> (Multinocken) schon ab <strong>11,99 €</strong> zu haben ist.
            Dazu passende <strong>Trikot-Sets mit Shorts</strong> (Zeus) gibt es bereits ab rund <strong>13 €</strong>.
          </p>
          <p className="small text-muted">
            Auffällig: Der Preisunterschied zwischen den Bodenbelag-Varianten derselben Modellreihe ist meist gering
            – wer beim Kauf trotzdem den falschen Belag wählt, verschenkt also nicht nur Grip, sondern zahlt am Ende
            oft für zwei Paar Schuhe statt einem.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Hauptspielfläche zuerst bestimmen:</strong> Trainierst du meist auf Kunstrasen, aber spielst gelegentlich auf Naturrasen? AG-Schuhe sind oft der bessere Kompromiss als reine FG-Modelle.</li>
            <li><strong>Passform vor Stollenmuster:</strong> Ein perfekt sitzender Schuh im falschen Bodenbelag ist immer noch besser als ein zu enger oder zu weiter Schuh im richtigen.</li>
            <li><strong>Einlaufzeit einplanen:</strong> Synthetik-Obermaterial dehnt sich kaum, echtes Leder passt sich nach ein paar Einheiten besser an den Fuß an.</li>
            <li><strong>Nicht am Trikot sparen, wenn die Passform zählt:</strong> Bei Teamwear-Sets lohnt sich ein Blick auf die Schnittform (eng anliegend vs. locker) – gerade bei Vereinsbestellungen für mehrere Größen wichtig.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Multinocken-Schuhe (TF) sind nicht nur die günstigste Variante, sondern
            durch die vielen kleinen Noppen auch die langlebigste – ideal, wenn du auf wechselnden Untergründen
            unterwegs bist und nicht gleich mehrere Paar kaufen willst.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Fußballschuhe im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            FG, SG, AG und Multinocken von adidas, Joma & Co. — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/sportschuhe" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
