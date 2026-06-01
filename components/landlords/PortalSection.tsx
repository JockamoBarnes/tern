const features = [
  'See who\'s paid and who hasn\'t',
  'Statements in Arabic and English',
  'Know the moment rent lands',
  'Manage multiple properties in one place',
  'Give your team the access they need',
  'Collect non-rent fees too',
];

const callouts = [
  { label: 'Automated reconciliation',  top: '14%',  left: '6%'  },
  { label: 'Paid on time — 3 Apr',       top: '32%',  right: '4%' },
  { label: '0 rent calls this month',    top: '52%',  left: '3%'  },
  { label: 'Portfolio overview live',    top: '68%',  right: '5%' },
  { label: 'Statement ready — download', top: '82%',  left: '8%'  },
];

function Checkmark() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" style={{ flexShrink: 0 }}>
      <circle cx="8" cy="8" r="8" fill="rgba(21,234,173,0.15)" />
      <path d="M4.5 8.5L7 11L11.5 5.5" stroke="#15EAAD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PortalSection() {
  return (
    <section className="section-light" style={{ padding: '100px 0', overflow: 'hidden' }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        {/* Header + feature list */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start" style={{ marginBottom: 64 }}>
          <div>
            <h2 className="reveal" style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 'clamp(24px, 2.8vw, 40px)', lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--teal)', marginBottom: 20 }}>
              See everything. Chase nothing.
            </h2>
            <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 16, lineHeight: 1.65, color: 'rgba(7,59,76,0.6)', transitionDelay: '80ms' }}>
              The Tern portal gives you a live view of every payment across your portfolio. Who&rsquo;s paid, what&rsquo;s pending, what&rsquo;s coming — without a single follow-up call.
            </p>
          </div>
          <div className="reveal grid grid-cols-2 gap-x-8 gap-y-4 items-start" style={{ transitionDelay: '120ms', paddingTop: 8 }}>
            {features.map((f) => (
              <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                <Checkmark />
                <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 14, color: 'rgba(7,59,76,0.8)', lineHeight: 1.4 }}>{f}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Large portal image — 68% of section width, centered, callouts on top */}
        <div className="reveal" style={{ position: 'relative', margin: '0 auto', width: '68%', transitionDelay: '160ms' }}>

          {/* Callout pills overlaid on the image */}
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
                gap: 6,
                background: 'rgba(5, 29, 44, 0.88)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(21,234,173,0.25)',
                borderRadius: 20,
                padding: '6px 14px',
                fontFamily: 'var(--font-manrope)',
                fontSize: 12,
                fontWeight: 500,
                color: 'rgba(240,250,250,0.92)',
                whiteSpace: 'nowrap' as const,
                zIndex: 2,
                boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--mint)', flexShrink: 0, boxShadow: '0 0 6px rgba(21,234,173,0.6)' }} />
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
            {/* Browser chrome */}
            <div style={{
              height: 32,
              background: '#073B4C',
              display: 'flex',
              alignItems: 'center',
              paddingLeft: 14,
              gap: 7,
            }}>
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
