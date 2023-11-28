import Tag from "../Tag/Tag";
import Button from "../button/Button";
import styles from "./Aboutme.module.css";
import { skills as s } from "$/data/skills";

const AboutMe = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.sticky}>
        <div className={styles.aboutMeBlock}>
          <h1 className={`${styles.baseTitle} ${styles.title}`}>About Me</h1>
          <div className={styles.aboutMe}>
            <p className={styles.name}>Mohammed Sobhi Alafifi</p>
            <p>
              A Computer Engineer passionate about crafting user-friendly and
              accessible web applications with exceptional functionality for
              all.
            </p>
          </div>
        </div>
        <div className={styles.skillsBlock}>
          <h2 className={`${styles.baseTitle} ${styles.subTitle}`}>
            Main Skills
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
          </ul>
        </div>
        <div className={styles.linksBlock}>
          <h2 className={`${styles.baseTitle} ${styles.subTitle}`}>Links</h2>
          <div className={styles.links}>
            <Button text="Resume" icon="resume" href="./resume.pdf" />
            <Button
              text="Github"
              icon="github"
              href="https://github.com/moh-sa"
            />
            <Button
              text="LinkedIn"
              icon="linkedin"
              href="https://www.linkedin.com/in/moh-sa"
            />
            <Button text="Email" icon="email" href="mailto:msa@moh-sa.dev" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
