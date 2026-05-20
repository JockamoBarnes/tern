const ITEMS = 'TRAVEL SMARTER · EARN REWARDS · ZERO FOREIGN FEES · TERN CARD · PAY RENT YOUR WAY · ';

export default function MarqueeStrip() {
  const repeated = ITEMS.repeat(6);

  return (
    <div
      style={{
        backgroundColor: 'var(--navy)',
        borderTop: '1px solid rgba(21,234,173,0.12)',
        borderBottom: '1px solid rgba(21,234,173,0.12)',
        overflow: 'hidden',
        padding: '14px 0',
      }}
      aria-hidden="true"
    >
      <div
        style={{
          display: 'flex',
          width: 'max-content',
          animation: 'marquee 28s linear infinite',
          whiteSpace: 'nowrap',
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(21,234,173,0.65)',
          }}
        >
          {repeated}
        </span>
        {/* Duplicate so the loop is seamless */}
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: 'rgba(21,234,173,0.65)',
          }}
        >
          {repeated}
        </span>
      </div>
    </div>
  );
}
