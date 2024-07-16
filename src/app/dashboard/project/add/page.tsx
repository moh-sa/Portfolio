import { ProjectForm } from "~/components/dashboard/ProjectForm";
import { createNewProjectAction } from "~/server/actions";

export default async function AddProjectPage() {
  return (
    <ProjectForm heading="New Project" formAction={createNewProjectAction} />
  );
}
