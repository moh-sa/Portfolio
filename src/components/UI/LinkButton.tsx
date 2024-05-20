type TProps = {
  url: string;
  profile?: boolean;
  children: React.ReactNode;
  disabled?: boolean;
};
export function LinkButton({ url, profile, children, disabled }: TProps) {
  // 🚫 empty state 🚫
  if (disabled) {
    return (
      <div className="flex flex-1 items-center justify-center gap-2 rounded bg-obsidian-800 py-1 text-xl capitalize text-stone-300 transition-colors duration-500 ease-in hover:bg-obsidian-900 hover:duration-150 hover:ease-out">
        {children}
      </div>
    );
  }

  return (
    <a
      href={url}
      target="_blank"
      className={`flex flex-1 items-center justify-center gap-2 py-1 text-xl capitalize transition-colors duration-500 ease-in hover:duration-150 hover:ease-out
      ${profile && "rounded bg-pink-200 text-indigo-950 hover:bg-pink-100"}
      ${!profile && "rounded bg-obsidian-800 text-stone-300 hover:bg-obsidian-900"}`}
    >
      {children}
    </a>
  );
}
