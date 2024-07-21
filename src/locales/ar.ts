import { profileSkillsData, socialLinksDataAR } from "~/data";
import { env } from "~/env";
const AR = {
  metadata: {
    title: "أبرز أعمال محمد صبحي",
    description:
      "مهندس كمبيوتر شغوف بصناعة تطبيقات ويب ذات وظائف استثنائية وسهلة الاستخدام",
    url: `${env.NEXT_PUBLIC_URL}/ar`,
    ogImgUrl: `${env.NEXT_PUBLIC_URL}/og_ar.png`,
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
    emptyState:
      "عذرًا! أبرز أعمالي في استراحة!\nأواجه مشكلة في الاتصال بقاعدة البيانات.\nيرجى المحاولة وقت لاحق.",
    demoLabel: "معاينة",
    repoLabel: "الكود",
    noButtonsLabel: "غير متوفر",
  },
  general: {
    localeToggle: "English",
  },
};

export default AR;
