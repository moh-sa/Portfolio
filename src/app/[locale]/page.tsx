import AboutMe from '$/components/aboutMe/AboutMe';
import Projects from '$/components/projects/Projects';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('Index');
  return (
    <>
      {/* <h1>{t('title')}</h1> */}
      <AboutMe />
      <Projects />
    </>
  );
}
