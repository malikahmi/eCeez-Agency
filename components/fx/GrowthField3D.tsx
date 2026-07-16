import React, { useEffect, useRef } from 'react';

/**
 * GrowthField3D — eCeez's signature interactive element.
 *
 * A perspective-projected 3D field of points forming a living "growth surface":
 * an ascending wave that ripples toward the visitor's cursor. It visualizes
 * what eCeez sells — engineered, compounding ecommerce growth — as an ambient,
 * tactile experience rather than a decoration.
 *
 * Engineering notes (this is a marketing site that preaches Core Web Vitals):
 * - Pure canvas 2D with manual 3D projection: zero dependencies, ~4KB.
 * - Renders only while on screen (IntersectionObserver) and pauses on blur.
 * - Respects prefers-reduced-motion: renders a single static frame.
 * - Pointer interaction disabled on touch devices (no wasted work).
 * - devicePixelRatio-aware, capped at 2 for perf.
 */
export const GrowthField3D: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = window.matchMedia('(pointer: coarse)').matches;

    let raf = 0;
    let running = false;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Grid dimensions of the point field (columns x rows in 3D space)
    const COLS = 70;
    const ROWS = 26;
    const SPACING = 34;          // world units between points
    const CAMERA_Y = -260;       // camera height above the field
    const CAMERA_Z = -520;       // camera distance behind the field
    const FOV = 640;             // projection focal length

    // Cursor state in world-space (x across the field, z into the depth)
    const cursor = { x: 0, z: ROWS * SPACING * 0.4, active: false };
    const smooth = { x: 0, z: cursor.z };

    let t = 0;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const project = (x: number, y: number, z: number) => {
      const pz = z - CAMERA_Z;
      const scale = FOV / (FOV + pz);
      return {
        sx: width / 2 + x * scale,
        sy: height * 0.62 + (y - CAMERA_Y) * scale - 260,
        scale,
      };
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // ease cursor
      smooth.x += (cursor.x - smooth.x) * 0.06;
      smooth.z += (cursor.z - smooth.z) * 0.06;

      const halfW = (COLS - 1) * SPACING * 0.5;

      for (let r = ROWS - 1; r >= 0; r--) {
        for (let c = 0; c < COLS; c++) {
          const x = c * SPACING - halfW;
          const z = r * SPACING;

          // Base terrain: two interfering sine waves drifting over time,
          // rising gently toward the horizon — the "growth curve".
          let y =
            Math.sin(c * 0.28 + t * 0.9) * 14 +
            Math.cos(r * 0.35 - t * 0.7) * 12 -
            r * 2.2;

          // Cursor ripple: points swell away from the pointer position
          if (!isTouch) {
            const dx = x - smooth.x;
            const dz = z - smooth.z;
            const dist = Math.sqrt(dx * dx + dz * dz);
            const influence = Math.max(0, 1 - dist / 340);
            y -= influence * influence * 74;
          }

          const p = project(x, y, z);
          if (p.sx < -20 || p.sx > width + 20 || p.sy < -20 || p.sy > height + 20) continue;

          const depth = 1 - r / ROWS; // 1 near, 0 far
          const size = Math.max(0.6, 2.6 * p.scale * (0.5 + depth * 0.5));
          const alpha = 0.06 + depth * 0.30;

          // Indigo core with occasional violet shimmer near the wave crests
          const lift = Math.max(0, -y - 10) / 90;
          const hue = 243 - lift * 18; // indigo → violet on crests
          ctx.fillStyle = `hsla(${hue}, 84%, ${58 + lift * 10}%, ${alpha + lift * 0.25})`;
          ctx.beginPath();
          ctx.arc(p.sx, p.sy, size, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      t += 0.016;
    };

    const loop = () => {
      draw();
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      if (running || reduced) return;
      running = true;
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      running = false;
      cancelAnimationFrame(raf);
    };

    const onPointer = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const nx = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
      const ny = (e.clientY - rect.top) / rect.height;       // 0..1
      cursor.x = nx * (COLS - 1) * SPACING;
      cursor.z = ny * (ROWS - 1) * SPACING;
    };

    resize();
    if (reduced) {
      draw(); // single static frame — still beautiful, zero motion
    }

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? start() : stop()),
      { threshold: 0.05 }
    );
    io.observe(canvas);

    window.addEventListener('resize', resize);
    if (!isTouch) window.addEventListener('pointermove', onPointer, { passive: true });
    const onVis = () => (document.hidden ? stop() : start());
    document.addEventListener('visibilitychange', onVis);

    return () => {
      stop();
      io.disconnect();
      window.removeEventListener('resize', resize);
      if (!isTouch) window.removeEventListener('pointermove', onPointer);
      document.removeEventListener('visibilitychange', onVis);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
};
