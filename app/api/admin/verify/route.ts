import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";

// Lets client components (e.g. app/admin/tiktok/page.tsx) check auth state
// without needing a server component wrapper — that page previously had no
// auth check at all, client- or server-side.
export async function GET(req: NextRequest) {
  return NextResponse.json({ authenticated: isAdminRequest(req) });
}
