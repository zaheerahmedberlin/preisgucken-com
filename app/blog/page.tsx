import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog: Kaufberatung, Spartipps & Preisvergleich | Preisgucken",
  description: "Expertenratgeber rund um Möbel, Elektronik, Gesundheit und Sparen: Kaufberatungen, Preisvergleich-Tipps und Schnäppchen-Guides aus Deutschland.",
  alternates: { canonical: "https://www.preisgucken.com/blog" },
  openGraph: {
    title: "Blog – Kaufberatung & Spartipps | Preisgucken",
    description: "Expertenratgeber rund um Möbel, Elektronik, Gesundheit und Sparen.",
    url: "https://www.preisgucken.com/blog",
  },
};

const posts = [
  {
    slug: "/blog/boxspringbett-kaufen-ratgeber",
    title: "Boxspringbett kaufen 2026: Der ultimative Ratgeber",
    excerpt: "Welche Größe, Härtegrad und Qualität lohnt sich wirklich? Unser Experten-Ratgeber mit Preisvergleich – spare bis zu 40% beim Kauf.",
    category: "Kaufberatung",
    date: "20. Juli 2026",
    readTime: "8 Min.",
    featured: true,
  },
  {
    slug: "/blog/schnaeppchen-tipps-2026",
    title: "15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro",
    excerpt: "Wie du nie wieder zu viel bezahlst – diese 15 Tricks funktionieren sofort und kosten dich nichts.",
    category: "Spartipps",
    date: "19. Juli 2026",
    readTime: "6 Min.",
    featured: true,
  },
  {
    slug: "/blog/sofa-kaufen-ratgeber",
    title: "Sofa kaufen 2026: Ratgeber für das perfekte Wohnzimmersofa",
    excerpt: "Größe, Form, Stoff – beim Sofakauf gibt es viele Entscheidungen. Wir führen dich Schritt für Schritt zum richtigen Sofa.",
    category: "Kaufberatung",
    date: "17. Juli 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/gesundheitsprodukte-online-kaufen",
    title: "Gesundheitsprodukte online kaufen: Worauf du achten musst",
    excerpt: "Nahrungsergänzungsmittel, Massagegeräte & Co. sicher kaufen – Qualität erkennen, Fakes vermeiden und bis zu 35% sparen.",
    category: "Gesundheit",
    date: "16. Juli 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/preisvergleich-tipps",
    title: "Preisvergleich richtig nutzen: So sparst du bis zu 40%",
    excerpt: "Gleiche Produkte, verschiedene Preise – manchmal bis zu 40% Unterschied. So nutzt du Preisvergleich optimal.",
    category: "Ratgeber",
    date: "15. Juli 2026",
    readTime: "5 Min.",
    featured: false,
  },
  {
    slug: "/blog/staubsauger-kaufen-ratgeber",
    title: "Staubsauger kaufen 2026: Der große Ratgeber",
    excerpt: "Beutellos, Akku oder Roboter? Wir erklären alle Typen und zeigen dir, wo du den besten Staubsauger zum günstigsten Preis findest.",
    category: "Kaufberatung",
    date: "24. Juli 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/fernseher-kaufen-ratgeber",
    title: "Fernseher kaufen 2026: OLED, QLED oder LED?",
    excerpt: "Welcher TV-Typ lohnt sich wirklich? Wir erklären die Unterschiede zwischen OLED, QLED und LED und zeigen wo du am günstigsten kaufst.",
    category: "Kaufberatung",
    date: "24. Juli 2026",
    readTime: "8 Min.",
    featured: false,
  },
  {
    slug: "/blog/gartenmoebel-kaufen-ratgeber",
    title: "Gartenmöbel kaufen 2026: Ratgeber für Balkon & Garten",
    excerpt: "Polyrattan, Aluminium oder Holz? Unser Ratgeber erklärt die Materialien und zeigt, wie du Gartenmöbel günstig kaufst.",
    category: "Kaufberatung",
    date: "24. Juli 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/matratze-kaufen-ratgeber",
    title: "Matratze kaufen 2026: Härtegrad, Größe & Material im Ratgeber",
    excerpt: "Welcher Härtegrad passt zu dir, welche Größe brauchst du und Federkern oder Schaumstoff? Der komplette Matratzen-Ratgeber.",
    category: "Kaufberatung",
    date: "29. Juli 2026",
    readTime: "8 Min.",
    featured: true,
  },
  {
    slug: "/blog/abendkleid-cocktailkleid-kaufen-ratgeber",
    title: "Abendkleid & Cocktailkleid kaufen 2026: Der Anlass-Ratgeber",
    excerpt: "Cocktailparty, Hochzeit oder Gala – welches Kleid passt zu welchem Anlass? Schnitt, Länge und Farbe richtig wählen.",
    category: "Kaufberatung",
    date: "29. Juli 2026",
    readTime: "7 Min.",
    featured: true,
  },
  {
    slug: "/blog/smartphone-kaufen-ratgeber",
    title: "Smartphone kaufen 2026: Speicher, Kamera & Akku im Ratgeber",
    excerpt: "Neues Flaggschiff oder Vorjahresmodell? Wo sich Sparen lohnt und worauf du wirklich achten solltest.",
    category: "Kaufberatung",
    date: "29. Juli 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/vorhaenge-kaufen-ratgeber",
    title: "Vorhänge kaufen 2026: Verdunkelung, Schallschutz & Stoffe im Ratgeber",
    excerpt: "Nicht jeder Vorhang kann alles – welcher Stoff für welchen Zweck taugt und wie du beim Kauf nichts falsch machst.",
    category: "Kaufberatung",
    date: "29. Juli 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/kamerastativ-kaufen-ratgeber",
    title: "Kamerastativ kaufen 2026: Carbon vs. Aluminium & Kugelkopf-Ratgeber",
    excerpt: "Reisestativ, Videostativ oder Einbeinstativ? Material, Traglast und der richtige Stativkopf.",
    category: "Kaufberatung",
    date: "29. Juli 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/uhren-kaufen-ratgeber",
    title: "Uhren kaufen 2026: Automatik, Quarz & Material im Ratgeber",
    excerpt: "Automatik oder Quarz? Welches Material hält am längsten? Der komplette Uhren-Ratgeber mit Preisvergleich.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "7 Min.",
    featured: true,
  },
  {
    slug: "/blog/schmuck-kaufen-ratgeber",
    title: "Schmuck kaufen: Materialien, Qualität & Kauftipps 2026",
    excerpt: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "7 Min.",
    featured: true,
  },
  {
    slug: "/blog/ohrringe-kaufen-ratgeber",
    title: "Ohrringe kaufen: Stecker, Creolen & Co. im Vergleich",
    excerpt: "Stecker, Creolen oder Dangle-Ohrringe? Materialien, Verschlüsse und Preise im Vergleich.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/halsketten-kaufen-ratgeber",
    title: "Halsketten kaufen: Längen, Materialien & Stil-Guide",
    excerpt: "Choker, Layering-Kette oder lange Halskette? So findest du die richtige Länge und das passende Material.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/armbaender-kaufen-ratgeber",
    title: "Armbänder kaufen: Größen, Stile & Materialien",
    excerpt: "Charm-Armband, Armreif oder Kette? Handgelenk richtig messen und das passende Material finden.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/ringe-kaufen-ratgeber",
    title: "Ringe kaufen: Ringgröße bestimmen & Stil-Guide 2026",
    excerpt: "So findest du die richtige Ringgröße zuhause, welche Materialien halten und welcher Ringstil zu dir passt.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "7 Min.",
    featured: false,
  },
  {
    slug: "/blog/fusskettchen-kaufen-ratgeber",
    title: "Fußkettchen kaufen: Längen, Trends & Materialien",
    excerpt: "Der Sommer-Trend Fußkettchen im Ratgeber: richtige Länge, wasserfeste Materialien und Styling-Tipps.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "5 Min.",
    featured: false,
  },
  {
    slug: "/blog/schmucksets-kaufen-ratgeber",
    title: "Schmucksets kaufen: Der perfekte Look aus einem Guss",
    excerpt: "Warum ein Schmuckset die einfachste Wahl für ein stimmiges Outfit ist – Vorteile, Stile und Geschenktipps.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "5 Min.",
    featured: false,
  },
  {
    slug: "/blog/schmuck-als-geschenk-ratgeber",
    title: "Schmuck verschenken: Die besten Geschenkideen 2026",
    excerpt: "Vom ersten Date bis zum Jahrestag: Welcher Schmuck passt zu welchem Anlass? Geschenkideen für jedes Budget.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/sterlingsilber-vs-edelstahl-schmuck",
    title: "Sterlingsilber oder Edelstahl? Der Material-Vergleich",
    excerpt: "925er Sterlingsilber vs. hypoallergener Edelstahl: Unterschiede bei Preis, Pflege, Allergierisiko und Haltbarkeit.",
    category: "Kaufberatung",
    date: "1. August 2026",
    readTime: "6 Min.",
    featured: false,
  },
  {
    slug: "/blog/smartwatch-armband-kaufen-guide",
    title: "Smartwatch Armband kaufen 2026: Material, Größe & Preisvergleich",
    excerpt: "Ersatzarmband für Apple Watch, Samsung, Garmin, Fitbit oder Xiaomi gesucht? Kompatibilität, Material und Größe im Guide.",
    category: "Kaufberatung",
    date: "4. August 2026",
    readTime: "7 Min.",
    featured: true,
  },
  {
    slug: "/blog/luxusuhren-kaufen",
    title: "Luxusuhren kaufen 2026: Was einen hohen Preis rechtfertigt",
    excerpt: "Material, Limitierung und Fertigung im Check – mit der Dark Matter 4 von Tsarbomba als Praxisbeispiel im Preisvergleich.",
    category: "Kaufberatung",
    date: "4. August 2026",
    readTime: "8 Min.",
    featured: true,
  },
  {
    slug: "/blog/kleider-fuer-jeden-anlass",
    title: "Kleider für jeden Anlass: Alltag, Hochzeit & Schwangerschaft",
    excerpt: "Alltagskleid, Brautkleid oder Umstandskleid – welcher Schnitt und Stoff passt zu welchem Anlass? Mit Preisvergleich.",
    category: "Kaufberatung",
    date: "4. August 2026",
    readTime: "8 Min.",
    featured: true,
  },
];

const categoryColors: Record<string, string> = {
  Kaufberatung: "#1A3A6B",
  Spartipps: "#2a7a4f",
  Gesundheit: "#8b1a1a",
  Ratgeber: "#7a4f00",
};

export default function BlogPage() {
  const featured = posts.filter(p => p.featured);
  const rest = posts.filter(p => !p.featured);

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Kaufberatung & Spartipps</h1>
        <p className="text-muted">Experten-Ratgeber rund um Möbel, Elektronik, Gesundheit und cleveres Sparen</p>
      </div>

      {/* Featured Posts */}
      <div className="row g-4 mb-5">
        {featured.map((post, i) => (
          <div className="col-md-6" key={i}>
            <a href={post.slug} className="text-decoration-none text-dark">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="tag" style={{ background: `${categoryColors[post.category]}18`, color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
                  <span className="text-muted small">⏱ {post.readTime}</span>
                </div>
                <h2 className="h5 fw-bold mb-2">{post.title}</h2>
                <p className="text-muted small mb-3">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <small className="text-muted">{post.date}</small>
                  <span className="small fw-semibold" style={{ color: "var(--pg-blue)" }}>Lesen →</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* Rest of posts */}
      <div className="row g-4 mb-5">
        {rest.map((post, i) => (
          <div className="col-md-4" key={i}>
            <a href={post.slug} className="text-decoration-none text-dark">
              <div className="card h-100 p-4">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <span className="tag" style={{ background: `${categoryColors[post.category]}18`, color: categoryColors[post.category] }}>
                    {post.category}
                  </span>
                  <span className="text-muted small">⏱ {post.readTime}</span>
                </div>
                <h2 className="h6 fw-bold mb-2">{post.title}</h2>
                <p className="text-muted small mb-3">{post.excerpt}</p>
                <div className="d-flex justify-content-between align-items-center mt-auto">
                  <small className="text-muted">{post.date}</small>
                  <span className="small fw-semibold" style={{ color: "var(--pg-blue)" }}>Lesen →</span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center p-5 card">
        <h4 className="fw-bold mb-2">Preise direkt vergleichen</h4>
        <p className="text-muted small mb-3">Setze unsere Ratgeber-Tipps sofort um – über 8.000 Produkte im Preisvergleich.</p>
        <a href="https://www.preisgucken.de" className="btn btn-brand px-4" target="_blank" rel="noopener">Zu preisgucken.de →</a>
      </div>
    </div>
  );
}
