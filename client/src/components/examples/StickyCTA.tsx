import StickyCTA from '../StickyCTA';

export default function StickyCTAExample() {
  return (
    <div className="h-[200vh] relative">
      <div className="sticky top-0 h-screen flex items-center justify-center bg-muted/30">
        <p className="text-muted-foreground">Scroll down to see the sticky CTA appear</p>
      </div>
      <StickyCTA />
    </div>
  );
}
