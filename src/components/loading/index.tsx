import { cn } from "@/lib/utils";

import styles from "./loading.module.css";

export default function LoadingSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("size", className)}>
      <div className={cn(styles.spinner, "size", className)}>
        {[...Array(12)].map((_, i) => (
          <div key={i} />
        ))}
      </div>
    </div>
  );
}
