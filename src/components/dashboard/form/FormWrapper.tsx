import { type selectProjectSchema } from "~/server/db/schemas";

import { FormHeader } from "./FormHeader";

import { FormElement } from "./FormElement";

type TProps = {
  heading: string;

  project?: typeof selectProjectSchema._type;

  formAction: (formData: FormData) => void;
};

export function FormWrapper({ heading, project, formAction }: TProps) {
  return (
    <div className="w-full max-w-xl px-4">
      <FormHeader heading={heading} />
      <FormElement project={project} formAction={formAction} />
    </div>
  );
}
