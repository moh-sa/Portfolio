import type { MetadataRoute } from "next";
import { env } from "~/env";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/ar"],
      disallow: "/dashboard",
    },
    sitemap: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/sitemap.xml`,
  };
}
