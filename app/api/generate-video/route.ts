import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";

export async function POST(req: NextRequest) {
  // Was completely open — any anonymous request triggered a real ffmpeg
  // render on the preisgucken.de production server via the proxy below.
  if (!isAdminRequest(req)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const base = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";
  const body = await req.text();

  const res = await fetch(`${base}/api/admin/generate-video`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      // Server-to-server hop, not a browser request — preisgucken.de is a
      // different origin so it can't see this app's admin_auth cookie. The
      // shared key proves this specific proxy is trusted; the human-level
      // admin check above already happened.
      "x-internal-api-key": process.env.INTERNAL_API_KEY || "",
    },
    body,
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Video generation failed" }, { status: 500 });
  }

  const buffer = await res.arrayBuffer();
  return new NextResponse(buffer, {
    headers: {
      "Content-Type": "video/mp4",
      "Content-Disposition": 'attachment; filename="preisgucken-promo.mp4"',
    },
  });
}
