import type { Metadata } from "next";
import CouponHint from "@/components/CouponHint";

export const metadata: Metadata = {
  title: "15 Schnäppchen-Tipps 2026",
  description: "15 Tipps für günstigeres Online-Shopping: Preisvergleich, Preisverlauf, Timing, Gutscheine und mehr – so erkennst du echte Angebote.",
  keywords: ["schnäppchen tipps", "günstig einkaufen online", "sparen beim einkaufen", "preisvergleich tipps", "online shopping tipps 2026"],
  openGraph: {
    title: "15 Schnäppchen-Tipps 2026",
    description: "15 Tipps für günstigeres Online-Shopping: Preisvergleich, Preisverlauf, Timing, Gutscheine und mehr – so erkennst du echte Angebote.",
    url: "https://www.preisgucken.com/blog/schnaeppchen-tipps-2026/",
    type: "article",
    publishedTime: "2026-07-19",
    images: [{ url: "https://www.preisgucken.com/opengraph-image/", width: 1200, height: 630, alt: "15 Schnäppchen-Tipps 2026" }],
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/schnaeppchen-tipps-2026/" },
  twitter: {
    card: "summary_large_image",
    title: "15 Schnäppchen-Tipps 2026",
    description: "15 Tipps für günstigeres Online-Shopping: Preisvergleich, Preisverlauf, Timing, Gutscheine und mehr – so erkennst du echte Angebote.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  image: "https://www.preisgucken.com/opengraph-image/",
  headline: "15 Schnäppchen-Tipps 2026",
  datePublished: "2026-07-19",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: {
    "@type": "Organization",
    name: "Preisgucken",
    url: "https://www.preisgucken.com",
    logo: { "@type": "ImageObject", url: "https://www.preisgucken.com/logo.png" },
  },
};

const tips = [
  { n: 1, title: "Preisvergleich vor jedem Kauf", text: "Identische Produkte kosten in verschiedenen Shops oft 20–40% mehr oder weniger. Nutze preisgucken.de für einen schnellen Überblick." },
  { n: 2, title: "Warenkorb stehen lassen", text: "Viele Shops schicken dir nach 24–48 Stunden einen Gutscheincode, wenn du den Warenkorb nicht leerst. Funktioniert überraschend oft." },
  { n: 3, title: "Inkognito-Modus nutzen", text: "Manche Shops passen Preise dynamisch an (Dynamic Pricing). Ein Blick im privaten Fenster oder über einen Preisvergleich zeigt dir, ob sich der Preis ändert." },
  { n: 4, title: "Preisverlauf prüfen", text: 'Der aktuelle Preis ist oft kein „Angebot". Prüfe den historischen Preisverlauf – echter Tiefstpreis oder aufgeblasener Streichpreis?' },
  { n: 5, title: "Newsletter mit Rabatt abonnieren", text: "Viele Shops geben Neukunden einen Rabatt auf die erste Bestellung, wenn sie den Newsletter abonnieren. Höhe und Bedingungen unterscheiden sich; nach dem Kauf kannst du dich wieder abmelden." },
  { n: 6, title: "Cashback-Portale nutzen", text: "Cashback-Portale zahlen dir einen Teil des Kaufpreises zurück. Die Höhe hängt vom Shop ab, und nicht jeder Gutschein lässt sich mit Cashback kombinieren. Lies vorher die Bedingungen." },
  { n: 7, title: "Zum richtigen Zeitpunkt kaufen", text: "Der Januar (Winterschlussverkauf), die Wochen vor dem Black Friday und die Zeit nach Weihnachten bieten oft gute Preise. Vergleiche trotzdem, denn nicht jeder Rabatt ist echt." },
  { n: 8, title: "Versandkostenfrei-Schwelle kennen", text: "Viele Shops haben Mindestbestellwerte für kostenlosen Versand. Stimme Bestellungen mit Freunden oder Familie ab." },
  { n: 9, title: "Gebrauchte & generalüberholte Artikel", text: 'Geprüfte B-Ware und generalüberholte Artikel sind oft deutlich günstiger als Neuware, meist mit Garantie. Prüfe Zustand und Garantiebedingungen vor dem Kauf.' },
  { n: 10, title: "Student-Rabatte & Berufsgruppen", text: "Viele Shops bieten Sonderpreise für Schüler, Studenten, Lehrer oder Mitglieder bestimmter Organisationen. Immer fragen!" },
  { n: 11, title: "App statt Browser kaufen", text: "Manche Shops bieten App-exklusive Rabatte oder zusätzliche Gutscheine für Neukunden. Ein Blick in die App lohnt sich, wenn du ohnehin dort kaufst." },
  { n: 12, title: "Preisalarm einrichten", text: "Lege deinen Wunschpreis fest und lass dich benachrichtigen, wenn er erreicht wird. Perfekt für größere Anschaffungen." },
  { n: 13, title: "Versandkosten in Preisvergleich einrechnen", text: "Ein Produkt für 89 € + 5,99 € Versand ist teurer als 92 € mit kostenlosem Versand. Immer den Gesamtpreis vergleichen." },
  { n: 14, title: "Saisonale Rabatte kennen", text: "Gartenmöbel im Herbst, Winterjacken im Frühjahr, Klimageräte im Herbst – Käufe in der Gegensaison sind oft günstiger." },
  { n: 15, title: "Bewertungen vor Kauf lesen", text: "Günstig ist nicht gut, wenn das Produkt nach 3 Monaten kaputt ist. Investiere 5 Minuten in Bewertungen auf mehreren Plattformen." },
];

export default function SchnaeppchentippsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog/" className="text-muted text-decoration-none">Blog</a> › Schnäppchen-Tipps 2026
        </nav>
        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Spartipps</span>
          <h1 className="brand-heading fw-bold display-6 mb-3">15 Schnäppchen-Tipps 2026</h1>
          <p className="lead text-muted">Wie du nie wieder zu viel bezahlst – diese 15 Tricks funktionieren sofort und kosten dich nichts.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. Juli 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <p className="mb-5">Viele Online-Shopper zahlen mehr als nötig – oft aus Bequemlichkeit oder weil ihnen einfache Tricks unbekannt sind. Wir haben 15 Methoden zusammengestellt, mit denen du beim Online-Shopping Geld sparen kannst. Wie viel du sparst, hängt vom Produkt, vom Shop und vom Zeitpunkt ab. Aktuelle Gutscheincodes unserer Partner-Shops findest du auf <a href="https://www.preisgucken.de/gutscheine" target="_blank" rel="noopener">Preisgucken.de/gutscheine</a>.</p>
        <CouponHint />

        <div className="row g-4 mb-5">
          {tips.map(tip => (
            <div className="col-md-6" key={tip.n}>
              <div className="card h-100 p-4">
                <div className="d-flex align-items-start gap-3">
                  <span className="fw-bold fs-4" style={{ color: "var(--pg-blue)", minWidth: 36 }}>#{tip.n}</span>
                  <div>
                    <h2 className="h6 fw-bold mb-1">{tip.title}</h2>
                    <p className="text-muted small mb-0">{tip.text}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-4 text-center mb-5" style={{ background: "var(--pg-blue-light)", border: "none" }}>
          <h3 className="h5 fw-bold mb-2">Tipp #1 direkt umsetzen</h3>
          <p className="text-muted small mb-3">Vergleiche jetzt Preise aus über 10 deutschen Online-Shops gleichzeitig – kostenlos.</p>
          <a href="https://www.preisgucken.de" className="btn btn-brand px-4" target="_blank" rel="noopener">Zum Preisvergleich →</a>
        </div>

        <div className="mt-5 pt-4 border-top">
          <a href="/blog/" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
