export default function Home() {
  return (
    <>
      <section className="hero text-center">
        <div className="container">
          <h1 className="display-5 fw-bold mb-3">Deals finden. Schlau sparen. 🎯</h1>
          <p className="lead mb-4 opacity-75">
            Kaufberatung, Schnäppchen-Tipps und TikTok-Content rund um den besten Preis.
          </p>
          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="/blog" className="btn btn-light btn-lg px-4 fw-semibold">Zum Blog</a>
            <a href="/tiktok" className="btn btn-brand btn-lg px-4">TikTok Generator ✨</a>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 p-4">
              <div className="fs-2 mb-3">📝</div>
              <h3 className="h5 fw-bold">Kaufberatung & Tipps</h3>
              <p className="text-muted small">Welches Produkt lohnt sich wirklich? Unsere Artikel helfen dir, die beste Entscheidung zu treffen.</p>
              <a href="/blog" className="btn btn-outline-secondary btn-sm mt-auto d-inline-block">Artikel lesen →</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4">
              <div className="fs-2 mb-3">🎬</div>
              <h3 className="h5 fw-bold">TikTok Script Generator</h3>
              <p className="text-muted small">Gib ein Produkt ein – wir generieren dir sofort ein fertiges TikTok-Script auf Deutsch.</p>
              <a href="/tiktok" className="btn btn-brand btn-sm mt-auto d-inline-block">Jetzt generieren →</a>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card h-100 p-4">
              <div className="fs-2 mb-3">💰</div>
              <h3 className="h5 fw-bold">Preise vergleichen</h3>
              <p className="text-muted small">Über 8.000 Produkte im Preisvergleich auf preisgucken.de – kostenlos und ohne Anmeldung.</p>
              <a href="https://www.preisgucken.de" className="btn btn-outline-secondary btn-sm mt-auto d-inline-block" target="_blank" rel="noopener">Zu preisgucken.de →</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
