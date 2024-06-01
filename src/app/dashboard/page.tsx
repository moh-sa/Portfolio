import { NotePencil, PlusCircle, Trash } from "@phosphor-icons/react/dist/ssr";
import { Anchor, Button, Icon, ProjectCard } from "~/components";
import { deleteProject, getAllProjects } from "~/server/queries";

// TODO: refactor into smaller components
export default async function DashboardPage() {
  const projects = await getAllProjects({ isEnglish: true });

  async function handleProjectDelete({ projectID }: { projectID: number }) {
    "use server";
    await deleteProject(projectID);
  }

  return (
    <>
      <div className="mb-4 flex flex-col items-center justify-around gap-2">
        <h1 className="text-center text-4xl font-extrabold text-white">
          My Projects
        </h1>
        <Anchor href="/dashboard/add" variant="ghost">
          <Icon icon={PlusCircle} />
          Add Project
        </Anchor>
      </div>

      <div className="grid grid-cols-1 place-items-center gap-4 md:grid-cols-2 md:gap-6">
        {!projects ||
          (projects?.payload === undefined && (
            <div>{projects.error?.message}</div>
          ))}

        {projects?.payload?.map((project, index) => {
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
                  href={`/dashboard/edit/${project.id}`}
                  variant="secondary"
                  className="flex-[3]"
                >
                  <Icon icon={NotePencil} size={20} />
                  Edit
                </Anchor>
                <form action={deleteActionWithProjectID}>
                  <Button
                    type="submit"
                    variant="destructive"
                    className="flex-1"
                  >
                    <Icon icon={Trash} size={20} />
                    Delete
                  </Button>
                </form>
              </>
            </ProjectCard>
          );
        })}
      </div>
    </>
  );
}
