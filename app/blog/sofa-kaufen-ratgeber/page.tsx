import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welches Sofa passt zu deinem Wohnzimmer?",
  description: "Sofa kaufen: Größe, Sitzhöhe und Sitztiefe, Stoff oder Leder, Polsterung und Raumgewicht, Probesitzen und Lieferweg – der Ratgeber für den Sofa-Kauf.",
  keywords: ["sofa kaufen", "couch kaufen ratgeber", "sofa kaufberatung 2026", "bestes sofa preisvergleich", "sofa stoff oder leder", "sofa maße", "sofa sitzhöhe sitztiefe", "sofa polsterung raumgewicht", "sofa probesitzen", "sofa stoff oder leder", "sofa lieferung treppenhaus"],
  openGraph: {
    title: "Welches Sofa passt zu deinem Wohnzimmer?",
    description: "Sofa kaufen: Welche Größe, welcher Stoff und wie viel Budget? Der Experten-Ratgeber hilft dir.",
    url: "https://www.preisgucken.com/blog/sofa-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-07-17",
    modifiedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Welches Sofa passt zu deinem Wohnzimmer?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/sofa-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Welches Sofa passt zu deinem Wohnzimmer?",
    description: "Sofa kaufen: Welche Größe, welcher Stoff und wie viel Budget? Der Experten-Ratgeber hilft dir.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Welches Sofa passt zu deinem Wohnzimmer?",
  datePublished: "2026-07-17",
  dateModified: "2026-10-04",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function SofaKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Sofa kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Welches Sofa passt zu deinem Wohnzimmer?</h1>
          <p className="lead text-muted">Größe, Form, Stoff – beim Sofakauf gibt es viele Entscheidungen. Wir führen dich Schritt für Schritt zum richtigen Sofa zum besten Preis.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 17. Juli 2026</span>
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Die richtige Sofa-Größe bestimmen</h2>
          <p>Die häufigste Kaufreue beim Sofa entsteht durch falsche Größenplanung. Messe deinen Raum aus, bevor du überlegst, welches Sofa infrage kommt. Folgende Faustregeln helfen:</p>
          <ul>
            <li><strong>Vor dem Sofa:</strong> Mindestens 90–120 cm Platz zum Couchtisch oder Fernseher</li>
            <li><strong>Durchgangsbreite:</strong> Mindestens 60 cm frei lassen, damit man bequem vorbeigehen kann</li>
            <li><strong>Optische Proportion:</strong> Das Sofa sollte maximal zwei Drittel der Wandbreite einnehmen</li>
          </ul>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Raumgröße</th><th>Empfohlene Sofagröße</th><th>Typische Form</th></tr>
              </thead>
              <tbody>
                <tr><td>Unter 15 m²</td><td>2-Sitzer (140–160 cm)</td><td>Gerade</td></tr>
                <tr><td>15–25 m²</td><td>3-Sitzer (180–220 cm)</td><td>Gerade oder L-Form</td></tr>
                <tr><td>25–35 m²</td><td>3-Sitzer + Hocker oder kleines L</td><td>L-Form</td></tr>
                <tr><td>Über 35 m²</td><td>Großes L-Sofa oder U-Form</td><td>L- oder U-Form</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Stoff oder Leder?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-3">🧶 Stoffsofa</h3>
                <p className="small text-muted mb-2"><strong>Vorteile:</strong></p>
                <ul className="small text-muted">
                  <li>Angenehm auf der Haut, auch im Sommer</li>
                  <li>Riesige Farbauswahl</li>
                  <li>Günstiger als Leder</li>
                  <li>Weicher Sitzkomfort</li>
                </ul>
                <p className="small text-muted mb-2 mt-2"><strong>Nachteile:</strong></p>
                <ul className="small text-muted mb-0">
                  <li>Schwieriger zu reinigen</li>
                  <li>Nimmt Gerüche auf</li>
                  <li>Weniger langlebig bei intensiver Nutzung</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-3">🛋️ Ledersofa</h3>
                <p className="small text-muted mb-2"><strong>Vorteile:</strong></p>
                <ul className="small text-muted">
                  <li>Sehr langlebig (15–25 Jahre)</li>
                  <li>Leicht abwischbar</li>
                  <li>Zeitloses Design</li>
                  <li>Robust bei Haustieren</li>
                </ul>
                <p className="small text-muted mb-2 mt-2"><strong>Nachteile:</strong></p>
                <ul className="small text-muted mb-0">
                  <li>Kalt im Winter, klebrig im Sommer</li>
                  <li>Teurer in Anschaffung & Pflege</li>
                  <li>Kratzer bei Haustieren sichtbar</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Budget festlegen</h2>
          <p>Ein gutes Sofa hält 10–20 Jahre. Rechne den Preis auf die Nutzungsdauer um – dann relativiert sich auch ein höheres Budget schnell:</p>
          <ul>
            <li><strong>Unter 500 €:</strong> Einsteigermodelle, für Zweitwohnungen oder kurze Nutzungsdauer geeignet</li>
            <li><strong>500–1.000 €:</strong> Gutes Alltagssofa mit solider Polsterung und stabiler Konstruktion</li>
            <li><strong>1.000–2.000 €:</strong> Gehobenes Segment – hochwertige Materialien, bessere Federkerne</li>
            <li><strong>Über 2.000 €:</strong> Designer- und Premiumsofas mit Garantien bis zu 25 Jahren</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Outletmöbel, Musterverkäufe und Preisvergleich-Portale können beim gleichen Qualitätsniveau bis zu 35% sparen. Schau regelmäßig auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Sofas & Couches.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Qualitätsmerkmale erkennen</h2>
          <p>Diese Merkmale unterscheiden ein langlebiges Sofa von einem, das in 3 Jahren durchgesessen ist:</p>
          <ol>
            <li><strong>Rahmen aus Massivholz</strong> (nicht Spanplatte oder Plastik)</li>
            <li><strong>Federkern oder Nosag-Federn</strong> im Sitzbereich – kein reiner Schaumstoff</li>
            <li><strong>Schaumstoff-Dichte über 35 kg/m³</strong> für den Sitz</li>
            <li><strong>Abnehmbare, waschbare Bezüge</strong> – erleichtert die Pflege enorm</li>
            <li><strong>Stabile Füße</strong> aus Metall oder Massivholz statt Plastik</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Sofa-Maße: Sitzhöhe und Sitztiefe</h2>
          <p>Neben der Gesamtgröße entscheiden zwei Maße über den Komfort. Beide stehen im Datenblatt:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Maß</th><th>Richtwert</th><th>Was es bedeutet</th></tr>
              </thead>
              <tbody>
                <tr><td>Sitzhöhe</td><td>42–45 cm</td><td>Üblich bei den meisten Modellen</td></tr>
                <tr><td>Sitzhöhe</td><td>46–48 cm</td><td>Leichteres Aufstehen, etwa bei Knieproblemen</td></tr>
                <tr><td>Sitztiefe</td><td>50–55 cm</td><td>Aufrechtes Sitzen</td></tr>
                <tr><td>Sitztiefe</td><td>55–65 cm</td><td>Entspannt zurückgelehnt</td></tr>
                <tr><td>Sitztiefe</td><td>über 65 cm</td><td>Lounge-Charakter, eher zum Liegen</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Große Menschen brauchen oft eine größere Sitztiefe, kleine Menschen sitzen bei zu tiefen Sofas ohne Rückenstütze.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Polsterung: Raumgewicht und Federung</h2>
          <p>Die Qualität der Polsterung bestimmt, ob dein Sofa nach zwei Jahren noch gut sitzt. Wichtig ist das Raumgewicht des Schaumstoffs, das im Datenblatt in kg/m³ steht. Als grober Richtwert gilt:</p>
          <ul>
            <li><strong>Unter 25:</strong> Sichtbare Mulden nach ein bis zwei Jahren sind wahrscheinlich.</li>
            <li><strong>30 bis 35:</strong> Solide Alltagsqualität für etwa fünf bis acht Jahre.</li>
            <li><strong>Ab 40:</strong> Premium-Polsterung, die oft über ein Jahrzehnt formstabil bleibt.</li>
          </ul>
          <p>Kaltschaum gibt punktelastisch nach, Federkern bietet mehr Gegendruck. Eine Boxspring-Unterfederung kombiniert beides. Welche Variante bequemer ist, hängt davon ab, ob du lieber weich einsinkst oder fest sitzt.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Probesitzen und Lieferweg planen</h2>
          <ul>
            <li><strong>Lange probesitzen:</strong> Der erste Eindruck täuscht oft. Ein sehr weiches Sofa fühlt sich im Möbelhaus herrlich an, bildet aber nach einigen Monaten Kuhlen, wenn der Kern zu leicht ist. Setze dich mindestens einige Minuten, auch in Ruhe zurückgelehnt.</li>
            <li><strong>Lieferweg messen:</strong> Miss Haustür, Treppenhaus, Türen und Aufzug nach. Ein Sofa, das nicht durch die Tür passt, ist ein teurer Fehlkauf.</li>
            <li><strong>Bezug prüfen:</strong> Mikrofaser ist oft pflegeleicht, abnehmbare Bezüge lassen sich meist waschen. Bei Kindern und Haustieren lohnen sich robuste, abwischbare Materialien.</li>
            <li><strong>Rückgabe klären:</strong> Prüfe bei Online-Käufen, ob Rückgabe und Rücktransport möglich sind und wer sie bezahlt.</li>
          </ul>
          <p className="small text-muted">Wenn du das Wohnzimmer ganz neu einrichtest, helfen dir unsere Tipps zu <a href="/blog/wohnaccessoires-beleuchtung-preisvergleich/">Wohnaccessoires und Beleuchtung</a>.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Sofa-Kauf</h2>
          <ol>
            <li><strong>Den Raum nicht ausgemessen:</strong> Zu große Sofas nehmen Platz und Durchgang weg.</li>
            <li><strong>Nur auf Optik und Weichheit achten:</strong> Polsterqualität und Gestell entscheiden über die Haltbarkeit.</li>
            <li><strong>Den Lieferweg vergessen:</strong> Türen, Treppenhaus und Aufzug müssen passen.</li>
            <li><strong>Zu kurz probesitzen:</strong> Ein Eindruck von wenigen Sekunden sagt wenig über den Komfort nach Stunden.</li>
            <li><strong>Den Bezug ignorieren:</strong> Pflege und Alltagstauglichkeit sind bei Familie und Haustieren wichtiger als das Muster.</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Sofa-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Über 1.600 Sofas & Couches aus deutschen Online-Shops – jetzt günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/sitzen" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Sofa-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
