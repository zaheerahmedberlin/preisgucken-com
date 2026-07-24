import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const accessToken = req.cookies.get("tiktok_access_token")?.value;
  if (!accessToken) {
    return NextResponse.json({ error: "Not authenticated" }, { status: 401 });
  }

  const publishId = req.nextUrl.searchParams.get("publish_id");
  if (!publishId) {
    return NextResponse.json({ error: "publish_id required" }, { status: 400 });
  }

  const res = await fetch("https://open.tiktokapis.com/v2/post/publish/status/fetch/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({ publish_id: publishId }),
  });

  const data = await res.json();
  console.log("[TikTok status]", JSON.stringify(data));
  return NextResponse.json(data);
}
