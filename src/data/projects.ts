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
  demoSrc?: string;
  repoSrc?: string;
  imgSrc: StaticImageData | string;
  tech: string[];
}

export const projects: ProjectType[] = [
  {
    title: 'breadit',
    demoSrc: 'https://breadit.moh-sa.dev/',
    repoSrc: 'https://github.com/moh-sa/breadit',
    imgSrc: breadit,
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
  // {
  //   title: 'portfolio',
  //   demoSrc: 'https://moh-sa.dev',
  //   repoSrc: 'https://github.com/moh-sa/Portfolio',
  //   imgSrc: portfolio,
  //   tech: [s.next, s.css, s.og, s.ts],
  // },
  // {
  //   title: 'king',
  //   demoSrc: 'https://kings-revenge.moh-sa.dev',
  //   repoSrc: 'https://github.com/moh-sa/Kings-Revenge',
  //   imgSrc: platformer,
  //   tech: [s.js],
  // },
  // {
  //   title: 'globe',
  //   demoSrc: 'https://globe-threejs.moh-sa.dev/',
  //   repoSrc: 'https://github.com/moh-sa/globe_threejs',
  //   imgSrc: globe,
  //   tech: [s.three, s.gasp],
  // },
  {
    title: 'appleStore',
    demoSrc: 'https://apple-store.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/Apple-Store',
    imgSrc: appleStore,
    tech: [s.next, s.sanity, s.stripe, s.tailwind, s.ts],
  },
  {
    title: 'proShop',
    demoSrc: 'https://proshop.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/proShop',
    imgSrc: proShop,
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
    title: 'memories',
    demoSrc: 'https://memories.moh-sa.dev',
    repoSrc: 'https://github.com/moh-sa/memories',
    imgSrc: memories,
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
    title: 'grad',
    imgSrc: autoCorrection,
    tech: [s.oracle_db, s.oracle_apex, s.bootstrap],
  },
];
