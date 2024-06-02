type TProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  id: string;
  label: string;
};
export function Label({ id, label }: TProps) {
  return (
    <label className="text-sm font-medium leading-none" htmlFor={id}>
      {label}
    </label>
  );
}
