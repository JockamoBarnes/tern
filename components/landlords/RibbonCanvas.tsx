'use client';
import { useEffect, useRef } from 'react';

const RIBBONS = [
  { ca: 'rgba(21,234,173,0.60)', cb: 'rgba(21,234,173,0.0)', speed: 0.00055, phase: 0,            w: 200 },
  { ca: 'rgba(77,182,206,0.50)', cb: 'rgba(77,182,206,0.0)', speed: 0.00038, phase: Math.PI*0.65, w: 280 },
  { ca: 'rgba(21,234,173,0.35)', cb: 'rgba(21,234,173,0.0)', speed: 0.00072, phase: Math.PI*1.25, w: 150 },
  { ca: 'rgba(90,172,191,0.45)', cb: 'rgba(7,59,76,0.0)',    speed: 0.00032, phase: Math.PI*1.85, w: 340 },
  { ca: 'rgba(21,234,173,0.22)', cb: 'rgba(77,182,206,0.0)', speed: 0.00060, phase: Math.PI*0.95, w: 170 },
];

export default function RibbonCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let raf = 0;

    function resize() {
      if (!canvas) return;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    function draw(ts: number) {
      if (!canvas || !ctx) return;
      const cw = canvas.width;
      const ch = canvas.height;

      ctx.clearRect(0, 0, cw, ch);

      RIBBONS.forEach((r, i) => {
        const t = ts * r.speed + r.phase;
        const amp = ch * 0.20;

        // All ribbons enter from the right half of the canvas
        const sx = cw * (0.52 + i * 0.06) + Math.sin(t * 0.25) * cw * 0.08;
        const sy = -100;

        const cx1 = cw * (0.88 + Math.sin(t + 0.4 + i) * 0.10);
        const cy1 = ch * 0.28 + Math.cos(t * 1.15 + i) * amp;

        const cx2 = cw * (0.62 + Math.cos(t * 0.75 + 1 + i * 0.3) * 0.18);
        const cy2 = ch * 0.68 + Math.sin(t * 0.85 + 2 + i * 0.3) * amp;

        const ex = cw * (0.30 + i * 0.04) + Math.cos(t * 0.35 + 3) * cw * 0.10;
        const ey = ch + 100;

        const grad = ctx.createLinearGradient(sx, sy, ex, ey);
        grad.addColorStop(0, r.ca);
        grad.addColorStop(0.45, r.ca);
        grad.addColorStop(1, r.cb);

        ctx.beginPath();
        ctx.moveTo(sx, sy);
        ctx.bezierCurveTo(cx1, cy1, cx2, cy2, ex, ey);
        ctx.lineWidth = r.w;
        ctx.lineCap = 'round';
        ctx.strokeStyle = grad;
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    }

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        filter: 'blur(32px)',
        opacity: 0.85,
        zIndex: 0,
      }}
    />
  );
}
