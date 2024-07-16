import { FormStatusButtonWrapper } from "~/components/UI/Buttons/ClientFormButtonWrapper";

type TProps = {
  formAction: (formData: FormData) => void;
  children: React.ReactNode;
};
export function FormElement({ formAction, children }: TProps) {
  return (
    <form className="space-y-6" action={formAction}>
      {children}
      <FormStatusButtonWrapper>Submit</FormStatusButtonWrapper>
    </form>
  );
}
