import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { PROBLEM_STATEMENTS } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function ProblemStatements() {
  const [active, setActive] = useState<(typeof PROBLEM_STATEMENTS)[number] | null>(null);

  return (
    <section id="problems" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Phase I topics"
          title="Choose Your Challenge"
          description="The hackathon explores AI solutions across infrastructure, cybersecurity, scientific research, geospatial intelligence and open innovation."
          align="center"
        />

        <ul className="mt-14 space-y-4">
          {PROBLEM_STATEMENTS.map((ps, i) => (
            <Reveal as="li" key={ps.no} delay={i * 70}>
              <div className="group border-border/70 bg-surface/40 relative flex flex-col gap-5 overflow-hidden rounded-md border p-6 backdrop-blur-sm transition-all duration-500 hover:border-primary/60 hover:bg-surface-2/40 sm:flex-row sm:items-center sm:gap-8 sm:p-8">
                <span
                  aria-hidden="true"
                  className="font-display text-primary/50 text-3xl leading-none font-bold transition-colors group-hover:text-primary sm:text-4xl"
                >
                  {ps.no}
                </span>
                <h3 className="flex-1 text-lg font-semibold text-balance sm:text-2xl">
                  {ps.title}
                </h3>
                <button
                  type="button"
                  onClick={() => setActive(ps)}
                  className="border-border/80 text-foreground/90 hover:border-primary hover:text-primary inline-flex w-fit items-center gap-2 rounded-sm border px-4 py-2.5 font-mono text-[0.68rem] tracking-[0.18em] uppercase transition-colors"
                >
                  View problem statement
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="border-border/80 bg-surface/95 backdrop-blur-xl">
          <DialogHeader>
            <p className="text-eyebrow">Problem statement {active?.no}</p>
            <DialogTitle className="font-display mt-2 text-2xl leading-tight">
              {active?.title}
            </DialogTitle>
            <DialogDescription className="pt-3 leading-relaxed">
              Detailed problem descriptions, constraints and datasets will be circulated through the
              official Google Form for the online preliminary round.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
}
