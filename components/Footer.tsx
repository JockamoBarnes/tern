'use client';

import Link from 'next/link';

const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ternrewards',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
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
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.67a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04z"/>
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/971527888532',
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.845L.057 23.428a.75.75 0 0 0 .916.916l5.633-1.476A11.944 11.944 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.907 0-3.693-.513-5.228-1.407l-.374-.22-3.884 1.018 1.018-3.836-.235-.386A9.944 9.944 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  const logo = (
    <svg viewBox="0 0 892.5 279.5" style={{ height: 32, width: 'auto', display: 'block', opacity: 0.45 }} aria-hidden="true">
      <defs>
        <linearGradient id="footer-logo-grad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EEF7F8" />
          <stop offset="100%" stopColor="#EEF7F8" />
        </linearGradient>
      </defs>
      <g fill="url(#footer-logo-grad)">
        <path d="M699.4,160.3c4-.9,7.9-1,11.6-.4v-35.2c-2.6-.2-5.3-.2-8-.1-34.8,1.8-61.6,31.5-61.6,66.3v75.6h34.8s0-40,0-40v-9.3c0,0,.2-26.9.2-26.9,0-14,9.3-26.7,22.9-29.9Z"/>
        <path d="M505.8,226.6c5.4,10.8,13.5,20,23.5,26.8,13.1,8.9,29.6,12.4,47.8,13.1,0,0,29,.5,29,.5l.6-31.7c-46.8,0-63.6-4.8-68-30.1l94.4,1.3v-21.5c.7-37.7-24.1-57-52.6-60-49.9-5.2-89.5,41.2-78.4,90.1,1,4.4,2.2,8.5,3.7,11.4ZM591.9,176.8h-45.3c7-25.9,44.2-25.1,45.3,0Z"/>
        <path d="M502.3,235.5c-61.6,1.2-68.5-19.6-65.5-75.9h36.7v-34.8h-36.7v-31.2h-35.1v33.4c-34,8.5-52.1,44-48.3,78.2h35c-.7-14.2,0-32.2,13.3-40.3,0,0,0,31.3,0,31.9-1.3,41.6,33.5,70.4,74.3,69.6,0,0,25.7,0,25.7,0l.5-30.9Z"/>
        <path d="M787.7,125.1c-39,0-70.7,31.6-70.7,70.7v70.7h34.7v-71.9c0-19.9,16.1-35.9,35.9-35.9s35.9,16.1,35.9,35.9v71.9h34.7v-70.7c0-39-31.6-70.7-70.7-70.7Z"/>
      </g>
      <g fill="url(#footer-logo-grad)">
        <path d="M874,138.9c.2.2.4.5.7.9s.6.8.9,1.2c.3.5.6.9.9,1.4.3.5.5,1,.8,1.4h-1.8c-.2-.4-.5-.9-.8-1.3s-.5-.9-.8-1.3c-.3-.4-.6-.8-.8-1.1-.3-.4-.5-.7-.7-.9-.1,0-.3,0-.5,0h-2v4.7h-1.7v-11.8c.5-.1,1-.2,1.6-.2.6,0,1.1,0,1.6,0,1.7,0,3,.3,3.8,1,.9.6,1.3,1.6,1.3,2.8s-.2,1.5-.6,2-1,1-1.9,1.3ZM871.4,133.3c-.7,0-1.3,0-1.6,0v4.5h1.2c.6,0,1.1,0,1.6,0,.5,0,.8-.2,1.2-.3.3-.2.6-.4.7-.7.2-.3.3-.7.3-1.2s0-.8-.3-1.1c-.2-.3-.4-.5-.7-.7-.3-.2-.6-.3-1-.4-.4,0-.8-.1-1.3-.1Z"/>
        <path d="M872,125c-7.4,0-13.5,6.1-13.5,13.5s6.1,13.5,13.5,13.5,13.5-6.1,13.5-13.5-6.1-13.5-13.5-13.5ZM872,150.6c-6.7,0-12.2-5.4-12.2-12.2s5.5-12.2,12.2-12.2,12.2,5.5,12.2,12.2-5.4,12.2-12.2,12.2Z"/>
      </g>
      <path fill="url(#footer-logo-grad)" d="M307.6,122.5c1.1-3.4,2.4-20,1.4-45.8l81.6-53.8-100.4,9.1c-14.3-16.8-35.4-27.5-59-27.9-44.4-.8-80.7,36.8-80.7,81.2v16.6c-63,15.4-112.7,65-128.2,128H7.5v42.9h127.1c88,0,161.1-65.5,173-150.3ZM184.6,140h8.8v-56.5c0-21.3,18.3-38.4,40-36.3,18.9,1.8,33,18.4,33,37.4v13.5h0c0,72.7-59.1,131.8-131.8,131.8h-67.6c16.7-50.1,62.8-86.9,117.7-89.9Z"/>
    </svg>
  );

  return (
    <footer style={{ backgroundColor: 'var(--teal)', borderTop: '1px solid rgba(21,234,173,0.18)' }}>

      {/* Main row: logo · about · social */}
      <div
        className="mx-auto px-6 md:px-12"
        style={{ maxWidth: 1200, padding: '36px 24px 28px', display: 'grid', gridTemplateColumns: 'auto 1fr auto', alignItems: 'center', gap: '0 48px' }}
      >
        <Link href="/" aria-label="Tern home" style={{ flexShrink: 0 }}>
          {logo}
        </Link>

        <p style={{
          fontFamily: 'var(--font-manrope)',
          fontSize: 11,
          lineHeight: 1.65,
          color: 'rgba(238,247,248,0.38)',
          margin: 0,
          textAlign: 'left',
          maxWidth: 340,
        }}>
          Tern is a rent-payment platform built by people who got tired of watching their biggest monthly payment earn nothing. We&rsquo;re working to make rent earn its keep for everyone across the UAE.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          {socialLinks.map(({ label, href, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              style={{ color: 'rgba(238,247,248,0.35)', transition: 'color 200ms ease', display: 'flex', alignItems: 'center' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = '#15EAAD'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(238,247,248,0.35)'; }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>

      {/* Legal fine-print */}
      <div
        className="mx-auto px-6 md:px-12"
        style={{ maxWidth: 1200, padding: '0 24px 20px', display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}
      >
        <span style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, color: 'rgba(238,247,248,0.22)' }}>
          © {new Date().getFullYear()} Tern App Technologies Co. LLC
        </span>
        <span style={{ color: 'rgba(238,247,248,0.12)' }}>·</span>
        <Link href="/privacy-policy" style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, color: 'rgba(238,247,248,0.22)', textDecoration: 'none' }}>Privacy Policy</Link>
        <span style={{ color: 'rgba(238,247,248,0.12)' }}>·</span>
        <Link href="/terms-conditions" style={{ fontFamily: 'var(--font-manrope)', fontSize: 11, color: 'rgba(238,247,248,0.22)', textDecoration: 'none' }}>Terms &amp; Conditions</Link>
      </div>

    </footer>
  );
}
