import "server-only";
import type { Locales } from "~/types";

// dynamic import of the locale file.
const locales = {
  en: () => import("~/locales/en.json").then((module) => module.default),
  ar: () => import("~/locales/ar.json").then((module) => module.default),
};

export const getLocaleFile = async (locale: Locales) => locales[locale]();
