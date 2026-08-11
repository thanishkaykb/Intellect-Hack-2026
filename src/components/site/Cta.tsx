import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

/** Site CTA. Renders a link when href is provided, otherwise a button. */
export function Cta({
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}: ComponentProps<"a"> & { variant?: "primary" | "ghost" | "outline"; size?: "md" | "lg" }) {
  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-sm font-medium tracking-[0.12em] uppercase transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring disabled:opacity-50",
    size === "lg" ? "px-8 py-4 text-sm" : "px-6 py-3 text-xs",
    variant === "primary" &&
      "bg-[image:var(--gradient-ember)] text-primary-foreground shadow-[0_10px_40px_-16px_oklch(0.56_0.2_20/80%)] hover:shadow-[0_16px_60px_-16px_oklch(0.6_0.22_22/95%)] hover:brightness-110",
    variant === "outline" &&
      "border border-border bg-surface/40 text-foreground backdrop-blur-sm hover:border-primary/70 hover:bg-surface-2/60 hover:shadow-[0_0_40px_-14px_oklch(0.56_0.2_20/70%)]",
    variant === "ghost" && "text-muted-foreground hover:text-foreground",
    className,
  );

  if (href) {
    const external = /^https?:/.test(href);
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...props}
      />
    );
  }
  return (
    <button
      type="button"
      className={cn(classes, "cursor-not-allowed opacity-60")}
      aria-disabled="true"
      title="Link coming soon"
      {...(props as ComponentProps<"button">)}
    />
  );
}
