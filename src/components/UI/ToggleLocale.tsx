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
      className="bg-navy-900 hover:bg-navy-950 flex flex-row-reverse items-center justify-center gap-1 rounded-full px-3 py-1 text-white"
      href={`${isEnglish ? "/ar" : "/en"}`}
    >
      <Icon icon={Translate} size={20} />
      {isEnglish ? "العربية" : "English"}
    </Link>
  );
}
