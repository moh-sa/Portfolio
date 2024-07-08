import { projectSchema } from "~/server/db/schemas";

export const baseFields = {
  id: projectSchema.id,
  techStack: projectSchema.techStack,
  imageURL: projectSchema.imageURL,
  demoURL: projectSchema.demoURL,
  repoURL: projectSchema.repoURL,
  isOriginal: projectSchema.isOriginal,
  isHidden: projectSchema.isHidden,
  createdAt: projectSchema.createdAt,
};

export const englishField = {
  ...baseFields,
  title: projectSchema.titleEN,
  description: projectSchema.descriptionEN,
  imageAlt: projectSchema.imageAltEN,
};

export const arabicField = {
  ...baseFields,
  title: projectSchema.titleAR,
  description: projectSchema.descriptionAR,
  imageAlt: projectSchema.imageAltAR,
};
