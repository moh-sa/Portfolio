import { desc, eq } from "drizzle-orm";
import { Locales } from "~/types";
import { arabicField, englishField } from "~/types/ProjectResponseLocaleFields";
import { type Response } from "~/types/QueriesResponse";
import { ResponseHandler } from "~/utils/ResponseHandler";
import { db } from ".";
import {
  insertProjectSchema,
  projectSchema,
  selectProjectSchema,
  type InsertProjectType,
  type SelectProjectLocaleType,
  type SelectProjectType,
} from "./schemas";

export async function insertProject({
  project,
}: {
  project: InsertProjectType;
}): Promise<Response<void>> {
  try {
    const parsedData = insertProjectSchema.parse(project);
    await db.insert(projectSchema).values({ ...parsedData });
    return {
      status: "success",
      payload: undefined,
    };
  } catch (error) {
    return ResponseHandler.handleError({
      error: error,
      cause:
        "An unexpected error occurred while inserting the project in insertProject",
    });
  }
}

export async function readLocaleProjectsOrderedByDate({
  locale,
}: {
  locale: Locales;
}): Promise<Response<Array<SelectProjectLocaleType>>> {
  try {
    const query = await db
      .select({
        ...(locale === Locales.ENGLISH ? englishField : arabicField),
      })
      .from(projectSchema)
      .orderBy(desc(projectSchema.createdAt));

    if (!query) {
      return ResponseHandler.handleNotFound({
        message: "Projects not found",
        cause: `No projects found in readProjectsOrderedByDate`,
      });
    }

    return {
      status: "success",
      payload: query,
    };
  } catch (error) {
    return ResponseHandler.handleError({
      error: error,
      cause:
        "An unexpected error occurred while retrieving the project in readProjectByID",
    });
  }
}

export async function readProjectByID({
  projectID,
}: {
  projectID: number;
}): Promise<Response<SelectProjectType>> {
  try {
    const query = await db.query.projectSchema.findFirst({
      where: eq(projectSchema.id, projectID),
    });

    if (!query) {
      return ResponseHandler.handleNotFound({
        message: "Project not found",
        cause: `Project with ID: ${projectID} not found in readProjectByID`,
      });
    }

    return {
      status: "success",
      payload: query,
    };
  } catch (error) {
    return ResponseHandler.handleError({
      error: error,
      cause:
        "An unexpected error occurred while retrieving the project in readProjectByID",
    });
  }
}

export async function updateProject({
  project,
}: {
  project: typeof selectProjectSchema._type;
}): Promise<Response<void>> {
  try {
    const parsedData = selectProjectSchema.parse(project);

    const isProjectExists = await readProjectByID({
      projectID: parsedData.id,
    });
    if (isProjectExists.status === "failure") return isProjectExists;

    await db
      .update(projectSchema)
      .set({ ...project })
      .where(eq(projectSchema.id, project.id));
    return {
      status: "success",
      payload: undefined,
    };
  } catch (error) {
    return ResponseHandler.handleError({
      error: error,
      cause: `An unexpected error occurred while updating a project with ID: ${project.id} in updateProject`,
    });
  }
}

export async function deleteProject({
  projectID,
}: {
  projectID: number;
}): Promise<Response<void>> {
  try {
    const isProjectExists = await readProjectByID({
      projectID: projectID,
    });
    if (isProjectExists.status === "failure") return isProjectExists;

    await db.delete(projectSchema).where(eq(projectSchema.id, projectID));

    return {
      status: "success",
      payload: undefined,
    };
  } catch (error) {
    return ResponseHandler.handleError({
      error: error,
      cause: `An unexpected error occurred while deleting a project with ID: ${projectID} in deleteProject`,
    });
  }
}
