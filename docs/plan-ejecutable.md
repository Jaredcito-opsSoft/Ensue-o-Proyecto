# Plan Ejecutable del MVP

## Vision

Ensueno es un servicio/plataforma para que negocios locales puedan tener una presencia digital clara, atractiva y facil de compartir sin aprender herramientas complejas.

La primera version debe resolver una necesidad concreta: que un negocio pueda compartir un solo link o QR con su informacion principal y recibir consultas por WhatsApp.

## Promesa simple

Te ayudamos a que tu negocio se vea profesional en internet con una mini pagina, catalogo, WhatsApp, ubicacion y QR listo para compartir.

## Usuarios principales

| Usuario | Necesidad |
| --- | --- |
| Dueno o encargado | Verse profesional, compartir informacion, reducir preguntas repetidas y recibir consultas por WhatsApp. |
| Cliente final | Ver servicios, productos, precios, fotos, horarios, ubicacion y contactar rapido. |
| Administrador interno | Crear negocios, editar informacion, revisar paginas, generar links y entregar QR. |

## Nichos iniciales

Prioridad alta:

- Esteticas y barberias.
- Negocios de comida.
- Talleres de celulares.

Prioridad media:

- Pastelerias y florerias.
- Tiendas de ropa o accesorios.
- Salones y proveedores de eventos.

## Alcance del MVP

### Incluye

- Landing publica del servicio.
- CTA a WhatsApp con mensaje precargado.
- Panel interno protegido.
- CRUD de negocios.
- CRUD de productos, servicios o menu.
- Gestion basica de imagenes mediante URL o subida futura.
- Estados del servicio.
- Mini pagina publica por slug.
- Boton de WhatsApp.
- Boton de ubicacion.
- QR por negocio.
- Vista responsive cuidada para celular.

### No incluye

- POS.
- Inventario.
- Facturacion.
- Pagos en linea.
- Login para clientes.
- Editor visual.
- Agenda avanzada.
- Automatizaciones complejas de WhatsApp.
- Estadisticas avanzadas.
- Aplicacion movil nativa.

## Fases de ejecucion

### Fase 1. Validacion conceptual

Objetivo: confirmar problema, lenguaje, nichos y disposicion inicial de pago antes de construir funciones pesadas.

Entregables:

- Propuesta de valor en menos de un minuto.
- Guion de entrevista.
- Lista de 10 a 15 negocios candidatos.
- Registro de entrevistas.
- Patrones detectados.
- Rango de precios piloto.

Criterio de avance:

- 10 negocios entrevistados.
- 5 negocios interesados.
- 2 negocios con disposicion real de pago.
- Nicho inicial definido.

### Fase 2. Diseno visual profesional

Objetivo: definir una experiencia publica que un negocio si quiera compartir.

Entregables:

- Landing del servicio.
- Mini pagina movil.
- Sistema visual: colores, tipografia, botones, cards, iconos y espaciado.
- 3 demos por nicho: estetica/barberia, comida y taller de celulares.
- Estandares de fotografia.

Criterio de avance:

- La mini pagina se entiende sin explicacion.
- WhatsApp y ubicacion son visibles.
- El catalogo o servicios se ven ordenados.
- La experiencia movil se siente profesional.

### Fase 3. MVP funcional

Objetivo: crear, publicar y entregar mini paginas reales con operacion interna simple.

Entregables:

- Proyecto web configurado.
- Base de datos principal.
- Autenticacion basica para panel interno.
- Panel para negocios.
- Panel para servicios/productos.
- Pagina publica por slug.
- QR y link copiable.
- Flujo completo probado.

Criterio de avance:

- Un administrador puede crear un negocio sin editar codigo.
- El link publico funciona.
- WhatsApp, Google Maps y QR funcionan.
- La pagina se ve bien en celular.

### Fase 4. Piloto controlado

Objetivo: probar con 3 a 5 negocios reales cuando el MVP ya funcione de extremo a extremo.

Entregables:

- Paginas reales de negocios piloto.
- Links y QR entregados.
- Registro de retroalimentacion.
- Medicion basica de uso.
- Lista priorizada de mejoras.

Criterio de avance:

- Los negocios usan o comparten el link.
- Hay clics o intentos reales de contacto.
- El dueno percibe valor.
- Se identifica que mejorar antes de escalar.

### Fase 5. Iteracion

Objetivo: corregir, ajustar oferta y decidir que modulo conviene construir despues.

Opciones futuras:

- Agenda sencilla.
- Catalogo avanzado.
- Estadisticas basicas.
- Mantenimiento mensual.
- Control simple de ventas.
- Plantillas por nicho.

## Primera version tecnica sugerida

La primera version debe favorecer velocidad, claridad y bajo costo operativo.

Recomendacion inicial:

- Aplicacion web full stack.
- Rutas publicas para landing y mini paginas.
- Rutas protegidas para panel interno.
- Base de datos relacional simple.
- Almacenamiento de imagenes por URL inicialmente, con opcion de storage despues.
- Generacion de QR en servidor o cliente.

## Flujo principal

1. Administrador entra al panel.
2. Crea negocio.
3. Captura informacion basica.
4. Agrega servicios, productos o menu.
5. Agrega imagenes.
6. Revisa la vista publica.
7. Copia link y QR.
8. Entrega al negocio.
9. Negocio comparte link o QR.
10. Cliente final abre la pagina y contacta por WhatsApp.
