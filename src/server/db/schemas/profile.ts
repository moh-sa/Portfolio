import { serial, text, varchar } from "drizzle-orm/pg-core";
import { createTable } from "./base";

export const profileSchema = createTable("profiles", {
  id: serial("id").primaryKey(),

  nameEN: varchar("name_en", { length: 256 }).notNull().default(""),
  nameAR: varchar("name_ar", { length: 256 }).notNull().default(""),

  bioEN: varchar("bio_en", { length: 1024 }).notNull().default(""),
  bioAR: varchar("bio_ar", { length: 1024 }).notNull().default(""),

  skillsTitleEN: varchar("skills_title_en", { length: 256 })
    .notNull()
    .default(""),
  skillsTitleAR: varchar("skills_title_ar", { length: 256 })
    .notNull()
    .default(""),
  skills: text("skills").notNull().default(""),

  contactTitleEN: varchar("contact_title_en", { length: 256 })
    .notNull()
    .default(""),
  contactTitleAR: varchar("contact_title_ar", { length: 256 })
    .notNull()
    .default(""),

  email: varchar("email", { length: 256 }).notNull().default(""),
  emailLabelEN: varchar("email_label_en", { length: 256 })
    .notNull()
    .default(""),
  emailLabelAR: varchar("email_label_ar", { length: 256 })
    .notNull()
    .default(""),

  resumeLink: varchar("resume_link", { length: 1024 }).notNull().default(""),
  resumeLabelEN: varchar("resume_label_en", { length: 256 })
    .notNull()
    .default(""),
  resumeLabelAR: varchar("resume_label_ar", { length: 256 })
    .notNull()
    .default(""),

  linkedinLink: varchar("linkedin_link", { length: 1024 })
    .notNull()
    .default(""),
  linkedinLabelEN: varchar("linkedin_label_en", { length: 256 })
    .notNull()
    .default(""),
  linkedinLabelAR: varchar("linkedin_label_ar", { length: 256 })
    .notNull()
    .default(""),

  githubLink: varchar("github_link", { length: 1024 }).notNull().default(""),
  githubLabelEN: varchar("github_label_en", { length: 256 })
    .notNull()
    .default(""),
  githubLabelAR: varchar("github_label_ar", { length: 256 })
    .notNull()
    .default(""),
});
