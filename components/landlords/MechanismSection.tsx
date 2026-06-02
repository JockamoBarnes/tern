const CSS = `
.mechanism-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
.mechanism-connector { display: none; }
@media (min-width: 768px) {
  .mechanism-grid { grid-template-columns: 1fr auto 1fr; gap: 24px; align-items: stretch; }
  .mechanism-connector { display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 10px; padding: 0 8px; }
}
`;

export default function MechanismSection() {
  return (
    <section className="section-light grad-divider" style={{ padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <div className="px-6 md:px-12" style={{ maxWidth: 900, margin: '0 auto', width: '100%' }}>

        {/* The statement */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 600,
            fontSize: 'clamp(19px, 2vw, 26px)',
            lineHeight: 1.55,
            color: 'rgba(7,59,76,0.88)',
            marginBottom: 56,
            letterSpacing: '-0.01em',
            textAlign: 'center',
            maxWidth: 780,
            margin: '0 auto 56px',
          }}
        >
          Your tenants want flexibility and rewards. You want guaranteed security.{' '}
          <span style={{ color: 'rgba(7,59,76,0.45)', fontWeight: 400 }}>
            Tern gives you both — at no cost to either of you.
          </span>
        </p>

        {/* Two sides + Tern in the middle */}
        <div className="reveal mechanism-grid" style={{ transitionDelay: '100ms' }}>

          {/* Tenant side */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(7,59,76,0.09)',
            borderRadius: 14,
            padding: '28px 32px',
            boxShadow: '0 12px 48px rgba(7,59,76,0.12), 0 2px 8px rgba(7,59,76,0.06)',
          }}>
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(7,59,76,0.35)', marginBottom: 20 }}>
              For your tenants
            </div>
            {[
              { headline: 'Pay by credit card', sub: 'Any UAE-issued card, no bank transfer hassle' },
              { headline: 'Earn rewards', sub: 'Points on every rent payment, every month' },
              { headline: 'Split when needed', sub: 'Request installment flexibility' },
            ].map((item) => (
              <div key={item.headline} style={{ marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'rgba(7,59,76,0.9)', marginBottom: 3 }}>
                  {item.headline}
                </div>
                <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 13, color: 'rgba(7,59,76,0.42)', lineHeight: 1.4 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          {/* Tern centre mark — hidden on mobile, shown as column connector on tablet+ */}
          <div className="mechanism-connector">
            <div style={{
              width: 52,
              height: 52,
              borderRadius: '50%',
              background: 'var(--mint)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 0 28px rgba(21,234,173,0.35)',
              flexShrink: 0,
            }}>
              <svg viewBox="0 0 601.83 422" width="28" height="20" fill="none">
                <path
                  d="M471.35,186.02c1.76-5.36,3.79-31.37,2.24-71.86l128.24-84.57-157.61,14.27C421.77,17.56,388.61.64,351.54.02c-69.74-1.18-126.81,57.74-126.81,127.49v26.08c-98.96,24.18-177.05,102.16-201.36,201.07H0v67.35h199.66c138.27,0,252.95-102.8,271.69-235.98ZM278.22,213.43h13.86v-88.77c0-33.43,28.77-60.27,62.85-57.06,29.7,2.79,51.8,28.91,51.8,58.74v21.26h-.02c0,114.17-92.88,207.05-207.05,207.05h-106.24c26.3-78.66,98.6-136.43,184.8-141.22Z"
                  fill="#073B4C"
                />
              </svg>
            </div>
            <div style={{ width: 1, height: 20, background: 'rgba(21,234,173,0.3)' }} />
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: 'rgba(7,59,76,0.3)', textAlign: 'center' as const, lineHeight: 1.3 }}>
              Zero<br />fees
            </div>
            <div style={{ width: 1, height: 20, background: 'rgba(21,234,173,0.3)' }} />
          </div>

          {/* Landlord side */}
          <div style={{
            background: '#FFFFFF',
            border: '1px solid rgba(7,59,76,0.09)',
            borderRadius: 14,
            padding: '28px 32px',
            boxShadow: '0 12px 48px rgba(7,59,76,0.12), 0 2px 8px rgba(7,59,76,0.06)',
          }}>
            <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(7,59,76,0.35)', marginBottom: 20 }}>
              For you
            </div>
            {[
              { headline: '100% on the due date', sub: 'Straight to your bank account, always in full' },
              { headline: 'No admin overhead', sub: 'Automated collection, reconciliation, and SOA' },
              { headline: 'Earn on flexibility', sub: '3% upfront when a tenant requests a split' },
            ].map((item) => (
              <div key={item.headline} style={{ marginBottom: 18 }}>
                <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 15, color: 'rgba(7,59,76,0.9)', marginBottom: 3 }}>
                  {item.headline}
                </div>
                <div style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 13, color: 'rgba(7,59,76,0.42)', lineHeight: 1.4 }}>
                  {item.sub}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
