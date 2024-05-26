import { type TTextAreaProps } from "~/types";
import { Label } from "./label";

export function TextAreaField({
  id,
  label,
  placeholder,
  isArabic: dir,
  value,
}: TTextAreaProps) {
  return (
    <div dir={dir} className="w-full space-y-1">
      <Label id={id} label={label} />
      <textarea
        className="min-h-[80px] w-full rounded-md border bg-white px-3 py-2 text-sm text-black ring-offset-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
        id={id}
        name={id}
        rows={4}
        placeholder={placeholder}
        defaultValue={value}
      />
    </div>
  );
}
