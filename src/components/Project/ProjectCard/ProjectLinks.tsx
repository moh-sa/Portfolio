import { Code, Compass } from "@phosphor-icons/react/dist/ssr";
import { Icon, LinkButton } from "~/components";
import { type TLocales } from "~/locales/locales";

type TProps = {
  demoURL: string;
  repoURL: string;
  localeData: TLocales["projects"];
};
export function ProjectLinks({ demoURL, repoURL, localeData }: TProps) {
  return (
    <footer className="flex flex-wrap items-center justify-center gap-2 p-1">
      <LinkButton url={demoURL}>
        <Icon icon={Compass} />
        {localeData.demoLabel}
      </LinkButton>
      <LinkButton url={repoURL}>
        <Icon icon={Code} />
        {localeData.repoLabel}
      </LinkButton>
    </footer>
  );
}
