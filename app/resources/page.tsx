import FaqAccordion from '@/components/faq/FaqAccordion';

export const metadata = {
  title: 'Resources — Tern',
  description: 'Answers to common questions about paying rent with Tern.',
};

export default function FaqPage() {
  return (
    <>
      {/* Page header */}
      <section style={{ background: 'var(--teal)' }}>
        <div
          className="mx-auto px-6 md:px-12 pt-40 pb-20"
          style={{ maxWidth: 1200 }}
        >
          <p
            className="text-sm font-semibold uppercase tracking-widest mb-4"
            style={{ color: 'var(--mint)' }}
          >
            Help
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{
              fontFamily: 'var(--font-unbounded)',
              background: 'var(--grad-head)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            Frequently asked<br />questions.
          </h1>
          <p
            className="mt-6 text-base leading-relaxed max-w-xl"
            style={{ color: 'rgba(238,247,248,0.65)' }}
          >
            Everything you need to know about paying rent with Tern. Can't find what you're looking for?{' '}
            <a
              href="mailto:hello@tern.app"
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
          className="mx-auto px-6 md:px-12 py-20"
          style={{ maxWidth: 1200 }}
        >
          <FaqAccordion />
        </div>
      </section>
    </>
  );
}
