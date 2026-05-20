'use client';

import { useState } from 'react';
import { allianceBuildings } from '@/data/alliance-buildings';
import Button from '@/components/ui/Button';

export default function AllianceSplitSection() {
  const [selected, setSelected] = useState('');

  return (
    <section style={{ background: 'var(--bg-alliance)' }}>
      <div
        className="mx-auto px-6 md:px-12 py-24"
        style={{ maxWidth: 1200 }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
          style={{ color: 'var(--text-on-light)' }}
        >
          How do you pay rent today?
        </h2>

        {/* Open two-column layout — no card boxes, center divider separates columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* Column A — Alliance */}
          <div
            className="flex flex-col gap-6 pb-12 md:pb-0 md:pr-12"
            style={{ borderBottom: 'var(--divider-on-light)' }}
          >
            <div
              className="md:border-b-0 md:border-r-0"
              style={{ borderBottom: 'none' }}
            >
              <span
                className="inline-block text-[11px] uppercase tracking-[0.1em] px-2 py-0.5 rounded-[4px] mb-4 font-bold"
                style={{ color: 'var(--teal)', border: '1px solid var(--border-on-dark)' }}
              >
                Tern Alliance
              </span>
              <h3
                className="text-xl font-bold mb-3"
                style={{ color: 'var(--text-on-light)' }}
              >
                You live in a Tern-enabled building
              </h3>
              <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--text-muted-on-light)' }}>
                Your property manager has Tern set up. You can start earning
                immediately — even if you pay by cheque. Just upload your
                tenancy contract.
              </p>

              <label
                className="block text-xs uppercase tracking-[0.06em] mb-2"
                style={{ color: 'var(--text-muted-on-light)' }}
              >
                Check your building
              </label>
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="w-full text-sm transition-colors duration-200 outline-none pb-2 mb-6"
                style={{
                  backgroundColor: 'transparent',
                  borderBottom: '1px solid rgba(7,59,76,0.20)',
                  borderTop: 'none',
                  borderLeft: 'none',
                  borderRight: 'none',
                  borderRadius: 0,
                  color: selected ? 'var(--text-on-light)' : 'var(--text-muted-on-light)',
                }}
              >
                <option value="">Select your building…</option>
                {allianceBuildings.map((b) => (
                  <option key={b.slug} value={b.slug}>
                    {b.name}
                  </option>
                ))}
              </select>

              {selected ? (
                <Button href={`/${selected}`} variant="ghost">
                  Check your building →
                </Button>
              ) : (
                <span className="text-sm" style={{ color: 'var(--teal)' }}>
                  Select your building above →
                </span>
              )}
            </div>
          </div>

          {/* Column B — Standard */}
          <div
            className="flex flex-col gap-6 pt-12 md:pt-0 md:pl-12"
            style={{ borderTop: 'none' }}
          >
            <div
              className="hidden md:block"
              style={{
                width: 1,
                position: 'absolute',
                /* This is handled by md:pl-12 and the visual separation from the heading */
              }}
            />
            <h3
              className="text-xl font-bold mb-3"
              style={{ color: 'var(--text-on-light)' }}
            >
              You pay rent directly
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted-on-light)' }}>
              No problem. Download the app, upload your Ejari, add your
              landlord&apos;s IBAN. Five minutes. Then your rent starts earning.
            </p>
            <div className="mt-auto">
              <Button href="#download" variant="ghost">
                Get started →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
