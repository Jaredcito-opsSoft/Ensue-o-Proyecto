# Arquitectura Inicial

## Recomendacion de stack

Para este MVP conviene un stack full stack simple, rapido de desplegar y comodo para construir interfaces cuidadas.

Opcion recomendada:

- Next.js con App Router.
- TypeScript.
- Tailwind CSS.
- Base de datos Postgres.
- ORM ligero como Prisma o Drizzle.
- Autenticacion simple para administradores.
- Generacion de QR con libreria de QR.
- Deploy en Vercel o plataforma equivalente.

La razon: el producto necesita buenas paginas publicas, rutas dinamicas por negocio, un panel interno y despliegue rapido. No necesita separar frontend y backend al inicio.

## Estructura de rutas

| Ruta | Tipo | Objetivo |
| --- | --- | --- |
| `/` | Publica | Landing comercial del servicio. |
| `/solicitar` | Publica | Formulario o CTA de solicitud. Puede iniciar como seccion de landing. |
| `/n/[slug]` | Publica | Mini pagina del negocio. |
| `/admin/login` | Privada | Acceso al panel interno. |
| `/admin` | Privada | Dashboard simple. |
| `/admin/negocios` | Privada | Listado de negocios. |
| `/admin/negocios/nuevo` | Privada | Alta de negocio. |
| `/admin/negocios/[id]` | Privada | Edicion de negocio. |
| `/admin/negocios/[id]/servicios` | Privada | Productos, servicios o menu. |
| `/admin/negocios/[id]/imagenes` | Privada | Imagenes del negocio. |
| `/admin/negocios/[id]/preview` | Privada | Vista previa antes de entregar. |
| `/admin/negocios/[id]/entrega` | Privada | Link publico, QR y checklist de entrega. |

## Pantallas del MVP

### Landing publica

Debe incluir:

- Propuesta de valor clara.
- Beneficios concretos.
- Nichos o ejemplos.
- Paquetes iniciales.
- Preguntas frecuentes.
- CTA a WhatsApp.
- CTA para solicitar informacion.

### Mini pagina publica

Debe incluir:

- Portada visual.
- Nombre y categoria del negocio.
- Descripcion breve.
- Boton principal de WhatsApp.
- Boton de ubicacion.
- Horarios.
- Servicios, productos o menu.
- Galeria basica.
- Redes sociales.
- QR o indicacion de compartir si aplica.

### Panel interno

Debe incluir:

- Login.
- Listado de negocios.
- Crear negocio.
- Editar datos principales.
- Agregar servicios/productos.
- Agregar imagenes.
- Cambiar estado.
- Copiar link publico.
- Ver QR.
- Revisar preview.

## Componentes principales

Publicos:

- `LandingHero`
- `BenefitsSection`
- `PackagesSection`
- `FaqSection`
- `WhatsAppCTA`
- `BusinessHero`
- `ServiceList`
- `BusinessGallery`
- `BusinessHours`
- `MapButton`
- `ShareBlock`

Administracion:

- `AdminShell`
- `BusinessTable`
- `BusinessForm`
- `ServiceProductForm`
- `ImageManager`
- `StatusBadge`
- `CopyPublicLinkButton`
- `QrPanel`
- `DeliveryChecklist`

## API o acciones del servidor

Operaciones minimas:

- Crear negocio.
- Editar negocio.
- Activar/desactivar publicacion.
- Crear servicio/producto.
- Editar servicio/producto.
- Cambiar visibilidad y orden.
- Agregar imagen.
- Eliminar imagen.
- Crear solicitud desde landing.
- Obtener negocio publico por slug.

## Reglas de publicacion

Una mini pagina puede publicarse cuando tenga:

- Nombre.
- Slug unico.
- Categoria.
- Descripcion.
- WhatsApp o telefono.
- Al menos direccion o link de Google Maps.
- Horario o nota de atencion.
- Estado apto para publicacion.

Idealmente tambien:

- Portada o imagen principal.
- Al menos un servicio/producto si el paquete lo requiere.

## Version 0.1 sugerida

La primera version codificable debe ser muy pequena:

1. Landing estatica con CTA a WhatsApp.
2. Datos semilla de 1 negocio demo.
3. Ruta publica `/n/[slug]`.
4. Mini pagina responsive completa para el negocio demo.
5. QR funcional del demo.

Esta version permite validar diseno y discurso antes de construir todo el panel.

## Version 0.2 sugerida

1. Base de datos.
2. Login admin.
3. CRUD de negocios.
4. CRUD de servicios/productos.
5. Link publico dinamico.
6. QR por negocio.
7. Checklist de entrega.

Esta version permite piloto controlado.
