import "./globals.css";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mohammed Sobhi Portfolio",
  description:
    "A Computer Engineer obsessed with crafting robust, user-friendly, and easy to access web applications.",
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
