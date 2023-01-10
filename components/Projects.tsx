import Card from "./common/Card";

const Projects = ({ projects }: { projects: CardProps[] }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl">Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-2 mx-2">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
