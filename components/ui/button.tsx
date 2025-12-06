import { cn } from "@/lib/utils";

export const Button = ({ className, variant = "default", ...props }) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium h-11 px-8 transition-colors",
      variant === "default" && "bg-white text-black hover:bg-white/90",
      variant === "ghost" && "hover:bg-white/10",
      className
    )}
    {...props}
  />
);
