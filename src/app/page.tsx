import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ValueProposition } from "@/components/sections/ValueProposition";
import { WhyStorge } from "@/components/sections/WhyStorge";
import { ProfessionalBanner } from "@/components/sections/ProfessionalBanner";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { CTASection } from "@/components/sections/CTASection";
import { StepsSection } from "@/components/sections/StepsSection";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-storge-primary/30">
      <Navbar />
      
      <div className="flex flex-col">
        <HeroSection />
        
        <StepsSection />
        
        <ValueProposition />
        
        <WhyStorge />
        
        <ProfessionalBanner />
        
        <ServicesGrid />
        
        <CTASection />
      </div>

      <Footer />
    </main>
  );
}
