export const metadata = {
  title: "Über uns – Preisgucken.com",
  description: "Wer hinter Preisgucken.com steht, wie unsere Kaufberatungen entstehen und wie wir uns finanzieren.",
};

export default function UeberUnsPage() {
  return (
    <main className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="fw-bold mb-4">Über uns</h1>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Was ist Preisgucken.com?</h2>
        <p className="text-muted">
          Preisgucken.com ist der redaktionelle Ratgeber-Blog von{" "}
          <a href="https://www.preisgucken.de" target="_blank" rel="noopener noreferrer">Preisgucken.de</a>,
          unserer Preisvergleichs-Suchmaschine für deutsche Online-Shops. Während Preisgucken.de
          tagesaktuelle Preise aus hunderten Shops vergleicht, erklären wir hier, worauf es beim Kauf
          in bestimmten Produktkategorien ankommt – bevor Sie überhaupt beim Preisvergleich landen.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Wer steckt dahinter?</h2>
        <p className="text-muted">
          Preisgucken wird von <strong>Zaheer Ahmed</strong> in Berlin betrieben (vollständige Angaben in
          unserem <a href="/impressum">Impressum</a>). Es ist kein großes Redaktionsteam, sondern ein
          unabhängig geführtes Projekt – das bedeutet auch: keine bezahlten Produktplatzierungen, keine
          gesponserten „Testsieger", keine versteckten Werbepartnerschaften jenseits der offengelegten
          Affiliate-Links.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Wie entstehen unsere Ratgeber?</h2>
        <p className="text-muted">
          Jeder Ratgeber-Artikel entsteht in zwei Schritten: Erst recherchieren wir, welche Fragen und
          Kriterien beim Kauf einer bestimmten Produktkategorie wirklich relevant sind. Danach gleichen
          wir das mit echten, aktuell verfügbaren Produkten aus dem Preisvergleich auf Preisgucken.de ab –
          die in unseren Artikeln genannten Beispielprodukte und Preise sind reale Angebote zum
          Zeitpunkt der Veröffentlichung, keine erfundenen Platzhalter. Da sich Preise täglich ändern
          können, empfehlen wir vor dem Kauf immer einen aktuellen Preisvergleich.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Wie finanzieren wir uns?</h2>
        <p className="text-muted">
          Über Affiliate-Links: Wenn Sie über einen Link auf dieser Seite bei einem Händler einkaufen,
          erhalten wir gegebenenfalls eine Provision – ohne Mehrkosten für Sie. Das beeinflusst nicht,
          welche Produkte wir in unseren Ratgebern als Beispiel nennen; wir wählen sie danach aus, was
          zum jeweiligen Thema tatsächlich verfügbar ist, nicht danach, welcher Händler die höchste
          Provision zahlt. Details dazu auch im <a href="/impressum">Impressum</a>.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Kontakt</h2>
        <p className="text-muted mb-0">
          Fragen, Feedback oder Kooperationsanfragen? Alle Kontaktmöglichkeiten finden Sie auf unserer{" "}
          <a href="/kontakt">Kontakt-Seite</a>.
        </p>
      </section>
    </main>
  );
}
