import { Translate } from "@phosphor-icons/react/dist/ssr";
import { Anchor, Icon } from "~/components";
import { Locales } from "~/types";

type TProps = {
  localeType: Locales;
};
export function ToggleLocale({ localeType }: TProps) {
  const isEnglish = localeType === Locales.ENGLISH;
  return (
    <Anchor
      href={`${isEnglish ? "/ar" : "/en"}`}
      variant="secondary"
      size="sm"
      className="bg-navy-900 flex-row-reverse gap-1 rounded-full text-base"
    >
      <Icon icon={Translate} size={20} />
      {isEnglish ? "العربية" : "English"}
    </Anchor>
  );
}
