export function formDataToProjectDetails(formData: FormData) {
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

  return Object.fromEntries(projectDetails);
}
