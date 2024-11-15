import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  server: {
    SMTP_FROM: z.string().min(1),
    SMTP_HOST: z.string().min(1),
    SMTP_PORT: z.coerce.number(),
    SMTP_USER: z.string().optional(),
    SMTP_PASS: z.string().optional(),

    ADMIN_EMAIL: z.string().min(1),
  },

  experimental__runtimeEnv: process.env,
});
