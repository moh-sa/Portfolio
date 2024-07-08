import { boolean, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
import { createTable } from "./base";

export const projectSchema = createTable("projects", {
  id: serial("id").primaryKey(),

  titleEN: varchar("title_en", { length: 256 }).notNull().default(""),
  titleAR: varchar("title_ar", { length: 256 }).notNull().default(""),

  descriptionEN: varchar("description_en", { length: 1024 })
    .notNull()
    .default(""),
  descriptionAR: varchar("description_ar", { length: 1024 })
    .notNull()
    .default(""),

  techStack: text("tech_stack").notNull().default(""),

  imageURL: text("image_url").notNull().default(""),
  imageAltEN: varchar("image_alt_en", { length: 1024 }).notNull().default(""),
  imageAltAR: varchar("image_alt_ar", { length: 1024 }).notNull().default(""),

  demoURL: varchar("demo_url", { length: 1024 }).notNull().default(""),
  repoURL: varchar("repo_url", { length: 1024 }).notNull().default(""),

  isOriginal: boolean("is_original").notNull().default(false),
  isHidden: boolean("is_hidden").notNull().default(false),

  createdAt: timestamp("created_at").defaultNow(),
});

// Zod Schema
export const insertProjectSchema = createInsertSchema(projectSchema, {
  repoURL: (schema) => schema.repoURL.url(),
  demoURL: (schema) => schema.demoURL.url(),
  imageURL: (schema) => schema.imageURL.url(),
});
export type InsertProjectType = typeof insertProjectSchema._type;

export const selectProjectSchema = createSelectSchema(projectSchema, {
  repoURL: (schema) => schema.repoURL.url(),
  demoURL: (schema) => schema.demoURL.url(),
  imageURL: (schema) => schema.imageURL.url(),
});
export type SelectProjectType = typeof selectProjectSchema._type;

export const selectProjectEnglishSchema = selectProjectSchema
  .omit({ descriptionAR: true, imageAltAR: true, titleAR: true })
  .transform(({ titleEN, descriptionEN, imageAltEN, ...rest }) => ({
    title: titleEN,
    description: descriptionEN,
    imageAlt: imageAltEN,
    ...rest,
  }));
export const selectProjectArabicSchema = selectProjectSchema
  .omit({ descriptionEN: true, imageAltEN: true, titleEN: true })
  .transform(({ titleAR, descriptionAR, imageAltAR, ...rest }) => ({
    title: titleAR,
    description: descriptionAR,
    imageAlt: imageAltAR,
    ...rest,
  }));

export type SelectProjectLocaleType =
  | typeof selectProjectEnglishSchema._type
  | typeof selectProjectArabicSchema._type;
