import { FormWrapper } from "~/components";
import { createNewProjectAction } from "~/server/actions";

export default async function AddProjectPage() {
  return (
    <FormWrapper heading="New Project" formAction={createNewProjectAction} />
  );
}
