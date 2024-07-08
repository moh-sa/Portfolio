"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/client/components/redirect";
import { convertBooleans, getCheckboxBooleanValue } from "~/utils";
import {
  deleteProject,
  insertProject,
  updateProject,
} from "./db/projectQueries";
import { type selectProjectSchema } from "./db/schemas";
import { uploadImageAndGetURL } from "./uploadImageAndGetURL";

const checkBoxes = ["isHidden", "isOriginal"];

export async function createNewProjectAction(formData: FormData) {
  const imageURL = await uploadImageAndGetURL({ formData });
  formData.set("imageURL", imageURL ?? "");

  checkBoxes.forEach((key) => {
    const value = getCheckboxBooleanValue({ formData, key }).toString();
    formData.set(key, value);
  });

  const formDataToObject = Object.fromEntries(formData);
  const convertedBooleans = convertBooleans({ data: formDataToObject });

  const response = await insertProject({ project: convertedBooleans });
  if (response.status === "failure") return response;

  revalidatePath("/[locale]", "page");
  revalidatePath("/dashboard", "page");
  redirect(`/dashboard`);
}

export async function updateProjectAction(
  project: typeof selectProjectSchema._type,
  formData: FormData,
) {
  const file = formData.get("imageURL") as File;

  if (file.size === 0) {
    formData.delete("imageURL");
  } else if (file.size > 0) {
    const imageURL = (await uploadImageAndGetURL({ formData })) ?? "";
    formData.set("imageURL", imageURL);
  }

  checkBoxes.forEach((key) => {
    const value = getCheckboxBooleanValue({ formData, key }).toString();
    formData.set(key, value);
  });

  const formDataToObject = Object.fromEntries(formData);
  const convertedBooleans = convertBooleans({ data: formDataToObject });
  const updatedProject = { ...project, ...convertedBooleans };

  const response = await updateProject({ project: updatedProject });
  if (response.status === "failure") return response;

  revalidatePath("/[locale]", "page");
  revalidatePath("/dashboard", "page");
  redirect(`/dashboard`);
}

export async function deleteProjectAction({
  projectID,
}: {
  projectID: number;
}) {
  const response = await deleteProject({ projectID });
  if (response.status === "failure") return response;

  revalidatePath("/[locale]", "page");
  revalidatePath("/dashboard", "page");
}
