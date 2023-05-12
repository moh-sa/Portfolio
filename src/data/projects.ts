import { skills as s } from "./skills";
import { StaticImageData } from "next/image";
import memories from "../../public/memories.webp";
import appleStore from "../../public/apple_like_store.webp";
import autoCorrection from "../../public/auto_correction_smart_examination_system.webp";
import portfolio from "../../public/portfolio.webp";
import proShop from "../../public/proShop.webp";
import globe from "../../public/globe.webp";
import platformer from "../../public/platformer.webp";

export interface ProjectType {
  title: string;
  description: string;
  year: number;
  isOriginal?: boolean;
  demoSrc?: string;
  repoSrc?: string;
  imgSrc: StaticImageData | string;
  imgAlt: string;
  tech: string[];
}

export const projects: ProjectType[] = [
  {
    title: "Portfolio",
    description:
      "One of my top priorities was developing an accessible portfolio for all users, regardless of any visual limitations they may have. To achieve this goal, I have used color schemes that are friendly for those who are colorblind, and I have made sure to be in compliance with WCAG standards. Utilizing the latest features of Next.js 13 and Native CSS, I have brought my vision to life with a minimalist design that sets my work apart from others.",
    year: 2023,
    isOriginal: true,
    demoSrc: "https://moh-sa.dev",
    repoSrc: "https://github.com/moh-sa/Portfolio",
    imgSrc: portfolio,
    imgAlt:
      "You are currently here. An Image of this webpage that shows an 'About Me' column on the left and 'My Projects' takes the rest of the page.",
    tech: [s.next, s.tailwind, s.og, s.ts],
  },
  {
    title: "King's Revenge",
    description:
      "A platformer game with hit-box and collision detection built entirely in vanilla JavaScript.",
    year: 2023,
    demoSrc: "https://kings-revenge.moh-sa.dev",
    repoSrc: "https://github.com/moh-sa/Kings-Revenge",
    imgSrc: platformer,
    imgAlt:
      "The king is wearing his golden crown and light blue cape on red armor, standing in the middle of the swamp.",
    tech: [s.js],
  },
  {
    title: "Globe",
    description: "An interactive globe created with Three.js and GASP.",
    year: 2023,
    demoSrc: "https://globe-threejs.moh-sa.dev/",
    repoSrc: "https://github.com/moh-sa/globe_threejs",
    imgSrc: globe,
    imgAlt:
      "An image of planet Earth in space and the MENA (Middle East and North Africa) region is shown",
    tech: [s.three, s.gasp],
  },
  {
    title: "Apple-like Store",
    description:
      "A Next.js eCommerce project that took inspiration from Apple stores. The project takes advantage of Sanity CMS to manage product information, Stripe to provide seamless credit card payments, and TailwindCSS for styles.",
    year: 2022,
    demoSrc: "https://apple-store.moh-sa.dev",
    repoSrc: "https://github.com/moh-sa/Apple-Store",
    imgSrc: appleStore,
    imgAlt:
      "A screenshot of an Apple-like store that features an iPhone 14 image on the right and marketing text on the left that says 'iPhone 14 big and bigger'",
    tech: [s.next, s.sanity, s.stripe, s.tailwind, s.ts],
  },
  {
    title: "proShop",
    description:
      "A React and Express.js eCommerce project with reviews and rating features and an admin page to handle all products, orders, and payments. Registration via email and JWT tokens for authentication Stores data with MongoDB and PayPal SDK for effortless payments.",
    year: 2022,
    demoSrc: "https://proshop.moh-sa.dev",
    repoSrc: "https://github.com/moh-sa/proShop",
    imgSrc: proShop,
    imgAlt:
      "screenshot of the main page with a dark grey navbar, featured project box with an image of PS4, and latest products list.",
    tech: [
      s.react,
      s.express,
      s.mongo,
      s.mongoose,
      s.paypal,
      s.redux,
      s.axios,
      s.react_router,
      s.jwt,
      s.bcrypt,
      s.multer,
    ],
  },
  {
    title: "Memories",
    description:
      "Share your precious memories with others and engage with the community through likes and comments. Every user has a profile, an auto-complete search bar, and amazing light and dark modes. 'Memories' is my first MERN original project, which utilized React.js for the front-end and Express.js for the back-end. To ensure security, account activation is done via email, and authentication is implemented through JWT access and refresh tokens.",
    year: 2022,
    isOriginal: true,
    demoSrc: "https://memories.moh-sa.dev",
    repoSrc: "https://github.com/moh-sa/memories",
    imgSrc: memories,
    imgAlt:
      "A screenshot of 'Memories' main page, you will find a white navbar followed by eight memory posts. Each post showcases a beautiful image of a wonderful place along with the user avatar, publish time, number of likes and comments, memory title, and description.",
    tech: [
      s.react,
      s.express,
      s.mongo,
      s.mongoose,
      s.jwt,
      s.rtk,
      s.react_router,
      s.hookForm,
      s.axios,
      s.bcrypt,
      s.uuid,
      s.cloudinary,
      s.mantine,
    ],
  },
  {
    title: "Auto-Correction Smart Examination System",
    description:
      "Graduation project built with Oracle APEX. This system is based on the randomization of questions and variable answers generated by the system to prevent cheating.",
    year: 2021,
    isOriginal: true,
    imgSrc: autoCorrection,
    imgAlt:
      "A screenshot of the project that has a black navbar, light blue announcements box, greetings user sentence, and a list of courses in boxes, and each has its unique color and code.",
    tech: [s.oracle_db, s.oracle_apex, s.bootstrap],
  },
];
