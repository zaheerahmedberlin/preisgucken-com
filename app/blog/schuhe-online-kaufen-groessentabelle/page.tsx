import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schuhgröße online richtig bestimmen",
  description: "Schuhe online kaufen: Fußlänge messen, Schuhgröße berechnen, EU-, US- und UK-Größen vergleichen, Passform nach Schuhart und Rückgabe-Checkliste.",
  keywords: ["schuhgröße bestimmen", "eu us uk schuhgrößen tabelle", "schuhe online kaufen ratgeber", "fußlänge messen anleitung", "sportschuhe kaufen tipps", "schuhe passform online", "schuhgröße berechnen", "schuhgröße fußlänge cm", "pariser stich", "sportschuhe größer kaufen", "schuhe online zurückschicken"],
  openGraph: {
    title: "Schuhgröße online richtig bestimmen",
    description: "EU-, US- und UK-Größen im Vergleich, Fußlänge richtig messen und worauf du achten solltest.",
    url: "https://www.preisgucken.com/blog/schuhe-online-kaufen-groessentabelle/",
    type: "article",
    publishedTime: "2026-08-19",
    modifiedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Schuhgröße online richtig bestimmen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/schuhe-online-kaufen-groessentabelle/" },
  twitter: {
    card: "summary_large_image",
    title: "Schuhgröße online richtig bestimmen",
    description: "EU-, US- und UK-Größen im Vergleich, Fußlänge richtig messen und worauf du achten solltest.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Schuhgröße online richtig bestimmen",
  datePublished: "2026-08-19",
  dateModified: "2026-10-04",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function SchuheOnlineKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Schuhe online kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Schuhgröße online richtig bestimmen</h1>
          <p className="lead text-muted">Die häufigste Retourenursache beim Schuhkauf ist die falsche Größe. Mit der richtigen Messmethode passt es beim ersten Mal.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. August 2026</span>
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Fußlänge zuhause richtig messen</h2>
          <ol>
            <li>Stell dich mit dem Fuß auf ein Blatt Papier, Ferse an die Wand</li>
            <li>Markiere die längste Stelle deines Fußes (meist die große Zehe)</li>
            <li>Miss den Abstand von der Wand bis zur Markierung in Zentimetern</li>
            <li>Miss am besten abends, wenn der Fuß leicht angeschwollen ist – das entspricht der realen Belastung</li>
          </ol>
          <p className="small text-muted">Miss beide Füße einzeln: Die meisten Menschen haben leicht unterschiedlich große Füße. Orientiere dich beim Kauf am größeren Wert.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: EU-, US- und UK-Größen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Fußlänge (cm)</th><th>EU-Größe</th><th>UK-Größe</th><th>US-Größe (Damen)</th></tr>
              </thead>
              <tbody>
                <tr><td>23,5 cm</td><td>37</td><td>4</td><td>6,5</td></tr>
                <tr><td>24,1 cm</td><td>38</td><td>5</td><td>7,5</td></tr>
                <tr><td>24,8 cm</td><td>39</td><td>6</td><td>8,5</td></tr>
                <tr><td>25,4 cm</td><td>40</td><td>6,5</td><td>9</td></tr>
                <tr><td>26,7 cm</td><td>42</td><td>8</td><td>10,5</td></tr>
              </tbody>
            </table>
          </div>
          <p className="small text-muted">Diese Tabelle dient als Orientierung – Marken aus USA/UK weichen teils stärker von der EU-Norm ab als europäische Hersteller. Immer die Größentabelle des jeweiligen Shops prüfen.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Material beeinflusst die Passform</h2>
          <div className="row g-3">
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">👞 Leder</h3>
                <p className="small text-muted mb-0">Dehnt sich mit der Zeit leicht, anfangs eher eng kaufen. Passt sich individuell an den Fuß an.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🏃 Mesh/Textil</h3>
                <p className="small text-muted mb-0">Dehnt sich kaum, exakte Größe wichtig. Typisch bei Sportschuhen für optimalen Halt.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🧦 Synthetik</h3>
                <p className="small text-muted mb-0">Kaum Dehnung, dafür meist günstiger. Größentabelle des Herstellers besonders genau prüfen.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Worauf du beim Online-Kauf noch achten solltest</h2>
          <ul>
            <li><strong>Rückgaberecht:</strong> Bei Online-Bestellungen in Deutschland gilt ein 14-tägiges Widerrufsrecht – Schuhe innen anprobiert und ungetragen zurückschicken</li>
            <li><strong>Zwei Größen bestellen:</strong> Bei unsicherer Passform lohnt es sich, zwei Größen zu bestellen und eine zurückzuschicken</li>
            <li><strong>Kundenbewertungen zur Passform:</strong> Viele Shops zeigen an, ob ein Modell eher groß oder klein ausfällt</li>
            <li><strong>Breite beachten:</strong> Manche Hersteller bieten schmale, normale und weite Passformen an – besonders bei Sportschuhen relevant</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Auslaufende Kollektionen und Vorjahresmodelle unterscheiden sich meist nur in der Farbe – hier lässt sich oft 30–50% sparen, ohne bei der Qualität Abstriche zu machen.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schuhgröße berechnen: die Faustformel</h2>
          <p>Wenn die Größentabelle eines Shops fehlt, hilft eine einfache Rechnung. Die europäische Schuhgröße (Pariser Stich) steigt mit jeder Nummer um etwa zwei Drittel eines Zentimeters:</p>
          <p><strong>Schuhgröße = (Fußlänge in cm + 1 bis 1,5 cm Zugabe) × 1,5</strong></p>
          <p>Die Zugabe sorgt dafür, dass deine Zehen im Schuh Platz haben. Beispiel: Bei einer Fußlänge von 25 cm rechnest du (25 + 1,5) × 1,5 und kommst auf etwa 39,75, also Größe 40. Bei 26,7 cm ergibt (26,7 + 1) × 1,5 rund 41,5 und damit Größe 42, so wie in der Tabelle oben.</p>
          <p className="small text-muted">Auch das ist eine Orientierung: Je nach Hersteller und Leisten (Passform des Schuhs) fällt dieselbe Größe unterschiedlich aus.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Passform nach Schuhart</h2>
          <ul>
            <li><strong>Sport- und Laufschuhe:</strong> Der Fuß schwillt beim Laufen an und die Zehen brauchen Spielraum. Viele Läufer wählen deshalb eine halbe bis eine Nummer größer als bei Alltagsschuhen.</li>
            <li><strong>Sneaker und Alltagsschuhe:</strong> Hier gilt meist die gemessene Größe plus Zugabe, genauer Sitz an Ferse und Mittelfuß ist wichtiger als Länge allein.</li>
            <li><strong>Lederschuhe und Stiefel:</strong> Leder gibt mit der Zeit nach. Bei Stiefeln solltest du an die Socken denken, die du darin trägst.</li>
            <li><strong>Sandalen und Hausschuhe:</strong> Die Ferse sollte nicht überstehen, die Zehen nicht über den Rand ragen.</li>
            <li><strong>Kinderschuhe:</strong> Kinderfüße wachsen schnell. Plane etwa einen Daumen breit Platz vor den Zehen ein und miss die Füße regelmäßig nach.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Checkliste vor dem Bestellen</h2>
          <ol>
            <li>Fußlänge abends gemessen, beide Füße, der größere Wert zählt.</li>
            <li>Größentabelle des Herstellers geprüft, nicht nur die allgemeine EU-Größe.</li>
            <li>Kundenbewertungen zur Passform gelesen: fällt das Modell eher klein oder groß aus?</li>
            <li>Rückgabebedingungen geklärt: Wer trägt die Rücksendekosten, und wie lange hast du Zeit?</li>
            <li>Bei Unsicherheit zwei Größen bestellt und die nicht passende zurückgeschickt.</li>
          </ol>
          <p className="small text-muted">Schuhe nur drinnen und auf sauberem Boden anprobieren und die Originalverpackung aufheben, damit die Rückgabe problemlos klappt.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Schuhkauf im Internet</h2>
          <ol>
            <li><strong>Die Größe vom alten Schuh übernehmen:</strong> Marken und Modelle fallen unterschiedlich aus. Verlasse dich lieber auf deine gemessene Fußlänge.</li>
            <li><strong>Morgens messen:</strong> Am Abend sind die Füße leicht geschwollen. Das entspricht der Belastung im Alltag.</li>
            <li><strong>Die Breite ignorieren:</strong> Ein zu enger Schuh drückt auch dann, wenn die Länge stimmt.</li>
            <li><strong>Rückgabebedingungen nicht lesen:</strong> Frist und Rücksendekosten unterscheiden sich von Shop zu Shop.</li>
            <li><strong>Nur nach dem Preis entscheiden:</strong> Ein günstiger Schuh, der nicht passt, ist am Ende teurer als ein passender.</li>
          </ol>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Schuhe im Preisvergleich</h3>
          <p className="text-muted small mb-3">Damen-, Herren- und Sportschuhe aus deutschen Online-Shops – jetzt den günstigsten Preis finden.</p>
          <a href="https://www.preisgucken.de/kategorie/schuhe" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Schuh-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
