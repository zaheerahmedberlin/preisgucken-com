import { NextRequest, NextResponse } from "next/server";
import { createAdminToken } from "@/lib/adminAuth";
import { isRateLimited, getClientIp } from "@/lib/rateLimit";

export async function POST(req: NextRequest) {
  const ip = getClientIp(req);
  if (isRateLimited(`admin-login:${ip}`)) {
    return NextResponse.json({ error: "Zu viele Versuche, bitte später erneut versuchen" }, { status: 429 });
  }

  const { password } = await req.json();

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const res = NextResponse.json({ ok: true });
  // Signed, time-limited token — not the plaintext password itself (see
  // lib/adminAuth.ts for why the previous version was a real problem).
  res.cookies.set("admin_auth", createAdminToken(), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });
  return res;
}
