const CSS = `
@keyframes glow-breathe {
  0%, 100% { opacity: 0.5; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.1); }
}
.split-glow { animation: glow-breathe 5s ease-in-out infinite; }
`;

export default function TernSplitSection() {
  return (
    <section style={{ background: 'transparent', padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />

      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Tern Split — two-column layout */}
        <div
          className="reveal grid grid-cols-1 md:grid-cols-2"
          style={{
            background: 'rgba(255,255,255,0.0)',
            borderTop: '1px solid rgba(7,59,76,0.12)',
            paddingTop: 56,
            gap: 72,
            transitionDelay: '120ms',
          }}
        >
          {/* Left: copy */}
          <div>
            <span style={{ display: 'inline-block', fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'var(--teal)', background: 'rgba(21,234,173,0.18)', border: '1px solid rgba(21,234,173,0.4)', borderRadius: 6, padding: '5px 14px', marginBottom: 32 }}>
              Tern Split
            </span>
            <h3 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(26px, 3vw, 40px)', lineHeight: 1.15, color: 'var(--teal)', marginBottom: 20 }}>
              Earn income when tenants need flexibility
            </h3>
            <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 16, lineHeight: 1.7, color: 'rgba(7,59,76,0.6)', marginBottom: 24 }}>
              When a tenant requests to split their next instalment into monthly payments, you earn 3% upfront. The tenant pays the fee — your yield goes up, not down.
            </p>
            <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 14, lineHeight: 1.6, color: 'rgba(7,59,76,0.4)', margin: 0 }}>
              You choose whether to offer it. Tenants can&rsquo;t request a split without your approval.
            </p>
          </div>

          {/* Right: fee breakdown — clean ledger style */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {[
              { value: '4%', label: 'total fee paid by tenant', highlight: false },
              { value: '3%', label: 'earned by you, upfront', highlight: true },
              { value: '1%', label: 'Tern facilitation fee', highlight: false },
            ].map((m, i) => (
              <div
                key={m.label}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  padding: m.highlight ? '20px 16px' : '20px 0',
                  borderBottom: i < 2 ? '1px solid rgba(7,59,76,0.08)' : 'none',
                  background: m.highlight ? 'rgba(21,234,173,0.06)' : 'transparent',
                  margin: m.highlight ? '0 -16px' : '0',
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: m.highlight ? 600 : 400,
                  fontSize: 15,
                  color: m.highlight ? 'var(--teal)' : 'rgba(7,59,76,0.5)',
                }}>
                  {m.label}
                </span>
                <span style={{
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 3.5vw, 46px)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                  background: m.highlight ? 'linear-gradient(120deg, #15EAAD 20%, #4DB6CE 80%)' : undefined,
                  color: m.highlight ? undefined : 'rgba(7,59,76,0.3)',
                  WebkitBackgroundClip: m.highlight ? 'text' : undefined,
                  WebkitTextFillColor: m.highlight ? 'transparent' : undefined,
                  backgroundClip: m.highlight ? 'text' : undefined,
                }}>
                  {m.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
