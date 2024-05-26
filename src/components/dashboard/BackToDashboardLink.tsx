import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Icon } from "../UI";

type TProps = {
  url: string;
  label: string;
};
export function BackToDashboardLink({ url, label }: TProps) {
  return (
    <Link className="flex items-center gap-2 font-light" href={`/${url}`}>
      <Icon icon={ArrowLeft} size={20} />
      Back to {label}
    </Link>
  );
}
