import { cn } from "@/lib/utils";

import styles from "./loading.module.css";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("size-5", className)}>
      <div className={cn(styles.spinner, "size-5", className)}>
        {[...Array(12)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  );
}
