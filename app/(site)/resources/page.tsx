import FaqAccordion from '@/components/faq/FaqAccordion';

export const metadata = {
  title: {
    absolute: 'How Tern Works — Rent Rewards, Fees & Setup FAQs | UAE',
  },
  description:
    'Everything about paying UAE rent with Tern: how rewards work, what it costs (nothing), which cards are accepted, and how to get started in under 2 minutes.',
  alternates: {
    canonical: '/resources',
  },
  openGraph: {
    type: 'website',
    url: '/resources',
    title: 'How Tern Works — Rent Rewards, Fees & Setup FAQs',
    description:
      'Everything about paying UAE rent with Tern: how rewards work, what it costs (nothing), which cards are accepted, and how to get started in under 2 minutes.',
    images: [
      {
        url: '/og/og-resources.jpg',
        width: 1200,
        height: 630,
        alt: 'Tern FAQ — how rent rewards work in the UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How Tern Works — Rent Rewards, Fees & Setup FAQs',
    description:
      'Everything about paying UAE rent with Tern: how rewards work, what it costs (nothing), which cards are accepted, and how to get started in under 2 minutes.',
    images: [
      {
        url: 'https://ternrewards.com/og/og-resources.jpg',
        alt: 'Tern FAQ — how rent rewards work in the UAE',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Can I pay rent with a credit card in the UAE?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Tern lets UAE residents pay rent by credit card with zero fees. Your landlord receives 100% of rent on the due date — nothing changes for them.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does Tern charge fees for paying rent?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. Tern is completely free for tenants. There are no processing fees, no hidden charges. If your rent is AED 5,000, you pay AED 5,000.',
      },
    },
    {
      '@type': 'Question',
      name: 'What rewards do I earn paying rent with Tern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Two layers. Your credit card pays its normal rewards — miles, points, or cashback — as it would on any purchase. On top of that, you earn Tern points: 1 point per AED 7 in rent, redeemable at 200+ UAE merchants or as rent cashback.',
      },
    },
    {
      '@type': 'Question',
      name: 'Does my landlord need to approve Tern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No. If you have a valid tenancy contract (Ejari), you can set up Tern independently. Your landlord does not need to do anything.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which credit cards work with Tern?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'All UAE-issued Visa and Mastercard credit cards. Tern does not currently support international cards, debit cards, or Amex.',
      },
    },
    {
      '@type': 'Question',
      name: 'Is Tern regulated?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Yes. Tern operates under the Dubai Land Department's REES program. Payments are processed by Paymob, licensed by the UAE Central Bank, under PCI DSS compliance.",
      },
    },
  ],
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
