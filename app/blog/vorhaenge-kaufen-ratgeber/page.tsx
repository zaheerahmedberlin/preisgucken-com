import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Welcher Vorhang taugt wofür?",
  description: "Vorhänge kaufen: Typen, Verdunkelung, richtige Größe und Stoffmenge, Aufhängung, Thermo- und Schallschutz, Sicherheit mit Kindern und Pflege im Überblick.",
  keywords: ["vorhänge kaufen", "verdunkelungsvorhang ratgeber", "schallschutzvorhang", "gardinen vs vorhänge", "vorhang stoffarten", "vorhänge kaufberatung 2026", "vorhang stoffmenge faltenfaktor", "gardinenstange oder schiene", "verdunkelungsvorhang kaufen", "vorhänge waschen", "vorhang kinder sicherheit"],
  openGraph: {
    title: "Welcher Vorhang taugt wofür?",
    description: "Verdunkelung, Schallschutz oder Deko? Der komplette Ratgeber für den richtigen Vorhang.",
    url: "https://www.preisgucken.com/blog/vorhaenge-kaufen-ratgeber/",
    type: "article",
    publishedTime: "2026-07-29",
    modifiedTime: "2026-10-04",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Welcher Vorhang taugt wofür?" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/vorhaenge-kaufen-ratgeber/" },
  twitter: {
    card: "summary_large_image",
    title: "Welcher Vorhang taugt wofür?",
    description: "Verdunkelung, Schallschutz oder Deko? Der komplette Ratgeber für den richtigen Vorhang.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Welcher Vorhang taugt wofür?",
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

export default function VorhaengeKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Vorhänge kaufen Ratgeber
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Welcher Vorhang taugt wofür?</h1>
          <p className="lead text-muted">Nicht jeder Vorhang kann alles – wir zeigen dir, welcher Stoff für welchen Zweck taugt und wie du beim Kauf nichts falsch machst.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 29. Juli 2026</span>
            <span>🔄 Aktualisiert: 4. Oktober 2026</span>
            <span>⏱ 9 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 1: Welcher Vorhangtyp löst welches Problem?</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Vorhangtyp</th><th>Löst dieses Problem</th><th>Typischer Einsatzort</th></tr>
              </thead>
              <tbody>
                <tr><td>Verdunkelungsvorhang (Blackout)</td><td>Lichteinfall, Straßenlaternen, früher Sonnenaufgang</td><td>Schlafzimmer</td></tr>
                <tr><td>Schallschutzvorhang</td><td>Straßenlärm, hellhörige Wände, Nachbarn</td><td>Schlafzimmer, Altbau</td></tr>
                <tr><td>Thermovorhang</td><td>Kälte an Fenstern, hohe Heizkosten</td><td>Wohnzimmer, Altbau</td></tr>
                <tr><td>Lichtdurchlässiger Vorhang (Leinenoptik)</td><td>Sichtschutz ohne Verdunkelung</td><td>Wohnzimmer, Küche</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 2: Worauf es bei Verdunkelungsvorhängen ankommt</h2>
          <p>Nicht jeder dunkle Vorhang verdunkelt wirklich gut. Achte auf diese Merkmale:</p>
          <ul>
            <li><strong>Mehrschichtiger Aufbau:</strong> Verdunkelungsvorhänge mit 2–3 Lagen blocken deutlich mehr Licht als einlagige Stoffe</li>
            <li><strong>Breite Überlappung:</strong> Der Vorhang sollte seitlich 10–15 cm über das Fenster hinausragen, um Lichtspalten zu vermeiden</li>
            <li><strong>Deckenhohe Montage:</strong> Je näher an der Decke montiert, desto weniger Licht kommt von oben herein</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 3: Die richtige Größe ausmessen</h2>
          <ol>
            <li><strong>Breite:</strong> Fensterbreite × 1,5–2 für schöne Faltenwürfe (nicht 1:1 messen)</li>
            <li><strong>Länge bis zur Fensterbank:</strong> Fensterbank plus 1–2 cm für einen sauberen Abschluss</li>
            <li><strong>Bodenlange Vorhänge:</strong> 1–2 cm über dem Boden schweben lassen, damit sie nicht schleifen</li>
          </ol>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 4: Budget & Qualität</h2>
          <ul>
            <li><strong>Unter 30 €:</strong> Einfache, meist einlagige Vorhänge ohne besondere Funktion</li>
            <li><strong>30–70 €:</strong> Solide Verdunkelungs- oder Thermovorhänge mit gutem Faltenwurf</li>
            <li><strong>70–100 €:</strong> Hochwertige Schallschutz- und Verdunkelungsvorhänge mit mehrlagigem Aufbau</li>
          </ul>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Vorhänge in Standardgrößen sind meist günstiger als Sonderanfertigungen. Ein Preisvergleich zwischen Anbietern lohnt sich besonders bei Sets für mehrere Fenster – schau auf <a href="https://www.preisgucken.de" target="_blank" rel="noopener">preisgucken.de</a> unter Wohntextilien &amp; Vorhänge.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Schritt 5: Pflege-Tipps für lange Freude</h2>
          <ul className="mb-0">
            <li>Verdunkelungsvorhänge meist bei 30° schonend waschen, nicht in den Trockner</li>
            <li>Regelmäßig absaugen reduziert Staub und Hausstaubmilben</li>
            <li>Vor dem Waschen immer das Pflegeetikett prüfen – beschichtete Stoffe vertragen keine hohen Temperaturen</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Stoffmenge und Faltenwurf</h2>
          <p>Je mehr Falten du möchtest, desto mehr Stoff brauchst du. Eine schlichte Optik gelingt mit etwa dem 1,5- bis 2-Fachen der Fensterbreite, ein üppiger Faltenwurf braucht das 2- bis 3-Fache. Misst du nur die Fensterbreite, wirken die Vorhänge später zu straff.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Aufhängung: Stange, Schiene oder Ösen</h2>
          <ul>
            <li><strong>Gardinenstange:</strong> Der Klassiker für Ösen- und Schlaufenschals. Die Stange sollte auf beiden Seiten über das Fenster hinausragen.</li>
            <li><strong>Deckenschiene:</strong> Wirkt dezenter und lässt den Vorhang fast schweben, ideal für Verdunkelung nah an der Decke.</li>
            <li><strong>Ösen, Schlaufen oder Faltenband:</strong> Prüfe, ob der Vorhang zur Aufhängung passt. Ösen und Schlaufen laufen leicht auf einer Stange, ein Faltenband braucht Gleiter oder Haken.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Thermo und Schallschutz: Was ein Vorhang kann</h2>
          <p>Dicke, mehrlagige Vorhänge können Geräusche dämpfen und kalte Zugluft vom Fenster abhalten. Sie ersetzen aber keine Fensterdämmung. Das Ergebnis hängt von Stoffdichte, Länge und davon ab, wie dicht der Vorhang am Fenster und an der Wand abschließt.</p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Sicherheit mit Kindern</h2>
          <ul>
            <li>Halte Zugkordeln und Schlaufen außerhalb der Reichweite von Kleinkindern.</li>
            <li>Befestige Vorhänge so, dass Kinder sich nicht daran hochziehen können.</li>
            <li>Lies vor dem Kauf die Sicherheitshinweise des Herstellers.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Die häufigsten Fehler beim Vorhang-Kauf</h2>
          <ol>
            <li><strong>Zu wenig Stoff kaufen:</strong> Ohne Faltenfaktor wirken Vorhänge flach.</li>
            <li><strong>Nur auf die Fensterbreite achten:</strong> Seitliche Überlappung und Montage nah an der Decke sind für die Verdunkelung entscheidend.</li>
            <li><strong>Pflegehinweise ignorieren:</strong> Viele Vorhänge vertragen nur 30 Grad und gehören nicht in den Trockner.</li>
            <li><strong>Die Aufhängung vergessen:</strong> Ösen, Schlaufen und Faltenband brauchen die passende Stange oder Schiene.</li>
            <li><strong>Zu günstig bei Verdunkelung:</strong> Einlagige Stoffe lassen oft viel Licht durch.</li>
          </ol>
          <p className="small text-muted">Passende Ergänzungen für Schlafzimmer und Wohnzimmer findest du im Ratgeber <a href="/blog/matratze-kaufen-ratgeber/">Matratze kaufen</a> und bei den <a href="/blog/wohnaccessoires-beleuchtung-preisvergleich/">Wohnaccessoires</a>.</p>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Vorhänge-Preise vergleichen</h3>
          <p className="text-muted small mb-3">Verdunkelungs-, Schallschutz- und Thermovorhänge im direkten Preisvergleich.</p>
          <a href="https://www.preisgucken.de/kategorie/vorhaenge" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Vorhänge-Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
