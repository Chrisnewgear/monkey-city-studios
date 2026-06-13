---
name: Monkey City Studios
description: Bold, trustworthy, premium studio interface tuned for high-intent project inquiries.
colors:
  studio-azure: "#1592D4"
  pulse-blue: "#1AB0FF"
  anchor-navy: "#0E6391"
  signal-cyan: "#19A9F6"
  surface-white: "#FFFFFF"
  page-mist: "#F8FAFC"
  ink-slate: "#0B0C0F"
  body-slate: "#374151"
  border-fog: "#E5E7EB"
typography:
  display:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.953rem, calc(1.7rem + 1.4vw), 2.666rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1.563rem, calc(1.4rem + 1vw), 1.999rem)"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "normal"
  body:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "clamp(1rem, calc(0.95rem + 0.3vw), 1.125rem)"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif"
    fontSize: "0.95rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "0.01em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
  pill: "50px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  xxl: "3rem"
  xxxl: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.studio-azure}"
    textColor: "{colors.surface-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.1rem"
  button-primary-hover:
    backgroundColor: "{colors.anchor-navy}"
    textColor: "{colors.surface-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0.7rem 1.1rem"
  button-secondary:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.anchor-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "1rem 2rem"
  card-default:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.md}"
    padding: "1.5rem"
  input-default:
    backgroundColor: "{colors.surface-white}"
    textColor: "{colors.ink-slate}"
    rounded: "{rounded.sm}"
    padding: "0.75rem 0.9rem"
  nav-link:
    backgroundColor: "{colors.studio-azure}"
    textColor: "{colors.surface-white}"
    typography: "{typography.label}"
    rounded: "{rounded.sm}"
    padding: "0"
---

# Design System: Monkey City Studios

## 1. Overview
**Creative North Star: "The Trusted Edge"**

This system balances modern innovation with grounded reliability. The visual language stays confident and restrained: saturated blues create momentum, while crisp structure and disciplined spacing keep the interface professional and believable for high-intent buyers.

The product experience is built to convert clarity into action. Visual hierarchy favors immediate comprehension, capability signaling, and direct inquiry pathways rather than ornamental complexity. Motion and elevation are used for assertive feedback, not spectacle.

**Key Characteristics:**
- High-contrast, trust-first hierarchy that remains premium under pressure.
- Blue-led brand palette with disciplined neutral support.
- Assertive, tactile interaction states for calls-to-action and key cards.
- Conversion-focused composition with low-friction decision paths.

## 2. Colors
The palette is a controlled blue spectrum: one core brand blue, one brighter activation accent, and one darker anchor that secures contrast and credibility.

### Primary
- **Studio Azure** (`#1592D4`): Default brand action color for primary CTAs, sticky header gradients, and key trust cues.

### Secondary
- **Pulse Blue** (`#1AB0FF`): High-energy accent for hero gradients, highlighted interactions, and selective emphasis moments.

### Tertiary
- **Anchor Navy** (`#0E6391`): Dark stabilizer for hover/active states, deep contrast edges, and premium grounding.

### Neutral
- **Surface White** (`#FFFFFF`): Card and content container foundation.
- **Page Mist** (`#F8FAFC`): Main page background for clean readability.
- **Ink Slate** (`#0B0C0F`): High-contrast heading and structural text color.
- **Body Slate** (`#374151`): Long-form body text for sustained readability.
- **Border Fog** (`#E5E7EB`): Quiet separators and field boundaries.

### Named Rules
**The Blue Discipline Rule.** Studio Azure and Pulse Blue carry intent, not decoration. If blue appears without communicative purpose, remove it.

## 3. Typography
**Display Font:** system-ui stack (`system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`)
**Body Font:** system-ui stack (`system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif`)
**Label/Mono Font:** UI mono stack for code motifs (`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace`)

**Character:** Heavy display weights establish confidence, while neutral UI body typography preserves trust and scanning speed.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 6vw, 4.5rem)`, 1.1): Hero declarations and top-of-page value framing.
- **Headline** (700, `clamp(1.953rem, calc(1.7rem + 1.4vw), 2.666rem)`, 1.2): Section-level framing and conversion waypoints.
- **Title** (700, `clamp(1.563rem, calc(1.4rem + 1vw), 1.999rem)`, 1.2): Card and module headings.
- **Body** (400, `clamp(1rem, calc(0.95rem + 0.3vw), 1.125rem)`, 1.6): Default reading text. Keep long paragraphs near 65–75ch where practical.
- **Label** (600, `0.95rem`, 1.4, `0.01em`): Navigation, buttons, and UI microcopy.

### Named Rules
**The Confidence-Without-Noise Rule.** Use weight and contrast before adding effects. If hierarchy fails without gradients, hierarchy is wrong.

## 4. Elevation
Elevation is intentionally high-contrast and tactile. Surfaces remain clean at rest, then lift decisively on interaction to signal agency and responsiveness. This preserves a premium tone without drifting into decorative blur-heavy layering.

### Shadow Vocabulary
- **Structural Rest** (`0 1px 2px rgba(0, 0, 0, 0.06)`): Default card and contained module baseline.
- **Interactive Lift** (`0 6px 16px rgba(0, 0, 0, 0.08)`): Hover/focus transitions for service cards and testimonials.
- **Prominent Lift** (`0 16px 32px rgba(0, 0, 0, 0.12)`): Hero-critical and conversion-critical emphasis states.
- **CTA Pulse Lift** (`0 10px 30px rgba(0, 212, 255, 0.3)`): Primary action emphasis in blue-led hero contexts.

### Named Rules
**The Lift-on-Intent Rule.** Depth appears in response to user intent (hover, focus, active). Static decorative lifting is prohibited.

## 5. Components
Components should feel assertive and tactile, with clear state transitions and no ambiguous affordances.

### Buttons
- **Shape:** Tight confidence for standard CTA (`6px`) and rounded-pill emphasis for hero secondary actions (`50px`).
- **Primary:** Studio Azure fill with white text, medium-strong weight, and compact, production-ready CTA padding (`0.7rem 1.1rem`).
- **Hover / Focus:** Deepen to Anchor Navy, add upward micro-lift, and preserve explicit focus ring contrast.
- **Secondary / Ghost:** Transparent or soft-white surfaces with visible border contrast; no low-contrast washed states.

### Cards / Containers
- **Corner Style:** Moderate curves (`10px` for default cards, `16px+` for feature modules).
- **Background:** White or high-clarity translucent white depending on context.
- **Shadow Strategy:** Rest on Structural Rest; transition to Interactive Lift on user engagement.
- **Border:** Light but present (`#E5E7EB` or equivalent alpha white on dark/gradient contexts).
- **Internal Padding:** Dense enough for premium rhythm (`1.5rem` minimum for principal cards).

### Inputs / Fields
- **Style:** White field surfaces, quiet border, compact rounded corners (`6px`), and tactile vertical spacing.
- **Focus:** High-contrast outline ring derived from the primary blue family.
- **Error / Disabled:** Must remain clearly legible and state-distinct; never rely on low-contrast gray-only differentiation.

### Navigation
- **Style:** High-contrast links in sticky top navigation with unambiguous hover feedback.
- **States:** Default/hover/active states must remain readable against gradient or darkened containers.
- **Mobile:** Preserve link clarity under wrapped navigation layouts; no collapsing into ambiguous icon-only actions by default.

### Signature Component
- **Hero Trust Stack:** A blue gradient hero with constrained glass accents and code-window motif that signals technical fluency while preserving copy legibility and decisive CTA focus.

## 6. Do's and Don'ts
### Do:
- **Do** prioritize conversion hierarchy: value proposition, proof, then inquiry path.
- **Do** keep CTA contrast explicit (white text on Studio Azure / Anchor Navy) and visible at every breakpoint.
- **Do** use motion as functional feedback with reduced-motion-safe fallbacks.
- **Do** preserve the blue-led identity with disciplined neutral support, not random accent expansion.

### Don't:
- **Don't** ship a **Generic SaaS-template look**.
- **Don't** drift into an **Overly playful or cartoon styling** direction.
- **Don't** apply a **Dark hacker/cyberpunk aesthetic**.
- **Don't** regress into **Corporate stock-template minimalism**.
- **Don't** use gradient text (`background-clip: text`) for headings or key messaging.
- **Don't** use decorative side-stripe borders (`border-left` / `border-right` accents) as a layout crutch.
