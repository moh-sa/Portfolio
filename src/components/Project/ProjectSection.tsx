import { Code, Compass, Empty, XCircle } from "@phosphor-icons/react/dist/ssr";
import {
  Anchor,
  CategoryHeading,
  Icon,
  ProjectCard,
  ToggleLocale,
} from "~/components";
import { type TLocales } from "~/locales/locales";
import { readLocaleProjectsOrderedByDate } from "~/server/db/projectQueries";
import { type Locales } from "~/types";

type TProps = {
  localeType: Locales;
  localeData: TLocales["projects"];
};

export async function ProjectSection({ localeType, localeData }: TProps) {
  const projects = await readLocaleProjectsOrderedByDate({
    locale: localeType,
  }).then((res) => {
    if (res.status === "failure") return [];

    return res.payload.filter((project) => !project.isHidden) ?? [];
  });

  return (
    <section
      className={`bg-pattern relative z-[1] flex-grow overflow-hidden rounded-ee-md rounded-es-md bg-navy-600 p-4 text-indigo-300 lg:basis-3/4 lg:rounded-es-none lg:rounded-se-md lg:p-6`}
    >
      <div className="mb-2 flex items-center justify-between">
        <CategoryHeading text={localeData.heading} />
        <span className="hidden lg:block">
          <ToggleLocale localeType={localeType} />
        </span>
      </div>

      {/* 🚫 empty state 🚫 */}
      {projects.length === 0 && (
        <div className="flex flex-col items-center justify-center gap-2 pb-9 text-center lg:pb-0">
          <Icon icon={XCircle} size={64} />
          <div className="whitespace-pre-line text-4xl rtl:leading-[3rem]">
            {localeData.emptyState}
          </div>
        </div>
      )}

      {/* ✨ projects container ✨ */}
      {projects.length > 0 && (
        <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6">
          {projects.map((project, index) => {
            const links = [
              {
                href: project.demoURL,
                icon: Compass,
                label: localeData.demoLabel,
              },
              {
                href: project.repoURL,
                icon: Code,
                label: localeData.repoLabel,
              },
            ];

            return (
              <ProjectCard
                key={`${index}-${project.id}-${project.title}`}
                header={{
                  title: project.title,
                  description: project.description,
                }}
                img={{
                  src: project.imageURL,
                  alt: project.imageAlt,
                }}
                techStack={project.techStack}
              >
                {/* 🚫 empty state 🚫 */}
                {links.every((link) => link.href.length === 0) && (
                  <Anchor isEmpty href="">
                    <Icon icon={Empty} />
                    {localeData.noButtonsLabel}
                  </Anchor>
                )}

                {links.map(
                  (link, index) =>
                    link.href.length > 0 && (
                      <Anchor
                        isExternal
                        key={`${index}-${link.label}`}
                        href={link.href}
                        className="flex-1"
                        variant="secondary"
                      >
                        <Icon icon={link.icon} />
                        {link.label}
                      </Anchor>
                    ),
                )}
              </ProjectCard>
            );
          })}
        </div>
      )}
    </section>
  );
}
