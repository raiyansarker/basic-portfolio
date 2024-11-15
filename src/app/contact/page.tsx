"use client";

import { useConfetti } from "@/components/confetti";
import { Input, inputStyles } from "@/components/input";
import LoadingSpinner from "@/components/loading";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { contactAction } from "./action";
import { contactFormSchema } from "./schema";

export default function Contact() {
  const { runAnimation } = useConfetti();
  const {
    form,
    action: { isPending },
    handleSubmitWithAction,
    resetFormAndAction,
  } = useHookFormAction(contactAction, zodResolver(contactFormSchema), {
    actionProps: {
      onSuccess: () => {
        runAnimation();
        resetFormAndAction();
      },
    },
  });

  return (
    <>
      <div className="h-full content-start px-6 pb-3 pt-16 lg:mx-auto lg:w-[clamp(31rem,70%,100%)]">
        <h1 className="text-balance py-8 text-2xl leading-relaxed md:text-4xl">
          Have a Project in Mind? Let&apos;s Make It{" "}
          <span className="font-semibold">Happen! 🚀</span>
        </h1>
        <form onSubmit={handleSubmitWithAction}>
          <fieldset className="grid grid-cols-2 gap-3" disabled={isPending}>
            <Input
              type="text"
              placeholder="First Name"
              {...form.register("firstName")}
            />
            <Input
              type="text"
              placeholder="Last Name"
              required
              {...form.register("lastName")}
            />
            <Input
              type="email"
              placeholder="Email"
              className="col-span-2"
              required
              {...form.register("email")}
            />
            <select
              className="col-span-2 w-full rounded-lg border border-gray-950/10 bg-gray-50 px-3 py-2 text-sm text-foreground hover:border-gray-300 focus-visible:border-gray-950/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:border-white/10 dark:bg-white/10 dark:hover:border-white/20 dark:focus-visible:border-white/30 dark:focus-visible:ring-white/10"
              {...form.register("subject")}
            >
              <option value="project">Project</option>
              <option value="query">Query</option>
              <option value="feedback">Feedback</option>
              <option value="other">Other</option>
            </select>
            <textarea
              placeholder="Ask me anything 😏"
              required
              className={cn(
                inputStyles,
                "col-span-2 min-h-24 [field-sizing:content]",
              )}
              {...form.register("message")}
            />
            <div className="col-start-2 place-self-end">
              <button
                type="submit"
                className="group relative rounded-lg border border-amber-500/70 bg-amber-500/90 px-4 py-1.5 text-lg font-semibold text-white transition-colors duration-100 hover:bg-amber-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 disabled:cursor-not-allowed md:px-3 md:py-1 md:text-base dark:border-white/10 dark:bg-[rgba(244,244,244,.1)] dark:text-foreground dark:hover:bg-[rgba(244,244,244,.2)] dark:focus-visible:border-white/30 dark:focus-visible:ring-white/10"
              >
                <span className="group-disabled:invisible">Send</span>
                <span className="absolute inset-0 hidden place-items-center group-disabled:inline-grid">
                  <LoadingSpinner className="[--spinner-color:rgba(255,255,255,0.8)] dark:[--spinner-color:rgba(255,255,255,0.7)]" />
                </span>
              </button>
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
