import { BadgeGroup } from "~/components";
import { type TLocales } from "~/locales/locales";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectImage } from "./ProjectImage";
import { ProjectLinks } from "./ProjectLinks";

type TProps = {
  header: {
    title: string;
    description: string;
  };
  img: {
    src: string;
    alt: string;
  };
  techStack: string[];
  links: {
    demo: string;
    repo: string;
  };
  localeData: TLocales["projects"];
};
export function ProjectCard({
  img,
  header,
  techStack,
  links,
  localeData,
}: TProps) {
  return (
    <article className="flex min-h-full max-w-md flex-col justify-between gap-2 rounded-lg bg-navy-darker shadow-md lg:transition-transform lg:duration-500 lg:will-change-transform lg:hover:-translate-y-1 lg:hover:shadow-lg lg:hover:transition-transform lg:hover:duration-150">
      <section className="space-y-2">
        <ProjectImage src={img.src} alt={img.alt} />
        <ProjectHeader title={header.title} description={header.description} />
      </section>
      <section className="space-y-2">
        <BadgeGroup techStack={techStack} />
        <ProjectLinks
          demoURL={links.demo}
          repoURL={links.repo}
          localeData={localeData}
        />
      </section>
    </article>
  );
}
