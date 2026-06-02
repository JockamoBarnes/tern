import FaqAccordion from '@/components/faq/FaqAccordion';

export const metadata = {
  title: 'Resources — Tern',
  description: 'Answers to common questions about paying rent with Tern.',
};

export default function FaqPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ background: 'var(--teal)', position: 'relative', overflow: 'hidden' }}>
        {/* Decorative blobs — matches hero section treatment */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(21,234,173,0.14) 0%, transparent 65%)', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(77,182,206,0.1) 0%, transparent 65%)', filter: 'blur(70px)', pointerEvents: 'none' }} />

        <div
          className="mx-auto px-6 md:px-12 pt-28 md:pt-40 pb-16 md:pb-20"
          style={{ maxWidth: 1200, position: 'relative', zIndex: 1 }}
        >
          <h1
            style={{
              fontFamily: 'var(--font-unbounded)',
              fontWeight: 700,
              fontSize: 'clamp(32px, 4vw, 56px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              background: 'var(--grad-head)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: 24,
            }}
          >
            Resources
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-manrope)',
              fontWeight: 400,
              fontSize: 16,
              lineHeight: 1.65,
              color: 'rgba(238,247,248,0.65)',
              maxWidth: 480,
              margin: 0,
            }}
          >
            Everything you need to know about paying rent with Tern. Can&apos;t find what you&apos;re looking for?{' '}
            <a
              href="mailto:hello@ternrewards.com"
              style={{ color: 'var(--mint)', textDecoration: 'underline', textUnderlineOffset: 3 }}
            >
              Get in touch.
            </a>
          </p>
        </div>
      </section>

      {/* FAQ body */}
      <section style={{ background: 'linear-gradient(to bottom, #ffffff 0%, #ffffff 80%, #D0FBEF 100%)' }}>
        <div
          className="mx-auto px-6 md:px-12 py-16 md:py-20"
          style={{ maxWidth: 1200 }}
        >
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
