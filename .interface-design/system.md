# Presencia Digital Express Interface System

## Direction

Local premium, direct and operational. The public pages sell trust and clarity for local businesses; the admin panel stays quiet and practical.

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
