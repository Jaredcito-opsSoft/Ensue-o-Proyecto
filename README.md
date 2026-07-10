# Presencia Digital Express

MVP funcional para crear mini paginas profesionales para negocios locales, con catalogo o servicios, WhatsApp, ubicacion, horarios, imagenes y QR.

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
- `CelFix Tuxtla`

Cada demo tiene servicios/productos, horarios, imagenes, WhatsApp, ubicacion y QR.

## Regla visual

No se usan gradientes. La direccion visual se apoya en fondos solidos, tipografia fuerte, fotografia, bordes sutiles, sombras suaves y animaciones discretas con GSAP.

## Documentacion de producto

- [Plan ejecutable](docs/plan-ejecutable.md)
- [Backlog del MVP](docs/backlog-mvp.md)
- [Arquitectura inicial](docs/arquitectura-inicial.md)
- [Modelo de datos](docs/modelo-datos.md)
- [Validacion comercial](docs/validacion-comercial.md)
- [Criterios de calidad](docs/criterios-calidad.md)
