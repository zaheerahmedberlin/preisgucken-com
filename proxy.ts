import { NextRequest, NextResponse } from "next/server";
import { isAdminRequest } from "@/lib/adminAuth";

// This file already existed and already gated /admin/* pages — missed
// during the initial audit because it's Next 16's renamed middleware
// convention (proxy.ts, not middleware.ts). It compared the admin_auth
// cookie directly against the plaintext ADMIN_PASSWORD, same flaw fixed in
// app/api/admin/login/route.ts (see lib/adminAuth.ts) — updated here to use
// the same signed-token check instead of duplicating the plaintext compare.
export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin") && !pathname.startsWith("/admin/login")) {
    if (!isAdminRequest(req)) {
      return NextResponse.redirect(new URL("/admin/login", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
