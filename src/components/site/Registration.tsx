import { EVENT, REGISTRATION_LINKS } from "@/data/event";
import { Cta } from "./Cta";
import { Reveal } from "./Reveal";

const DETAILS = [
  { label: "Team Size", value: EVENT.teamSize },
  { label: "Registration Fee", value: EVENT.fee },
  { label: "Eligibility", value: EVENT.eligibility },
  { label: "Event", value: "Inter-College Competition" },
];

export function Registration() {
  return (
    <section id="register" className="relative py-10 sm:py-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="glass-panel grain-overlay relative overflow-hidden rounded-lg px-7 py-12 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="animate-pulse-glow pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[36rem] max-w-[90%] rounded-full bg-[radial-gradient(ellipse,oklch(0.55_0.2_20/32%),transparent_70%)] blur-3xl"
          />
          <div className="relative">
            <p className="text-eyebrow">Registration &amp; PPT Submission</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.7rem,4.4vw,2.9rem)] leading-[1.05] font-bold text-balance">
              Ready to build something that matters?
            </h2>

            <dl className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
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

            <div className="mt-10 flex justify-center">
              <Cta href={REGISTRATION_LINKS.gform || undefined} size="lg" className="w-full sm:w-auto">
                Register on G Form
              </Cta>
            </div>

            {!REGISTRATION_LINKS.gform && (
              <p className="text-muted-foreground mt-5 text-xs">
                The official Google Form link will be published here soon.
              </p>
            )}

            <p className="text-muted-foreground mt-8 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              Online preliminary round submission begins on 11 September 2026.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
