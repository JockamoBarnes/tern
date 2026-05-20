export default function ProvocationSection() {
  return (
    <section className="grad-divider" style={{ background: 'var(--grad-light)', padding: '120px 0', position: 'relative', overflow: 'hidden' }}>
      <div aria-hidden="true" style={{ position: 'absolute', top: '-60px', right: '-80px', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
      <div aria-hidden="true" style={{ position: 'absolute', bottom: '-40px', left: '5%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.06) 0%, transparent 70%)', filter: 'blur(50px)', pointerEvents: 'none' }} />
      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
      >
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 42px)',
            lineHeight: 1.2,
            letterSpacing: '-0.02em',
            color: 'var(--teal)',
            maxWidth: 820,
          }}
        >
          You don&rsquo;t pay for your groceries with a cheque.{' '}
          <span style={{ color: 'rgba(7,59,76,0.35)' }}>
            Why are you still paying rent that way?
          </span>
        </p>
      </div>
    </section>
  );
}
