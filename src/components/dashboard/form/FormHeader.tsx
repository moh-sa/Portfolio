import { SignedIn, UserButton } from "@clerk/nextjs";
import { BackToDashboard } from "~/components";

type TProps = {
  heading: string;
};

export function FormHeader({ heading }: TProps) {
  return (
    <div className="flex w-full flex-row items-center justify-between">
      <h1 className="text-3xl font-medium capitalize">{heading}</h1>
      <div className="flex items-center justify-evenly gap-2">
        <BackToDashboard />
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
}
