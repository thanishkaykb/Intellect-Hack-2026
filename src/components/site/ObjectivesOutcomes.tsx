import { BrainCircuit, Globe2, ShieldCheck, Sparkles, Users, Check } from "lucide-react";
import { OBJECTIVES, OUTCOMES } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = { Sparkles, Users, BrainCircuit, Globe2, ShieldCheck };

export function ObjectivesOutcomes() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading eyebrow="Purpose" title="Our Objectives" />
            <ul className="mt-10 space-y-5">
              {OBJECTIVES.map((o, i) => {
                const Icon = ICONS[o.icon];
                return (
                  <Reveal as="li" key={o.text} delay={i * 80}>
                    <div className="group border-border/60 flex items-start gap-4 border-b pb-5">
                      <span className="border-border/80 bg-surface/60 text-primary flex h-10 w-10 shrink-0 items-center justify-center rounded-sm border transition-all duration-500 group-hover:border-primary/70 group-hover:shadow-[0_0_26px_-10px_oklch(0.6_0.2_22)]">
                        <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <p className="text-foreground/90 pt-2 text-sm leading-relaxed sm:text-base">
                        {o.text}
                      </p>
                    </div>
                  </Reveal>
                );
              })}
            </ul>
          </div>

          <div>
            <SectionHeading eyebrow="Outcomes" title="What You Take Away" />
            <ul className="mt-10 grid gap-3">
              {OUTCOMES.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 55}>
                  <div className="border-border/60 bg-surface/30 flex items-start gap-3 rounded-sm border px-4 py-3.5 transition-colors hover:border-primary/50">
                    <Check className="text-primary mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="text-muted-foreground text-sm leading-relaxed">{item}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
