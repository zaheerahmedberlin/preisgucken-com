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

// Expire GA's cookies (_ga, _ga_<container>) on this host and every parent
// domain — GA sets them on the registrable domain, so deleting only on the
// exact host would miss them.
function deleteGaCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_") || n === "_gid" || n.startsWith("_gat"));
  if (names.length === 0) return;
  const parts = location.hostname.split(".");
  const domains = [location.hostname];
  for (let i = 0; i < parts.length - 1; i++) domains.push("." + parts.slice(i).join("."));
  for (const name of names) {
    for (const domain of domains) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${domain}`;
    }
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
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

  // Withdrawal: GA's own opt-out flag stops an already-loaded gtag from
  // sending anything until the next reload, and the cookies are removed.
  useEffect(() => {
    (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = !consented;
    if (!consented) deleteGaCookies();
  }, [consented]);

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
