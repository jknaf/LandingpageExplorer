# Design Guidelines: AI Potential Analysis Landing Page

## Design Approach
**Reference-Based Approach**: Modern B2B SaaS aesthetic inspired by clean, professional platforms with focus on trust and clarity. The design should feel calm, professional, and conversion-focused with clear hierarchy and generous whitespace.

## Typography System
**Font Family**: Source Sans Pro (Google Fonts)
- H1: 48px / Bold / Line height 1.2
- H2: 36px / Semibold / Line height 1.3
- H3: 28px / Semibold / Line height 1.4
- H4: 20px / Medium / Line height 1.5
- H5: 16px / Medium / Line height 1.5
- Body: 16px / Regular / Line height 1.6
- Small: 14px / Regular / Line height 1.5

Clear hierarchy with large H1 for hero section, ensuring excellent readability across all devices.

## Color System (CSS Variables)
```
--color-primary: #0A84FF (vibrant blue)
--color-primary-hover: #0F6FE5 (darker blue)
--color-accent: #00C853 (success green)
--color-danger: #E53935 (error red)
--color-gray-0: #F5F7FA (lightest background)
--color-gray-3: #D7DEE6 (borders)
--color-gray-6: #8A95A3 (secondary text)
--color-gray-9: #212529 (primary text)
```

## Spacing System
**8-Point Grid**: All spacing uses multiples of 8px (8, 16, 24, 32, 40, 48, 64, 80)
- Section padding: 64-80px vertical
- Card padding: 32px
- Element spacing: 16-24px
- Tight spacing: 8px

## Component Specifications

### Buttons
**Primary Button**: Blue background (--color-primary), white text, 16px border-radius, 12px vertical padding, 24px horizontal padding
- Hover: Darker blue (--color-primary-hover)
- Disabled: 50% opacity, no pointer events

**Secondary Button**: Gray outline, gray text
- Hover: Light gray background

**Danger Button**: Red background for error states

All buttons include smooth transitions (0.2s ease) and clear focus states.

### Form Elements
**Input Fields**:
- 16px border-radius
- 1px solid border (--color-gray-3)
- 12px vertical, 16px horizontal padding
- Focus: 2px solid primary color ring with slight glow
- Error state: Red border with error message below
- Success state: Green border with checkmark

**Labels**: Medium weight, 14px, positioned above inputs with 8px margin

**Validation States**:
- Success: Green border + "Analyse gestartet" message
- Error: Red border + "Übermittlung fehlgeschlagen" message
- Loading: Disabled state with "Senden..." text

### Cards
- Background: White or --color-gray-0
- Border-radius: 16px (--radius)
- Shadow: 0 8px 24px rgba(0,0,0,.08) (--shadow)
- Padding: 32px
- Subtle hover effect: slight shadow increase

### Tooltips
Small, compact design with dark background (#212529) and white text, 8px padding, 8px border-radius, positioned contextually near trigger elements.

## Layout Structure

### Header
Clean, minimal header with logo placeholder on left and "Kostenlos starten" anchor link on right. White background with subtle bottom border. Fixed/sticky on scroll optional.

### Hero Section
**Left Side (60% width on desktop)**:
- Large H1: "Erkunde dein KI-Potenzial."
- Subline (20px): "Kostenlose Analyse: Wo KI in deinem Unternehmen Produktivität, Qualität oder Effizienz steigert."
- Inline form (primary CTA) with URL and email fields stacked vertically
- Optional consent checkbox below fields
- Primary button: "Kostenlose Analyse starten"

**Right Side (40% width on desktop)**:
- Small square visual element (splash/intro graphic) representing AI/technology
- Abstract, modern illustration style
- Mobile: Stack vertically, visual above form

### Benefits Section (3 Cards)
Grid layout with 3 equal-width cards showcasing:
1. **Produktivität**: 1-2 bullet points on automation/efficiency
2. **Qualität**: 1-2 bullet points on accuracy/improvement
3. **Effizienz**: 1-2 bullet points on optimization/cost-saving

Each card includes an icon/visual element at top, bold title, and concise bullet points.

### Process Section (3 Steps)
Numbered timeline or horizontal flow showing:
1. **Website senden**: User submits URL
2. **KI-Analyse**: System analyzes site
3. **Maßnahmen & Slides**: Receive recommendations

Visual progression with connecting lines or arrows. Large numbers (1, 2, 3) with descriptions.

### Trust Section
Small, concise list emphasizing:
- Sichere Verarbeitung
- DSGVO-konform
- Jederzeit widerrufbar

Simple checkmark list or badge-style layout.

### FAQ Section
3-4 collapsible questions or simple Q&A format:
- Clean, readable layout
- Questions as H4, answers as body text
- Generous spacing between items

### Footer
Simple, clean footer with:
- Impressum link (placeholder)
- Datenschutz link (placeholder)
- Neutral gray background (--color-gray-0)
- Minimal padding

### Mobile Enhancements
**Sticky CTA Button**: Fixed button at bottom of screen on mobile that smoothly scrolls to form when tapped. Primary blue with white text, full-width or centered.

## Responsive Breakpoints
- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1024px (2-column where appropriate)
- **Desktop**: > 1024px (full multi-column layouts)

## Visual Design Principles
- **Generous Whitespace**: Avoid cramped layouts, let content breathe
- **Clear Hierarchy**: Size, weight, and spacing create obvious information flow
- **Subtle Interactions**: Smooth transitions (0.2s-0.3s), no distracting animations
- **Professional B2B Aesthetic**: Trust-building through clean, modern design
- **Accessibility First**: High contrast ratios, visible focus states, semantic HTML structure

## Images
No large hero background image required. Use small square visual/illustration element in hero section (right side) to add visual interest without overwhelming the conversion-focused design.