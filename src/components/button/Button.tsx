import { Icons } from "../../data/icons";
import Icon from "../Icon/Icon";
import styles from "./Button.module.css";

interface ButtonProps {
  href?: string;
  text: string;
  icon: keyof typeof Icons;
  as?: "button" | "a" | "span";
}

const Button = ({ href, text, icon, as: Tag = "a" }: ButtonProps) => {
  return (
    <Tag className={styles.wrapper} href={href} target="_blank">
      <Icon icon={icon} />
      {text}
    </Tag>
  );
};

export default Button;
