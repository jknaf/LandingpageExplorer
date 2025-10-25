import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProcessSection from "@/components/ProcessSection";
import TrustSection from "@/components/TrustSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <BenefitsSection />
        <ProcessSection />
        <TrustSection />
        <FAQSection />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
