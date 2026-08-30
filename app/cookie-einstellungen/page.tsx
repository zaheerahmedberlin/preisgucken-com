"use client";
import { useState, useEffect } from "react";

const COOKIE_KEY = "pg_cookie_consent";

type Consent = { necessary: boolean; stats: boolean; marketing: boolean };

function readConsent(): Consent {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) return { necessary: true, stats: false, marketing: false };
    const parsed = JSON.parse(stored);
    return { necessary: true, stats: !!parsed.stats, marketing: !!parsed.marketing };
  } catch {
    return { necessary: true, stats: false, marketing: false };
  }
}

export default function CookieEinstellungenPage() {
  const [consent, setConsent] = useState<Consent>({ necessary: true, stats: false, marketing: false });
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    setConsent(readConsent());
  }, []);

  function save() {
    try {
      localStorage.setItem(COOKIE_KEY, JSON.stringify({ ...consent, updatedAt: Date.now() }));
      window.dispatchEvent(new Event("pg-consent-updated"));
    } catch {}
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  }

  return (
    <main className="container py-5" style={{ maxWidth: 760 }}>
      <h1 className="fw-bold mb-2">Cookie-Einstellungen</h1>
      <p className="text-muted mb-4">
        Hier können Sie einstellen, welche Cookie-Kategorien Sie zulassen möchten. Notwendige Cookies sind
        für den Betrieb der Seite erforderlich und können nicht deaktiviert werden. Details finden Sie in
        unserer <a href="/datenschutz">Datenschutzerklärung</a>.
      </p>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="form-check form-switch">
            <input className="form-check-input" type="checkbox" checked disabled id="necessaryCheck" />
            <label className="form-check-label fw-semibold" htmlFor="necessaryCheck">
              Notwendige Cookies
            </label>
          </div>
          <p className="small text-muted mb-0 mt-1">
            Erforderlich für grundlegende Funktionen der Website (z. B. Speicherung Ihrer Cookie-Auswahl).
            Immer aktiv.
          </p>
        </div>
      </div>

      <div className="card shadow-sm mb-3">
        <div className="card-body">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={consent.stats}
              onChange={(e) => setConsent((c) => ({ ...c, stats: e.target.checked }))}
              id="statsCheck"
            />
            <label className="form-check-label fw-semibold" htmlFor="statsCheck">
              Statistik-Cookies
            </label>
          </div>
          <p className="small text-muted mb-0 mt-1">
            Helfen uns zu verstehen, wie Besucher die Website nutzen (Google Analytics), damit wir Inhalte
            verbessern können. Anonymisierte Auswertung.
          </p>
        </div>
      </div>

      <div className="card shadow-sm mb-4">
        <div className="card-body">
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              checked={consent.marketing}
              onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
              id="marketingCheck"
            />
            <label className="form-check-label fw-semibold" htmlFor="marketingCheck">
              Marketing-Cookies
            </label>
          </div>
          <p className="small text-muted mb-0 mt-1">
            Derzeit nicht aktiv genutzt, für zukünftige Funktionen reserviert.
          </p>
        </div>
      </div>

      <div className="d-flex align-items-center gap-3">
        <button className="btn btn-primary" style={{ background: "#1A3A6B", borderColor: "#1A3A6B" }} onClick={save}>
          Auswahl speichern
        </button>
        {saved && <span className="text-success small">Gespeichert ✓</span>}
      </div>
    </main>
  );
}
