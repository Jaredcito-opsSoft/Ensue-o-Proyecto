# Implementación del rediseño de Atria

**Fecha:** 3 de agosto de 2026  
**Rama:** `codex/feature/redesign-atria`  
**Estado:** segunda iteración implementada y validada localmente; sin commit, merge ni despliegue.

## 1. Diagnóstico

La landing tenía una dirección visual sólida, pero tardaba en demostrar trabajo y repetía parte de la oferta. Se conservó su identidad editorial y se reorganizó la experiencia para orientar, probar capacidad y explicar condiciones antes del contacto.

## 2. Git y protección

- Estado inicial: `main` limpio salvo `docs/arquitectura-landing-atria.md` no rastreado.
- `main` coincidía con `origin/main` en `a32ca59`.
- La antigua rama objetivo se preservó como `codex/archive/redesign-atria-before-audit`.
- Trabajo realizado en `codex/feature/redesign-atria`.
- No se usaron reset, clean, stash, merge, force push ni despliegue.

La matriz completa de elementos existentes está en [auditoria-landing-atria.md](./auditoria-landing-atria.md).

## 3. Conservado

- Next.js App Router, layouts y estructura pública.
- Paleta clara con terracota, Manrope y Cormorant Garamond.
- Header flotante, hero editorial y secuencia visual Atria.
- Rutas de Beauty LA, Coleta, Cellux y páginas configurables.
- Metadata base, robots, OG, JSON-LD y separación noindex de demos.
- Backend, panel, autenticación, base de datos y lógica operativa.

## 4. Refactorizado

- Orden completo de la landing.
- Header y cálculo real del offset de anclas.
- Hero, CTA secundario y preview de las tres líneas reales.
- Atria Web, Ensueño Momentos, LocalPOS, audiencia, proceso, planes y footer.
- Scrollytelling con menor pin y una sola timeline por breakpoint.
- Mariposas con recorridos finitos, salida de escena, pausa y reduced motion.
- Proyectos: carrusel automático sustituido por composición editorial estática.

## 5. Implementado

- Selector interactivo de soluciones.
- Showcase tipado con CelLab, Beauty LA, Coleta y LocalPOS.
- Presencia online integrada dentro de Atria Web.
- Resultados verificables sin métricas inventadas.
- FAQ accesible con 15 preguntas.
- Bloque del estudio remoto y origen UNACH aprobado.
- Contacto contextual por WhatsApp o correo, sin backend ficticio.
- Fuente tipada para trabajo, planes, FAQ y mensajes.
- Sitemap ampliado con rutas legales internas.

## 6. Copy y arquitectura de marca

- Atria permanece como estudio y marca madre.
- Atria Web es el servicio principal.
- Ensueño Momentos es una línea para celebraciones.
- LocalPOS se comunica como producto independiente en piloto.
- CelLab se identifica como caso real.
- Beauty LA y Coleta se identifican como demostraciones.
- Se retiraron del recorrido los conceptos y nombres prohibidos.

## 7. Motion

### Mariposas

Ahora entran desde fuera, recorren la escena mediante keyframes, varían altura, escala y rotación, salen antes de terminar el hero y no repiten indefinidamente. Se reducen en móvil, se ocultan con movimiento reducido, se pausan con la pestaña oculta y se limpian al desmontar.

### Scrollytelling

Conserva seis etapas y una timeline principal con `useGSAP`, `ScrollTrigger`, `gsap.matchMedia`, crossfade, reversibilidad e `invalidateOnRefresh`. El pin se redujo a 400% en escritorio y 300% en tablet; móvil presenta todo como lectura vertical sin pin prolongado.

## 8. Recursos y rendimiento

- `atria-hero.png` original conservado; nueva variante `atria-hero.avif`: ~29 KB.
- Nueva captura `cellab-project.avif`: ~28 KB, servida directamente por estar precomprimida.
- Preview de LocalPOS reutiliza la secuencia AVIF optimizada.
- Los keyframes Atria existentes pesan en conjunto cerca de 0.5 MB.
- Los seis WebP históricos de Ensueño (~9.18 MB) permanecen en disco, pero ya no se cargan en la landing activa.
- Imágenes de proyectos usan tamaños estables, `sizes` y carga diferida.

## 9. SEO

- Título: `Atria | Diseño web y soluciones digitales para negocios`.
- Descripción alineada al trabajo remoto desde Chiapas.
- Canonical basado en `NEXT_PUBLIC_SITE_URL`.
- `WebSite` y `Organization`, sin `LocalBusiness`.
- Email real incorporado a datos estructurados.
- Sitemap sin demos, panel, CelLab ni LocalPOS externos.
- Demos y previews conservan `noindex`.

## 10. Accesibilidad y responsive

- Un H1, landmarks y jerarquía de títulos.
- Menú con `aria-expanded`, `aria-controls`, cierre por Escape y cierre al seleccionar.
- FAQ con `details/summary` nativo.
- Foco visible, controles de al menos 44 px y enlaces descriptivos.
- Anclas verificadas con offset dinámico; el título queda debajo del header sin doble margen.
- Sin scroll horizontal en 360×800, 390×844, 414×896, 768×1024, 1280×720, 1366×768, 1440×900 y 1920×1080.
- Un H1 confirmado en todos los tamaños probados.

## 11. Validación técnica

| Comprobación | Resultado |
|---|---|
| TypeScript | `npx tsc --noEmit` aprobado |
| Build | `npm run build` aprobado |
| Tests | No existe script ni suite en `package.json` |
| Lint | `npm run lint` aprobado: 0 errores y 3 warnings heredados fuera de la landing activa |
| React/hidratación | Sin errores o warnings en la consola revisada |
| Enlaces vacíos | No encontrados en la landing activa |

## 12. Capturas

Las capturas de QA están en `docs/qa-atria/`:

- Hero escritorio y móvil.
- Selector.
- Proyectos, CelLab y demos.
- Atria Web.
- Scrollytelling.
- Ensueño Momentos.
- LocalPOS.
- Proceso.
- Planes.
- FAQ.
- Estudio.
- Contacto y footer.

## 13. Pospuesto o bloqueado

- Nuevas demos de Ensueño, configurador, blog, testimonios, logos y métricas.
- Redes oficiales y formulario con almacenamiento.
- Precios definitivos de implementación.
- Validación operativa del cupo de LocalPOS y respuesta el mismo día.
- Search Console depende de una variable real.
- Privacidad y términos existentes requieren revisión legal antes de considerarse definitivos.

## 14. Información necesaria

1. Dominio final y correo bajo dominio.
2. Precios aprobados y reglas de mantenimiento.
3. Cupo y condiciones vigentes de LocalPOS.
4. Contratos, privacidad y términos revisados.
5. Autorización y evidencia para convertir CelLab en caso de estudio completo.
6. Analytics y eventos de conversión.

## 15. Confirmación de alcance

No se modificaron backend, Drizzle, migraciones, Supabase, autenticación, APIs, panel, roles, permisos, lógica de negocio, proyectos LocalPOS o CelLab ni componentes internos de las demos. No se hizo merge, push a `main`, despliegue ni cambio en producción.

## 16. Documento maestro recuperado

El 3 de agosto de 2026 se incorporó el documento maestro original entregado por el propietario de Atria. El `.docx` se conserva en `docs/fuentes/` y su transcripción completa en Markdown reemplaza el resumen provisional. Las futuras decisiones de diseño deben respetar la jerarquía `DECIDIDO`, `RECOMENDADO` y `PENDIENTE` definida en ese documento.

## 17. Segunda iteración: el estudio abierto

La arquitectura visual posterior adopta el concepto **“Atria se muestra trabajando”**. La especificación completa está en [concepto-visual-atria-se-muestra-trabajando.md](./concepto-visual-atria-se-muestra-trabajando.md).

Cambios principales:

- El hero muestra cuatro piezas abiertas y navegables.
- El selector pasa de cuatro soluciones a cinco rutas del estudio.
- El portfolio se convierte en archivo vivo con estado, tipo y pregunta de diseño.
- Atria Web explica su construcción mediante seis capas y entregables.
- Se añade un laboratorio separado para comparar Beauty LA y Coleta.
- Presencia online pasa de checklist a sistema conectado.
- Ensueño se explica como ciclo antes/durante/después.
- LocalPOS adopta lenguaje e interfaz propios de un producto operativo.
- El proceso se convierte en un tablero con responsabilidades compartidas.
- Los planes se presentan como niveles de intervención.
- El contacto captura contexto y prepara un mensaje sin guardar ni transmitir datos automáticamente.

## 18. Componentes y datos añadidos

- `src/data/atria-studio.ts`: rutas, capas de Atria Web y estados del proyecto.
- `src/components/landing/DemoLabSection.tsx`: comparación navegable de demos.
- `src/components/landing/ContactSection.tsx`: brief local con WhatsApp y correo.

Los componentes existentes se adaptaron por función; no se renombraron únicamente para coincidir con el prompt.

## 19. QA de la segunda iteración

| Comprobación | Resultado |
|---|---|
| Lint | 0 errores; avisos no bloqueantes heredados |
| TypeScript | Aprobado |
| Build de producción | Aprobado |
| Hero escritorio | Archivo completo visible dentro del primer viewport |
| Hero móvil | Primera pieza completa y segunda pieza visible como pista de scroll |
| Desborde horizontal | No detectado |
| H1 | Uno |
| Anclas | Objetivo a 72–80 px bajo el header |
| Brief | Mensaje y enlaces actualizados en cliente, sin envío automático |
| Backend/demos | Sin modificaciones |
