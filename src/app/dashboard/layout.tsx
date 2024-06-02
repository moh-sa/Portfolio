import { ClerkProvider } from "@clerk/nextjs";
import { Cairo } from "next/font/google";
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Dashboard",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`font-sans ${cairo.variable}`}>
          <main className="min-h-screen bg-gradient-to-b from-navy-600 to-black px-4 py-8">
            <div className="mx-auto max-w-3xl">{children}</div>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
