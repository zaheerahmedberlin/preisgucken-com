import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const BASE_URL = "https://www.preisgucken.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Preisgucken – Preisvergleich, Deals & Kaufberatung",
    template: "%s | Preisgucken – Preisvergleich",
  },
  description: "Preisvergleich-Ratgeber, Schnäppchen-Tipps und Kaufberatung aus Deutschland – von den Preisvergleich-Experten von Preisgucken.de.",
  keywords: [
    "Preisvergleich",
    "Preisvergleich Ratgeber",
    "Kaufberatung",
    "Ratgeber",
    "Schnäppchen-Tipps",
    "Spartipps",
    "Preisvergleich Tipps",
    "günstig kaufen",
    "Deals",
    "Sofa kaufen Ratgeber",
    "Matratze kaufen Ratgeber",
    "Fernseher kaufen Ratgeber",
    "Smartphone kaufen Ratgeber",
    "Kamerastativ kaufen Ratgeber",
    "Vorhänge kaufen Ratgeber",
    "Abendkleid kaufen",
    "Staubsauger kaufen Ratgeber",
    "Gartenmöbel kaufen Ratgeber",
  ],
  alternates: { canonical: BASE_URL },
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: BASE_URL,
    siteName: "Preisgucken",
    title: "Preisgucken – Preisvergleich, Deals & Kaufberatung",
    description: "Preisvergleich-Ratgeber, Schnäppchen-Tipps und Kaufberatung aus Deutschland – von den Preisvergleich-Experten von Preisgucken.de.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.png",
  },
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
        <CookieBanner />

        <footer className="py-4 mt-5" style={{ background: "var(--pg-blue)" }}>
          <div className="container text-center small">
            <div className="d-flex flex-wrap justify-content-center gap-3 mb-2">
              <a href="/impressum" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Impressum</a>
              <a href="/datenschutz" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Datenschutz</a>
              <a href="/agb" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>AGB</a>
              <a href="/kontakt" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Kontakt</a>
              <a href="/sitemap.xml" className="text-decoration-none" style={{ color: "rgba(255,255,255,0.85)" }}>Sitemap</a>
              <a href="https://www.preisgucken.de" target="_blank" rel="noopener" className="text-decoration-none" style={{ color: "var(--pg-orange)" }}>Preisgucken.de ↗</a>
            </div>
            <div style={{ color: "rgba(255,255,255,0.6)" }}>© {new Date().getFullYear()} Preisgucken<sup style={{ fontSize: "0.7em" }}>™</sup>.com</div>
          </div>
        </footer>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" async />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
