import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Uhren kaufen 2026: Automatik, Quarz & Material im Ratgeber | Preisgucken",
  description: "Automatik oder Quarz? Welches Material hält am längsten? Der Uhren-Ratgeber erklärt Werke, Größen und Preisklassen – mit Preisvergleich.",
  keywords: ["uhren kaufen", "armbanduhr damen kaufen", "herrenuhr online kaufen", "automatikuhr oder quarzuhr", "uhren preisvergleich", "uhrwerk vergleich"],
  openGraph: {
    title: "Uhren kaufen 2026: Automatik, Quarz & Material im Ratgeber",
    description: "Automatik oder Quarz? Welches Material hält am längsten? Der komplette Uhren-Ratgeber.",
    url: "https://www.preisgucken.com/blog/uhren-kaufen-ratgeber",
    type: "article",
    publishedTime: "2026-08-01",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/uhren-kaufen-ratgeber" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Uhren kaufen 2026: Automatik, Quarz & Material im Ratgeber",
  datePublished: "2026-08-01",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function UhrenKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Uhren kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="fw-bold display-6 mb-3">Uhren kaufen 2026: Der Ratgeber für Damen & Herren</h1>
          <p className="lead text-muted">Automatik, Quarz oder Solar – und aus welchem Material sollte das Gehäuse sein? Wir erklären, worauf es bei einer guten Uhr wirklich ankommt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 1. August 2026</span>
            <span>⏱ 7 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Welches Uhrwerk passt zu dir?</h2>
          <p>Das Uhrwerk entscheidet über Genauigkeit, Wartungsaufwand und Preis. Die drei gängigsten Typen im Vergleich:</p>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">⚙️ Automatik</h3>
                <p className="small text-muted mb-0">Zieht sich durch Armbewegung selbst auf, keine Batterie nötig. Braucht regelmäßiges Tragen, sonst bleibt sie stehen. Beliebt wegen des mechanischen Charmes.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔋 Quarz</h3>
                <p className="small text-muted mb-0">Batteriebetrieben, sehr präzise (Abweichung meist unter 1 Sek./Tag), wartungsarm und günstiger in der Anschaffung. Die pragmatischste Wahl für den Alltag.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">☀️ Solar</h3>
                <p className="small text-muted mb-0">Lädt sich über Licht auf, kein Batteriewechsel nötig. Umweltfreundlich und wartungsarm, aber seltener in klassischen Designs erhältlich.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Material – was hält wirklich lange?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Material</th><th>Vorteile</th><th>Nachteile</th></tr>
              </thead>
              <tbody>
                <tr><td>Edelstahl</td><td>Robust, kratzfest, günstig zu polieren</td><td>Vergleichsweise schwer</td></tr>
                <tr><td>Titan</td><td>Sehr leicht, hypoallergen, extrem stabil</td><td>Teurer, schwerer zu polieren</td></tr>
                <tr><td>Carbon</td><td>Federleicht, modernes Design</td><td>Weniger kratzfest als Metall</td></tr>
                <tr><td>Vergoldet/PVD</td><td>Edle Optik zum kleinen Preis</td><td>Beschichtung kann mit der Zeit abnutzen</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Gehäusegröße & Passform</h2>
          <ul>
            <li><strong>34–38 mm:</strong> Klassisch und zierlich, meist für Damenuhren</li>
            <li><strong>39–42 mm:</strong> Universalgröße, für die meisten Handgelenke geeignet</li>
            <li><strong>43–46 mm:</strong> Auffällig und sportlich, für kräftigere Handgelenke</li>
            <li><strong>über 46 mm:</strong> Statement-Uhren, z. B. Chronographen oder Taucheruhren</li>
          </ul>
          <p className="small text-muted">Miss dein Handgelenk mit einem Maßband: Die Gehäusegröße sollte nicht breiter sein als der sichtbare Bereich des Handgelenks von oben.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Preisklassen im Überblick</h2>
          <ul>
            <li><strong>Unter 100 €:</strong> Solide Einsteigermodelle, meist Quarzwerk</li>
            <li><strong>100–500 €:</strong> Gute Materialqualität, teils erste Automatikmodelle</li>
            <li><strong>500–2.000 €:</strong> Hochwertige Verarbeitung, Manufaktur-Details, Saphirglas</li>
            <li><strong>Über 2.000 €:</strong> Premium-Uhrwerke, limitierte Editionen, Sammlerstücke</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Limitierte Editionen und Sondermodelle werden nach Ablauf der Erstverkaufsphase oft deutlich günstiger. Ein Preisvergleich auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Uhren lohnt sich fast immer.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Pflege & Wartung</h2>
          <ol>
            <li><strong>Wasserdichtigkeit prüfen:</strong> 30 m (3 ATM) reicht für Spritzwasser, ab 100 m (10 ATM) auch für Schwimmen</li>
            <li><strong>Saphirglas statt Mineralglas:</strong> deutlich kratzfester, besonders beim Alltagstragen relevant</li>
            <li><strong>Automatikuhren regelmäßig tragen</strong> oder ein Uhrenbeweger verwenden, damit sie nicht stehen bleibt</li>
            <li><strong>Armband regelmäßig reinigen</strong>, besonders bei Leder- oder Metallarmbändern mit Hautkontakt</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Uhren-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Automatik-, Quarz- und Sonderedition-Uhren aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Uhren-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
