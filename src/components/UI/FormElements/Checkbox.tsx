import { Label } from "./label";

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
};

export function Checkbox({ id, label, ...props }: TProps) {
  return (
    <div className="w-full space-x-2">
      <input type="checkbox" id={id} name={id} {...props} />
      <Label id={id} label={label} />
    </div>
  );
}
