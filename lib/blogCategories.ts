// lib/blogCategories.ts
// Single source of truth for blog taxonomy — consumed by the blog index,
// the /blog/kategorie/[slug] hub pages, and sitemap.ts, so a new post only
// needs to be added here once instead of in three separate places.
//
// `pgLink` is the matching preisgucken.de category (comma-separated slugs
// supported for multi-category views), used both for each post's own CTA
// and for the category hub page's "Preise vergleichen" button — this is
// what actually ties the "Kaufberatung" content to real Preisvergleich
// intent instead of just linking the bare homepage everywhere.

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  featured?: boolean;
  pgLink: string; // preisgucken.de category slug(s) for this post's own CTA
};

export type BlogCategory = {
  slug: string;
  name: string;
  description: string;
  pgLink: string; // preisgucken.de category slug(s) for the hub page's CTA
  posts: BlogPost[];
};

export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: "moebel-wohnen",
    name: "Möbel & Wohnen",
    description: "Betten, Sofas, Matratzen und mehr – Kaufberatung für dein Zuhause.",
    pgLink: "schlafen,sitzen,gartenmoebel,vorhaenge,leuchten",
    posts: [
      { slug: "boxspringbett-kaufen-ratgeber", title: "7 Fehler beim Boxspringbett-Kauf, die dich Geld kosten", excerpt: "Welche Größe, Härtegrad und Qualität lohnt sich wirklich? Unser Experten-Ratgeber mit Preisvergleich – spare bis zu 40% beim Kauf.", date: "20. Juli 2026", readTime: "8 Min.", featured: true, pgLink: "schlafen" },
      { slug: "sofa-kaufen-ratgeber", title: "Welches Sofa passt zu deinem Wohnzimmer? Der Entscheidungs-Guide", excerpt: "Größe, Form, Stoff – beim Sofakauf gibt es viele Entscheidungen. Wir führen dich Schritt für Schritt zum richtigen Sofa.", date: "17. Juli 2026", readTime: "7 Min.", pgLink: "sitzen" },
      { slug: "matratze-kaufen-ratgeber", title: "Falscher Härtegrad, schlechter Schlaf: So triffst du die richtige Wahl", excerpt: "Welcher Härtegrad passt zu dir, welche Größe brauchst du und Federkern oder Schaumstoff? Der komplette Matratzen-Ratgeber.", date: "29. Juli 2026", readTime: "8 Min.", featured: true, pgLink: "schlafen" },
      { slug: "gartenmoebel-kaufen-ratgeber", title: "Polyrattan, Alu oder Holz? Der Gartenmöbel-Materialvergleich", excerpt: "Polyrattan, Aluminium oder Holz? Unser Ratgeber erklärt die Materialien und zeigt, wie du Gartenmöbel günstig kaufst.", date: "24. Juli 2026", readTime: "7 Min.", pgLink: "gartenmoebel" },
      { slug: "vorhaenge-kaufen-ratgeber", title: "Verdunkelung, Schallschutz oder Deko? Welcher Vorhang wofür taugt", excerpt: "Nicht jeder Vorhang kann alles – welcher Stoff für welchen Zweck taugt und wie du beim Kauf nichts falsch machst.", date: "29. Juli 2026", readTime: "6 Min.", pgLink: "vorhaenge" },
      { slug: "haengelampe-oder-stehlampe-design-leuchte", title: "Hängelampe oder Stehlampe? So findest du die richtige Design-Leuchte", excerpt: "Welcher Leuchtentyp für welchen Raum passt – mit Van Tjalle en Jasper als Praxisbeispiel im Preisvergleich.", date: "14. August 2026", readTime: "6 Min.", featured: true, pgLink: "leuchten" },
    ],
  },
  {
    slug: "schmuck-accessoires",
    name: "Schmuck & Accessoires",
    description: "Materialien, Stilberatung und Pflegetipps für Ringe, Ketten, Ohrringe und mehr.",
    pgLink: "schmuck",
    posts: [
      { slug: "schmuck-kaufen-ratgeber", title: "Echt oder Fake? So erkennst du hochwertigen Schmuck in 60 Sekunden", excerpt: "925er Silber, Edelstahl oder Gold? So erkennst du hochwertigen Schmuck und findest das passende Stück.", date: "1. August 2026", readTime: "7 Min.", featured: true, pgLink: "schmuck" },
      { slug: "ohrringe-kaufen-ratgeber", title: "Stecker, Creolen oder Dangle: Welche Ohrringe passen zu dir?", excerpt: "Stecker, Creolen oder Dangle-Ohrringe? Materialien, Verschlüsse und Preise im Vergleich.", date: "1. August 2026", readTime: "6 Min.", pgLink: "schmuck" },
      { slug: "halsketten-kaufen-ratgeber", title: "Die richtige Kettenlänge finden: Choker bis Opernkette erklärt", excerpt: "Choker, Layering-Kette oder lange Halskette? So findest du die richtige Länge und das passende Material.", date: "1. August 2026", readTime: "6 Min.", pgLink: "schmuck" },
      { slug: "armbaender-kaufen-ratgeber", title: "Handgelenk richtig messen: So sitzt dein Armband perfekt", excerpt: "Charm-Armband, Armreif oder Kette? Handgelenk richtig messen und das passende Material finden.", date: "1. August 2026", readTime: "6 Min.", pgLink: "schmuck" },
      { slug: "ringe-kaufen-ratgeber", title: "Ringgröße zuhause bestimmen: 3 Methoden ohne Schmuckgeschäft", excerpt: "So findest du die richtige Ringgröße zuhause, welche Materialien halten und welcher Ringstil zu dir passt.", date: "1. August 2026", readTime: "7 Min.", pgLink: "schmuck" },
      { slug: "fusskettchen-kaufen-ratgeber", title: "Fußkettchen-Trend 2026: Länge, Material und Styling-Fehler vermeiden", excerpt: "Der Sommer-Trend Fußkettchen im Ratgeber: richtige Länge, wasserfeste Materialien und Styling-Tipps.", date: "1. August 2026", readTime: "5 Min.", pgLink: "schmuck" },
      { slug: "schmucksets-kaufen-ratgeber", title: "Lohnt sich ein Schmuckset? Vor- und Nachteile im Check", excerpt: "Warum ein Schmuckset die einfachste Wahl für ein stimmiges Outfit ist – Vorteile, Stile und Geschenktipps.", date: "1. August 2026", readTime: "5 Min.", pgLink: "schmuck" },
      { slug: "schmuck-als-geschenk-ratgeber", title: "Schmuck verschenken ohne Fehlgriff: Guide für jeden Anlass und jedes Budget", excerpt: "Vom ersten Date bis zum Jahrestag: Welcher Schmuck passt zu welchem Anlass? Geschenkideen für jedes Budget.", date: "1. August 2026", readTime: "6 Min.", pgLink: "schmuck" },
      { slug: "sterlingsilber-vs-edelstahl-schmuck", title: "Sterlingsilber vs. Edelstahl: Was hält länger, was verträgt die Haut besser?", excerpt: "925er Sterlingsilber vs. hypoallergener Edelstahl: Unterschiede bei Preis, Pflege, Allergierisiko und Haltbarkeit.", date: "1. August 2026", readTime: "6 Min.", pgLink: "schmuck" },
      { slug: "foto-projektionsschmuck-kaufen", title: "Ein Foto im Stein: Wie Projektionsschmuck funktioniert", excerpt: "Wie ein Foto im Inneren eines Steins sichtbar wird und worauf du achten solltest – mit Amazgifts als Praxisbeispiel im Preisvergleich.", date: "11. August 2026", readTime: "6 Min.", featured: true, pgLink: "schmuck" },
    ],
  },
  {
    slug: "mode-kleidung",
    name: "Mode & Kleidung",
    description: "Vom Alltagslook bis zum großen Anlass – Kleidung richtig auswählen.",
    pgLink: "damenmode",
    posts: [
      { slug: "abendkleid-cocktailkleid-kaufen-ratgeber", title: "Welches Kleid für welchen Anlass? Cocktailparty bis Gala", excerpt: "Cocktailparty, Hochzeit oder Gala – welches Kleid passt zu welchem Anlass? Schnitt, Länge und Farbe richtig wählen.", date: "29. Juli 2026", readTime: "7 Min.", featured: true, pgLink: "kleider" },
      { slug: "kleider-fuer-jeden-anlass", title: "Alltagskleid, Brautkleid, Umstandskleid: 3 Anlässe, 3 Schnitte", excerpt: "Alltagskleid, Brautkleid oder Umstandskleid – welcher Schnitt und Stoff passt zu welchem Anlass? Mit Preisvergleich.", date: "4. August 2026", readTime: "8 Min.", featured: true, pgLink: "kleider" },
      { slug: "workwear-trend-painter-pants-chore-jacket", title: "Painter Pant oder Cargo? Der Workwear-Guide für den Alltag", excerpt: "Was Workwear-Kleidung von normaler Freizeitmode unterscheidet – mit Stan Ray als Praxisbeispiel im Preisvergleich.", date: "14. August 2026", readTime: "7 Min.", featured: true, pgLink: "herrenmode" },
      { slug: "schuhe-online-kaufen-groessentabelle", title: "Schuhgröße online richtig bestimmen: So vermeidest du Fehlkäufe", excerpt: "EU-, US- und UK-Größen im Vergleich, Fußlänge richtig messen und worauf du bei Material und Rückgaberecht achten solltest.", date: "19. August 2026", readTime: "6 Min.", pgLink: "schuhe" },
      { slug: "alltagslook-damenmode-make-up-guide", title: "Alltagslook für Frauen: Damenmode und Make-up richtig kombinieren", excerpt: "Basic-Teile, Layering und Everyday-Make-up im Guide: So baust du dir einen Alltagslook, der zu jedem Anlass passt – mit Preisvergleich für Damenmode und Kosmetik.", date: "19. August 2026", readTime: "7 Min.", featured: true, pgLink: "damenmode,kosmetik-beauty" },
    ],
  },
  {
    slug: "elektronik-technik",
    name: "Elektronik & Technik",
    description: "TVs, Smartphones, Staubsauger und Kamerazubehör im Kaufberatungs-Check.",
    pgLink: "elektronik",
    posts: [
      { slug: "staubsauger-kaufen-ratgeber", title: "Beutellos, Akku oder Roboter? Welcher Staubsauger-Typ zu dir passt", excerpt: "Beutellos, Akku oder Roboter? Wir erklären alle Typen und zeigen dir, wo du den besten Staubsauger zum günstigsten Preis findest.", date: "24. Juli 2026", readTime: "7 Min.", pgLink: "elektronik" },
      { slug: "fernseher-kaufen-ratgeber", title: "Fernseher kaufen 2026: OLED, QLED oder LED?", excerpt: "Welcher TV-Typ lohnt sich wirklich? Wir erklären die Unterschiede zwischen OLED, QLED und LED und zeigen wo du am günstigsten kaufst.", date: "24. Juli 2026", readTime: "8 Min.", pgLink: "fernseher" },
      { slug: "smartphone-kaufen-ratgeber", title: "Neues Flaggschiff oder Vorjahresmodell? Wann sich Sparen lohnt", excerpt: "Neues Flaggschiff oder Vorjahresmodell? Wo sich Sparen lohnt und worauf du wirklich achten solltest.", date: "29. Juli 2026", readTime: "7 Min.", pgLink: "smartphones" },
      { slug: "kamerastativ-kaufen-ratgeber", title: "Carbon oder Aluminium? Das richtige Kamerastativ für deinen Einsatzzweck", excerpt: "Reisestativ, Videostativ oder Einbeinstativ? Material, Traglast und der richtige Stativkopf.", date: "29. Juli 2026", readTime: "7 Min.", pgLink: "foto-optik" },
      { slug: "ueberwachungskamera-kaufen", title: "Akku, Solar oder Stromkabel? Der richtige Kameratyp für jeden Einsatzort", excerpt: "Welcher Kameratyp zu welchem Einsatzort passt und worauf es bei Auflösung und Speicher ankommt – mit Imou als Praxisbeispiel im Preisvergleich.", date: "11. August 2026", readTime: "7 Min.", featured: true, pgLink: "ueberwachungskameras" },
      { slug: "wildkamera-kaufen-ratgeber", title: "Wildkamera kaufen: Auslöserzeit, Reichweite und Stromversorgung im Check", excerpt: "Trigger-Geschwindigkeit, PIR-Reichweite, Auflösung und Solarpanel im Vergleich – so findest du die richtige Wildkamera für Jagd, Garten oder Grundstücksschutz.", date: "17. August 2026", readTime: "7 Min.", pgLink: "ueberwachungskameras" },
      { slug: "pc-zubehoer-original-oder-kompatibel", title: "Original oder kompatibel? Die wichtigsten Fragen beim PC-Zubehör-Kauf", excerpt: "Worauf es bei Kabeln, Monitoren, Speicher und Druckerpatronen wirklich ankommt – mit Preisvergleich für PC-Zubehör.", date: "14. August 2026", readTime: "7 Min.", featured: true, pgLink: "pc-it-zubehoer" },
      { slug: "heimkino-einrichten-guide", title: "Beamer, Leinwand & Sound: So richtest du dein Heimkino richtig ein", excerpt: "Lumen, Kontrast, Leinwandtyp und Soundsystem im Überblick – so baust du dir ein Heimkino, das wirklich überzeugt.", date: "16. August 2026", readTime: "8 Min.", featured: true, pgLink: "heimkino" },
      { slug: "monitor-oder-beamer-kaufratgeber", title: "Monitor oder Beamer? Was für Büro, Gaming und Heimkino wirklich passt", excerpt: "Reaktionszeit, Bildschirmdiagonale und Lumen im Vergleich – welches Gerät für welchen Einsatzzweck die bessere Wahl ist.", date: "17. August 2026", readTime: "7 Min.", pgLink: "monitore,beamer" },
      { slug: "smart-home-nachruesten-guide", title: "Smart Home nachrüsten: Schalter, Steckdosen & Steuerung im Vergleich", excerpt: "Zigbee, WLAN oder Matter? So rüstest du dein Zuhause smart nach, ohne bei Kompatibilität oder Datenschutz Fehler zu machen.", date: "18. August 2026", readTime: "7 Min.", pgLink: "smart-home-steuerungstechnik" },
    ],
  },
  {
    slug: "uhren-zeitmesser",
    name: "Uhren & Zeitmesser",
    description: "Von der Alltagsuhr bis zur Luxusuhr, plus Smartwatch-Armbänder im Guide.",
    pgLink: "uhren",
    posts: [
      { slug: "uhren-kaufen-ratgeber", title: "Automatik oder Quarz? Was beim Uhrenkauf wirklich zählt", excerpt: "Automatik oder Quarz? Welches Material hält am längsten? Der komplette Uhren-Ratgeber mit Preisvergleich.", date: "1. August 2026", readTime: "7 Min.", featured: true, pgLink: "uhren" },
      { slug: "luxusuhren-kaufen", title: "Luxusuhren kaufen 2026: Was einen hohen Preis rechtfertigt", excerpt: "Material, Limitierung und Fertigung im Check – mit der Dark Matter 4 von Tsarbomba als Praxisbeispiel im Preisvergleich.", date: "4. August 2026", readTime: "8 Min.", featured: true, pgLink: "uhren" },
      { slug: "smartwatch-armband-kaufen-guide", title: "Passt jedes Ersatzarmband an jede Smartwatch? Kompatibilität erklärt", excerpt: "Ersatzarmband für Apple Watch, Samsung, Garmin, Fitbit oder Xiaomi gesucht? Kompatibilität, Material und Größe im Guide.", date: "4. August 2026", readTime: "7 Min.", featured: true, pgLink: "smartwatch-armbaender" },
    ],
  },
  {
    slug: "gesundheit",
    name: "Gesundheit",
    description: "Nahrungsergänzung, Pflege- und Massagegeräte sicher auswählen.",
    pgLink: "gesundheit",
    posts: [
      { slug: "gesundheitsprodukte-online-kaufen", title: "Gesundheitsprodukte online kaufen: Worauf du achten musst", excerpt: "Nahrungsergänzungsmittel, Massagegeräte & Co. sicher kaufen – Qualität erkennen, Fakes vermeiden und bis zu 35% sparen.", date: "16. Juli 2026", readTime: "6 Min.", pgLink: "gesundheit" },
    ],
  },
  {
    slug: "suesswaren-genuss",
    name: "Süßwaren & Genuss",
    description: "Schokolade, Pralinen und Geschenkideen für Genießer im Kaufberatungs-Check.",
    pgLink: "suesswaren",
    posts: [
      { slug: "schokolade-pralinen-kaufen", title: "Pralinen, Tafel oder Geschenkbox? So findest du die richtige Schokolade", excerpt: "Kakaoanteil, Herkunft und Verarbeitung im Überblick – mit Venchi als Praxisbeispiel im Preisvergleich.", date: "7. August 2026", readTime: "6 Min.", featured: true, pgLink: "suesswaren" },
    ],
  },
  {
    slug: "balkonkraftwerke-solar",
    name: "Balkonkraftwerke & Solar",
    description: "Leistung, Speicher und Montage – Kaufberatung für Balkonkraftwerke und Solaranlagen.",
    pgLink: "balkonkraftwerke",
    posts: [
      { slug: "balkonkraftwerk-kaufen", title: "Mit oder ohne Speicher? So wählst du das richtige Balkonkraftwerk", excerpt: "800-Watt-Einspeisegrenze, Speicher und Montage im Überblick – mit Indevolt als Praxisbeispiel im Preisvergleich.", date: "8. August 2026", readTime: "7 Min.", featured: true, pgLink: "balkonkraftwerke" },
    ],
  },
  {
    slug: "werkzeug-heimwerken",
    name: "Werkzeug & Heimwerken",
    description: "Handwerkzeug, Elektrowerkzeug und Arbeitsschutz im Kaufberatungs-Check.",
    pgLink: "werkzeug-heimwerken",
    posts: [
      { slug: "werkstatt-ausstattung-was-du-wirklich-brauchst", title: "Werkstatt ausstatten: Was du wirklich brauchst (und was nicht)", excerpt: "Womit du deine Werkstatt sinnvoll ausstattest, ohne unnötig Geld auszugeben – mit Contorion als Praxisbeispiel im Preisvergleich.", date: "14. August 2026", readTime: "7 Min.", featured: true, pgLink: "werkzeug-heimwerken" },
    ],
  },
  {
    slug: "kosmetik-beauty",
    name: "Kosmetik & Beauty",
    description: "Make-up, Hautpflege und natürliche Kosmetik im Kaufberatungs-Check.",
    pgLink: "kosmetik-beauty",
    posts: [
      { slug: "natuerliche-kosmetik-fruchtpigmente", title: "Fruchtpigmente statt Chemie? Was natürliche Kosmetik wirklich bringt", excerpt: "Vegane Kosmetik, Fruchtpigmente statt synthetischer Farbstoffe – mit 100% Pure als Praxisbeispiel im Preisvergleich.", date: "14. August 2026", readTime: "6 Min.", featured: true, pgLink: "kosmetik-beauty" },
    ],
  },
  {
    slug: "haustiere",
    name: "Haustiere",
    description: "Futter, Zubehör und Ausstattung für Hund und Katze im Kaufberatungs-Check.",
    pgLink: "tierbedarf",
    posts: [
      { slug: "haustierbedarf-online-kaufen", title: "Hunde- und Katzenbedarf online kaufen: Der Praxis-Guide", excerpt: "Futterqualität erkennen, die richtige Größe bei Betten und Geschirren finden und worauf du bei Zubehör achten solltest.", date: "18. August 2026", readTime: "6 Min.", featured: true, pgLink: "tierbedarf" },
    ],
  },
  {
    slug: "auto-fahrzeug",
    name: "Auto & Fahrzeugzubehör",
    description: "Dachboxen, Pflegeprodukte und Sicherheitsausstattung fürs Fahrzeug im Kaufberatungs-Check.",
    pgLink: "auto-fahrzeugzubehoer",
    posts: [
      { slug: "auto-zubehoer-kaufratgeber", title: "Auto-Zubehör kaufen: Von der Dachbox bis zur Anhängerkupplung", excerpt: "Traglast, Kompatibilität und Sicherheitsnormen im Überblick – worauf es beim Kauf von Auto-Zubehör wirklich ankommt.", date: "19. August 2026", readTime: "7 Min.", pgLink: "auto-fahrzeugzubehoer" },
    ],
  },
  {
    slug: "spartipps-preisvergleich",
    name: "Spartipps & Preisvergleich",
    description: "So nutzt du Preisvergleiche richtig und sparst bei jedem Einkauf.",
    pgLink: "",
    posts: [
      { slug: "schnaeppchen-tipps-2026", title: "15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro", excerpt: "Wie du nie wieder zu viel bezahlst – diese 15 Tricks funktionieren sofort und kosten dich nichts.", date: "19. Juli 2026", readTime: "6 Min.", featured: true, pgLink: "" },
      { slug: "preisvergleich-tipps", title: "Preisvergleich richtig nutzen: So sparst du bis zu 40%", excerpt: "Gleiche Produkte, verschiedene Preise – manchmal bis zu 40% Unterschied. So nutzt du Preisvergleich optimal.", date: "15. Juli 2026", readTime: "5 Min.", pgLink: "" },
    ],
  },
  {
    slug: "kueche-haushaltsgeraete",
    name: "Küche & Haushaltsgeräte",
    description: "Standmixer, Toaster, Fritteusen und mehr – Kaufberatung für elektrische Küchenhelfer.",
    pgLink: "kueche",
    posts: [
      { slug: "kuechengeraete-vergleich-kaufratgeber", title: "Küchengeräte im Vergleich: Standmixer, Toaster, Fritteuse & Co. richtig wählen", excerpt: "Toaster oder Sandwichmaker? Standmixer oder Küchenmaschine? Kaffeevollautomat oder Kapselmaschine? Der komplette Küchengeräte-Ratgeber mit Preisvergleich.", date: "19. August 2026", readTime: "8 Min.", featured: true, pgLink: "mikrowellen,toaster,standmixer-puerierstaebe,kuechenmaschinen,fritteusen-heissluftfritteusen,kaffeevollautomaten,kochplatten-kochfelder,eierkocher,kleine-kuechengeraete,wasserkocher,kaffeemaschinen" },
    ],
  },
];

// Post dates are hand-authored strings like "17. August 2026" — parse them
// so posts can sort newest-first instead of relying on source order, which
// drifts as posts get added to whichever category they belong to.
const GERMAN_MONTHS: Record<string, number> = {
  januar: 0, februar: 1, märz: 2, april: 3, mai: 4, juni: 5,
  juli: 6, august: 7, september: 8, oktober: 9, november: 10, dezember: 11,
};

function parseGermanDate(date: string): number {
  const match = date.match(/^(\d{1,2})\.\s*(\w+)\s*(\d{4})$/);
  if (!match) return 0;
  const [, day, month, year] = match;
  const monthIndex = GERMAN_MONTHS[month.toLowerCase()];
  if (monthIndex === undefined) return 0;
  return new Date(Number(year), monthIndex, Number(day)).getTime();
}

function byDateDesc<T extends { date: string }>(a: T, b: T): number {
  return parseGermanDate(b.date) - parseGermanDate(a.date);
}

export function getAllPosts(): (BlogPost & { category: BlogCategory })[] {
  return BLOG_CATEGORIES.flatMap((cat) => cat.posts.map((p) => ({ ...p, category: cat }))).sort(byDateDesc);
}

export function getCategory(slug: string): BlogCategory | undefined {
  const category = BLOG_CATEGORIES.find((c) => c.slug === slug);
  if (!category) return undefined;
  return { ...category, posts: [...category.posts].sort(byDateDesc) };
}

export function getPost(slug: string): (BlogPost & { category: BlogCategory }) | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}

export function pgUrl(categorySlug: string): string {
  if (!categorySlug) return "https://www.preisgucken.de";
  // /kategorie/[slug] is the real dedicated category page (own SEO metadata,
  // vendor filters, subcategory pills) — used whenever a single category
  // applies. Multi-category hubs (e.g. "schlafen,sitzen,gartenmoebel") have
  // no single matching dedicated page, so those fall back to the homepage's
  // own multi-category filter instead.
  return categorySlug.includes(",")
    ? `https://www.preisgucken.de/?category=${categorySlug}`
    : `https://www.preisgucken.de/kategorie/${categorySlug}`;
}
