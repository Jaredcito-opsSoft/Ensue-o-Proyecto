# Visual Direction Board

This document preserves the aesthetic direction for Presencia Digital Express / Ensueno so future design and implementation work stays coherent.

## Core Idea

The public experience should feel like a polished digital business card studio for local businesses.

The owner should think: "Si, quiero que mi negocio se vea asi."

## Reference Blend

| Reference | What we borrow | What we avoid |
| --- | --- | --- |
| Apple product pages | Narrative pacing, whitespace, confident product moments | Overly cinematic sections that slow the MVP |
| Modern Clean SaaS Company / Day Base | Simple nav, huge direct type, serif/italic emphasis, modular product structure | Copying the exact brand, black/white/yellow palette or database messaging |
| Linear | Precise hierarchy, subtle borders, disciplined spacing | Cold developer-dashboard feeling |
| BP&O / Minimalissimo | Local-premium restraint, print-like composition | Being too editorial to sell quickly |
| Motion.dev | Transform-first motion, short stagger, performance awareness | Black/neon brand look |
| Mobbin | Mobile-first action patterns and scannable cards | App-like complexity beyond the MVP |

## Visual Rules

- No gradients.
- No glow-heavy effects.
- No decorative blobs.
- No generic SaaS hero.
- Use cool white/glass surfaces, strong type, real photography, subtle borders, pale blue-gray separators, and blue as the trust/action color.
- Avoid WhatsApp-green branding. The feature can say WhatsApp, but the palette should feel like a glass-minimal SaaS product: navy, blue, teal, cool white, light gray, and a tiny coral warmth accent.
- Glassmorphism should be minimal: translucent white surfaces, visible borders, backdrop blur, and enough contrast for text.
- Use the Modern Clean SaaS reference for structure: simple top nav, one decisive hero sentence, clear CTA pair, product preview, and rows/sections that explain problem and solution without visual clutter.
- Use motion to make the page feel alive, not to distract.

## Photography

Use images that reveal the actual business world:

- Salon interiors.
- Food plates and counters.
- Repair tools and phones.
- Menus, QR cards, storefront details.
- Hands preparing, fixing, serving or showing.

Avoid:

- Anonymous corporate stock photos.
- Dark blurred images.
- Decorative abstract backgrounds.
- Images that do not explain the business.

## Motion

Implementation uses GSAP for now. Motion.dev is a reference for motion discipline.

Approved patterns:

- Hero preview card settle.
- QR chip settle.
- Short word/section reveal.
- Demo card stagger.
- Gallery reveal.
- Useful signal ticker.
- Mobile action bar stays calm.

Rules:

- Transform and opacity first.
- No long chains before content is readable.
- No pulsing CTA.
- No drag/confetti/typewriter for this MVP.
- Respect reduced motion.

## Landing Structure

1. Hero: offer, CTA and living business card preview.
2. Signal ticker: product proof, not decoration.
3. Problem: repeated pains from local businesses.
4. Solution: mini page, catalog, WhatsApp, location, QR.
5. Benefits: business outcomes.
6. Demos: beauty, food, repair.
7. Packages: validation-ready, no final pricing.
8. Process: five simple steps.
9. FAQ.
10. Final CTA.

## Mini Page Structure

1. Cover and business identity.
2. WhatsApp and location actions.
3. Business description.
4. Services/products.
5. Gallery.
6. Hours.
7. Location.
8. Social links.
9. QR/share block.
10. Footer.

## QA Checklist

- First viewport explains the product in seconds.
- Mobile CTAs are visible and easy to tap.
- No horizontal scroll at 360, 390, 414 or 430px.
- Images have alt text and useful crops.
- Motion does not delay reading.
- Gradients are absent from implementation.
- Public images use `next/image` when possible.
- Remaining image warnings must be documented if they are in internal views.
