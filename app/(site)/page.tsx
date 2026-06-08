import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/landlords/SocialProofSection';
import ProvocationSection from '@/components/home/ProvocationSection';
import RewardsCalculator from '@/components/home/RewardsCalculator';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export const metadata: Metadata = {
  title: {
    absolute: 'Pay Rent with Your Credit Card & Earn Rewards | Tern',
  },
  description:
    'Tern lets UAE residents pay rent by credit card, earn miles, points or cashback — with zero fees. Your landlord receives 100% of rent on time. No approval needed.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Pay Rent with Your Credit Card & Earn Rewards | Tern',
    description:
      "The UAE's rent rewards platform. Pay by credit card, earn miles or cashback on every payment — at zero cost to you or your landlord.",
    images: [
      {
        url: '/og/og-homepage.jpg',
        width: 1200,
        height: 630,
        alt: 'Tern — Pay rent with your credit card and earn rewards',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pay Rent with Your Credit Card & Earn Rewards | Tern',
    description:
      "The UAE's rent rewards platform. Pay by credit card, earn miles or cashback on every payment — at zero cost to you or your landlord.",
    images: [
      {
        url: 'https://ternrewards.com/og/og-homepage.jpg',
        alt: 'Tern — Pay rent with your credit card and earn rewards',
      },
    ],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Tern',
  description:
    'Tern lets UAE residents pay rent by credit card and earn rewards — miles, points or cashback — with zero fees.',
  url: 'https://ternrewards.com',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'iOS, Android',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'AED',
  },
  areaServed: {
    '@type': 'Country',
    name: 'United Arab Emirates',
  },
  sameAs: [
    'https://instagram.com/tern.app',
    'https://linkedin.com/company/tern-app',
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <SocialProofSection centered />
      <ProvocationSection />
      <ExperiencesSection />
      <RewardsCalculator />
      <ComparisonSection />
      <HowItWorksSection />
      <FinalCtaSection />
    </>
  );
}
