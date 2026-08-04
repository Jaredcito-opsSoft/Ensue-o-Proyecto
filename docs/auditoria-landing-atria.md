# Auditoría de la landing pública de Atria

**Fecha:** 2 de agosto de 2026  
**Rama de trabajo:** `codex/feature/redesign-atria`  
**Producción auditada:** [atria-designstudio.vercel.app](https://atria-designstudio.vercel.app/)  
**Alcance:** landing pública, componentes visuales, motion, recursos, SEO y rutas públicas relacionadas.

## 1. Diagnóstico ejecutivo

La landing actual tiene una identidad visual reconocible, una base técnica moderna y una arquitectura de marca mayormente correcta. El hero, la tipografía, la paleta editorial, las rutas de demos y el scrollytelling ya ofrecen una base reutilizable.

El problema principal no es una falta de diseño, sino el orden comercial. La experiencia tarda demasiado en demostrar trabajo verificable, mezcla explicación general con oferta, ofrece contacto directo antes de que el visitante conozca los proyectos y carece de piezas necesarias para tomar una decisión informada: selector de solución, condiciones resumidas, tiempos, FAQ y contacto contextual.

La estrategia de rediseño debe conservar la identidad visual y reorganizar el contenido bajo la secuencia:

**atraer → explicar la ruta adecuada → demostrar → generar confianza → facilitar contacto**.

## 2. Estado de Git inicial

| Comprobación | Resultado |
|---|---|
| Rama inicial | `main` |
| Sincronización inicial | `main` en el mismo commit que `origin/main` (`a32ca59`) |
| Commits locales sin publicar | Ninguno |
| Archivos modificados | Ninguno |
| Archivos no rastreados | `docs/arquitectura-landing-atria.md` |
| Rama objetivo | Ya existía, pero estaba atrasada y no tenía commits exclusivos |
| Protección aplicada | Se preservó su puntero en `codex/archive/redesign-atria-before-audit` |
| Rama activa | `codex/feature/redesign-atria`, adelantada al estado de `main` |

No se usó `reset`, `clean`, `stash`, merge, force push ni despliegue. `main` permanece intacta.

## 3. Fuentes y estado documental

Durante la auditoría inicial, el archivo solicitado como fuente principal no estaba disponible dentro del repositorio. La implementación se basó provisionalmente en:

- Prompt aprobado para esta auditoría y rediseño.
- `docs/arquitectura-landing-atria.md`.
- `docs/atria-arquitectura-marca.md`.
- `docs/seo-atria.md`.
- `.codex/skills/pde-visual-system/SKILL.md`.
- Código y recursos actuales.
- Landing desplegada.

El 3 de agosto de 2026 se recibió el documento maestro original. Se preservó en `docs/fuentes/Documento_Maestro_Atria_Arquitectura_Comercial_Demos_Diseno.docx` y se generó su transcripción buscable en `docs/Documento_Maestro_Atria_Arquitectura_Comercial_Demos_Diseno.md`.

**SHA-256 del original:** `941B5027C215260DA46C31BFF332620AECF7CA4899BC68D41574F78D5D4CDFE1`.

El documento original pasa a ser la fuente principal. Las decisiones marcadas como `PENDIENTE` continúan bloqueadas y no deben publicarse como definitivas.

## 4. Arquitectura técnica encontrada

| Área | Estado real |
|---|---|
| Framework | Next.js `16.2.10` |
| UI runtime | React y React DOM `19.2.4` |
| TypeScript | `^5`, modo `strict`, `noEmit` |
| Routing | App Router dentro de `src/app` |
| Landing | `src/app/(public)/page.tsx` |
| Layout raíz | `src/app/layout.tsx` |
| Layout público adicional | No existe; la landing usa el layout raíz |
| Estilos | Tailwind CSS 4 y estilos globales en `src/app/globals.css` |
| PostCSS | `@tailwindcss/postcss` |
| Fuentes | Manrope y Cormorant Garamond mediante `next/font/google` |
| Motion | GSAP `3.15.0`, `@gsap/react` `2.1.2`, ScrollTrigger |
| Iconos | `lucide-react` |
| Scripts | `dev`, `build`, `start`, `lint`, `db:generate`, `db:migrate` |
| Typecheck dedicado | No existe; puede ejecutarse `npx tsc --noEmit` |
| Tests | No existe script ni suite identificada |

## 5. Matriz de estado

Los estados utilizados son: **CONSERVAR, REFINAR, REFACTORIZAR, IMPLEMENTAR, POSPONER, ELIMINAR** y **BLOQUEADO POR INFORMACIÓN**.

| Elemento | Existe | Estado | Ubicación | Problema | Acción | Prioridad |
|---|---:|---|---|---|---|---|
| App Router | Sí | CONSERVAR | `src/app` | Ninguno para este alcance | Mantener estructura actual | P0 |
| Landing pública | Sí | REFACTORIZAR | `src/app/(public)/page.tsx`, `CinematicLanding.tsx` | Orden comercial poco directo | Reordenar composición sin reemplazar Next.js | P0 |
| Header flotante | Sí | REFINAR | `Header.tsx` | Navegación extensa, offset configurado en `0px`, sin estado de sección | Simplificar enlaces, corregir margen de anclas y conservar accesibilidad | P0 |
| Menú móvil | Sí | REFINAR | `Header.tsx` | Cierra por Escape y selección, pero no gestiona foco de forma completa | Reforzar foco, cierre y lectura | P0 |
| Hero editorial | Sí | REFINAR | `HeroSection.tsx` | El CTA secundario contacta demasiado pronto | Cambiar a “Ver proyectos” y mantener contacto en navbar | P0 |
| Fondo del hero | Sí | REFINAR | `public/images/landing/atria-hero.png` | PNG de 1.835 MB es candidato LCP | Crear variante optimizada conservando original | P0 |
| Mariposas | Sí | REFINAR | `HeroButterflies.tsx` | Trayectorias correctas, pero repiten indefinidamente dentro del hero | Limitar su presencia y salida; conservar pausa y reduced motion | P1 |
| Preview del hero | Sí | REFACTORIZAR | `AtriaProductPreview.tsx` | Usa tres capturas pero una imagen antigua de 1.557 MB; las acciones no son iguales de claras | Conectar vistas a destinos reales y sustituir recurso pesado | P0 |
| Selector “¿Qué necesitas?” | No | IMPLEMENTAR | Nuevo componente | Falta ruta de decisión temprana | Crear composición editorial interactiva con cuatro opciones | P0 |
| Proyectos tempranos | Parcial | REFACTORIZAR | `DemoPreviewSection.tsx` | Aparecen después de varias secciones y del scrollytelling | Mover temprano y convertir en showcase asimétrico | P0 |
| Fuente tipada de trabajo | No | IMPLEMENTAR | Nuevo `src/data/atria-work.ts` | Datos duplicados y hardcodeados | Centralizar casos, demos y productos | P0 |
| CelLab Tuxtla | Sí | CONSERVAR | `DemoPreviewSection.tsx` | URL funciona; descripción menciona integración no demostrada en la landing | Presentar solo capacidades verificables | P0 |
| LocalPOS en proyectos | Sí | REFINAR | `DemoPreviewSection.tsx` | Se presenta como “En producción”, no como piloto | Etiquetar producto/piloto y enlazar sitio real | P0 |
| Beauty LA | Sí | CONSERVAR | `/demo/estetica` | Demo funcional y noindex; datos ficticios propios de demo | Etiquetar inequívocamente como demostración | P0 |
| Coleta | Sí | CONSERVAR | `/demo/comida`, `/demo/coleta` | Dos rutas para el mismo demo | Elegir una ruta canónica interna para CTA; mantener compatibilidad | P0 |
| Cellux | Sí | ELIMINAR de portfolio | `/demo/taller` | Es demo histórica que puede confundirse con CelLab | Conservar ruta sin mostrarla en la landing | P0 |
| Qué es Atria | Sí | REFINAR | `AtriaIntroSection.tsx` | Aparece antes de la prueba y no cuenta origen del estudio | Mover tras proyectos y añadir historia breve honesta | P0 |
| Problemas y soluciones | Sí | REFACTORIZAR | `ProblemsSection.tsx` | Solapa el futuro selector y mezcla oferta con resultados | Transformar en resultados buscados o retirar duplicación | P0 |
| Atria Web | Sí | REFINAR | `ServicesSection.tsx` | Buena base, alcance todavía resumido | Convertir en sección comercial principal y aclarar límites | P0 |
| Presencia online incluida | Parcial | IMPLEMENTAR | Hoy dentro de `ServicesSection` y scrollytelling | No tiene explicación ni condiciones propias | Crear sección integrada a Atria Web | P0 |
| “Presencia Esencial” | No en landing activa | ELIMINAR como concepto | Componentes heredados/documentos antiguos | Nombre prohibido como producto independiente | No reactivar componentes heredados | P0 |
| Resultados buscados | Parcial | IMPLEMENTAR | Disperso en varios textos | Falta síntesis verificable sin métricas | Crear lista editorial de objetivos | P0 |
| Audiencias | Sí | REFINAR | `AudienceSection.tsx` | Grid repetitivo y cobertura limitada en copy | Crear composición editorial y ampliar cobertura remota | P1 |
| Scrollytelling | Sí | REFACTORIZAR | `AtriaScrollExperience.tsx` | Funciona con una timeline; pin de `450%` y texto introductorio largo | Reducir duración/espacio, mantener timeline única y móvil natural | P0 |
| Keyframes Atria | Sí | CONSERVAR | `public/media/atria-scroll/{desktop,tablet,mobile}` | Muy bien optimizados: conjunto derivado cercano a 0.5 MB | Mantener originales y carga progresiva | P0 |
| Keyframes Ensueño antiguos | Sí | ELIMINAR de carga activa | `public/media/ensueno-scroll` | Seis WebP suman ~9.18 MB; un frame aún se usa dos veces | Sustituir usos activos, conservar archivos por compatibilidad | P0 |
| Ensueño Momentos | Sí | REFACTORIZAR | `EnsuenoEventosSection.tsx` | Sección extensa, muchas tarjetas y módulos; domina demasiado el recorrido | Simplificar a promesa, capacidades y CTA contextual | P0 |
| Demos nuevas de Ensueño | No | POSPONER | N/A | No forman parte del alcance | No inventar | P2 |
| LocalPOS piloto | Parcial | REFINAR | `EnsuenoPOSSection.tsx` | Funciones generales, falta condición de piloto y acceso contextual | Comunicar piloto y enlazar producto sin duplicarlo | P0 |
| Proceso | Sí | REFACTORIZAR | `ProcessSection.tsx` | Solo seis pasos abstractos, sin pagos, contenido ni tiempos | Crear secuencia comercial completa y tiempos | P0 |
| Planes | Sí | REFACTORIZAR | `PackagesSection.tsx` | Publica referencias no verificadas y claims fuertes | Separar implementación/mantenimiento y suavizar condiciones | P0 |
| FAQ | No en landing activa | IMPLEMENTAR | Existe `FAQSection.tsx` heredado, no importado | Falta resolver objeciones comerciales actuales | Crear acordeón accesible desde datos tipados | P0 |
| Estudio detrás de Atria | Parcial | IMPLEMENTAR | Parte de `AtriaIntroSection` | Falta origen UNACH, modelo pequeño y remoto | Crear bloque breve sin nombres ni fotos ficticias | P0 |
| Contacto contextual | No | IMPLEMENTAR | Contacto actual único en `FinalCTASection.tsx` | Todos los servicios envían el mismo mensaje | Crear selector que prepare WhatsApp y ofrezca correo | P0 |
| Email público | No | IMPLEMENTAR | No está en `site.ts` ni footer | Falta canal alternativo | Añadir `atriacontacto.mx@gmail.com` | P0 |
| Footer | Sí | REFINAR | `FinalCTASection.tsx` | Buena base, falta correo y contexto de piloto | Ajustar enlaces y descriptor | P0 |
| Aviso de privacidad | Sí | BLOQUEADO POR INFORMACIÓN | `/privacidad` | Contiene compromisos y plazos legales no confirmados | Mantener ruta; no ampliar sin revisión legal | P1 |
| Términos | Sí | BLOQUEADO POR INFORMACIÓN | `/terminos` | Typo “Acepetación”; garantiza 99.9% y soporte <24h sin evidencia | Señalar para revisión; evitar reutilizar claims no confirmados | P0 |
| Metadata | Sí | REFINAR | `layout.tsx`, página pública, `site.ts` | Título centrado en Tuxtla y copy no coincide exactamente con aprobado | Actualizar fuente de verdad y descripción | P0 |
| Canonical | Sí | CONSERVAR | `site.ts`, metadata | Correcto en producción | Mantener `NEXT_PUBLIC_SITE_URL` | P0 |
| Robots | Sí | CONSERVAR | `robots.ts`, metadata | Producción indexa y previews noindex según `VERCEL_ENV` | Mantener y validar | P0 |
| Sitemap | Sí | REFINAR | `sitemap.ts` | Solo incluye `/`, legal indexa pero no aparece | Definir rutas públicas útiles sin externos ni demos | P1 |
| JSON-LD | Sí | REFINAR | `AtriaStructuredData.tsx` | Usa WebSite/Organization correctamente; falta email | Añadir datos reales, mantener exclusión de LocalBusiness | P0 |
| Open Graph | Sí | CONSERVAR | `og-image/route.tsx`, metadata | Implementación funcional | Ajustar copy si cambia descriptor | P1 |
| Search Console | Preparado | BLOQUEADO POR INFORMACIÓN | `GOOGLE_SITE_VERIFICATION` | No se puede confirmar verificación desde el repo | Mantener soporte y documentar dato faltante | P1 |
| Reduced motion | Sí | CONSERVAR | Motion components y CSS | Cobertura correcta en piezas principales | Validar experiencia completa | P0 |
| Carrusel automático | Sí | ELIMINAR/REFACTORIZAR | `DemoPreviewSection.tsx` | El encargo prohíbe carrusel automático y pide showcase editorial | Sustituir por composición estática navegable | P0 |
| Backend, DB, auth, panel | Sí | CONSERVAR intacto | `src/app/api`, `src/app/panel`, DB y auth | Fuera de alcance | No modificar | P0 |

## 6. Inventario real de demos, casos y productos

| Nombre | Tipo | Ruta o URL | Estado funcional | Nicho | Captura | CTA actual | Público | Etiqueta correcta | Navegable |
|---|---|---|---|---|---|---|---:|---:|---:|
| CelLab Tuxtla | Cliente/caso real | `https://localpos-cellab.vercel.app/` | HTTP 200 | Telefonía y reparación | `public/images/cellux/hero-phones.png` | Ver CelLab en producción | Sí | Sí, con copy por refinar | Sí |
| LocalPOS | Producto | `https://localpos-marketing.vercel.app/` | HTTP 200 | Operación de pequeños negocios | Frame antiguo de POS | Conocer LocalPOS | Sí | Parcial; falta “piloto” | Sí |
| Beauty LA | Demo | `/demo/estetica` | Ruta implementada | Belleza y bienestar | `public/images/landing/beauty-la.jpg` | Explorar Beauty LA | Sí | Sí | Sí |
| Coleta | Demo | `/demo/comida` | Ruta implementada | Gastronomía | `public/images/landing/coleta.jpg` | Explorar Coleta | Sí | Sí | Sí |
| Coleta alias | Demo | `/demo/coleta` | Ruta implementada | Gastronomía | Misma captura | No se usa en landing | No necesario | Sí | Sí |
| Cellux | Demo histórica | `/demo/taller` | Ruta implementada | Tecnología y reparación | Recursos `public/images/cellux` | No aparece en portfolio actual | No en landing | Se confunde con CelLab | Sí |
| Página configurable | Experimento/MVP | `/negocio/[slug]` | Depende de slug/datos | Negocios locales | Datos demo | Variable | No en portfolio | Requiere contexto | Sí, según slug |

No se encontraron demos navegables de Ensueño Momentos. No se crearán en esta implementación.

## 7. Inventario real de animaciones

| Animación | Tecnología | Estado | Observación |
|---|---|---|---|
| Entrada del hero | Timeline GSAP | REFINAR | Transform/opacity, limpia timeline y respeta reduced motion |
| Mariposas | GSAP keyframes | REFINAR | Entran y salen, cambian altura/escala/rotación, pausan con pestaña oculta; repiten indefinidamente |
| Header líquido | CSS/transiciones y estado React | CONSERVAR | Estable; revisar offset y foco móvil |
| Revelados de sección | `SectionReveal` + ScrollTrigger | REFINAR | Varias instancias independientes; revisar cantidad final tras reordenar |
| Scrollytelling | Una timeline ScrollTrigger | REFACTORIZAR | `scrub`, pin, reversible, `matchMedia`, `invalidateOnRefresh`; duración extensa |
| Carga de keyframes | IntersectionObserver | CONSERVAR | Primer frame prioritario, segundo calentado y resto diferido |
| Carrusel de proyectos | Intervalo + scroll nativo | ELIMINAR | Pausa por visibilidad/reduced motion, pero contradice nueva dirección sin autoplay |
| Microinteracciones | CSS/GSAP | REFINAR | Botones y flechas tienen movimiento contenido |

## 8. Inventario de recursos

Se identificaron **48 recursos visuales** con un peso total aproximado de **23.74 MB** en `public`:

| Formato | Cantidad | Peso aproximado |
|---|---:|---:|
| AVIF | 18 | 0.50 MB |
| JPG | 9 | 5.00 MB |
| PNG | 8 | 9.06 MB |
| SVG | 7 | 0.01 MB |
| WebP | 6 | 9.18 MB |

### Recursos críticos

| Recurso | Dimensiones | Peso | Uso | Diagnóstico |
|---|---:|---:|---|---|
| `atria-hero.png` | 1672×941 | 1.835 MB | Hero, prioridad alta | Optimizar a AVIF/WebP |
| `beauty-la.jpg` | 1600×2400 | 0.316 MB | Preview y proyecto | Correcto, servido por `next/image` |
| `coleta.jpg` | 1600×1088 | 0.310 MB | Atria Web y proyecto | Correcto |
| `ensueno-momentos-event.jpg` | 1800×2700 | 0.847 MB | Preview y Ensueño | Aceptable con `next/image`, revisar recorte |
| `keyframe-05-pos.webp` | 1672×941 | 1.557 MB | Preview hero y LocalPOS | Sustituir por AVIF existente o captura optimizada |
| Secuencia Atria desktop | 6 × 1600×900 | ~0.214 MB | Scrollytelling | Muy optimizada |
| Secuencia Atria tablet | 6 × 1200×900 | ~0.176 MB | Scrollytelling | Muy optimizada |
| Secuencia Atria móvil | 6 × 720×960 | ~0.113 MB | Scrollytelling | Muy optimizada |
| Secuencia Ensueño antigua | 6 × 1672×941 | ~9.18 MB | Solo queda un frame activo | Retirar de carga pública activa |

No se encontró video activo en el hero ni archivos MP4/WebM dentro de los recursos auditados. El fondo actual es una imagen local.

## 9. Rendimiento observado

- El hero usa `next/image`, `fill`, `priority` y `sizes="100vw"`.
- La imagen del hero es la candidata principal a LCP.
- El preview inferior carga tres imágenes dentro del primer viewport; dos son altas y una usa un frame WebP pesado.
- La secuencia Atria difiere imágenes posteriores y carga solo la primera de forma determinista.
- Las capturas de proyectos usan lazy loading.
- La página desplegada mide aproximadamente 16,223 px de alto a 1280×720, señal de una experiencia demasiado extensa.
- No se observó scroll horizontal en la captura inicial de 1280×720.
- No hay video que pausar; sí existen listeners de visibilidad para mariposas, scrollytelling y carrusel.
- No se encontraron recursos base64.
- El alcance de JavaScript cliente puede reducirse al eliminar el carrusel automático y simplificar Ensueño.

## 10. SEO y accesibilidad

### Correcto o reutilizable

- Un solo H1.
- `lang="es-MX"`.
- Metadata base y canonical.
- Open Graph y Twitter card.
- Robots dependiente de producción/preview.
- Sitemap sin demos ni dominios externos.
- JSON-LD `WebSite` y `Organization`, sin `LocalBusiness`.
- Demos con `noindex, nofollow`.
- Enlaces externos principales con nueva pestaña y `noopener noreferrer`.
- Menú con `aria-expanded`, `aria-controls` y cierre por Escape.
- Scrollytelling con contenido semántico fuera de las imágenes.

### Problemas o pendientes

- El CTA secundario del hero no coincide con la secuencia comercial aprobada.
- Faltan identificadores visuales explícitos para todos los enlaces externos.
- El offset de navegación está fijado en `0px`, lo que puede ocultar títulos tras el header.
- No hay FAQ accesible en la landing activa.
- No existe formulario/contextualizador de contacto.
- Falta email en la fuente de verdad y en JSON-LD.
- Search Console depende de una variable no confirmada.
- El título SEO debe alinearse al descriptor aprobado y la cobertura remota.
- Las páginas legales contienen afirmaciones que requieren revisión antes de tratarlas como definitivas.

## 11. Enlaces rotos, vacíos o riesgosos

- No se encontraron `href=""` ni `href="#"` vacíos en la landing activa.
- Atria, CelLab y LocalPOS respondieron HTTP 200 durante la auditoría.
- `/demo/comida` y `/demo/coleta` duplican contenido; no es un enlace roto, pero sí una duplicación de ruta.
- `Beauty LA` contiene enlaces y datos ficticios dentro de la demo. Son aceptables como contenido demostrativo, pero la landing debe mantener la etiqueta “Demostración”.
- Los componentes heredados `RedesignLanding`, `EnsuenoWebSection`, `SolutionSection` y otros no forman parte de la landing activa y contienen nomenclatura o dirección visual obsoleta. No deben reintroducirse accidentalmente.

## 12. Riesgos

### Git

- Documento no rastreado previo a la auditoría: debe conservarse.
- Rama objetivo histórica estaba atrasada: su referencia fue archivada antes de adelantarla.
- No hay commits locales exclusivos ni conflictos actuales.

### Técnicos

- Una landing de 19 secciones puede aumentar altura, JS y fatiga si no se controla el ritmo.
- El scrollytelling puede generar pin excesivo en portátiles bajos.
- El hero y el preview concentran demasiados recursos above the fold.
- Los datos hardcodeados pueden divergir entre hero, proyectos, footer y secciones.
- Las páginas legales contienen garantías técnicas no respaldadas.

### Comerciales

- Tiempos sugeridos de 1–3 días pueden ser percibidos como promesa si no se condicionan claramente.
- Precios y mantenimiento todavía requieren validación.
- “Piloto limitado a 3–5 negocios” debe confirmarse como disponibilidad vigente antes de publicación definitiva.
- “Respondemos el mismo día” necesita sostenerse operativamente.
- La historia de estudiantes de UNACH fue aprobada en el prompt, pero el documento maestro ausente impide verificar si debe ser permanente.

## 13. Archivos propuestos para modificar o crear

### Crear

- `src/data/atria-work.ts`
- `src/data/atria-content.ts`
- `src/components/landing/SolutionRouter.tsx`
- `src/components/landing/WorkShowcase.tsx`
- `src/components/landing/OnlinePresenceSection.tsx`
- `src/components/landing/OutcomesSection.tsx`
- `src/components/landing/FaqSection.tsx`
- `src/components/landing/StudioSection.tsx`
- `src/components/landing/ContactSection.tsx`
- `docs/implementacion-redesign-atria.md`

### Modificar

- `src/components/landing/CinematicLanding.tsx`
- `src/components/landing/Header.tsx`
- `src/components/landing/HeroSection.tsx`
- `src/components/landing/AtriaProductPreview.tsx`
- `src/components/landing/AtriaIntroSection.tsx`
- `src/components/landing/ServicesSection.tsx`
- `src/components/landing/AudienceSection.tsx`
- `src/components/landing/EnsuenoEventosSection.tsx`
- `src/components/landing/EnsuenoPOSSection.tsx`
- `src/components/landing/ProcessSection.tsx`
- `src/components/landing/PackagesSection.tsx`
- `src/components/landing/FinalCTASection.tsx`
- `src/components/motion/AtriaScrollExperience.tsx`
- `src/components/motion/HeroButterflies.tsx`
- `src/lib/site.ts`
- `src/lib/scroll-stages.ts`
- `src/app/globals.css`
- `src/app/(public)/page.tsx`
- `src/app/sitemap.ts`
- `src/components/seo/AtriaStructuredData.tsx`
- `docs/Documento_Maestro_Atria_Arquitectura_Comercial_Demos_Diseno.md` únicamente para registrar decisiones confirmadas o reconstruirlo con autorización implícita del encargo.

### Recursos

- Crear una variante optimizada del hero conservando `atria-hero.png`.
- Sustituir el frame antiguo de LocalPOS en componentes activos.
- No borrar recursos fuente ni recursos usados por demos.

## 14. Archivos y áreas que permanecerán intactos

- `src/app/api/**`
- `src/app/panel/**`
- `src/components/panel/**`
- Autenticación, sesiones, roles y permisos.
- Drizzle, migraciones, esquemas y base de datos.
- Supabase y cualquier integración operativa.
- Lógica de negocio de páginas configurables.
- Componentes internos de Beauty LA, Coleta y Cellux.
- Repositorios y despliegues de LocalPOS y CelLab.
- Datos operativos existentes.

## 15. Decisión de continuidad

No existe riesgo serio de pérdida de trabajo. La rama está protegida, la única modificación previa está identificada y el rediseño puede limitarse a la superficie pública.

Se continúa con la implementación bajo estas condiciones:

- No inventar pruebas, métricas, clientes, redes ni funcionalidades.
- Tratar precios, tiempos y condiciones como referencias condicionadas.
- No ampliar las páginas legales sin revisión.
- Mantener demos y productos externos sin modificarlos.
- Registrar la ausencia del documento maestro hasta reconstruirlo o recuperarlo.

## 16. Reauditoría del concepto “Atria se muestra trabajando”

El documento maestro fue recuperado y el encargo posterior exigió que la landing mostrara el trabajo del estudio en vez de limitarse a describir servicios. La matriz original se conserva como registro del estado previo; las siguientes decisiones reemplazan las recomendaciones visuales anteriores:

| Área | Decisión aplicada |
|---|---|
| Hero | REFACTORIZADO como archivo abierto con CelLab, Coleta, Ensueño y LocalPOS |
| Selector | AMPLIADO a cinco rutas: Atria Web, archivo, Ensueño, LocalPOS e idea diferente |
| Proyectos | REFACTORIZADO como archivo asimétrico con estado y tipo explícitos |
| Atria Web | REFACTORIZADO en seis capas con entregables observables |
| Demos | IMPLEMENTADO laboratorio comparativo separado del archivo |
| Presencia online | REFACTORIZADA como sistema de conexiones alrededor del sitio |
| Scrollytelling | REFINADO a 320% en escritorio y 235% en tableta |
| Ensueño | REFACTORIZADO en antes, durante y después |
| LocalPOS | REFACTORIZADO con lenguaje operativo y estado de piloto |
| Proceso | REFACTORIZADO como tablero Atria/cliente/entregable/condición |
| Planes | REFACTORIZADOS como niveles de intervención |
| Contacto | AMPLIADO a brief contextual sin almacenamiento ni envío automático |

### Riesgo de Git vigente

La implementación continúa en `codex/feature/redesign-atria` sobre un conjunto amplio de cambios locales no confirmados. No se realizó commit, push, merge ni despliegue. Backend, panel, autenticación, base de datos y repositorios externos permanecen intactos.

### Resultado técnico de esta iteración

- `npm run lint`: 0 errores; avisos heredados fuera de la landing y uno heredado en componente no activo.
- `npx tsc --noEmit`: aprobado.
- `npm run build`: aprobado, 19 páginas generadas.
- QA visual: hero completo en escritorio y móvil, un solo H1, imágenes principales cargadas, anclas alineadas y sin desborde horizontal.
