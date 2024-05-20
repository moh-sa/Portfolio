import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import { metaInfo } from "~/config/metadata";
import { Locales } from "~/types";
import { getOpenGraphData } from "~/utils/metadata";

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
    font: cairo.variable,
  };
  return (
    <html lang={localeConfig.locale} dir={localeConfig.dir}>
      <body className={`font-sans ${localeConfig.font} bg-navy`}>
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
