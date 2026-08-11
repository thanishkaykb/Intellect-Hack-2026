import { EVENT_FACTS } from "@/data/event";
import { Reveal } from "./Reveal";

export function EventStats() {
  return (
    <section aria-label="Event details" className="relative py-6">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass-panel grid grid-cols-1 gap-px overflow-hidden rounded-md sm:grid-cols-2 lg:grid-cols-4">
          {EVENT_FACTS.map((fact, i) => (
            <Reveal
              key={`${fact.label}-${i}`}
              delay={i * 60}
              className="border-border/50 hover:bg-surface-2/50 border-b border-r p-6 transition-colors last:border-b-0"
            >
              <p className="text-eyebrow">{fact.label}</p>
              <p className="mt-3 text-base leading-snug font-medium text-balance">{fact.value}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
