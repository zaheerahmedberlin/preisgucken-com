import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const base = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";
  const body = await req.text();

  const res = await fetch(`${base}/api/admin/generate-video`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
