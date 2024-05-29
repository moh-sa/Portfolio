import {
  BackToDashboard,
  Button,
  InputField,
  TextAreaField,
} from "~/components";
import { groupedFields } from "~/data";
import { type projectsSchema } from "~/server/db/schema";

type TProps = {
  heading: string;
  project?: typeof projectsSchema.$inferSelect;
  formAction: (formData: FormData) => void;
};
// TODO: refactor into smaller components
export function ProjectForm({ heading, project, formAction }: TProps) {
  return (
    <div className="w-full max-w-xl px-4">
      <div className="w-full space-y-4">
        <BackToDashboard />
        <h1 className="text-3xl font-medium capitalize">{heading}</h1>
      </div>
      <form className="space-y-6" action={formAction}>
        {Object.entries(groupedFields).map(([title, group], index) => (
          <div key={`${index}-${title}`}>
            <h2 className="text-2xl font-thin capitalize">{title}</h2>
            <div className="flex flex-col flex-wrap gap-2 lg:flex-row">
              {group.map((field, index) => {
                let value = "";
                if (project) {
                  const key = field.id;
                  // @ts-expect-error I know it's wrong, but I couldn't find a better way to do it :(
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
    </div>
  );
}
