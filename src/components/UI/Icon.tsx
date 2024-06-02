import type { Icon as IconType } from "@phosphor-icons/react";

type TProps = {
  icon: IconType;
  size?: number;
};
export function Icon({ icon: Icon, size = 24 }: TProps) {
  return <Icon size={size} />;
}
