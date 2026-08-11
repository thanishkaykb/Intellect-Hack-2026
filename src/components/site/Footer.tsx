export function Footer() {
  return (
    <footer className="border-border/60 relative border-t py-8">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-32 mx-auto h-64 w-[40rem] max-w-[90%] rounded-full bg-[radial-gradient(ellipse,oklch(0.45_0.17_18/22%),transparent_70%)] blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="">
          <p className="text-muted-foreground text-center text-xs tracking-wide">
            © 2026 Intellect Hack. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
