import AboutMe from '$/components/aboutMe/AboutMe';
import Projects from '$/components/projects/Projects';
import { unstable_setRequestLocale } from 'next-intl/server';

export default function Home({
  params: { locale },
}: {
  params: { locale: 'ar' | 'en' };
}) {
  // Due to the 'next-intl' current's version limitation
  //This line is needed to create static pages
  unstable_setRequestLocale(locale);

  return (
    <>
      <AboutMe />
      <Projects />
    </>
  );
}
