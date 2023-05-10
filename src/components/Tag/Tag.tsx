import styles from "./Tag.module.css";

const Tag = ({ text }: { text: string }) => {
  return <button className={styles.tag}>{text}</button>;
};

export default Tag;
