import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polyrattan, Alu oder Holz? Gartenmöbel",
  description: "Welche Gartenmöbel lohnen sich? Lounge, Essgruppe oder Liegestuhl? Die besten Materialien und Schnäppchen im Ratgeber.",
  keywords: ["gartenmöbel kaufen", "gartenmöbel günstig", "gartenmöbel 2026", "lounge set garten", "gartenset preisvergleich"],
  alternates: { canonical: "https://www.preisgucken.com/blog/gartenmoebel-kaufen-ratgeber" },
  openGraph: {
    title: "Polyrattan, Alu oder Holz? Gartenmöbel",
    description: "Welche Gartenmöbel lohnen sich? Lounge, Essgruppe oder Liegestuhl? Die besten Materialien und Schnäppchen im Ratgeber.",
    url: "https://www.preisgucken.com/blog/gartenmoebel-kaufen-ratgeber",
    type: "article",
    images: [{ url: "https://www.preisgucken.com/opengraph-image", width: 1200, height: 630, alt: "Polyrattan, Alu oder Holz? Gartenmöbel" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polyrattan, Alu oder Holz? Gartenmöbel",
    description: "Welche Gartenmöbel lohnen sich? Lounge, Essgruppe oder Liegestuhl? Die besten Materialien und Schnäppchen im Ratgeber.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Polyrattan, Alu oder Holz? Gartenmöbel",
  description: "Welche Gartenmöbel lohnen sich 2026? Wir erklären Materialien, Typen und zeigen wo du am günstigsten kaufst.",
  datePublished: "2026-07-24",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

export default function GartenmoebелRatgeber() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 800 }}>
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item"><a href="/blog">Blog</a></li>
            <li className="breadcrumb-item active">Gartenmöbel kaufen 2026</li>
          </ol>
        </nav>

        <span className="badge mb-3" style={{ background: "#1A3A6B", color: "#fff" }}>Kaufberatung</span>
        <h1 className="fw-bold mb-3" style={{ color: "#1A3A6B", fontSize: "2rem" }}>
          Gartenmöbel kaufen 2026: Ratgeber für Balkon & Garten
        </h1>
        <p className="text-muted mb-4">24. Juli 2026 · 7 Min. Lesezeit</p>

        <p className="lead mb-4">
          Ob großer Garten oder kleiner Balkon – die richtigen Möbel machen den Außenbereich zur Wohlfühloase. Wir erklären die wichtigsten Materialien, Typen und zeigen wo du 2026 am besten sparst.
        </p>

        <h2 className="h4 fw-bold mt-5 mb-3" style={{ color: "#1A3A6B" }}>Die wichtigsten Materialien im Vergleich</h2>

        <h3 className="h5 fw-bold mt-4">Polyrattan / Kunststoffgeflecht</h3>
        <p>Das beliebteste Material für Lounge-Sets und Essgruppen. Preis: <strong>150–1.200 €</strong>.</p>
        <p><strong>Vorteile:</strong> Wetterfest, pflegeleicht, modernes Aussehen, viele Farben<br />
        <strong>Nachteile:</strong> Kann bei Hitze ausbleichen, günstiger Rattan wirkt schnell billig</p>

        <h3 className="h5 fw-bold mt-4">Aluminium</h3>
        <p>Leicht, rostfrei und langlebig. Preis: <strong>200–2.000 €</strong>.</p>
        <p><strong>Vorteile:</strong> Sehr leicht, kein Rosten, 10+ Jahre haltbar<br />
        <strong>Nachteile:</strong> Kann sich in der Sonne stark erhitzen</p>

        <h3 className="h5 fw-bold mt-4">Holz (Akazie, Teak, Kiefer)</h3>
        <p>Natürliches Aussehen, das gut altert. Preis: <strong>100–3.000 €</strong>.</p>
        <p><strong>Vorteile:</strong> Natürliches Aussehen, gut reparierbar, Teak extrem langlebig<br />
        <strong>Nachteile:</strong> Regelmäßige Pflege (Ölen) nötig, schwerer als Alu</p>

        <h3 className="h5 fw-bold mt-4">Stahl / Eisen (pulverbeschichtet)</h3>
        <p>Stabil und preiswert. Preis: <strong>80–600 €</strong>.</p>
        <p><strong>Vorteile:</strong> Günstig, stabil, viele Designs<br />
        <strong>Nachteile:</strong> Kann rosten wenn Beschichtung beschädigt wird, schwer</p>

        <h2 className="h4 fw-bold mt-5 mb-3" style={{ color: "#1A3A6B" }}>Welcher Typ passt zu dir?</h2>
        <ul>
          <li><strong>Lounge-Set:</strong> Ideal zum Entspannen – Sofa + Sessel + Tisch. Ab 300 €.</li>
          <li><strong>Essgruppe:</strong> Tisch + Stühle für gemeinsame Mahlzeiten draußen. Ab 150 €.</li>
          <li><strong>Liegestühle / Sonnenliegen:</strong> Für Sonnenbaden und Relaxen. Ab 60 €.</li>
          <li><strong>Balkonmöbel:</strong> Kompakte Sets für kleinen Außenbereich. Ab 80 €.</li>
          <li><strong>Hängematten & Hängesessel:</strong> Für maximale Entspannung. Ab 40 €.</li>
        </ul>

        <h2 className="h4 fw-bold mt-5 mb-3" style={{ color: "#1A3A6B" }}>Gartenmöbel günstig kaufen – die besten Tipps</h2>
        <ol>
          <li><strong>Ende-Saison kaufen:</strong> Ab August werden Gartenmöbel um 30–60% reduziert – perfekter Zeitpunkt für den Kauf.</li>
          <li><strong>Preisvergleich nutzen:</strong> Auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> siehst du Preise aus allen deutschen Shops.</li>
          <li><strong>Sets statt Einzelteile:</strong> Gartensets sind oft günstiger als die Einzelteile zusammen.</li>
          <li><strong>Auf Schutzhülle achten:</strong> Eine gute Abdeckung verdoppelt die Lebensdauer der Möbel – und spart langfristig Geld.</li>
        </ol>

        <div className="mt-5 p-4 rounded" style={{ background: "#f0f4fa", border: "1px solid #d0daea" }}>
          <h3 className="h5 fw-bold mb-2" style={{ color: "#1A3A6B" }}>Jetzt Gartenmöbel günstig finden</h3>
          <p className="mb-3">Täglich aktualisierte Preise aus deutschen Online-Shops – kostenlos vergleichen.</p>
          <a href="https://www.preisgucken.de/kategorie/gartenmoebel" className="btn fw-bold px-4" style={{ background: "#F5A623", color: "#fff", borderRadius: 8 }}>
            Gartenmöbel vergleichen →
          </a>
        </div>
      </article>
    </>
  );
}
