import { NextResponse } from "next/server";

export async function GET() {
  return new NextResponse("tiktok-developers-site-verification=jcU9pmfFDibUPMbiqK4XEaeRa5B27SRZ", {
    headers: { "Content-Type": "text/plain" },
  });
}
