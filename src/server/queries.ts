import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { PostgresError } from "postgres";
import { cache } from "react";
import "server-only";
import { ZodError } from "zod";
import { db } from "./db";
import { projectZodSchema, projectsSchema } from "./db/schema";

// TODO: use better error handling approach
export async function createNewProject({
  newProject,
}: {
  newProject: typeof projectsSchema.$inferInsert;
}) {
  try {
    const parsedData = projectZodSchema.parse(newProject);

    await db.insert(projectsSchema).values({ ...parsedData });

    revalidatePath("/[locale]", "page");
    revalidatePath("/dashboard", "page");

    return {
      status: "success",
    };
  } catch (error) {
    console.log("🚨 error in createNewProject", error);
    if (error instanceof ZodError) {
      const errorMap = error.flatten().fieldErrors;
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
          map: errorMap,
        },
      };
    } else if (error instanceof PostgresError) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else if (error instanceof Error) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else {
      return {
        status: "failure",
        error: {
          message: "Something went wrong while creating a new project",
          cause: "",
        },
      };
    }
  }
}

export const getAllProjects = cache(async () => {
  try {
    const projects = await db.query.projectsSchema.findMany({
      orderBy: [desc(projectsSchema.createdAt)],
    });
    return {
      status: "success",
      payload: projects,
    };
  } catch (error) {
    console.log("🚨 error in getAllProjects", error);
    if (error instanceof ZodError) {
      const errorMap = error.flatten().fieldErrors;
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
          map: errorMap,
        },
      };
    } else if (error instanceof PostgresError) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else if (error instanceof Error) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else {
      return {
        status: "failure",
        error: {
          message: "Something went wrong while getting all projects",
          cause: "",
        },
      };
    }
  }
});

export const getSingleProject = cache(
  async ({ projectID }: { projectID: number }) => {
    try {
      const project = await db.query.projectsSchema.findFirst({
        where: eq(projectsSchema.id, projectID),
      });
      return {
        status: "success",
        payload: project,
      };
    } catch (error) {
      console.log("🚨 error in getSingleProject", error);
      if (error instanceof ZodError) {
        const errorMap = error.flatten().fieldErrors;
        return {
          status: "failure",
          error: {
            message: error.message,
            cause: error.cause,
            map: errorMap,
          },
        };
      } else if (error instanceof PostgresError) {
        return {
          status: "failure",
          error: {
            message: error.message,
            cause: error.cause,
          },
        };
      } else if (error instanceof Error) {
        return {
          status: "failure",
          error: {
            message: error.message,
            cause: error.cause,
          },
        };
      } else {
        return {
          status: "failure",
          error: {
            message: "Something went wrong while getting a single project",
            cause: "",
          },
        };
      }
    }
  },
);

export async function updateSingleProject({
  updatedProject,
}: {
  updatedProject: typeof projectsSchema.$inferInsert;
}) {
  try {
    const parsedData = projectZodSchema.parse(updatedProject);

    const isProjectExists = await getSingleProject({
      projectID: parsedData.id,
    });

    if (!isProjectExists) {
      console.log("🚨 project doesn't exist");
      throw new Error(`Project with ID: ${parsedData.id} not found`);
    }

    await db
      .update(projectsSchema)
      .set({ ...parsedData })
      .where(eq(projectsSchema.id, parsedData.id));

    revalidatePath("/[locale]", "page");
    revalidatePath("/dashboard", "page");

    return {
      status: "success",
    };
  } catch (error) {
    console.log("🚨 error in updateSingleProject", error);
    if (error instanceof ZodError) {
      const errorMap = error.flatten().fieldErrors;
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
          map: errorMap,
        },
      };
    } else if (error instanceof PostgresError) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else if (error instanceof Error) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else {
      return {
        status: "failure",
        error: {
          message: "Something went wrong while updating a project",
          cause: "",
        },
      };
    }
  }
}

export async function deleteProject(projectID: number) {
  try {
    const project = await db.query.projectsSchema.findFirst({
      where: eq(projectsSchema.id, projectID),
    });

    if (!project) {
      console.log("🚨 project doesn't exist");
      throw new Error(`Project with ID: ${projectID} not found`);
    }

    await db.delete(projectsSchema).where(eq(projectsSchema.id, projectID));

    revalidatePath("/[locale]", "page");
    revalidatePath("/dashboard", "page");

    return {
      status: "success",
    };
  } catch (error) {
    console.log("🚨 error in deleteProject", error);
    if (error instanceof ZodError) {
      const errorMap = error.flatten().fieldErrors;
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
          map: errorMap,
        },
      };
    } else if (error instanceof PostgresError) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else if (error instanceof Error) {
      return {
        status: "failure",
        error: {
          message: error.message,
          cause: error.cause,
        },
      };
    } else {
      return {
        status: "failure",
        error: {
          message: `Something went wrong while deleting a project with ID: ${projectID}`,
          cause: "",
        },
      };
    }
  }
}
