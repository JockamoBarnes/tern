import type { Metadata } from 'next';
import LandlordHeroSection from '@/components/landlords/HeroSection';
import MechanismSection from '@/components/landlords/MechanismSection';
import FiveGainsSection from '@/components/landlords/FiveGainsSection';
import PortalSection from '@/components/landlords/PortalSection';
import SocialProofSection from '@/components/landlords/SocialProofSection';
import CaseStudiesSection from '@/components/landlords/CaseStudiesSection';
import HowToJoinSection from '@/components/landlords/HowToJoinSection';
import LandlordFinalCtaSection from '@/components/landlords/FinalCtaSection';

export const metadata: Metadata = {
  title: 'The Tern Alliance — For Landlords & Property Managers | Tern',
  description:
    'Free rent payment and rewards platform for landlords and property managers. Fewer delays, less admin, better yield — at zero cost.',
};

export default function LandlordsPage() {
  return (
    <div style={{ background: 'var(--light)', position: 'relative' }}>
      <LandlordHeroSection />
      <SocialProofSection showStats />
      <MechanismSection />
      <FiveGainsSection />
      <PortalSection />
      <CaseStudiesSection />
      <HowToJoinSection />
      <LandlordFinalCtaSection />
    </div>
  );
}
