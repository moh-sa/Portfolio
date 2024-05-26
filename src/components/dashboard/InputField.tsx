import { type TInputProps } from "~/types";
import { Label } from "./label";

export function InputField({
  id,
  label,
  type = "text",
  placeholder,
  isArabic: dir,
  value,
}: TInputProps) {
  return (
    <div dir={dir} className="flex-1 space-y-1">
      <Label id={id} label={label} />
      <input
        className={`h-10 w-full rounded-md border bg-white px-3 py-2 text-sm text-black ring-offset-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`}
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
}
