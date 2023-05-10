import Tag from "../Tag/Tag";
import Button from "../button/Button";
import styles from "./Aboutme.module.css";
import { skills as s } from "$/data/skills";

const AboutMe = () => {
  return (
    <aside className={styles.wrapper}>
      <div className={styles.sticky}>
        <div className={styles.aboutMeBlock}>
          <h1 className={styles.heading}>About Me</h1>
          <div className={styles.aboutMe}>
            <h1>Mohammed Sobhi Alafifi</h1>
            <p>
              A Computer Engineer obsessed with creating robust web applications
              that are not only user-friendly but also incredibly easy to
              access, ensuring that everyone can use and benefit from the
              exceptional levels of functionality available.
            </p>
            <p>
              My primary aim is to craft elegant, simple solutions that
              prioritize usability above all else.
            </p>
          </div>
        </div>
        <div className={styles.skillsBlock}>
          <h1 className={styles.heading}>Main Skills</h1>
          <div className={styles.skills}>
            <Tag text={s.react} />
            <Tag text={s.next} />
            <Tag text={s.express} />
            <Tag text={s.postgre} />
            <Tag text={s.mongo} />
            <Tag text={s.js} />
            <Tag text={s.ts} />
            <Tag text={s.css} />
            <Tag text={s.tailwind} />
          </div>
        </div>
        <div className={styles.linksBlock}>
          <h1 className={styles.heading}>Links</h1>
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
    </aside>
  );
};

export default AboutMe;
