# Marketing Site — Dashboard Labs UI Kit

A pixel-near recreation of the public dashboardlabs.ca site. The original is a Durable template, so this kit is a re-skinned, fully-restyled implementation that matches the live site's information architecture, content, and visual rhythm using the design-system tokens in `../../colors_and_type.css`.

## Files

| File | Component |
| --- | --- |
| `index.html` | Click-through prototype — Home → Services → Portfolio → Contact |
| `Header.jsx` | Sticky top nav with logo, primary nav, contact CTA |
| `Hero.jsx` | Hero block — eyebrow, headline, lede, dual CTAs, hero photo |
| `ServicesGrid.jsx` | 6-tile grid of service cards (icon + title + body + arrow) |
| `PortfolioStrip.jsx` | Featured portfolio with image left, body right (alternating) |
| `BadgeStrip.jsx` | "Power BI Certified" badge row + partner marks |
| `ContactForm.jsx` | Two-column layout — form left, contact info right |
| `Footer.jsx` | Footer with nav, socials, logo, copyright |
| `Page.jsx` | Page shell that composes Header + main + Footer |

## Visual rules applied

- Mint section blocks (`#EAF6F1`) alternate with white sections, never two same-colored sections back-to-back.
- The brand gradient (`var(--gradient-brand)`) appears exactly once per page — as a top stripe on the active service card on hover, or as the underline on the hero word.
- Service icons come from Lucide; one icon per card; mint-tinted square chip.
- All CTAs use the green primary button; secondary CTAs are outlined navy.

## Caveats / known gaps

- The live site uses Unsplash/Shutterstock photography served through Next.js image proxy. This kit references illustrative placeholders (gradient + bar mark) instead of pulling external hotlinks. Drop real imagery into `assets/` and update the image URLs in `Hero.jsx` and `PortfolioStrip.jsx`.
- The "Power Embedded" sub-product page is not modeled — only the homepage IA is recreated.
