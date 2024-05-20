type TProps = {
  title: string;
  description: string;
};
export function ProjectHeader({ title, description }: TProps) {
  return (
    <hgroup className="mb-1 space-y-1 px-4">
      <h3 className="border-b border-[#494979] text-4xl font-medium capitalize text-stone-300">
        {title}
      </h3>
      <p className="text-navy-light max-w-prose hyphens-auto text-justify text-xl">
        {description}
      </p>
    </hgroup>
  );
}
