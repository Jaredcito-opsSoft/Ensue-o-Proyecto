# Modelo de Datos Inicial

Este modelo busca soportar el MVP sin convertirlo en un sistema administrativo grande.

## negocios

| Campo | Tipo sugerido | Notas |
| --- | --- | --- |
| id | uuid | Identificador interno. |
| nombre | text | Obligatorio. |
| slug | text | Unico, legible y compartible. |
| categoria | text | Belleza, comida, servicios, tienda, eventos, salud, reparaciones, educacion u otro. |
| descripcion | text | Texto publico del negocio. |
| whatsapp | text | Obligatorio para publicar si es el canal principal. |
| telefono | text | Opcional. |
| direccion | text | Direccion visible. |
| google_maps_url | text | Link para abrir ubicacion. |
| horario | text | Version simple para MVP. |
| facebook_url | text | Opcional. |
| instagram_url | text | Opcional. |
| logo_url | text | Opcional. |
| portada_url | text | Imagen principal. |
| estado | text | Estado operativo/publicacion. |
| publicado | boolean | Control rapido para mostrar u ocultar. |
| created_at | timestamp | Fecha de creacion. |
| updated_at | timestamp | Fecha de actualizacion. |

## servicios_productos

| Campo | Tipo sugerido | Notas |
| --- | --- | --- |
| id | uuid | Identificador interno. |
| negocio_id | uuid | Relacion con negocios. |
| nombre | text | Obligatorio. |
| descripcion | text | Opcional. |
| precio | text | Texto flexible: "$150", "Desde $300", "Cotizar". |
| categoria | text | Opcional. |
| imagen_url | text | Opcional. |
| visible | boolean | Control de publicacion. |
| orden | integer | Orden de aparicion. |
| created_at | timestamp | Fecha de creacion. |
| updated_at | timestamp | Fecha de actualizacion. |

## imagenes_negocio

| Campo | Tipo sugerido | Notas |
| --- | --- | --- |
| id | uuid | Identificador interno. |
| negocio_id | uuid | Relacion con negocios. |
| imagen_url | text | URL o archivo subido. |
| descripcion | text | Alt/caption opcional. |
| tipo | text | portada, galeria, producto, trabajo, instalacion. |
| orden | integer | Orden de aparicion. |
| created_at | timestamp | Fecha de creacion. |

## solicitudes

| Campo | Tipo sugerido | Notas |
| --- | --- | --- |
| id | uuid | Identificador interno. |
| nombre_solicitante | text | Persona interesada. |
| whatsapp | text | Contacto. |
| nombre_negocio | text | Negocio prospecto. |
| tipo_negocio | text | Nicho/categoria. |
| necesidad | text | Dolor principal. |
| estado | text | nuevo, contactado, interesado, descartado, convertido. |
| comentarios | text | Notas internas. |
| created_at | timestamp | Fecha de solicitud. |
| updated_at | timestamp | Fecha de actualizacion. |

## usuarios_admin

| Campo | Tipo sugerido | Notas |
| --- | --- | --- |
| id | uuid | Identificador interno. |
| nombre | text | Nombre del administrador. |
| email | text | Unico. |
| password_hash | text | Nunca guardar password plano. |
| rol | text | admin, editor. |
| activo | boolean | Control de acceso. |
| created_at | timestamp | Fecha de creacion. |
| updated_at | timestamp | Fecha de actualizacion. |

## Estados sugeridos del servicio

- nuevo
- informacion_pendiente
- en_configuracion
- en_revision
- cambios_solicitados
- entregado
- finalizado
- suspendido

## Reglas de negocio

- No publicar una mini pagina sin medio de contacto.
- Cada slug debe ser unico.
- Las imagenes deben ser proporcionadas o autorizadas por el cliente.
- El cliente no edita directamente su pagina en la primera etapa.
- Los cambios posteriores deben manejarse como rondas incluidas o mantenimiento.
- La informacion publica debe revisarse antes de entregar link y QR.
