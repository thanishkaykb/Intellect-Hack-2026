import { useEffect, useRef } from "react";

/**
 * Subtle particle-network canvas. Pauses when off-screen and
 * respects prefers-reduced-motion (renders a static field).
 */
export function ParticleField({ density = 0.00008 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let width = 0;
    let height = 0;
    let raf = 0;
    let running = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    type P = { x: number; y: number; vx: number; vy: number };
    let points: P[] = [];

    const seed = () => {
      const count = Math.min(90, Math.max(24, Math.floor(width * height * density)));
      points = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
      }));
    };

    const resize = () => {
      const parent = canvas.parentElement;
      width = parent?.clientWidth ?? window.innerWidth;
      height = parent?.clientHeight ?? window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (const p of points) {
        if (!reduced) {
          p.x += p.vx;
          p.y += p.vy;
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.1, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(228, 132, 128, 0.45)";
        ctx.fill();
      }
      for (let i = 0; i < points.length; i++) {
        const a = points[i]!;
        for (let j = i + 1; j < points.length; j++) {
          const b = points[j]!;
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(190, 60, 60, ${(1 - dist / 130) * 0.22})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      if (running && !reduced) raf = requestAnimationFrame(draw);
    };

    resize();
    draw();

    const onResize = () => {
      resize();
      if (reduced) draw();
    };
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver((entries) => {
      const visible = entries[0]?.isIntersecting ?? true;
      if (visible && !running && !reduced) {
        running = true;
        draw();
      } else if (!visible) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, [density]);

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0" />;
}
