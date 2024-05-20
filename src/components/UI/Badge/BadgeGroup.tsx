import { Badge } from "./Badge";

type TProps = {
  techStack: string[];
  profile?: boolean;
};
export function BadgeGroup({ techStack, profile }: TProps) {
  return (
    <ul className={`flex flex-wrap gap-1 ${!profile && "px-4"}`}>
      {techStack.map((tech, index) => (
        <Badge profile={profile} key={index} text={tech} />
      ))}
    </ul>
  );
}
