import { Button, InputField, TextAreaField } from "~/components";
import { groupedFields } from "~/data";
import { type projectsSchema } from "~/server/db/schema";

type TProps = {
  project?: typeof projectsSchema.$inferSelect;
  formAction: (formData: FormData) => void;
};

export function Form({ project, formAction }: TProps) {
  return (
    <form className="space-y-6" action={formAction}>
      {Object.entries(groupedFields).map(([title, group], index) => (
        <div key={`${index}-${title}`}>
          <h2 className="text-2xl font-thin capitalize">{title}</h2>
          <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
            {group.map((field, index) => {
              let value = "";

              if (project) {
                const key = field.id; // @ts-expect-error I know it's wrong, but I couldn't find a better way to do it :(
                // eslint-disable-next-line
                value = project[key];
              }

              if (field.as === "input") {
                return (
                  <InputField
                    key={`${index}-${field.id}`}
                    value={value}
                    {...field}
                  />
                );
              } else if (field.as === "textarea") {
                return (
                  <TextAreaField
                    key={`${index}-${field.id}`}
                    value={value}
                    {...field}
                  />
                );
              }
            })}
          </div>
        </div>
      ))}
      <Button type="submit">Submit</Button>
    </form>
  );
}
