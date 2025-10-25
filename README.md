# KI-Potenzial Landing Page

Eine responsive Landing Page zur kostenlosen KI-Potenzial-Analyse für Unternehmen.

## Überblick

Diese Landing Page bietet Unternehmen eine kostenlose Erst-Analyse ihrer KI-Potenziale. Besucher können ihre Website-URL und E-Mail-Adresse eingeben, um eine automatische Analyse zu erhalten.

## Technologie-Stack

- **Frontend**: React, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js (Node.js)
- **Schriftart**: Source Sans Pro (Google Fonts)
- **Design-System**: 8-Punkt-Grid, CSS-Variablen für Farben

## Features

- ✅ Responsive Design (Mobile-First)
- ✅ Formular mit Client-seitiger Validierung
- ✅ Integration mit n8n-Webhook
- ✅ UI-Zustände: Laden, Erfolg, Fehler
- ✅ DSGVO-konforme Einwilligung
- ✅ Sticky CTA-Button für Mobile
- ✅ Accessibility-Features (ARIA-Labels, Tastaturnavigation)
- ✅ SEO-optimiert (Meta-Tags, semantisches HTML)

## Formular-Integration

Das Formular sammelt Website-URL und E-Mail-Adresse und sendet diese Daten an einen n8n-Webhook zur weiteren Verarbeitung.

### Webhook-Konfiguration

Die Webhook-Integration erfolgt über einen Backend-Proxy, um CORS-Probleme zu vermeiden:

**Backend-Proxy-Route**: `/api/submit-analysis`

**Ziel-Webhook**:
- URL: `https://trkmuc.app.n8n.cloud/webhook/data`
- Methode: `POST`
- Header: 
  - `Content-Type: application/json`
  - `Auth: s_AjvdzQMy7EMQM-`
- Body:
  ```json
  {
    "url": "<Website-URL>",
    "email": "<E-Mail-Adresse>"
  }
  ```

**Wichtig**: Stelle sicher, dass dein n8n-Webhook aktiv ist und die URL korrekt konfiguriert ist. Wenn der Webhook einen Fehler zurückgibt, zeigt die Landing Page automatisch die Fehlermeldung "Übermittlung fehlgeschlagen" an.

**Test der Integration**:
```bash
# Teste den Backend-Proxy
curl -X POST http://localhost:5000/api/submit-analysis \
  -H "Content-Type: application/json" \
  -d '{"url":"https://test.com","email":"test@test.com"}'
```

Wenn dein n8n-Webhook korrekt konfiguriert ist, sollte die Anfrage erfolgreich sein.

### Webhook-URL oder Auth-Header ändern

Um die Webhook-URL oder den Authentication-Header zu ändern, bearbeite die Datei `server/routes.ts`:

```typescript
// Zeile ~16: Webhook-URL ändern
const response = await fetch('DEINE_NEUE_WEBHOOK_URL', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Auth': 'DEIN_NEUER_AUTH_HEADER'  // Zeile ~19: Auth-Header ändern
  },
  // ...
});
```

### Alternative: Direkte Webhook-Anbindung

Wenn dein n8n-Webhook CORS-Header korrekt konfiguriert hat, kannst du die direkte Anbindung nutzen:

1. Bearbeite `client/src/components/HeroSection.tsx`
2. Ändere die fetch-URL von `/api/submit-analysis` zurück auf `https://trkmuc.app.n8n.cloud/webhook/data`
3. Füge die Header `Content-Type` und `Auth` wieder hinzu

## Design-Anpassungen

### Farben ändern

Farben sind als CSS-Variablen in `client/src/index.css` definiert:

```css
:root {
  --primary: 212 100% 52%;        /* Hauptfarbe (Blau) */
  --destructive: 4 90% 58%;       /* Fehlerfarbe (Rot) */
  /* Weitere Farben... */
}
```

Die Farbwerte verwenden das HSL-Format (Hue Saturation Lightness).

### Spacing ändern

Das Design basiert auf einem 8-Punkt-Grid. Standard-Abstände sind in Tailwind-Klassen definiert:
- `p-4` = 16px (1rem)
- `p-8` = 32px (2rem)
- `p-16` = 64px (4rem)

### Typografie anpassen

Die Schriftfamilie ist in `client/index.html` und `client/src/index.css` definiert:

```html
<!-- Google Fonts Link in index.html -->
<link href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700&display=swap">
```

```css
/* CSS-Variable in index.css */
--font-sans: Source Sans Pro, Open Sans, sans-serif;
```

## Inhalte anpassen

### Texte ändern

Die meisten Inhalte befinden sich in den React-Komponenten im Ordner `client/src/components/`:

- **Hero-Bereich**: `HeroSection.tsx`
- **Nutzen-Karten**: `BenefitsSection.tsx`
- **Prozess-Schritte**: `ProcessSection.tsx`
- **FAQ**: `FAQSection.tsx`

### Meta-Tags für SEO

Meta-Tags befinden sich in `client/index.html`:

```html
<title>Erkunde dein KI-Potenzial - Kostenlose AI-Analyse</title>
<meta name="description" content="...">
```

## Projekt starten

```bash
# Installation
npm install

# Entwicklungsserver starten
npm run dev
```

Die Anwendung läuft auf Port 5000: `http://localhost:5000`

## Deployment

Die Seite kann auf jedem Node.js-Host deployed werden. Für Produktions-Deployment:

```bash
# Build erstellen
npm run build

# Produktionsserver starten
npm start
```

## Projektstruktur

```
├── client/                    # Frontend-Code
│   ├── src/
│   │   ├── components/       # React-Komponenten
│   │   ├── pages/            # Seiten-Komponenten
│   │   ├── index.css         # Globale Styles & CSS-Variablen
│   │   └── App.tsx           # Haupt-App-Komponente
│   └── index.html            # HTML-Template
├── server/                    # Backend-Code
│   ├── routes.ts             # API-Routes (inkl. Webhook-Proxy)
│   └── index.ts              # Express-Server
└── README.md                 # Diese Datei
```

## Support & Anpassungen

Bei Fragen oder für weitere Anpassungen, konsultiere die Komponenten-Dokumentation oder die Tailwind CSS / React-Dokumentation.

## Lizenz

Alle Rechte vorbehalten © 2025
