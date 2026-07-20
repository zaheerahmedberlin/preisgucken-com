import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Preisgucken – Deals, Tipps & TikTok Content",
  description: "Schnäppchen-Tipps, Kaufberatung und Preisvergleich-News aus Deutschland.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
          <div className="container">
            <a className="navbar-brand d-flex align-items-center gap-2" href="/">
              <img src="/logo.png" alt="Preisgucken Logo" style={{ height: 56, width: "auto" }} />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="nav">
              <ul className="navbar-nav ms-auto gap-2">
                <li className="nav-item"><a className="nav-link" href="/blog">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="/admin/tiktok">TikTok Generator</a></li>
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

        <footer className="bg-dark text-white py-4 mt-5">
          <div className="container text-center small text-muted">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
              <a href="/impressum" className="text-muted text-decoration-none">Impressum</a>
              <a href="/datenschutz" className="text-muted text-decoration-none">Datenschutz</a>
              <a href="/agb" className="text-muted text-decoration-none">AGB</a>
              <a href="/kontakt" className="text-muted text-decoration-none">Kontakt</a>
              <a href="https://www.preisgucken.de" target="_blank" rel="noopener" className="text-muted text-decoration-none">Preisgucken.de</a>
            </div>
            <div>© {new Date().getFullYear()} Preisgucken.com · Zaheer Ahmed, Berlin</div>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async />
      </body>
    </html>
  );
}
