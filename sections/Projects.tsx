import OriginalProjects from "../components/Projects";

const Projects = ({ data }: { data: CardProps[] }) => {
  return (
    <section className="basis-2/3 bg-[#17324F] p-4 md:overflow-y-auto lg:p-8">
      <div className="mb-8">
        <OriginalProjects projects={data} />
      </div>
    </section>
  );
};

export default Projects;
