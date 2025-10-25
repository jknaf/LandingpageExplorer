import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Wie lange dauert die Analyse?",
    answer: "Die initiale Analyse erfolgt automatisch innerhalb weniger Minuten. Den detaillierten Bericht mit konkreten Handlungsempfehlungen erhältst du innerhalb von 24 Stunden per E-Mail."
  },
  {
    question: "Welche Daten werden analysiert?",
    answer: "Wir analysieren öffentlich zugängliche Informationen deiner Website, wie Struktur, Inhalte und User Experience. Es werden keine personenbezogenen Daten von Besuchern verarbeitet."
  },
  {
    question: "Ist die Analyse wirklich kostenlos?",
    answer: "Ja, die Erst-Analyse ist vollständig kostenlos und unverbindlich. Du erhältst einen umfassenden Überblick über KI-Potenziale in deinem Unternehmen ohne versteckte Kosten."
  },
  {
    question: "Was passiert nach der Analyse?",
    answer: "Du erhältst einen detaillierten Bericht mit konkreten Maßnahmenempfehlungen. Ob und wie du diese umsetzt, entscheidest du. Auf Wunsch unterstützen wir bei der Implementierung."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold mb-4">
              Häufige Fragen
            </h2>
            <p className="text-muted-foreground">
              Alles, was du über unsere KI-Analyse wissen musst.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
