const logos = [
  { src: '/img/logo-avisonyoung-black.svg', alt: 'Avison Young',      w: 100 },
  { src: '/img/logo-rocky-white.svg',       alt: 'Rocky Real Estate', w: 80  },
  { src: '/img/logo-dubaisportscity.svg',   alt: 'Dubai Sports City', w: 95  },
  { src: '/img/logo-alsayyah-black.svg',    alt: 'AlSayyah Group',    w: 90  },
  { src: '/img/logo-daytona-white.svg',     alt: 'Daytona',           w: 80  },
  { src: '/img/logo-provident-color.svg',   alt: 'Provident',         w: 88  },
];

export default function SocialProofSection({ showStats = false, centered = false }: { showStats?: boolean; centered?: boolean }) {
  return (
    <section style={{
      background: 'linear-gradient(150deg, #073B4C 0%, #0C5470 35%, #0D7A96 65%, #0F8FAD 100%)',
      borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '14px 0',
    }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Main row: label + logos */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: centered ? 'center' : 'flex-start', gap: 16 }}>

          {/* Label */}
          <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 600, fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: 'rgba(255,255,255,0.4)', whiteSpace: 'nowrap' as const, flexShrink: 0 }}>
            Trusted by
          </span>

          {/* Divider */}
          <div className="hidden md:block" style={{ width: 1, height: 20, background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />

          {/* Logos — scrollable on mobile, clipped on desktop */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 24, overflowX: 'auto', flex: centered ? 'unset' : 1, minWidth: 0, WebkitOverflowScrolling: 'touch' as 'touch', scrollbarWidth: 'none' as 'none', msOverflowStyle: 'none' as 'none' }}>
            {logos.map((logo) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                style={{
                  height: 20,
                  width: 'auto',
                  maxWidth: logo.w,
                  objectFit: 'contain',
                  flexShrink: 0,
                  filter: 'brightness(0) invert(1) opacity(0.5)',
                }}
              />
            ))}
          </div>

          {/* Stats — landlord page only, always inline */}
          {showStats && (
            <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0, borderLeft: '1px solid rgba(255,255,255,0.15)', paddingLeft: 16 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 5 }}>
                <span style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 13, color: '#15EAAD', letterSpacing: '-0.02em', whiteSpace: 'nowrap' as const }}>
                  20,000+
                </span>
                <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 10, color: 'rgba(255,255,255,0.45)', whiteSpace: 'nowrap' as const }}>
                  tenants
                </span>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
