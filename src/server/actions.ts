"use server";

import {
  isRedirectError,
  redirect,
} from "next/dist/client/components/redirect";
import { formDataToProjectDetails } from "~/utils/formDataToProjectDetails";
import { type projectSchema } from "./db/schemas";
import {
  createNewProject,
  deleteProject,
  updateSingleProject,
  uploadImageAndGetURL,
} from "./queries";

export async function createNewProjectAction(formData: FormData) {
  const imageURL = await uploadImageAndGetURL(formData);
  formData.set("imageURL", imageURL!);

  const projectObject = formDataToProjectDetails(formData);

  try {
    await createNewProject({ newProject: projectObject });
    redirect(`/dashboard`);
  } catch (error) {
    // 👇 this is a workaround for the strange behavior of next's redirect.

    // 'redirect' should be called outside of a try/catch block, but then you will lose the field values if the api call fails.

    // @see https://github.com/vercel/next.js/issues/55586

    if (isRedirectError(error)) {
      console.log(error);

      throw error;
    } else {
      console.log(error);
    }
  }
}

export async function updateProjectAction(
  project: typeof projectSchema.$inferSelect,
  formData: FormData,
) {
  const file = formData.get("imageURL") as File;

  let imageURL = "";
  if (file?.size === 0) {
    formData.delete("imageURL");
  } else if (file.size > 0) {
    imageURL = (await uploadImageAndGetURL(formData))!;
    formData.set("imageURL", imageURL);
  }

  const projectObject = formDataToProjectDetails(formData);
  const updatedProject = { ...project, ...projectObject };

  try {
    await updateSingleProject({ updatedProject });
    redirect(`/dashboard`);
  } catch (error) {
    // 👇 this is a workaround for the strange behavior of next's redirect.

    // 'redirect' should be called outside of a try/catch block, but then you will lose the field values if the api call fails.

    // @see https://github.com/vercel/next.js/issues/55586

    if (isRedirectError(error)) {
      console.log(error);

      throw error;
    } else {
      console.log(error);
    }
  }
}

export async function deleteProjectAction({
  projectID,
}: {
  projectID: number;
}) {
  await deleteProject(projectID);
}
