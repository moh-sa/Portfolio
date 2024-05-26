import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { ProjectForm } from "~/components";
import { getSingleProject, updateSingleProject } from "~/server/queries";

type TProps = {
  params: {
    id: string;
  };
};
export default async function EditProjectPage({ params: { id } }: TProps) {
  const project = await getSingleProject({ projectID: Number(id) });

  async function handleSubmit(formData: FormData) {
    "use server";

    const projectDetails = new Map<string, string | string[]>();

    formData.forEach((value, key) => {
      if (!key.includes("$ACTION_ID") && typeof value === "string") {
        if (key === "techStack") {
          const techStack = value.split(",").map((tech) => tech.trim());
          projectDetails.set("techStack", techStack);
        } else {
          projectDetails.set(key, value);
        }
      }
    });

    const projectObject = Object.fromEntries(projectDetails);
    const updatedProject = { ...project.payload, ...projectObject };

    try {
      await updateSingleProject({ updatedProject });
      redirect(`/dashboard`);
    } catch (error) {
      // 👇 this is a workaround for the strange behavior of next's redirect.
      // 'redirect' should be called outside of a try/catch block, but then you will lose the field values if the api call fails.
      // @see https://github.com/vercel/next.js/issues/55586
      if (isRedirectError(error)) {
        throw error;
      } else {
        console.log(error);
      }
    }
  }

  return (
    <ProjectForm
      heading="Edit Project"
      project={project.payload}
      formAction={handleSubmit}
    />
  );
}
