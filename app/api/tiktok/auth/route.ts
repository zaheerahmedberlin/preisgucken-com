import { NextResponse } from "next/server";

export async function GET() {
  const clientKey = process.env.TIKTOK_CLIENT_KEY_SANDBOX;
  const redirectUri = "https://www.preisgucken.com/api/tiktok/callback";

  const scope = "video.upload,video.publish";
  const state = Math.random().toString(36).slice(2);

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
