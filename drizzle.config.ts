import { type Config } from "drizzle-kit";

import { env } from "~/env";

export default {
  schema: "./src/server/db/schemas/index.ts",
  dialect: "postgresql",
  dbCredentials: {
    url:
      env.NODE_ENV !== "production" ? env.DATABASE_DEV_URL : env.DATABASE_URL,
  },
  tablesFilter: ["portfolio_*"],
} satisfies Config;
