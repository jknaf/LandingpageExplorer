export default function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-8 md:px-8">
        <div className="flex flex-col items-center justify-center gap-4 text-center text-sm text-muted-foreground md:flex-row md:justify-between">
          <p>© 2025 KI-Potenzial. Alle Rechte vorbehalten.</p>
          <div className="flex gap-6">
            <a 
              href="#impressum" 
              className="hover:text-foreground transition-colors"
              data-testid="link-impressum"
            >
              Impressum
            </a>
            <a 
              href="#datenschutz" 
              className="hover:text-foreground transition-colors"
              data-testid="link-datenschutz"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
