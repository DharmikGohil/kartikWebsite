// Vercel Edge Middleware — returns 404 status for known invalid URL patterns
// This prevents Google from seeing soft 404s (200 status with "not found" content)

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: "/((?!api|assets|favicon|apple-touch|manifest|robots|sitemap|kartikPhoto|sample-qc|_next|\\.well-known).*)",
};

export default function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Known invalid patterns that should 404 immediately
  // e.g., /guides/*, /download (non-existent routes)
  const invalidPrefixes = ["/guides/", "/wp-", "/admin", "/.env", "/xmlrpc"];
  if (invalidPrefixes.some((p) => pathname.startsWith(p))) {
    return new NextResponse("Not Found", { status: 404 });
  }

  return NextResponse.next();
}
