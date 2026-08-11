import { Award, Cpu, Hammer, Lightbulb, Presentation, Users } from "lucide-react";
import { WHY_CARDS } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = { Hammer, Lightbulb, Users, Presentation, Cpu, Award };

export function WhyParticipate() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Why participate" title="Why Intellect Hack?" align="center" />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WHY_CARDS.map((card, i) => {
            const Icon = ICONS[card.icon];
            return (
              <Reveal key={card.title} delay={i * 80}>
                <article className="group border-border/70 bg-surface/40 relative h-full overflow-hidden rounded-md border p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_24px_70px_-40px_oklch(0.56_0.2_20/90%)]">
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -top-24 -right-24 h-48 w-48 rounded-full bg-[radial-gradient(circle,oklch(0.5_0.18_18/28%),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                  <Icon className="text-primary h-6 w-6" aria-hidden="true" />
                  <h3 className="mt-6 text-lg font-semibold">{card.title}</h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{card.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
