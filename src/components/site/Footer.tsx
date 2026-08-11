import { EVENT, FOOTER_LINKS } from "@/data/event";

export function Footer() {
  return (
    <footer className="border-border/60 relative border-t py-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-[40rem] max-w-[90%] rounded-full bg-[radial-gradient(ellipse,oklch(0.45_0.17_18/22%),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-[-0.02em]">
              INTELLECT HACK <span className="text-primary">2026</span>
            </p>
            <p className="text-muted-foreground mt-4 text-sm">{EVENT.organizer}</p>
            <p className="text-muted-foreground text-sm">Sri Sairam Engineering College, Chennai</p>
            <p className="text-muted-foreground mt-4 font-mono text-[0.7rem] tracking-[0.2em] uppercase">
              {EVENT.date} · {EVENT.venue}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="text-eyebrow">Explore</p>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3">
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
        </div>

        <div className="border-border/50 mt-12 border-t pt-6">
          <p className="text-muted-foreground text-center text-xs tracking-wide">
            © 2026 Intellect Hack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
