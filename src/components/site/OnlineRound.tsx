import { FileUp } from "lucide-react";
import { GOOGLE_FORM_URL, ONLINE_ROUND_POINTS, SUBMISSION_STEPS } from "@/data/event";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function OnlineRound() {
  return (
    <section id="online-round" className="relative scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="glass-panel grain-overlay relative overflow-hidden rounded-lg p-8 sm:p-12 lg:p-16">
          <div
            aria-hidden="true"
            className="absolute -top-32 -left-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,oklch(0.45_0.17_18/32%),transparent_70%)] blur-2xl"
          />
          <div className="relative grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Phase I"
                title="Online Preliminary Round"
                description="11 September 2026 — 19 September 2026"
              />
              <ul className="mt-8 space-y-4">
                {ONLINE_ROUND_POINTS.map((point, i) => (
                  <Reveal as="li" key={point} delay={i * 70} className="flex gap-3 text-sm sm:text-base">
                    <span aria-hidden="true" className="text-primary mt-1 font-mono text-xs">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-muted-foreground leading-relaxed">{point}</span>
                  </Reveal>
                ))}
              </ul>
            </div>

            <Reveal delay={140} className="border-border/70 bg-background/40 rounded-md border p-7">
              <p className="text-eyebrow">Submission requirements</p>
              <ol className="mt-5 space-y-3">
                {SUBMISSION_STEPS.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm">
                    <span className="border-primary/50 text-primary mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[0.65rem]">
                      {i + 1}
                    </span>
                    <span className="text-foreground/85 leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
              <div className="mt-8">
                <Cta href={GOOGLE_FORM_URL || undefined} size="lg" className="w-full">
                  <FileUp className="h-4 w-4" aria-hidden="true" />
                  Submit your PPT
                </Cta>
                {!GOOGLE_FORM_URL && (
                  <p className="text-muted-foreground mt-3 text-center text-xs">
                    Submission link will be published here soon.
                  </p>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
