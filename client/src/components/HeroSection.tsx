import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import heroImage from "@assets/generated_images/AI_technology_geometric_visualization_9f477308.png";

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export default function HeroSection() {
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!consent) {
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('https://trkmuc.app.n8n.cloud/webhook/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Auth': 's_AjvdzQMy7EMQM-'
        },
        body: JSON.stringify({
          url: url.trim(),
          email: email.trim()
        })
      });

      if (response.ok) {
        setStatus('success');
        setUrl("");
        setEmail("");
        setConsent(false);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="container mx-auto px-4 py-16 md:py-24 md:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Erkunde dein KI-Potenzial.
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Kostenlose Analyse: Wo KI in deinem Unternehmen Produktivität, Qualität oder Effizienz steigert.
            </p>
          </div>

          <div id="analysis-form" className="bg-card border border-card-border rounded-lg p-8 shadow-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="url">Website-URL *</Label>
                <Input
                  id="url"
                  type="url"
                  required
                  placeholder="https://deine-website.de"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  disabled={status === 'loading'}
                  data-testid="input-url"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-Mail *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="name@unternehmen.de"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={status === 'loading'}
                  data-testid="input-email"
                />
              </div>

              <div className="flex items-start gap-2">
                <Checkbox
                  id="consent"
                  required
                  checked={consent}
                  onCheckedChange={(checked) => setConsent(checked as boolean)}
                  disabled={status === 'loading'}
                  data-testid="checkbox-consent"
                />
                <Label htmlFor="consent" className="text-sm font-normal leading-relaxed cursor-pointer">
                  Ich stimme der Analyse gemäß Datenschutzhinweis zu.
                </Label>
              </div>

              {status === 'success' && (
                <Alert className="border-green-500 bg-green-50 dark:bg-green-950">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800 dark:text-green-200" data-testid="text-success">
                    Analyse gestartet! Wir melden uns in Kürze.
                  </AlertDescription>
                </Alert>
              )}

              {status === 'error' && (
                <Alert className="border-destructive bg-destructive/10">
                  <AlertCircle className="h-4 w-4 text-destructive" />
                  <AlertDescription className="text-destructive" data-testid="text-error">
                    Übermittlung fehlgeschlagen. Bitte versuche es erneut.
                  </AlertDescription>
                </Alert>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={status === 'loading' || !consent}
                data-testid="button-submit"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Senden…
                  </>
                ) : (
                  'Kostenlose Analyse starten'
                )}
              </Button>
            </form>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end order-first lg:order-last">
          <img 
            src={heroImage} 
            alt="KI Technologie Visualisierung" 
            className="w-full max-w-md rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
