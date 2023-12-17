import Image from 'next/image';
import styles from './Card.module.css';
import Link from '../link/Link';
import Flag from '../Flag/Flag';
import Tag from '../Tag/Tag';
import { ProjectType } from '$/data/projects';
import { useTranslations } from 'next-intl';

const Card = ({ ...props }: ProjectType) => {
  const t = useTranslations('MyProjects');

  return (
    <article className={styles.wrapper}>
      {/* 🖼️ Cover */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={props.imgSrc}
          alt={t(`projects.${props.title}.alt`)}
          style={{ width: '100%', height: '100%' }}
          placeholder='blur'
          loading='lazy'
        />
      </div>

      {/* 🌟 Title + 🗓️ Date + 🏷️ Original */}
      <header className={styles.headerWrapper}>
        <h2>{t(`projects.${props.title}.title`)}</h2>
        <time dateTime={t(`projects.${props.title}.year`)}>
          {t(`projects.${props.title}.year`)}
        </time>
        {t(`projects.${props.title}.isOriginal`) === '1' && (
          <Flag text={t('original')} />
        )}
      </header>

      {/* 📝 Description + 🛠️ Technologies */}
      <section className={styles.sectionWrapper}>
        <p className={styles.description}>
          {t(`projects.${props.title}.description`)}
        </p>
        <ul className={styles.techs}>
          {props.tech.map((tech, index) => (
            <Tag
              key={index}
              text={tech}
            />
          ))}
        </ul>
      </section>

      {/* 🔗 Links to github + live demo */}
      <footer className={styles.footerWrapper}>
        {props.demoSrc && (
          <Link
            icon='demo'
            href={props.demoSrc}
            text={t('demo')}
          />
        )}
        {props.repoSrc && (
          <Link
            icon='github'
            href={props.repoSrc}
            text={t('code')}
          />
        )}

        {!props.demoSrc && !props.repoSrc && (
          <Link
            icon='notAllowed'
            text='Not Available'
          />
        )}
      </footer>
    </article>
  );
};

export default Card;
