import { SignInButton, SignedOut } from "@clerk/nextjs";

export default async function LoginToDashboardPage() {
  return (
    <SignedOut>
      <SignInButton />
    </SignedOut>
  );
}
