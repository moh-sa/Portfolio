type TProps = {
  text: string;
  profile?: boolean;
};
export function Badge({ text, profile }: TProps) {
  return (
    <li
      className={`hover:bg-navy-400 bg-navy-700 cursor-default rounded-md text-indigo-200 transition-colors duration-500 ease-in hover:duration-150 hover:ease-out
      ${profile ? "px-3 py-1" : "px-2 py-0"}`}
    >
      {text}
    </li>
  );
}
