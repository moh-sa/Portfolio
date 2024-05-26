import { redirect } from "next/navigation";
import { ProjectForm } from "~/components";
import { createNewProject } from "~/server/queries";

export default async function AddProjectPage() {
  async function handleAddingNewProject(formData: FormData) {
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

    const newProject = Object.fromEntries(projectDetails);

    try {
      await createNewProject({ newProject });
      redirect(`/dashboard`);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <ProjectForm heading="New Project" formAction={handleAddingNewProject} />
  );
}
