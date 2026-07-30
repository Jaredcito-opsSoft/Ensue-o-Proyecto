# Atria

Atria es el estudio digital y la marca madre del proyecto. El repositorio conserva el
MVP funcional para crear paginas profesionales para negocios locales, con catalogo o
servicios, WhatsApp, ubicacion, horarios, imagenes y QR.

## Arquitectura de marca

- `Atria`: marca madre y estudio digital.
- `Atria Web`: sitios personalizados con presencia online incluida.
- `Ensueño Momentos`: experiencias digitales para celebraciones.
- `LocalPOS`: producto independiente para ventas y operacion.
- `CelLab Tuxtla`: caso real desarrollado dentro de Atria.

No se utilizan los nombres `Ensueño Web`, `Ensueño Eventos` ni `Ensueño POS`.
`Presencia Esencial` tampoco se presenta como una linea independiente: Google
Business, Maps, WhatsApp, dominio y datos consistentes se integran a Atria Web segun
el alcance.
El manejo mensual de redes sociales y las automatizaciones genericas no forman parte
de la oferta principal de lanzamiento.

Produccion:

- LocalPOS: https://localpos-marketing.vercel.app/
- CelLab Tuxtla: https://localpos-cellab.vercel.app/

## Stack

- Next.js App Router
- React + TypeScript
- Tailwind CSS
- GSAP + `@gsap/react`
- PostgreSQL + Drizzle ORM
- Zod
- Auth basica para panel interno

## Rutas principales

- `/` landing publica
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
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_SALES_WHATSAPP=529611234567
DATABASE_URL=postgres://user:password@localhost:5432/presencia_digital_express
AUTH_SECRET=change-this-secret
ADMIN_EMAIL=admin@presenciadigital.local
ADMIN_PASSWORD_HASH=
```

Para desarrollo local, si `ADMIN_PASSWORD_HASH` esta vacio, el login acepta:

- Email: `admin@presenciadigital.local`
- Password: `admin12345`

Para produccion, genera un hash:

```bash
node -e "const bcrypt=require('bcryptjs'); console.log(bcrypt.hashSync('tu-password', 12))"
```

## Base de datos

Generar migraciones:

```bash
npm run db:generate
```

Aplicar migraciones:

```bash
npm run db:migrate
```

La app usa datos demo si no existe `DATABASE_URL`, para que landing, demos, panel y QR puedan revisarse desde el primer arranque.

## Demos incluidos

- `Bella Imagen Tuxtla`
- `Sazon Coleta`
- `Cellux`

Cada demo tiene servicios/productos, horarios, imagenes, WhatsApp, ubicacion y QR.

## Regla visual

La landing publica de Atria es luminosa, editorial y humana. Utiliza gris claro, blanco,
crema, grafito y terracota; reserva el negro calido, cobre y dorado para el
scrollytelling fotografico y Ensueño Momentos. No se usan gradientes decorativos. La
direccion visual se apoya en fondos solidos, fotografia, bordes sutiles y movimiento
que explica la relacion entre las soluciones.

## Documentacion de producto

- [Plan ejecutable](docs/plan-ejecutable.md)
- [Backlog del MVP](docs/backlog-mvp.md)
- [Arquitectura inicial](docs/arquitectura-inicial.md)
- [Modelo de datos](docs/modelo-datos.md)
- [Validacion comercial](docs/validacion-comercial.md)
- [Criterios de calidad](docs/criterios-calidad.md)
- [Arquitectura de marca Atria](docs/atria-arquitectura-marca.md)
