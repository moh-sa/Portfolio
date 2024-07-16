import { SignedIn, UserButton } from "@clerk/nextjs";
import { NotePencil, PlusCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import { Anchor, Icon, ProjectCard } from "~/components";
import { FormStatusButtonWrapper } from "~/components/UI/Buttons/ClientFormButtonWrapper";
import { deleteProjectAction } from "~/server/actions";
import { readLocaleProjectsOrderedByDate } from "~/server/db/projectQueries";
import { Locales } from "~/types";

export default async function DashboardPage() {
  const projects = await readLocaleProjectsOrderedByDate({
    locale: Locales.ENGLISH,
  });

  return (
    <>
      <div className="mb-4 flex flex-col flex-wrap items-center justify-between gap-2 lg:flex-row">
        <h1 className="text-center text-2xl text-white">My Projects</h1>
        <div className="flex items-center justify-evenly gap-2">
          <Anchor href="/dashboard/project/add" variant="ghost">
            <Icon icon={PlusCircle} />
            Add Project
          </Anchor>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
      <div className="grid grid-cols-1 place-items-center gap-6 md:grid-cols-2">
        {projects.status === "success" &&
          projects.payload.map((project, index) => {
            const deleteActionWithProjectID = deleteProjectAction.bind(null, {
              projectID: project.id,
            });
            return (
              <ProjectCard
                key={`${index}-${project.id}-${project.title}`}
                header={{
                  title: project.title,
                  description: project.description,
                }}
                img={{ src: project.imageURL, alt: project.imageAlt }}
                techStack={project.techStack}
              >
                <>
                  <Anchor
                    href={`/dashboard/project/edit/${project.id}`}
                    variant="secondary"
                    className="flex-[3]"
                  >
                    <Icon icon={NotePencil} size={20} />
                    Edit
                  </Anchor>
                  <form action={deleteActionWithProjectID}>
                    <FormStatusButtonWrapper
                      variant="destructive"
                      className="flex-1"
                    >
                      <Icon icon={Trash} size={20} />
                      Delete
                    </FormStatusButtonWrapper>
                  </form>
                </>
              </ProjectCard>
            );
          })}
      </div>
    </>
  );
}
