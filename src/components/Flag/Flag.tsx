import styles from "./Flag.module.css";

const Flag = ({ text = "Original" }: { text?: string }) => {
  return <span className={styles.flag}>{text}</span>;
};

export default Flag;
