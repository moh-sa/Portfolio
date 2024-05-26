import type Link from "next/link";

type LinkProps = {
  as: "a" | "div" | typeof Link;
  children: React.ReactNode;
  url?: string;
  primary?: boolean;
};
export function LinkButton({ as: Element, children, url, primary }: LinkProps) {
  return (
    <Element
      className={`flex w-full flex-1 items-center justify-center gap-2 rounded px-2 py-1 text-xl capitalize transition-colors duration-500 ease-in hover:duration-150 hover:ease-out
  ${primary && "bg-pink-200 text-indigo-950 hover:bg-pink-100"}
  ${!primary && "bg-obsidian-800 text-stone-300 hover:bg-obsidian-500"}
  `}
      href={url ?? ""}
      target={Element === "a" ? "_blank" : "_self"}
    >
      {children}
    </Element>
  );
}
