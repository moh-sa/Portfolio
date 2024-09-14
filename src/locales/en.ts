import { profileSkillsData, socialLinksDataEN } from "~/data";
import { env } from "~/env";

const EN = {
  metadata: {
    title: "Mohammed Sobhi - Software Engineer",
    description:
      "A Software Engineer passionate about crafting visually appealing, user-friendly, and high-quality full-stack web applications.",
    url: `${env.NEXT_PUBLIC_URL}/en`,
    ogImgUrl: `${env.NEXT_PUBLIC_URL}/og_en.png`,
    ogImgAlt: "Mohammed Sobhi Portfolio",
  },
  profile: {
    bio: {
      name: "Mohammed Sobhi",
      description:
        "A Software Engineer with a B.E. in Computer Engineering, passionate about crafting visually appealing, user-friendly, and high-quality full-stack web apps while following the industry best practices and Accessibility Guidelines",
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
    heading: "My Projects",
    emptyState:
      "Whoops! My projects are on a coffee break!\nHaving trouble connecting to the database.\nPlease check back soon.",
    demoLabel: "Live Demo",
    repoLabel: "Code",
    noButtonsLabel: "Not Available",
  },
  general: {
    localeToggle: "العربية",
  },
};

export default EN;
