# Landing Page — Kevin Larico

Portfolio personal con Astro 7. Diseño moderno con gradientes animados, glass morphism, y tipografía Space Grotesk + Inter.

## Tecnologías

- **Astro 7** — framework web
- **Space Grotesk + Inter** — Google Fonts
- **simple-icons** — iconos de tecnología
- **Web3Forms** — backend del formulario de contacto

## Comandos

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo en `localhost:4321` |
| `npm run build` | Build producción a `dist/` |
| `npm run preview` | Preview del build local |

## Estructura

```
src/
├── layouts/Layout.astro       # Layout global (html/head/body, OG tags, Header + Footer)
├── components/
│   ├── Header.astro            # Barra sticky glass, underline nav animation, responsive
│   ├── Hero.astro              # Gradiente animado, botón primario blanco, blobs, glow imagen
│   ├── About.astro             # Glass card con título gradiente, texto justificado
│   ├── Skills.astro            # Chips flex-wrap con color de marca en hover
│   ├── Projects.astro          # Grid responsive con ProjectCard
│   ├── ProjectCard.astro       # Card glass con borde gradiente en hover, tech icons
│   ├── Contact.astro           # Formulario glass con Web3Forms, separador gradiente
│   └── Footer.astro            # Fondo oscuro, GitHub/LinkedIn/Email, copyright
├── data/
│   ├── skills.ts               # 10 tecnologías + skillMap para lookup por slug
│   ├── projects.ts             # 3 proyectos de ejemplo
│   └── socials.ts              # URLs de GitHub, LinkedIn, Email, CV
├── styles/global.css           # Reset y tipografía (Inter body, Space Grotesk headings)
├── assets/images/              # Imágenes importadas (profile.webp)
└── pages/index.astro           # Página principal (Layout + secciones)
```

## Secciones

1. **Header** — Barra sticky con glass morphism, animación "underline from center" en hover, logo oculto en mobile.
2. **Hero** — Fondo gradiente animado (`#6366f1 → #3b82f6 → #06b6d4`), botón primario blanco sólido, CTA secundario glass, blobs decorativos, imagen con glow pulse.
3. **About** — Glass card con fondo gradiente `#fff → #eef2ff`, texto justificado con separación silábica.
4. **Skills** — Chips tipo pill con flex-wrap, color de marca en hover mediante CSS `color-mix()`.
5. **Projects** — Grid de 3 columnas (responsive: 2 → 1), glass cards con borde gradiente en hover (`mask-composite`), botón gradiente con glow.
6. **Contact** — Glass card con formulario Web3Forms, inputs con foco violeta, botón gradiente, separador gradiente en la base.
7. **Footer** — Fondo oscuro (`#0f172a`), iconos inline SVG de GitHub/LinkedIn/Email, copyright.

## Diseño

- **Glass cards**: `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)` + borde `1px solid rgba(226,232,240,0.8)`
- **Gradientes**: `linear-gradient(135deg, #6366f1, #3b82f6)` para títulos, botones y acentos
- **Botones**: Gradiente `#6366f1 → #3b82f6` con glow en hover
- **Hover effects**: `translateY(-1px)` o `(-2px)` con transiciones de sombra/glow
- **Responsive**: 768px (hero column), 1024px/640px (projects grid), 640px (header logo)

## Enlaces

- [GitHub](https://github.com/tu-usuario)
- [LinkedIn](https://linkedin.com/in/tu-usuario)