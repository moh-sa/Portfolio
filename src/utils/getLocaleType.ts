import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { Locales } from "~/types";

export function getLocaleType(request: NextRequest) {
  const langHeader = request.headers.get("accept-language");
  if (!langHeader) return "en";

  const locales = Object.values(Locales);
  const headers = { "accept-language": langHeader };
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en";

  return match(languages, locales, defaultLocale);
}
