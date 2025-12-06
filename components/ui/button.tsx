import * as React from "react";
import { cn } from "@/lib/utils";

export const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: "default" | "ghost" }
>(({ className, variant = "default", ...props }, ref) => (
  <button
    className={cn(
      "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-11 px-8",
      variant === "default" && "bg-white text-black hover:bg-white/90",
      variant === "ghost" && "hover:bg-white/10",
      className
    )}
    ref={ref}
    {...props}
  />
));
Button.displayName = "Button";
