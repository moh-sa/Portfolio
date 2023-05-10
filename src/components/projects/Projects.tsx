import Card from "../Card/Card";
import styles from "./Projects.module.css";
import { projects } from "$/data/projects";

const Projects = () => {
  return (
    <main className={styles.wrapper}>
      <h1>My Projects</h1>
      <div className={styles.cardsWrapper}>
        {projects.map((p, i) => (
          <Card key={i} {...p} />
        ))}
        {/* <Card {...projects[0]} />
        <Card {...projects[0]} />
        <Card {...projects[0]} />
        <Card {...projects[0]} />
        <Card {...projects[0]} />
        <Card {...projects[0]} /> */}
      </div>
    </main>
  );
};

export default Projects;
