import { FormSection } from "~/components";
import { updateProjectAction } from "~/server/actions";
import { getSingleProject } from "~/server/queries";

type TProps = {
  params: {
    id: string;
  };
};

export default async function EditProjectPage({ params: { id } }: TProps) {
  const project = await getSingleProject({ projectID: Number(id) });

  const actionWithProjectPayload = updateProjectAction.bind(
    null,
    project.payload!,
  );

  return (
    <FormSection
      heading="Edit Project"
      project={project.payload}
      formAction={actionWithProjectPayload}
    />
  );
}
