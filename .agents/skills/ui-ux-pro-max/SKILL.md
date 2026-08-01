---
name: ui-ux-pro-max
description: Guidelines and design system standards for Senior UI/UX Pro Max web application design, micro-animations, responsive layout, and visual excellence.
---

# UI/UX Pro Max Design System Guidelines

This skill provides senior-level design system guidelines and standards for building visually stunning, modern, and accessible web experiences.

## Core Design Principles

1. **Editorial & Cinematic Aesthetics**
   - Use harmonized, curated color palettes (e.g., editorial light mode with warm accents, deep dark cinematic modes).
   - Pair high-contrast typography (serif titles + clean geometric sans body).
   - Enforce clean spacing hierarchies (`py-18`, `py-24`, `gap-6`, `gap-10`).

2. **Micro-Animations & Motion Design**
   - Subtlety over flashiness: 200ms–320ms `cubic-bezier(0.23, 1, 0.32, 1)` transitions.
   - Micro-interactions on buttons (`atria-shine`), icons (`atria-icon-wrapper`), and step numbers (`atria-step-number`).
   - Honor `prefers-reduced-motion: reduce` across all custom animations.

3. **Mobile First & Responsive Ergonomics**
   - Touch targets must be at least 44px x 44px.
   - Fluid typography with `clamp()` for small screens (`< 375px`).
   - Seamless navigation offsets for sticky/floating headers.

4. **Component Consistency**
   - Shared utility classes in `globals.css` rather than ad-hoc inline styles.
   - Semantic HTML5 layout (`section`, `header`, `footer`, `article`, `nav`).
