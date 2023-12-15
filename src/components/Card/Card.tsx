import Image from 'next/image';
import styles from './Card.module.css';
import Link from '../link/Link';
import Flag from '../Flag/Flag';
import Tag from '../Tag/Tag';
import { ProjectType } from '$/data/projects';

const Card = ({ ...props }: ProjectType) => {
  return (
    <article className={styles.wrapper}>
      {/* 🖼️ Cover */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={props.imgSrc}
          alt={props.imgAlt}
          style={{ width: '100%', height: '100%' }}
          placeholder='blur'
          loading='lazy'
        />
      </div>

      {/* 🌟 Title + 🗓️ Date + 🏷️ Original */}
      <header className={styles.headerWrapper}>
        <h2>{props.title}</h2>
        <time dateTime={props.year.toString()}>{props.year}</time>
        {props.isOriginal && <Flag />}
      </header>

      {/* 📝 Description + 🛠️ Technologies */}
      <section className={styles.sectionWrapper}>
        <p className={styles.description}>{props.description}</p>
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
            text='Live demo'
          />
        )}
        {props.repoSrc && (
          <Link
            icon='github'
            href={props.repoSrc}
            text='Code'
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
