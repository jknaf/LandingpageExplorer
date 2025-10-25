import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Award, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Produktivität",
    points: [
      "Automatisierung wiederkehrender Aufgaben",
      "Zeitersparnis durch intelligente Prozesse"
    ]
  },
  {
    icon: Award,
    title: "Qualität",
    points: [
      "Fehlerreduktion durch KI-gestützte Prüfung",
      "Konsistente Ergebnisse auf hohem Niveau"
    ]
  },
  {
    icon: TrendingUp,
    title: "Effizienz",
    points: [
      "Optimierung von Ressourcen und Kosten",
      "Datenbasierte Entscheidungsfindung"
    ]
  }
];

export default function BenefitsSection() {
  return (
    <section className="bg-muted/30 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold mb-4">
            KI-Potenziale in deinem Unternehmen
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entdecke konkrete Ansatzpunkte, wo künstliche Intelligenz deinen Betrieb voranbringt.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <Card key={index} className="hover-elevate" data-testid={`card-benefit-${index}`}>
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {benefit.points.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
