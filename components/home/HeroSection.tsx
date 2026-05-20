const CSS = `
@keyframes breathe {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.08); opacity: 0.85; }
}
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
.orb-breathe { animation: breathe 8s ease-in-out infinite; }
.stat-float  { animation: float  5s ease-in-out infinite; }
`;

export default function HeroSection() {
  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--teal)',
      }}
    >
      {/* Full-bleed background photo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/hero-bgimage.png"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.38,
          mixBlendMode: 'luminosity',
          pointerEvents: 'none',
        }}
      />

      {/* Teal gradient overlay — keeps brand color dominant */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(135deg, rgba(7,59,76,0.72) 0%, rgba(7,59,76,0.45) 50%, rgba(7,59,76,0.65) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow orbs */}
      <div className="orb-breathe" style={{ position: 'absolute', top: '-80px', right: '-60px', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.12) 0%, transparent 70%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-120px', right: '10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.08) 0%, transparent 70%)', filter: 'blur(120px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '40%', left: '-100px', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.07) 0%, transparent 70%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

      {/* Phone mockup — desktop only */}
      <div
        className="stat-float hidden md:block"
        style={{
          position: 'absolute',
          right: '6%',
          bottom: 0,
          height: '75%',
          maxHeight: 675,
          overflow: 'hidden',
          pointerEvents: 'none',
          filter: 'drop-shadow(0 32px 64px rgba(0,0,0,0.45))',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/hero-phone.webp"
          alt="Tern app"
          style={{ height: '120%', width: 'auto', display: 'block', objectPosition: 'top' }}
        />
      </div>

      <div
        className="px-6 md:px-12"
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          paddingBottom: 96,
          paddingTop: 48,
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Headline */}
        <h1
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            background: 'var(--grad-head)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            maxWidth: '68%',
            minWidth: 280,
            marginBottom: 28,
            transitionDelay: '0ms',
          }}
        >
          Your rent&rsquo;s been<br />freeloading<br />for too long.
        </h1>

        {/* Anchor sentence */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(238,247,248,0.65)',
            maxWidth: 480,
            marginBottom: 40,
            transitionDelay: '80ms',
          }}
        >
          Pay rent with your credit card — directly to your landlord, on time, every time. Rewards are just the bonus.
        </p>

        {/* CTA */}
        <div className="reveal" style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 20, transitionDelay: '160ms', flexWrap: 'wrap' }}>
          <a href="#download" className="btn-cta">
            Pay Rent with Your Card
          </a>
          <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 13, color: 'rgba(238,247,248,0.55)', margin: 0 }}>
            Join over 1,500 UAE renters already using Tern
          </p>
        </div>

        {/* Trust cluster */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 500,
            fontSize: 11,
            color: 'rgba(238,247,248,0.35)',
            transitionDelay: '240ms',
          }}
        >
          Regulated by CBUAE&nbsp;&nbsp;·&nbsp;&nbsp;DLD Registered&nbsp;&nbsp;·&nbsp;&nbsp;No fees to tenants&nbsp;&nbsp;·&nbsp;&nbsp;Start at any point in your lease
        </p>
      </div>
    </section>
    </>
  );
}
