export type TBase = {
  id: string;
  label: string;
  placeholder?: string;
  isArabic?: "rtl";
  value?: string;
};

export type TInputProps = TBase & {
  as: "input";
  type: "text" | "url" | "file";
};

export type TTextAreaProps = TBase & {
  as: "textarea";
};

export type TCheckboxProps = TBase & {
  as: "checkbox";
};

export type TCombined = TInputProps | TTextAreaProps | TCheckboxProps;

export type TGroupedFields = Record<string, TCombined[]>;
