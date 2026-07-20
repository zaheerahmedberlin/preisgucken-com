import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = searchParams.toString();
  const base = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";
  const res = await fetch(`${base}/api/products?${params}`, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data);
}
