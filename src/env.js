import { config } from "dotenv";
import { expand } from "dotenv-expand";
import { z, ZodError } from "zod";

const EnvSchema = z.object({
  NODE_ENV: z
    .enum(["development", "preview", "production"])
    .default("development"),

  NEXT_PUBLIC_URL: z.string().url(),

  NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME: z.string(),
  NEXT_PUBLIC_CLOUDINARY_API_KEY: z.string(),
  CLOUDINARY_API_SECRET: z.string(),

  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_NAME: z.string(),
  DB_PORT: z.string(),
  DATABASE_URL: z.string().url(),
});

expand(config());

try {
  EnvSchema.parse(process.env);
} catch (error) {
  if (error instanceof ZodError) {
    let message = "❌ Missing required values in .env:\n";
    error.issues.forEach((issue) => {
      message += issue.path[0] + "\n";
    });

    const e = new Error(message);
    e.stack = "";

    throw e;
  } else {
    console.error(error);
  }
}

export const env = EnvSchema.parse(process.env);
