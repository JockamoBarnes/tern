const MOTION_CSS = `
.step-card {
  transition: transform 240ms cubic-bezier(0.22, 1, 0.36, 1), box-shadow 240ms ease;
}
.step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(7,59,76,0.07), 0 1px 4px rgba(7,59,76,0.04);
}
.ghost-num {
  transition: opacity 240ms ease, transform 240ms ease;
}
.step-card:hover .ghost-num {
  opacity: 0.18 !important;
  transform: translateY(-4px);
}
`;

const steps = [
  {
    num: '01',
    title: 'Link your lease',
    body: 'Upload your Ejari. Verify your tenancy in two minutes.',
  },
  {
    num: '02',
    title: 'Add your card',
    body: 'Any UAE credit card. Your bank, your rewards programme.',
  },
  {
    num: '03',
    title: 'We pay your landlord',
    body: 'Exact amount, exact date, direct to their IBAN.',
  },
  {
    num: '04',
    title: 'You keep the rewards',
    body: 'Points, miles, or cashback from your credit card plus 2% Tern points on every payment, with no fee.',
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-light grad-divider"
      style={{ overflow: 'hidden', padding: 'clamp(72px, 12.5vw, 120px) 0' }}
    >
      <style dangerouslySetInnerHTML={{ __html: MOTION_CSS }} />
      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}
      >
        {/* Headline */}
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--teal)',
            marginBottom: 64,
            maxWidth: 580,
            textWrap: 'balance' as React.CSSProperties['textWrap'],
          }}
        >
          Four easy steps to get started
        </h2>

        {/* Steps as cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-6" style={{ transitionDelay: '160ms' }}>

          {steps.map((step) => (
            <div
              key={step.num}
              className={`step-card ${step.num === '04' ? 'card-payoff' : 'card-light'}`}
              style={{
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Ghost step number — decorative, behind content */}
              <span
                aria-hidden="true"
                className="ghost-num"
                style={{
                  position: 'absolute',
                  bottom: -8,
                  right: 8,
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 100,
                  lineHeight: 1,
                  color: 'rgba(21,234,173,0.06)',
                  pointerEvents: 'none',
                  userSelect: 'none',
                  zIndex: 0,
                }}
              >
                {step.num}
              </span>

              {/* Step badge — Manrope (not Unbounded) */}
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 600,
                  fontSize: 12,
                  color: 'var(--mint)',
                  background: 'rgba(21,234,173,0.12)',
                  border: '1px solid rgba(21,234,173,0.3)',
                  borderRadius: 6,
                  padding: '4px 12px',
                  alignSelf: 'flex-start',
                  letterSpacing: '0.04em',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                {step.num}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 600,
                  fontSize: 17,
                  color: 'var(--teal)',
                  lineHeight: 1.3,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                  textWrap: 'balance' as React.CSSProperties['textWrap'],
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 400,
                  fontSize: 14,
                  color: 'rgba(7,59,76,0.55)',
                  lineHeight: 1.6,
                  margin: 0,
                  position: 'relative',
                  zIndex: 1,
                  textWrap: 'balance' as React.CSSProperties['textWrap'],
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Resources link */}
        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontSize: 13, color: 'rgba(7,59,76,0.45)', marginTop: 32, transitionDelay: '240ms' }}>
          <a href="/resources" style={{ color: 'rgba(7,59,76,0.55)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Still have questions? Visit our resources →
          </a>
        </p>
      </div>
    </section>
  );
}
