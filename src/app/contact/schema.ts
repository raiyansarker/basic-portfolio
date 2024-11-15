import { z } from "zod";

const subjects = ["project", "query", "feedback", "other"] as const;

export const contactFormSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  email: z.string().email(),
  subject: z.enum(subjects),
  message: z.string().min(2).max(1000),
});
