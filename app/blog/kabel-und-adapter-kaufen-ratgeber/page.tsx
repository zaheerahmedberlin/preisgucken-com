import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kabel & Adapter kaufen: USB, HDMI, Netzwerk",
  description: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerkkabel richtig wählen – Datenrate, Ladeleistung, Zertifizierung und typische Fehler im Überblick.",
  keywords: ["kabel und adapter kaufen", "usb c kabel kaufen", "hdmi kabel 4k 120 hz", "usb c ladekabel oder datenkabel", "netzwerkkabel cat5e cat6", "hdmi auf vga adapter", "usb kabel datenrate"],
  openGraph: {
    title: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerk richtig wählen",
    description: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerkkabel richtig wählen – Datenrate, Ladeleistung, Zertifizierung und typische Fehler im Überblick.",
    url: "https://www.preisgucken.com/blog/kabel-und-adapter-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerk richtig wählen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/kabel-und-adapter-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerk richtig wählen",
    description: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerkkabel richtig wählen – Datenrate, Ladeleistung, Zertifizierung und typische Fehler im Überblick.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Kabel und Adapter kaufen: USB-C, HDMI und Netzwerk richtig wählen",
  datePublished: "2026-10-04",
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
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Kabel und Adapter kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Kabel und Adapter kaufen: USB-C, HDMI und Netzwerk richtig wählen</h1>
          <p className="lead text-muted">Ein Kabel sieht aus wie das andere – und kann doch ganz verschiedene Dinge. Welche Anschlüsse, Datenraten und Zertifizierungen wirklich wichtig sind, damit Laden, Daten und Bild zuverlässig funktionieren.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 4. Oktober 2026</span>
            <span>⏱ 8 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die wichtigsten Kabeltypen im Überblick</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Kabel</th><th>Wofür</th><th>Darauf achten</th></tr>
              </thead>
              <tbody>
                <tr><td>USB-C</td><td>Laden, Daten, teils Bild</td><td>Nicht jedes USB-C-Kabel kann alles – Ladeleistung, Datenrate und Videofähigkeit prüfen</td></tr>
                <tr><td>HDMI</td><td>Bild und Ton zu Fernseher, Beamer, Monitor</td><td>Version und Zertifizierung passend zu Auflösung und Bildrate</td></tr>
                <tr><td>DisplayPort</td><td>Monitor am PC</td><td>Version für hohe Bildraten und Auflösungen</td></tr>
                <tr><td>Netzwerkkabel (Cat5e, Cat6, Cat6a)</td><td>Kabelgebundenes Heimnetz</td><td>Kategorie, Länge und Abschirmung</td></tr>
                <tr><td>Cinch, Klinke, Optisch</td><td>Audio</td><td>Anschluss am Gerät, Länge, Stecker</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">USB-C: Laden, Daten und Video sind nicht dasselbe</h2>
          <p>Der USB-C-Stecker sieht bei allen Kabeln gleich aus, die Fähigkeiten unterscheiden sich aber stark. Ein reines Ladekabel hat oft nicht die Leitungen für schnelle Datenübertragung oder Bildausgabe. Prüfe deshalb vor dem Kauf drei Dinge:</p>
          <ul>
            <li><strong>Ladeleistung:</strong> Sie muss zu Netzteil und Gerät passen. Für hohe Ladeleistungen über 60 Watt brauchst du ein Kabel mit E-Marker-Chip, das für die Leistung ausgelegt ist.</li>
            <li><strong>Datenrate:</strong> USB 3.2 Gen 2 schafft bis zu 10 Gbit/s, USB 3.2 Gen 2x2 bis zu 20 Gbit/s und USB4 bis zu 40 Gbit/s. Für Festplatten und schnelle Backups lohnt ein Datenkabel mit dieser Angabe.</li>
            <li><strong>Bildausgabe:</strong> Damit ein Bild über USB-C läuft, müssen Gerät und Kabel das unterstützen. Viele reine Ladekabel können es nicht.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">HDMI: Welche Version brauchst du?</h2>
          <p>HDMI überträgt Bild und Ton und ist der Standard für Fernseher, Spielkonsolen und Beamer. Entscheidend ist, was du darstellen willst:</p>
          <ul>
            <li><strong>4K mit 60 Hz:</strong> Ein High-Speed-Kabel reicht in der Regel.</li>
            <li><strong>4K mit 120 Hz:</strong> Dafür brauchst du ein als Ultra High Speed zertifiziertes Kabel, ebenso wie einen Anschluss mit HDMI 2.1 am Gerät.</li>
            <li><strong>Soundbar:</strong> Für Surround-Ton nutzt du den HDMI-ARC- oder eARC-Anschluss am Fernseher.</li>
          </ul>
          <p className="small text-muted">Welche Anschlüsse und Funktionen ein Fernseher bieten sollte, erklärt der <a href="/blog/fernseher-kaufen-ratgeber/">Fernseher-Ratgeber</a>. Beim Aufbau eines Beamers hilft der Guide zum <a href="/blog/heimkino-einrichten-guide/">Heimkino einrichten</a>, und für den Schreibtisch der Vergleich <a href="/blog/monitor-oder-beamer-kaufratgeber/">Monitor oder Beamer</a>.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Netzwerkkabel: Cat5e, Cat6 oder Cat6a?</h2>
          <ul>
            <li><strong>Cat5e:</strong> Reicht für Gigabit im normalen Heimnetz.</li>
            <li><strong>Cat6 und Cat6a:</strong> Bieten Reserve für schnellere Netze mit bis zu 10 Gbit/s, Cat6a auch über längere Strecken. Wer neu verlegt, plant damit für die Zukunft.</li>
            <li><strong>Abschirmung:</strong> Geschirmte Kabel schützen in Umgebungen mit vielen Störquellen, etwa neben Stromleitungen.</li>
            <li><strong>Länge:</strong> Wähle ein Patchkabel nicht länger als nötig. Das hält die Verkabelung ordentlich.</li>
          </ul>
          <p className="small text-muted">Ein LAN-Kabel zwischen Router und Mesh-Knoten macht das WLAN oft stabiler, wie der Ratgeber zu <a href="/blog/mesh-wlan-router-repeater-guide/">Mesh-WLAN und Repeater</a> erklärt.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Adapter: Wann sie sinnvoll sind</h2>
          <ul>
            <li><strong>Gleiche Signale, anderer Stecker:</strong> Ein einfacher Adapter reicht, wenn nur die Steckerform nicht passt, zum Beispiel von USB-A auf USB-C.</li>
            <li><strong>Digital auf analog:</strong> Von HDMI auf VGA braucht es einen aktiven Videokonverter, der das Signal umwandelt. Ein bloßer Steckeradapter funktioniert dabei nicht.</li>
            <li><strong>Netzteile und Ladegeräte:</strong> Prüfe Stecker, Spannung und Leistung. Ein Netzteil mit zu wenig Leistung lädt langsam oder gar nicht.</li>
            <li><strong>Reise:</strong> Länderadapter ändern nur die Steckerform, nicht die Spannung des Geräts.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Woran du gute Kabel erkennst</h2>
          <ul>
            <li><strong>Zertifizierung statt Werbeversprechen:</strong> Achte auf offizielle Labels, zum Beispiel die Ultra-High-Speed-Zertifizierung bei HDMI oder die USB-Angaben zu Datenrate und Leistung.</li>
            <li><strong>Klare Angaben:</strong> Seriöse Hersteller nennen Datenrate, Ladeleistung und Länge im Datenblatt.</li>
            <li><strong>Stabile Stecker:</strong> Ein guter Knickschutz und fest sitzende Stecker verlängern die Lebensdauer.</li>
            <li><strong>Passende Länge:</strong> Sehr lange Kabel können bei hohen Datenraten Probleme machen. Kürzer ist oft besser.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Kabelkauf</h2>
          <ol>
            <li><strong>Ladekabel statt Datenkabel kaufen:</strong> Das Kabel lädt, überträgt aber keine Daten oder kein Bild.</li>
            <li><strong>Das schwächste Glied ignorieren:</strong> Ein schnelles Kabel hilft nicht, wenn Gerät oder Netzteil die Leistung nicht liefern.</li>
            <li><strong>Zu lange Kabel:</strong> Bei hohen Datenraten steigt das Risiko von Aussetzern.</li>
            <li><strong>Auf den Preis allein achten:</strong> Sehr günstige Kabel ohne Angaben halten oft nicht, was sie versprechen.</li>
            <li><strong>HDMI-Version vergessen:</strong> Für 4K mit 120 Hz reicht ein einfaches Kabel nicht.</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Kabel & Adapter im Preisvergleich</h3>
          <p className="text-muted small mb-3">USB-, HDMI- und Netzwerkkabel, Adapter und Netzteile aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/kabel-adapter" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Kabel-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
