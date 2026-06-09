const MOTION_CSS = `
/* Card lift — matches site standard (150–200ms) */
.step-card {
  transition: transform 180ms ease, box-shadow 180ms ease, border 180ms ease, background-image 180ms ease;
}
.step-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 16px rgba(7,59,76,0.07), 0 1px 4px rgba(7,59,76,0.04);
}

/* Any hovered card gets the payoff (gradient) border */
.step-card:hover {
  border: 2px solid transparent !important;
  background-image: linear-gradient(#fff, #fff), linear-gradient(135deg, #15EAAD, #4DB6CE) !important;
  background-origin: border-box !important;
  background-clip: padding-box, border-box !important;
}

/* Ghost number */
.ghost-num {
  transition: opacity 150ms ease, transform 150ms ease;
}
.step-card:hover .ghost-num {
  opacity: 0.18 !important;
  transform: translateY(-4px);
}

/* ── Mobile: row layout (text left, screenshot right) ── */
@media (max-width: 767px) {
  .step-card {
    flex-direction: row !important;
    align-items: stretch;
    padding-right: 0 !important;
    min-height: 180px !important;
  }
  .step-text {
    padding-bottom: 20px;
  }
  .step-img-wrapper {
    width: 42% !important;
    flex-shrink: 0;
    margin-top: 0 !important;
    margin-left: 16px !important;
    margin-right: 0 !important;
  }
  .step-img {
    width: 100% !important;
  }
}

/* Screenshot: dim/brighten — matches site standard */
.step-img {
  transition: opacity 200ms ease, filter 200ms ease;
  filter: drop-shadow(0 8px 28px rgba(7,59,76,0.18)) drop-shadow(0 2px 8px rgba(7,59,76,0.10));
}
/* When any card in the grid is hovered, dim all screenshots (keep shadow) */
.step-grid:has(.step-card:hover) .step-img {
  opacity: 0.35;
  filter: saturate(0.4) brightness(0.8) drop-shadow(0 8px 28px rgba(7,59,76,0.18)) drop-shadow(0 2px 8px rgba(7,59,76,0.10));
}
/* Restore the screenshot on the card that is actually hovered (keep shadow) */
.step-grid .step-card:hover .step-img {
  opacity: 1 !important;
  filter: drop-shadow(0 8px 28px rgba(7,59,76,0.18)) drop-shadow(0 2px 8px rgba(7,59,76,0.10)) !important;
}
`;

const steps = [
  {
    num: '01',
    title: 'Link your lease',
    body: 'Upload your tenancy agreement. Verify your tenancy in two minutes.',
    img: '/img/tenant-getstarted-01-ejari.png',
  },
  {
    num: '02',
    title: 'Add your card',
    body: 'Any UAE credit card. Your bank, your rewards programme.',
    img: '/img/tenant-getstarted-02-addcard.png',
  },
  {
    num: '03',
    title: 'We pay your landlord',
    body: 'Exact amount, exact date, direct to their IBAN.',
    img: '/img/tenant-getstarted-03-tenancy.png',
  },
  {
    num: '04',
    title: 'You keep the rewards',
    body: 'Points, miles, or cashback from your credit card, with no fee.',
    img: '/img/tenant-getstarted-04-reward.png',
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
        <div className="step-grid reveal grid grid-cols-1 md:grid-cols-4 gap-6" style={{ transitionDelay: '160ms' }}>

          {steps.map((step) => (
            <div
              key={step.num}
              className="step-card card-light"
              style={{
                padding: '36px 28px 0',
                display: 'flex',
                flexDirection: 'column',
                minHeight: 420,
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

              {/* Text content */}
              <div className="step-text" style={{ display: 'flex', flexDirection: 'column', gap: 20, position: 'relative', zIndex: 1, flex: 1 }}>
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
                    textWrap: 'balance' as React.CSSProperties['textWrap'],
                  }}
                >
                  {step.body}
                </p>
              </div>

              {/* Phone screenshot — 75% of card width, centred, sits at card bottom */}
              {/* Negative margins cancel the card's 28px side padding so width% is of the full card */}
              <div className="step-img-wrapper" style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-end', marginTop: 24, marginLeft: -28, marginRight: -28, position: 'relative', zIndex: 1 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={step.img}
                  alt=""
                  aria-hidden="true"
                  className="step-img"
                  style={{
                    width: '75%',
                    display: 'block',

                  }}
                />
              </div>
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
