import styles from "./Flag.module.css";

const Flag = ({ text = "Original" }: { text?: string }) => {
  {
    /* TODO: add tooltip 👇 */
  }
  return <div className={styles.flag}>{text}</div>;
};

export default Flag;
