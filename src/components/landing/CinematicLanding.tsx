import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { SolutionRouter } from "@/components/landing/SolutionRouter";
import { WorkShowcase } from "@/components/landing/WorkShowcase";
import { AtriaIntroSection } from "@/components/landing/AtriaIntroSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { DemoLabSection } from "@/components/landing/DemoLabSection";
import { OnlinePresenceSection } from "@/components/landing/OnlinePresenceSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { EnsuenoEventosSection } from "@/components/landing/EnsuenoEventosSection";
import { EnsuenoPOSSection } from "@/components/landing/EnsuenoPOSSection";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FaqSection } from "@/components/landing/FAQSection";
import { StudioSection } from "@/components/landing/StudioSection";
import { ContactSection } from "@/components/landing/ContactSection";
import { AtriaScrollExperience } from "@/components/motion/AtriaScrollExperience";

export function CinematicLanding() {
  return (
    <div className="atria-landing min-h-screen overflow-clip bg-[var(--atria-page)] text-[var(--atria-ink)]">
      <Header />
      <main>
        <HeroSection />
        <SolutionRouter />
        <WorkShowcase />
        <AtriaIntroSection />
        <ServicesSection />
        <DemoLabSection />
        <OnlinePresenceSection />
        <AtriaScrollExperience />
        <EnsuenoEventosSection />
        <EnsuenoPOSSection />
        <AudienceSection />
        <ProcessSection />
        <PackagesSection />
        <FaqSection />
        <StudioSection />
        <ContactSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
