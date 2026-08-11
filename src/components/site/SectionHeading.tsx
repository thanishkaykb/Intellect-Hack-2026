import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow ? (
        <div
          className={cn(
            "text-eyebrow mb-4 flex items-center gap-3",
            align === "center" && "justify-center",
          )}
        >
          <span className="h-px w-8 bg-primary/70" aria-hidden="true" />
          {eyebrow}
        </div>
      ) : null}
      <h2 className="text-3xl leading-[1.05] font-semibold text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="text-muted-foreground mt-5 text-base leading-relaxed sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
}
