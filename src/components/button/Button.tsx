import { Icons } from "../../data/icons";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

interface ButtonProps {
  href: string;
  text: string;
  icon: keyof typeof Icons;
}

const Button = ({ href, text, icon }: ButtonProps) => {
  return (
    <a className={styles.wrapper} href={href} target="_blank">
      <Icon icon={icon} />
      {text}
      {/* TODO: add external link icon */}
    </a>
  );
};

export default Button;
