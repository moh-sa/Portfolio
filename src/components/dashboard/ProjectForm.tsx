import { groupedFields } from "~/data";
import { type projectsSchema } from "~/server/db/schema";
import { BackToDashboardLink } from "./BackToDashboardLink";
import { InputField } from "./InputField";
import { TextAreaField } from "./TextAreaField";

type TProps = {
  heading: string;
  project?: typeof projectsSchema.$inferSelect;
  formAction: (formData: FormData) => void;
};
export function ProjectForm({ heading, project, formAction }: TProps) {
  return (
    <div className="w-full max-w-xl px-4">
      <div className="w-full space-y-4">
        <BackToDashboardLink url="dashboard" label="Dashboard" />
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

        {/* // TODO: refactor this and other similar looking buttons into one component*/}
        <button
          className="flex w-full items-center justify-center gap-2 rounded bg-black px-4 py-2 capitalize text-white transition-colors duration-500 ease-in hover:bg-white hover:text-black hover:duration-150 hover:ease-out"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
