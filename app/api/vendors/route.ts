import { NextResponse } from "next/server";

export async function GET() {
  const base = process.env.PRODUCTS_API_URL ?? "https://www.preisgucken.de";
  const res = await fetch(`${base}/api/vendor/list?all=true`, { cache: "no-store" });
  const data = await res.json();
  const vendors = (data.vendors ?? []).map((v: any) => v.name).sort();
  return NextResponse.json({ vendors });
}
