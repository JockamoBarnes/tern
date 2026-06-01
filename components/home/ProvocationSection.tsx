export default function ProvocationSection() {
  return (
    <section
      className="section-light grad-divider"
      style={{ padding: '140px 0', overflow: 'hidden' }}
    >
      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 900, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 52px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--teal)',
            margin: 0,
          }}
        >
          It&rsquo;s simple.{' '}
          <span style={{ color: 'var(--mint)' }}>Pay your rent with your credit card.</span>
          {' '}Earn rewards.{' '}
          <span style={{ color: 'var(--mint)' }}>With no fees.</span>
          {' '}
          <span style={{
            fontStyle: 'italic',
            color: 'rgba(7,59,76,0.35)',
            fontSize: '0.85em',
          }}>Seriously.</span>
        </p>
      </div>
    </section>
  );
}
