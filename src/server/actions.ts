"use server";

import { redirect } from "next/navigation";

import { formDataToProjectDetails } from "~/utils/formDataToProjectDetails";

import { type projectsSchema } from "./db/schema";

import { isRedirectError } from "next/dist/client/components/redirect";
import { createNewProject, updateSingleProject } from "./queries";

export async function createNewProjectAction(formData: FormData) {
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
  project: typeof projectsSchema.$inferSelect,

  formData: FormData,
) {
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
