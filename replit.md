# AI Potential Analysis Landing Page

## Overview

A German-language landing page that offers a free AI potential analysis for businesses. The application collects website URLs and email addresses through a form, then submits this data to an external webhook service for analysis. Built with React, TypeScript, and shadcn/ui components, the page features a modern B2B SaaS aesthetic with sections highlighting benefits, process steps, trust indicators, and FAQs.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework**: React 18 with TypeScript in a single-page application (SPA) architecture using Wouter for client-side routing.

**Component Library**: shadcn/ui (New York style) - A collection of re-usable components built on Radix UI primitives with Tailwind CSS styling. Components are copied into the project rather than installed as dependencies, allowing for full customization.

**Styling Approach**: 
- Tailwind CSS with custom CSS variables for theming
- Design system based on an 8-point grid spacing system
- Custom color palette with HSL values for light/dark mode support
- Typography using Source Sans Pro from Google Fonts
- Design guidelines specify modern B2B SaaS aesthetic with focus on trust and clarity

**State Management**: 
- React Query (@tanstack/react-query) for server state management
- React hooks for local component state
- Form state managed with react-hook-form and validation via @hookform/resolvers with Zod schemas

**Build System**: 
- Vite as the build tool and development server
- TypeScript compilation with path aliases (@/, @shared/, @assets/)
- Separate client and server builds with esbuild for server bundling

### Backend Architecture

**Server**: Express.js running on Node.js with TypeScript.

**API Design**: RESTful API structure with routes prefixed by `/api`. Currently minimal backend implementation with a storage interface pattern for future database integration.

**Session Management**: Configured with connect-pg-simple for PostgreSQL session storage (though not actively used in current implementation).

**Development Features**:
- Hot module replacement (HMR) via Vite in development
- Request logging middleware that captures API calls with duration and response data
- Replit-specific development plugins for error overlay and debugging

### Data Storage

**Database ORM**: Drizzle ORM configured for PostgreSQL with schema definitions in shared/schema.ts.

**Current Schema**: Basic user table with id, username, and password fields. The schema uses Drizzle-Zod integration for runtime validation.

**Storage Pattern**: Abstracted storage interface (IStorage) with a temporary in-memory implementation (MemStorage) for development. Designed to be swapped with database-backed implementation when needed.

**Database Provider**: Configured for Neon Database (@neondatabase/serverless) via DATABASE_URL environment variable.

### External Dependencies

**Webhook Integration**: Form submissions POST to `https://trkmuc.app.n8n.cloud/webhook/data` with custom authentication header (`Auth: s_AjvdzQMy7EMQM-`). Sends JSON payload containing website URL and email address.

**UI Component Library**: Radix UI primitives for accessible, unstyled components including:
- Accordion, Alert Dialog, Avatar, Checkbox, Dialog, Dropdown Menu
- Form controls (Input, Select, Radio, Switch)
- Navigation components (Tabs, Tooltip, Navigation Menu)
- Layout components (Scroll Area, Separator, Card)

**Google Fonts**: Source Sans Pro font family loaded from Google Fonts CDN with weights 300, 400, 600, and 700.

**Utility Libraries**:
- clsx and tailwind-merge (via cn utility) for conditional class composition
- class-variance-authority for variant-based component styling
- date-fns for date formatting
- lucide-react for icons
- nanoid for unique ID generation

**Development Tools**:
- Replit-specific Vite plugins (@replit/vite-plugin-runtime-error-modal, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner)
- TypeScript for type safety across client and server
- drizzle-kit for database migrations