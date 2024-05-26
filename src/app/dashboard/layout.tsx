import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`font-sans ${cairo.variable}`}>
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-navy to-navy-dark py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
