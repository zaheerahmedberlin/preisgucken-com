export const metadata = {
  title: "Kontakt – Preisgucken.com",
  description: "Kontaktmöglichkeiten für Preisgucken.com.",
};

export default function KontaktPage() {
  return (
    <main className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="fw-bold mb-4">Kontakt</h1>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Allgemeine Anfragen</h2>
        <p className="small text-muted mb-1">
          E-Mail: <a href="mailto:info@preisgucken.de">info@preisgucken.de</a>
        </p>
        <p className="small text-muted mb-0">
          Tel: <a href="tel:+493035055214">+49 30 35055214</a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">B2B & Kooperationen</h2>
        <p className="small text-muted mb-0">
          E-Mail: <a href="mailto:b2b@preisgucken.de">b2b@preisgucken.de</a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Adresse</h2>
        <p className="small text-muted mb-0">
          Zaheer Ahmed – Preisgucken<br />
          Ollenhauerstr. 95A<br />
          13403 Berlin<br />
          Deutschland
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">Preisvergleich</h2>
        <p className="small text-muted mb-0">
          Für Preisvergleiche und Produktsuche besuchen Sie:{" "}
          <a href="https://www.preisgucken.de" target="_blank" rel="noopener noreferrer">
            www.preisgucken.de
          </a>
        </p>
      </section>
    </main>
  );
}
