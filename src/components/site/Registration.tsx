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
    <section id="register" className="relative scroll-mt-24 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <Reveal className="glass-panel grain-overlay relative overflow-hidden rounded-lg px-7 py-14 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="animate-pulse-glow pointer-events-none absolute inset-x-0 -top-24 mx-auto h-72 w-[36rem] max-w-[90%] rounded-full bg-[radial-gradient(ellipse,oklch(0.55_0.2_20/32%),transparent_70%)] blur-3xl"
          />
          <div className="relative">
            <p className="text-eyebrow">Registration</p>
            <h2 className="mx-auto mt-5 max-w-3xl text-[clamp(1.9rem,5vw,3.4rem)] leading-[1.05] font-bold text-balance">
              Ready to build something that matters?
            </h2>

            <dl className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4">
              {DETAILS.map((d) => (
                <div key={d.label} className="border-border/60 border-b px-4 py-5 sm:border-b-0 sm:border-r last:sm:border-r-0">
                  <dt className="text-eyebrow">{d.label}</dt>
                  <dd className="mt-2 text-sm font-medium text-balance">{d.value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Cta href={REGISTRATION_LINKS.unstop || undefined} size="lg" className="w-full sm:w-auto">
                Register on Unstop
              </Cta>
              <Cta
                href={REGISTRATION_LINKS.devfolio || undefined}
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Register on Devfolio
              </Cta>
            </div>

            {!REGISTRATION_LINKS.unstop && !REGISTRATION_LINKS.devfolio && (
              <p className="text-muted-foreground mt-5 text-xs">
                Official registration links will be published here soon.
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
