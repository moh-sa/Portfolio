import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Locales } from "~/types/locales";
import { getLocaleType } from "~/utils/";

const locales = Object.values(Locales);

export default clerkMiddleware((auth, request) => {
  const { pathname } = request.nextUrl;

  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocaleType(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - dashboard (dashboard page)
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - og_en.png (open graph image for English)
     * - og_ar.png (open graph image for Arabic)
     */
    "/((?!api|_next/static|_next/image|dashboard|favicon.ico|robots.txt|sitemap.xml|og_en.png|og_ar.png).*)",
  ],
};
