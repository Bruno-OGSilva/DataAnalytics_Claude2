# Dashboard Labs — Design System

> _"We love data."_ — Dashboard Labs is a family-owned business analytics consulting firm in Canada (dashboardlabs.ca). They help small and mid-size companies turn their data into insights — through dashboards, reporting, automation, competitor analysis, and Power BI training.

This design system codifies the visual + content language of the Dashboard Labs brand so you can quickly produce on-brand decks, mocks, landing pages, and prototype UIs without reinventing the wheel.

---

## Index

| File / Folder | What's in it |
| --- | --- |
| `README.md` | This document — brand context, content fundamentals, visual foundations, iconography |
| `SKILL.md` | Agent Skills entrypoint — load this from Claude Code |
| `colors_and_type.css` | Drop-in CSS — color vars (`--dl-navy-900`, etc.), semantic tokens (`--fg1`, `--bg`), spacing, radius, shadow, motion, base element styles |
| `assets/` | Logos (light + dark), favicon, brand mark, hero illustration |
| `preview/` | Small HTML cards that render inside the Design System tab |
| `ui_kits/marketing-site/` | Marketing-site UI kit — header, hero, services grid, portfolio cards, footer, CTA |
| `ui_kits/marketing-site/index.html` | Click-thru recreation of the dashboardlabs.ca homepage |

---

## Sources

- **Website (live)**: https://dashboardlabs.ca/ — built on Durable.co's no-code template; primary source of truth for content tone, services list, portfolio
- **Sub-pages crawled**: `/services`, `/dashboards-reports`, `/power-embedded`, `/contact`, `/blog`
- **Uploaded logo files**: `uploads/Logo Dashbord Labs-Curvas-01.png` (light/mint variant) and `uploads/Logo Dashbord Labs-Curvas-04.png` (navy variant). Also `Logo Dashbord Labs-Curvas.ai` (mentioned but not uploaded — `.ai` source file).
- **No codebase, no Figma** — the live site is a Durable template, so the design system is reconstructed from logo + live HTML + content study, not from production source. Flag for the user: if a Figma file or fuller brand book exists, attach it for a stricter spec.

---

## Company at a glance

- **Industry**: Business analytics consulting / data visualization / BI services
- **Stack signature**: Power BI is the headline tool — they are a certified Power BI partner, sell Power BI Embedded ("Power Embedded") integration, and run Power BI training
- **Audience**: Small-to-mid business owners and operations leads, primarily in Retail and CPG (their team's 10+ years of experience lives in retail/CPG, marketing, category management, e-commerce)
- **Origin**: Family-owned, Canadian (`.ca` domain)
- **Tagline candidates**: "Turn your data into insights." "We love data." "Data, visualized."
- **Service lines**:
  1. Data Visualization (dashboards)
  2. Data-Driven Insights & Consulting
  3. Process Automation
  4. Website performance analysis
  5. Online Competitor Analysis
  6. Power BI Training
  7. Power BI Embedded integration

---

## Content fundamentals

How copy is written on dashboardlabs.ca:

**Voice**: Warm + practical. They are a small team, so the copy reads like a smart consultant explaining things over coffee — never corporate, never breathless. Sentences often open with rhetorical questions to put the reader in the problem ("Can you imagine driving a car without its dashboard?", "Does this challenge sound familiar to you?").

**Pronoun**: "We" (the firm) addresses "you" (the prospect). First-person plural is consistent — "Our team", "We can help you", "We have the expertise". Never "I" — even though it's family-owned. "You" is used directly and often.

**Tone qualities**:
- Reassuring, not aspirational. Less "transform your enterprise", more "we can help you find the answer to your questions."
- Concrete. Lists of named deliverables — _Budget vs Sales, Sales Analysis, Category Analysis, Retail gateway compilation (IRI, Dunnhumby, Retail Link, LDIA, Fed Coop, etc), Financial Report, People Analytics, Logistics._
- Plain English. Almost no jargon. When acronyms appear (KPI, CPG, ROI, SEO) they are introduced casually, not defined formally.
- Light enthusiasm, never hype: "We love data!" is the most exclamation-marky sentence on the entire site.

**Casing**:
- **Page titles** use Title Case: "Data Visualization and Analytics Services", "Our Services", "Our Portfolio"
- **Service names** Title Case: "Data Visualization", "Process Automation", "Power BI Training"
- **Section sub-headings** Title Case: "We love data!", "Our team is Power BI Certified"
- **Body copy** sentence case — no SHOUTING

**Emoji**: None on the site. The brand does not use emoji. Don't add them.

**Unicode glyphs**: Sparingly — bullets in lists are rendered as standard markers, not custom characters.

**Sentence rhythm**: Often a punchy opener → a paragraph of context → a bulleted list of concrete deliverables/questions → a soft CTA. Mimic this in new long-form copy.

**Examples to model from**:
- Headline pattern: `"Data Visualization and Analytics Services"` (noun phrase, descriptive, not clever)
- Sub-headline pattern: `"Transform complex databases into actionable insights and easy-to-use dashboards"` (verb-led promise)
- Body opener: `"Can you imagine driving a car without its dashboard? Not knowing the speed, how much gas you have or be advised of problems when they come up?"`
- CTA copy: `"Learn More"`, `"Contact Us"`, `"Reach out to us for more information"` — never "Get started free" / "Book a demo today!"

**What to avoid**:
- Startup-y superlatives ("game-changing", "10x", "revolutionize")
- Emoji
- AI-flavored em-dash riffs
- All-caps shouting outside of nav/labels
- Brand-named adjectives ("the Dashboard Labs way")

---

## Visual foundations

### Brand DNA

The visual identity is built around **one metaphor**: a bar chart with an upward trend line. That metaphor lives in the logo and is the one piece of imagery that absolutely must be honored in every artifact.

The bars step up left → right and recolor along a **navy → blue → teal → mint → green** gradient. _That ramp is the brand._ Use it for:
- Charts (low → high categories)
- Section dividers
- Hero accents
- Progress indicators
- The "feature card" stripe in component cards

Solo colors? **Navy is the brand anchor**; **green is the positive accent**. Everything else is supporting.

### Colors

| Token | Hex | Role |
| --- | --- | --- |
| `--dl-navy-900` | `#0E2747` | Wordmark, primary headings, dark surfaces |
| `--dl-blue-600` | `#137FA3` | Hover/active for links, secondary actions |
| `--dl-blue-400` | `#4FB8D9` | Chart series 1 |
| `--dl-teal-500` | `#29C99B` | "Insight" accent, badges, success-y tags |
| `--dl-mint-200` | `#C3F1DD` | Tinted backgrounds, mint section blocks |
| `--dl-green-600` | `#1F9F66` | Primary CTA, success, key highlights |
| `--dl-ink-900..50` | grayscale ramp | Body text → backgrounds |

Surfaces: predominantly **white** with mint-tinted blocks (`#EAF6F1`) used to call out a section. Dark sections use **navy** (`#0E2747`) for footers and statement panels — never pure black.

### Typography

- **Display**: **Montserrat** — the logo wordmark is set in a bold geometric sans that visually matches Montserrat Bold / ExtraBold. Use for H1–H4, eyebrows, button text, CTAs.
- **Body**: **Manrope** — humanist sans with a slightly warm feel that pairs with Montserrat. Use for paragraphs and UI.
- **Mono**: **JetBrains Mono** — for code blocks, table values, dashboard numbers when a tabular feel is desired.
- ⚠️ **Substitution flag**: The original site (a Durable template) ships with Durable's default typeface — the exact production font isn't documented. **Montserrat is a close visual match for the wordmark; Manrope is a defensible body pairing.** If the brand owns specific webfonts, drop them in `fonts/` and update `colors_and_type.css`.

### Spacing

8pt base scale (`--space-1: 4` through `--space-10: 128`). Section padding is generous: `--space-9` (96px) vertical between sections on desktop is the norm.

### Backgrounds & imagery

- **Photography**: Stock photography, warm-to-neutral, business-casual (Unsplash + Shutterstock on the live site). People at laptops; pens on notebooks; close-ups of charts on screens. **Never** futuristic AI imagery, never glitch/holo effects.
- **Full-bleed**: Yes, used in hero and as section breakers. No grain. No B&W. Color-graded toward warm neutrals.
- **Patterns/textures**: None on the live site. The system can introduce a subtle dotted grid (1px dots, 24px spacing, 8% opacity) for hero backgrounds — useful in decks but optional.
- **Hand-drawn illustrations**: No. If illustration is needed, use clean geometric infographic style (bars, lines, donuts) mirroring the logo.

### Gradients

One gradient: the **brand gradient** (navy → blue → teal → green). Use:
- Horizontally, in a thin top-of-card strip
- As text gradient on a single hero word (sparingly — one per page)
- As underline on the active nav item

Avoid: purple/pink gradients, radial overlays, animated gradients.

### Borders, shadows, corners

- **Border radius**: `--radius-md: 8px` is the default. Cards: `--radius-lg: 12px`. Pills/badges: `--radius-pill`. The logo's bars use a small `~4px` radius — buttons follow that convention.
- **Shadows**: Soft, navy-tinted. `rgba(14, 39, 71, 0.07)` at the low end, `0.12` at the high end. Never black shadows.
- **Borders**: 1px `--border` (`#E1E6EE`) is the typical card outline. Sections rarely use top/bottom borders — they rely on background tint changes instead.
- **Inner shadows**: avoid. Flat surfaces.

### Buttons & interactive states

- **Primary button**: green (`--dl-green-600`) background, white text, 8px radius, 14–16px vertical padding, Montserrat 600.
- **Secondary button**: white background, navy text, 1px navy border.
- **Hover**: darken the background by ~6% (use color-mix or pre-baked `--dl-navy-700` / `--dl-green-700`). No glow, no transform.
- **Press**: subtle `scale(0.98)` _or_ a darker shade — pick one, not both.
- **Focus**: 3px mint ring (`--shadow-ring`).

### Animation

- **Easing**: `--ease-out` (`cubic-bezier(0.22, 0.61, 0.36, 1)`) for entrances; `--ease-in-out` for cross-fades.
- **Durations**: 120ms (micro), 200ms (component), 360ms (page).
- **Fades**: yes — opacity + 8px y-translate is the house entrance.
- **Bounces**: no. The brand reads as steady/serious; bounces feel wrong.

### Layout

- Max content width: `1200px`, centered, with `--space-6` (32px) gutters on desktop, `--space-4` on mobile.
- Section header pattern: small all-caps `eyebrow` (green) → big H2 (navy) → 1-2 paragraph lede (slate) → optional CTA.
- Cards prefer **square or wide-rectangle** aspect ratios over tall ones. Card images: 16:9 or 4:3.

### Transparency & blur

Used very lightly — mostly a 92% opacity navy bar over the hero image for the nav. No frosted-glass / heavy blur effects. The brand vibe is **printed business-card clean**, not iOS glass.

---

## Iconography

The live site is a Durable template that uses generic glyphs — **there is no proprietary icon set**.

**Recommended system**: [**Lucide**](https://lucide.dev) — open-source, MIT-licensed, 1.75px stroke weight. Matches the clean, geometric feel of the logo bars. Load from CDN:

```html
<script src="https://unpkg.com/lucide@latest"></script>
<script>lucide.createIcons();</script>
```

Then in markup:

```html
<i data-lucide="bar-chart-3"></i>
<i data-lucide="trending-up"></i>
<i data-lucide="line-chart"></i>
<i data-lucide="check-circle"></i>
```

**Icon usage rules**:
- Stroke weight **1.75–2px**; do not mix with filled icon sets
- Color: inherit `currentColor` from text — defaults to navy on light surfaces, mint on dark
- Sizing: 16, 20, 24px in UI; 32–48px when paired with feature/service cards
- Pair every service icon with a one-line label

**Emoji**: not used.

**Unicode glyphs**: arrows (`→`, `↗`) and bullets (`•`) are acceptable. Em-dash (`—`) is fine in prose. Avoid decorative dingbats.

**Logo as the "favicon" icon**: the bar-chart mark (without the wordmark) is the natural app/favicon — generated programmatically from `assets/logo-dark.png` for any context that needs a square mark.

**Flag**: Lucide is a sensible default but not officially endorsed by Dashboard Labs. If they have a preferred icon system, swap globally.

---

## Caveats

- The live site is on a Durable template. The exact production typeface, color hex values, and grid system are **inferred from the logo and from rendered CSS**, not pulled from a brand book.
- The original `.ai` logo file was referenced in the upload list but not uploaded — only two PNG variants exist in `assets/`.
- The icon system is a recommendation, not the canonical set.
- No mobile-app, dashboard product, or admin UI exists. The only "product" is the marketing site + their service deliverables (Power BI reports in customer environments).
