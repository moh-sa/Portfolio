import { Translate } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Icon } from "~/components";
import { Locales } from "~/types";

type TProps = {
  localeType: Locales;
};
export function ToggleLocale({ localeType }: TProps) {
  const isEnglish = localeType === Locales.ENGLISH;

  return (
    <Link
      className="flex flex-row-reverse items-center justify-center gap-1 rounded-full bg-obsidian-900 px-3 py-1 text-white hover:bg-obsidian-950"
      href={`${isEnglish ? "/ar" : "/en"}`}
    >
      <Icon icon={Translate} size={20} />
      {isEnglish ? "العربية" : "English"}
    </Link>
  );
}
