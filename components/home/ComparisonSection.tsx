const rows = [
  { label: 'Pay with credit card',    cheque: false, bank: false, tern: true  },
  { label: 'Earn rewards on payment', cheque: false, bank: false, tern: true  },
  { label: 'No bounced payment risk', cheque: false, bank: true,  tern: true  },
  { label: 'No fee to tenant',        cheque: true,  bank: false, tern: true  },
];

type Row = {
  label: string;
  cheque?: boolean;
  bank?: boolean;
  tern?: boolean;
  chequeText?: string;
  bankText?: string;
  ternText?: string;
};

function Check({ on }: { on: boolean }) {
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 22, height: 22, borderRadius: '50%',
      background: on ? 'rgba(21,234,173,0.12)' : 'rgba(220,38,38,0.08)',
      color: on ? '#0B8A62' : 'rgba(220,38,38,0.7)',
      fontSize: 13, fontWeight: 700,
    }}>
      {on ? '✓' : '✗'}
    </span>
  );
}

function Cell({ row, col }: { row: Row; col: 'cheque' | 'bank' | 'tern' }) {
  const textKey = `${col}Text` as 'chequeText' | 'bankText' | 'ternText';
  if (row[textKey]) {
    return (
      <span style={{
        fontFamily: 'var(--font-manrope)', fontSize: 13, fontWeight: 600,
        color: col === 'tern' ? '#0B8A62' : 'rgba(7,59,76,0.5)',
      }}>
        {row[textKey]}
      </span>
    );
  }
  return <Check on={!!row[col]} />;
}

export default function ComparisonSection() {
  return (
    <section className="grad-divider" style={{ background: 'white', padding: '96px 0' }}>
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%' }}>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 3.5vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--teal)',
            marginBottom: 16,
            maxWidth: '65%',
            minWidth: 260,
          }}
        >
          There&rsquo;s no comparison
        </h2>
        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontSize: 16, color: 'rgba(7,59,76,0.5)', marginBottom: 56, transitionDelay: '80ms' }}>
          But just in case there was, we made a chart for you.
        </p>

        {/* Table */}
        <div className="reveal" style={{ transitionDelay: '160ms', overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 560 }}>
            <thead>
              <tr>
                {/* Feature column */}
                <th style={{ width: '40%', padding: '0 0 20px', textAlign: 'left' }} />

                {/* Cheque */}
                <th style={{ padding: '0 0 20px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(7,59,76,0.35)' }}>Post-dated</span>
                    <span style={{ fontFamily: 'var(--font-unbounded)', fontSize: 14, fontWeight: 700, color: 'rgba(7,59,76,0.45)' }}>Cheque</span>
                  </div>
                </th>

                {/* Bank transfer */}
                <th style={{ padding: '0 0 20px', textAlign: 'center' }}>
                  <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(7,59,76,0.35)' }}>Bank</span>
                    <span style={{ fontFamily: 'var(--font-unbounded)', fontSize: 14, fontWeight: 700, color: 'rgba(7,59,76,0.45)' }}>Transfer</span>
                  </div>
                </th>

                {/* Tern — highlighted */}
                <th style={{ padding: '0 0 20px', textAlign: 'center' }}>
                  <div style={{
                    display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: 4,
                    background: 'rgba(21,234,173,0.08)',
                    border: '1px solid rgba(21,234,173,0.25)',
                    borderRadius: '12px 12px 0 0',
                    padding: '12px 24px 0',
                    marginBottom: -1,
                  }}>
                    <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(11,138,98,0.7)' }}>The smart way</span>
                    <span style={{ fontFamily: 'var(--font-unbounded)', fontSize: 14, fontWeight: 700, color: 'var(--teal)' }}>Tern</span>
                    <div style={{ height: 12 }} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr
                  key={row.label}
                  style={{ borderTop: '1px solid rgba(7,59,76,0.07)' }}
                >
                  {/* Label */}
                  <td style={{ padding: '16px 16px 16px 0', fontFamily: 'var(--font-manrope)', fontSize: 14, fontWeight: 500, color: 'rgba(7,59,76,0.7)', lineHeight: 1.4 }}>
                    {row.label}
                  </td>

                  {/* Cheque */}
                  <td style={{ padding: '16px 0', textAlign: 'center' }}>
                    <Cell row={row} col="cheque" />
                  </td>

                  {/* Bank */}
                  <td style={{ padding: '16px 0', textAlign: 'center' }}>
                    <Cell row={row} col="bank" />
                  </td>

                  {/* Tern */}
                  <td style={{
                    padding: '16px 24px',
                    textAlign: 'center',
                    background: 'rgba(21,234,173,0.06)',
                    borderLeft: '1px solid rgba(21,234,173,0.2)',
                    borderRight: '1px solid rgba(21,234,173,0.2)',
                    ...(i === rows.length - 1 ? { borderBottom: '1px solid rgba(21,234,173,0.2)', borderRadius: '0 0 12px 12px' } : {}),
                  }}>
                    <Cell row={row} col="tern" />
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
            <a href="#download" className="btn-cta-sm">
              Set up in 2 minutes
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
