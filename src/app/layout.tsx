import type { Metadata, Viewport } from "next";
import { keywords } from "~/data";
import { env } from "~/env";
import "~/styles/globals.css";

// Since we have a "not-found.tsx" page, a layout is required.
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

export const viewport: Viewport = {
  themeColor: "#242447",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  keywords: [...keywords],
  alternates: {
    canonical: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}`,
    languages: {
      en: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/en`,
      ar: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/ar`,
    },
  },
};
