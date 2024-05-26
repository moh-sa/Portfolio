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
  console.log("🚨🚨🚨");
  console.log(env.NODE_ENV);
  console.log("🚨🚨🚨");

  return children;
}

export const viewport: Viewport = {
  themeColor: "#242447",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  keywords: [...keywords],
  alternates: {
    canonical: `${env.NEXT_PUBLIC_URL}`,
    languages: {
      en: `${env.NEXT_PUBLIC_URL}/en`,
      ar: `${env.NEXT_PUBLIC_URL}/ar`,
    },
  },
};
