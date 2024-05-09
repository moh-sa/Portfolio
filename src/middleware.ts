import { clerkMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import { skipRoutes } from "~/config";
import { Locales } from "~/types/locales";
import { getLocaleType } from "~/utils/";

const locales = Object.values(Locales);

export default clerkMiddleware((auth, request) => {
  const { pathname } = request.nextUrl;
  if (skipRoutes.includes(pathname)) return NextResponse.next();

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
    // Skip all internal paths (_next)
    "/((?!_next).*)",
    // Optional: only run on root (/) URL
    "/",
  ],
};
