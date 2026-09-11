import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { isAdminRequest } from "@/lib/adminAuth";

export async function GET(req: NextRequest) {
  // Was open to anyone — a random visitor could kick off the OAuth flow and
  // connect their own TikTok account as "the" connected account.
  if (!isAdminRequest(req)) {
    return NextResponse.redirect(new URL("/admin/login", req.url));
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY_SANDBOX;
  const redirectUri = "https://www.preisgucken.com/api/tiktok/callback";

  const scope = "video.upload,video.publish";
  // Math.random() is not cryptographically secure and this value is a CSRF
  // guard (verified against the state param in the callback) — use a real
  // random source for it.
  const state = crypto.randomBytes(16).toString("hex");

  const url = new URL("https://www.tiktok.com/v2/auth/authorize/");
  url.searchParams.set("client_key", clientKey!);
  url.searchParams.set("scope", scope);
  url.searchParams.set("response_type", "code");
  url.searchParams.set("redirect_uri", redirectUri);
  url.searchParams.set("state", state);

  const res = NextResponse.redirect(url.toString());
  res.cookies.set("tiktok_state", state, { httpOnly: true, maxAge: 600 });
  return res;
}
