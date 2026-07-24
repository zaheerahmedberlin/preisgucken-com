import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("tiktok-developers-site-verification=jSvx5qWVsSFziNqSXcgJk0PviutDYCVg", {
    headers: { "Content-Type": "text/plain" },
  });
}
