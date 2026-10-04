import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Neues Flaggschiff oder Vorjahresmodell?",
  description: "Smartphone kaufen: Speicher, Kamera, Akku, Display, Updates, Neu oder generalüberholt, 5G und Wasserschutz – worauf es wirklich ankommt und typische Fehler.",
  keywords: ["smartphone kaufen", "handy kaufen ratgeber 2026", "welches smartphone kaufen", "smartphone speicher wieviel gb", "handy kaufberatung", "günstiges smartphone finden", "smartphone display 120 hertz", "smartphone updates jahre", "handy refurbished kaufen", "smartphone speicher 128 oder 256", "5g brauche ich das"],
  openGraph: {
    title: "Neues Flaggschiff oder Vorjahresmodell?",
    description: "Wie viel Speicher brauchst du wirklich und wann lohnt sich ein Vorjahresmodell? Ratgeber mit Preisvergleich.",
    url: "https://www.preisgucken.com/blog/smartphone-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-07-29",
    modifiedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Neues Flaggschiff oder Vorjahresmodell?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/smartphone-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Neues Flaggschiff oder Vorjahresmodell?",
    description: "Wie viel Speicher brauchst du wirklich und wann lohnt sich ein Vorjahresmodell? Ratgeber mit Preisvergleich.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Neues Flaggschiff oder Vorjahresmodell?",
  datePublished: "2026-07-29",
  dateModified: "2026-10-04",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function SmartphoneKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Smartphone kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Neues Flaggschiff oder Vorjahresmodell?</h1>
          <p className="lead text-muted">Neues Flaggschiff oder Vorjahresmodell? Wir zeigen dir, wo sich Sparen lohnt und worauf du wirklich achten solltest.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 29. Juli 2026</span>
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 10 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Wie viel Speicher brauchst du wirklich?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Speicher</th><th>Passt für</th></tr>
              </thead>
              <tbody>
                <tr><td>128 GB</td><td>Normale Nutzung, wenig Fotos/Videos, Cloud-Nutzer</td></tr>
                <tr><td>256 GB</td><td>Standard-Empfehlung für die meisten Nutzer</td></tr>
                <tr><td>512 GB+</td><td>Viele 4K-Videos, Vielfotografierer, kein Cloud-Abo</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Da sich der Speicher später nicht erweitern lässt, lieber eine Stufe großzügiger kalkulieren als knapp.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Worauf es bei der Kamera wirklich ankommt</h2>
          <p>Die Megapixel-Zahl allein sagt wenig über die Bildqualität aus. Wichtiger sind:</p>
          <ul>
            <li><strong>Sensorgröße:</strong> Größere Sensoren sammeln mehr Licht – wichtig bei Dunkelheit</li>
            <li><strong>Optische Bildstabilisierung (OIS):</strong> Verhindert verwackelte Fotos, besonders bei Video</li>
            <li><strong>Anzahl der Objektive:</strong> Weitwinkel und Tele bieten mehr Flexibilität als reine Megapixel-Zahlen</li>
            <li><strong>Software-Verarbeitung:</strong> Computational Photography macht bei ähnlicher Hardware oft den größten Unterschied</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Akku &amp; Ladegeschwindigkeit</h2>
          <ul>
            <li><strong>Akkukapazität:</strong> Ab 4.500 mAh gilt als komfortabel für einen ganzen Tag</li>
            <li><strong>Schnellladung:</strong> 30+ Watt bedeutet meist 0–50% in unter 30 Minuten</li>
            <li><strong>Kabelloses Laden:</strong> Praktisch, aber langsamer als Kabelladen – kein Muss-Kriterium</li>
            <li><strong>Akkugesundheit nach 2 Jahren:</strong> Hersteller mit Software-Akkumanagement altern spürbar besser</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Lohnt sich das Vorjahresmodell?</h2>
          <p>In den meisten Fällen: ja. Ein Jahr altes Flaggschiff kostet oft 30–40% weniger, bietet aber fast identische Alltagsleistung. Sinnvoll ist der Griff zum aktuellen Modell nur, wenn:</p>
          <ul className="mb-0">
            <li>Du die neueste Kameratechnik oder ein spezielles Feature brauchst</li>
            <li>Du das Gerät möglichst lange (5+ Jahre) mit Software-Updates nutzen willst</li>
            <li>Der Akku im Vorjahresmodell bereits spürbar gealtert ist (bei B-Ware/Refurbished)</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Budget-Orientierung</h2>
          <ul>
            <li><strong>Unter 250 €:</strong> Einsteiger-Smartphones, solide für Basisnutzung</li>
            <li><strong>250–500 €:</strong> Gutes Mittelklasse-Segment mit ordentlicher Kamera</li>
            <li><strong>500–900 €:</strong> Obere Mittelklasse, oft mit Flaggschiff-Chip zum kleineren Preis</li>
            <li><strong>Über 900 €:</strong> Aktuelle Flaggschiffe mit bester verfügbarer Kamera- und Displaytechnik</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Die Preise für ein Modell fallen oft stark, sobald der Nachfolger angekündigt wird. Ein Preisvergleich zwischen Händlern spart zusätzlich oft 50–150 €. Vergleiche jetzt auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Elektronik &amp; Smartphones.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Display: Was ist Marketing, was bringt Mehrwert?</h2>
          <ul>
            <li><strong>OLED und LCD:</strong> OLED-Displays zeigen tiefes Schwarz und kräftige Farben, LCD ist oft günstiger.</li>
            <li><strong>120 Hertz:</strong> Eine hohe Bildwiederholrate macht Scrollen flüssiger, kostet aber Akku. Für viele Nutzer reicht 60 bis 90 Hertz.</li>
            <li><strong>Helligkeit:</strong> Wichtig für die Ablesbarkeit in der Sonne.</li>
          </ul>
          <p className="small text-muted">Viele Hersteller werben mit langen Funktionslisten. Prüfe, was du im Alltag wirklich nutzt.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Updates und Sicherheit</h2>
          <p>Wie lange ein Hersteller Software- und Sicherheitsupdates liefert, entscheidet über die sinnvolle Nutzungsdauer. Prüfe vor dem Kauf, für wie viele Jahre Updates versprochen werden. Ein günstiges Gerät mit kurzer Update-Zeit ist am Ende nicht immer die bessere Wahl.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Neu, Vorjahresmodell oder generalüberholt?</h2>
          <ul>
            <li><strong>Neu:</strong> Volle Gewährleistung und aktuelle Technik.</li>
            <li><strong>Vorjahresmodell:</strong> Oft deutlich günstiger und für die meisten Nutzer fast gleichwertig.</li>
            <li><strong>Generalüberholt (Refurbished):</strong> Günstiger, mit Garantie vom Händler. Achte auf Zustandsangabe, Akku-Zustand und Garantiedauer.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">5G, Wasserschutz und weitere Merkmale</h2>
          <ul>
            <li><strong>5G:</strong> Nützlich, wenn dein Netz es gut abdeckt. Für Alltag und Streaming reicht oft auch gutes LTE.</li>
            <li><strong>Wasserschutz:</strong> IP67 oder IP68 schützen vor Spritzwasser und kurzem Untertauchen, sind aber kein Freibrief für Schwimmen und Duschen.</li>
            <li><strong>SIM und eSIM:</strong> Prüfe, ob du Dual-SIM oder eSIM brauchst.</li>
          </ul>
          <p className="small text-muted">Zum Zubehör passen die Ratgeber <a href="/blog/handyhuellen-kaufen-material-schutz/">Handyhülle kaufen</a>, <a href="/blog/kabel-und-adapter-kaufen-ratgeber/">Kabel und Adapter</a> und <a href="/blog/kopfhoerer-typ-in-ear-open-ear-over-ear/">Kopfhörer</a>.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Smartphone-Kauf</h2>
          <ol>
            <li><strong>Nur auf Megapixel achten:</strong> Sensor, Software und Stabilisierung entscheiden über die Bildqualität.</li>
            <li><strong>Zu wenig Speicher kaufen:</strong> Er lässt sich später nicht erweitern.</li>
            <li><strong>Updates ignorieren:</strong> Ohne Updates sinkt die Sicherheit.</li>
            <li><strong>Marketing-Werte überbewerten:</strong> 120 Hertz oder viele Kameras sind nicht für jeden relevant.</li>
            <li><strong>Zubehör vergessen:</strong> Hülle, Ladegerät und Schutzfolie gehören ins Budget.</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Smartphone-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Aktuelle Smartphones aller Marken im direkten Preisvergleich.</p>
          <a href="https://www.preisgucken.de/kategorie/smartphones" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Smartphone-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
