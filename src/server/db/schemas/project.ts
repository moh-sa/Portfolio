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
  hidden: boolean("hidden").notNull().default(false),

  createdAt: timestamp("created_at").defaultNow(),
});

// Zod Schema
export const insertProjectSchema = createInsertSchema(projectSchema);
export const selectProjectSchema = createSelectSchema(projectSchema);
