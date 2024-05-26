import { XCircle } from "@phosphor-icons/react/dist/ssr";
import { CategoryHeading, Icon, ProjectCard, ToggleLocale } from "~/components";
import { type TLocales } from "~/locales/locales";
import { getAllProjects } from "~/server/queries";
import { Locales } from "~/types";

type TProps = {
  localeType: Locales;
  localeData: TLocales["projects"];
};
export async function ProjectSection({ localeType, localeData }: TProps) {
  const projects = await getAllProjects();

  // 👇 source: https://www.magicpattern.design/tools/css-backgrounds
  const backgroundImage =
    "before:absolute before:inset-0 before:-z-[1] before:bg-[#e5e5f7] before:mix-blend-multiply before:blur-[2px] before:grayscale before:[background-image:repeating-radial-gradient(circle_at_var(--circlePos),transparent_0,#e5e5f7_10px),repeating-linear-gradient(#444cf755,#444cf7)]";

  return (
    <section
      className={`relative z-[1] flex-grow overflow-hidden rounded-ee-md rounded-es-md bg-navy-dark p-4 text-indigo-300 lg:basis-3/4 lg:rounded-es-none lg:rounded-se-md lg:p-6 ${backgroundImage}`}
    >
      <div className="mb-2 flex items-center justify-between">
        <CategoryHeading text={localeData.heading} />
        <span className="hidden lg:block">
          <ToggleLocale localeType={localeType} />
        </span>
      </div>

      {/* 🚫 empty state 🚫 */}
      {projects.payload === undefined ||
        (projects.payload.length === 0 && (
          <div className="flex flex-col items-center justify-center gap-2 pb-9 text-center lg:pb-0">
            <Icon icon={XCircle} size={64} />
            <div className="text-4xl">{localeData.emptyState}</div>
          </div>
        ))}

      {/* ✨ projects container ✨ */}
      {projects.payload !== undefined && projects.payload.length > 0 && (
        <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6">
          {projects.payload.map((project, index) => {
            const isEnglish = localeType === Locales.ENGLISH;

            const header = {
              title: isEnglish ? project.titleEN : project.titleAR,
              description: isEnglish
                ? project.descriptionEN
                : project.descriptionAR,
            };

            const img = {
              src: project.imageURL,
              alt: isEnglish ? project.imageAltEN : project.imageAltAR,
            };

            const techStack = project.techStack;

            const links = {
              demo: project.demoURL,
              repo: project.repoURL,
            };
            return (
              <ProjectCard
                key={`${index}-${project.id}-${project.titleEN}`}
                header={header}
                img={img}
                techStack={techStack}
                links={links}
                localeData={localeData}
              />
            );
          })}
        </div>
      )}
    </section>
  );
}
