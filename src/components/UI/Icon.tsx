import type { Icon as IconType } from "@phosphor-icons/react";

type TProps = {
  icon: IconType;
  size?: number;
  className?: React.HTMLAttributes<HTMLElement>["className"];
};

export function Icon({ icon: Icon, size = 24, className }: TProps) {
  return <Icon size={size} className={className} />;
}
