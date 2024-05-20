import { cache } from "react";
import "server-only";
import type { Locales } from "~/types";

// dynamic import of the locale file.
const locales = {
  en: () => import("~/locales/en").then((module) => module.default),
  ar: () => import("~/locales/ar").then((module) => module.default),
};

export const getLocaleFile = cache(async (locale: Locales) =>
  locales[locale](),
);

export type TLocales = Awaited<ReturnType<typeof getLocaleFile>>;
