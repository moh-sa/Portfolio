import { Badge } from "./Badge";

type TProps = {
  techStack: string;
  isProfile?: boolean;
};
export function BadgeGroup({ techStack, isProfile }: TProps) {
  const stack = techStack?.split(",").map((tech) => tech.trim()) ?? [];
  return (
    <ul className={`flex flex-wrap gap-1 ${!isProfile && "px-4"}`}>
      {stack.map((tech, index) => (
        <Badge isProfile={isProfile} key={index} text={tech} />
      ))}
    </ul>
  );
}
