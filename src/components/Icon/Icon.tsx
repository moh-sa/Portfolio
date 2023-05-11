import { Icons } from "../../data/icons";
import styles from "./styles.module.css";

interface IconProps {
  icon: keyof typeof Icons;
}

const Icon = ({ icon }: IconProps) => {
  return (
    <svg
      className={styles.icon}
      // tabIndex={-1}
      aria-hidden="true"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${
        icon === "demo" ? "16 16" : icon === "resume" ? "22 22" : "24 24"
      }`}
    >
      {Icons[icon]}
    </svg>
  );
};

export default Icon;
