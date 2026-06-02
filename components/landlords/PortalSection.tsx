const callouts = [
  { label: 'Manage multiple properties in one place', top: '12%',  left: '3%'   },
  { label: 'See who\'s paid and who hasn\'t',         top: '18%',  right: '3%'  },
  { label: 'Statements in Arabic and English',        top: '42%',  left: '4%'   },
  { label: 'Know the moment rent lands',              top: '38%',  right: '4%'  },
  { label: 'Give your team the access they need',     top: '65%',  left: '6%'   },
  { label: 'Collect non-rent fees too',               top: '62%',  right: '5%'  },
];

export default function PortalSection() {
  return (
    <section className="section-light grad-divider" style={{ overflow: 'hidden', padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Header — headline left, subtext right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-end" style={{ marginBottom: 48 }}>
          <h2 className="reveal" style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(32px, 4vw, 56px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--teal)', margin: 0 }}>
            See everything.<br />Chase nothing.
          </h2>
          <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 16, lineHeight: 1.65, color: 'rgba(7,59,76,0.6)', transitionDelay: '80ms', margin: 0 }}>
            The Tern portal gives you a live view of every payment across your portfolio. Who&rsquo;s paid, what&rsquo;s pending, what&rsquo;s coming — without a single follow-up call.
          </p>
        </div>

        {/* Image with individual callout checkmarks */}
        <div className="reveal" style={{ position: 'relative', margin: '0 auto', width: 'min(90%, 100%)', transitionDelay: '160ms' }}>

          {/* Callout checkmarks scattered across the image */}
          {callouts.map((c) => (
            <div
              key={c.label}
              className="hidden md:flex"
              style={{
                position: 'absolute',
                top: c.top,
                ...(c.left  ? { left:  c.left  } : {}),
                ...(c.right ? { right: c.right } : {}),
                alignItems: 'center',
                gap: 8,
                background: 'rgba(5,29,44,0.86)',
                backdropFilter: 'blur(14px)',
                WebkitBackdropFilter: 'blur(14px)',
                border: '1px solid rgba(21,234,173,0.22)',
                borderRadius: 20,
                padding: '6px 14px 6px 8px',
                fontFamily: 'var(--font-manrope)',
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(240,250,250,0.9)',
                whiteSpace: 'nowrap' as const,
                zIndex: 2,
                boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
              }}
            >
              <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: 18, height: 18, borderRadius: '50%', background: 'rgba(21,234,173,0.18)', flexShrink: 0 }}>
                <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                  <path d="M1 4L3.5 6.5L9 1" stroke="#15EAAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              {c.label}
            </div>
          ))}

          {/* Device frame */}
          <div style={{
            borderRadius: 12,
            overflow: 'hidden',
            boxShadow: '0 24px 80px rgba(7,59,76,0.18), 0 4px 24px rgba(7,59,76,0.1)',
            border: '1px solid rgba(7,59,76,0.1)',
          }}>
            <div style={{ height: 32, background: '#073B4C', display: 'flex', alignItems: 'center', paddingLeft: 14, gap: 7 }}>
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(255,255,255,0.18)' }} />
              <div style={{ width: 11, height: 11, borderRadius: '50%', background: 'rgba(21,234,173,0.35)' }} />
            </div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/img/img-portalmockup.webp"
              alt="Tern landlord portal"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
