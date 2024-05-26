import { profileSkillsData, socialLinksDataAR } from "~/data";
import { env } from "~/env";
const AR = {
  metadata: {
    title: "أبرز أعمال محمد صبحي",
    description:
      "مهندس كمبيوتر شغوف بصناعة تطبيقات ويب ذات وظائف استثنائية وسهلة الاستخدام",
    url: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/ar`,
    ogImgUrl: `${env.NODE_ENV === "production" ? env.NEXT_PUBLIC_URL : "https://" + env.NEXT_PUBLIC_VERCEL_URL}/og_ar.png`,
    ogImgAlt: "آخر أعمال محمد صبحي",
  },
  profile: {
    bio: {
      name: "محمد صبحي",
      description:
        "مهندس كمبيوتر شغوف بصناعة تطبيقات ويب ذات وظائف استثنائية وسهلة الاستخدام",
    },
    skills: {
      heading: "المهارات",
      stack: profileSkillsData,
    },
    contact: {
      heading: "تواصل معي",
      links: socialLinksDataAR,
    },
  },
  projects: {
    heading: "أبرز الأعمال",
    emptyState: "يبدو أنني نسيت إضافة بعض الأعمال.",
    demoLabel: "معاينة",
    repoLabel: "الكود",
    noButtonsLabel: "غير متوفر",
  },
  general: {
    localeToggle: "English",
  },
};

export default AR;
