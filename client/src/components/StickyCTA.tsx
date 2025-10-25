import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('analysis-form');
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setIsVisible(heroBottom < 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToForm = () => {
    const formSection = document.getElementById('analysis-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden p-4 bg-gradient-to-t from-background via-background to-transparent">
      <Button 
        onClick={scrollToForm}
        className="w-full shadow-lg"
        size="lg"
        data-testid="button-sticky-cta"
      >
        <ChevronUp className="mr-2 h-4 w-4" />
        Jetzt kostenlos analysieren
      </Button>
    </div>
  );
}
