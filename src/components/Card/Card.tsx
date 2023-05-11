import Image from "next/image";
import styles from "./Card.module.css";
import Button from "../button/Button";
import Flag from "../Flag/Flag";
import Tag from "../Tag/Tag";
import { ProjectType } from "$/data/projects";

const Card = ({ ...props }: ProjectType) => {
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
          <div className={styles.linkWrapper}>
            <a href={props.demoSrc} className={styles.title} target="_blank">
              {props.title}
            </a>
            <span className={styles.year}>{props.year}</span>
            {props.isOriginal && <Flag />}
          </div>
          {/* Description */}
          <p className={styles.description}>{props.description}</p>
        </div>
        <div>
          {/* Techs */}
          <div className={styles.skills}>
            {props.tech.map((tech, index) => (
              <Tag key={index} text={tech} />
            ))}
          </div>
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
        </div>
      </div>
    </article>
  );
};

export default Card;
