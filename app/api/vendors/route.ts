import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";
  const res = await fetch(`${base}/api/products?limit=100&inStockOnly=true&sort=priceAsc`, { cache: "no-store" });
  const data = await res.json();
  const vendors = [...new Set<string>(
    (data.products ?? []).map((p: any) => p.vendor).filter(Boolean)
  )].sort();
  return NextResponse.json({ vendors });
}
