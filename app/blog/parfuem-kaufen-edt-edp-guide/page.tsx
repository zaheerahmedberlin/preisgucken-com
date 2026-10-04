import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
  description: "Parfüm kaufen: Eau de Toilette, Eau de Parfum und Extrait im Vergleich, Duftnoten und Duftfamilien, Haltbarkeit, Lagerung und Preis pro 100 ml.",
  keywords: [
    "parfüm kaufen",
    "edt oder edp",
    "eau de parfum eau de toilette unterschied",
    "parfum extrait",
    "duft kaufen",
    "parfüm günstig kaufen",
    "duftpyramide",
    "duftfamilien",
    "parfüm haltbarkeit verlängern",
    "parfüm online kaufen echt",
    "parfüm preis pro 100 ml",
  ],
  openGraph: {
    title: "Parfüm kaufen: EDT, EDP oder Parfum? Der Konzentrations-Guide",
    description: "Eau de Toilette, Eau de Parfum oder Parfum Extrait – was den Preisunterschied wirklich erklärt und wie lange ein Duft tatsächlich hält.",
    url: "https://www.preisgucken.com/blog/parfuem-kaufen-edt-edp-guide/",
    type: "article",
    publishedTime: "2026-09-09",
    modifiedTime: "2026-10-04",
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
  dateModified: "2026-10-04",
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
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
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

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Duftnoten und Duftfamilien: So liest du eine Duftpyramide</h2>
          <p>Ein Parfüm entfaltet sich in drei Schritten. Das erklärt, warum ein Duft in der ersten Minute anders riecht als nach einer Stunde:</p>
          <ul>
            <li><strong>Kopfnote:</strong> Der erste Eindruck in den ersten Minuten, oft frisch und leicht, etwa Zitrusfrüchte.</li>
            <li><strong>Herznote:</strong> Der eigentliche Charakter des Dufts, zum Beispiel Blüten oder Gewürze. Sie zeigt sich nach einigen Minuten.</li>
            <li><strong>Basisnote:</strong> Sie bleibt am längsten auf der Haut, etwa Holz, Vanille oder Moschus.</li>
          </ul>
          <p>Dazu kommen die großen Duftfamilien: <strong>frisch und zitrisch</strong> für den Alltag und warme Tage, <strong>blumig</strong> für klassische, weiche Düfte, <strong>orientalisch und würzig</strong> für intensive Düfte am Abend und <strong>holzig</strong> für warme, ruhige Düfte. Wenn dir ein Parfüm gefallen hat, erkennst du die Familie meist auch an anderen Düften wieder.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">So hält dein Duft länger</h2>
          <ul>
            <li><strong>Auf Pulspunkte auftragen:</strong> Handgelenke, Hals und Ellenbeugen sind warm, dort entfaltet sich der Duft besonders gut.</li>
            <li><strong>Nicht reiben:</strong> Das Verreiben der Handgelenke verändert die Kopfnote und lässt den Duft schneller verfliegen.</li>
            <li><strong>Auf gepflegte Haut sprühen:</strong> Auf leicht eingecremter, unparfümierter Haut hält ein Duft oft länger als auf trockener Haut.</li>
            <li><strong>Richtig lagern:</strong> Kühl, dunkel und nicht im Badezimmer. Wärme und Licht verändern den Duft mit der Zeit.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Parfüm online kaufen: Probieren, Echtheit und Preis pro 100 ml</h2>
          <ul>
            <li><strong>Vorher testen:</strong> Ein Duft entwickelt sich auf der Haut über mehrere Stunden und riecht bei jedem Menschen etwas anders. Probiergrößen oder Miniaturen sind ein günstiger Weg, bevor du einen großen Flakon kaufst.</li>
            <li><strong>Seriösen Händler wählen:</strong> Bei Markenparfüm sind sehr niedrige Preise ein Warnzeichen. Achte auf ein vollständiges Impressum, nachvollziehbare Bewertungen und die originale, versiegelte Verpackung.</li>
            <li><strong>Preis pro 100 ml vergleichen:</strong> Die Flakongröße verzerrt den Vergleich. Ein Flakon mit 50 ml für 40 € kostet umgerechnet 80 € pro 100 ml, ein Flakon mit 100 ml für 60 € nur 60 € pro 100 ml.</li>
            <li><strong>Inhaltsstoffe lesen:</strong> Bei Allergien lohnt ein Blick auf die Inhaltsstoffliste auf der Verpackung, denn Duftstoffe gehören zu den häufigen Auslösern.</li>
          </ul>
          <p className="small text-muted">Wenn du einen Duft als Geschenk suchst, hilft auch unser <a href="/blog/schmuck-als-geschenk-ratgeber/">Geschenk-Ratgeber</a> mit Ideen nach Anlass und Budget, und im <a href="/blog/gesichtspflege-routine-hauttyp-guide/">Ratgeber zur Gesichtspflege</a> findest du passende Ergänzungen.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Parfüm-Kauf</h2>
          <ol>
            <li><strong>Blind kaufen:</strong> Ein Duft, der im Online-Shop gut beschrieben klingt, muss auf deiner Haut nicht passen.</li>
            <li><strong>Nur nach der Marke entscheiden:</strong> Konzentration, Duftfamilie und Preis pro ml sagen mehr über den Wert aus als der Name.</li>
            <li><strong>Zu viel auftragen:</strong> Besonders bei Eau de Parfum und Extrait reichen meist wenige Sprühstöße.</li>
            <li><strong>Falsch lagern:</strong> Wärme und Licht lassen einen Duft schneller altern.</li>
            <li><strong>Zu schnell urteilen:</strong> Die Basisnote zeigt sich erst nach Stunden. Gib dem Duft Zeit, bevor du entscheidest.</li>
          </ol>
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
