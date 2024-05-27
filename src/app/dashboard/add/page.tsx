import { isRedirectError } from "next/dist/client/components/redirect";
import { redirect } from "next/navigation";
import { ProjectForm } from "~/components";
import { createNewProject } from "~/server/queries";

export default async function AddProjectPage() {
  async function handleAddingNewProject(formData: FormData) {
    "use server";

    const projectDetails = new Map<string, string | string[]>();

    formData.forEach((value, key) => {
      if (typeof value === "string") {
        if (key === "techStack") {
          const techStack = value.split(",").map((tech) => tech.trim());
          projectDetails.set("techStack", techStack);
        } else {
          projectDetails.set(key, value);
        }
      }
    });

    const newProject = Object.fromEntries(projectDetails);

    try {
      await createNewProject({ newProject });
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
    <ProjectForm heading="New Project" formAction={handleAddingNewProject} />
  );
}
