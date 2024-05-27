import {
  clerkClient,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { Locales } from "~/types/locales";
import { getLocaleType } from "~/utils/";

const locales = Object.values(Locales);

const isProtectedRoute = createRouteMatcher(["/dashboard(.*)"]);
export default clerkMiddleware(async (auth, request) => {
  const { pathname } = request.nextUrl;

  if (isProtectedRoute(request)) {
    const user = auth();

    if (!user.userId) {
      if (pathname === "/dashboard/login") return NextResponse.next();

      const url = request.nextUrl.clone();
      url.pathname = "/dashboard/login";
      return NextResponse.rewrite(url);
    }

    const userDetails = await clerkClient.users.getUser(user.userId);
    if (userDetails?.privateMetadata?.isAdmin) return NextResponse.next();

    return NextResponse.redirect(new URL("/", request.url));
  }

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
     * - favicon.ico (favicon file)
     * - robots.txt (robots file)
     * - sitemap.xml (sitemap file)
     * - og_en.png (open graph image for English)
     * - og_ar.png (open graph image for Arabic)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|og_en.png|og_ar.png).*)",
  ],
};
