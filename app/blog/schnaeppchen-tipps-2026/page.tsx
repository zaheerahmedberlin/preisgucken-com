import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro | Preisgucken",
  description: "Mit diesen 15 Schnäppchen-Tipps sparst du beim Online-Shopping bis zu 40%. Preisvergleich, beste Zeiten zum Kaufen, Gutscheine & mehr – von Experten erklärt.",
  keywords: ["schnäppchen tipps", "günstig einkaufen online", "sparen beim einkaufen", "preisvergleich tipps", "online shopping tipps 2026"],
  openGraph: {
    title: "15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro",
    description: "Mit diesen 15 Tipps sparst du beim Online-Shopping bis zu 40%.",
    url: "https://www.preisgucken.com/blog/schnaeppchen-tipps-2026",
    type: "article",
    publishedTime: "2026-07-19",
  },
  alternates: { canonical: "https://www.preisgucken.com/blog/schnaeppchen-tipps-2026" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro beim Online-Shopping",
  datePublished: "2026-07-19",
  author: { "@type": "Organization", name: "Preisgucken" },
  publisher: { "@type": "Organization", name: "Preisgucken", url: "https://www.preisgucken.com" },
};

const tips = [
  { n: 1, title: "Preisvergleich vor jedem Kauf", text: "Identische Produkte kosten in verschiedenen Shops oft 20–40% mehr oder weniger. Nutze preisgucken.de für einen schnellen Überblick." },
  { n: 2, title: "Warenkorb stehen lassen", text: "Viele Shops schicken dir nach 24–48 Stunden einen Gutscheincode, wenn du den Warenkorb nicht leerst. Funktioniert überraschend oft." },
  { n: 3, title: "Inkognito-Modus nutzen", text: "Preise können sich je nach Browser-Verlauf erhöhen (Dynamic Pricing). Im Inkognito-Modus siehst du oft günstigere Preise." },
  { n: 4, title: "Preisverlauf prüfen", text: 'Der aktuelle Preis ist oft kein „Angebot". Prüfe den historischen Preisverlauf – echter Tiefstpreis oder aufgeblasener Streichpreis?' },
  { n: 5, title: "Newsletter mit Rabatt abonnieren", text: "Fast alle großen Shops bieten 5–15% Rabatt auf die erste Bestellung, wenn du den Newsletter abonnierst. Nach dem Kauf abmelden." },
  { n: 6, title: "Cashback-Portale nutzen", text: "Über Portale wie Shoop oder Payback bekommst du 1–8% des Kaufpreises zurück – ohne Mehraufwand." },
  { n: 7, title: "Zum richtigen Zeitpunkt kaufen", text: "Januar (Winterschlussverkauf), Oktober (Pre-Black Friday) und direkt nach Weihnachten sind die günstigsten Kaufzeitpunkte des Jahres." },
  { n: 8, title: "Versandkostenfrei-Schwelle kennen", text: "Viele Shops haben Mindestbestellwerte für kostenlosen Versand. Stimme Bestellungen mit Freunden oder Familie ab." },
  { n: 9, title: "Gebrauchte & generalüberholte Artikel", text: 'Amazon Warehouse, eBay Refurbished oder Backmarket bieten geprüfte B-Ware mit bis zu 70% Rabatt – oft mit Garantie.' },
  { n: 10, title: "Student-Rabatte & Berufsgruppen", text: "Viele Shops bieten Sonderpreise für Schüler, Studenten, Lehrer oder Mitglieder bestimmter Organisationen. Immer fragen!" },
  { n: 11, title: "App statt Browser kaufen", text: "Viele Shops bieten App-exklusive Rabatte von 5–10% oder zusätzliche Gutscheine für Neukunden in der App." },
  { n: 12, title: "Preisalarm einrichten", text: "Lege deinen Wunschpreis fest und lass dich benachrichtigen, wenn er erreicht wird. Perfekt für größere Anschaffungen." },
  { n: 13, title: "Versandkosten in Preisvergleich einrechnen", text: "Ein Produkt für 89 € + 5,99 € Versand ist teurer als 92 € mit kostenlosem Versand. Immer den Gesamtpreis vergleichen." },
  { n: 14, title: "Saisonale Rabatte kennen", text: "Gartenmöbel im Herbst, Winterjacken im März, Klimaanlagen im Oktober – Gegensaison-Käufe sparen bis zu 50%." },
  { n: 15, title: "Bewertungen vor Kauf lesen", text: "Günstig ist nicht gut, wenn das Produkt nach 3 Monaten kaputt ist. Investiere 5 Minuten in Bewertungen auf mehreren Plattformen." },
];

export default function SchnaeppchentippsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <article className="container py-5" style={{ maxWidth: 820 }}>
        <nav className="mb-4 small text-muted">
          <a href="/" className="text-muted text-decoration-none">Startseite</a> › <a href="/blog" className="text-muted text-decoration-none">Blog</a> › Schnäppchen-Tipps 2026
        </nav>
        <header className="mb-5">
          <span className="tag mb-3 d-inline-block">Spartipps</span>
          <h1 className="fw-bold display-6 mb-3">15 Schnäppchen-Tipps 2026: So sparst du hunderte Euro</h1>
          <p className="lead text-muted">Wie du nie wieder zu viel bezahlst – diese 15 Tricks funktionieren sofort und kosten dich nichts.</p>
          <div className="d-flex gap-3 small text-muted mt-3">
            <span>📅 19. Juli 2026</span>
            <span>⏱ 6 Min. Lesezeit</span>
            <span>✍️ Preisgucken-Redaktion</span>
          </div>
        </header>

        <p className="mb-5">Laut einer Studie des Digitalverbands Bitkom zahlen 68% der deutschen Online-Shopper regelmäßig mehr als nötig – oft aus Bequemlichkeit oder weil ihnen einfache Tricks unbekannt sind. Wir haben die 15 effektivsten Methoden zusammengestellt, mit denen Experten beim Online-Shopping sparen.</p>

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
          <a href="/blog" className="text-muted text-decoration-none small">← Zurück zum Blog</a>
        </div>
      </article>
    </>
  );
}
