import { boolean, serial, text, timestamp, varchar } from "drizzle-orm/pg-core";
import { z } from "zod";
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
export const projectZodSchema = z.object({
  id: z.number().positive(),
  titleEN: z.string().min(1).max(256),
  titleAR: z.string().min(1).max(256),
  descriptionEN: z.string().min(1).max(1024),
  descriptionAR: z.string().min(1).max(1024),
  techStack: z.array(z.string()).min(1),
  imageURL: z.string().min(1),
  imageAltEN: z.string().min(1).max(1024),
  imageAltAR: z.string().min(1).max(1024),
  demoURL: z.string().min(1).max(1024).optional(),
  repoURL: z.string().min(1).max(1024).optional(),
  isOriginal: z.boolean().default(false),
  hidden: z.boolean().default(false),
});
