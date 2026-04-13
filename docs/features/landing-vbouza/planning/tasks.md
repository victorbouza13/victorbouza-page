# Plan de Ejecución: Landing Víctor Bouza

## Fase 1: Infraestructura y Tipos
- [x] T1: Definir los esquemas Zod (`profile`, `experience`, `skills`, `education`) y exportar las colecciones en `src/content/config.ts`.

## Fase 2: Capa de Contenido (Mocks/Data)
- [x] T2: Crear los datos centrales del perfil profesional en `src/content/profile/main.json`. (Dependencia: T1)
- [x] T3: Crear los listados del entorno tecnológico y organizarlos por categoría en `src/content/skills.json` (o divididos por archivo). (Dependencia: T1)
- [x] T4: Crear el listado de educación (Ingeniero en Sistemas) e inglés en `src/content/education/education.json`. (Dependencia: T1)
- [x] T5: Crear los archivos Markdown para la trayectoria profesional en `src/content/experience/` detallando 'Claro', 'Freelance' (con los hitos ERP/Districen modificados) y 'Ministerio de Educación'. (Dependencia: T1)

## Fase 3: Capa de Lógica (Utilities)
- [x] T6: (Skipped) Crear helper o array sorter en `src/utils/formatters.ts` que manipule de forma descendente las colecciones marcadas con fechas/órdenes si fuese requerido antes de inyectarlas en UI.

## Fase 4: Capa de Presentación UI (Componentes)
- [x] T7: Construir componente `src/components/Hero.astro`. (Dependencia: T2)
- [x] T8: Construir componente `src/components/ExperienceTimeline.astro`. (Dependencia: T5, T6)
- [x] T9: Construir componente `src/components/TechStack.astro`. (Dependencia: T3)
- [x] T10: Construir componente `src/components/EducationCard.astro`. (Dependencia: T4)

## Fase 5: Capa de Enrutamiento (Pages)
- [x] T11: Integrar todos los componentes (Hero, ExperienceTimeline, TechStack, Education) dentro de `src/pages/index.astro`, resolviendo la carga unificada de Content Collections desde el frontmatter del archivo page. (Dependencia: T7, T8, T9, T10)
