import Button from "../components/common/Button";

const Links = () => {
  return (
    <div className="mt-8 flex flex-col flex-wrap gap-4 lg:flex-row lg:justify-center">
      <Button text="Resume" icon="resume" href="./resume.pdf" />
      <Button text="Email" icon="email" href="mailto:msa@tno.dev" />
      <Button text="Github" icon="github" href="https://github.com/moh-sa" />
      <Button
        text="LinkedIn"
        icon="linkedin"
        href="https://www.linkedin.com/in/moh-sa"
      />
    </div>
  );
};

export default Links;
