import { cn } from "@/lib/utils";

export const Input = ({ className, ...props }) => (
  <input
    className={cn(
      "flex h-11 w-full rounded-md border border-white/10 bg-black px-3 py-2 text-sm placeholder:text-white/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20",
      className
    )}
    {...props}
  />
);
