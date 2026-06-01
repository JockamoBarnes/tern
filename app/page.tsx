import HeroSection from '@/components/home/HeroSection';
import SocialProofSection from '@/components/landlords/SocialProofSection';
import ProvocationSection from '@/components/home/ProvocationSection';
import RewardsCalculator from '@/components/home/RewardsCalculator';
import ExperiencesSection from '@/components/home/ExperiencesSection';
import HowItWorksSection from '@/components/home/HowItWorksSection';
import ComparisonSection from '@/components/home/ComparisonSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
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
