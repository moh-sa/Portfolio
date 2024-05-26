import type { MetadataRoute } from "next";
import { env } from "~/env";

export default function robot(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/", "/en", "/ar"],
      disallow: "/dashboard",
    },
    sitemap: `${env.NEXT_PUBLIC_URL}/sitemap.xml`,
  };
}
