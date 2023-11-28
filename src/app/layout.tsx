import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Open_Sans } from "next/font/google";
import styles from "./layout.module.css";

const roboto = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const title = "Mohammed Sobhi Portfolio";
const description =
  "A Computer Engineer obsessed with crafting robust, user-friendly, and easy to access web applications";

export const metadata = {
  title: title,
  description: description,
  keywords: [
    "full-stack",
    "web developer",
    "react.js",
    "next.js",
    "mongoDB",
    "postgreSQL",
    "tailwind",
    "CSS",
    "native css",
    "typescript",
    "portfolio",
    "mohammed sobhi",
    "Tno",
    "MSA",
    "Tno MSA",
  ],
  openGraph: {
    title: title,
    description: description,
    url: "https://moh-sa.dev",
  },
  twitter: {
    title: title,
    description: description,
    creator: "@Tno_MSA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} ${styles.body}`}>
        <main className={styles.main}>{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
