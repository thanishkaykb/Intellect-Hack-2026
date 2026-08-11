import { Phone, GraduationCap } from "lucide-react";
import {
  PHONE_PLACEHOLDER,
  STAFF_COORDINATOR,
  STUDENT_COORDINATORS,
} from "@/data/event";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();
}

export function Coordinators() {
  return (
    <section id="coordinators" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Organizing team"
          title="Meet the Team Behind Intellect Hack"
          align="center"
        />

        {/* Staff coordinator */}
        <Reveal delay={80} className="mx-auto mt-14 max-w-2xl">
          <div className="glass-panel rounded-lg p-8 text-center">
            <p className="text-eyebrow">Staff Coordinator</p>
            <h3 className="mt-4 text-2xl font-semibold">{STAFF_COORDINATOR.name}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
              {STAFF_COORDINATOR.designation}
              <br />
              {STAFF_COORDINATOR.college}, {STAFF_COORDINATOR.address}
            </p>
          </div>
        </Reveal>

        {/* Student coordinators */}
        <p className="text-eyebrow mt-16 text-center">Student Coordinators</p>
        <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STUDENT_COORDINATORS.map((c, i) => (
            <Reveal as="li" key={c.name} delay={i * 80}>
              <article className="group border-border/70 bg-surface/40 relative h-full overflow-hidden rounded-lg border p-7 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-primary/60 hover:shadow-[0_28px_80px_-50px_oklch(0.6_0.22_22)]">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-[radial-gradient(circle,oklch(0.5_0.18_18/26%),transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-center gap-4">
                  <div className="border-border/80 bg-background/60 relative h-16 w-16 shrink-0 overflow-hidden rounded-full border">
                    {c.photo ? (
                      <img
                        src={c.photo}
                        alt={`Portrait of ${c.name}`}
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span
                        className="font-display text-primary/80 flex h-full w-full items-center justify-center text-lg font-semibold"
                        aria-hidden="true"
                      >
                        {initials(c.name)}
                      </span>
                    )}
                  </div>
                  <div className="min-w-0">
                    <h3 className="truncate text-lg font-semibold">{c.name}</h3>
                    <p className="text-muted-foreground mt-1 flex items-center gap-1.5 text-xs tracking-wide">
                      <GraduationCap className="h-3.5 w-3.5" aria-hidden="true" />
                      {c.year} · {c.department}
                    </p>
                  </div>
                </div>

                <div className="relative mt-5 flex flex-wrap gap-2">
                  {c.roles.map((role) => (
                    <span
                      key={role}
                      className="border-border/70 bg-background/40 text-foreground/80 rounded-full border px-3 py-1 text-[0.7rem] tracking-wide"
                    >
                      {role}
                    </span>
                  ))}
                </div>

                <div className="border-border/60 relative mt-6 flex items-center gap-2 border-t pt-4">
                  <Phone className="text-primary h-4 w-4" aria-hidden="true" />
                  {c.phone && c.phone !== PHONE_PLACEHOLDER ? (
                    <a
                      href={`tel:${c.phone.replace(/\s/g, "")}`}
                      className="hover:text-primary font-mono text-sm transition-colors"
                    >
                      {c.phone}
                    </a>
                  ) : (
                    <span className="text-muted-foreground font-mono text-sm">{c.phone}</span>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

      </div>
    </section>
  );
}
