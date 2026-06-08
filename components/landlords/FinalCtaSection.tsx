'use client';

import { useState } from 'react';
import BookDemoModal from '@/components/BookDemoModal';

export default function LandlordFinalCtaSection() {
  const [demoOpen, setDemoOpen] = useState(false);
  return (
    <section className="section-navy" style={{ overflow: 'hidden', padding: 'clamp(72px, 12.5vw, 120px) 0' }}>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
      {/* Ambient blobs */}
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.45) 0%, transparent 60%)', filter: 'blur(90px)', pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', top: '50%', left: '25%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.45) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 3 }} />
      <div style={{ position: 'absolute', top: '50%', left: '75%', transform: 'translate(-50%, -50%)', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.4) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none', zIndex: 3 }} />

      {/* Tern wordmark watermark */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/img/tern-icon.svg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '70%',
          maxWidth: 600,
          opacity: 0.07,
          pointerEvents: 'none',
          filter: 'brightness(10)',
          userSelect: 'none',
        }}
      />

      <div className="px-6 md:px-12" style={{ maxWidth: 1200, margin: '0 auto', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative', zIndex: 4 }}>

        <h2
          className="reveal"
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(30px, 4vw, 56px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            color: 'var(--near-white)',
            marginBottom: 16,
            maxWidth: 680,
          }}
        >
          Let&rsquo;s talk about your portfolio
        </h2>

        <p className="reveal" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 400, fontSize: 17, color: 'rgba(240,250,250,0.5)', marginBottom: 48, transitionDelay: '80ms' }}>
          Book a 30-minute demo or reach out directly.
        </p>

        <div className="reveal" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 14, flexWrap: 'wrap', transitionDelay: '160ms' }}>
          <button onClick={() => setDemoOpen(true)} className="btn-cta" style={{ minWidth: 180, cursor: 'pointer', border: 'none' }}>Book a demo</button>
          <a
            href="https://wa.me/971527888532"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
            style={{ minWidth: 180 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
