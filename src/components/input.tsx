import React from "react";
import { cn } from "@/lib/utils";

const styles =
  "w-full disabled:cursor-not-allowed px-3 py-2 bg-gray-50 dark:bg-white/10 border border-gray-950/10 dark:border-white/10 rounded-lg text-foreground text-sm hover:border-gray-300 dark:hover:border-white/20 focus-visible:outline-none focus-visible:border-gray-950/30 dark:focus-visible:border-white/30 focus-visible:ring-2 focus-visible:ring-gray-950/5 dark:focus-visible:ring-white/10";

const Input = ({
  type,
  className,
  ref,
  ...props
}: React.ComponentProps<"input">) => (
  <input type={type} className={cn(styles, className)} ref={ref} {...props} />
);
Input.displayName = "Input";

export { Input, styles as inputStyles };
