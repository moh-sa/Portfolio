import type { MetadataRoute } from "next";
import { env } from "~/env";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.NEXT_PUBLIC_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${env.NEXT_PUBLIC_URL}/en`,
          ar: `${env.NEXT_PUBLIC_URL}/ar`,
        },
      },
    },
  ];
}
