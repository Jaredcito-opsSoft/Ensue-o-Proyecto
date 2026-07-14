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

The visual language is clean SaaS for local businesses: direct, trustworthy, product-like, mobile-first, and visually simple enough to feel modern instead of institutional. Color psychology priority: trust first, clarity second, warmth third.

## Non-Negotiables

- No gradients: no `linear-gradient`, `radial-gradient`, `conic-gradient`, or decorative gradient backgrounds.
- No glow-heavy effects, decorative blobs, glassmorphism, or generic SaaS hero patterns.
- No WhatsApp-green branding. WhatsApp is a feature and CTA label, not the color identity.
- Avoid retro poster colors unless the user explicitly asks to return to that direction.
- Avoid dominant yellow. Yellow can call attention, but it should not drive the brand because it feels less trustworthy for this product.
- No excessive motion. Motion supports clarity and perceived quality.
- Public pages must be understandable with motion disabled.
- Mobile comes first.

## Reference Blend

- Tercia Gourmet: local-premium editorial warmth, deep ink, paper surfaces, restrained brass, strong photography, and boutique service cues. Borrow the feeling, not the restaurant identity.
- Modern Clean SaaS Company / Day Base: clean product structure, simple nav, large direct sans headline with selective serif/italic emphasis, modular problem/solution sections, generous spacing, and mobile-first CTA hierarchy. Borrow structure and type rhythm, not the exact black/white/yellow palette.
- Apple: narrative pacing and confident product moments.
- Linear: precise hierarchy and quiet surface structure.
- BP&O / Minimalissimo: restrained identity and tactile composition.
- Motion.dev: transform-first, performance-aware motion principles only.
- Mobbin: mobile action ergonomics and scannable cards.

Do not copy brand colors, layouts, slogans, or signature animations from these references.

## Palette

- Paper: `#F7F9FC`
- Paper strong: `#EEF3F8`
- Surface: `#FFFFFF`
- Surface strong: `#EDF2FF`
- Ink: `#101828`
- Muted: `#667085`
- Soft: `#98A2B3`
- Border: `#D9E2EC`
- Accent: `#315CF6`
- Accent strong: `#2447C7`
- Earth/warm local: `#B85C38`
- Blue: `#315CF6`
- Warm accent: `#F4B24F`
- Navy: `#17213A`

Accent is scarce. Use blue as the primary action color because it communicates trust, stability, and professionalism. Use warm amber only as a minor local-friendly accent. Most UI should stay white, cool gray, navy, and blue.

## Identity Position

Recommended direction: Trustworthy Local SaaS.

PDE should feel like a boutique studio that packages a local business into a polished, shareable page. Use the "living business card" as the signature object: mini page, catalog, WhatsApp, map, and QR in one composed artifact.

Images can use black-and-white or high-contrast editorial treatment, especially in demos, but the color system should read as trustworthy SaaS rather than retro film.

## Typography

- Geist is the current base.
- Source Serif is approved as a selective editorial accent for one or two words in major headings.
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

1. Clean SaaS-style hero with simple nav, direct offer, CTA and living business card preview.
2. Useful signal ticker.
3. Problem section as clear rows, not decorative cards.
4. Solid solution band with modular product capabilities.
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
