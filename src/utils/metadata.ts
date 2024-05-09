import { metaInfo } from "~/config";

export function getOpenGraphData({ locale }: { locale: "en" | "ar" }) {
  return {
    og: {
      title: metaInfo[locale].title,
      description: metaInfo[locale].description,
      url: metaInfo[locale].url,
      images: {
        url: metaInfo[locale].imgUrl,
        alt: metaInfo[locale].imgAlt,
        width: 1200,
        height: 630,
      },
      locale: locale,
      type: "website",
    },
    tw: {
      card: "summary_large_image",
      title: metaInfo[locale].title,
      description: metaInfo[locale].description,
      images: metaInfo[locale].imgUrl,
    },
  };
}
