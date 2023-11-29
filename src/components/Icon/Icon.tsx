import { Icons } from "../../data/icons";
import styles from "./styles.module.css";

interface IconProps {
  icon: keyof typeof Icons;
}

const Icon = ({ icon }: IconProps) => {
  return (
    <svg
      className={styles.icon}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${Icons[icon].viewBox}`}
    >
      {Icons[icon].path}
    </svg>
  );
};

export default Icon;
