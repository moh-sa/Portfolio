import { Icons } from '../../data/icons';
import Icon from '../Icon/Icon';
import styles from './Link.module.css';

interface LinkProps {
  href?: string;
  text: string;
  icon: keyof typeof Icons;
}

const Link = ({ href, text, icon }: LinkProps) => {
  const anchorProps = href
    ? { href, target: '_blank' }
    : { ['aria-label']: text };
  return (
    <a
      className={styles.wrapper}
      {...anchorProps}
    >
      <Icon icon={icon} />
      {text}
    </a>
  );
};

export default Link;
