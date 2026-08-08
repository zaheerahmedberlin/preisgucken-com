"use client";
import { useEffect, useState } from "react";
import Script from "next/script";

const GA_ID = "G-F40F0J8JMB";
const COOKIE_KEY = "pg_cookie_consent";

function hasStatsConsent(): boolean {
  try {
    const stored = localStorage.getItem(COOKIE_KEY);
    if (!stored) return false;
    return !!JSON.parse(stored).stats;
  } catch {
    return false;
  }
}

export default function GoogleAnalytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    setConsented(hasStatsConsent());
    const onUpdate = () => setConsented(hasStatsConsent());
    window.addEventListener("pg-consent-updated", onUpdate);
    return () => window.removeEventListener("pg-consent-updated", onUpdate);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
