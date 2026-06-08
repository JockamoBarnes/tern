'use client';

import Image from 'next/image';

const logos = [
  { name: 'Khaleej Times', src: '/img/logo-khaleejtimes.webp', w: 300, h: 100 },
  { name: 'Dubai Daily',   src: '/img/logo-dubaidaily.webp',   w: 200, h: 100 },
  { name: 'Zawya',         src: '/img/logo-zawya.webp',        w: 275, h: 100 },
];

export default function PressSection() {
  return (
    <section
      style={{
        backgroundColor: 'var(--teal)',
        borderTop: '1px solid rgba(238,247,248,0.08)',
        padding: '48px 0',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="px-6 md:px-12"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 600,
            fontSize: 10,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'rgba(238,247,248,0.35)',
            whiteSpace: 'nowrap',
            flexShrink: 0,
          }}
        >
          As seen in
        </span>

        <div style={{ display: 'flex', alignItems: 'center', gap: 56 }}>
          {logos.map(({ name, src, w, h }) => (
            <Image
              key={name}
              src={src}
              alt={name}
              width={w}
              height={h}
              style={{
                height: 32,
                width: 'auto',
                opacity: 0.45,
                filter: 'grayscale(100%) brightness(10)',
                transition: 'opacity 200ms ease',
                flexShrink: 0,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.45')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
