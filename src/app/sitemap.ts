import type { MetadataRoute } from "next";
import { env } from "~/env";
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.NEXT_PUBLIC_URL ?? "https://" + env.NEXT_PUBLIC_VERCEL_URL}`,
      lastModified: new Date(),
      alternates: {
        languages: {
          en: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/en`,
          ar: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/ar`,
        },
      },
    },
  ];
}
