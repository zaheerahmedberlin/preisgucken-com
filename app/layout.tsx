import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preisgucken – Deals, Tipps & Kaufberatung",
  description: "Schnäppchen-Tipps, Kaufberatung und Preisvergleich-News aus Deutschland.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-white sticky-top">
          <div className="container">
            <a className="navbar-brand" href="/">
              <img src="/logo.svg" alt="Preisgucken Logo" style={{ height: "80px", width: "auto" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="nav">
              <ul className="navbar-nav ms-auto gap-2 align-items-center">
                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                <li className="nav-item">
                  <a className="btn btn-brand btn-sm px-3" href="https://www.preisgucken.de" target="_blank" rel="noopener">
                    Preise vergleichen →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main>{children}</main>

        <footer className="py-4 mt-5" style={{ background: "var(--pg-blue)" }}>
          <div className="container text-center small">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
              <a href="/impressum" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Impressum</a>
              <a href="/datenschutz" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Datenschutz</a>
              <a href="/agb" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>AGB</a>
              <a href="/kontakt" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Kontakt</a>
              <a href="https://www.preisgucken.de" target="_blank" rel="noopener" className="text-decoration-none" style={{ color: "var(--pg-orange)" }}>Preisgucken.de ↗</a>
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)" }}>© {new Date().getFullYear()} Preisgucken.com</div>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async />
      </body>
    </html>
  );
}
