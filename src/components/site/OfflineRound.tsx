import { Trophy } from "lucide-react";
import { Reveal } from "./Reveal";
import { ParticleField } from "./ParticleField";

export function OfflineRound() {
  return (
    <section
      id="finale"
      className="grain-overlay relative scroll-mt-28 overflow-hidden border-y border-border/60 bg-[image:var(--gradient-wine)] py-14 sm:py-20"
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
