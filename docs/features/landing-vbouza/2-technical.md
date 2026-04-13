# Spec Técnica: Landing Page Víctor Bouza

## 1. Principios Arquitectónicos
- **HTML Estático Cero JS:** La UI debe ser 100% estática (SSR o SSG nativo de Astro) utilizando de TailwindCSS para todos los estilos. Ningún `<script>` interactivo del lado del cliente, **Astro Islands inhabilitados** en esta feature para lograr performance perfecta de presentación.
- **CERO Hardcoding (Data source):** Todos los datos duros presentados en la UI deben ser pre-alimentados mediante _Content Collections_ integradas en Astro (archivos JSON o Markdown locales consumidos durante el build time), desacoplando los componentes del flujo de información.

## 2. Tipos de Datos (Zod) - Collections Schema

Para que Astro consuma de forma estructurada los datos (en el archivo `src/content/config.ts`), utilizaremos las colecciones bajo `zod`.

### A. Perfil (`profile`)
Collection diseñada para los datos estáticos del Hero.

```typescript
// Tipo de Collection sugerida: 'data' (JSON)
const profileCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string(),
    title: z.string(),
    bio: z.string(),
    location: z.string(),
    english_level: z.string()
  })
});
```

### B. Experiencia (`experience`)
Se recomiendan archivos locales en Markdown (`.md`) para las descripciones, pero la validación estructural estricta va dentro de su frontmatter.

```typescript
// Tipo de Collection sugerida: 'content'
const experienceCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    entity: z.string(), // "Claro" | "Freelance" | "Min. de Educación"
    start_date: z.string(), // formato ej "12/2024"
    end_date: z.string().default('Presente'), 
    tech_stack: z.array(z.string()),
    repo_url: z.string().url().optional(),
    ref_url: z.string().url().optional(),
    order: z.number().optional() // Campo numérico para un sort limpio (Timeline)
  })
});
```

### C. Habilidades (`skills`)
Para la grilla de Tech Stack.

```typescript
// Tipo de Collection sugerida: 'data' (JSON)
const skillsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    category: z.string(),
    technologies: z.array(z.string()),
    order: z.number().optional()
  })
});
```

### D. Educación (`education`)

```typescript
// Tipo de Collection sugerida: 'data' (JSON)
const educationCollection = defineCollection({
  type: 'data',
  schema: z.object({
    degree: z.string(),
    institution: z.string(),
    year: z.number().or(z.string()) // ej: 2025 o "En curso"
  })
});
```

## 3. Disposición de Componentes UI (src/components)

Dado que es una UI meramente estática, crearemos componentes sencillos en formato `.astro`:

1. `<Hero />`: Carga internamente los datos llamando a `getEntry('profile', 'xyz')`. Se apoya fuertemente en tipografías, Tailwind colors (posible palette monocromático oscuro) y flex/grid layouts.
2. `<ExperienceTimeline />`: Carga todo con `getCollection('experience')`. Renderiza elementos condicionalmente. Si `experience.data.repo_url` existe, dibuja el link a GitHub; si `experience.data.ref_url` existe (Ej: portal CiDi), dibuja el enlace referencial.
3. `<TechStack />`: Agrupa y extrae todo desde `getCollection('skills')`. Transforma los metadatos en `<div class="badge">` para cada integrante del tag `technologies`.
4. `<EducationCard />`: Consume `getCollection('education')` y pinta el titulo y el año en un recuadro unísono.

## 4. Consumo de la Capa Lógica

Se desarrollará un bloque JS puro al principio del propio `src/pages/index.astro` para traer las distintas colecciones y pasárselas a los componentes, para asegurar el aislamiento arquitectónico. 

```astro
---
import { getCollection, getEntry } from 'astro:content';

const profile = await getEntry('profile', 'main');
const experience = await getCollection('experience');
const skills = await getCollection('skills');
const education = await getCollection('education');
// Opcional: ordenar experience por 'order' aquí
---
<Layout>
  <!-- Main content area -->
</Layout>
```
