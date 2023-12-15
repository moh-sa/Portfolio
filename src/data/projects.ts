import { skills as s } from './skills';
import { StaticImageData } from 'next/image';
import memories from '../../public/memories.webp';
import appleStore from '../../public/apple_like_store.webp';
import autoCorrection from '../../public/auto_correction_smart_examination_system.webp';
import portfolio from '../../public/portfolio.webp';
import proShop from '../../public/proShop.webp';
import globe from '../../public/globe.webp';
import platformer from '../../public/platformer.webp';
import breadit from '../../public/breadit.webp';
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
    title: 'Breadit',
    description:
      'Breadit is a Reddit clone where users can create and join communities, leave comments, and upvote or downvote posts and comments. Built with Next.js 13 app router and uses interception and parallel routing features. It also utilizes Redis for caching, Next Auth, PlanetScale (MySQL) with Prisma ORM, and TailwindCSS.',
    year: 2023,
    isOriginal: false,
    demoSrc: 'https://breadit.moh-sa.dev/',
    repoSrc: 'https://github.com/moh-sa/breadit',
    imgSrc: breadit,
    imgAlt:
      'Breadit feed: Recent posts from your joined communities.',
    tech: [
      s.next,
      s.redis,
      s.planetScale,
      s.prisma,
      s.next_auth,
      s.axios,
      s.zod,
      s.tailwind,
      s.shadcn,
      s.ts,
    ],
  },
  {
    title: 'Portfolio',
    description:
      'A minimalist and responsive portfolio with accessibility in mind.',
    year: 2023,
    isOriginal: true,
    demoSrc: 'https://moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/Portfolio',
    imgSrc: portfolio,
    imgAlt:
      "You are currently here.'About Me' column on the left, 'My Projects' on the right.",
    tech: [s.next, s.css, s.og, s.ts],
  },
  {
    title: "King's Revenge",
    description:
      'A platformer game with hit-box and collision detection built entirely in vanilla JavaScript.',
    year: 2023,
    demoSrc: 'https://kings-revenge.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/Kings-Revenge',
    imgSrc: platformer,
    imgAlt:
      'King in red armor, golden crown, light blue cape, standing in a swamp.',
    tech: [s.js],
  },
  {
    title: 'Globe',
    description:
      'An interactive globe created with Three.js and GASP.',
    year: 2023,
    demoSrc: 'https://globe-threejs.moh-sa.dev/',
    repoSrc: 'https://github.com/moh-sa/globe_threejs',
    imgSrc: globe,
    imgAlt:
      'Earth in space, highlighting the MENA (Middle East and North Africa) region.',
    tech: [s.three, s.gasp],
  },
  {
    title: 'Apple-like Store',
    description:
      'A Next.js eCommerce project that took inspiration from Apple stores. The project takes advantage of Sanity CMS to manage product information, Stripe to provide seamless credit card payments, and TailwindCSS for styles.',
    year: 2022,
    demoSrc: 'https://apple-store.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/Apple-Store',
    imgSrc: appleStore,
    imgAlt:
      "Apple-like store: iPhone 14 showcased with 'iPhone 14 big and bigger' text.",
    tech: [s.next, s.sanity, s.stripe, s.tailwind, s.ts],
  },
  {
    title: 'proShop',
    description:
      'A React and Express.js eCommerce project with reviews and rating features and an admin page to handle all products, orders, and payments. Registration via email and JWT tokens for authentication Stores data with MongoDB and PayPal SDK for effortless payments.',
    year: 2022,
    demoSrc: 'https://proshop.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/proShop',
    imgSrc: proShop,
    imgAlt:
      'main page of ProShop featuring PS4 and the latest products.',
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
    title: 'Memories',
    description:
      "Share your precious memories with others and engage with the community through likes and comments. Every user has a profile, an auto-complete search bar, and amazing light and dark modes. 'Memories' is my first MERN original project, which utilized React.js for the front-end and Express.js for the back-end. To ensure security, account activation is done via email, and authentication is implemented through JWT access and refresh tokens.",
    year: 2022,
    isOriginal: true,
    demoSrc: 'https://memories.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/memories',
    imgSrc: memories,
    imgAlt:
      'Eight posts with large images, user details, links, and comments.',
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
    title: 'Auto-Correction Smart Examination System',
    description:
      'Graduation project built with Oracle APEX. This system is based on the randomization of questions and variable answers generated by the system to prevent cheating.',
    year: 2021,
    isOriginal: true,
    imgSrc: autoCorrection,
    imgAlt:
      'Light blue announcements box, followed by a user greeting message and colorful list of courses.',
    tech: [s.oracle_db, s.oracle_apex, s.bootstrap],
  },
];
