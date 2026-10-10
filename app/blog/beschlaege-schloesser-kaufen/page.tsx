import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beschläge & Schlösser kaufen",
  description: "Beschläge und Schlösser kaufen: Profilzylinder, Fenstergriffe, Möbelscharniere, Geländer, Maße, Sicherheit und Montage – mit Preisvergleich.",
  keywords: [
    "beschläge kaufen",
    "möbelbeschläge kaufen ratgeber",
    "türbeschläge material",
    "fenstergriff abschließbar",
    "treppengeländer kaufen",
    "beschläge edelstahl",
    "profilzylinder messen",
    "fenstergriff abschließbar",
    "topfscharnier 35 mm",
    "geländer montieren",
  ],
  openGraph: {
    title: "Beschläge & Schlösser kaufen",
    description: "Edelstahl oder beschichteter Stahl, welches Bohrbild passt und worauf es bei Belastbarkeit ankommt.",
    url: "https://www.preisgucken.com/blog/beschlaege-schloesser-kaufen/",
    type: "article",
    publishedTime: "2026-08-30",
    modifiedTime: "2026-10-05",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "Beschläge & Schlösser kaufen" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/beschlaege-schloesser-kaufen/" },
  twitter: {
    card: "summary_large_image",
    title: "Beschläge & Schlösser kaufen",
    description: "Edelstahl oder beschichteter Stahl, welches Bohrbild passt und worauf es bei Belastbarkeit ankommt.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "Beschläge & Schlösser kaufen",
  datePublished: "2026-08-30",
  dateModified: "2026-10-05",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

export default function BeschlaegeSchloesserKaufenPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Beschläge & Schlösser kaufen
        </nav>

        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Kaufberatung</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">Beschläge & Schlösser kaufen</h1>
          <p className="lead text-muted">
            Ob Fenstergriff, Treppengeländer oder Türbeschlag: Beschläge wirken auf den ersten Blick
            austauschbar, doch Material und Maße entscheiden über Sicherheit und Haltbarkeit. Wir zeigen, worauf es ankommt.
          </p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 30. August 2026</span>
            <span>🔄 Aktualisiert: 5. Oktober 2026</span>
            <span>⏱ 11 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Welcher Beschlag passt zu deinem Projekt?</h2>
          <div className="row g-3">
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🪜 Treppen- &amp; Eingangsgeländer</h3>
                <p className="small text-muted mb-0">
                  Edelstahl-Geländer bieten Witterungsbeständigkeit und hohe Belastbarkeit – die Länge muss
                  exakt zur Treppe bzw. zum Eingangsbereich passen.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🪟 Fenstergriffe</h3>
                <p className="small text-muted mb-0">
                  Abschließbare Fenstergriffe erhöhen die Einbruchsicherheit – erhältlich meist im Set für
                  mehrere Fenster, oft günstiger als Einzelkauf.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🚪 Türbeschläge</h3>
                <p className="small text-muted mb-0">
                  Material und Oberfläche (Edelstahl, Messing, Chrom) bestimmen sowohl Optik als auch
                  Korrosionsbeständigkeit – wichtig besonders bei Außentüren.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card p-4 h-100">
                <h3 className="h6 fw-bold mb-2">🗄 Möbelbeschläge</h3>
                <p className="small text-muted mb-0">
                  Scharniere, Verschlüsse und Griffe für Möbel – hier zählt vor allem, dass Bohrbild und
                  Einbautiefe zum vorhandenen Möbelstück passen.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beispiel aus dem aktuellen Preisvergleich</h2>
          <p>
            Wie sich Größe und Material auf den Preis auswirken, zeigt der aktuelle Preisvergleich auf
            Preisgucken.de: Ein <strong>Edelstahl-Treppengeländer</strong> mit 80 cm und 3 Streben liegt bei
            rund <strong>64 €</strong>, mit 4 Streben bei etwa <strong>66 €</strong> – ein längeres{" "}
            <strong>Eingangsgeländer mit 160 cm</strong> kostet rund <strong>67 €</strong>. Ein{" "}
            <strong>2er-Set abschließbare Fenstergriffe</strong> ist bereits ab rund <strong>14 €</strong>
            zu haben, ein <strong>8er-Set</strong> liegt bei etwa <strong>32 €</strong> – pro Griff also
            günstiger im größeren Set.
          </p>
          <p className="small text-muted">
            Auffällig: bei Fenstergriffen lohnt sich das Set fast immer stärker als der Einzelkauf, während
            bei Geländern die Länge (nicht die Streben-Anzahl) den größten Preisunterschied ausmacht.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Beschlagtypen im Vergleich</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Typ</th><th>Am besten für</th></tr>
              </thead>
              <tbody>
                <tr><td>Edelstahl-Geländer</td><td>Außenbereich, hohe Belastung, Witterung</td></tr>
                <tr><td>Abschließbarer Fenstergriff</td><td>Einbruchschutz, besonders im Erdgeschoss</td></tr>
                <tr><td>Türbeschlag (Chrom/Messing)</td><td>Optik-Abstimmung mit vorhandener Tür</td></tr>
                <tr><td>Möbelbeschlag</td><td>Reparatur/Nachrüstung an vorhandenen Möbeln</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Worauf du vor dem Kauf achten solltest</h2>
          <ol>
            <li><strong>Material zum Einsatzort passend wählen:</strong> Edelstahl empfiehlt sich bei Feuchtigkeit oder im Außenbereich, beschichteter Stahl ist für trockene Innenräume oft ausreichend und günstiger.</li>
            <li><strong>Maße vor dem Kauf exakt nachmessen:</strong> Türgewicht, Türhöhe und vorhandenes Bohrbild mit den Herstellerangaben abgleichen – Einbautiefe und Seitenabstand entscheiden über Funktionsspiel und Montagefreiheit.</li>
            <li><strong>Belastbarkeit nicht unterschätzen:</strong> Geländer und stark frequentierte Beschläge sollten geprüfte Festigkeit haben, besonders wenn Kinder oder hohe Nutzungsfrequenz im Spiel sind.</li>
            <li><strong>Oberflächenfarbe zwischen Herstellern vergleichen:</strong> Auch identisch benannte Farbtöne (z. B. Chrom matt) können zwischen Herstellern leicht abweichen – bei Ergänzungskäufen lohnt der direkte Vergleich vor Ort oder anhand von Produktfotos.</li>
          </ol>
          <div className="alert alert-info small">
            💡 <strong>Sparfuchs-Tipp:</strong> Fenstergriffe und ähnliche Kleinbeschläge im Mehrfach-Set zu
            kaufen ist fast immer günstiger pro Stück als der Einzelkauf – besonders wenn ohnehin mehrere
            Fenster im Haus betroffen sind.
          </div>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Türschloss und Profilzylinder: So misst du richtig</h2>
          <ul>
            <li><strong>Zylinderlänge:</strong> Miss die Länge von der Mitte der Befestigungsschraube bis zum Ende, getrennt für Innen- und Außenseite. Zylinder, die zu weit überstehen, sind ein Sicherheitsrisiko, da sie sich leichter abbrechen lassen.</li>
            <li><strong>Funktion:</strong> Achte auf Notfunktion oder Gefahrenfunktion, falls innen ein Schlüssel steckt, sowie auf die gewünschte Schließanlage, wenn mehrere Türen mit einem Schlüssel schließen sollen.</li>
            <li><strong>Sicherheitsmerkmale:</strong> Hochwertigere Zylinder bieten Schutz gegen Aufbohren, Ziehen und Aufpicken. Prüfzeichen und Herstellerangaben helfen bei der Einordnung.</li>
            <li><strong>Türschild und Rosette:</strong> Ein Schutzbeschlag erschwert den Zugriff auf den Zylinder. Er muss zum Bohrbild der Tür passen.</li>
            <li><strong>Mietwohnung:</strong> Sprich den Austausch von Zylindern mit dem Vermieter ab, damit Schließanlage und Schlüsselübergabe geklärt sind.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Fenstergriffe: Worauf es ankommt</h2>
          <ul>
            <li><strong>Vierkant und Länge:</strong> Gängig ist ein Vierkantstift in 7 mm Stärke. Die benötigte Länge hängt vom Fensterrahmen ab. Miss sie am alten Griff nach.</li>
            <li><strong>Bohrabstand:</strong> Der Abstand der Befestigungsschrauben muss zum bestehenden Beschlag passen, sonst entstehen neue Löcher.</li>
            <li><strong>Abschließbar oder nicht:</strong> Abschließbare Griffe erschweren das Öffnen von außen und können Kinder sichern. Bewahre den Schlüssel gut erreichbar auf, damit das Fenster im Notfall geöffnet werden kann.</li>
            <li><strong>Einbruchschutz:</strong> Ein Griff allein macht ein Fenster nicht einbruchsicher. Ob und wie du nachrüstest, kann der Fachhandel oder die polizeiliche Beratungsstelle zeigen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Möbelbeschläge: Scharniere, Griffe und Schubladen</h2>
          <ul>
            <li><strong>Topfscharniere:</strong> Üblich ist ein Topf mit 35 mm Durchmesser. Prüfe den Anschlag (aufliegend, halb aufliegend, einliegend), der zur Tür passen muss.</li>
            <li><strong>Möbelgriffe:</strong> Entscheidend ist der Lochabstand, auch Bohrabstand genannt. Er wird von Schraube zu Schraube gemessen.</li>
            <li><strong>Schubladenführungen:</strong> Beachte Auszugslänge, Tragkraft und Einbauart (seitlich oder unter der Schublade).</li>
            <li><strong>Material:</strong> Metall ist langlebiger als Kunststoff. In Küche und Bad lohnen sich korrosionsbeständige Oberflächen.</li>
          </ul>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Geländer und Handläufe: Sicherheit zuerst</h2>
          <p>
            Geländer sind Teil der Absturzsicherung. Höhe, Abstände und Befestigung unterliegen
            Vorschriften, die je nach Bundesland und Einsatzort verschieden sind. Das gilt besonders bei
            Treppen im Außenbereich, Balkonen und Terrassen. Informiere dich vorab bei der Bauaufsicht oder
            einem Fachbetrieb, und lass die Montage ausführen, wenn du dir bei der Verankerung nicht sicher bist.
            Wichtig sind der passende Dübel für das Mauerwerk, eine tragfähige Unterkonstruktion und das
            Prüfen der Befestigung nach der Montage. Dieser Hinweis ist eine allgemeine Orientierung und ersetzt
            keine fachliche Beratung.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Material und Pflege</h2>
          <div className="table-responsive">
            <table className="table table-bordered small">
              <thead className="table-dark">
                <tr><th>Material</th><th>Vorteile</th><th>Zu beachten</th></tr>
              </thead>
              <tbody>
                <tr><td>Edelstahl</td><td>Witterungsbeständig, langlebig</td><td>Fingerabdrücke sichtbar; Güte (zum Beispiel V2A oder V4A) für Küstennähe prüfen</td></tr>
                <tr><td>Messing</td><td>Edle Optik, gut zu bearbeiten</td><td>Läuft mit der Zeit an, sofern nicht beschichtet</td></tr>
                <tr><td>Verchromt</td><td>Pflegeleicht, glänzend</td><td>Beschichtung kann bei starker Beanspruchung abnutzen</td></tr>
                <tr><td>Beschichteter Stahl</td><td>Günstig, in vielen Farben</td><td>Nur für trockene Innenräume geeignet</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Reinige Beschläge mit mildem Reiniger und einem weichen Tuch. Scharfe Mittel greifen
            Beschichtungen an. Ein Tropfen Öl (nicht in Schlösser, sondern an beweglichen Teilen) hält
            Scharniere leichtgängig; Schließzylinder pflegst du mit Grafit- oder Spezialmitteln.
            Passendes Werkzeug findest du im Beitrag{" "}
            <a href="/blog/werkstatt-ausstattung-was-du-wirklich-brauchst/">Werkstatt-Ausstattung</a>, und zum
            Messen hilft der Ratgeber{" "}
            <a href="/blog/messwerkzeuge-kaufen-ratgeber/">Messwerkzeuge</a>.
          </p>
        </section>

        <section className="mb-5">
          <h2 className="fw-bold h4 mb-3">Häufige Fehler beim Beschlagkauf</h2>
          <ul>
            <li><strong>Nicht nachmessen:</strong> Bohrabstand, Länge und Anschlag müssen zum Bestand passen.</li>
            <li><strong>Falsches Material:</strong> Beschichteter Stahl rostet im Außenbereich schnell.</li>
            <li><strong>Zu lange Zylinder:</strong> Sie stehen über und bieten Angriffsfläche.</li>
            <li><strong>Schrauben vergessen:</strong> Nicht jedes Set liefert Schrauben für jeden Untergrund mit.</li>
            <li><strong>Rückgabe:</strong> Bei Online-Käufen gilt grundsätzlich ein 14-tägiges Widerrufsrecht. Prüfe Passform, bevor du montierst; nach dem Einbau ist eine Rückgabe oft schwierig.</li>
          </ul>
        </section>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Beschläge & Schlösser im Preisvergleich</h3>
          <p className="text-muted small mb-3">
            Von Fenstergriff bis Treppengeländer — vergleiche Beschläge direkt auf Preisgucken.de.
          </p>
          <a href="https://www.preisgucken.de/kategorie/beschlaege-schloesser" className="btn btn-brand px-4" target="_blank" rel="noopener">
            Zum Preisvergleich →
          </a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
