import Link from "next/link";
import { deleteProject } from "~/server/queries";

type TProps = {
  isEdit?: boolean;
  projectID: number;
};
export function ProjectActionButton({ isEdit, projectID }: TProps) {
  const commonStyles =
    "flex w-full items-center justify-center gap-2 rounded capitalize transition-colors duration-500 ease-in hover:duration-150 hover:ease-out px-2 py-1 text-sm font-medium";
  if (isEdit) {
    return (
      <Link
        className={`${commonStyles} hover:white flex-[2] bg-black text-white hover:bg-white hover:text-black`}
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
          className={`${commonStyles} flex-1 bg-red-200 text-red-500 hover:bg-red-600/90 hover:text-white`}
          type="submit"
        >
          Delete
        </button>
      </form>
    );
  }
}
