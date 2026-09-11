// lib/rateLimit.ts
// In-memory fixed-window rate limiter — this app has no Redis (unlike the
// nextjs-app/preisgucken.de sibling, see its lib/rateLimit.js for the same
// gap fixed there), and a single small Node server doesn't need one for
// this: it only has to slow down password guessing against one admin
// login, not coordinate limits across many instances. Resets on deploy/
// restart, which is an acceptable tradeoff for that scope.
import { NextRequest } from "next/server";

const attempts = new Map<string, { count: number; resetAt: number }>();

export function isRateLimited(key: string, { max = 8, windowMs = 5 * 60 * 1000 } = {}): boolean {
  const now = Date.now();
  const entry = attempts.get(key);

  if (!entry || now > entry.resetAt) {
    attempts.set(key, { count: 1, resetAt: now + windowMs });
    return false;
  }

  entry.count += 1;
  return entry.count > max;
}

export function getClientIp(req: NextRequest): string {
  const fwd = req.headers.get("x-forwarded-for");
  return fwd ? fwd.split(",")[0].trim() : "unknown";
}
