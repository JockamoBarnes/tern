import Link from 'next/link';

const tags = ['Same payment', 'Same timing', 'No fees', 'Just their IBAN'];

export default function LandlordReassurance() {
  return (
    <section style={{ background: 'var(--bg-press)' }}>
      <div
        className="mx-auto px-6 md:px-12 py-10"
        style={{ maxWidth: 1200, borderTop: 'var(--divider-on-dark)' }}
      >
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <p className="text-lg font-bold" style={{ color: 'var(--text-on-dark)' }}>
            Your landlord doesn&apos;t need to do a thing.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            {tags.map((tag) => (
              <span
                key={tag}
                className="text-sm px-3 py-1 rounded-[6px]"
                style={{ color: 'var(--text-on-dark)', border: 'var(--divider-on-dark)' }}
              >
                {tag}
              </span>
            ))}
            <Link
              href="/landlords"
              className="text-sm transition-opacity duration-200 hover:opacity-100"
              style={{ color: 'var(--teal)' }}
            >
              More for landlords →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
