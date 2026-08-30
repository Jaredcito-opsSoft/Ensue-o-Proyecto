# Alebrije Tech

Alebrije Tech es el estudio digital y la marca madre del proyecto. El repositorio conserva el
MVP funcional para crear páginas profesionales para negocios locales, con catálogo o
servicios, WhatsApp, ubicación, horarios, imágenes y QR.

## Arquitectura de marca

- `Alebrije Tech`: marca madre y estudio digital.
- `Alebrije Web`: sitios personalizados con presencia online incluida.
- `Ensueño Momentos`: experiencias digitales para celebraciones.
- `LocalPOS`: producto independiente para ventas y operación.
- `CelLab Tuxtla`: caso real desarrollado dentro de Alebrije Tech.

No se utilizan los nombres `Ensueño Web`, `Ensueño Eventos` ni `Ensueño POS`.
`Presencia Esencial` tampoco se presenta como una línea independiente: Google
Business, Maps, WhatsApp, dominio y datos consistentes se integran a Alebrije Web según
el alcance.
El manejo mensual de redes sociales y las automatizaciones genéricas no forman parte
de la oferta principal de lanzamiento.

Producción:

- Alebrije Tech: https://alebrijetech.vercel.app/
- LocalPOS: https://localpos-marketing.vercel.app/
- CelLab Tuxtla: https://localpos-cellab.vercel.app/

Alebrije Tech opera como estudio digital con atención remota. No cuenta actualmente con un
establecimiento abierto al público y su SEO no depende de Google Business Profile.

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- GSAP + `@gsap/react`
- PostgreSQL + Drizzle ORM
- Zod
- Auth básica para panel interno

## Rutas principales

- `/` landing pública
- `/demo/estetica`
- `/demo/comida`
- `/demo/taller`
- `/negocio/[slug]`
- `/panel/login`
- `/panel`
- `/panel/negocios`
- `/panel/negocios/[id]/entrega`
- `/api/qr/[slug]`
- `/api/health`

## Correr localmente

```bash
npm install
npm run dev
```

Abre `http://localhost:3000`.

## Variables de entorno

Copia `.env.example` a `.env.local`.

```bash
NEXT_PUBLIC_SITE_URL=https://alebrijetech.vercel.app
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SALES_WHATSAPP=529612858828
GOOGLE_SITE_VERIFICATION=
DATABASE_URL=postgres://user:password@localhost:5432/presencia_digital_express
AUTH_SECRET=change-this-secret
ADMIN_EMAIL=admin@presenciadigital.local
ADMIN_PASSWORD_HASH=
```

## Regla visual

La landing pública de Alebrije Tech es luminosa, editorial y humana. Utiliza gris claro, blanco,
crema, grafito y terracota; reserva el negro cálido, cobre y dorado para el
scrollytelling fotográfico y Ensueño Momentos. No se usan gradientes decorativos. La
dirección visual se apoya en fondos sólidos, fotografía, bordes sutiles y movimiento
que explica la relación entre las soluciones.
