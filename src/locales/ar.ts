import { profileSkillsData, socialLinksDataAR } from "~/data";
import { env } from "~/env";
const AR = {
  metadata: {
    title: "محمد صبحي - مهندس برمجيات",
    description:
      "مهندس برمجيات شغوف بتطوير تطبيقات ويب متكاملة تجمع بين القدرات الاستثنائية، الجاذبية البصرية، وسهولة الاستخدام لتقديم تجارب رقمية فريدة",
    url: `${env.NEXT_PUBLIC_URL}/ar`,
    ogImgUrl: `${env.NEXT_PUBLIC_URL}/og_ar.png`,
    ogImgAlt: "آخر أعمال محمد صبحي",
  },
  profile: {
    bio: {
      name: "محمد صبحي",
      description:
        "مهندس برمجيات مع بكالوريس في هندسة الكمبيوتر، شغوف بتطوير تطبيقات ويب متكاملة تجمع بين القدرات الاستثنائية، الجاذبية البصرية، وسهولة الاستخدام لتقديم تجارب رقمية فريدة",
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
      "عذرًا! أعمالي في استراحة!\nأواجه مشكلة في الاتصال بقاعدة البيانات.\nيرجى المحاولة وقت لاحق.",
    demoLabel: "معاينة",
    repoLabel: "الكود",
    noButtonsLabel: "غير متوفر",
  },
  general: {
    localeToggle: "English",
  },
};

export default AR;
