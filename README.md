# PubliExpert AI Guild - Landing Page

Sitio web moderno y convertidor para PubliExpert AI Guild construido con **Next.js 15**, **React 19**, **Tailwind CSS**, **Framer Motion**, e **Impeccable design system**.

## 🚀 Features

✅ **Diseño Premium** - Dark mode elegante con gradientes modernos
✅ **Animaciones Suaves** - Framer Motion para UX fluida
✅ **Totalmente Responsive** - Mobile, tablet, desktop
✅ **Optimizado para Conversión** - CTAs estratégicas y claros
✅ **SEO Ready** - Metadata, Open Graph, Twitter Cards
✅ **Vercel Ready** - Deploy en 1 click
✅ **Performance** - Next.js optimizations + Tailwind purging
✅ **Accesible** - WCAG guidelines

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion 11
- **Design System**: Impeccable
- **Deployment**: Vercel
- **Package Manager**: npm

## 🛠️ Instalación Local

```bash
# Clonar o copiar el proyecto
cd guild-site

# Instalar dependencias
npm install

# Crear archivo .env.local
cp .env.example .env.local

# Actualizar variables en .env.local si es necesario

# Ejecutar en desarrollo
npm run dev

# Abrir en navegador
# http://localhost:3000
```

## 🚢 Deployment en Vercel

### Opción 1: CLI de Vercel

```bash
npm i -g vercel
vercel
```

### Opción 2: GitHub Integration

1. Push código a GitHub
2. Conectar repo en [vercel.com](https://vercel.com)
3. Auto-deploy en cada push

### Configurar Dominio Personalizado

1. En Vercel Dashboard → Settings → Domains
2. Agregar `guild.publiexpert.com`
3. Configurar DNS records según instrucciones

## 📁 Estructura de Archivos

```
guild-site/
├── app/
│   ├── layout.jsx           # Layout base
│   ├── page.jsx             # Home page
│   ├── globals.css          # Estilos globales
│   └── api/                 # API routes (opcional)
├── components/
│   ├── Header.jsx           # Navegación
│   ├── Hero.jsx             # Sección hero
│   ├── Features.jsx         # Features grid
│   ├── ToolsStack.jsx       # Stack de herramientas
│   ├── Pricing.jsx          # Pricing section
│   └── Footer.jsx           # Footer
├── public/                  # Archivos estáticos
├── styles/                  # Estilos adicionales
├── lib/                     # Utilidades
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── .env.example
```

## 🎨 Personalización

### Cambiar Colores

Editar `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: '#6366f1',      // Indigo
      accent: '#ec4899',       // Pink
    },
  },
},
```

### Actualizar Redirección

En `.env.local`:

```env
NEXT_PUBLIC_GUILD_REDIRECT=https://clients.publiexpert.com/communities/groups/publiexpert-ai-guild/home
```

### Agregar Imágenes

1. Poner imágenes en `/public`
2. Usar en componentes:

```jsx
import Image from 'next/image';

<Image src="/image.png" alt="desc" width={400} height={300} />
```

## ⚡ Performance

- **Lighthouse Score**: 95+ (dirigirse a 100)
- **Core Web Vitals**: Optimized
- **Code Splitting**: Automático
- **Image Optimization**: Next.js built-in

## 📊 Analytics

Para agregar Google Analytics:

1. Obtener `GA_ID` de Google Analytics
2. Agregar a `.env.local`:

```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

3. Integrar script en `layout.jsx`

## 🔐 Seguridad

- ✅ No hay secretos en el código
- ✅ CORS headers configurados
- ✅ CSP headers para protección
- ✅ Rate limiting recomendado en Vercel

## 📱 Testing

```bash
# Lint
npm run lint

# Build local
npm run build

# Start production
npm start
```

## 🐛 Troubleshooting

**Puerto 3000 en uso:**
```bash
npm run dev -- -p 3001
```

**Error de módulos:**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build falla:**
```bash
npm run build --debug
```

## 📞 Soporte

Para preguntas sobre el sitio, contactar a Nathan Romano:
- Email: nathan@publiexpert.com
- URL: https://publiexpert.com

## 📄 Licencia

Propiedad de PubliExpert LLC. Todos los derechos reservados.

---

**Built with ❤️ for entrepreneurs** 🚀
