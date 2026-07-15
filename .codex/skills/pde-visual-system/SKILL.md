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

The visual language is luminous midnight SaaS for local businesses: direct, aspirational, product-like, mobile-first, and visually rich enough to make a local owner want to see their own business in it. Color psychology priority: trust first, aspiration second, warmth third.

## Non-Negotiables

- No gradients: no `linear-gradient`, `radial-gradient`, `conic-gradient`, or decorative gradient backgrounds.
- No glow-heavy effects, decorative blobs, decorative glassmorphism, or generic SaaS hero patterns. Use translucent blue glass, fine luminous borders, restrained circles, and photography instead.
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

- Midnight: `#07164B`
- Midnight strong: `#0B236C`
- Surface: `#152A78`
- Surface bright: `#233B91`
- Glass: `rgba(32, 52, 136, 0.56)`
- Ink: `#F8F4FF`
- Muted: `#C7C8E8`
- Border: `rgba(210, 209, 255, 0.28)`
- Action pink: `#FF6F9F`
- Action pink dark: `#E84D82`
- Lilac signal: `#9F8CFF`
- Soft rose: `#F6A1C1`
- Blue light: `#6F93FF`

Blue is the field of trust and continuity. Pink is scarce and reserved for the action that moves the user forward. Lilac signals craft and digital polish. Keep most UI in midnight blue glass with pale borders; never introduce green or yellow as a brand driver.

## Identity Position

Recommended direction: Luminous Midnight Local SaaS.

PDE should feel like a boutique studio that packages a local business into a polished, shareable page. Use the "living business card" as the signature object: a browser-like mini page, catalog, WhatsApp, map, and QR in one composed artifact. In the hero it is the visible proof of the offer, not a generic dashboard mockup.

Images can use black-and-white or high-contrast editorial treatment, especially in demos. Glass surfaces are allowed only when they clarify hierarchy: translucent but readable, bordered, and never dependent on blur alone for contrast.

## Typography

- Geist is the current base.
- Source Serif is the display face for the primary hero and closing promise; it keeps the studio considered rather than corporate.
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

1. Midnight SaaS-style hero with compact glass nav, direct offer, pink CTA and living business card preview.
2. Useful signal ticker.
3. Problem section as clear rows, not decorative cards.
4. Deep-blue solution band with modular product capabilities.
5. Benefits with real business outcome.
6. Demo cards for beauty, food and repair.
7. Packages without final pricing.
8. Simple process, with order markers that communicate the real sequence.
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

Beauty LA demo (`/demo/estetica`):

- This route is a deliberate brand exception to the midnight parent landing.
- Palette: warm ivory `#F6F1EA`, near-black `#1E1C19`, warm gray `#5A534D`, and translucent charcoal overlays.
- Source Serif carries the editorial headlines; Geist handles navigation, labels, details, and actions.
- The hero pairs a large brand promise with a real editorial portrait and compact schedule/consultation panels.
- Keep corners restrained, borders fine, and buttons rectangular. Do not reuse the rounded blue/pink PDE card language inside this demo.
- Required sequence: hero, services, studio philosophy, gallery, testimonial, booking CTA, and footer.
- Mobile retains a fixed booking action without covering the final content.

Coleta demo (`/demo/coleta`, with `/demo/comida` compatibility):

- This route is the gastronomic brand exception to the midnight parent landing.
- Palette: charcoal `#0D0D0C`, ivory `#F4F1EC`, muted gold `#B79A5B`, and warm ink `#25211C`.
- Source Serif carries the culinary manifesto and section titles; Geist handles navigation, menu notes, schedules, and actions.
- The hero must feel cinematic and product-led, with the plated dish as the dominant first-viewport signal.
- Required sequence: hero, tasting menu, chef story, reservations and hours, pairing experience, ambience gallery, testimonial/contact, and footer.
- Use rectangular actions, fine borders, uppercase utility labels, and restrained gold. Do not reuse rounded PDE cards or pink accents.
- Mobile retains a fixed reservation action and enough bottom padding to prevent overlap.

Cellux demo (`/demo/taller`):

- This route is the technology and repair brand exception to the midnight parent landing.
- Palette: near-black `#08090B`, white `#FFFFFF`, soft catalog gray `#EDEDEC`, and graphite `#111214`.
- Geist carries the entire interface; hierarchy comes from weight, scale, spacing, and industrial precision rather than a display serif.
- The hero uses a monumental unbranded flagship phone composition with clear negative space for the promise.
- Required sequence: product hero, trust strip, popular products, repair feature, accessories and financing, brand strip.
- Use restrained rectangular buttons, circular icon actions, eight-pixel-or-less corners, fine black borders, and monochromatic photography.
- Mobile retains a fixed repair quote action and enough bottom padding to prevent overlap.

Landing demo collection:

- Show the first three demo pages by default.
- When a fourth page is added, expose the remaining cards through the `Ver más páginas` / `Ver menos` control.
- The control must preserve keyboard focus, `aria-expanded`, and the three-column desktop rhythm.

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
