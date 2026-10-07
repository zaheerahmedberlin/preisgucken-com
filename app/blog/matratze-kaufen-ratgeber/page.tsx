import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Matratze kaufen: Der richtige Härtegrad",
  description: "Matratze kaufen: Härtegrad, Material und Größe, dazu Lattenrost, Topper, Pflege, Probeschlafen und Rückgabe – der Ratgeber mit Preisvergleich.",
  keywords: ["matratze kaufen", "matratze härtegrad ratgeber", "welche matratze passt zu mir", "matratzengröße tabelle", "federkernmatratze oder schaumstoff", "matratze kaufberatung 2026", "lattenrost und matratze", "matratze probeschlafen", "matratze pflege", "topper oder neue matratze", "matratze online kaufen rückgabe"],
  openGraph: {
    title: "Matratze kaufen: Der richtige Härtegrad",
    description: "Welcher Härtegrad passt zu dir, welche Größe brauchst du? Der komplette Matratzen-Ratgeber.",
    url: "https://www.preisgucken.com/blog/matratze-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-07-29",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Matratze kaufen: Der richtige Härtegrad" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/matratze-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Matratze kaufen: Der richtige Härtegrad",
    description: "Welcher Härtegrad passt zu dir, welche Größe brauchst du? Der komplette Matratzen-Ratgeber.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Matratze kaufen: Der richtige Härtegrad",
  datePublished: "2026-07-29",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function MatratzeKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Matratze kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Matratze kaufen: Der richtige Härtegrad</h1>
          <p className="lead text-muted">Härtegrad, Größe, Material – die falsche Matratze ruiniert jeden Schlaf. Wir zeigen dir, worauf es wirklich ankommt.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 29. Juli 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 11 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Den richtigen Härtegrad finden</h2>
          <p>Der Härtegrad (H1–H5) entscheidet über die Druckentlastung und richtet sich vor allem nach deinem Körpergewicht und deiner Schlafposition:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Härtegrad</th><th>Körpergewicht</th><th>Empfehlung</th></tr>
              </thead>
              <tbody>
                <tr><td>H1 (weich)</td><td>bis 60 kg</td><td>Seitenschläfer, leichtes Gewicht</td></tr>
                <tr><td>H2 (mittel)</td><td>60–80 kg</td><td>Standardwahl für die meisten Erwachsenen</td></tr>
                <tr><td>H3 (fest)</td><td>80–100 kg</td><td>Rückenschläfer, mehr Stützkraft nötig</td></tr>
                <tr><td>H4–H5 (sehr fest)</td><td>über 100 kg</td><td>Bauchschläfer, hohes Körpergewicht</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Seitenschläfer brauchen tendenziell einen weicheren Härtegrad für die Schulterpartie, Bauchschläfer eher einen festeren, damit das Becken nicht durchhängt.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Federkern, Kaltschaum oder Gel?</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🔩 Federkern</h3>
                <p className="small text-muted mb-0">Sehr atmungsaktiv, punktelastisch, gut für warme Schläfer. Etwas schwerer und weniger anpassungsfähig als Schaumstoff.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🧊 Kaltschaum</h3>
                <p className="small text-muted mb-0">Passt sich gut an die Körperform an, gute Druckentlastung, leichter im Gewicht. Speichert etwas mehr Wärme.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">❄️ Gel/Visco</h3>
                <p className="small text-muted mb-0">Sehr gute Anpassung, oft mit kühlendem Effekt. Meist die teuerste Variante, ideal bei Rückenproblemen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Die richtige Größe</h2>
          <ul>
            <li><strong>90×200 cm:</strong> Standard-Einzelbett</li>
            <li><strong>100×200 cm:</strong> Etwas mehr Bewegungsfreiheit für Einzelschläfer</li>
            <li><strong>140×200 cm:</strong> Kleinere Doppelbetten, für Paare mit wenig Platz</li>
            <li><strong>160×200 / 180×200 cm:</strong> Standard-Doppelbett, empfohlen für die meisten Paare</li>
            <li><strong>200×200 cm:</strong> Maximaler Komfort, benötigt entsprechend Raum</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Budget & Lebensdauer</h2>
          <p>Eine gute Matratze hält 8–10 Jahre. Auf die Nutzungsdauer gerechnet, ist ein höheres Budget meist die bessere Investition:</p>
          <ul>
            <li><strong>Unter 200 €:</strong> Einsteigermodelle, für Gästezimmer oder kurze Nutzung</li>
            <li><strong>200–500 €:</strong> Solide Alltagsmatratzen mit gutem Preis-Leistungs-Verhältnis</li>
            <li><strong>500–1.000 €:</strong> Hochwertige Materialien, bessere Zonierung, längere Garantie</li>
            <li><strong>Über 1.000 €:</strong> Premium-Matratzen mit Spezialschäumen und Langzeitgarantien</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Matratzen werden häufig mit Rabatt verkauft, besonders bei Modellwechseln. Ein Preisvergleich lohnt sich fast immer – schau auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Schlafen &amp; Matratzen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Worauf du beim Kauf noch achten solltest</h2>
          <ol>
            <li><strong>Probeliegen oder Rückgaberecht:</strong> Viele Online-Händler bieten 60–100 Nächte Testphase</li>
            <li><strong>Zonierung:</strong> 5- oder 7-Zonen-Matratzen stützen Schulter und Becken unterschiedlich</li>
            <li><strong>Bezug abnehmbar & waschbar:</strong> Wichtig für Hygiene, besonders bei Allergikern</li>
            <li><strong>Öko-Tex-Zertifizierung:</strong> Schadstoffgeprüfte Materialien, gerade bei Schaumstoffen relevant</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Lattenrost, Topper und Bettgestell: Die Matratze ist nicht allein</h2>
          <p>
            Eine Matratze arbeitet immer zusammen mit ihrer Unterlage. Ein durchgelegener oder zu weicher
            Lattenrost nimmt auch einer guten Matratze die Wirkung, und eine neue Matratze auf einem
            alten Rost ist oft ein halbherziger Kauf. Prüfe deshalb vor der Bestellung drei Dinge:
          </p>
          <ul>
            <li><strong>Maße und Höhe:</strong> Passt die Matratze in den Rahmen, und ist die Auflagefläche gleich groß? Misst du nach, vermeidest du Retouren.</li>
            <li><strong>Zustand des Lattenrosts:</strong> Gebrochene oder ausgeleierte Leisten sollten ersetzt werden, bevor die neue Matratze darauf liegt.</li>
            <li><strong>Passende Kombination:</strong> Kaltschaum und Latex brauchen eine gut belüftete Unterlage; bei Boxspringbetten ist die Matratze Teil eines Gesamtsystems — mehr dazu im <a href="/blog/boxspringbett-kaufen-ratgeber/">Boxspringbett-Ratgeber</a>.</li>
          </ul>
          <p>
            Ein <strong>Topper</strong> ist eine dünnere Auflage, die Härte oder Komfort einer vorhandenen
            Matratze verändert. Er kann eine Zwischenlösung sein, ersetzt aber keine durchgelegene
            Matratze. Paare mit unterschiedlichem Gewicht oder Härtewunsch lösen das Problem oft mit
            zwei getrennten Matratzen im gemeinsamen Rahmen, jede im passenden Härtegrad.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Probeschlafen, Rückgabe und Lieferung</h2>
          <p>
            Eine Matratze lässt sich im Online-Handel schlecht anfassen, daher sind die Bedingungen des
            Händlers ein wichtiger Teil des Kaufs. Lies vor der Bestellung nach, wie lange das
            Probeschlafen läuft, wer die Rücksendung bezahlt und ob die Matratze dafür in der
            Originalverpackung zurückgehen muss. Die gesetzliche Widerrufsfrist beträgt bei Online-Käufen
            grundsätzlich 14 Tage; eine längere Testphase ist eine freiwillige Leistung des Händlers, und
            die Bedingungen unterscheiden sich von Shop zu Shop.
          </p>
          <ul>
            <li><strong>Eingewöhnung:</strong> Gib dem Körper einige Wochen Zeit, bevor du urteilst — ein Wechsel fühlt sich anfangs oft ungewohnt an.</li>
            <li><strong>Geruch beim Auspacken:</strong> Neue Schaumstoffmatratzen riechen anfangs oft. Ausgepackt und gelüftet verfliegt das meist; hilft das nicht, melde dich beim Händler.</li>
            <li><strong>Lieferung:</strong> Rollmatratzen kommen komprimiert an und brauchen nach dem Auspacken Zeit, um sich zu entfalten. Federkernmatratzen sind sperrig — kläre den Transportweg bis ins Schlafzimmer.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Pflege: So hält die Matratze länger</h2>
          <ul>
            <li><strong>Regelmäßig lüften:</strong> Bettdecke morgens zurückschlagen und das Zimmer lüften, damit Feuchtigkeit entweichen kann.</li>
            <li><strong>Matratzenschoner verwenden:</strong> Ein waschbarer Schoner schützt vor Flecken und Schweiß und ist leichter zu reinigen als die Matratze selbst.</li>
            <li><strong>Bezug waschen:</strong> Hat die Matratze einen abnehmbaren Bezug, halte dich an die Temperaturangabe auf dem Etikett.</li>
            <li><strong>Wenden oder drehen:</strong> Nur, wenn der Hersteller es vorsieht — viele moderne Matratzen haben eine feste Ober- und Unterseite.</li>
          </ul>
          <p>
            Wann es Zeit für eine neue Matratze ist, siehst du an Kuhlen, spürbar nachlassender
            Stützkraft oder wenn du morgens regelmäßig verspannt aufwachst. Als Orientierung nennen viele
            Hersteller ein Austauschintervall von rund acht bis zehn Jahren. Bei anhaltenden
            Rückenbeschwerden ist eine ärztliche Abklärung sinnvoller als ein bloßer Matratzenwechsel.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Matratzenkauf</h2>
          <ul>
            <li><strong>Nur nach Härtegrad kaufen:</strong> Die Angaben der Hersteller sind nicht einheitlich normiert — ein H3 des einen Anbieters kann sich anders anfühlen als ein H3 eines anderen.</li>
            <li><strong>Zu klein wählen:</strong> Zwei Personen auf 140 cm haben pro Kopf weniger Platz als ein Einzelbett.</li>
            <li><strong>Den Lattenrost ignorieren:</strong> Siehe oben — Matratze und Unterlage müssen zusammenpassen.</li>
            <li><strong>Nur auf den Preis schauen:</strong> Vergleiche Material, Bezug, Rückgabebedingungen und Versandkosten, nicht nur den Preis auf dem Etikett.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Matratzen-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Hunderte Matratzen aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schlafen" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Matratzen-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
