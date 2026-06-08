'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import BookDemoModal from '@/components/BookDemoModal';

const SOCIAL = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ternrewards',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/ternrewards/',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'TikTok',
    href: 'https://www.tiktok.com/@ternapp',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971527888532',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.75.75 0 0 0 .916.916l5.633-1.476A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.513-5.228-1.407l-.374-.22-3.884 1.018 1.018-3.836-.235-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
];

const LOGO_SVG = (height: number) => (
  <svg
    viewBox="0 0 892.5 279.5"
    style={{ height, width: 'auto', transition: 'height 0.3s ease', display: 'block' }}
    aria-hidden="true"
  >
    <defs>
      <linearGradient id="logo-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#15EAAD" />
        <stop offset="100%" stopColor="#4DB6CE" />
      </linearGradient>
    </defs>
    <g fill="url(#logo-grad)">
      <path d="M699.4,160.3c4-.9,7.9-1,11.6-.4v-35.2c-2.6-.2-5.3-.2-8-.1-34.8,1.8-61.6,31.5-61.6,66.3v75.6h34.8s0-40,0-40v-9.3c0,0,.2-26.9.2-26.9,0-14,9.3-26.7,22.9-29.9Z"/>
      <path d="M505.8,226.6c5.4,10.8,13.5,20,23.5,26.8,13.1,8.9,29.6,12.4,47.8,13.1,0,0,29,.5,29,.5l.6-31.7c-46.8,0-63.6-4.8-68-30.1l94.4,1.3v-21.5c.7-37.7-24.1-57-52.6-60-49.9-5.2-89.5,41.2-78.4,90.1,1,4.4,2.2,8.5,3.7,11.4ZM591.9,176.8h-45.3c7-25.9,44.2-25.1,45.3,0Z"/>
      <path d="M502.3,235.5c-61.6,1.2-68.5-19.6-65.5-75.9h36.7v-34.8h-36.7v-31.2h-35.1v33.4c-34,8.5-52.1,44-48.3,78.2h35c-.7-14.2,0-32.2,13.3-40.3,0,0,0,31.3,0,31.9-1.3,41.6,33.5,70.4,74.3,69.6,0,0,25.7,0,25.7,0l.5-30.9Z"/>
      <path d="M787.7,125.1c-39,0-70.7,31.6-70.7,70.7v70.7h34.7v-71.9c0-19.9,16.1-35.9,35.9-35.9s35.9,16.1,35.9,35.9v71.9h34.7v-70.7c0-39-31.6-70.7-70.7-70.7Z"/>
    </g>
    <g fill="url(#logo-grad)">
      <path d="M874,138.9c.2.2.4.5.7.9s.6.8.9,1.2c.3.5.6.9.9,1.4.3.5.5,1,.8,1.4h-1.8c-.2-.4-.5-.9-.8-1.3s-.5-.9-.8-1.3c-.3-.4-.6-.8-.8-1.1-.3-.4-.5-.7-.7-.9-.1,0-.3,0-.5,0h-2v4.7h-1.7v-11.8c.5-.1,1-.2,1.6-.2.6,0,1.1,0,1.6,0,1.7,0,3,.3,3.8,1,.9.6,1.3,1.6,1.3,2.8s-.2,1.5-.6,2-1,1-1.9,1.3ZM871.4,133.3c-.7,0-1.3,0-1.6,0v4.5h1.2c.6,0,1.1,0,1.6,0,.5,0,.8-.2,1.2-.3.3-.2.6-.4.7-.7.2-.3.3-.7.3-1.2s0-.8-.3-1.1c-.2-.3-.4-.5-.7-.7-.3-.2-.6-.3-1-.4-.4,0-.8-.1-1.3-.1Z"/>
      <path d="M872,125c-7.4,0-13.5,6.1-13.5,13.5s6.1,13.5,13.5,13.5,13.5-6.1,13.5-13.5-6.1-13.5-13.5-13.5ZM872,150.6c-6.7,0-12.2-5.4-12.2-12.2s5.5-12.2,12.2-12.2,12.2,5.5,12.2,12.2-5.4,12.2-12.2,12.2Z"/>
    </g>
    <path fill="url(#logo-grad)" d="M307.6,122.5c1.1-3.4,2.4-20,1.4-45.8l81.6-53.8-100.4,9.1c-14.3-16.8-35.4-27.5-59-27.9-44.4-.8-80.7,36.8-80.7,81.2v16.6c-63,15.4-112.7,65-128.2,128H7.5v42.9h127.1c88,0,161.1-65.5,173-150.3ZM184.6,140h8.8v-56.5c0-21.3,18.3-38.4,40-36.3,18.9,1.8,33,18.4,33,37.4v13.5h0c0,72.7-59.1,131.8-131.8,131.8h-67.6c16.7-50.1,62.8-86.9,117.7-89.9Z"/>
  </svg>
);

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const lastY = useRef(0);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      if (y < 80) {
        setHidden(false);
      } else if (y > lastY.current + 4) {
        setHidden(true);
      } else if (y < lastY.current - 4) {
        setHidden(false);
      }
      lastY.current = y;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <>
      <BookDemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />

      <header
        className="fixed top-0 z-50 w-full transition-all duration-300"
        style={{
          backgroundColor: scrolled ? 'rgba(7,59,76,0.75)' : 'transparent',
          backdropFilter: scrolled ? 'blur(14px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(21,234,173,0.12)' : '1px solid transparent',
          transform: hidden && !open ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        <div
          className="mx-auto flex items-center justify-between px-6 md:px-12 transition-all duration-300"
          style={{ maxWidth: 1200, height: scrolled ? 60 : 80 }}
        >
          {/* Logo */}
          <Link href="/" aria-label="Tern home" onClick={close}>
            {LOGO_SVG(scrolled ? 28 : 34)}
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            <Link href="/" className={`nav-link${pathname === '/' ? ' active' : ''}`}>Tenants</Link>
            <Link href="/landlords" className={`nav-link${pathname.startsWith('/landlords') ? ' active' : ''}`}>Landlords</Link>
            <Link href="/resources" className={`nav-link${pathname.startsWith('/resources') ? ' active' : ''}`}>Resources</Link>
            <Link href="mailto:hello@ternrewards.com" className="nav-link">Contact</Link>
            <a href="http://onelink.to/q5yb7z" target="_blank" rel="noopener noreferrer" className="btn-cta-sm">
              Get Started
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden flex flex-col justify-center gap-[5px] p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: 'rgba(238,247,248,0.8)',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: 'rgba(238,247,248,0.8)',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-0.5 transition-all duration-200"
              style={{
                backgroundColor: 'rgba(238,247,248,0.8)',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className="md:hidden fixed inset-0 z-40 flex flex-col"
        style={{
          background: 'linear-gradient(160deg, #051D2C 0%, #073B4C 60%, #0C5470 100%)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 320ms cubic-bezier(0.22, 1, 0.36, 1)',
          visibility: open ? 'visible' : 'hidden',
        }}
        aria-hidden={!open}
      >
        {/* Ambient glow */}
        <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.12) 0%, transparent 65%)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        {/* Header row — logo + close */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', flexShrink: 0 }}>
          <Link href="/" aria-label="Tern home" onClick={close}>
            {LOGO_SVG(28)}
          </Link>
          <button
            onClick={close}
            aria-label="Close menu"
            style={{
              background: 'rgba(255,255,255,0.07)', border: 'none', borderRadius: '50%',
              width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: 'rgba(238,247,248,0.8)', fontSize: 16, cursor: 'pointer',
            }}
          >
            ✕
          </button>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', margin: '0 24px', flexShrink: 0 }} />

        {/* Nav links */}
        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 24px', gap: 4 }}>
          {[
            { href: '/', label: 'Tenants', active: pathname === '/' },
            { href: '/landlords', label: 'Landlords', active: pathname.startsWith('/landlords') },
            { href: '/resources', label: 'Resources', active: pathname.startsWith('/resources') },
            { href: 'mailto:hello@ternrewards.com', label: 'Contact', active: false },
          ].map(({ href, label, active }) => (
            <Link
              key={href}
              href={href}
              onClick={close}
              style={{
                fontFamily: 'var(--font-unbounded)',
                fontWeight: 700,
                fontSize: 'clamp(26px, 7vw, 36px)',
                lineHeight: 1.2,
                color: active ? '#15EAAD' : 'rgba(238,247,248,0.85)',
                textDecoration: 'none',
                padding: '10px 0',
                display: 'block',
                letterSpacing: '-0.02em',
                transition: 'color 150ms ease',
              }}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Bottom section — CTAs + socials */}
        <div style={{ padding: '24px', flexShrink: 0 }}>
          {/* CTA buttons */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 28 }}>
            <a
              href="http://onelink.to/q5yb7z"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cta-sm"
              onClick={close}
              style={{ flex: 1, textAlign: 'center', justifyContent: 'center' }}
            >
              Get Started
            </a>
            <button
              onClick={() => { close(); setDemoOpen(true); }}
              className="btn-ghost"
              style={{ flex: 1, fontSize: 13, padding: '10px 16px', border: '1px solid rgba(21,234,173,0.3)', cursor: 'pointer', justifyContent: 'center' }}
            >
              Book a demo
            </button>
          </div>

          {/* Divider */}
          <div style={{ height: 1, background: 'rgba(255,255,255,0.06)', marginBottom: 20 }} />

          {/* Social icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            {SOCIAL.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                style={{ color: 'rgba(238,247,248,0.4)', display: 'flex', alignItems: 'center' }}
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
