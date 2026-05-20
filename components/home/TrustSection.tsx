'use client';

const managers = [
  'Emaar Property Management',
  'Asteco',
  'Allsopp & Allsopp',
  'Betterhomes',
  'Espace Real Estate',
];

export default function TrustSection() {
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
          gap: 40,
          flexWrap: 'wrap',
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
          Trusted by property managers across the UAE
        </span>

        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '8px 0' }}>
          {managers.map((name, i) => (
            <span key={name} style={{ display: 'flex', alignItems: 'center' }}>
              <span
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 600,
                  fontSize: 13,
                  color: 'rgba(238,247,248,0.45)',
                  whiteSpace: 'nowrap',
                  transition: 'color 200ms ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => ((e.target as HTMLSpanElement).style.color = 'rgba(238,247,248,0.85)')}
                onMouseLeave={(e) => ((e.target as HTMLSpanElement).style.color = 'rgba(238,247,248,0.45)')}
              >
                {name}
              </span>
              {i < managers.length - 1 && (
                <span style={{ color: 'rgba(238,247,248,0.15)', fontSize: 12, margin: '0 16px' }}>·</span>
              )}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
