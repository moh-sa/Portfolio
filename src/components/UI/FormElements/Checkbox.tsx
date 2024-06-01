import { type TCheckboxProps } from "~/types";
import { Label } from "./label";

export function Checkbox({ id, label, ...props }: TCheckboxProps) {
  return (
    <div className="w-full space-y-1">
      <input
        type="checkbox"
        id={id}
        name={id}
        defaultChecked={false}
        className="mr-2"
        {...props}
      />
      <Label id={id} label={label} />
    </div>
  );
}
