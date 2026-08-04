---
name: pde-visual-system
description: Visual direction and implementation guardrails for Atria, Ensueño Momentos, public business pages, purposeful motion, mobile-first QA, and no-gradient local-premium UI.
---

# Atria Public Visual System Skill

Use this skill when designing, reviewing, or implementing the public experience for Atria and Ensueño Momentos:

- Landing page.
- Demo pages.
- Public mini business pages.
- Public motion and microinteractions.
- Visual QA and responsive polish.

Do not use this skill for backend, database, auth, CRUD, POS, inventory, billing, or internal admin workflows except for light visual consistency checks.

## Project Source of Truth (August 3, 2026)

Before changing Atria's public architecture, commercial copy, plans, demos, motion, or brand relationships, read:

1. `docs/fuentes/Documento_Maestro_Atria_Arquitectura_Comercial_Demos_Diseno.docx` — preserved original.
2. `docs/Documento_Maestro_Atria_Arquitectura_Comercial_Demos_Diseno.md` — searchable Markdown transcription.
3. `docs/arquitectura-landing-atria.md` — current implementation map.
4. `docs/auditoria-landing-atria.md` and `docs/implementacion-redesign-atria.md` — audit and implementation evidence.

Original DOCX SHA-256: `941B5027C215260DA46C31BFF332620AECF7CA4899BC68D41574F78D5D4CDFE1`.

Decision precedence inside the master document:

- `DECIDIDO`: binding project direction until the owner changes it.
- `RECOMENDADO`: preserve unless a later decision replaces it.
- `PENDIENTE`: never invent or publish as final.

Current commercial priority is Atria Web first, LocalPOS pilot second, Ensueño Momentos third, and custom projects only when capacity and scope allow. CelLab is proof, not a fifth service.

## Brand Architecture (July 29, 2026)

- Atria is the parent brand and digital studio.
- Atria Web creates custom business websites with online presence included according to scope.
- Domain, WhatsApp, consistent business data, SEO, and contact channels are Atria Web capabilities, not a separate product. Google Business Profile or Maps are evaluated only for clients with real, policy-compliant business information and are never automatic requirements.
- Ensueño Momentos is the emotional line for weddings, couples, birthdays, and celebrations.
- LocalPOS is an independent operational product created by Atria.
- CelLab Tuxtla is an operating project and case study, not an Atria service.
- Do not use Ensueño Web, Ensueño Eventos, or Ensueño POS.
- Social media management and generic automation are not core launch offers.

## Atria Operating Context (July 31, 2026)

- Atria is a digital-first studio and does not currently have an office or establishment open to the public.
- Tuxtla Gutiérrez and Chiapas describe the initial market served, never a physical address.
- Use language such as `atención digital`, `coordinamos proyectos en línea`, and `trabajamos con negocios de Tuxtla Gutiérrez y otras localidades`.
- Never invent an address, opening hours, map, coordinates, office photography, reviews, or in-person availability for Atria.
- Do not emit `LocalBusiness` or `ProfessionalService` structured data for Atria.
- Google Business Profile is not required for launch, Search Console, crawling, indexing, or SEO.
- Evaluate a Google Business Profile only after explicit owner confirmation that Atria has a real staffed location or regularly serves customers at their locations and can comply with service-area policies.

## Product Aesthetic

The public Atria landing is light, editorial, optimistic, and human. Light gray,
white, cream, graphite, and terracotta define the main experience. Warm black,
copper, and soft gold are reserved for the six-stage cinematic interlude and the
Ensueño Momentos contrast section.

Target reaction: "Quiero que mi negocio tenga una presencia asi de cuidada."

## Non-Negotiables

- Gradients are limited to low-opacity environmental light and readability overlays over photography. Never use colorful gradient decoration.
- No glow-heavy effects, decorative blobs, excessive glassmorphism, or generic SaaS hero patterns. Use neutral hairline borders, solid light fields, and purposeful photography instead.
- No WhatsApp-green branding. WhatsApp is a feature and CTA label, not the color identity.
- Avoid retro poster colors unless the user explicitly asks to return to that direction.
- Terracotta is Atria's primary action color. Gold and amber belong mainly to the dark cinematic interlude.
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

## Public Landing Palette

- Page: `#EDEDEB`
- Surface: `#FFFFFF`
- Surface soft: `#F5F2EE`
- Surface warm: `#F7EEE7`
- Text: `#111214`
- Text secondary: `#626267`
- Accent: `#EF5A2F`
- Accent hover: `#D84A24`
- Accent soft: `#FBE2D7`
- Border: `#D9D7D3`
- Cinematic dark: `#11100F`
- Copper: `#A7622C`
- Gold soft: `#E7B978`

The legacy PDE and Ensueño tokens remain available for panel compatibility,
existing demos, and the cinematic scrollytelling. They are not Atria's primary
landing identity.

## Identity Position

Recommended direction: Light Editorial Product House.

The hero signature is an original daylight studio image plus restrained, independently
controlled butterfly paths and one shared preview containing Atria Web, Ensueño
Momentos, and LocalPOS. It must communicate a product house, not a fictional unified
SaaS dashboard. Do not restore the 33 MB remote hero video: its embedded butterflies
cannot be controlled accessibly or paused with the page lifecycle.

Images can use black-and-white or high-contrast editorial treatment, especially in demos. Glass surfaces are allowed only when they clarify hierarchy: translucent but readable, bordered, and never dependent on blur alone for contrast.

## Typography

- Manrope is the current interface and body face.
- Cormorant Garamond is the display face for editorial headlines and the closing promise.
- Headings are large, confident, and tightly set.
- Body copy is plain, direct, and readable on mobile.
- Avoid technical language in public pages.

Preferred copy:

- "Tu negocio listo para compartir."
- "Todo en un solo link."
- "Mini pagina, QR y contacto directo."
- "Ideal para negocios que venden por WhatsApp."

Avoid in public copy:

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

- One GSAP ScrollTrigger timeline for the six-stage desktop/tablet narrative.
- Crossfades with restrained translation, scale, blur, and environmental light.
- Short section reveals below the narrative.
- Mobile natural-flow storytelling with no pin or scrub.
- An asymmetric editorial project showcase using real captures and explicit labels. Do not restore autoplay; use free scroll only when a future layout genuinely requires it and the user approves it.
- Primary actions may lift up to 3px on hover and compress to `0.97` on press. Do not loop or pulse.
- Carousel controls keep a familiar arrow visible at rest; small dot motion may support hover/focus but must never obscure the control's direction.
- The mobile navigation panel can use a short scale/translate entrance and 30ms staggered link reveals, while reduced motion shows all items immediately.

Avoid:

- Pulsing CTAs.
- Confetti.
- Typewriter.
- Drag interactions.
- Competing ScrollTriggers inside the six-stage narrative.
- Any animation that delays core content.

## Page Patterns

Landing:

1. Header and editorial hero.
2. Solution selector.
3. Real case, demos, and product proof.
4. What Atria is.
5. Atria Web and its demos.
6. Online presence included and client outcomes.
7. Six-stage GSAP narrative: Atria, web, presence, Ensueño Momentos, LocalPOS, growth.
8. Ensueño Momentos and LocalPOS pilot.
9. Audience, process, times, and preliminary plans.
10. FAQ, studio, contextual contact, footer, and legal links.

Current landing direction (July 29, 2026):

- The parent landing brand is Atria; Ensueño only appears as Ensueño Momentos.
- Use the art-directed AVIF files under `public/media/atria-scroll/desktop`,
  `tablet`, and `mobile` as successive states of one experience. Keep the sources and
  attribution in `public/media/atria-scroll/source` and `SOURCES.md`.
- Desktop uses one pinned ScrollTrigger timeline ending near `+=400%`; tablet uses a shorter pinned timeline; mobile and reduced-motion use normal document flow.
- Preload only the first scene. Warm the second scene as the sequence approaches and then load the remainder.
- Keep all explanatory content in semantic HTML. Information visible inside an image must not be the only source of meaning.
- Use the approved Atria Web Esencial, Atria Web Crecimiento, and Atria Profesional names with a clear scope disclaimer.
- Scope the light parent identity to `.atria-landing`; do not recolor demos, panel, backend, or LocalPOS.
- The Atria header uses restrained neutral liquid glass: compact, readable, measured for anchor offsets, and more opaque when the mobile menu is open.
- Do not refresh the six-stage ScrollTrigger as progressively loaded frames decode. Keep the first scene deterministic before scroll and let later images load without recalculating the pinned timeline.
- The Atria project showcase presents CelLab Tuxtla as a real case, LocalPOS as an independent pilot product, and Beauty LA and Coleta as clearly labeled design demos. Do not include Cellux in the parent portfolio.
- Ensueño Momentos should use human event photography where the gathering is immediately legible. Prefer celebrations with people, tables, light, and interaction over invitation flat lays.

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

- This route is a deliberate brand exception to the warm cinematic parent landing.
- Palette: warm ivory `#F6F1EA`, near-black `#1E1C19`, warm gray `#5A534D`, and translucent charcoal overlays.
- Source Serif carries the editorial headlines; Geist handles navigation, labels, details, and actions.
- The hero pairs a large brand promise with a real editorial portrait and compact schedule/consultation panels.
- Keep corners restrained, borders fine, and buttons rectangular. Do not reuse the rounded blue/pink PDE card language inside this demo.
- Required sequence: hero, services, studio philosophy, gallery, testimonial, booking CTA, and footer.
- Mobile retains a fixed booking action without covering the final content.

Coleta demo (`/demo/coleta`, with `/demo/comida` compatibility):

- This route is the gastronomic brand exception to the warm cinematic parent landing.
- Palette: charcoal `#0D0D0C`, ivory `#F4F1EC`, muted gold `#B79A5B`, and warm ink `#25211C`.
- Source Serif carries the culinary manifesto and section titles; Geist handles navigation, menu notes, schedules, and actions.
- The hero must feel cinematic and product-led, with the plated dish as the dominant first-viewport signal.
- Required sequence: hero, tasting menu, chef story, reservations and hours, pairing experience, ambience gallery, testimonial/contact, and footer.
- Use rectangular actions, fine borders, uppercase utility labels, and restrained gold. Do not reuse rounded PDE cards or pink accents.
- Mobile retains a fixed reservation action and enough bottom padding to prevent overlap.

Cellux demo (`/demo/taller`):

- This route is the technology and repair brand exception to the warm cinematic parent landing.
- Palette: near-black `#08090B`, white `#FFFFFF`, soft catalog gray `#EDEDEC`, and graphite `#111214`.
- Geist carries the entire interface; hierarchy comes from weight, scale, spacing, and industrial precision rather than a display serif.
- The hero uses a monumental unbranded flagship phone composition with clear negative space for the promise.
- The hero is a three-scene carousel for products, repair, and accessories. It advances every 5.2 seconds, pauses on hover or focus, exposes previous/next and direct slide controls, and disables autoplay when reduced motion is requested.
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
