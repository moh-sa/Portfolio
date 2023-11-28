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
      </footer>
    </article>
  );
};

export default Card;

function OldCard({ ...props }: ProjectType) {
  return (
    <article className={styles.wrapper}>
      {/* Image / Cover */}
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
      <div className={styles.body}>
        <div>
          {/* Title + Year */}
          <header className={styles.linkWrapper}>
            <h1>
              <a
                href={props.demoSrc}
                className={styles.title}
                target="_blank"
                tabIndex={-1}
              >
                {props.title}
              </a>
            </h1>
            <h2 className={styles.year}>{props.year}</h2>
            {props.isOriginal && <Flag />}
          </header>
          <section>
            {/* Description */}
            <p className={styles.description}>{props.description}</p>
            {/* Techs */}
            <ul className={styles.techs}>
              {props.tech.map((tech, index) => (
                <Tag key={index} text={tech} />
              ))}
            </ul>
          </section>
        </div>
        <footer>
          {/* Button: github + live demo */}
          {props.demoSrc && props.repoSrc && (
            <div className={styles.buttons}>
              {props.demoSrc && (
                <Button icon="demo" href={props.demoSrc} text="Live demo" />
              )}
              {props.repoSrc && (
                <Button icon="github" href={props.repoSrc} text="Code" />
              )}
            </div>
          )}
        </footer>
      </div>
    </article>
  );
}
