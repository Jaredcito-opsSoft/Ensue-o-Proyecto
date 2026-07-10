# Presencia Digital Express Interface System

## Direction

Local premium, direct and operational. The public pages sell trust and clarity for local businesses; the admin panel stays quiet and practical.

The public experience should feel more like a polished digital business card studio than a generic SaaS landing. The first impression must be tactile, editorial, and easy to trust: a business owner should understand the offer in seconds and want their own page to look that composed.

## Visual Rules

- No gradients: no `linear-gradient`, `radial-gradient` or `conic-gradient`.
- Use solid warm paper surfaces, strong typography, real photography, subtle borders and soft shadows.
- Accent is scarce: deep green for primary actions, earth/blue only as supporting identity colors.
- Motion is GSAP-based, short and purposeful. Public pages can have reveals; the panel stays restrained.

## Tokens

- Paper: `#F7F3EC`
- Paper strong: `#EFE8DD`
- Surface: `#FFFAF2`
- Ink: `#171717`
- Muted: `#525252`
- Border: `#D8D2C8`
- Accent: `#0F3D2E`
- Earth: `#8A5A44`
- Blue: `#1E3A5F`

## Visual Direction Board

### Reference Blend

- Apple product pages: one idea per section, strong visual confidence, generous whitespace, and motion that never gets in the way.
- Linear: precise hierarchy, quiet surfaces, disciplined spacing, and almost invisible interface structure.
- BP&O / Minimalissimo: restrained local-premium identity, print-like composition, tactile materials, and sober color.
- Motion.dev: transform-first motion, short staggers, spring-like settle, performance awareness, and reduced-motion respect.
- Mobbin mobile patterns: clear sticky actions, large tap targets, scannable cards, and mobile-first reading order.

### What To Borrow

- From Apple: narrative pacing and large, confident product moments.
- From Linear: hierarchy, density discipline, and understated controls.
- From BP&O: restrained brand feel, tactile paper/card cues, and premium local personality.
- From Motion.dev: motion principles only, not the black/neon look.
- From Mobbin: mobile ergonomics and action placement.

### What Not To Copy

- Do not copy brand palettes, exact layouts, slogans, component shapes, or signature animations from reference sites.
- Do not use Motion.dev's black/neon aesthetic.
- Do not turn the landing into a generic SaaS dashboard page.
- Do not use glassmorphism, glow-heavy effects, large decorative blobs, or gradients.
- Do not make animations the content. The offer must remain readable with motion disabled.

### Photography Direction

- Use real-business feeling photography: hands, counters, storefront details, food plates, tools, salon interiors, phones, menus, QR/printed cards.
- Avoid anonymous stock smiles, dark abstract images, blurred atmospheres, or photos where the business cannot be understood.
- Crop photos like editorial product photography: clear subject, generous negative space, useful detail.
- Images should help the owner imagine their own page, not merely decorate the layout.

### Composition Direction

- First viewport: offer + CTA + tangible preview. The user should understand "mini pagina + WhatsApp + QR" immediately.
- Sections should behave like a guided sales conversation: problem -> solution -> proof/demos -> packages -> process -> FAQ -> CTA.
- Use full-width bands or unframed layouts, not nested card stacks.
- Let one object dominate each section: hero card, problem grid, demo rail, package comparison, QR/share card.
- Mobile layout should lead with text and CTA, then preview. Desktop can balance text and visual preview side by side.

### Typography Direction

- Geist remains the base for now: clean, precise, and legible.
- Large headings should feel editorial: strong weight, tight line-height, balanced wrapping.
- Body copy should be plain and direct, never technical.
- Avoid tiny labels except for category/metadata chips. Important copy starts at readable mobile sizes.

### Tone And Copy

- Speak to a business owner, not a developer.
- Prefer: "Todo en un solo link", "Listo para compartir", "Tus clientes encuentran horarios, servicios y ubicacion".
- Avoid: "backend", "CRUD", "arquitectura", "SaaS", "sistema robusto", "modulo avanzado".
- CTA language should name the outcome: "Solicitar mi pagina", "Ver demo", "Escribir por WhatsApp".

### Section Patterns

- Hero: editorial headline, quick proof chips, primary WhatsApp CTA, secondary demo CTA, and living business card preview.
- Problem: short quoted pains in breathable cards; no long explanations.
- Solution: dark solid band allowed when it creates focus, but no gradient or glow.
- Demos: three niche cards with real photo crop, category, benefit note, and clear link.
- Packages: no final prices yet; use validation labels such as "Ideal para empezar" or "Precio piloto".
- Mini page: premium digital card, visible WhatsApp, visible location, scannable catalog, gallery, hours, QR/share block.
- Mobile mini page: sticky action bar for WhatsApp and ubicacion; calm, no pulsing.

## Component Patterns

- Buttons: 44px minimum height, rounded-full, 14px/600, primary deep green.
- Cards: 22px radius, warm surface, subtle border, soft shadow.
- Admin inputs: inset warm paper fill, 12px radius, visible label above control.
- Public mini page: large image + compact action block, WhatsApp as primary action.
- Public landing signature: editorial hero with a business card/mockup, proof chips, QR cue, and sparse deep-green action.
- Mobile business page: fixed bottom action bar with WhatsApp and Ubicacion, only on small screens.
- Demo cards: strong photo crop, category label, benefit note, and hover lift on desktop.
- QA rule: public hero motion must reveal copy and CTAs quickly on mobile; avoid long stagger chains that delay reading.
- Image rule: public photographic assets use `next/image` with explicit sizes; remaining `<img>` usage should be limited to internal/admin utility views unless deliberately documented.

## Public Page Signature

- The landing should open with an editorial promise, not a generic hero: large type, immediate CTA, business-card preview, QR cue, and proof chips.
- Use a "living business card" motif: page previews should feel like physical cards becoming shareable links.
- Avoid decorative noise. One memorable element per view is enough: hero card, demo rail, package comparison, or QR/share block.
- Demos should feel like real local cases, not placeholders. Photography, category labels, benefit notes, and action buttons must make each niche legible.

## Motion Direction

- Keep GSAP as the implementation library for now. Use Motion.dev as inspiration for motion behavior, not as a required dependency until approved.
- Prefer transform and opacity. Motion.dev emphasizes independent transforms and hardware-accelerated patterns; mirror that discipline in GSAP.
- Use short staged reveals: title words can stagger, but body copy and CTAs must appear almost immediately on mobile.
- Use scroll reveals sparingly for section entrances, demo cards, package cards, gallery images, and final CTA.
- Use spring-like easing for microinteractions: hover lift, press feedback, and card settle should feel responsive rather than floaty.
- Avoid drag, confetti, typewriter, or novelty effects for the MVP. They do not match the sober local-premium direction.
- Consider a very restrained ticker only if it communicates useful proof, such as "WhatsApp · QR · Catalogo · Ubicacion"; no decorative marquee.
- Respect reduced motion. Important content must never depend on animation to be readable.

## Motion Ideas To Approve

1. Hero card entrance: business preview card rises 12-18px with opacity, then QR chip settles in with a tiny scale.
2. Demo rail: demo cards reveal with a 40ms stagger and a subtle hover lift on desktop only.
3. Mini page service cards: services enter as a quick stagger when the catalog section reaches the viewport.
4. Gallery reveal: images fade and rise individually, no zoom unless user hovers on desktop.
5. Mobile action bar: appears once and stays calm; no pulsing, bouncing, or attention-seeking loop.
6. Share/QR block: QR card can have a small "settle" animation on entrance to suggest handoff/delivery.

## Approved Motion Implementation Notes

- Implemented a restrained signal ticker inspired by Motion.dev ticker patterns, but used only for product proof: "Mini pagina", "WhatsApp directo", "Codigo QR", "Catalogo claro", and related signals.
- Implemented hero preview settle using GSAP transform/opacity, echoing Motion.dev's transform-first and spring-like motion principles.
- Do not copy Motion.dev's black/neon visual system. The reference is animation discipline, not palette or brand expression.

## Performance Guardrails

- If an animation needs layout measurement or continuous scroll updates, justify it before implementation.
- No animation should exceed 700ms for normal section entrance or 180ms for button/press feedback.
- Prefer one timeline per section over many independent effects.
- Browser QA must include mobile widths 360, 390, 414, and 430.
- Use MotionScore-style thinking: detect visual jank, long animation chains, excessive repaint, and content delayed by motion.
