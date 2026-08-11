import { TIMELINE } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Timeline() {
  return (
    <section id="timeline" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Timeline"
          title="The Road to Intellect Hack 2026"
          align="center"
        />

        <div className="relative mt-20">
          {/* glowing connector */}
          <div
            aria-hidden="true"
            className="absolute top-0 bottom-0 left-[15px] w-px bg-[linear-gradient(to_bottom,transparent,oklch(0.56_0.2_20/85%),transparent)] shadow-[0_0_24px_2px_oklch(0.56_0.2_20/45%)] lg:top-[15px] lg:right-0 lg:bottom-auto lg:left-0 lg:h-px lg:w-full lg:bg-[linear-gradient(to_right,transparent,oklch(0.56_0.2_20/85%),transparent)]"
          />

          <ol className="grid gap-12 lg:grid-cols-4 lg:gap-6">
            {TIMELINE.map((step, i) => (
              <Reveal
                as="li"
                key={step.date}
                delay={i * 120}
                className="relative pl-12 lg:pt-14 lg:pl-0"
              >
                <span
                  aria-hidden="true"
                  className="bg-background border-primary absolute top-1.5 left-0 flex h-8 w-8 items-center justify-center rounded-full border shadow-[0_0_24px_-2px_oklch(0.56_0.2_20/80%)] lg:top-0 lg:left-0"
                >
                  <span className="bg-primary h-2.5 w-2.5 rounded-full" />
                </span>
                <p className="text-primary font-mono text-[0.7rem] tracking-[0.22em] uppercase">
                  {step.date}
                </p>
                <h3 className="mt-3 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{step.body}</p>
                {step.points.length > 0 && (
                  <ul className="text-muted-foreground mt-4 space-y-1.5 text-sm">
                    {step.points.map((p) => (
                      <li key={p} className="flex gap-2">
                        <span aria-hidden="true" className="text-primary">
                          —
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                )}
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
