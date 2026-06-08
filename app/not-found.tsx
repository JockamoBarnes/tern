import type { Metadata } from 'next';
import Link from 'next/link';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import ScrollRevealProvider from '@/components/ScrollRevealProvider';

export const metadata: Metadata = {
  title: { absolute: 'Page Not Found | Tern' },
};

export default function NotFound() {
  return (
    <>
      <Nav />
      <ScrollRevealProvider />
      <main className="flex-1">
    <section
      style={{
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 'clamp(80px, 15vw, 140px) clamp(24px, 6vw, 48px)',
        position: 'relative',
        overflow: 'hidden',
        background: 'var(--teal)',
      }}
    >
      {/* Ambient blobs */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.14) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.1) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

      <div style={{ position: 'relative', zIndex: 1, maxWidth: 520 }}>
        {/* Large 404 */}
        <p
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(80px, 18vw, 160px)',
            lineHeight: 1,
            letterSpacing: '-0.04em',
            color: 'rgba(21,234,173,0.18)',
            margin: '0 0 -20px',
            userSelect: 'none',
          }}
          aria-hidden="true"
        >
          404
        </p>

        <h1
          style={{
            fontFamily: 'var(--font-unbounded)',
            fontWeight: 700,
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.1,
            letterSpacing: '-0.02em',
            background: 'var(--grad-head)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            margin: '0 0 16px',
          }}
        >
          Page not found
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-manrope)',
            fontSize: 16,
            lineHeight: 1.65,
            color: 'rgba(238,247,248,0.55)',
            margin: '0 0 40px',
          }}
        >
          The page you&rsquo;re looking for doesn&rsquo;t exist or has moved.
        </p>

        <Link href="/" className="btn-cta">
          Back to home
        </Link>
      </div>
    </section>
      </main>
      <Footer />
    </>
  );
}
