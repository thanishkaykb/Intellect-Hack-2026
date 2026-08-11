import { EVENT, FOOTER_LINKS } from "@/data/event";

export function Footer() {
  return (
    <footer className="border-border/60 relative border-t py-7">
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-5 md:grid-cols-[auto_minmax(0,1fr)] md:items-center">
          <div className="flex items-center gap-3">
            <span className="bg-primary/80 block h-5 w-[3px] shrink-0 rounded-full shadow-[0_0_20px_2px_oklch(0.56_0.2_20/70%)]" />
            <span className="font-display text-xs font-semibold tracking-[0.18em] uppercase">
              Intellect Hack<span className="text-primary"> 26</span>
            </span>
          </div>

          <nav aria-label="Footer" className="md:justify-self-end">
            <ul className="flex flex-wrap gap-x-4 gap-y-1.5 md:justify-end">
              {FOOTER_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary text-xs tracking-wide transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="text-muted-foreground border-border/50 mt-5 border-t pt-4 text-center text-[0.7rem] tracking-wide">
          © 2026 Intellect Hack · {EVENT.organizer} · Sri Sairam Engineering College, Chennai
        </p>
      </div>
    </footer>
  );
}
