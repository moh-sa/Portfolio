import { FormSection } from "~/components";
import { createNewProjectAction } from "~/server/actions";

export default async function AddProjectPage() {
  return (
    <FormSection heading="New Project" formAction={createNewProjectAction} />
  );
}
