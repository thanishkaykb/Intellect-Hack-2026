import { Award, Medal, Trophy } from "lucide-react";
import { PRIZES } from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const ICONS = [Trophy, Medal, Award];

export function Prizes() {
  return (
    <section id="prizes" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Rewards"
          title="Prizes & Recognition"
          description="Outstanding teams will be recognized for their innovation, engineering and presentation."
          align="center"
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3 lg:items-end">
          {PRIZES.map((prize, i) => {
            const Icon = ICONS[i] ?? Award;
            const isWinner = prize.rank === 1;
            return (
              <Reveal key={prize.place} delay={i * 110}>
                <article
                  className={
                    isWinner
                      ? "grain-overlay relative overflow-hidden rounded-lg border border-primary/60 bg-[image:var(--gradient-wine)] p-9 text-center shadow-[0_40px_100px_-50px_oklch(0.6_0.22_22)] lg:-mt-8 lg:p-11"
                      : "border-border/70 bg-surface/40 relative h-full overflow-hidden rounded-lg border p-9 text-center backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/50"
                  }
                >
                  {isWinner && (
                    <div
                      aria-hidden="true"
                      className="animate-pulse-glow pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,oklch(0.66_0.2_26/35%),transparent_70%)] blur-2xl"
                    />
                  )}
                  <div className="relative">
                    <Icon
                      className={isWinner ? "mx-auto h-9 w-9 text-ember" : "text-primary mx-auto h-7 w-7"}
                      aria-hidden="true"
                    />
                    <p className="text-eyebrow mt-6">{prize.place}</p>
                    <p
                      className={
                        isWinner
                          ? "font-display text-gradient-ember mt-4 text-5xl font-bold sm:text-6xl"
                          : "font-display mt-4 text-4xl font-bold sm:text-5xl"
                      }
                    >
                      {prize.amount}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={120} className="mt-10 text-center">
          <p className="text-muted-foreground text-sm tracking-wide">
            Certificates will be provided.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
