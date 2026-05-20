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
      className="grad-divider"
      style={{ background: 'var(--white)', padding: '120px 0' }}
    >
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
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--teal)',
            marginBottom: 64,
            maxWidth: '46%',
            minWidth: 260,
          }}
        >
          Four easy steps to get started
        </h2>

        {/* Steps as cards */}
        <div className="reveal grid grid-cols-1 md:grid-cols-4 gap-6" style={{ transitionDelay: '160ms' }}>

          {steps.map((step) => (
            <div
              key={step.num}
              style={{
                background: step.num === '04' ? 'var(--teal)' : 'var(--white)',
                border: step.num === '04' ? '1px solid rgba(21,234,173,0.2)' : '1px solid rgba(7,59,76,0.09)',
                borderTop: '2px solid transparent',
                backgroundImage: step.num === '04'
                  ? 'linear-gradient(var(--teal), var(--teal)), linear-gradient(90deg, #15EAAD, #4DB6CE)'
                  : 'linear-gradient(white, white), linear-gradient(90deg, #15EAAD, #4DB6CE)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                borderRadius: 12,
                padding: '36px 28px',
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
                boxShadow: step.num === '04' ? '0 2px 8px rgba(7,59,76,0.1), 0 12px 32px rgba(7,59,76,0.15)' : '0 2px 8px rgba(7,59,76,0.04), 0 12px 32px rgba(7,59,76,0.06)',
              }}
            >
              <span
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 13,
                  color: 'var(--mint)',
                  background: 'rgba(21,234,173,0.12)',
                  border: '1px solid rgba(21,234,173,0.3)',
                  borderRadius: 20,
                  padding: '4px 12px',
                  alignSelf: 'flex-start',
                }}
              >
                {step.num}
              </span>

              <h3
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 600,
                  fontSize: 16,
                  color: step.num === '04' ? 'var(--near-white)' : 'var(--teal)',
                  lineHeight: 1.3,
                  margin: 0,
                }}
              >
                {step.title}
              </h3>

              <p
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontWeight: 400,
                  fontSize: 14,
                  color: step.num === '04' ? 'rgba(238,247,248,0.6)' : 'rgba(7,59,76,0.55)',
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {step.body}
              </p>
            </div>
          ))}
        </div>

        {/* Caveat + resources link */}
        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontSize: 13, color: 'rgba(7,59,76,0.45)', marginTop: 32, transitionDelay: '240ms' }}>
          <a href="/resources" style={{ color: 'rgba(7,59,76,0.55)', textDecoration: 'underline', textUnderlineOffset: 3 }}>
            Still have questions? Visit our resources →
          </a>
        </p>
      </div>
    </section>
  );
}
