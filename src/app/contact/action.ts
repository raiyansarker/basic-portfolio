"use server";

import { createSafeActionClient } from "next-safe-action";
import { contactFormSchema } from "./schema";

const actionClient = createSafeActionClient();

export const contactAction = actionClient.schema(contactFormSchema).action(
  async ({ parsedInput, ctx }) => {
    // Send email, save to database, etc.
    console.log(parsedInput);
    console.log(ctx);

    // wait 1000ms
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
    };
  },
  {
    onError: async (error) => {
      console.log(error);
    },
    onSuccess: async ({ data }) => {
      console.log(data);
    },
  },
);
