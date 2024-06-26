import { profileSkillsData, socialLinksDataEN } from "~/data";
import { env } from "~/env";

const EN = {
  metadata: {
    title: "Mohammed Sobhi's Portfolio",
    description:
      "A Computer Engineer passionate about crafting user-friendly and accessible web applications with exceptional functionality",
    url: `${env.NEXT_PUBLIC_URL}/en`,
    ogImgUrl: `${env.NEXT_PUBLIC_URL}/og_en.png`,
    ogImgAlt: "Mohammed Sobhi Portfolio",
  },
  profile: {
    bio: {
      name: "Mohammed Sobhi",
      description:
        "A Computer Engineer passionate about crafting user-friendly and accessible web applications with exceptional functionality",
    },
    skills: {
      heading: "Tech Stack",
      stack: profileSkillsData,
    },
    contact: {
      heading: "Get in touch",
      links: socialLinksDataEN,
    },
  },
  projects: {
    heading: "My Profiles",
    emptyState: "It looks like I forgot to populate my portfolio.",
    demoLabel: "Live Demo",
    repoLabel: "Code",
    noButtonsLabel: "Not Available",
  },
  general: {
    localeToggle: "العربية",
  },
};

export default EN;
