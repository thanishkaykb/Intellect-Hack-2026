import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_ITEMS } from "@/data/event";
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
            <span className="text-gradient-ember">Intellect</span> Hack
            <span className="text-primary"> 2026</span>
          </span>
        </a>

       <div className="flex items-center gap-3">
  <Cta href="#register" className="hidden sm:inline-flex">
    Register Team & Submit PPT
  </Cta>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="site-nav-panel"
            aria-label={open ? "Close menu" : "Open menu"}
            className="border-border bg-surface/60 text-foreground hover:border-primary/60 inline-flex h-10 w-10 items-center justify-center rounded-sm border transition-colors"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-[2px]"
          onClick={() => setOpen(false)}
          aria-hidden
        />
      )}

      <aside
        id="site-nav-panel"
        className={cn(
          "border-border/60 bg-background/95 fixed top-0 right-0 z-50 h-dvh w-[min(84vw,20rem)] border-l shadow-[0_0_60px_-10px_black] backdrop-blur-xl transition-transform duration-300",
          open ? "translate-x-0" : "translate-x-full",
        )}
        aria-hidden={!open}
      >
        <div className="flex h-16 items-center justify-between px-5 sm:h-18">
          <span className="font-display text-muted-foreground text-[0.7rem] tracking-[0.24em] uppercase">
            Menu
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="border-border bg-surface/60 text-foreground inline-flex h-9 w-9 items-center justify-center rounded-sm border"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="flex flex-col overflow-y-auto px-5 pb-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                className="border-border/40 text-foreground/90 hover:text-primary block border-b py-3 text-sm tracking-wide"
              >
                {item.label}
              </a>
            </li>
          ))}
   <li className="pt-5">
  <Cta href="#register" className="w-full" size="lg" onClick={() => setOpen(false)}>
    Register Team & Submit PPT
  </Cta>
</li>
        </ul>
      </aside>

    </header>
  );
}
