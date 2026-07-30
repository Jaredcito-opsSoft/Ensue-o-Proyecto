import { Header } from "@/components/landing/Header";
import { HeroSection } from "@/components/landing/HeroSection";
import { AtriaIntroSection } from "@/components/landing/AtriaIntroSection";
import { ProblemsSection } from "@/components/landing/ProblemsSection";
import { ServicesSection } from "@/components/landing/ServicesSection";
import { AudienceSection } from "@/components/landing/AudienceSection";
import { DemoPreviewSection } from "@/components/landing/DemoPreviewSection";
import { EnsuenoEventosSection } from "@/components/landing/EnsuenoEventosSection";
import { EnsuenoPOSSection } from "@/components/landing/EnsuenoPOSSection";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { AtriaScrollExperience } from "@/components/motion/AtriaScrollExperience";

export function CinematicLanding() {
  return (
    <div className="atria-landing min-h-screen overflow-clip bg-[var(--atria-page)] text-[var(--atria-ink)]">
      <Header />
      <main>
        <HeroSection />
        <AtriaIntroSection />
        <ProblemsSection />
        <ServicesSection />
        <AudienceSection />
        <AtriaScrollExperience />
        <DemoPreviewSection />
        <EnsuenoEventosSection />
        <EnsuenoPOSSection />
        <ProcessSection />
        <PackagesSection />
        <FinalCTASection />
      </main>
    </div>
  );
}
