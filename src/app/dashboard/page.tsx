import { PlusCircle } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import {
  BadgeGroup,
  Icon,
  LinkButton,
  ProjectActionButton,
} from "~/components";
import { ProjectHeader } from "~/components/Project/ProjectCard/ProjectHeader";
import { ProjectImage } from "~/components/Project/ProjectCard/ProjectImage";
import { getAllProjects } from "~/server/queries";

export default async function DashboardPage() {
  const projects = await getAllProjects();

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-around gap-2">
        <h1 className="text-center text-4xl font-extrabold text-white">
          My Projects
        </h1>
        <LinkButton as={Link} url="/dashboard/add">
          <Icon icon={PlusCircle} size={24} />
          Add Project
        </LinkButton>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6">
        {!projects ||
          (projects?.payload === undefined && (
            <div>{projects.error?.message}</div>
          ))}

        {/* TODO: refactor this to use the same component as the main page */}
        {projects?.payload?.map((project, index) => (
          <article
            key={`${index}-${project.id}`}
            className="bg-navy-800 flex min-h-full max-w-md flex-col justify-between gap-2 rounded-lg shadow-md"
          >
            <section className="space-y-2">
              <ProjectImage src={project.imageURL} alt={project.imageAltEN} />
              <ProjectHeader
                title={project.titleEN}
                description={project.descriptionEN}
              />
            </section>
            <section className="space-y-2">
              <BadgeGroup techStack={project.techStack} />
              <footer className="flex flex-wrap items-center justify-center gap-2 p-1">
                <ProjectActionButton isEdit projectID={project.id} />
                <ProjectActionButton projectID={project.id} />
              </footer>
            </section>
          </article>
        ))}
      </div>
    </>
  );
}
