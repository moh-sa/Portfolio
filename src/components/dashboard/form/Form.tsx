import {
  Button,
  Checkbox,
  Fieldset,
  InputField,
  TextAreaField,
} from "~/components";
import { type projectsSchema } from "~/server/db/schema";

type TProps = {
  project?: typeof projectsSchema.$inferSelect;
  formAction: (formData: FormData) => void;
};
export function Form({ project, formAction }: TProps) {
  return (
    <form className="space-y-6" action={formAction}>
      {/* ✨ TITLE ✨ */}
      <Fieldset legend="Title">
        <InputField
          required
          type="text"
          id="titleEN"
          label="Title"
          placeholder="Project Name in English"
          value={project?.titleEN}
        />

        <InputField
          isArabic
          required
          type="text"
          id="titleAR"
          label="اسم العمل"
          placeholder="اسم العمل بالعربية"
          value={project?.titleAR}
        />
      </Fieldset>

      {/* ✨ DESCRIPTION ✨ */}
      <Fieldset legend="Description">
        <TextAreaField
          id="descriptionEN"
          label="Description"
          placeholder="Project Description in English"
          value={project?.descriptionEN}
        />

        <TextAreaField
          isArabic
          id="descriptionAR"
          label="الوصف"
          placeholder="وصف العمل بالعربية"
          value={project?.descriptionAR}
        />
      </Fieldset>

      {/* ✨ IMAGE ✨ */}
      <Fieldset legend="Image">
        <InputField type="file" id="imageURL" label="Image Upload" />

        <TextAreaField
          id="imageAltEN"
          label="Image Alt Text"
          placeholder="Image Alt in English"
          value={project?.imageAltEN}
        />

        <TextAreaField
          isArabic
          id="imageAltAR"
          label="وصف الصورة"
          placeholder="وصف الصورة بالعربية"
          value={project?.imageAltAR}
        />
      </Fieldset>

      {/* ✨ LINKS✨ */}
      <Fieldset legend="Links">
        <InputField
          type="url"
          id="demoURL"
          label="Demo URL"
          placeholder="Live demo URL"
          value={project?.demoURL}
        />

        <InputField
          type="url"
          id="repoURL"
          label="Repo URL"
          placeholder="Github repo URL"
          value={project?.repoURL}
        />
      </Fieldset>

      {/* ✨ TECH STACK ✨ */}
      <Fieldset legend="Tech Stack">
        <InputField
          type="text"
          id="techStack"
          label="Tech Stack"
          placeholder="Tech,AnotherTech,OneMoreTech"
          value={project?.techStack}
        />
      </Fieldset>

      {/* ✨ Checkboxes ✨ */}
      <Fieldset legend="Other">
        <Checkbox id="hidden" label="Hidden" defaultChecked={project?.hidden} />
        <Checkbox
          id="isOriginal"
          label="Is Original"
          defaultChecked={project?.isOriginal}
        />
      </Fieldset>

      <Button type="submit">Submit</Button>
    </form>
  );
}
