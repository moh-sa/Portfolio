import Link from "next/link";
import { deleteProject } from "~/server/queries";

type TProps = {
  isEdit?: boolean;
  projectID: number;
};
export function ProjectActionButton({ isEdit, projectID }: TProps) {
  const commonStyles =
    "flex w-full items-center justify-center gap-2 rounded px-4 py-2 capitalize transition-colors duration-300 ease-in hover:duration-75 hover:ease-out text-sm font-medium";
  if (isEdit) {
    return (
      <Link
        className={`${commonStyles} bg-navy-700 hover:bg-navy-500 flex-[2] text-white`}
        href={`/dashboard/edit/${projectID}`}
      >
        Edit
      </Link>
    );
  } else {
    async function handleProjectDelete() {
      "use server";
      await deleteProject(projectID);
    }
    return (
      <form action={handleProjectDelete}>
        <button
          className={`${commonStyles} flex-1 bg-red-400 text-white hover:bg-red-500`}
          type="submit"
        >
          Delete
        </button>
      </form>
    );
  }
}
