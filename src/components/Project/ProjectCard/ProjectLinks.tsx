import { Code, Compass, Empty } from "@phosphor-icons/react/dist/ssr";
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
      {/* 🚫 empty state 🚫 */}
      {demoURL.length === 0 && repoURL.length === 0 && (
        <LinkButton url="" disabled>
          <Icon icon={Empty} />
          {localeData.noButtonsLabel}
        </LinkButton>
      )}
      {demoURL.length > 0 && (
        <LinkButton url={demoURL}>
          <Icon icon={Compass} />
          {localeData.demoLabel}
        </LinkButton>
      )}
      {repoURL.length > 0 && (
        <LinkButton url={repoURL}>
          <Icon icon={Code} />
          {localeData.repoLabel}
        </LinkButton>
      )}
    </footer>
  );
}
