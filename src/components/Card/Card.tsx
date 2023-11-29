import Image from "next/image";
import styles from "./Card.module.css";
import Button from "../button/Button";
import Flag from "../Flag/Flag";
import Tag from "../Tag/Tag";
import { ProjectType } from "$/data/projects";

const Card = ({ ...props }: ProjectType) => {
  return (
    <article className={styles.wrapper}>
      {/* 🖼️ Cover */}
      <div className={styles.imageWrapper}>
        <Image
          className={styles.image}
          src={props.imgSrc}
          alt={props.imgAlt}
          style={{ width: "100%", height: "100%" }}
          placeholder="blur"
          loading="lazy"
        />
      </div>

      {/* 🌟 Title + 🗓️ Date + 🏷️ Original */}
      <header className={styles.headerWrapper}>
        <h1>
          <a href={props.demoSrc} target="_blank" tabIndex={-1}>
            {props.title}
          </a>
        </h1>
        <h2>{props.year}</h2>
        {props.isOriginal && <Flag />}
      </header>

      {/* 📝 Description + 🛠️ Technologies */}
      <section className={styles.sectionWrapper}>
        <p className={styles.description}>{props.description}</p>
        <ul className={styles.techs}>
          {props.tech.map((tech, index) => (
            <Tag key={index} text={tech} />
          ))}
        </ul>
      </section>

      {/* 🔗 Links to github + live demo */}
      <footer className={styles.footerWrapper}>
        {props.demoSrc && (
          <Button icon="demo" href={props.demoSrc} text="Live demo" />
        )}
        {props.repoSrc && (
          <Button icon="github" href={props.repoSrc} text="Code" />
        )}

        {!props.demoSrc && !props.repoSrc && (
          <Button as="span" icon="notAllowed" text="Not Available" />
        )}
      </footer>
    </article>
  );
};

export default Card;
