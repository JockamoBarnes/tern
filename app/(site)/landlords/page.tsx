import type { Metadata } from 'next';
import LandlordHeroSection from '@/components/landlords/HeroSection';
import MechanismSection from '@/components/landlords/MechanismSection';
import FiveGainsSection from '@/components/landlords/FiveGainsSection';
import PortalSection from '@/components/landlords/PortalSection';
import SocialProofSection from '@/components/landlords/SocialProofSection';
import HowToJoinSection from '@/components/landlords/HowToJoinSection';
import LandlordFinalCtaSection from '@/components/landlords/FinalCtaSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Free Rent Payment Platform for UAE Landlords & Property Managers | Tern',
  },
  description:
    'Tern is free for UAE landlords. Receive 100% of rent on the due date, reduce late payments by 40%, and earn on instalment requests — with zero admin overhead. Book a demo.',
  alternates: {
    canonical: '/landlords',
  },
  openGraph: {
    type: 'website',
    url: '/landlords',
    title: 'Free Rent Payment Platform for UAE Landlords & Property Managers | Tern',
    description:
      'Tern is free for UAE landlords. Receive 100% of rent on time, reduce late payments, and earn on instalment requests — zero fees, zero admin.',
    images: [
      {
        url: '/og/og-landlords.jpg',
        width: 1200,
        height: 630,
        alt: 'Tern Alliance — rent payment platform for UAE landlords and property managers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Rent Payment Platform for UAE Landlords & Property Managers | Tern',
    description:
      'Tern is free for UAE landlords. Receive 100% of rent on time, reduce late payments, and earn on instalment requests — zero fees, zero admin.',
    images: [
      {
        url: 'https://ternrewards.com/og/og-landlords.jpg',
        alt: 'Tern Alliance — rent payment platform for UAE landlords and property managers',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Tern Alliance — Landlord & Property Manager Platform',
  description:
    'A free rent payment and rewards platform for UAE landlords and property managers. Receive 100% of rent on the due date, reduce late payments, and access a live portfolio dashboard.',
  provider: {
    '@type': 'Organization',
    name: 'Tern',
    url: 'https://ternrewards.com',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AED',
    description: 'Free for landlords and property managers',
  },
};

export default function LandlordsPage() {
  return (
    <div style={{ background: 'var(--light)', position: 'relative' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <LandlordHeroSection />
      <SocialProofSection showStats />
      <MechanismSection />
      <FiveGainsSection />
      <PortalSection />
      <HowToJoinSection />
      <LandlordFinalCtaSection />
    </div>
  );
}
