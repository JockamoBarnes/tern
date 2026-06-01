export default function ClosingCTASection() {
  return (
    <section
      id="download"
      className="section-navy"
      style={{ padding: '120px 0', overflow: 'hidden' }}
    >
      {/* Tern wordmark watermark — barely visible, fills background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/tern-icon.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          maxWidth: 600,
          opacity: 0.07,
          pointerEvents: 'none',
          filter: 'brightness(10)',
          userSelect: 'none',
        }}
      />

      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 1 }}
      >
        {/* Closing headline */}
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--near-white)',
            marginBottom: 40,
            maxWidth: 700,
          }}
        >
          Join thousands of renters earning with Tern.
        </h2>

        {/* Primary CTA */}
        <div className="reveal" style={{ marginBottom: 24, transitionDelay: '80ms' }}>
          <a href="#" className="btn-cta">
            Download the app to get started
          </a>
        </div>

        {/* App store badges */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, transitionDelay: '160ms' }}>
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/apple-app-store-badge_en.svg" alt="Download on the App Store" style={{ height: 32, width: 'auto', display: 'block', opacity: 0.7 }} />
          </a>
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/google-play-store-badge.svg" alt="Get it on Google Play" style={{ height: 32, width: 'auto', display: 'block', opacity: 0.7 }} />
          </a>
        </div>
      </div>
    </section>
  );
}
