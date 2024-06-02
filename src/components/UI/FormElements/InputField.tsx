import { Label } from "./label";

type TProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  isArabic?: boolean;
};

export function InputField({ id, label, isArabic, value, ...rest }: TProps) {
  const dir = isArabic ? "rtl" : "ltr";
  return (
    <div dir={dir} className="flex-1 space-y-1">
      <Label id={id} label={label} />
      <input
        className={`h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-black ring-offset-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
        id={id}
        name={id}
        defaultValue={value}
        {...rest}
      />
    </div>
  );
}
