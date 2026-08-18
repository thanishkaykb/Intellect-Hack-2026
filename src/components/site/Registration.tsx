import { Award } from "lucide-react";
import { EVENT, REGISTRATION_LINKS } from "@/data/event";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const DETAILS = [
  { label: "Team Size", value: EVENT.teamSize },
  { label: "Registration Fee", value: EVENT.fee },
  { label: "Eligibility", value: EVENT.eligibility },
  { label: "Certificate", value: EVENT.certificate },
];

export function Registration() {
  return (
    <section id="register" className="relative -scroll-mt-6 py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="glass-panel grain-overlay relative overflow-hidden rounded-lg px-5 py-9 text-center sm:px-10 sm:py-12">
          <div
            aria-hidden="true"
            className="animate-pulse-glow pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[36rem] max-w-[90%] rounded-full bg-[radial-gradient(ellipse,oklch(0.55_0.2_20/32%),transparent_70%)] blur-3xl"
          />
          <div className="relative">
            <p className="text-eyebrow">Registration &amp; PPT Submission</p>
            <h2 className="mx-auto mt-4 max-w-3xl text-[clamp(1.5rem,4vw,2.4rem)] leading-[1.05] font-bold text-balance">
              Ready to build something that matters?
            </h2>

            <dl className="mx-auto mt-8 grid max-w-4xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {DETAILS.map((d) => (
                <div
                  key={d.label}
                  className="border-border/60 border-b px-4 py-4 sm:border-b-0 sm:border-r last:sm:border-r-0"
                >
                  <dt className="text-eyebrow">{d.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-balance">{d.value}</dd>
                </div>
              ))}
            </dl>

         <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
  <Cta href={REGISTRATION_LINKS.gform || undefined} size="lg" className="w-full sm:w-auto">
    Register Your Team
  </Cta>
</div>

            {!REGISTRATION_LINKS.gform && (
              <p className="text-muted-foreground mt-5 text-xs">
                The official Google Form link will be published here soon.
              </p>
            )}

            <p className="text-primary border-primary/30 bg-primary/10 mt-6 inline-flex items-center justify-center gap-2 rounded-full border px-4 py-2 text-xs font-medium tracking-wide backdrop-blur-sm">
              <Award className="h-3.5 w-3.5" aria-hidden="true" />
              {EVENT.certificate}
            </p>

            <p className="text-muted-foreground mt-6 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              Submit your PPT using the official template through the Google Form before 20 September 2026.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
