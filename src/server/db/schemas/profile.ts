import { serial, text, varchar } from "drizzle-orm/pg-core";
import { createInsertSchema, createSelectSchema } from "drizzle-zod";
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

// Zod Schemas
export const insertProfileSchema = createInsertSchema(profileSchema, {
  email: (schema) => schema.email.email(),
  resumeLink: (schema) => schema.resumeLink.url(),
  linkedinLink: (schema) => schema.linkedinLink.url(),
  githubLink: (schema) => schema.githubLink.url(),
});
export type InsertProfileType = typeof insertProfileSchema._type;

export const selectProfileSchema = createSelectSchema(profileSchema, {
  email: (schema) => schema.email.email(),
  resumeLink: (schema) => schema.resumeLink.url(),
  linkedinLink: (schema) => schema.linkedinLink.url(),
  githubLink: (schema) => schema.githubLink.url(),
});
export type SelectProfileType = typeof selectProfileSchema._type;

export const selectProfileEnglishSchema = selectProfileSchema
  .omit({
    nameAR: true,
    bioAR: true,
    skillsTitleAR: true,
    contactTitleAR: true,
    emailLabelAR: true,
    resumeLabelAR: true,
    linkedinLabelAR: true,
    githubLabelAR: true,
  })
  .transform(
    ({
      nameEN,
      bioEN,
      skillsTitleEN,
      contactTitleEN,
      emailLabelEN,
      resumeLabelEN,
      linkedinLabelEN,
      githubLabelEN,
      ...rest
    }) => ({
      name: nameEN,
      bio: bioEN,
      skillsTitle: skillsTitleEN,
      contactTitle: contactTitleEN,
      emailLabel: emailLabelEN,
      resumeLabel: resumeLabelEN,
      linkedinLabel: linkedinLabelEN,
      githubLabel: githubLabelEN,
      ...rest,
    }),
  );

export const selectProfileArabicSchema = selectProfileSchema
  .omit({
    nameEN: true,
    bioEN: true,
    skillsTitleEN: true,
    contactTitleEN: true,
    emailLabelEN: true,
    resumeLabelEN: true,
    linkedinLabelEN: true,
    githubLabelEN: true,
  })
  .transform(
    ({
      nameAR,
      bioAR,
      skillsTitleAR,
      contactTitleAR,
      emailLabelAR,
      resumeLabelAR,
      linkedinLabelAR,
      githubLabelAR,
      ...rest
    }) => ({
      name: nameAR,
      bio: bioAR,
      skillsTitle: skillsTitleAR,
      contactTitle: contactTitleAR,
      emailLabel: emailLabelAR,
      resumeLabel: resumeLabelAR,
      linkedinLabel: linkedinLabelAR,
      githubLabel: githubLabelAR,
      ...rest,
    }),
  );

export type SelectProfileLocaleType =
  | typeof selectProfileEnglishSchema._type
  | typeof selectProfileArabicSchema._type;
