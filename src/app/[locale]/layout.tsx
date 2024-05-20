import { Analytics } from "@vercel/analytics/next";
import { Cairo } from "next/font/google";
import { getLocaleFile } from "~/locales/locales";
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
export async function generateMetadata({ params }: Pick<params, "params">) {
  const loc = await getLocaleFile(params.locale);
  const { og, tw } = getOpenGraphData({
    localeData: loc.metadata,
    locale: params.locale,
  });
  return {
    title: loc.metadata.title,
    description: loc.metadata.description,
    openGraph: { ...og },
    twitter: { ...tw },
  };
}
