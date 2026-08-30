import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Preisgucken – Preisvergleich, Deals & Kaufberatung";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Replaces the raw 1536x1024 logo.png previously reused everywhere as the
// social-share image — that aspect ratio doesn't match what Facebook/
// WhatsApp/LinkedIn/Twitter actually crop to (1200x630), so shares showed
// an awkwardly cropped logo instead of a proper card. This file is Next.js's
// dynamic-OG-image convention: any page's metadata that doesn't explicitly
// override `openGraph.images` picks this up automatically at build/request
// time, correctly sized, no static asset to maintain.
export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1A3A6B 0%, #122b52 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            fontSize: 88,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: -1,
          }}
        >
          Preisgucken
          <span style={{ color: "#F5A623", fontSize: 44, marginLeft: 6 }}>.com</span>
        </div>
        <div
          style={{
            marginTop: 24,
            fontSize: 32,
            color: "rgba(255,255,255,0.85)",
            display: "flex",
          }}
        >
          Preisvergleich, Deals &amp; Kaufberatung
        </div>
        <div
          style={{
            marginTop: 48,
            width: 120,
            height: 6,
            borderRadius: 3,
            background: "#F5A623",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
