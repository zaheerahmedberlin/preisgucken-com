export const metadata = {
  title: "AGB – Preisgucken.com",
  description: "Allgemeine Geschäftsbedingungen von Preisgucken.com.",
  robots: { index: true, follow: false },
};

export default function AgbPage() {
  return (
    <main className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="fw-bold mb-2">Allgemeine Geschäftsbedingungen (AGB)</h1>
      <p className="text-muted small mb-5">Stand: Juli 2026</p>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 1 Geltungsbereich</h2>
        <p className="small text-muted">
          Diese Allgemeinen Geschäftsbedingungen gelten für die Nutzung von Preisgucken.com
          (nachfolgend „Website"), betrieben von Zaheer Ahmed (Einzelunternehmen), Berlin.
          Die Website ist ein kostenloser Informationsdienst mit Blog-Inhalten und einem
          KI-gestützten TikTok-Skriptgenerator.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 2 Leistungsbeschreibung</h2>
        <p className="small text-muted">
          Preisgucken.com bietet redaktionelle Inhalte (Blog), einen KI-Skriptgenerator für
          Social-Media-Content sowie Verweise auf das Preisvergleichsportal preisgucken.de.
          Die Website vermittelt ausschließlich Informationen. Kaufverträge kommen ausschließlich
          zwischen dem Nutzer und dem jeweiligen Händler zustande.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 3 KI-generierte Inhalte</h2>
        <p className="small text-muted">
          Der TikTok-Skriptgenerator erzeugt Inhalte mithilfe künstlicher Intelligenz (Groq / LLaMA).
          Die generierten Skripte sind Vorschläge und ersetzen keine professionelle Beratung.
          Wir übernehmen keine Haftung für die Richtigkeit, Vollständigkeit oder Eignung der
          generierten Inhalte. Die Nutzung erfolgt auf eigene Verantwortung.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 4 Affiliate-Hinweis</h2>
        <p className="small text-muted">
          Diese Website enthält Affiliate-Links zu externen Händlern. Bei einem Kauf über
          diese Links können wir eine Provision erhalten, ohne dass für den Nutzer Mehrkosten
          entstehen. Diese Provision dient der Finanzierung des kostenlosen Informationsangebots.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 5 Haftungsausschluss</h2>
        <p className="small text-muted">
          Wir übernehmen keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der
          auf dieser Website bereitgestellten Inhalte. Eine Haftung für Schäden, die durch die
          Nutzung entstehen, ist – soweit gesetzlich zulässig – ausgeschlossen.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 6 Verfügbarkeit</h2>
        <p className="small text-muted">
          Wir bemühen uns um eine hohe Verfügbarkeit der Website, können diese jedoch nicht
          garantieren. Wartungsarbeiten, technische Störungen oder höhere Gewalt können zu
          vorübergehenden Ausfällen führen.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 7 Anwendbares Recht</h2>
        <p className="small text-muted">
          Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist Berlin.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 8 Änderungen der AGB</h2>
        <p className="small text-muted">
          Wir behalten uns vor, diese AGB jederzeit zu ändern. Die aktuelle Version ist stets
          unter preisgucken.com/agb abrufbar.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">§ 9 Kontakt</h2>
        <p className="small text-muted mb-0">
          Zaheer Ahmed – Preisgucken<br />
          E-Mail: <a href="mailto:info@preisgucken.de">info@preisgucken.de</a>
        </p>
      </section>
    </main>
  );
}
