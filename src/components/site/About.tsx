import { EVENT_FOCUS } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { EventStats } from "./EventStats";

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <SectionHeading
            eyebrow="About the event"
            title="What is Intellect Hack 2026?"
            description="Intellect Hack 2026 is an AI-focused competition designed to encourage students to develop innovative solutions to real-world challenges using Artificial Intelligence."
          />
          <Reveal delay={120} className="lg:pt-14">
            <p className="text-eyebrow">The event emphasizes</p>
            <ul className="mt-5 flex flex-wrap gap-2.5">
              {EVENT_FOCUS.map((item) => (
                <li
                  key={item}
                  className="border-border/70 bg-surface/60 text-foreground/85 hover:border-primary/60 hover:text-foreground rounded-full border px-4 py-2 text-sm transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <div className="mt-16">
          <EventStats />
        </div>
      </div>
    </section>
  );
}
