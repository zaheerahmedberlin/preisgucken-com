import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PC-Komponenten kaufen: CPU, RAM, SSD, Netzteil",
  description: "PC-Komponenten kaufen und selbst zusammenstellen: CPU, Mainboard, RAM, Grafikkarte, SSD, Netzteil und Gehäuse – Kompatibilität, Budget und typische Fehler.",
  keywords: ["pc komponenten kaufen", "pc selbst zusammenstellen", "mainboard cpu kompatibel", "ddr4 oder ddr5", "netzteil watt berechnen", "pc budget verteilen", "grafikkarte gehäuse länge"],
  openGraph: {
    title: "PC-Komponenten kaufen: Welche Teile zusammenpassen müssen",
    description: "PC-Komponenten kaufen und selbst zusammenstellen: CPU, Mainboard, RAM, Grafikkarte, SSD, Netzteil und Gehäuse – Kompatibilität, Budget und typische Fehler.",
    url: "https://www.preisgucken.com/blog/pc-komponenten-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "PC-Komponenten kaufen: Welche Teile zusammenpassen müssen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/pc-komponenten-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "PC-Komponenten kaufen: Welche Teile zusammenpassen müssen",
    description: "PC-Komponenten kaufen und selbst zusammenstellen: CPU, Mainboard, RAM, Grafikkarte, SSD, Netzteil und Gehäuse – Kompatibilität, Budget und typische Fehler.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "PC-Komponenten kaufen: Welche Teile zusammenpassen müssen",
  datePublished: "2026-10-05",
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
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › PC-Komponenten kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">PC-Komponenten kaufen: Welche Teile zusammenpassen müssen</h1>
          <p className="lead text-muted">Ein PC steht und fällt damit, dass die Teile zusammenpassen. Welche Komponenten du brauchst, worauf es bei Sockel, RAM und Netzteil ankommt und wie du dein Budget verteilst.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 5. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die wichtigsten Komponenten im Überblick</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Komponente</th><th>Aufgabe</th><th>Darauf achten</th></tr>
              </thead>
              <tbody>
                <tr><td>Prozessor (CPU)</td><td>Rechenleistung</td><td>Sockel muss zum Mainboard passen, ein passender Kühler ist nötig</td></tr>
                <tr><td>Mainboard</td><td>Verbindet alle Teile</td><td>Sockel und Chipsatz, RAM-Typ (DDR4 oder DDR5), Größe (Formfaktor), M.2-Steckplätze</td></tr>
                <tr><td>Arbeitsspeicher (RAM)</td><td>Kurzzeitspeicher für Programme</td><td>Typ, Kapazität und Geschwindigkeit müssen zum Mainboard passen</td></tr>
                <tr><td>Grafikkarte</td><td>Bild und 3D-Leistung</td><td>Länge im Gehäuse, Stromanschlüsse, Leistung des Netzteils</td></tr>
                <tr><td>SSD</td><td>Dauerhafter Speicher</td><td>M.2 (NVMe) oder SATA, je nach Mainboard</td></tr>
                <tr><td>Netzteil</td><td>Stromversorgung</td><td>Leistung mit Reserve, passende Anschlüsse, Effizienz</td></tr>
                <tr><td>Gehäuse und Kühlung</td><td>Platz und Luftstrom</td><td>Formfaktor, Länge der Grafikkarte, Höhe des CPU-Kühlers</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Kompatibilität: Diese vier Dinge müssen zusammenpassen</h2>
          <ol>
            <li><strong>CPU und Mainboard:</strong> Der Prozessor braucht den passenden Sockel. Prüfe im Datenblatt des Mainboards, welche Prozessoren es unterstützt.</li>
            <li><strong>RAM und Mainboard:</strong> Viele Mainboards unterstützen nur entweder DDR4 oder DDR5, nicht beides. Kaufe den RAM-Typ, den dein Mainboard vorgibt.</li>
            <li><strong>Gehäuse und Mainboard:</strong> Das Mainboard muss in den Formfaktor des Gehäuses passen, und die Grafikkarte darf nicht länger sein als der Platz im Gehäuse. Achte auch auf Teile, die hervorstehen, etwa Kühler oder RAM-Riegel.</li>
            <li><strong>Netzteil und Rest:</strong> Das Netzteil muss genug Leistung liefern und die Stromanschlüsse für Grafikkarte, Mainboard und Laufwerke bieten.</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Budget verteilen: Wo das Geld hingehört</h2>
          <p>Als Faustregel für einen ausgewogenen PC gilt diese Aufteilung:</p>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Bereich</th><th>Anteil am Budget</th></tr>
              </thead>
              <tbody>
                <tr><td>Prozessor und Grafikkarte zusammen</td><td>etwa 50 bis 65 %</td></tr>
                <tr><td>Mainboard</td><td>etwa 10 bis 15 %</td></tr>
                <tr><td>RAM, SSD, Netzteil, Gehäuse und Kühler</td><td>etwa 25 bis 40 %</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Für einen Büro-PC ohne eigene Grafikkarte verschiebt sich das Budget zu schnellem Speicher und ausreichend RAM.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welcher PC für wen?</h2>
          <ul>
            <li><strong>Büro und Alltag:</strong> Ein sparsamer Prozessor mit integrierter Grafik, meist 16 GB RAM und eine SSD genügen.</li>
            <li><strong>Gaming:</strong> Hier lohnt sich das Geld in Grafikkarte und Prozessor, dazu ein Netzteil mit genug Reserve und ein Gehäuse mit gutem Luftstrom.</li>
            <li><strong>Kreativ und Videoschnitt:</strong> Viele Prozessorkerne, mehr RAM (oft 32 GB oder mehr) und eine schnelle SSD bringen den größten Vorteil.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Das Netzteil richtig wählen</h2>
          <ul>
            <li>Addiere den Strombedarf von Prozessor, Grafikkarte und übrigen Teilen und plane eine Reserve ein, oft rund 20 bis 30 %.</li>
            <li>Prüfe die benötigten Stromanschlüsse der Grafikkarte und des Mainboards.</li>
            <li>Ein effizientes Netzteil, zum Beispiel mit 80-PLUS-Zertifikat, spart Strom und läuft leiser.</li>
            <li>Am Netzteil sollte man nicht sparen, denn es versorgt alle anderen Teile.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Selbst zusammenbauen oder Fertig-PC?</h2>
          <p>Beim Selbstbau setzt du das Mainboard ins Gehäuse, steckst Prozessor, RAM und Grafikkarte in die Steckplätze, baust SSD und Kühler ein, schließt Strom- und Datenkabel an und installierst danach das Betriebssystem. Das gibt dir freie Wahl bei jedem Teil, braucht aber etwas Zeit und Sorgfalt. Ein Fertig-PC spart den Aufbau, bietet aber weniger Auswahl bei den Teilen.</p>
          <ul>
            <li>Entlade dich vor dem Einbau an einem geerdeten Metallteil, um statische Aufladung zu vermeiden.</li>
            <li>Lies die Handbücher von Mainboard und Kühler, besonders zur Montage und zur Wärmeleitpaste.</li>
            <li>Plane das Betriebssystem und eine passende Lizenz zusätzlich ein.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die richtige SSD und passendes Zubehör</h2>
          <p>Welche Speicherart zu deinem Mainboard passt, erklärt der Ratgeber <a href="/blog/ssd-festplatte-usb-stick-kaufen-ratgeber/">SSD, Festplatte oder USB-Stick kaufen</a>. Für die Bildausgabe brauchst du passende Kabel, mehr dazu im Ratgeber <a href="/blog/kabel-und-adapter-kaufen-ratgeber/">Kabel und Adapter kaufen</a>, und zur Wahl des Bildschirms hilft <a href="/blog/monitor-oder-beamer-kaufratgeber/">Monitor oder Beamer</a>.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim PC-Bau</h2>
          <ol>
            <li><strong>Kompatibilität nicht prüfen:</strong> Sockel und RAM-Typ müssen zusammenpassen.</li>
            <li><strong>Am Netzteil sparen:</strong> Ein schwaches Netzteil gefährdet das ganze System.</li>
            <li><strong>Die Maße vergessen:</strong> Lange Grafikkarten und hohe Kühler passen nicht in jedes Gehäuse.</li>
            <li><strong>Das Budget schlecht verteilen:</strong> Eine starke Grafikkarte nützt wenig mit einer sehr schwachen CPU.</li>
            <li><strong>Das Betriebssystem vergessen:</strong> Es gehört mit ins Budget.</li>
          </ol>
        </section>


        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">PC-Komponenten im Preisvergleich</h3>
          <p className="text-muted small mb-3">Prozessoren, Mainboards, Arbeitsspeicher, Grafikkarten und mehr aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/pc-komponenten" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum PC-Komponenten-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
