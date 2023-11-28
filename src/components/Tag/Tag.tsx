import styles from "./Tag.module.css";

const Tag = ({ text }: { text: string }) => {
  return <li className={styles.tag}>{text}</li>;
};

export default Tag;
