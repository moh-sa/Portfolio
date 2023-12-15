import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Open_Sans, Cairo } from 'next/font/google';
import styles from './layout.module.css';
import { unstable_setRequestLocale } from 'next-intl/server';
import { redirect } from 'next/navigation';

const roboto = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const cairo = Cairo({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['arabic', 'latin'],
});

// export async function generateMetadata({params: {locale}}) {
//   const t = await getTranslations({locale, namespace: 'Metadata'});

//   return {
//     title: t('title')
//   };
// }

const title = 'Mohammed Sobhi Portfolio';
const description =
  'A Computer Engineer obsessed with crafting robust, user-friendly, and easy to access web applications';

export const metadata = {
  title: title,
  description: description,
  keywords: [
    'full-stack',
    'web developer',
    'react.js',
    'next.js',
    'mongoDB',
    'postgreSQL',
    'tailwind',
    'CSS',
    'native css',
    'typescript',
    'portfolio',
    'mohammed sobhi',
    'Tno',
    'MSA',
    'Tno MSA',
  ],
  openGraph: {
    title: title,
    description: description,
    url: 'https://moh-sa.dev',
  },
  twitter: {
    title: title,
    description: description,
    creator: '@Tno_MSA',
  },
};

export const locales = ['en', 'ar'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) redirect('/en');

  unstable_setRequestLocale(locale);

  const fontFamily =
    locale === 'ar' ? cairo.className : roboto.className;

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html lang={locale}>
      <body className={`${fontFamily} ${styles.body}`}>
        <main
          className={styles.main}
          dir={dir}
        >
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
