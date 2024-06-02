import { BadgeGroup } from "~/components";
import { ProjectFooter } from "./ProjectFooter";
import { ProjectHeader } from "./ProjectHeader";
import { ProjectImage } from "./ProjectImage";

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
  children: React.ReactNode;
};
export function ProjectCard({ img, header, techStack, children }: TProps) {
  return (
    <article className="bg-navy-900 flex min-h-full max-w-md flex-col justify-between gap-2 rounded-lg shadow-md lg:transition-transform lg:duration-500 lg:will-change-transform lg:hover:-translate-y-1 lg:hover:shadow-lg lg:hover:transition-transform lg:hover:duration-150">
      <section className="space-y-2">
        <ProjectImage src={img.src} alt={img.alt} />
        <ProjectHeader title={header.title} description={header.description} />
      </section>
      <section className="space-y-2">
        <BadgeGroup techStack={techStack} />
        <ProjectFooter>{children}</ProjectFooter>
      </section>
    </article>
  );
}
