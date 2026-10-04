// Shared reader for the cookie-consent record kept in localStorage.
// A stored choice counts for 12 months; after that the banner asks again and
// Google Analytics stays off until the visitor decides anew.

export const COOKIE_KEY = "pg_cookie_consent";
export const CONSENT_MAX_AGE_MS = 365 * 24 * 60 * 60 * 1000;

export type StoredConsent = { stats: boolean; updatedAt: number };

/** The saved choice, or null if none exists, it is unreadable, or it is older than 12 months. */
export function getValidConsent(now: number = Date.now()): StoredConsent | null {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const updatedAt = Number(parsed?.updatedAt);
    if (!Number.isFinite(updatedAt) || now - updatedAt > CONSENT_MAX_AGE_MS) return null;
    return { stats: !!parsed.stats, updatedAt };
  } catch {
    return null;
  }
}
