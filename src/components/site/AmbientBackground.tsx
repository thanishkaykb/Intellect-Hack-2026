/** Fixed, site-wide ambient background: grid, maroon light, grain. */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="bg-background absolute inset-0" />
      <div
        className="absolute inset-0 opacity-[0.16]"
        style={{
          backgroundImage:
            "linear-gradient(to right, oklch(0.5 0.08 18 / 35%) 1px, transparent 1px), linear-gradient(to bottom, oklch(0.5 0.08 18 / 35%) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          maskImage: "radial-gradient(ellipse at 50% 0%, black 10%, transparent 75%)",
        }}
      />
      <div className="animate-drift absolute -top-40 -left-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,oklch(0.45_0.16_18/45%),transparent_65%)] blur-3xl" />
      <div className="animate-pulse-glow absolute top-1/3 -right-52 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,oklch(0.38_0.14_12/40%),transparent_65%)] blur-3xl" />
      <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,oklch(0.32_0.12_20/35%),transparent_70%)] blur-3xl" />
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
