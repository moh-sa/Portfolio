export type TBase = {
  id: string;
  label: string;
  placeholder?: string;
  isArabic?: "rtl";
  value?: string;
};

export type TInputProps = TBase & {
  as: "input";
  type: "text" | "url";
};

export type TTextAreaProps = TBase & {
  as: "textarea";
};

export type TCombined = TInputProps | TTextAreaProps;

export type TGroupedFields = Record<string, TCombined[]>;
