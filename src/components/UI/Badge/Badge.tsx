type TProps = {
  text: string;
  profile?: boolean;
};
export function Badge({ text, profile }: TProps) {
  return (
    <li
      className={`hover:bg-navy-500 bg-navy-700 cursor-default text-indigo-200 transition-colors duration-500 ease-in hover:duration-150 hover:ease-out
      ${profile ? "rounded-md px-3 py-1" : "rounded px-2 py-0"}`}
    >
      {text}
    </li>
  );
}
