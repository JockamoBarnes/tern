import Image from 'next/image';

export default function TrustBar() {
  return (
    <div style={{ background: 'var(--bg-hero)' }}>
      <div
        className="mx-auto px-6 md:px-12 pb-8"
        style={{ maxWidth: 1200 }}
      >
        <div
          className="flex flex-wrap items-center gap-x-8 gap-y-4 py-6"
          style={{ borderTop: '1px solid var(--border-on-dark)' }}
        >
          <span
            className="text-[12px] uppercase tracking-[0.1em] font-bold"
            style={{ color: 'var(--text-muted-on-dark)' }}
          >
            Backed by
          </span>

          {/* Dubai Land Department */}
          <img
            src="/img/land_department.svg"
            alt="Dubai Land Department"
            style={{ height: 36, opacity: 0.7, filter: 'brightness(0) invert(1)' }}
          />

          {/* UAE Central Bank */}
          <Image
            src="/img/UAE_Central_Bank_Logo.png"
            alt="UAE Central Bank"
            width={643}
            height={155}
            style={{ height: 36, width: 'auto', opacity: 0.7, filter: 'brightness(0) invert(1)' }}
          />
        </div>
      </div>
    </div>
  );
}
