import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS, SUBMISSION_FORM_URL } from "@/data/event";
import { cn } from "@/lib/utils";
import { Cta } from "./Cta";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-border/70 bg-background/70 border-b shadow-[0_10px_40px_-30px_black] backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-18 lg:px-8"
      >
        <a href="#home" className="group flex items-center gap-3">
          <span className="bg-primary/80 shadow-[0_0_20px_2px_oklch(0.56_0.2_20/70%)] block h-6 w-[3px] rounded-full" />
          <span className="font-display text-sm font-semibold tracking-[0.18em] uppercase">
            Intellect Hack
            <span className="text-primary"> 26</span>
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="text-muted-foreground hover:text-foreground relative text-[0.78rem] font-medium tracking-wide transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <Cta href="#register" className="hidden sm:inline-flex">
            Register Now
          </Cta>
          <Cta href={SUBMISSION_FORM_URL || undefined} variant="outline" className="hidden md:inline-flex">
            Submit PPT
          </Cta>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-border bg-surface/60 text-foreground inline-flex h-10 w-10 items-center justify-center rounded-sm border xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        hidden={!open}
        className="bg-background/95 border-border/60 border-t backdrop-blur-xl xl:hidden"
      >
        <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-border/40 text-foreground/90 hover:text-primary block border-b py-3.5 text-sm tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-5">
            <Cta href="#register" className="w-full" size="lg">
              Register Now
            </Cta>
          </li>
          <li className="pt-3">
            <Cta href={SUBMISSION_FORM_URL || undefined} variant="outline" className="w-full" size="lg">
              Submit PPT
            </Cta>
          </li>
        </ul>
      </div>
    </header>
  );
}
