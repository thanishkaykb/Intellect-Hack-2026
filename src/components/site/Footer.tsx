import { EVENT, FOOTER_LINKS, STAFF_COORDINATOR } from "@/data/event";

export function Footer() {
  return (
    <footer className="border-border/60 relative border-t pt-12 pb-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-[40rem] max-w-[90%] rounded-full bg-[radial-gradient(ellipse,oklch(0.45_0.17_18/22%),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="bg-primary/80 block h-6 w-[3px] rounded-full shadow-[0_0_20px_2px_oklch(0.56_0.2_20/70%)]" />
              <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
                Intellect Hack<span className="text-primary"> 26</span>
              </span>
            </div>
            <p className="text-muted-foreground mt-4 max-w-sm text-sm leading-relaxed">
              {EVENT.tagline} organized by {EVENT.organizer}. {EVENT.date} ·{" "}
              {EVENT.venue.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())},{" "}
              {EVENT.college.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}.
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-eyebrow">Explore</p>
            <ul className="mt-4 space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-eyebrow">Organized by</p>
            <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
              IEEE Reliability Society
              <br />
              SEC Student Branch Chapter
              <br />
              {STAFF_COORDINATOR.college}
              <br />
              {STAFF_COORDINATOR.address}
            </p>
          </div>
        </div>

        <div className="border-border/60 mt-10 border-t pt-6">
          <p className="text-muted-foreground text-center text-xs tracking-wide">
            © 2026 Intellect Hack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
