const CSS = `
@keyframes marquee-left  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes marquee-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
.mq-left  { animation: marquee-left  linear infinite; will-change: transform; }
.mq-right { animation: marquee-right linear infinite; will-change: transform; }
.mq-row:hover .mq-left, .mq-row:hover .mq-right { animation-play-state: paused; }
.mq-tile { transition: transform 150ms ease, border-color 150ms ease; }
.mq-tile:hover { transform: scale(1.04); border-color: rgba(21,234,173,0.45) !important; }
`;

const rows: { partners: string[]; duration: number; direction: 'left' | 'right' }[] = [
  {
    duration: 35,
    direction: 'left',
    partners: [
      'Emirates', 'Etihad', 'Flydubai', 'Air Arabia',
      'Marriott Bonvoy', 'Hilton Honors', 'Rotana', 'IHG',
      'Amazon', 'Noon', 'Namshi', 'Ounass',
    ],
  },
  {
    duration: 28,
    direction: 'right',
    partners: [
      'Deliveroo', 'Talabat', 'Zomato', 'Careem',
      'VOX Cinemas', 'Reel Cinemas', 'OSN+', 'Platinumlist',
      'du', 'e&', 'SHARE', 'Emaar',
    ],
  },
  {
    duration: 42,
    direction: 'left',
    partners: [
      'ADCB Touchpoints', 'FAB Rewards', 'Emirates NBD Beyond', 'Mashreq Priceless',
      'Spinneys', 'Carrefour', 'LuLu', 'IKEA',
      'Sephora', 'Harvey Nichols', 'Level Shoes', 'The Luxury Closet',
    ],
  },
  {
    duration: 22,
    direction: 'right',
    partners: [
      'Booking.com', 'Airbnb', 'Hertz', 'Sixt',
      'Spotify', 'Netflix', 'Anghami', 'Starzplay',
      'Talabat Mart', 'InstaShop', 'Kibsons', 'Milk & Honey',
    ],
  },
];

function Tile({ name, index }: { name: string; index: number }) {
  const accent = index % 7 === 0;
  return (
    <span
      className="mq-tile"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '10px 20px',
        marginRight: 12,
        borderRadius: 4,
        border: accent
          ? '1px solid rgba(21,234,173,0.35)'
          : '1px solid rgba(238,247,248,0.1)',
        background: accent
          ? 'rgba(21,234,173,0.08)'
          : 'rgba(238,247,248,0.05)',
        fontFamily: 'var(--font-manrope)',
        fontWeight: accent ? 600 : 500,
        fontSize: 14,
        color: accent ? 'var(--mint)' : 'rgba(238,247,248,0.55)',
        whiteSpace: 'nowrap',
        letterSpacing: accent ? '0.01em' : 0,
        flexShrink: 0,
      }}
    >
      {name}
    </span>
  );
}

export default function RewardsPartnersSection() {
  return (
    <>
    <style dangerouslySetInnerHTML={{ __html: CSS }} />
    <section
      style={{
        backgroundColor: 'var(--teal)',
        padding: '96px 0',
        overflow: 'hidden',
      }}
    >
      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 1200, margin: '0 auto', width: '100%', marginBottom: 56 }}
      >
        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(32px, 4vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            color: 'var(--mint)',
            marginBottom: 12,
            maxWidth: '65%',
            minWidth: 260,
          }}
        >
          Your rent earns everywhere.
        </h2>
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 400,
            fontSize: 16,
            color: 'rgba(238,247,248,0.45)',
            transitionDelay: '80ms',
          }}
        >
          Points and miles redeem across 200+ partners worldwide.
        </p>
      </div>

      {/* Marquee rows */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, maskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)' }}>
        {rows.map((row, ri) => (
          <div
            key={ri}
            className="mq-row reveal"
            style={{
              overflow: 'hidden',
              transitionDelay: `${ri * 60}ms`,
            }}
          >
            <div
              className={`mq-${row.direction}`}
              style={{ animationDuration: `${row.duration}s` }}
            >
              {/* Doubled for seamless loop */}
              {[...row.partners, ...row.partners].map((name, i) => (
                <Tile key={`${ri}-${i}`} name={name} index={i} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div
        className="px-6 md:px-12"
        style={{ maxWidth: 1200, margin: '32px auto 0' }}
      >
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 400,
            fontSize: 12,
            color: 'rgba(238,247,248,0.25)',
          }}
        >
          Partner availability depends on your card's rewards programme.
        </p>
      </div>
    </section>
    </>
  );
}
