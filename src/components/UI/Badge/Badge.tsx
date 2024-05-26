type TProps = {
  text: string;
  profile?: boolean;
};
export function Badge({ text, profile }: TProps) {
  return (
    <li
      className={`cursor-default rounded-md bg-obsidian-800 text-indigo-200 transition-colors duration-500 ease-in hover:bg-obsidian-500 hover:duration-150 hover:ease-out
      ${profile ? "px-3 py-1" : "px-2 py-0"}`}
    >
      {text}
    </li>
  );
}
