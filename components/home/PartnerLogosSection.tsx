const partners = [
  { name: 'Etihad' },
  { name: 'Emirates' },
  { name: 'Flydubai' },
  { name: 'Marriott' },
  { name: 'Amazon' },
  { name: 'Noon' },
  { name: 'Talabat' },
  { name: 'Namshi' },
  { name: 'Deliveroo' },
  { name: 'Zomato' },
  { name: 'VOX Cinemas' },
  { name: 'du' },
];

export default function PartnerLogosSection() {
  return (
    <section style={{ background: 'var(--bg-partners)' }}>
      <div className="mx-auto px-6 md:px-12 py-24" style={{ maxWidth: 1200 }}>

        {/* Header */}
        <div className="mb-12">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{ color: 'var(--text-on-dark)' }}
          >
            Redeem with 200+ partners.
          </h2>
          <p className="text-base" style={{ color: 'var(--text-muted-on-dark)', maxWidth: 480 }}>
            Spend your rewards across travel, shopping, dining, and entertainment — anywhere you already love.
          </p>
        </div>

        {/* Partner grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex items-center justify-center h-16 rounded-[8px] text-sm font-bold transition-opacity duration-200 hover:opacity-80"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: 'var(--divider-on-dark)',
                color: 'var(--text-muted-on-dark)',
              }}
            >
              {partner.name}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
