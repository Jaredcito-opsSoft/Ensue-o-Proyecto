---
name: pde-visual-system
description: Visual direction and implementation guardrails for Presencia Digital Express / Ensueno public pages, mini business pages, motion, mobile-first QA, and no-gradient local-premium UI.
---

# Presencia Digital Express Visual System Skill

Use this skill when designing, reviewing, or implementing the public experience for Presencia Digital Express / Ensueno:

- Landing page.
- Demo pages.
- Public mini business pages.
- Public motion and microinteractions.
- Visual QA and responsive polish.

Do not use this skill for backend, database, auth, CRUD, POS, inventory, billing, or internal admin workflows except for light visual consistency checks.

## Product Aesthetic

The product should feel like a polished digital business card studio for local businesses.

Target reaction: "Si, quiero que mi negocio se vea asi."

The visual language is local premium: warm, direct, tactile, editorial, trustworthy, mobile-first, and lightly cinematic with a retro 90s film accent.

## Non-Negotiables

- No gradients: no `linear-gradient`, `radial-gradient`, `conic-gradient`, or decorative gradient backgrounds.
- No glow-heavy effects, decorative blobs, glassmorphism, or generic SaaS hero patterns.
- No WhatsApp-green branding. WhatsApp is a feature and CTA label, not the color identity.
- No excessive motion. Motion supports clarity and perceived quality.
- Public pages must be understandable with motion disabled.
- Mobile comes first.

## Reference Blend

- Tercia Gourmet: local-premium editorial warmth, deep ink, paper surfaces, restrained brass, strong photography, and boutique service cues. Borrow the feeling, not the restaurant identity.
- Apple: narrative pacing and confident product moments.
- Linear: precise hierarchy and quiet surface structure.
- BP&O / Minimalissimo: restrained identity and tactile composition.
- Motion.dev: transform-first, performance-aware motion principles only.
- Mobbin: mobile action ergonomics and scannable cards.

Do not copy brand colors, layouts, slogans, or signature animations from these references.

## Palette

- Paper: `#F3EAD8`
- Paper strong: `#E7D8BD`
- Surface: `#FFF8E9`
- Surface strong: `#EAD7B6`
- Ink: `#15100E`
- Muted: `#62574F`
- Border: `#D8C4A4`
- Accent: `#C73E1D`
- Accent strong: `#94290F`
- Earth: `#8A4F2F`
- Blue: `#0F5F78`
- Brass: `#D99B2B`
- Plum: `#3D2B5F`

Accent is scarce. Use red, blue, brass, and plum like a restrained 90s poster palette. Brass is a micro-accent for premium cues, never the dominant color.

## Identity Position

Recommended direction: Estudio Local Premium with Retro Film color.

PDE should feel like a boutique studio that packages a local business into a polished, shareable page. Use the "living business card" as the signature object: mini page, catalog, WhatsApp, map, and QR in one composed artifact.

Images can use black-and-white or high-contrast editorial treatment, especially in demos, to create a cinematic "film still" feeling.

## Typography

- Geist is the current base.
- Headings are large, confident, and tightly set.
- Body copy is plain, direct, and readable on mobile.
- Avoid technical language in public pages.

Preferred copy:

- "Tu negocio listo para compartir."
- "Todo en un solo link."
- "Mini pagina, QR y contacto directo."
- "Ideal para negocios que venden por WhatsApp."

Avoid:

- "backend"
- "CRUD"
- "arquitectura"
- "SaaS complejo"
- "sistema robusto"

## Motion Rules

Use GSAP in this codebase unless the user explicitly approves adding another dependency.

Borrow Motion.dev principles:

- Transform and opacity first.
- Short staggers.
- Spring-like settle.
- Reduced-motion respect.
- Performance-aware timing.

Approved patterns:

- Hero preview card settle.
- QR chip/card settle.
- Demo card stagger.
- Service card stagger.
- Gallery reveal.
- Useful signal ticker.

Avoid:

- Pulsing CTAs.
- Confetti.
- Typewriter.
- Drag interactions.
- Long scroll-linked effects.
- Any animation that delays core content.

## Page Patterns

Landing:

1. Editorial hero with offer, CTA and living business card preview.
2. Useful signal ticker.
3. Problem cards.
4. Solid solution band.
5. Benefits with real business outcome.
6. Demo cards for beauty, food and repair.
7. Packages without final pricing.
8. Simple process.
9. FAQ.
10. Final CTA.

Mini business page:

1. Cover and identity.
2. WhatsApp and location actions.
3. Description.
4. Services/products.
5. Gallery.
6. Hours.
7. Location.
8. Social links.
9. QR/share block.
10. Footer.

Mobile mini page:

- Fixed bottom action bar: WhatsApp and Ubicacion.
- No pulsing or bouncing.
- Must not cover final content.

## QA Before Delivery

Run:

```bash
npm run lint
npm run build
```

Verify:

- `/`
- `/demo/estetica`
- `/demo/comida`
- `/demo/taller`
- `/negocio/bella-imagen-tuxtla`
- `/panel/login` only for visual breakage

Check widths:

- 360
- 390
- 414
- 430
- 768
- 820
- 1280
- 1440

Pass criteria:

- No horizontal scroll.
- No broken images.
- No console errors.
- No Next overlay.
- No visual gradients in `src`.
- CTAs visible on mobile.
- Motion does not delay reading.
