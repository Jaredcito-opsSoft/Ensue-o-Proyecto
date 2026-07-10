import { BenefitsSection } from "@/components/landing/BenefitsSection";
import { DemoPreviewSection } from "@/components/landing/DemoPreviewSection";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { HeroSection } from "@/components/landing/HeroSection";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { SignalTickerSection } from "@/components/landing/SignalTickerSection";
import { SolutionSection } from "@/components/landing/SolutionSection";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <SignalTickerSection />
      <ProblemSection />
      <SolutionSection />
      <BenefitsSection />
      <DemoPreviewSection />
      <PackagesSection />
      <ProcessSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
