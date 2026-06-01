'use client';
import { useEffect, useRef } from 'react';

interface Particle {
  angle: number;
  speed: number;
  progress: number;
  length: number;
  opacity: number;
  color: string;
  delay: number;
}

const COLORS = [
  'rgba(21,234,173,',
  'rgba(77,182,206,',
  'rgba(90,172,191,',
  'rgba(21,234,173,',
];

function makeParticles(count: number): Particle[] {
  return Array.from({ length: count }, (_, i) => ({
    angle: (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3,
    speed: 0.0004 + Math.random() * 0.0004,
    progress: Math.random(),
    length: 0.25 + Math.random() * 0.35,
    opacity: 0.4 + Math.random() * 0.5,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    delay: Math.random() * Math.PI * 2,
  }));
}

const PARTICLES = makeParticles(72);

export default function PaymentBurst() {
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
      const cx = cw / 2;
      const cy = ch / 2;
      const maxR = Math.min(cw, ch) * 0.46;

      ctx.clearRect(0, 0, cw, ch);

      PARTICLES.forEach((p) => {
        // Progress cycles 0→1 continuously, offset by delay
        const prog = ((ts * p.speed + p.delay) % 1);

        const r0 = maxR * prog;
        const r1 = maxR * Math.min(prog + p.length * 0.4, 1);

        const x0 = cx + Math.cos(p.angle) * r0;
        const y0 = cy + Math.sin(p.angle) * r0;
        const x1 = cx + Math.cos(p.angle) * r1;
        const y1 = cy + Math.sin(p.angle) * r1;

        // Fade in at start, fade out near end
        const fade = prog < 0.15
          ? prog / 0.15
          : prog > 0.75
          ? 1 - (prog - 0.75) / 0.25
          : 1;

        const grad = ctx.createLinearGradient(x0, y0, x1, y1);
        grad.addColorStop(0, `${p.color}0)`);
        grad.addColorStop(0.5, `${p.color}${(p.opacity * fade).toFixed(2)})`);
        grad.addColorStop(1, `${p.color}${(p.opacity * fade * 0.6).toFixed(2)})`);

        ctx.beginPath();
        ctx.moveTo(x0, y0);
        ctx.lineTo(x1, y1);
        ctx.lineWidth = 1.5;
        ctx.strokeStyle = grad;
        ctx.stroke();

        // Dot at the head
        if (prog < 0.9) {
          ctx.beginPath();
          ctx.arc(x1, y1, 2, 0, Math.PI * 2);
          ctx.fillStyle = `${p.color}${(p.opacity * fade).toFixed(2)})`;
          ctx.fill();
        }
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
      }}
    />
  );
}
