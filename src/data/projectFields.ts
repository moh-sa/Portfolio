import { type TGroupedFields } from "~/types";

export const groupedFields: TGroupedFields = {
  title: [
    {
      as: "input",
      type: "text",
      id: "titleEN",
      label: "Title",
      placeholder: "Project Name in English.",
    },
    {
      as: "input",
      type: "text",
      id: "titleAR",
      label: "اسم العمل",
      placeholder: "اسم العمل بالعربية",
      isArabic: "rtl",
    },
  ],
  description: [
    {
      as: "textarea",
      id: "descriptionEN",
      label: "Description",
      placeholder: "Project Description in English.",
    },
    {
      as: "textarea",
      id: "descriptionAR",
      label: "الوصف",
      placeholder: "وصف العمل بالعربية.",
      isArabic: "rtl",
    },
  ],
  image: [
    {
      as: "input",
      type: "url",
      id: "imageURL",
      label: "Image URL",
      placeholder: "Image URL",
    },
    {
      as: "textarea",
      id: "imageAltEN",
      label: "Image Alt Text",
      placeholder: "Image Alt in English.",
    },
    {
      as: "textarea",
      id: "imageAltAR",
      label: "وصف الصورة",
      placeholder: "وصف الصورة بالعربية.",
      isArabic: "rtl",
    },
  ],
  links: [
    {
      as: "input",
      type: "url",
      id: "demoURL",
      label: "Demo URL",
      placeholder: "Live demo URL.",
    },
    {
      as: "input",
      type: "url",
      id: "repoURL",
      label: "Repo URL",
      placeholder: "Github repo URL.",
    },
  ],
  techStack: [
    {
      as: "input",
      type: "text",
      id: "techStack",
      label: "Tech Stack",
      placeholder: "Tech,AnotherTech,OneMoreTech",
    },
  ],
  other: [
    {
      as: "checkbox",
      id: "hidden",
      label: "Hidden",
    },
    {
      as: "checkbox",
      id: "isOriginal",
      label: "Is Original",
    },
  ],
};
