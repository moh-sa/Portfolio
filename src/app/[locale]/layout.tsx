import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Cairo } from "next/font/google";
import { getLocaleFile } from "~/locales/locales";
import { Locales } from "~/types";
import { getOpenGraphData } from "~/utils/metadata";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});

type TProps = {
  children: React.ReactNode;
  params: {
    locale: Locales;
  };
};
export default function LocaleLayout({ children, params: { locale } }: TProps) {
  const localeConfig = {
    locale: locale === Locales.ENGLISH ? "en" : "ar",
    dir: locale === Locales.ENGLISH ? "ltr" : "rtl",
    font: cairo.variable,
  };
  return (
    <html lang={localeConfig.locale} dir={localeConfig.dir}>
      <body className={`font-sans ${localeConfig.font} bg-navy`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
export async function generateMetadata({ params: { locale } }: TProps) {
  const loc = await getLocaleFile(locale);
  const { og, tw } = getOpenGraphData({
    localeData: loc.metadata,
    locale: locale,
  });
  return {
    title: loc.metadata.title,
    description: loc.metadata.description,
    openGraph: { ...og },
    twitter: { ...tw },
  };
}
