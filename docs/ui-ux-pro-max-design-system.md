# UI/UX Pro Max Design System Notes

Fecha: 2026-07-14

## Consulta Usada

```bash
python .codex\skills\ui-ux-pro-max\scripts\search.py "local business SaaS landing glass minimal trustworthy mobile first" --design-system -p "Presencia Digital Express" -f markdown
```

## Decision Aplicada

La recomendacion base de la skill fue una landing minimalista de una sola columna, mobile-first, con tipografia grande, mucho espacio, una CTA dominante y alto contraste. La paleta automatica sugeria naranja como color principal, pero para Presencia Digital Express se adapto segun psicologia de color:

- Azul: confianza, estabilidad y accion principal.
- Teal: claridad, avance, checks y beneficios.
- Navy: profundidad para bloques fuertes y cierre.
- Coral: calidez humana en etiquetas puntuales.
- Blanco/glass: orden, limpieza y sensacion de producto SaaS.

## Reglas De Implementacion

- Mantener una sola accion primaria por pantalla o seccion.
- Usar superficies glass solo como jerarquia: borde visible, blur moderado y contraste suficiente.
- Evitar amarillo dominante, verde WhatsApp como identidad, gradientes y brillos decorativos.
- Priorizar mobile-first: botones de al menos 44px, textos legibles y no horizontal scroll.
- Motion solo con `transform` y `opacity`, respetando `prefers-reduced-motion`.
- Usar iconos SVG consistentes de Lucide, no emojis como iconos estructurales.

## Estructura UX De Landing

1. Hero con promesa directa, CTA y preview de la tarjeta viva.
2. Ticker de capacidades como prueba de producto.
3. Problema real del negocio local.
4. Solucion modular tipo SaaS.
5. Beneficios de negocio.
6. Demos por nicho.
7. Paquetes piloto.
8. Proceso guiado.
9. FAQ.
10. CTA final.

## Criterio De Calidad

La pagina debe provocar: "mi negocio se veria confiable compartiendo esto". Si un efecto visual no mejora claridad, confianza o decision, se elimina.
