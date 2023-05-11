import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

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
  params: { lang },
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  return (
    <html lang={lang}>
      <body className={`${inter.className} ${styles.layout}`}>{children}</body>
    </html>
  );
}
