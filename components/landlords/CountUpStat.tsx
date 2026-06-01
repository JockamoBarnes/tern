'use client';
import { useEffect, useRef, useState } from 'react';

interface Props {
  prefix?: string;
  value: number;
  suffix?: string;
  decimals?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export default function CountUpStat({ prefix = '', value, suffix = '', decimals = 0, duration = 1600, style }: Props) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started.current) {
          started.current = true;
          const start = performance.now();
          function tick(now: number) {
            const p = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(parseFloat((eased * value).toFixed(decimals)));
            if (p < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration, decimals]);

  const formatted = decimals > 0 ? display.toFixed(decimals) : Math.round(display);

  return (
    <span ref={ref} style={style}>
      {prefix}{formatted}{suffix}
    </span>
  );
}
