import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const accessToken = req.cookies.get("tiktok_access_token")?.value;
  if (!accessToken) {
    return NextResponse.json({ error: "Not authenticated with TikTok" }, { status: 401 });
  }

  const formData = await req.formData();
  const file = formData.get("video") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No video file provided" }, { status: 400 });
  }
  const rawCaption = (formData.get("caption") as string) || "Die besten Deals auf preisgucken.de";

  // TikTok title: strip emojis, hashtags, limit to 150 chars
  const title = rawCaption
    .replace(/#\S+/g, "")
    .replace(/[\u{1F300}-\u{1FFFF}]/gu, "")
    .trim()
    .slice(0, 150) || "Die besten Deals auf preisgucken.de";

  const videoBuffer = Buffer.from(await file.arrayBuffer());
  const videoSize = videoBuffer.byteLength;

  // Step 1: Initialize FILE_UPLOAD
  const initRes = await fetch("https://open.tiktokapis.com/v2/post/publish/video/init/", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${accessToken}`,
      "Content-Type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      post_info: {
        title,
        privacy_level: "SELF_ONLY",
        disable_duet: false,
        disable_comment: false,
        disable_stitch: false,
      },
      source_info: {
        source: "FILE_UPLOAD",
        video_size: videoSize,
        chunk_size: videoSize,
        total_chunk_count: 1,
      },
    }),
  });

  const initData = await initRes.json();
  if (initData.error?.code !== "ok") {
    return NextResponse.json({ error: initData.error?.message ?? "Upload init failed" }, { status: 500 });
  }

  const { publish_id, upload_url } = initData.data;

  // Step 2: Upload the video chunk
  const uploadRes = await fetch(upload_url, {
    method: "PUT",
    headers: {
      "Content-Type": "video/mp4",
      "Content-Range": `bytes 0-${videoSize - 1}/${videoSize}`,
      "Content-Length": String(videoSize),
    },
    body: videoBuffer,
  });

  if (!uploadRes.ok) {
    return NextResponse.json({ error: `Upload failed: ${uploadRes.status}` }, { status: 500 });
  }

  return NextResponse.json({ publish_id, status: "uploaded" });
}
