type TProps = React.FieldsetHTMLAttributes<HTMLFieldSetElement> & {
  legend: string;
};
export function Fieldset({ legend, children }: TProps) {
  // alternative style: grid gap-6 rounded-lg border p-4
  return (
    <fieldset className="flex flex-col flex-wrap gap-2 rounded-lg border p-4 lg:flex-row">
      <legend className="-ml-1 px-1 text-sm font-medium">{legend}</legend>
      {children}
    </fieldset>
  );
}
