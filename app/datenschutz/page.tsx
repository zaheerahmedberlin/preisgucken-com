export const metadata = {
  title: "Datenschutzerklärung – Preisgucken.com",
  description: "Datenschutzerklärung von Preisgucken.com gemäß DSGVO / GDPR.",
  robots: { index: true, follow: false },
  alternates: { canonical: "https://www.preisgucken.com/datenschutz/" },
};

export default function DatenschutzPage() {
  return (
    <main className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="brand-heading fw-bold mb-2">Datenschutzerklärung</h1>
      <p className="text-muted small mb-5">Stand: Juli 2026</p>

      <section className="mb-4">
        <h2 className="h5 fw-bold">1. Verantwortlicher</h2>
        <p className="small text-muted">
          Preisgucken™, Inhaber: Zaheer Ahmed, Ollenhauerstr. 95A, 13403 Berlin<br />
          E-Mail: <a href="mailto:info@preisgucken.de">info@preisgucken.de</a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">2. Welche Daten wir erheben</h2>
        <p className="small text-muted">
          Beim Besuch unserer Website werden technisch notwendige Verbindungsdaten verarbeitet,
          insbesondere Ihre IP-Adresse, Datum und Uhrzeit sowie die aufgerufene URL. Das ist nötig,
          damit die Seite ausgeliefert werden kann und der Betrieb sicher bleibt (Art. 6 Abs. 1
          lit. f DSGVO). Ein dauerhaftes Zugriffsprotokoll mit diesen Daten führen wir auf unserem
          Webserver nicht.
        </p>
        <p className="small text-muted mb-0">
          Wir speichern keine personenbezogenen Daten in Benutzerkonten, da keine Registrierung
          erforderlich ist.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">3. Cookies</h2>
        <p className="small text-muted">
          Wir verwenden technisch notwendige Cookies (z. B. für die Admin-Authentifizierung).
          Statistik-Cookies (Google Analytics 4, Google Ireland Limited) setzen wir nur ein, wenn Sie
          in unserem Cookie-Banner ausdrücklich zustimmen (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1
          TDDDG). Ihre Einwilligung können Sie jederzeit unter{" "}
          <a href="/cookie-einstellungen/">„Cookie-Einstellungen"</a> widerrufen.
          Marketing-Cookies werden nicht eingesetzt.
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">4. Hosting (netcup)</h2>
        <p className="small text-muted">
          Diese Website wird bei der netcup GmbH (Daimlerstraße 25, 76185 Karlsruhe, Deutschland)
          auf Servern in Deutschland gehostet. Weitere Informationen:{" "}
          <a href="https://www.netcup.de/kontakt/datenschutzerklaerung.php" target="_blank" rel="noopener noreferrer">
            netcup.de/kontakt/datenschutzerklaerung.php
          </a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">5. KI-Inhalte (Groq / GPT-OSS)</h2>
        <p className="small text-muted">
          Der TikTok-Skriptgenerator nutzt die Groq API (Groq Inc., USA) mit dem Modell
          GPT-OSS 120B. Eingaben werden zur Verarbeitung an Groq übermittelt. Es werden keine
          personenbezogenen Daten eingegeben oder gespeichert. Weitere Informationen:{" "}
          <a href="https://groq.com/privacy-policy/" target="_blank" rel="noopener noreferrer">
            groq.com/privacy-policy
          </a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">6. Affiliate-Links & externe Händler</h2>
        <p className="small text-muted">
          Diese Website enthält Links zu externen Online-Shops (z. B. über preisgucken.de).
          Beim Klick auf solche Links können die jeweiligen Händler durch eigene
          Tracking-Mechanismen Ihre Nutzung erfassen. Wir erhalten ggf. eine Provision über
          Affiliate-Netzwerke (z. B. Awin).
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">7. Ihre Rechte</h2>
        <p className="small text-muted mb-1">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch. Außerdem haben Sie das Recht, eine Beschwerde bei
          der zuständigen Aufsichtsbehörde einzureichen:
        </p>
        <p className="small text-muted mb-0">
          Berliner Beauftragte für Datenschutz und Informationsfreiheit<br />
          Alt-Moabit 59–61, 10555 Berlin<br />
          <a href="https://www.datenschutz-berlin.de" target="_blank" rel="noopener noreferrer">
            www.datenschutz-berlin.de
          </a>
        </p>
      </section>

      <section className="mb-4">
        <h2 className="h5 fw-bold">8. Kontakt</h2>
        <p className="small text-muted mb-0">
          Bei datenschutzrechtlichen Fragen:{" "}
          <a href="mailto:info@preisgucken.de">info@preisgucken.de</a>
        </p>
      </section>
    </main>
  );
}
