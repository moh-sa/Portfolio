import { env } from "~/env";

export const metaInfo = {
  en: {
    title: "Mohammed Sobhi Portfolio",
    description:
      "A Computer Engineer passionate about crafting user-friendly and accessible web applications with exceptional functionality",
    url: `${env.NEXT_PUBLIC_URL}/en`,
    imgUrl: `${env.NEXT_PUBLIC_URL}/og_en.png`,
    imgAlt: "Mohammed Sobhi Portfolio",
  },
  ar: {
    title: "محمد سبحي برنامج وب",
    description:
      "محمد سبحي برنامج وب شائع للمصممين في تصميم وب أفضل طريقة لتطوير الواجهات المستخدمة والمتاحة للأستخدام",
    url: `${env.NEXT_PUBLIC_URL}/ar`,
    imgUrl: `${env.NEXT_PUBLIC_URL}/og_ar.png`,
    imgAlt: "آخر أعمال محمد صبحي",
  },
};

export const keywords = [
  "fullstack",
  "frontend",
  "backend",
  "next",
  "react",
  "redux",
  "react router",
  "express",
  "typescript",
  "css",
  "tailwind css",
  "sql",
  "mysql",
  "postgresql",
  "mongodb",
  "prisma",
  "drizzle",
  "jwt",
  "json web token",
  "accessibility",
  "web developer",
  "engineer",
  "programming",
  "coding",
];
