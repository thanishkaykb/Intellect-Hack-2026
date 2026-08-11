import { EVALUATION_CRITERIA } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function EvaluationCriteria() {
  return (
    <section id="evaluation" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading eyebrow="Judging" title="How Will You Be Evaluated?" align="center" />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {EVALUATION_CRITERIA.map((criterion, i) => (
            <Reveal key={criterion} delay={i * 70}>
              <div className="group border-border/70 bg-surface/40 h-full rounded-md border p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/60">
                <span className="text-primary/60 group-hover:text-primary font-mono text-sm transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-base font-semibold text-balance">{criterion}</h3>
                <span
                  aria-hidden="true"
                  className="bg-border mt-6 block h-px w-full overflow-hidden"
                >
                  <span className="bg-primary block h-px w-0 transition-[width] duration-700 group-hover:w-full" />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
