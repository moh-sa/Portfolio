import { ClerkProvider, SignedIn, UserButton } from "@clerk/nextjs";
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
          <main className="to-navy-600 from-navy-500 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b py-8">
            <SignedIn>
              <UserButton />
            </SignedIn>
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
