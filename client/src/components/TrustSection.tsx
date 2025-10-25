import { Shield, Lock, RotateCcw } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    text: "DSGVO-konforme Verarbeitung"
  },
  {
    icon: Lock,
    text: "Sichere Datenübertragung"
  },
  {
    icon: RotateCcw,
    text: "Jederzeit widerrufbar"
  }
];

export default function TrustSection() {
  return (
    <section className="bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-center text-xl font-semibold mb-8">
            Deine Daten sind bei uns sicher
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {trustItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-3 justify-center"
                  data-testid={`trust-item-${index}`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
