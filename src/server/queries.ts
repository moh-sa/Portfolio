import "server-only";
import { db } from "./db";

export async function getAllProjects() {
  return await db.query.projects.findMany({
    with: {
      projectTechs: {
        with: {
          tech: true,
        },
      },
    },
  });
}
