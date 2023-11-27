import Card from "../Card/Card";
import styles from "./Projects.module.css";
import { projects } from "$/data/projects";

const Projects = () => {
  return (
    <section className={styles.wrapper}>
      <h1 className={styles.title}>My Projects</h1>
      <div className={styles.cardsWrapper}>
        {projects.map((p, i) => (
          <Card key={i} {...p} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
