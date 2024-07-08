import { type ReactNode } from "react";
import { FormSection } from "~/components";
import { updateProjectAction } from "~/server/actions";
import { readProjectByID } from "~/server/db/projectQueries";

type TProps = {
  params: {
    id: string;
  };
};

export default async function EditProjectPage({ params: { id } }: TProps) {
  const project = await readProjectByID({ projectID: Number(id) });
  if (project.status === "failure")
    return (
      <>
        <h1>{project.error.message}</h1>
        <p>{project.error?.cause as ReactNode}</p>
      </>
    );

  const actionWithProjectPayload = updateProjectAction.bind(
    null,
    project.payload,
  );

  return (
    <FormSection
      heading="Edit Project"
      project={project.payload}
      formAction={actionWithProjectPayload}
    />
  );
}
