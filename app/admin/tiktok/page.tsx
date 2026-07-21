"use client";

import { useState, useEffect } from "react";

const PREISGUCKEN_API = "/api/products";

interface Variation {
  label: string;
  hook: string;
  main: string;
  cta: string;
  overlay: string;
  hashtags: string[];
  sound: string;
}

interface HistoryItem {
  productName: string;
  price?: string;
  style: string;
  variations: Variation[];
  timestamp: number;
}

const STYLES = [
  { key: "energetisch",  label: "⚡ Energetisch", desc: "Aufgeregt & mitreißend" },
  { key: "informativ",   label: "📊 Informativ",  desc: "Faktenbasiert & seriös" },
  { key: "schockierend", label: "😱 Schockierend", desc: "Ungläubig & Clickbait" },
];

function TikTokMockup({ variation, productName, price, image }: {
  variation: Variation;
  productName: string;
  price?: string;
  image?: string;
}) {
  return (
    <div style={{
      width: 280,
      height: 497,
      background: "#000",
      borderRadius: 32,
      border: "3px solid #333",
      position: "relative",
      overflow: "hidden",
      flexShrink: 0,
      boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
      fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    }}>
      {/* Background */}
      {image
        ? <img src={image} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", filter: "blur(8px) brightness(0.5)", position: "absolute", inset: 0 }} />
        : <div style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg,#1a1a2e,#16213e,#0f3460)" }} />
      }

      {/* Top bar */}
      <div style={{ position: "absolute", top: 12, left: 0, right: 0, display: "flex", justifyContent: "center", gap: 24, zIndex: 10 }}>
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 500 }}>Folge ich</span>
        <span style={{ color: "#fff", fontSize: 13, fontWeight: 700, borderBottom: "2px solid #fff", paddingBottom: 2 }}>Für dich</span>
        <span style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, fontWeight: 500 }}>Entdecken</span>
      </div>

      {/* Center product image */}
      {image && (
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-60%)", zIndex: 5 }}>
          <img src={image} alt="" style={{ width: 120, height: 120, objectFit: "contain", borderRadius: 12, background: "rgba(255,255,255,0.08)" }} />
        </div>
      )}

      {/* Price overlay badge */}
      {price && (
        <div style={{
          position: "absolute", top: image ? "52%" : "36%", left: "50%", transform: "translateX(-50%)",
          background: "var(--brand,#e63946)", color: "#fff", fontWeight: 800,
          fontSize: 22, padding: "6px 18px", borderRadius: 30, zIndex: 6, whiteSpace: "nowrap",
        }}>
          €{parseFloat(price).toLocaleString("de-DE", { minimumFractionDigits: 2 })}
        </div>
      )}

      {/* Text overlay */}
      <div style={{
        position: "absolute", top: price ? (image ? "62%" : "44%") : "40%",
        left: 12, right: 56, zIndex: 7,
      }}>
        <div style={{
          background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
          color: "#fff", fontSize: 13, fontWeight: 700,
          padding: "4px 10px", borderRadius: 6, display: "inline-block",
          maxWidth: "90%",
        }}>
          {variation.overlay || variation.hook.slice(0, 30)}
        </div>
      </div>

      {/* Hook text */}
      <div style={{
        position: "absolute", bottom: 90, left: 12, right: 56, zIndex: 7,
      }}>
        <p style={{ color: "#fff", fontSize: 12, fontWeight: 600, margin: 0, lineHeight: 1.4, textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
          <span style={{ background: "rgba(0,0,0,0.4)", padding: "2px 4px", borderRadius: 4 }}>
            @preisgucken.de
          </span>
        </p>
        <p style={{ color: "#fff", fontSize: 11, margin: "4px 0 0", lineHeight: 1.4, textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
          {variation.hook}
        </p>
        <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 10, margin: "4px 0 0" }}>
          {variation.hashtags.slice(0, 3).map(h => `#${h}`).join(" ")}
        </p>
      </div>

      {/* Right action bar */}
      <div style={{
        position: "absolute", right: 8, bottom: 100, zIndex: 8,
        display: "flex", flexDirection: "column", alignItems: "center", gap: 16,
      }}>
        {/* Avatar */}
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "var(--brand,#e63946)", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14 }}>P</div>
        {[
          { icon: "❤️", count: "12.4K" },
          { icon: "💬", count: "384" },
          { icon: "↗️", count: "Teilen" },
          { icon: "🔖", count: "Speich." },
        ].map(({ icon, count }) => (
          <div key={icon} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 2 }}>
            <span style={{ fontSize: 24 }}>{icon}</span>
            <span style={{ color: "#fff", fontSize: 9, fontWeight: 600 }}>{count}</span>
          </div>
        ))}
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "#111", border: "4px solid #333", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}>🎵</div>
      </div>

      {/* Bottom music bar */}
      <div style={{
        position: "absolute", bottom: 52, left: 12, right: 12, zIndex: 7,
        display: "flex", alignItems: "center", gap: 6,
      }}>
        <span style={{ fontSize: 11 }}>🎵</span>
        <span style={{ color: "rgba(255,255,255,0.8)", fontSize: 10, overflow: "hidden", whiteSpace: "nowrap", textOverflow: "ellipsis" }}>
          {variation.sound}
        </span>
      </div>

      {/* Progress bar */}
      <div style={{ position: "absolute", bottom: 44, left: 0, right: 0, height: 2, background: "rgba(255,255,255,0.2)", zIndex: 8 }}>
        <div style={{ width: "35%", height: "100%", background: "#fff" }} />
      </div>

      {/* Home indicator */}
      <div style={{ position: "absolute", bottom: 10, left: "50%", transform: "translateX(-50%)", width: 60, height: 4, background: "rgba(255,255,255,0.4)", borderRadius: 4, zIndex: 8 }} />
    </div>
  );
}

export default function TikTokGenerator() {
  const [mode, setMode] = useState<"search" | "manual" | "autopilot">("search");
  const [style, setStyle] = useState("energetisch");
  const [query, setQuery] = useState("");
  const [vendorFilter, setVendorFilter] = useState("");
  const [vendors, setVendors] = useState<string[]>([]);
  const [results, setResults] = useState<any[]>([]);
  const [selected, setSelected] = useState<any>(null);
  const [variations, setVariations] = useState<Variation[]>([]);
  const [activeVar, setActiveVar] = useState(0);
  const [loading, setLoading] = useState(false);
  const [searching, setSearching] = useState(false);
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [manualName, setManualName] = useState("");
  const [manualPrice, setManualPrice] = useState("");
  const [manualOldPrice, setManualOldPrice] = useState("");
  const [manualVendor, setManualVendor] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("tiktok_history");
    if (saved) setHistory(JSON.parse(saved));
    // Load vendors
    fetch("/api/vendors").then(r => r.json()).then(data => {
      const list: string[] = data.vendors ?? [];
      setVendors(list.sort());
    }).catch(() => {});
  }, []);

  function saveHistory(productName: string, price: string | undefined, vars: Variation[]) {
    const item: HistoryItem = { productName, price, style, variations: vars, timestamp: Date.now() };
    const updated = [item, ...history].slice(0, 10);
    setHistory(updated);
    localStorage.setItem("tiktok_history", JSON.stringify(updated));
  }

  async function searchProducts() {
    if (!query.trim() && !vendorFilter) return;
    setSearching(true); setResults([]); setSelected(null); setVariations([]);
    try {
      const params = new URLSearchParams({ limit: "8", inStockOnly: "true" });
      if (query.trim()) params.set("q", query.trim());
      if (vendorFilter) params.set("vendor", vendorFilter);
      const res = await fetch(`${PREISGUCKEN_API}?${params}`);
      const data = await res.json();
      setResults(data.products || []);
    } catch { setResults([]); } finally { setSearching(false); }
  }

  async function fetchTopDeal() {
    setSearching(true); setSelected(null); setVariations([]);
    try {
      const res = await fetch(`${PREISGUCKEN_API}?sort=priceAsc&limit=1&inStockOnly=true`);
      const data = await res.json();
      if (data.products?.[0]) { setSelected(data.products[0]); setResults([]); }
    } catch {} finally { setSearching(false); }
  }

  async function generate(product?: any) {
    const payload = product
      ? { productName: product.title, price: product.price, oldPrice: product.old_price, vendor: product.vendor, category: product.category, style }
      : { productName: manualName, price: manualPrice, oldPrice: manualOldPrice, vendor: manualVendor, style };
    if (!payload.productName) return;
    setLoading(true); setVariations([]); setActiveVar(0);
    try {
      const res = await fetch("/api/generate-tiktok", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
      const data = await res.json();
      if (data.variations?.length) {
        setVariations(data.variations);
        saveHistory(payload.productName, payload.price, data.variations);
      }
    } catch {} finally { setLoading(false); }
  }

  function copyScript() {
    const v = variations[activeVar];
    if (!v) return;
    const text = `🎣 HOOK\n${v.hook}\n\n📢 MAIN\n${v.main}\n\n📲 CTA\n${v.cta}\n\n#️⃣ HASHTAGS\n${v.hashtags.map(h=>`#${h}`).join(" ")}\n\n🎵 SOUND\n${v.sound}`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  const currentProduct = selected || (mode === "manual" ? { title: manualName, price: manualPrice, image: null } : null);
  const fmt = (p?: string) => p ? `€${parseFloat(p).toLocaleString("de-DE", { minimumFractionDigits: 2 })}` : "";

  return (
    <div className="container-fluid py-5 px-4" style={{ maxWidth: 1200 }}>
      <div className="text-center mb-5">
        <h1 className="fw-bold">🎬 TikTok Script Generator</h1>
        <p className="text-muted">Produkt wählen → Stil wählen → fertiges Script + Vorschau in Sekunden</p>
      </div>

      <div className="row g-4">
        {/* LEFT: Controls */}
        <div className="col-lg-7">

          {/* Mode tabs */}
          <div className="d-flex gap-2 mb-4 flex-wrap">
            {[
              { key: "search",    label: "🔍 Produkt suchen" },
              { key: "manual",    label: "✏️ Manuell" },
              { key: "autopilot", label: "🤖 Auto-Pilot" },
            ].map(m => (
              <button key={m.key} className={`btn btn-sm px-3 ${mode === m.key ? "btn-brand" : "btn-outline-secondary"}`} onClick={() => { setMode(m.key as any); setSelected(null); setVariations([]); setResults([]); }}>
                {m.label}
              </button>
            ))}
          </div>

          {/* Search mode */}
          {mode === "search" && (
            <div className="card p-4 mb-4">
              <div className="row g-2 mb-3">
                <div className="col">
                  <input className="form-control" placeholder="z. B. iPhone, Sofa, Vitamins..." value={query} onChange={e => setQuery(e.target.value)} onKeyDown={e => e.key === "Enter" && searchProducts()} />
                </div>
                <div className="col-auto">
                  <select className="form-select" value={vendorFilter} onChange={e => setVendorFilter(e.target.value)} style={{ minWidth: 150 }}>
                    <option value="">Alle Händler</option>
                    {vendors.map(v => <option key={v} value={v}>{v}</option>)}
                  </select>
                </div>
                <div className="col-auto">
                  <button className="btn btn-brand px-4" onClick={searchProducts} disabled={searching}>{searching ? "..." : "Suchen"}</button>
                </div>
              </div>
              {results.length > 0 && (
                <div className="row g-2">
                  {results.map(p => (
                    <div className="col-6" key={p.id}>
                      <div className={`card p-2 h-100 ${selected?.id === p.id ? "border-danger border-2" : ""}`} style={{ cursor: "pointer" }} onClick={() => { setSelected(p); setVariations([]); }}>
                        <div className="d-flex gap-2 align-items-center">
                          {p.image && <img src={p.image} alt="" style={{ width: 44, height: 44, objectFit: "contain", flexShrink: 0 }} />}
                          <div style={{ minWidth: 0 }}>
                            <p className="mb-0 small fw-semibold text-truncate">{p.title}</p>
                            <p className="mb-0 small text-muted">{p.vendor}</p>
                            <p className="mb-0 small fw-bold" style={{ color: "var(--brand)" }}>{fmt(p.price)}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Auto-pilot mode */}
          {mode === "autopilot" && (
            <div className="card p-4 mb-4 text-center">
              <p className="text-muted mb-3">Wir holen automatisch das beste Deal des Tages von preisgucken.de.</p>
              <button className="btn btn-brand px-5" onClick={fetchTopDeal} disabled={searching}>
                {searching ? "⏳ Lade Deal..." : "🤖 Top-Deal laden"}
              </button>
              {selected && (
                <div className="mt-3 p-3 rounded" style={{ background: "#f8f9fa" }}>
                  <div className="d-flex align-items-center gap-3 justify-content-center">
                    {selected.image && <img src={selected.image} alt="" style={{ width: 60, height: 60, objectFit: "contain" }} />}
                    <div className="text-start">
                      <p className="mb-0 fw-semibold small">{selected.title}</p>
                      <p className="mb-0 fw-bold" style={{ color: "var(--brand)" }}>{fmt(selected.price)}</p>
                      <p className="mb-0 text-muted small">{selected.vendor}</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Manual mode */}
          {mode === "manual" && (
            <div className="card p-4 mb-4">
              <div className="row g-3">
                <div className="col-12">
                  <label className="form-label fw-semibold small">Produktname *</label>
                  <input className="form-control" placeholder="z. B. Samsung Galaxy S24" value={manualName} onChange={e => setManualName(e.target.value)} />
                </div>
                <div className="col-4">
                  <label className="form-label fw-semibold small">Preis (€)</label>
                  <input className="form-control" placeholder="299.99" value={manualPrice} onChange={e => setManualPrice(e.target.value)} />
                </div>
                <div className="col-4">
                  <label className="form-label fw-semibold small">Alter Preis (€)</label>
                  <input className="form-control" placeholder="499.99" value={manualOldPrice} onChange={e => setManualOldPrice(e.target.value)} />
                </div>
                <div className="col-4">
                  <label className="form-label fw-semibold small">Händler</label>
                  <input className="form-control" placeholder="MediaMarkt" value={manualVendor} onChange={e => setManualVendor(e.target.value)} />
                </div>
              </div>
            </div>
          )}

          {/* Style selector */}
          <div className="card p-4 mb-4">
            <p className="fw-semibold small mb-2">🎭 Script-Stil wählen:</p>
            <div className="d-flex gap-2 flex-wrap">
              {STYLES.map(s => (
                <button key={s.key} className={`btn btn-sm ${style === s.key ? "btn-brand" : "btn-outline-secondary"}`} onClick={() => setStyle(s.key)}>
                  {s.label}
                  <span className="d-block" style={{ fontSize: 9, opacity: 0.7, fontWeight: 400 }}>{s.desc}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Generate button */}
          <button
            className="btn btn-brand btn-lg w-100 mb-4"
            onClick={() => generate(mode !== "manual" ? selected : undefined)}
            disabled={loading || (mode === "manual" ? !manualName : !selected)}
          >
            {loading ? "⏳ Generiere 3 Varianten..." : "✨ Scripts generieren"}
          </button>

          {/* Output: 3 variations */}
          {variations.length > 0 && (
            <div className="card p-4">
              {/* Variation tabs */}
              <div className="d-flex gap-2 mb-4">
                {variations.map((v, i) => (
                  <button key={i} className={`btn btn-sm flex-fill ${activeVar === i ? "btn-brand" : "btn-outline-secondary"}`} onClick={() => setActiveVar(i)}>
                    {v.label}
                  </button>
                ))}
              </div>

              {variations[activeVar] && (() => {
                const v = variations[activeVar];
                return (
                  <>
                    <div className="mb-3 p-3 rounded" style={{ background: "#fff8f8", border: "1px solid #fde" }}>
                      <p className="small fw-bold mb-1" style={{ color: "var(--brand)" }}>🎣 HOOK</p>
                      <p className="mb-0">{v.hook}</p>
                    </div>
                    <div className="mb-3 p-3 rounded" style={{ background: "#f8fbff", border: "1px solid #def" }}>
                      <p className="small fw-bold mb-1 text-primary">📢 MAIN</p>
                      <p className="mb-0 small">{v.main}</p>
                    </div>
                    <div className="mb-3 p-3 rounded" style={{ background: "#f8fff8", border: "1px solid #dfd" }}>
                      <p className="small fw-bold mb-1 text-success">📲 CTA</p>
                      <p className="mb-0 small">{v.cta}</p>
                    </div>
                    <div className="mb-3">
                      <p className="small fw-bold mb-1">#️⃣ HASHTAGS</p>
                      <div className="d-flex flex-wrap gap-1">
                        {v.hashtags.map(h => <span key={h} className="tag">#{h}</span>)}
                      </div>
                    </div>
                    <div className="mb-3 p-2 rounded" style={{ background: "#f5f5f5" }}>
                      <p className="small mb-0">🎵 <strong>Sound:</strong> {v.sound}</p>
                    </div>
                    <button className="btn btn-outline-secondary btn-sm w-100" onClick={copyScript}>
                      {copied ? "✅ Kopiert!" : "📋 Script kopieren"}
                    </button>
                  </>
                );
              })()}
            </div>
          )}

          {/* History */}
          {history.length > 0 && (
            <div className="card p-4 mt-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h6 className="fw-bold mb-0">🕐 Zuletzt generiert</h6>
                <button className="btn btn-link btn-sm text-muted p-0" onClick={() => { setHistory([]); localStorage.removeItem("tiktok_history"); }}>Löschen</button>
              </div>
              {history.slice(0, 5).map((h, i) => (
                <div key={i} className="d-flex justify-content-between align-items-center py-2 border-bottom" style={{ cursor: "pointer" }}
                  onClick={() => { setVariations(h.variations); setActiveVar(0); setStyle(h.style); }}>
                  <div>
                    <p className="mb-0 small fw-semibold">{h.productName}</p>
                    <p className="mb-0" style={{ fontSize: 11, color: "#999" }}>{new Date(h.timestamp).toLocaleString("de-DE")}</p>
                  </div>
                  <span className="tag">{h.style}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT: TikTok Mockup */}
        <div className="col-lg-5">
          <div className="sticky-top pt-2" style={{ top: 80 }}>
            <p className="fw-semibold text-center mb-3 small text-muted">📱 Vorschau — so sieht es auf TikTok aus</p>
            <div className="d-flex justify-content-center">
              {variations[activeVar]
                ? <TikTokMockup variation={variations[activeVar]} productName={currentProduct?.title || ""} price={currentProduct?.price} image={currentProduct?.image} />
                : (
                  <div style={{ width: 280, height: 497, background: "#111", borderRadius: 32, border: "3px solid #333", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, boxShadow: "0 20px 60px rgba(0,0,0,0.3)" }}>
                    <span style={{ fontSize: 48 }}>🎬</span>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 13, textAlign: "center", margin: 0, padding: "0 24px" }}>Script generieren um die TikTok-Vorschau zu sehen</p>
                  </div>
                )
              }
            </div>

            {/* Variation switcher under mockup */}
            {variations.length > 0 && (
              <div className="d-flex justify-content-center gap-2 mt-3">
                {variations.map((_, i) => (
                  <button key={i} className={`btn btn-sm ${activeVar === i ? "btn-brand" : "btn-outline-secondary"}`} style={{ width: 36, height: 36, padding: 0 }} onClick={() => setActiveVar(i)}>
                    {i + 1}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
