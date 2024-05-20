import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Cairo, Roboto_Mono } from "next/font/google";
import { metaInfo } from "~/config/metadata";
import { Locales } from "~/types";
import { getOpenGraphData } from "~/utils/metadata";

const roboto = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});

type params = {
  children: React.ReactNode;
  params: {
    locale: Locales;
  };
};
export default function LocaleLayout({ children, params }: params) {
  const localeConfig = {
    locale: params.locale === Locales.ENGLISH ? "en" : "ar",
    dir: params.locale === Locales.ENGLISH ? "ltr" : "rtl",
    fontFamily:
      params.locale === Locales.ENGLISH ? roboto.variable : cairo.variable,
  };
  return (
    <html lang={localeConfig.locale} dir={localeConfig.dir}>
      <body className={`font-sans ${localeConfig.fontFamily} bg-navy`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

export function generateMetadata({ params }: Pick<params, "params">): Metadata {
  const locale = params.locale === Locales.ENGLISH ? "en" : "ar";
  const { og, tw } = getOpenGraphData({ locale: locale });
  return {
    title: metaInfo[locale].title,
    description: metaInfo[locale].description,
    openGraph: { ...og },
    twitter: { ...tw },
  };
}
