import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const storedState = req.cookies.get("tiktok_state")?.value;

  if (!code || state !== storedState) {
    return NextResponse.redirect(new URL("/admin/tiktok?error=auth_failed", req.url));
  }

  const clientKey = process.env.TIKTOK_CLIENT_KEY_SANDBOX!;
  const clientSecret = process.env.TIKTOK_CLIENT_SECRET_SANDBOX!;
  const redirectUri = "https://www.preisgucken.com/api/tiktok/callback";

  const tokenRes = await fetch("https://open.tiktokapis.com/v2/oauth/token/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_key: clientKey,
      client_secret: clientSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUri,
    }),
  });

  const tokenData = await tokenRes.json();

  if (!tokenData.access_token) {
    return NextResponse.redirect(new URL("/admin/tiktok?error=token_failed", req.url));
  }

  const res = NextResponse.redirect(new URL("/admin/tiktok?tiktok=connected", req.url));
  res.cookies.set("tiktok_access_token", tokenData.access_token, { httpOnly: true, maxAge: tokenData.expires_in });
  res.cookies.delete("tiktok_state");
  return res;
}
