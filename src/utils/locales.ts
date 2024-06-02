import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import type { NextRequest } from "next/server";
import { Locales } from "~/types";

export function getLocaleType(request: NextRequest) {
  const langHeader = request.headers.get("accept-language");
  if (!langHeader) return "en";

  const locales = Object.values(Locales);

  const headers = { "accept-language": langHeader };
  // eslint-disable-next-line
  const languages = new Negotiator({ headers }).languages();
  const defaultLocale = "en";

  // eslint-disable-next-line
  return match(languages, locales, defaultLocale);
}
