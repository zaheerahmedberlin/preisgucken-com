import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tragbare Espressomaschine kaufen: Der Reise-Guide",
  description: "Ohne Steckdose, ohne Kompromiss: Wie tragbare Espressomaschinen für Camping, Van Life und Büro funktionieren und worauf du beim Kauf achten solltest – mit Preisvergleich.",
  keywords: [
    "tragbare espressomaschine",
    "espressomaschine für unterwegs",
    "camping espressomaschine",
    "portable espresso maker",
    "akku espressomaschine kaufen",
    "espressomaschine ohne strom",
  ],
  openGraph: {
    title: "Tragbare Espressomaschine kaufen: Der Reise-Guide",
    description: "Ohne Steckdose, ohne Kompromiss: Wie tragbare Espressomaschinen für Camping, Van Life und Büro funktionieren und worauf du beim Kauf achten solltest.",
    url: "https://www.preisgucken.com/blog/tragbare-espressomaschine-kaufen/",
    type: "article",
    publishedTime: "2026-09-19",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Tragbare Espressomaschine kaufen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/tragbare-espressomaschine-kaufen/" },
  twitter: {
    card: "summary_large_image",
    title: "Tragbare Espressomaschine kaufen: Der Reise-Guide",
    description: "Ohne Steckdose, ohne Kompromiss: Wie tragbare Espressomaschinen für Camping, Van Life und Büro funktionieren und worauf du beim Kauf achten solltest.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Tragbare Espressomaschine kaufen: Der Reise-Guide",
  datePublished: "2026-09-19",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function TragbareEspressomaschinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Tragbare Espressomaschine
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Küche & Haushaltsgeräte</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Tragbare Espressomaschine kaufen: Der Reise-Guide</h1>
          <p className="lead text-muted">
            Kein Filterkaffee aus der Thermoskanne, kein Instant-Pulver im Camp: Tragbare Espressomaschinen
            bringen den Espresso mit Crema dorthin, wo keine Steckdose ist – ins Zelt, in den Camper oder
            einfach an den Schreibtisch ohne Kaffeeküche. Worauf es bei Druck, Akku und Kapselwahl wirklich
            ankommt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. September 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Was eine tragbare Espressomaschine von einem Vollautomaten unterscheidet</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔋 Akku statt Steckdose</h3>
                <p className="small text-muted mb-0">
                  Ein integrierter Akku erzeugt den nötigen Pumpendruck – meist reichen wenige Stunden Ladezeit
                  für mehrere Tassen unterwegs, ganz ohne 230-Volt-Anschluss oder Adapter.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">☕ Gemahlener Kaffee oder Kapsel</h3>
                <p className="small text-muted mb-0">
                  Viele Modelle nehmen sowohl gemahlenen Kaffee als auch gängige Kapseln – praktisch, wenn du
                  zwischen frisch gemahlenem Espresso zuhause und schneller Kapsel unterwegs wechseln willst.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich die Modelle preislich unterscheiden, zeigt ein Blick in den aktuellen Preisvergleich: Die{" "}
            <strong>OutIn Nano</strong> als kompaktester Einstieg liegt bei rund <strong>150 €</strong>, die
            überarbeitete <strong>OutIn Nano 2</strong> mit mehr Pumpendruck bei etwa <strong>160 €</strong>.
            Die größere <strong>OutIn Mino</strong> mit mehr Tankvolumen und höherer Tassenzahl pro Ladung
            liegt bei rund <strong>190 €</strong>. Für frisch gemahlenen Kaffee unterwegs kommt die{" "}
            <strong>OutIn Fino</strong> Kaffeemühle für etwa <strong>180 €</strong> dazu.
          </p>
          <p className="small text-muted">
            Auffällig: Reise-Geschenksets, die Maschine, Becher und Tasche bereits kombinieren, kosten oft nur
            wenig mehr als die einzelne Maschine – wer ohnehin Zubehör braucht, fährt damit meist günstiger als
            beim separaten Nachkauf.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Pumpendruck (Bar):</strong> Für echte Crema sollten es mindestens 15 Bar sein – darunter wird der Espresso eher wässrig statt cremig.</li>
            <li><strong>Tassen pro Akkuladung:</strong> Kompakte Modelle schaffen oft nur 1-2 Tassen pro Ladung, größere Maschinen deutlich mehr – wichtig für mehrtägige Trips ohne Lademöglichkeit.</li>
            <li><strong>Gemahlen, Kapsel oder beides:</strong> Wer flexibel bleiben will, sollte auf einen Doppelfilter für beide Varianten achten statt sich früh festzulegen.</li>
            <li><strong>Größe und Gewicht:</strong> Für den Rucksack zählt jedes Gramm – Reisegröße und Gewicht stehen meist explizit im Datenblatt.</li>
            <li><strong>Wassertank-Volumen:</strong> Kleine Tanks bedeuten häufigeres Nachfüllen unterwegs, was bei Camping ohne fließendes Wasser ein echter Unterschied ist.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Wer Maschine und Kaffeemühle ohnehin zusammen braucht, sollte
            zuerst nach kombinierten Geschenk- oder Reisesets schauen – die liegen preislich oft nur knapp über
            der Einzelmaschine, obwohl Mühle und Zubehör direkt mit dabei sind.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Tragbare Espressomaschinen im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Nano, Mino & Zubehör von OutIn — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/kaffeemaschinen" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
