'use client';

import { useState } from 'react';

const categories = [
  {
    label: 'Go Somewhere New',
    headline: 'Rent paid.\nBags packed.',
    sub: 'Earn miles and free nights on your next trip.',
    brands: ['Emirates', 'Etihad', 'Marriott Bonvoy', 'Hilton Honors', 'Deliveroo', 'Talabat'],
    photo: '/img/img-rev-travel.png',
    reward: '4,200 miles',
    rewardLabel: 'from one year of rent',
  },
  {
    label: 'Get Something Nice',
    headline: 'Rewards that\nfill your home.',
    sub: 'Earn rewards at the places you shop most.',
    brands: ['Sephora', 'Harvey Nichols', 'Namshi', 'Spinneys', 'Carrefour', 'LuLu'],
    photo: '/img/img-rev-shopping.png',
    reward: 'AED 2,400',
    rewardLabel: 'to spend on what you love',
  },
  {
    label: 'Give Them More',
    headline: 'The fees that\nfund their future.',
    sub: 'Earn something for the ones you\'re working this hard for.',
    brands: ['Prypco', 'Secure My Scholarship'],
    photo: '/img/img-rev-future.png',
    reward: 'Every dirham',
    rewardLabel: 'working harder than before',
  },
];

export default function ExperiencesSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', backgroundColor: 'var(--teal)' }}>

      {/* Crossfading background photos */}
      {categories.map((cat, i) => (
        <div
          key={cat.label}
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            opacity: i === active ? 1 : 0,
            transition: 'opacity 0.7s ease',
            pointerEvents: 'none',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cat.photo}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', filter: 'brightness(0.55)' }}
          />
        </div>
      ))}

      {/* Gradient overlay — stronger at bottom for legibility */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,59,76,0.1) 0%, rgba(7,59,76,0.05) 35%, rgba(7,59,76,0.55) 75%, rgba(7,59,76,0.88) 100%)', pointerEvents: 'none' }} />

      {/* Content */}
      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1, paddingBottom: 56, paddingTop: 120 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'end' }}>

          {/* Headline + brands */}
          <div style={{ maxWidth: 680, position: 'relative', minHeight: 280 }}>
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease',
                  position: 'absolute',
                  top: 0, left: 0, right: 0,
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                <h2 style={{
                  fontFamily: 'var(--font-unbounded)',
                  fontWeight: 700,
                  fontSize: 'clamp(32px, 4.5vw, 64px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--near-white)',
                  whiteSpace: 'pre-line',
                  marginBottom: 20,
                }}>
                  {cat.headline}
                </h2>
                <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 17, color: 'rgba(238,247,248,0.65)', marginBottom: 28, lineHeight: 1.55 }}>
                  {cat.sub}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.brands.map(b => (
                    <span key={b} style={{
                      fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 12,
                      color: 'rgba(238,247,248,0.6)',
                      border: '1px solid rgba(238,247,248,0.2)',
                      borderRadius: 4, padding: '4px 10px',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(8px)',
                    }}>{b}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Floating reward card */}
          <div style={{ position: 'absolute', right: '8%', bottom: 220, pointerEvents: 'none' }} className="hidden md:block">
            {categories.map((cat, i) => (
              <div
                key={cat.label}
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? 'translateY(0)' : 'translateY(8px)',
                  transition: 'opacity 0.5s ease 0.1s, transform 0.5s ease 0.1s',
                  position: i === 0 ? 'relative' : 'absolute',
                  top: i !== 0 ? 0 : undefined,
                  right: i !== 0 ? 0 : undefined,
                  background: 'rgba(255,255,255,0.13)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(21,234,173,0.4)',
                  borderRadius: 16,
                  padding: '28px 36px',
                  minWidth: 240,
                  boxShadow: '0 0 0 1px rgba(21,234,173,0.1), 0 16px 48px rgba(0,0,0,0.35), 0 0 40px rgba(21,234,173,0.12)',
                }}
              >
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 10, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', color: 'rgba(238,247,248,0.55)', marginBottom: 10 }}>Tern earns you</p>
                <p style={{ fontFamily: 'var(--font-unbounded)', fontSize: 34, fontWeight: 700, color: 'var(--mint)', lineHeight: 1, marginBottom: 8 }}>{cat.reward}</p>
                <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 13, color: 'rgba(238,247,248,0.6)' }}>{cat.rewardLabel}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 48 }}>
          {categories.map((cat, i) => (
            <button
              key={cat.label}
              onClick={() => setActive(i)}
              style={{
                fontFamily: 'var(--font-manrope)',
                fontWeight: 600,
                fontSize: 13,
                padding: '8px 20px',
                borderRadius: 8,
                border: i === active ? '1px solid var(--mint)' : '1px solid rgba(238,247,248,0.2)',
                background: i === active ? 'var(--mint)' : 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                color: i === active ? 'var(--teal)' : 'rgba(238,247,248,0.7)',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                letterSpacing: '0.01em',
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
