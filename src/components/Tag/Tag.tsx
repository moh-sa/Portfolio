import styles from "./Tag.module.css";

const Tag = ({ text }: { text: string }) => {
  return <span className={styles.tag}>{text}</span>;
};

export default Tag;
