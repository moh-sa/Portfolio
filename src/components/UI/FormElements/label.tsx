import { type TBase } from "~/types";

export function Label({ id, label }: Pick<TBase, "id" | "label">) {
  return (
    <label className="text-sm font-medium leading-none" htmlFor={id}>
      {label}
    </label>
  );
}
