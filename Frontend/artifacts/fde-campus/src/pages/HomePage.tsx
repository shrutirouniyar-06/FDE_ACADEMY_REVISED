import { Hero } from '@/components/sections/Hero';
import { Stats } from '@/components/sections/Stats';
import { WhyFDE } from '@/components/sections/WhyFDE';
import { Framework } from '@/components/sections/Framework';
import { WhatIsFDE } from '@/components/sections/WhatIsFDE';
import { IndustryChallenge } from '@/components/sections/IndustryChallenge';
import { CareerProgression } from '@/components/sections/CareerProgression';
import { ProgramsSection } from '@/components/sections/Programs';
import { ProgramComparison } from '@/components/sections/ProgramComparison';
import { Curriculum } from '@/components/sections/Curriculum';
import { CapabilityPillars } from '@/components/sections/CapabilityPillars';
import { LearningActivities } from '@/components/sections/LearningActivities';
import { Mentors } from '@/components/sections/Mentors';
import { LearningTimeline } from '@/components/sections/LearningTimeline';
import { EnterpriseProjects } from '@/components/sections/EnterpriseProjects';
import { CareerRoadmaps } from '@/components/sections/CareerRoadmaps';
import { SalaryGrowth } from '@/components/sections/SalaryGrowth';
import { SuccessStories } from '@/components/sections/SuccessStories';
import { Certification } from '@/components/sections/Certification';
import { FAQ } from '@/components/sections/FAQ';
import { BlogPreview } from '@/components/sections/BlogPreview';
import { EventsPreview } from '@/components/sections/EventsPreview';
import { ContactSection } from '@/components/sections/ContactSection';
import { SignatureActivities } from '@/components/sections/SignatureActivities';
import { BusinessImpact } from '@/components/sections/BusinessImpact';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
export function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <WhyFDE />
        <Framework />
        <WhatIsFDE />
        <IndustryChallenge />
        <CareerProgression />
        <ProgramsSection />
        <ProgramComparison />
        <Curriculum />
        <SignatureActivities />
        <BusinessImpact />
        <CapabilityPillars />
        <LearningActivities />
        <Mentors />
        <LearningTimeline />
        <EnterpriseProjects />
        <CareerRoadmaps />
        <SalaryGrowth />
        <SuccessStories />
        <Certification />
        <FAQ />
        <BlogPreview />
        <EventsPreview />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
