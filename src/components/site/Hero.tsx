import { ArrowDown, CalendarDays, MapPin, Award } from "lucide-react";
import { EVENT } from "@/data/event";
import { Cta } from "./Cta";
import { ParticleField } from "./ParticleField";

export function Hero() {
  return (
    <section
      id="home"
      className="grain-overlay relative flex min-h-[88svh] items-center overflow-hidden pt-20 pb-12"
    >
      <ParticleField />
      <div
        aria-hidden="true"
        className="animate-pulse-glow absolute top-1/2 left-1/2 h-[34rem] w-[60rem] max-w-[95vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,oklch(0.45_0.17_18/38%),transparent_70%)] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <img
            src="/partner-logos.png"
            alt="Sri Sairam Engineering College, IEEE Reliability Society and IEEE Madras Section logos"
            className="mx-auto mb-4 h-8 w-auto object-contain sm:h-10"
            width={640}
            height={80}
            loading="eager"
            decoding="async"
          />
          <div className="border-border/80 bg-surface/50 text-eyebrow inline-flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm">
            <span className="bg-primary h-1.5 w-1.5 animate-pulse rounded-full" />
            {EVENT.organizer}
          </div>


          <h1 className="mt-5 text-[clamp(2.1rem,7.5vw,4.8rem)] leading-[0.92] font-bold tracking-[-0.03em]">
            <span className="text-gradient-ember block">INTELLECT</span>
            <span className="block">
              HACK <span className="text-primary">2026</span>
            </span>
          </h1>

          <p className="text-foreground/80 mt-5 font-mono text-[0.72rem] tracking-[0.32em] uppercase sm:text-sm">
            {EVENT.tagline}
          </p>
          <p className="text-muted-foreground mt-3 text-base sm:text-lg">
            Innovate. <span className="text-primary">Build.</span> Demonstrate.
          </p>

          <dl className="text-muted-foreground mt-8 flex flex-col items-center gap-2.5 text-[0.62rem] tracking-[0.1em] uppercase sm:text-[0.8rem] sm:tracking-[0.18em]">
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <CalendarDays className="text-primary h-4 w-4 shrink-0" aria-hidden="true" />
              <dt className="sr-only">Date</dt>
              <dd>{EVENT.date}</dd>
            </div>
            <div className="flex items-center justify-center gap-2 whitespace-nowrap">
              <MapPin className="text-primary h-4 w-4 shrink-0" aria-hidden="true" />
              <dt className="sr-only">Venue</dt>
              <dd>{EVENT.college}</dd>
            </div>
          </dl>

         <div className="mt-7 flex items-center justify-center">
  <Cta href="#register" size="lg" className="w-full sm:w-auto">
    Register Team & Submit PPT
  </Cta>
</div>

          <div className="border-primary/30 bg-primary/10 text-primary inline-flex mt-7 items-center gap-2 rounded-full border px-4 py-2 text-[0.72rem] font-medium tracking-[0.18em] uppercase backdrop-blur-sm">
            <Award className="h-3.5 w-3.5" aria-hidden="true" />
            {EVENT.certificate}
          </div>
        </div>

        <a
          href="#about"
          aria-label="Scroll to about section"
          className="text-muted-foreground hover:text-primary mx-auto mt-10 hidden w-fit items-center gap-2 font-mono text-[0.65rem] tracking-[0.3em] uppercase transition-colors lg:flex"
        >
          Scroll <ArrowDown className="h-3.5 w-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
