export default function ClosingCTASection() {
  return (
    <section
      id="download"
      style={{
        backgroundColor: 'var(--mint)',
        padding: '120px 0',
        borderTop: '1px solid rgba(21,234,173,0.4)',
      }}
    >
      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
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
            color: 'var(--teal)',
            marginBottom: 40,
            maxWidth: 700,
          }}
        >
          Join thousands of renters earning with Tern.
        </h2>

        {/* Primary CTA */}
        <div className="reveal" style={{ marginBottom: 24, transitionDelay: '80ms' }}>
          <a href="#" className="btn-cta-dark">
            Download the app to get started
          </a>
        </div>

        {/* App store badges — secondary validation */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 12, transitionDelay: '160ms' }}>
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/apple-app-store-badge_en.svg" alt="Download on the App Store" style={{ height: 32, width: 'auto', display: 'block' }} />
          </a>
          <a href="#">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/img/google-play-store-badge.svg" alt="Get it on Google Play" style={{ height: 32, width: 'auto', display: 'block' }} />
          </a>
        </div>
      </div>
    </section>
  );
}
