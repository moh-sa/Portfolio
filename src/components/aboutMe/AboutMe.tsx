import Tag from '../Tag/Tag';
import Link from '../link/Link';
import styles from './Aboutme.module.css';
import { skills as s } from '$/data/skills';
import ToggleLocale from '../toggleLocale/ToggleLocale';
import { useTranslations } from 'next-intl';

const AboutMe = () => {
  const t = useTranslations('AboutMe');
  return (
    <section
      aria-labelledby='aboutMe'
      className={styles.wrapper}
    >
      <div className={styles.sticky}>
        <div className={styles.aboutMeBlock}>
          <ToggleLocale
            text={t('AboutMe.toggleLocale')}
            aria={t('AboutMe.ariaLabelToggleLocale')}
          />
          <h1
            id='aboutMe'
            className={`${styles.baseTitle} ${styles.title}`}
          >
            {t('AboutMe.title')}
          </h1>

          <div className={styles.aboutMe}>
            <p className={styles.name}>{t('AboutMe.name')}</p>
            <p>{t('AboutMe.description')}</p>
          </div>
        </div>
        <div className={styles.skillsBlock}>
          <h2 className={`${styles.baseTitle} ${styles.subTitle}`}>
            {t('Skills.title')}
          </h2>
          <ul className={styles.skills}>
            <Tag text={s.react} />
            <Tag text={s.next} />
            <Tag text={s.express} />
            <Tag text={s.sql} />
            <Tag text={s.postgre} />
            <Tag text={s.mongo} />
            <Tag text={s.js} />
            <Tag text={s.ts} />
            <Tag text={s.css} />
            <Tag text={s.tailwind} />
            <Tag text={s.wcag} />
            <Tag text={s.a11y} />
          </ul>
        </div>
        <div className={styles.linksBlock}>
          <h2 className={`${styles.baseTitle} ${styles.subTitle}`}>
            {t('Contact.title')}
          </h2>
          <div className={styles.links}>
            <Link
              text={t('Contact.links.resume')}
              icon='resume'
              href='https://flowcv.com/resume/j0p5digipv'
            />
            <Link
              text={t('Contact.links.github')}
              icon='github'
              href='https://github.com/moh-sa'
            />
            <Link
              text={t('Contact.links.linkedin')}
              icon='linkedin'
              href='https://www.linkedin.com/in/moh-sa'
            />
            <Link
              text={t('Contact.links.email')}
              icon='email'
              href='mailto:msa@moh-sa.dev'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
