import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haarpflege kaufen: Das passt zu deinem Haartyp",
  description: "Shampoo, Spülung, Kur und Hitzeschutz: So wählst du Haarpflege passend zu Haartyp und Kopfhaut, liest Inhaltsstoffe und vergleichst Preise richtig.",
  keywords: ["haarpflege kaufen", "shampoo für haartyp", "haarkur oder spülung", "hitzeschutz haare", "haarpflege inhaltsstoffe"],
  openGraph: {
    title: "Haarpflege kaufen: Shampoo, Kur und Co. passend zum Haartyp",
    description: "Shampoo, Spülung, Kur und Hitzeschutz: So wählst du Haarpflege passend zu Haartyp und Kopfhaut, liest Inhaltsstoffe und vergleichst Preise richtig.",
    url: "https://www.preisgucken.com/blog/haarpflege-kaufen-haartyp-guide/",
    type: "article",
    publishedTime: "2026-10-13",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Haarpflege kaufen: Shampoo, Kur und Co. passend zum Haartyp" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/haarpflege-kaufen-haartyp-guide/" },
  twitter: {
    card: "summary_large_image",
    title: "Haarpflege kaufen: Shampoo, Kur und Co. passend zum Haartyp",
    description: "Shampoo, Spülung, Kur und Hitzeschutz: So wählst du Haarpflege passend zu Haartyp und Kopfhaut, liest Inhaltsstoffe und vergleichst Preise richtig.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Haarpflege kaufen: Shampoo, Kur und Co. passend zum Haartyp",
  datePublished: "2026-10-13",
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
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Haarpflege kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Beauty & Pflege</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Haarpflege kaufen: Shampoo, Kur und Co. passend zum Haartyp</h1>
          <p className="lead text-muted">Nicht jedes Shampoo passt zu jedem Haar. Wir zeigen, wie du deinen Haartyp erkennst, welche Produktarten sich lohnen und worauf du bei Zutaten und Preisen achten kannst.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 13. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Zuerst den Haartyp bestimmen</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Haartyp</th><th>Typische Merkmale</th><th>Worauf du bei der Pflege achten kannst</th></tr>
              </thead>
              <tbody>
                <tr><td>Fein und schnell fettend</td><td>Wenig Volumen, Ansatz wird rasch strähnig</td><td>Leichte Shampoos, Pflege nur in die Längen</td></tr>
                <tr><td>Trocken und kraus</td><td>Spröde, neigt zu Frizz</td><td>Feuchtigkeitsspendende Pflege, Spülung und Kur</td></tr>
                <tr><td>Gefärbt oder blondiert</td><td>Strapazierte Längen, Farbe verblasst</td><td>Pflege für coloriertes Haar, schonende Reinigung</td></tr>
                <tr><td>Lockig oder wellig</td><td>Braucht Feuchtigkeit und Definition</td><td>Milde Reinigung, Leave-in, wenig Hitze</td></tr>
                <tr><td>Normal</td><td>Wenige Probleme</td><td>Ausgewogene Pflege nach Bedarf</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">
            Die Kopfhaut hat oft einen anderen Bedarf als die Längen: Sie kann schnell fetten, während die
            Spitzen trocken sind. Dann gilt: Shampoo für die Kopfhaut, Pflege für die Längen.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die Produktarten im Überblick</h2>
          <ul>
            <li><strong>Shampoo:</strong> Reinigt Haar und Kopfhaut. Wähle es nach Kopfhaut und Haartyp.</li>
            <li><strong>Spülung (Conditioner):</strong> Glättet die Oberfläche und erleichtert das Kämmen. Sie kommt in die Längen, nicht an den Ansatz.</li>
            <li><strong>Haarkur und Maske:</strong> Intensivpflege, die du je nach Zustand ein- bis zweimal pro Woche oder seltener nutzt. Beachte die Einwirkzeit.</li>
            <li><strong>Leave-in und Öle:</strong> Bleiben im Haar, schützen vor Reibung und Frizz. Wenige Tropfen reichen oft.</li>
            <li><strong>Styling und Hitzeschutz:</strong> Hitzeschutz gehört vor Föhn, Glätteisen und Lockenstab, um die Haare zu schonen.</li>
            <li><strong>Kopfhautpflege:</strong> Peelings oder Seren für die Kopfhaut sind eine Ergänzung, kein Muss.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Inhaltsstoffe lesen: Was die Liste verrät</h2>
          <p>
            Auf der Verpackung steht die Zutatenliste (INCI) in absteigender Reihenfolge der Menge. Die ersten
            Einträge machen den größten Teil des Produkts aus. Begriffe wie „Silikone“, „sulfatfrei“ oder
            „parfümfrei“ sind Werbeversprechen, deren Nutzen vom Haartyp abhängt. Sulfatfrei ist nicht
            automatisch besser, und Silikone sind nicht per se schlecht. Entscheidend ist, wie dein Haar und
            deine Kopfhaut reagieren. Bei empfindlicher Haut oder bekannten Allergien lohnt der Blick auf
            Duftstoffe und Konservierungsmittel.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Waschen, Pflegen, Stylen: Eine einfache Routine</h2>
          <ol>
            <li><strong>Waschen:</strong> Shampoo in die Handflächen geben, aufschäumen und vor allem an der Kopfhaut verteilen. Gründlich ausspülen.</li>
            <li><strong>Pflegen:</strong> Spülung oder Kur in die Längen geben, Einwirkzeit beachten, ausspülen.</li>
            <li><strong>Trocknen:</strong> Haar vorsichtig ausdrücken statt rubbeln. Bei Hitze mit mittlerer Temperatur und Abstand föhnen.</li>
            <li><strong>Stylen:</strong> Vorher Hitzeschutz auftragen. Verwende Hitzegeräte nicht höher als nötig.</li>
          </ol>
          <p>
            Wie oft du wäschst, hängt vom Haar ab. Es gibt keine Regel für alle, und viele Menschen merken
            es selbst, wenn der Ansatz fettet oder die Kopfhaut spannt.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Typische Fehler bei der Haarpflege</h2>
          <ul>
            <li><strong>Zu viel Produkt:</strong> Eine kleine Menge reicht, mehr belastet das Haar und die Haut.</li>
            <li><strong>Spülung am Ansatz:</strong> Sie beschwert, besonders bei feinem Haar.</li>
            <li><strong>Zu heiß föhnen und stylen:</strong> Hitze schädigt Haare langfristig.</li>
            <li><strong>Pflege nicht wechseln:</strong> Jahreszeit, Hormone und Styling können den Bedarf verändern.</li>
            <li><strong>Jedes Versprechen glauben:</strong> Kein Produkt repariert gespaltene Spitzen dauerhaft. Schneiden bleibt die Lösung.</li>
          </ul>
          <p className="small text-muted">
            Bei starkem Haarausfall, anhaltendem Juckreiz oder Schuppen, die sich nicht bessern, hilft eine
            ärztliche Abklärung mehr als ein neues Produkt. Dieser Beitrag ist keine medizinische Beratung.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Preise vergleichen und Packungen richtig lesen</h2>
          <ul>
            <li><strong>Preis pro 100 ml:</strong> Vergleiche nicht den Packungspreis, sondern den Preis pro 100 ml, weil die Füllmengen stark variieren.</li>
            <li><strong>Reisegrößen und Sets:</strong> Praktisch zum Ausprobieren. Pro Milliliter sind sie meist teurer.</li>
            <li><strong>Originalprodukte:</strong> Achte auf seriöse Händler und gültige Haltbarkeit (PAO-Symbol: Haltbarkeit nach dem Öffnen).</li>
            <li><strong>Weitere Pflege:</strong> Ideen für Gesicht und Duft stehen in den Ratgebern <a href="/blog/gesichtspflege-routine-hauttyp-guide/">Gesichtspflege-Routine</a> und <a href="/blog/parfuem-kaufen-edt-edp-guide/">Parfüm kaufen</a>.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Jahreszeit und Alltag: Pflege anpassen</h2>
          <ul>
            <li><strong>Winter:</strong> Heizungsluft und Mützen trocknen Haar und Kopfhaut aus und fördern statische Aufladung. Etwas mehr Feuchtigkeitspflege und ein Leave-in helfen, und die Haare sollten vollständig trocken sein, bevor du die Mütze aufsetzt.</li>
            <li><strong>Sommer:</strong> Sonne, Chlor und Salzwasser trocknen die Längen aus. Spüle die Haare nach dem Schwimmen mit klarem Wasser aus, und nutze bei viel Sonne Produkte mit UV-Schutz oder trage eine Kopfbedeckung.</li>
            <li><strong>Sport und Alltag:</strong> Wer oft schwitzt oder Helm und Zopf trägt, wäscht die Kopfhaut häufiger mit mildem Shampoo. Straffe Frisuren belasten den Ansatz, daher lohnt es sich, sie zu variieren.</li>
            <li><strong>Ausprobieren statt wechseln:</strong> Gib einem neuen Produkt einige Anwendungen, bevor du urteilst. Reisegrößen helfen, ohne große Packung zu kaufen.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Haarpflege im Preisvergleich</h3>
          <p className="text-muted small mb-3">Shampoo, Spülung, Kuren und Styling-Produkte aus deutschen Online-Shops vergleichen.</p>
          <a href="https://www.preisgucken.de/kategorie/haarpflege" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
