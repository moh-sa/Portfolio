export function formDataToProjectDetails(formData: FormData) {
  const projectDetails = new Map<string, string | string[] | boolean>();

  formData.forEach((value, key) => {
    if (typeof value === "string") {
      if (key === "techStack") {
        const techStack = value.split(",").map((tech) => tech.trim());
        projectDetails.set("techStack", techStack);
      } else {
        projectDetails.set(key, value);
      }
    }

    projectDetails.set("hidden", formData.get("hidden") === "on");
    projectDetails.set("isOriginal", formData.get("isOriginal") === "on");
  });

  return Object.fromEntries(projectDetails);
}
