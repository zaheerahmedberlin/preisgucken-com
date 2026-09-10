import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
  description: "Eau de Toilette, Eau de Parfum oder Parfum Extrait – was den Preisunterschied wirklich erklärt und wie lange ein Duft tatsächlich hält, mit Preisvergleich.",
  keywords: [
    "parfüm kaufen",
    "edt oder edp",
    "eau de parfum eau de toilette unterschied",
    "parfum extrait",
    "duft kaufen",
    "parfüm günstig kaufen",
  ],
  openGraph: {
    title: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
    description: "Eau de Toilette, Eau de Parfum oder Parfum Extrait – was den Preisunterschied wirklich erklärt und wie lange ein Duft tatsächlich hält.",
    url: "https://www.preisgucken.com/blog/parfuem-kaufen-edt-edp-guide/",
    type: "article",
    publishedTime: "2026-09-09",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Parfüm kaufen: EDT, EDP oder Parfum?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/parfuem-kaufen-edt-edp-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
    description: "Eau de Toilette, Eau de Parfum oder Parfum Extrait – was den Preisunterschied wirklich erklärt und wie lange ein Duft tatsächlich hält.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
  datePublished: "2026-09-09",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function ParfuemKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Parfüm kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kosmetik & Beauty</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide</h1>
          <p className="lead text-muted">
            Zwei Flaschen desselben Dufts, zwei völlig unterschiedliche Preise – meist liegt es nicht am
            Marketing, sondern an der Konzentration. Was EDT, EDP und Parfum Extrait wirklich unterscheidet,
            und worauf du beim Kauf achten solltest.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 9. September 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die Konzentration entscheidet über Preis und Haltbarkeit</h2>
          <p>
            Jeder Duft besteht aus Parfümöl und Alkohol – der Unterschied zwischen den Bezeichnungen ist der
            Anteil an Öl. Je höher die Konzentration, desto intensiver der Duft, desto länger hält er auf der
            Haut, und desto teurer ist die Herstellung. Das erklärt, warum dieselbe Duftlinie oft in mehreren
            Konzentrationen mit spürbar unterschiedlichem Preis verkauft wird.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die vier Konzentrationsstufen im Überblick</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🌿 Eau de Cologne (EDC)</h3>
                <p className="small text-muted mb-0">
                  2-4% Parfümöl. Hält 1-2 Stunden, sehr leicht und frisch. Klassiker für den Sommer oder als
                  Erfrischung zwischendurch.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">💧 Eau de Toilette (EDT)</h3>
                <p className="small text-muted mb-0">
                  5-15% Parfümöl. Hält 3-5 Stunden, der günstigste Einstieg in einen Duft. Gut geeignet, um
                  eine Duftrichtung überhaupt erst kennenzulernen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">✨ Eau de Parfum (EDP)</h3>
                <p className="small text-muted mb-0">
                  15-20% Parfümöl. Hält 5-8 Stunden, der meistverkaufte Kompromiss aus Intensität, Haltbarkeit
                  und Preis – die Standardwahl für die meisten Käufer.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👑 Parfum / Extrait</h3>
                <p className="small text-muted mb-0">
                  20-30%+ Parfümöl. Hält 8+ Stunden, oft schon in kleinen Flakons ergiebig. Meist die teuerste
                  Stufe, dafür reichen wenige Sprühstöße.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie breit die Preisspanne je nach Konzentration und Marke tatsächlich ist, zeigt ein Blick in den
            aktuellen Preisvergleich: Ein <strong>Adidas Pure Game Eau de Toilette</strong> (100ml) gibt es schon
            ab rund <strong>7 €</strong> – ein günstiger Einstieg zum Ausprobieren. Bekanntere Eau de Parfum-Düfte
            wie <strong>Kenzo Flower Ikebana</strong> liegen bei etwa <strong>51 €</strong>, während{" "}
            <strong>Givenchy Irresistible Rose Velvet</strong> (EDP, 80ml) bei rund <strong>82 €</strong> liegt.
            Am oberen Ende der Nische steht der <strong>Francis Kurkdjian Baccarat Rouge 540 Extrait</strong>{" "}
            bei rund <strong>636 €</strong> – ein Beispiel dafür, wie stark Nischenparfums preislich von
            Massenmarke-Düften abweichen können.
          </p>
          <p className="small text-muted">
            Auffällig: Zwischen 5 € und über 600 € liegt derselbe Produkttyp (Eau de Parfum/Extrait) – die
            Konzentration allein erklärt das nicht, hier spielt Markenpositionierung und Rohstoffqualität die
            größere Rolle.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Erst testen, dann die große Flasche kaufen:</strong> Ein Duft entwickelt sich auf der Haut anders als im Laden – wenn möglich erst eine kleine Größe oder ein Probe-Set kaufen.</li>
            <li><strong>Konzentration nach Anlass wählen:</strong> EDT fürs Büro oder den Sommer, EDP oder Extrait für den Abend oder kalte Jahreszeiten – die Sillage (Duftausbreitung) ist bei höheren Konzentrationen stärker.</li>
            <li><strong>Ergiebigkeit einrechnen:</strong> Ein teurer Extrait mit wenigen Sprühstößen pro Anwendung hält oft länger als eine günstige, aber ergiebigere EDT-Flasche desselben Volumens.</li>
            <li><strong>Bei Sondereditionen genau hinschauen:</strong> Limitierte Editionen oder Flacon-Varianten können denselben Duft zu einem höheren Preis verkaufen, ohne dass sich an der Formel etwas ändert.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Größere Flakons (100ml statt 30-50ml) sind fast immer günstiger
            pro Milliliter – lohnt sich vor allem bei einem Duft, den du schon kennst und sicher weiter
            benutzt.
          </div>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Parfüm im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            EDT, EDP und Parfum Extrait von Guerlain, Givenchy, Hermès & Co. — direkt auf Preisgucken.de vergleichen.
          </p>
          <a href="https://www.preisgucken.de/kategorie/parfuem" className="btn btn-brand px-4" target="_blank" rel="noopener">
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
