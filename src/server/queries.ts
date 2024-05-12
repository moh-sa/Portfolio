import { revalidatePath } from "next/cache";
import { cache } from "react";
import "server-only";
import { ZodError } from "zod";
import { db } from "./db";
import { projectSchema, projects, techSchema, techs } from "./db/schema";

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
  async (project: typeof projectSchema.insert._type) => {
    try {
      const newProject = projectSchema.insert.parse(project);

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
  async (tech: typeof techSchema.insert._type) => {
    try {
      const newTech = techSchema.insert.parse(tech);

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
