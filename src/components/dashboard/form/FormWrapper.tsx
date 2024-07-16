import { FormHeader } from "./FormHeader";

import { FormElement } from "./FormElement";

type TProps = {
  heading: string;
  formAction: (formData: FormData) => void;
  children: React.ReactNode;
};

export function FormWrapper({ heading, formAction, children }: TProps) {
  return (
    <div className="w-full max-w-xl px-4">
      <FormHeader heading={heading} />
      <FormElement formAction={formAction}>{children}</FormElement>
    </div>
  );
}
