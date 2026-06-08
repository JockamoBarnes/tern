'use client';

import { useState, useEffect, useRef } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
}

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function BookDemoModal({ open, onClose }: Props) {
  const [name, setName] = useState('');
  const [property, setProperty] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const nameRef = useRef<HTMLInputElement>(null);

  // Focus first field on open; close on Escape
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => nameRef.current?.focus(), 60);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  if (!open) return null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/book-demo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, property, email, phone }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setProperty(''); setEmail(''); setPhone('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    boxSizing: 'border-box',
    height: 44,
    border: '1px solid rgba(7,59,76,0.15)',
    borderRadius: 8,
    background: 'rgba(7,59,76,0.03)',
    color: 'var(--teal)',
    fontFamily: 'var(--font-manrope)',
    fontSize: 14,
    outline: 'none',
    padding: '0 12px',
    transition: 'border-color 150ms ease',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: 'var(--font-manrope)',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: 'rgba(7,59,76,0.5)',
    marginBottom: 6,
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Book a demo"
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '16px',
      }}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        style={{
          position: 'absolute', inset: 0,
          background: 'rgba(5,29,44,0.72)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
        }}
      />

      {/* Card */}
      <div
        style={{
          position: 'relative', zIndex: 1,
          background: '#ffffff',
          borderRadius: 16,
          padding: 'clamp(28px, 5vw, 40px)',
          width: '100%',
          maxWidth: 480,
          boxShadow: '0 24px 80px rgba(7,59,76,0.22)',
          border: '1px solid rgba(7,59,76,0.06)',
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: 'absolute', top: 16, right: 16,
            background: 'rgba(7,59,76,0.06)', border: 'none',
            borderRadius: '50%', width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer', color: 'var(--teal)', fontSize: 16, lineHeight: 1,
          }}
        >
          ✕
        </button>

        {/* Header */}
        <div style={{ marginBottom: 28 }}>
          <h2 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 22, color: 'var(--teal)', margin: '0 0 8px', letterSpacing: '-0.01em' }}>
            Book a demo
          </h2>
          <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 14, color: 'rgba(7,59,76,0.5)', margin: 0, lineHeight: 1.5 }}>
            Tell us a bit about yourself and we&rsquo;ll be in touch within one business day.
          </p>
        </div>

        {status === 'success' ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ width: 52, height: 52, borderRadius: '50%', background: 'rgba(21,234,173,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: 24 }}>
              ✓
            </div>
            <h3 style={{ fontFamily: 'var(--font-unbounded)', fontWeight: 700, fontSize: 18, color: 'var(--teal)', margin: '0 0 8px' }}>
              Request sent!
            </h3>
            <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 14, color: 'rgba(7,59,76,0.5)', margin: '0 0 24px' }}>
              We&rsquo;ll reach out to you shortly.
            </p>
            <button onClick={onClose} className="btn-cta-sm">
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={labelStyle} htmlFor="demo-name">Name *</label>
                <input
                  ref={nameRef}
                  id="demo-name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Your full name"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#15EAAD'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(7,59,76,0.15)'; }}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="demo-property">Property / Company</label>
                <input
                  id="demo-property"
                  type="text"
                  value={property}
                  onChange={(e) => setProperty(e.target.value)}
                  placeholder="e.g. Al Sayyah Group, 20 units"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#15EAAD'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(7,59,76,0.15)'; }}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="demo-email">Email *</label>
                <input
                  id="demo-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="you@example.com"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#15EAAD'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(7,59,76,0.15)'; }}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="demo-phone">Phone</label>
                <input
                  id="demo-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+971 50 000 0000"
                  style={inputStyle}
                  onFocus={(e) => { e.currentTarget.style.borderColor = '#15EAAD'; }}
                  onBlur={(e) => { e.currentTarget.style.borderColor = 'rgba(7,59,76,0.15)'; }}
                />
              </div>
            </div>

            {status === 'error' && (
              <p style={{ fontFamily: 'var(--font-manrope)', fontSize: 13, color: '#dc2626', marginTop: 12, marginBottom: 0 }}>
                Something went wrong. Please try again or email us at{' '}
                <a href="mailto:alliance@ternrewards.com" style={{ color: '#dc2626' }}>alliance@ternrewards.com</a>.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-cta"
              style={{ width: '100%', marginTop: 24, opacity: status === 'loading' ? 0.7 : 1 }}
            >
              {status === 'loading' ? 'Sending…' : 'Send request'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
