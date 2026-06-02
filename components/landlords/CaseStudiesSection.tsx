const cases = [
  {
    label: 'Small landlord',
    logo: { src: '/img/logo-maharesidences-black.svg', alt: 'Maha Residences', w: 120, filter: 'opacity(0.65)' },
    company: 'Maha Residences',
    subtitle: '25 units · owner-managed',
    stat: '90%',
    statLabel: 'tenant adoption',
    copy: 'No admin team. No technical setup. One conversation with tenants at renewal — Tern handled everything after that.',
  },
  {
    label: 'Large landlord',
    logo: { src: '/img/logo-alsayyah-black.svg', alt: 'AlSayyah Group', w: 120, filter: 'opacity(0.65)' },
    company: 'AlSayyah Group',
    subtitle: '2,000+ units · Dubai',
    stat: '~30%',
    statLabel: 'fewer delays and delinquencies',
    copy: 'Less time chasing payments. More predictable cash flow. AED 180k+ in additional revenue — without changing how they collected rent.',
  },
  {
    label: 'Property manager',
    logo: { src: '/img/logo-daytona-white.svg', alt: 'Daytona', w: 100, filter: 'brightness(0) opacity(0.6)' },
    company: 'Daytona',
    subtitle: '2,000+ managed units',
    stat: '2%+',
    statLabel: 'extra rental yield in 2 months',
    copy: 'A tangible result to put in front of every landlord client. Better yield, fewer delays, happier tenants — a stronger proposition at every renewal.',
  },
];

export default function CaseStudiesSection() {
  return (
    <section className="section-light" style={{ padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <div className="reveal" style={{ marginBottom: 48 }}>
          <h2 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--teal)', margin: '0 0 14px' }}>
            Here&rsquo;s why landlords love us
          </h2>
          <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 16, color: 'rgba(7,59,76,0.5)', margin: 0, maxWidth: 420, lineHeight: 1.65 }}>
            From owner-operators with a few units to portfolios of thousands, Tern works across every portfolio type.
          </p>
        </div>

        {/* Cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-3 gap-4" style={{ transitionDelay: '100ms' }}>
          {cases.map((c) => (
            <div
              key={c.company}
              style={{
                background: '#FFFFFF',
                border: '1px solid rgba(7,59,76,0.08)',
                borderRadius: 16,
                padding: '28px 28px',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
              }}
            >
              {/* Label + subtitle row */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, gap: 8 }}>
                <span style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  color: 'var(--teal)',
                  background: 'rgba(21,234,173,0.12)',
                  border: '1px solid rgba(21,234,173,0.28)',
                  borderRadius: 20,
                  padding: '4px 12px',
                  whiteSpace: 'nowrap' as const,
                }}>
                  {c.label}
                </span>
                <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 12, color: 'rgba(7,59,76,0.35)', textAlign: 'right' as const }}>
                  {c.subtitle}
                </span>
              </div>

              {/* Logo + company name */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={c.logo.src}
                  alt={c.logo.alt}
                  style={{ height: 22, width: 'auto', maxWidth: c.logo.w, objectFit: 'contain', filter: c.logo.filter, flexShrink: 0 }}
                />
                <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 14, color: 'rgba(7,59,76,0.7)' }}>
                  {c.company}
                </span>
              </div>

              {/* Hairline */}
              <div style={{ height: 1, background: 'linear-gradient(to right, rgba(21,234,173,0.2), transparent)', marginBottom: 20 }} />

              {/* Stat */}
              <span style={{
                fontFamily: 'var(--font-unbounded)',
                fontWeight: 700,
                fontSize: 'clamp(44px, 4.6vw, 60px)',
                lineHeight: 1,
                letterSpacing: '-0.035em',
                background: 'linear-gradient(120deg, #15EAAD 20%, #4DB6CE 80%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {c.stat}
              </span>

              <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 13, color: 'var(--teal)', margin: '8px 0 16px' }}>
                {c.statLabel}
              </div>

              {/* Copy */}
              <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 14, lineHeight: 1.7, color: 'rgba(7,59,76,0.55)', margin: 0, flex: 1 }}>
                {c.copy}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
