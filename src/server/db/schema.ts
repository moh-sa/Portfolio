// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  integer,
  pgTableCreator,
  primaryKey,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";

/**
 * This is an example of how to use the multi-project schema feature of Drizzle ORM. Use the same
 * database instance for multiple projects.
 *
 * @see https://orm.drizzle.team/docs/goodies#multi-project-schema
 */
export const createTable = pgTableCreator((name) => `portfolio_${name}`);

// Data tables
export const projectsSchema = createTable("projects", {
  id: serial("id").primaryKey(),

  titleEN: varchar("title_en", { length: 256 }).notNull().default(""),

  titleAR: varchar("title_ar", { length: 256 }).notNull().default(""),

  descriptionEN: varchar("description_en", { length: 1024 })
    .notNull()
    .default(""),

  descriptionAR: varchar("description_ar", { length: 1024 })
    .notNull()
    .default(""),

  techStack: text("tech_stack")
    .array()
    .notNull()
    .default(sql`ARRAY[]::text[]`),

  imageURL: text("image_url").notNull().default(""),

  imageAltEN: varchar("image_alt_en", { length: 1024 }).notNull().default(""),

  imageAltAR: varchar("image_alt_ar", { length: 1024 }).notNull().default(""),

  demoURL: varchar("demo_url", { length: 1024 }).notNull().default(""),

  repoURL: varchar("repo_url", { length: 1024 }).notNull().default(""),

  createdAt: timestamp("created_at").defaultNow(),
});

// many-to-many relation between projects and techs table
export const projectTechs = createTable(
  "projectTechs",
  {
    techID: integer("tech_id")
      .notNull()
      .references(() => techs.id),
    projectID: integer("project_id")
      .notNull()
      .references(() => projects.id),
  },
  (table) => ({
    primaryKey: primaryKey({ columns: [table.techID, table.projectID] }),
  }),
);

// relations
export const techsRelations = relations(techs, ({ many }) => ({
  projectTechs: many(projectTechs),
}));

export const projectsRelations = relations(projects, ({ many }) => ({
  projectTechs: many(projectTechs),
}));

export const projectsTechsRelations = relations(projectTechs, ({ one }) => ({
  tech: one(techs, {
    fields: [projectTechs.techID],
    references: [techs.id],
  }),
  project: one(projects, {
    fields: [projectTechs.projectID],
    references: [projects.id],
  }),
}));

// Zod Types
export const techZodSchema = {
  insert: createInsertSchema(techs),
  select: createSelectSchema(techs),
};

export const projectZodSchema = {
  insert: createInsertSchema(projects),
  select: createSelectSchema(projects),
};

export const projectTechZodSchema = {
  insert: createInsertSchema(projectTechs),
  select: createSelectSchema(projectTechs),
};
