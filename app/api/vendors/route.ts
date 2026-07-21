import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";
  const res = await fetch(`${base}/api/vendors`, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data);
}
