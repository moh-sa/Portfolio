import { type selectProjectSchema } from "~/server/db/schemas";

import { FormHeader } from "./FormHeader";

import { Form } from "./Form";

type TProps = {
  heading: string;

  project?: typeof selectProjectSchema._type;

  formAction: (formData: FormData) => void;
};

export function FormSection({ heading, project, formAction }: TProps) {
  return (
    <div className="w-full max-w-xl px-4">
      <FormHeader heading={heading} />
      <Form project={project} formAction={formAction} />
    </div>
  );
}
