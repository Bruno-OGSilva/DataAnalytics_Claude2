---
name: dashboard-labs-design
description: Use this skill to generate well-branded interfaces and assets for Dashboard Labs (dashboardlabs.ca) — a business-analytics consulting firm in Canada specializing in Power BI dashboards, reporting, and BI training. Covers brand colors, type, logos, voice, iconography, and a marketing-site UI kit. Use for production work or throwaway prototypes/mocks/decks.
user-invocable: true
---

Read the `README.md` file at the root of this skill, and explore the other available files:

- `colors_and_type.css` — drop-in CSS variables (color, type, spacing, radii, shadows, motion) plus base element styles
- `assets/` — official logo lockups (dark + light/reversed variants)
- `ui_kits/marketing-site/` — pixel-near recreation of the live dashboardlabs.ca homepage, broken into small React (JSX) components
- `preview/` — small specimen cards (colors, type, spacing, components, brand) — useful as references when building new pages
- `SKILL.md` — this file

If you are creating visual artifacts (slides, mocks, throwaway prototypes, landing pages, social posts):
- Copy the needed logo(s) out of `assets/` into your artifact's working folder
- Import the design tokens by linking `colors_and_type.css` from a relative path
- Reuse components from `ui_kits/marketing-site/` rather than reinventing buttons / cards / nav
- Output static HTML files for the user to view

If you are working on production code:
- Lift the color and typography variables into the host project's token system
- Match the voice rules in the README's CONTENT FUNDAMENTALS section when writing copy
- Use Lucide icons (`unpkg.com/lucide@latest`) for icon needs — Dashboard Labs has no proprietary icon set

When invoked without other guidance, ask the user what they want to build or design, ask a few questions (audience, format, breadth of variations), then act as an expert designer producing on-brand HTML artifacts or production code as appropriate.

Key brand reminders:
- The visual signature is the bar-chart-with-trend metaphor (the logo). Honor it.
- The brand gradient runs **navy → blue → teal → green** — use it once per surface, not as wallpaper.
- Primary CTA is **green** (`#1F9F66`). Headings and dark surfaces are **navy** (`#0E2747`). Mint (`#EAF6F1`) tints section blocks.
- Display type is **Montserrat** (matches the logo wordmark). Body is **Manrope**.
- Voice is warm, practical, and never hype-y. No emoji.
