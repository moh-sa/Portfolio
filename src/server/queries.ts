import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { cache } from "react";
import "server-only";
import { ZodError } from "zod";
import { db } from "./db";
import {
  projectTechs,
  projectZodSchema,
  projects,
  techZodSchema,
  techs,
} from "./db/schema";

export const getAllTechs = cache(async () => {
  try {
    return await db.query.projects.findMany();
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while getting all Techs", {
      cause: error,
    });
  }
});

export const getAllProjects = cache(async () => {
  try {
    return await db.query.projects.findMany({
      with: {
        projectTechs: {
          with: {
            tech: true,
          },
        },
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while getting all projects", {
      cause: error,
    });
  }
});

export const createNewProject = cache(
  async (project: typeof projectZodSchema.insert._type) => {
    try {
      const newProject = projectZodSchema.insert.parse(project);

      const [newProjectID] = await db
        .insert(projects)
        .values({ ...newProject })
        .returning({ id: projects.id });

      revalidatePath("/[locale]", "page");

      return newProjectID;
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        throw new Error(error.message, { cause: error.cause });
      } else {
        throw new Error("Something went wrong while creating a new project", {
          cause: error,
        });
      }
    }
  },
);

export const createNewTech = cache(
  async (tech: typeof techZodSchema.insert._type) => {
    try {
      const newTech = techZodSchema.insert.parse(tech);

      const [newTechID] = await db
        .insert(techs)
        .values({ ...newTech })
        .returning({ id: techs.id });

      return newTechID;
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        throw new Error(error.message, { cause: error.cause });
      } else {
        throw new Error("Something went wrong while creating a new tech", {
          cause: error,
        });
      }
    }
  },
);

export const createNewProjectTech = cache(
  async (projectID: number, techID: number) => {
    try {
      const [newProjectTechID] = await db
        .insert(projectTechs)
        .values({ projectID, techID });

      return newProjectTechID;
    } catch (error) {
      console.log(error);
      if (error instanceof ZodError) {
        throw new Error(error.message, { cause: error.cause });
      } else {
        throw new Error(
          "Something went wrong while creating a new project tech",
          {
            cause: error,
          },
        );
      }
    }
  },
);

export const deleteProject = cache(async (projectID: number) => {
  try {
    await db.delete(projectTechs).where(eq(projectTechs.projectID, projectID));
    await db.delete(projects).where(eq(projects.id, projectID));
    return { message: "Project deleted successfully" };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while getting all projects", {
      cause: error,
    });
  }
});

export const deleteTech = cache(async (techID: number) => {
  try {
    await db.delete(projectTechs).where(eq(projectTechs.techID, techID));
    await db.delete(techs).where(eq(techs.id, techID));
    return { message: "Tech deleted successfully" };
  } catch (error) {
    console.log(error);
    throw new Error("Something went wrong while getting all projects", {
      cause: error,
    });
  }
});
