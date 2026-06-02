const CSS = `
@keyframes mesh-1 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  25%       { transform: translate(8%, -12%) scale(1.15); }
  50%       { transform: translate(-5%, 8%) scale(0.95); }
  75%       { transform: translate(12%, 5%) scale(1.08); }
}
@keyframes mesh-2 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  33%       { transform: translate(-10%, 6%) scale(1.12); }
  66%       { transform: translate(6%, -10%) scale(0.9); }
}
@keyframes mesh-3 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  40%       { transform: translate(5%, 14%) scale(1.1); }
  70%       { transform: translate(-8%, -6%) scale(1.05); }
}
@keyframes mesh-4 {
  0%, 100% { transform: translate(0%, 0%) scale(1); }
  50%       { transform: translate(-12%, -8%) scale(1.18); }
}
.mesh-1 { animation: mesh-1 16s ease-in-out infinite; }
.mesh-2 { animation: mesh-2 20s ease-in-out infinite; }
.mesh-3 { animation: mesh-3 24s ease-in-out infinite; }
.mesh-4 { animation: mesh-4 14s ease-in-out infinite; animation-delay: -7s; }
`;

export default function LandlordHeroSection() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: CSS }} />
      <section
        style={{
          minHeight: '92vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: 80,
          paddingBottom: 80,
          position: 'relative',
          overflow: 'hidden',
          background: '#051D2C',
          textAlign: 'center',
        }}
      >
        {/* SVG grain texture */}
        <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.18 }} aria-hidden="true">
          <filter id="landlord-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#landlord-grain)" />
        </svg>

        {/* Mesh gradient shader — 4 layered animated blobs */}
        <div className="mesh-1" style={{
          position: 'absolute', top: '-20%', left: '-10%',
          width: '70%', height: '80%',
          background: 'radial-gradient(ellipse at center, rgba(10,140,140,0.55) 0%, rgba(7,59,76,0.2) 45%, transparent 70%)',
          filter: 'blur(72px)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div className="mesh-2" style={{
          position: 'absolute', top: '10%', right: '-15%',
          width: '65%', height: '75%',
          background: 'radial-gradient(ellipse at center, rgba(21,234,173,0.28) 0%, rgba(10,140,140,0.12) 40%, transparent 65%)',
          filter: 'blur(80px)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div className="mesh-3" style={{
          position: 'absolute', bottom: '-15%', left: '20%',
          width: '60%', height: '70%',
          background: 'radial-gradient(ellipse at center, rgba(77,182,206,0.25) 0%, rgba(7,59,76,0.1) 50%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none', zIndex: 0,
        }} />
        <div className="mesh-4" style={{
          position: 'absolute', top: '30%', left: '30%',
          width: '40%', height: '50%',
          background: 'radial-gradient(ellipse at center, rgba(21,234,173,0.18) 0%, transparent 60%)',
          filter: 'blur(60px)',
          pointerEvents: 'none', zIndex: 0,
        }} />

        <div className="px-6 md:px-12" style={{ maxWidth: 960, width: '100%', position: 'relative', zIndex: 2 }}>

          <h1
            className="reveal"
            style={{
              fontFamily: 'var(--font-unbounded)',
              fontWeight: 700,
              fontSize: 'clamp(42px, 6.5vw, 88px)',
              lineHeight: 1.12,
              letterSpacing: '-0.025em',
              marginBottom: 48,
            }}
          >
            <span style={{ color: 'rgba(255,255,255,0.95)', display: 'block' }}>
              Make your tenants
            </span>
            <span style={{ color: 'rgba(255,255,255,0.95)', display: 'block' }}>
              happier and your
            </span>
            <span style={{
              display: 'block',
              background: 'linear-gradient(100deg, #15EAAD 10%, #4DB6CE 70%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              filter: 'drop-shadow(0 0 32px rgba(21,234,173,0.4))',
            }}>
              job easier
            </span>
          </h1>

          <div className="reveal" style={{ transitionDelay: '80ms', marginBottom: 56 }}>
            <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 'clamp(14px, 1.1vw, 17px)', lineHeight: 1.7, color: 'rgba(255,255,255,0.72)', maxWidth: 620, margin: '0 auto' }}>
              A free rent payment platform for landlords across the UAE. Tenants pay by credit card and earn rewards — you receive 100% of rent on the due date, zero fees deducted.
            </p>
          </div>

          <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap', transitionDelay: '160ms', marginBottom: 36 }}>
            <a href="#" className="btn-cta" style={{ fontSize: 15, padding: '16px 36px' }}>Book a demo</a>
            <a
              href="https://wa.me/971556386383"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
              style={{ fontSize: 15, padding: '16px 32px' }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp us
            </a>
          </div>

        </div>
      </section>
    </>
  );
}
