# SEO de Atria

## Estado actual

- Atria no tiene establecimiento físico abierto al público.
- No se ha creado un Google Business Profile para Atria.
- El SEO y la indexación no dependen de Google Business Profile.
- URL canónica: `https://atria-designstudio.vercel.app/`.
- Posicionamiento inicial: Tuxtla Gutiérrez y Chiapas.
- Modelo de atención: digital o remoto.
- LocalPOS y CelLab son enlaces externos y no forman parte del sitemap de Atria.

Tuxtla Gutiérrez se utiliza como mercado inicial atendido. No representa una oficina,
sucursal o domicilio comercial. El sitio no debe mostrar horarios, mapas, coordenadas,
reseñas o imágenes de una oficina de Atria mientras esos datos no existan.

## Variables de entorno

```bash
NEXT_PUBLIC_SITE_URL=https://atria-designstudio.vercel.app
GOOGLE_SITE_VERIFICATION=
```

`NEXT_PUBLIC_SITE_URL` es la fuente de verdad para `metadataBase`, canonical, Open
Graph, robots, sitemap y JSON-LD. Debe usar HTTPS y no llevar slash final. Las URLs de
Preview y `localhost` nunca deben sustituir la URL canónica.

`GOOGLE_SITE_VERIFICATION` queda vacío hasta obtener una etiqueta real de Google
Search Console. No se debe inventar ni guardar un código de ejemplo como si fuera
válido.

## Comportamiento por entorno

La producción se identifica únicamente con `VERCEL_ENV=production`:

- Producción: permite indexación, publica el sitemap y emite JSON-LD.
- Preview y desarrollo: usan `noindex, nofollow`, `robots.txt` bloquea `/`, el sitemap
  no publica URLs y no se emite JSON-LD.

El sitemap contiene únicamente la página principal terminada. No incluye panel, API,
demos, páginas legales incompletas, hashes, parámetros ni sitios externos.

## Datos estructurados

Se publican únicamente:

- `WebSite` para Atria.
- `Organization` sin dirección física.
- `Service` para Atria Web, presencia online, Ensueño Momentos y soluciones digitales
  personalizadas.

No se permite `LocalBusiness`, `ProfessionalService`, `PostalAddress`, `geo`,
`hasMap`, `openingHours`, `AggregateRating` ni reseñas ficticias. `areaServed` describe
el mercado atendido y no una ubicación física.

## Google Search Console

1. Abrir Google Search Console.
2. Crear una propiedad de prefijo de URL para
   `https://atria-designstudio.vercel.app/`.
3. Elegir un método de verificación disponible.
4. Si se usa la etiqueta HTML, configurar `GOOGLE_SITE_VERIFICATION` en Vercel.
5. Volver a desplegar y confirmar la verificación.
6. Enviar `https://atria-designstudio.vercel.app/sitemap.xml`.
7. Inspeccionar la URL principal y confirmar que permite indexación.
8. Solicitar indexación una vez después de completar las comprobaciones.
9. Revisar indexación, experiencia, HTTPS, acciones manuales y seguridad.

Search Console no garantiza indexación ni posicionamiento.

## Cuándo evaluar Google Business Profile

Evaluarlo únicamente cuando Atria cumpla realmente alguna de estas condiciones:

- Empieza a atender clientes en un establecimiento real, señalizado y atendido durante
  horarios declarados.
- Visita regularmente a clientes en sus ubicaciones y puede operar como empresa de
  área de servicio.
- Cuenta con nombre, teléfono, categoría, servicios y áreas reales verificables.
- Puede cumplir las políticas de Google para ubicaciones o áreas de servicio.

Hasta entonces:

- No crear un perfil.
- No inventar una ubicación ni usar una oficina virtual o prestada.
- No publicar una dirección residencial.
- No simular una oficina.
- No añadir `LocalBusiness` al JSON-LD.

## Migración a dominio propio

Cuando exista un dominio definitivo, cambiar `NEXT_PUBLIC_SITE_URL`, configurar una
única versión canónica, redirigir las variantes, actualizar Search Console y enviar el
nuevo sitemap. Después se debe comprobar que canonical, Open Graph y JSON-LD ya no
apunten al subdominio de Vercel.

## Lista de validación

- Producción no contiene `noindex`.
- Preview y desarrollo sí contienen `noindex, nofollow`.
- Canonical apunta al dominio estable de Atria.
- Robots referencia el sitemap únicamente en producción.
- El sitemap usa exclusivamente el dominio estable.
- JSON-LD no contiene dirección, horarios, mapa ni tipos de negocio local.
- No se muestra Google Maps, una oficina o disponibilidad presencial de Atria.
- Search Console puede verificarse sin Google Business Profile.
- Tuxtla Gutiérrez aparece de forma natural como mercado atendido.
