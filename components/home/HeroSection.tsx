'use client';

import { useState, useEffect } from 'react';

const CYCLING_WORDS = [
  'freeloading',
  'doing nothing',
  'wasted',
];

export default function HeroSection() {
  const [wordIdx, setWordIdx] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      setVisible(false);
      setTimeout(() => {
        // Swap word then fade back in
        setWordIdx(i => (i + 1) % CYCLING_WORDS.length);
        setVisible(true);
      }, 280);
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      style={{
        height: '92vh',
        minHeight: 600,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingTop: 80,
        position: 'relative',
        overflow: 'hidden',
        backgroundColor: 'var(--teal)',
      }}
    >
      {/* SVG grain texture — tactile luminosity */}
      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.18 }} aria-hidden="true">
        <filter id="grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#grain)" />
      </svg>

      {/* Blobs */}
      <div className="blob-1" style={{ position: 'absolute', top: '-10%', right: '-5%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.35) 0%, transparent 65%)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="blob-2" style={{ position: 'absolute', bottom: '-15%', left: '15%', width: 800, height: 800, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.25) 0%, transparent 65%)', filter: 'blur(110px)', pointerEvents: 'none', zIndex: 0 }} />
      <div className="blob-3" style={{ position: 'absolute', top: '20%', left: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.18) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none', zIndex: 0 }} />

      <div
        className="px-6 md:px-12"
        style={{
          maxWidth: 900,
          margin: '0 auto',
          width: '100%',
          paddingBottom: 48,
          paddingTop: 24,
          position: 'relative',
          zIndex: 1,
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* Kinetic headline */}
        <h1
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(46px, 7vw, 92px)',
            lineHeight: 1.08,
            letterSpacing: '-0.03em',
            color: 'rgba(240,250,250,0.95)',
            marginBottom: 36,
            transitionDelay: '0ms',
          }}
        >
          Your rent&rsquo;s been
          {/* Fixed-height cycling line — never shifts layout */}
          <span style={{
            display: 'block',
            height: '1.12em',
            overflow: 'hidden',
            position: 'relative',
          }}>
            <span
              style={{
                display: 'block',
                whiteSpace: 'nowrap',
                background: 'var(--grad-head)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                opacity: visible ? 1 : 0,
                transform: visible ? 'translateY(0)' : 'translateY(10px)',
                transition: 'opacity 280ms ease, transform 280ms ease',
              }}
            >
              {CYCLING_WORDS[wordIdx]}
            </span>
          </span>
          for too long
        </h1>

        {/* Anchor sentence */}
        <p
          className="reveal"
          style={{
            fontFamily: 'var(--font-manrope)',
            fontWeight: 400,
            fontSize: 18,
            lineHeight: 1.65,
            color: 'rgba(240,250,250,0.92)',
            maxWidth: 480,
            marginBottom: 48,
            transitionDelay: '80ms',
          }}
        >
          Its time your rent worked as hard as you do. Pay rent with your credit card while earning rewards with no fee.
        </p>

        {/* CTA */}
        <div className="reveal" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 28, transitionDelay: '160ms' }}>
          <a href="http://onelink.to/q5yb7z" target="_blank" rel="noopener noreferrer" className="btn-cta">
            Get Started
          </a>
        </div>

        {/* Trust cluster */}
        <div
          className="reveal"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px 16px',
            transitionDelay: '240ms',
          }}
        >
          {['Start at any point in your lease', 'No fees for you', 'Works with any UAE credit card'].map((item, i) => (
            <span
              key={item}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 16,
                fontFamily: 'var(--font-manrope)',
                fontWeight: 500,
                fontSize: 12,
                color: 'rgba(240,250,250,0.4)',
              }}
            >
              {i > 0 && <span aria-hidden="true" style={{ color: 'rgba(240,250,250,0.2)' }}>·</span>}
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
