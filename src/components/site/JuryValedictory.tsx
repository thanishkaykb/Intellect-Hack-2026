import { Gavel, PartyPopper } from "lucide-react";
import { JURY, VALEDICTORY } from "@/data/event";
import { Reveal } from "./Reveal";

export function JuryValedictory() {
  return (
    <section className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="glass-panel rounded-lg p-8 sm:p-10">
            <Gavel className="text-primary h-6 w-6" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">Jury Panel</h2>
            <ul className="mt-6 space-y-3">
              {JURY.map((j) => (
                <li key={j} className="text-muted-foreground flex items-center gap-3 text-sm sm:text-base">
                  <span aria-hidden="true" className="bg-primary h-1 w-4 shrink-0" />
                  {j}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="glass-panel rounded-lg p-8 sm:p-10">
            <PartyPopper className="text-primary h-6 w-6" aria-hidden="true" />
            <h2 className="mt-5 text-2xl font-semibold sm:text-3xl">Valedictory Ceremony</h2>
            <ol className="mt-6 space-y-3">
              {VALEDICTORY.map((v, i) => (
                <li key={v} className="flex items-center gap-3 text-sm sm:text-base">
                  <span className="border-primary/50 text-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[0.65rem]">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground">{v}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
