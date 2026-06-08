const rows = [
  { label: 'Pay with credit card',    cheque: false, bank: false, tern: true },
  { label: 'No bounced payment risk', cheque: false, bank: true,  tern: true },
  { label: 'No fee to tenant',        cheque: true,  bank: true,  tern: true },
  { label: 'Earn rewards on payment', cheque: false, bank: false, tern: true },
];

type Row = {
  label: string;
  cheque?: boolean;
  bank?: boolean;
  tern?: boolean;
};

const MOTION_CSS = `
@keyframes tern-shimmer {
  0%, 60% { transform: translateX(-150%); opacity: 0; }
  65%      { opacity: 1; }
  95%      { opacity: 1; }
  100%     { transform: translateX(350%); opacity: 0; }
}
.tern-cell {
  position: relative;
  overflow: hidden;
}
.tern-shimmer-bar {
  position: absolute;
  inset: 0 auto 0 0;
  width: 35%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.35), transparent);
  animation: tern-shimmer 4s ease-in-out infinite;
  pointer-events: none;
}
.check-icon {
  display: inline-flex; align-items: center; justify-content: center;
  width: 22px; height: 22px; border-radius: 50%;
  font-size: 13px; font-weight: 700;
  transition: transform 220ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
.comparison-row:hover .check-icon {
  transform: scale(1.25);
}
`;

function Check({ on }: { on: boolean }) {
  return (
    <span className="check-icon" style={{
      background: on ? 'rgba(21,234,173,0.12)' : 'rgba(220,38,38,0.08)',
      color: on ? '#0B8A62' : 'rgba(220,38,38,0.7)',
    }}>
      {on ? '✓' : '✗'}
    </span>
  );
}

export default function ComparisonSection() {
  const lastRowIdx = rows.length - 1;

  return (
    <section className="section-light grad-divider" style={{ padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <style dangerouslySetInnerHTML={{ __html: MOTION_CSS }} />
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--teal)',
            marginBottom: 16,
            maxWidth: 580,
          }}
        >
          There&rsquo;s no comparison
        </h2>
        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontSize: 16, color: 'rgba(7,59,76,0.5)', marginBottom: 56, transitionDelay: '80ms' }}>
          But just in case there was, we made a chart for you.
        </p>

        {/* Table */}
        <div className="reveal overflow-x-auto" style={{ transitionDelay: '160ms', WebkitOverflowScrolling: 'touch' as 'touch' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 480 }}>
            <thead>
              <tr>
                <th style={{ width: '40%', padding: '0 0 20px', textAlign: 'left' }} />

                {/* Cheque */}
                <th style={{ padding: '0 0 20px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(7,59,76,0.35)' }}>Post-dated</span>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 14, color: 'rgba(7,59,76,0.45)' }}>Cheque</span>
                  </div>
                </th>

                {/* Bank transfer */}
                <th style={{ padding: '0 0 20px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(7,59,76,0.35)' }}>Bank</span>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 14, color: 'rgba(7,59,76,0.45)' }}>Transfer</span>
                  </div>
                </th>

                {/* Tern — highlighted */}
                <th style={{ padding: '0 0 20px', textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    background: 'var(--mint)',
                    borderRadius: '8px 8px 0 0',
                    padding: '12px 28px 0',
                    marginBottom: -1,
                  }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'rgba(7,59,76,0.6)' }}>The smart way</span>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontWeight: 700, fontSize: 14, color: 'var(--teal)' }}>Tern</span>
                    <div style={{ height: 12 }} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  className="comparison-row"
                  style={{ borderTop: '1px solid rgba(7,59,76,0.07)' }}
                >
                  <td style={{ padding: '16px 16px 16px 0', fontFamily: 'var(--font-manrope)', fontSize: 14, fontWeight: 500, color: 'rgba(7,59,76,0.7)', lineHeight: 1.4 }}>
                    {row.label}
                  </td>
                  <td style={{ padding: '16px 0', textAlign: 'center' }}>
                    <Check on={!!row.cheque} />
                  </td>
                  <td style={{ padding: '16px 0', textAlign: 'center' }}>
                    <Check on={!!row.bank} />
                  </td>
                  <td className="tern-cell" style={{
                    padding: '16px 24px',
                    textAlign: 'center',
                    background: 'rgba(21,234,173,0.05)',
                    borderLeft: '2px solid var(--mint)',
                    borderRight: '2px solid var(--mint)',
                    ...(i === 0 ? { borderTop: '2px solid var(--mint)' } : {}),
                    ...(i === lastRowIdx ? { borderBottom: '2px solid var(--mint)', borderRadius: '0 0 8px 8px' } : {}),
                  }}>
                    <div className="tern-shimmer-bar" />
                    <Check on={!!row.tern} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Winner row */}
        <div className="reveal" style={{ marginTop: 32, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', transitionDelay: '240ms' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 16,
            background: 'rgba(21,234,173,0.08)',
            border: '1px solid rgba(21,234,173,0.2)',
            borderRadius: 8,
            padding: '14px 24px',
          }}>
            <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 14, fontWeight: 500, color: 'rgba(7,59,76,0.6)' }}>
              Ready to switch?
            </span>
            <a href="http://onelink.to/q5yb7z" target="_blank" rel="noopener noreferrer" className="btn-cta-sm">
              Set up in 2 minutes
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
