import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const accessToken = req.cookies.get("tiktok_access_token")?.value;
  if (!accessToken) {
    return NextResponse.json({ error: "Not authenticated with TikTok" }, { status: 401 });
  }

  const { videoUrl, caption } = await req.json();
  if (!videoUrl) {
    return NextResponse.json({ error: "videoUrl required" }, { status: 400 });
  }

  // Step 1: Initialize video upload
  const initRes = await fetch("https://open.tiktokapis.com/v2/post/publish/video/init/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      post_info: {
        title: caption || "Check preisgucken.de für die besten Deals! 🔥",
        privacy_level: "SELF_ONLY", // sandbox: always self-only
        disable_duet: false,
        disable_comment: false,
        disable_stitch: false,
      },
      source_info: {
        source: "PULL_FROM_URL",
        video_url: videoUrl,
      },
    }),
  });

  const initData = await initRes.json();

  if (initData.error?.code !== "ok") {
    return NextResponse.json({ error: initData.error?.message ?? "Upload init failed" }, { status: 500 });
  }

  return NextResponse.json({ publish_id: initData.data?.publish_id, status: "uploading" });
}
