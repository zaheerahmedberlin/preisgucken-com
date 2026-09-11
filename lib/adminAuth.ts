// lib/adminAuth.ts
// Previously, app/api/admin/login/route.ts set the `admin_auth` cookie's
// VALUE to the literal plaintext ADMIN_PASSWORD — meaning the real password
// was sent to the browser and stored there on every session, rather than an
// opaque/revocable session token. Any log, proxy, or browser extension that
// ever saw that cookie saw the actual password. Worse, nothing outside the
// login route ever verified this cookie at all — every "admin" API route
// (generate-video, generate-tiktok, tiktok/auth) was completely open to
// anonymous requests despite living behind what looked like a login wall.
//
// This replaces it with an HMAC-signed, time-limited token: the cookie value
// can't be reversed back into the password (one-way HMAC), and every
// sensitive route now actually verifies it via isAdminRequest().
import crypto from "crypto";
import { NextRequest } from "next/server";

const TOKEN_TTL_MS = 7 * 24 * 60 * 60 * 1000; // 7 days, matches the old cookie maxAge

function secret(): string {
  const s = process.env.ADMIN_PASSWORD;
  if (!s) throw new Error("ADMIN_PASSWORD not set");
  return s;
}

function sign(expiry: number): string {
  return crypto.createHmac("sha256", secret()).update(String(expiry)).digest("hex");
}

export function createAdminToken(): string {
  const expiry = Date.now() + TOKEN_TTL_MS;
  return `${expiry}.${sign(expiry)}`;
}

export function verifyAdminToken(token: string | undefined | null): boolean {
  if (!token) return false;
  const [expiryStr, mac] = token.split(".");
  const expiry = Number(expiryStr);
  if (!expiry || !mac || Date.now() > expiry) return false;

  const expected = Buffer.from(sign(expiry));
  const actual = Buffer.from(mac);
  if (expected.length !== actual.length) return false;
  return crypto.timingSafeEqual(expected, actual);
}

export function isAdminRequest(req: NextRequest): boolean {
  return verifyAdminToken(req.cookies.get("admin_auth")?.value);
}
