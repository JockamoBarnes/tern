'use client';

import { useState } from 'react';
import Image from 'next/image';

const categories = [
  {
    label: 'For You',
    headline: 'Rent paid.\nNight sorted.',
    sub: 'Earn rewards at the restaurants, cinemas, and streaming services you already use.',
    brands: ['Netflix', 'Reel Cinemas', 'Palazzo Versace', 'Anghami'],
    photo: '/img/img-rev-entertainment.webp',
    reward: '4,200',
    rewardUnit: 'miles',
    rewardLabel: 'Est. on AED 120K annual rent',
    route: 'EK 001 · DXB → LHR',
    routeFrom: 'Dubai',
    routeTo: 'London',
  },
  {
    label: 'For Your Home',
    headline: 'Every corner,\nworking harder.',
    sub: 'Earn rewards at the home and furniture stores you shop most.',
    brands: ['Ikea', 'SharafDG', 'Amazon', 'LaundryHeap'],
    photo: '/img/img-rev-shopping.webp',
    reward: 'AED 2,400',
    rewardUnit: 'cashback',
    rewardLabel: 'Est. on AED 120K annual rent',
    route: 'Rewards · Spend anywhere',
    routeFrom: 'Your card',
    routeTo: 'Your pocket',
  },
  {
    label: 'For Your Family',
    headline: 'The rent that\nfund their future.',
    sub: 'Earn something for the ones you\'re working this hard for.',
    brands: ['PRYPCO Blocks', 'Secure My Scholarship', 'School Fees', 'Rent'],
    photo: '/img/img-rev-future.webp',
    reward: 'Every dirham',
    rewardUnit: 'working harder',
    rewardLabel: 'Est. on AED 120K annual rent',
    route: 'Tern Points · Invest & save',
    routeFrom: 'Your rent',
    routeTo: 'Their future',
  },
];

const TAB_CSS = `
/* Shrink tab buttons at 480px so they stay on one row without scrolling */
@media (max-width: 480px) {
  .tab-btn { padding: 8px 12px !important; font-size: 12px !important; }
}
`;

export default function ExperiencesSection() {
  const [active, setActive] = useState(0);

  return (
    <section style={{ position: 'relative', minHeight: '92vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden', backgroundColor: 'var(--teal)' }}>
      <style dangerouslySetInnerHTML={{ __html: TAB_CSS }} />

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
          <Image
            src={cat.photo}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.5)' }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(7,59,76,0.1) 0%, rgba(7,59,76,0.05) 35%, rgba(7,59,76,0.55) 75%, rgba(7,59,76,0.9) 100%)', pointerEvents: 'none' }} />

      {/* Content */}
      <div className="px-6 md:px-12 pt-20 md:pt-24 pb-14 md:pb-16" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'end' }}>

          {/* Headline + brands */}
          <div style={{ maxWidth: 680, position: 'relative', minHeight: 'clamp(240px, 30vw, 280px)' }}>
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
                  fontSize: 'clamp(42px, 5.5vw, 72px)',
                  lineHeight: 1.1,
                  letterSpacing: '-0.02em',
                  color: 'var(--near-white)',
                  whiteSpace: 'pre-line',
                  marginBottom: 20,
                }}>
                  {cat.headline}
                </h2>
                <p style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 17, color: 'rgba(240,250,250,0.65)', marginBottom: 28, lineHeight: 1.55 }}>
                  {cat.sub}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {cat.brands.map(b => (
                    <span key={b} style={{
                      fontFamily: 'var(--font-manrope)', fontWeight: 500, fontSize: 12,
                      color: 'rgba(240,250,250,0.6)',
                      border: '1px solid rgba(240,250,250,0.2)',
                      borderRadius: 4, padding: '4px 10px',
                      background: 'rgba(255,255,255,0.05)',
                      backdropFilter: 'blur(8px)',
                    }}>{b}</span>
                  ))}
                </div>
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
              className="tab-btn"
              style={{
                fontFamily: 'var(--font-manrope)',
                fontWeight: 600,
                fontSize: 13,
                padding: '10px 20px',
                minHeight: 44,
                borderRadius: 8,
                border: i === active ? '1px solid var(--mint)' : '1px solid rgba(240,250,250,0.2)',
                background: i === active ? 'var(--mint)' : 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(8px)',
                color: i === active ? 'var(--teal)' : 'rgba(240,250,250,0.7)',
                cursor: 'pointer',
                transition: 'background 150ms ease, border-color 150ms ease, color 150ms ease',
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
