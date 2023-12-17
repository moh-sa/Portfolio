import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Open_Sans, Cairo } from 'next/font/google';
import styles from './layout.module.css';
import {
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { redirect } from 'next/navigation';

const roboto = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const cairo = Cairo({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['arabic', 'latin'],
});

export const locales = ['en', 'ar'];

// Due to the 'next-intl' current's version limitation
//This function is needed to create static pages
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: 'en' | 'ar' };
}) {
  const t = await getTranslations({ locale, namespace: 'Metadata' });

  return {
    title: t('title'),
    description: t('description'),
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
      title: t('title'),
      description: t('description'),
      url: 'https://moh-sa.dev',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      creator: '@Tno_MSA',
    },
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) redirect('/en');

  // Due to the 'next-intl' current's version limitation
  //This line is needed to create static pages
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
