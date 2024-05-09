import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Cairo, Inter } from "next/font/google";
import { metaInfo } from "~/config/metadata";
import { Locales } from "~/types";
import { getOpenGraphData } from "~/utils/metadata";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});

// TODO: check if needed
// export async function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "ar" }];
// }
type params = {
  children: React.ReactNode;
  params: {
    locale: Locales;
  };
};
export default function RootLayout({ children, params }: params) {
  const localeConfig = {
    locale: params.locale === Locales.ENGLISH ? "en" : "ar",
    dir: params.locale === Locales.ENGLISH ? "ltr" : "rtl",
    fontFamily:
      params.locale === Locales.ENGLISH ? inter.variable : cairo.variable,
  };
  return (
    <html lang={localeConfig.locale} dir={localeConfig.dir}>
      <body className={`font-sans ${localeConfig.fontFamily}`}>
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
