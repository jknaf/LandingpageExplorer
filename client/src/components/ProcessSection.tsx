import { Globe, Brain, FileText } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: Globe,
    title: "Website senden",
    description: "Teile uns die URL deiner Website mit"
  },
  {
    number: "2",
    icon: Brain,
    title: "KI-Analyse",
    description: "Unsere KI analysiert Potenziale und Möglichkeiten"
  },
  {
    number: "3",
    icon: FileText,
    title: "Maßnahmen & Slides",
    description: "Erhalte konkrete Handlungsempfehlungen"
  }
];

export default function ProcessSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            So funktioniert's
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            In drei einfachen Schritten zu deinem KI-Potenzial-Bericht.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative" data-testid={`step-${index}`}>
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="relative">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                      {step.number}
                    </div>
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute left-full top-1/2 w-full h-0.5 bg-border" 
                        style={{ transform: 'translateY(-50%)' }} 
                      />
                    )}
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted">
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
