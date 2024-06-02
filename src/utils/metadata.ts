import { type TLocales } from "~/locales/locales";
import { type Locales } from "~/types";

export function getOpenGraphData({
  localeData,
  locale,
}: {
  localeData: TLocales["metadata"];
  locale: Locales;
}) {
  return {
    og: {
      title: localeData.title,
      description: localeData.description,
      url: localeData.url,
      images: {
        url: localeData.ogImgUrl,
        alt: localeData.ogImgAlt,
        width: 1200,
        height: 630,
      },
      locale: locale,
      type: "website",
    },
    tw: {
      card: "summary_large_image",
      title: localeData.title,
      description: localeData.description,
      images: localeData.ogImgUrl,
    },
  };
}
