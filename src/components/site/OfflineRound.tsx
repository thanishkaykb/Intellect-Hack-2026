import { Flame, Hourglass, Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { ParticleField } from "./ParticleField";

const HALVES = [
  {
    label: "First Half — Ideate & Present",
    icon: Hourglass,
    items: [
      "Understand the newly announced problem",
      "Develop their solution concept",
      "Prepare their PowerPoint presentation",
      "Present their idea to the judges",
    ],
    footerLabel: "Evaluation focuses on",
    footer: [
      "Problem understanding",
      "Innovation",
      "Proposed approach",
      "Feasibility",
      "Clarity of presentation",
    ],
  },
  {
    label: "Second Half — Build & Demonstrate",
    icon: Flame,
    items: [
      "Develop or refine their prototype",
      "Demonstrate their working solution",
      "Present the prototype to the judges",
      "Participate in an interactive Question & Answer session",
    ],
    footerLabel: "Final evaluation",
    footer: ["PowerPoint presentation", "Prototype demonstration"],
  },
];

export function OfflineRound() {
  return (
    <section
      id="finale"
      className="grain-overlay relative scroll-mt-24 overflow-hidden border-y border-border/60 bg-[image:var(--gradient-wine)] py-28 sm:py-36"
    >
      <ParticleField density={0.00005} />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_top,oklch(0.6_0.2_22/25%),transparent_70%)]"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="text-center">
          <p className="text-eyebrow text-primary-foreground/70">Phase II</p>
          <h2 className="mt-4 text-[clamp(2.2rem,7vw,4.75rem)] leading-[0.95] font-bold tracking-[-0.03em]">
            <span className="text-gradient-ember">OFFLINE</span>
            <br />
            GRAND FINALE
          </h2>
          <p className="text-foreground/80 mt-6 font-mono text-xs tracking-[0.28em] uppercase sm:text-sm">
            25 September 2026 · Apple Hall · Sri Sairam Engineering College
          </p>
        </Reveal>

        <Reveal
          delay={100}
          className="glass-panel mx-auto mt-14 max-w-3xl rounded-md p-7 text-center sm:p-9"
        >
          <p className="text-eyebrow">The Challenge</p>
          <ul className="text-foreground/90 mt-5 space-y-2.5 text-sm sm:text-base">
            <li>Shortlisted teams report to the venue.</li>
            <li>A NEW problem statement will be announced on the spot.</li>
            <li>The topic will NOT be disclosed in advance.</li>
          </ul>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {HALVES.map((half, i) => (
            <Reveal key={half.label} delay={140 + i * 120}>
              <article className="border-border/70 bg-background/50 h-full rounded-md border p-7 backdrop-blur-md transition-shadow duration-500 hover:shadow-[0_30px_90px_-50px_oklch(0.6_0.22_22/95%)] sm:p-9">
                <half.icon className="text-primary h-6 w-6" aria-hidden="true" />
                <h3 className="mt-5 text-xl font-semibold sm:text-2xl">{half.label}</h3>
                <ul className="mt-5 space-y-2.5">
                  {half.items.map((item) => (
                    <li key={item} className="text-muted-foreground flex gap-3 text-sm">
                      <span aria-hidden="true" className="bg-primary mt-2 h-1 w-3 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="text-eyebrow mt-7">{half.footerLabel}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {half.footer.map((f) => (
                    <span
                      key={f}
                      className="border-border/70 bg-surface/50 rounded-full border px-3 py-1.5 text-xs"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={260} className="mt-10 text-center">
          <p className="text-muted-foreground inline-flex items-center gap-3 text-sm">
            <Trophy className="text-primary h-4 w-4" aria-hidden="true" />
            Winners are selected based on the overall evaluation of the PowerPoint presentation and
            prototype demonstration.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
