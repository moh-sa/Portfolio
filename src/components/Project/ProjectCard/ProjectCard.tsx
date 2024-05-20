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
    <article className="flex max-w-md flex-col gap-2 rounded-lg bg-navy-darker shadow-md lg:transition-transform lg:duration-500 lg:will-change-transform lg:hover:-translate-y-1 lg:hover:shadow-lg lg:hover:transition-transform lg:hover:duration-150">
      <ProjectImage src={img.src} alt={img.alt} />
      <ProjectHeader title={header.title} description={header.description} />
      <BadgeGroup techStack={techStack} />
      <ProjectLinks
        demoURL={links.demo}
        repoURL={links.repo}
        localeData={localeData}
      />
    </article>
  );
}
