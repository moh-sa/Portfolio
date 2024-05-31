import { BackToDashboard } from "~/components";

type TProps = {
  heading: string;
};

export function FormHeader({ heading }: TProps) {
  return (
    <div className="w-full space-y-4">
      <BackToDashboard />
      <h1 className="text-3xl font-medium capitalize">{heading}</h1>
    </div>
  );
}
