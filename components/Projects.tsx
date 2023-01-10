import Card from "./common/Card";

// const demo: CardProps = {
//   mediaURL:
//     "https://raw.githubusercontent.com/moh-sa/Memories/main/images/screenshot1.jpg",
//   type: "img",
//   demoURL: "https://memories.tno.dev",
//   repoURL: "https://github.com/moh-sa/memories",
//   title: "Memories",
//   year: 2022,
//   description:
//     "This is my first personal MERN project that I built entirely from scratch. The project uses double authentication tokens approach (access and refresh), next-gen image format (webp), and account activation via email.",
// };

const Projects = ({ projects }: { projects: CardProps[] }) => {
  return (
    <>
      <h1 className="mb-4 text-3xl">Projects</h1>
      <div className="grid grid-cols-1 justify-items-center gap-8 lg:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.id} {...project} />
        ))}
      </div>
    </>
  );
};

export default Projects;
