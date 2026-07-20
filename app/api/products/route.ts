import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const params = searchParams.toString();
  const res = await fetch(`http://localhost:3000/api/products?${params}`, { cache: "no-store" });
  const data = await res.json();
  return NextResponse.json(data);
}
