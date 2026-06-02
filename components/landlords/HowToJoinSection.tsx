const steps = [
  { num: '01', title: 'Book a 30-minute demo', body: 'Walkthrough of the portal and the rewards programme.' },
  { num: '02', title: 'We prepare your materials', body: 'Customised marketing materials for your buildings — production and distribution on us.' },
  { num: '03', title: 'Tenants get access', body: 'Give us approval to distribute across your buildings and digital channels.' },
  { num: '04', title: 'Monitor and earn', body: 'Track payments, manage requests, activate Tern Split.' },
];

export default function HowToJoinSection() {
  return (
    <section style={{ background: 'transparent', position: 'relative', padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Header */}
        <div className="reveal grid grid-cols-1 md:grid-cols-2 items-end" style={{ marginBottom: 40 }}>
          <h2 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--teal)', margin: 0 }}>
            How to get started
          </h2>
          <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 15, color: 'rgba(7,59,76,0.5)', margin: 0, textAlign: 'left' as const }} className="md:text-right">
            Up and running in 1–2 days. Most of the work is on us.
          </p>
        </div>

        {/* Step cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-4" style={{ transitionDelay: '120ms' }}>
          {steps.map((step, i) => (
            <div
              key={step.num}
              style={{
                background: i === 0 ? 'linear-gradient(140deg, #051E2A 0%, #083548 50%, #0C4A62 100%)' : 'rgba(255,255,255,0.75)',
                backdropFilter: i === 0 ? undefined : 'blur(20px)',
                WebkitBackdropFilter: i === 0 ? undefined : 'blur(20px)',
                border: i === 0 ? 'none' : '1px solid rgba(7,59,76,0.08)',
                borderRadius: 20,
                padding: '28px 24px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Mint glow on first card */}
              {i === 0 && (
                <div style={{ position: 'absolute', bottom: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.2) 0%, transparent 70%)', filter: 'blur(30px)', pointerEvents: 'none' }} />
              )}

              {/* Step number */}
              <div style={{
                width: 36,
                height: 36,
                borderRadius: '50%',
                background: i === 0 ? 'rgba(21,234,173,0.15)' : 'rgba(21,234,173,0.12)',
                border: `1px solid ${i === 0 ? 'rgba(21,234,173,0.4)' : 'rgba(21,234,173,0.3)'}`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: 20,
                position: 'relative',
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 12,
                  color: i === 0 ? '#15EAAD' : 'var(--teal)',
                }}>
                  {step.num}
                </span>
              </div>

              {/* Hairline */}
              <div style={{ height: 1, background: 'linear-gradient(to right, rgba(21,234,173,0.25), transparent)', marginBottom: 16, position: 'relative', zIndex: 1 }} />

              <h3 style={{
                fontFamily: 'var(--font-manrope)',
                fontWeight: 700,
                fontSize: 15,
                color: i === 0 ? 'rgba(255,255,255,0.9)' : 'var(--teal)',
                lineHeight: 1.35,
                margin: '0 0 10px',
                position: 'relative',
                zIndex: 1,
              }}>
                {step.title}
              </h3>
              <p style={{
                fontFamily: 'var(--font-manrope)',
                fontWeight: 400,
                fontSize: 13,
                color: i === 0 ? 'rgba(255,255,255,0.45)' : 'rgba(7,59,76,0.5)',
                lineHeight: 1.65,
                margin: 0,
                position: 'relative',
                zIndex: 1,
                textWrap: 'balance' as React.CSSProperties['textWrap'],
              }}>
                {step.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
