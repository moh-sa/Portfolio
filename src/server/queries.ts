import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import { desc, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { PostgresError } from "postgres";
import { cache } from "react";
import "server-only";
import { ZodError } from "zod";
import { env } from "~/env";
import { db } from "./db";
import { insertProjectSchema, projectSchema } from "./db/schemas";

// TODO: use better error handling approach
export async function createNewProject({
  newProject,
}: {
  newProject: typeof insertProjectSchema._type;
}) {
  try {
    const parsedData = insertProjectSchema.parse(newProject);

    await db.insert(projectSchema).values({ ...parsedData });

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

export const getAllProjects = cache(
  async ({ isEnglish }: { isEnglish: boolean }) => {
    try {
      const projects = await db.query.projectsSchema.findMany({
        orderBy: [desc(projectSchema.createdAt)],
      });

      const LocalizedProjects = projects.map((project) => {
        const {
          titleEN,
          titleAR,
          descriptionEN,
          descriptionAR,
          imageAltEN,
          imageAltAR,
          ...rest
        } = project;
        return {
          title: isEnglish ? titleEN : titleAR,
          description: isEnglish ? descriptionEN : descriptionAR,
          imageAlt: isEnglish ? imageAltEN : imageAltAR,
          ...rest,
        };
      });

      return {
        status: "success",
        payload: LocalizedProjects,
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
  },
);

export const getSingleProject = cache(
  async ({ projectID }: { projectID: number }) => {
    try {
      const project = await db.query.projectsSchema.findFirst({
        where: eq(projectSchema.id, projectID),
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
  updatedProject: typeof insertProjectSchema._type;
}) {
  try {
    const parsedData = insertProjectSchema.parse(updatedProject);

    const isProjectExists = await getSingleProject({
      projectID: parsedData.id!,
    });

    if (!isProjectExists) {
      console.log("🚨 project doesn't exist");
      throw new Error(`Project with ID: ${parsedData.id} not found`);
    }

    await db
      .update(projectSchema)
      .set({ ...parsedData })
      .where(eq(projectSchema.id, parsedData.id!));

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
      where: eq(projectSchema.id, projectID),
    });

    if (!project) {
      console.log("🚨 project doesn't exist");
      throw new Error(`Project with ID: ${projectID} not found`);
    }

    await db.delete(projectSchema).where(eq(projectSchema.id, projectID));

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

cloudinary.config({
  cloud_name: env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: env.NEXT_PUBLIC_CLOUDINARY_API_KEY,
  api_secret: env.CLOUDINARY_API_SECRET,
});
export async function uploadImageAndGetURL(formData: FormData) {
  const file = formData.get("imageURL") as File;
  const arrayBuffer = await file.arrayBuffer();
  const buffer = new Uint8Array(arrayBuffer);

  const result: UploadApiResponse | undefined = await new Promise(
    (resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          { upload_preset: "Portfolio" },
          function (error, result) {
            if (error) {
              reject(error);
              return;
            }
            resolve(result);
          },
        )
        .end(buffer);
    },
  );

  return result?.secure_url;
}
