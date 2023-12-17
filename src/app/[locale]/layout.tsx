import './globals.css';
import styles from './layout.module.css';
import { Analytics } from '@vercel/analytics/react';
import { Open_Sans, Cairo } from 'next/font/google';
import {
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';
import { notFound } from 'next/navigation';
import { ReactNode } from 'react';
import { Metadata } from 'next';

const roboto = Open_Sans({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
});

const cairo = Cairo({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['arabic', 'latin'],
});

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export const locales = ['en', 'ar'];

// Due to the 'next-intl' current's version limitation
// this line is needed to enable static rendering
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>): Promise<Metadata> {
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
      type: 'website',
    },
    twitter: {
      title: t('title'),
      description: t('description'),
      creator: '@Tno_MSA',
      card: 'summary_large_image',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  // Due to the 'next-intl' current's version limitation
  // This line is needed to enable static rendering
  unstable_setRequestLocale(locale);

  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  const fontFamily =
    locale === 'ar' ? cairo.className : roboto.className;

  return (
    <html lang={locale}>
      <body
        style={{ background: 'hsl(230 33% 26%)' }}
        className={`${fontFamily}`}
      >
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
