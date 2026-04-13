# Spec Funcional: Landing Page Víctor Bouza

## 1. Objetivos del Sistema
Construir una página de perfil personal (portfolio) veloz y optimizada para SEO que destaque el perfil profesional, experiencia, stack tecnológico y educación de Víctor Bouza. Todo el contenido será consumido de forma estructurada para un fácil mantenimiento.

## 2. Secciones Principales y Reglas de UI/UX

### 2.1 Hero (Inicio)
- **Propósito:** Presentación inmediata del perfil general.
- **Contenido:** Nombre, Título profesional (Ingeniero en Sistemas de Información / Full Stack & Backend Developer), Ubicación, Nivel de inglés y una biografía breve que resume 3 años de experiencia en Node.js, Python, Angular/Next.js y el foco en arquitectura (microservicios, ETLs).
- **UI:** Cabecera limpia, atractiva a primera vista (ej. tipografía de gran contraste), con los datos base y el resumen del perfil profesional.

### 2.2 Experiencia Laboral (Timeline)
- **Propósito:** Mostrar la trayectoria profesional estructurada en orden cronológico inverso.
- **Contenido:**
  - **Claro Argentina:** Redacción estratégica (alto nivel). Foco en el uso estricto del stack: FastAPI, Python, MongoDB, OpenSearch, Airflow, Grafana, GitLab CI/CD. Logros centrados en diseño de APIs asíncronas y flujos ETL masivos, obviando toda lógica particular del negocio telco.
  - **Desarrollador Freelance:** Debe visualizarse como una experiencia general donde "Sistema ERP integral para distribuidora provincial" y "e-commerce para distribuidora de autopartes mayorista" ocupan el rol de "Hitos", con cada uno mostrando claramente un botón o enlace (ícono) hacia su respectivo repositorio (`repo_url`).
  - **Ministerio de Educación (Córdoba):** Mencionar el trabajo transaccional con SQL y ASP.NET; además de agregar un enlace/botón visual (`ref_url`) al portal oficial "CiDi" (Ciudadano Digital).
- **UI:** Línea de tiempo descendente. Diseño claro para separar la "empresa" del "stack utilizado" en cada ítem. Las URLs deben destacarse interactivamente.

### 2.3 Tech Stack (Grilla)
- **Propósito:** Visualizar de golpe todas las herramientas y lenguajes usando un diseño que inspire orden.
- **Contenido:** División categórica por Backend, Frontend, Lenguajes, Bases de Datos, DevOps / Cloud, Datos y Observabilidad, Testing, y Metodologías.
- **UI:** Sistema de agrupamiento de 'Badges' (insignias) o grilla semántica. Por performance, las animaciones o efectos hover de los badges estarán controlados 100% mediante CSS (ej. Tailwind hover states).

### 2.4 Educación e Idiomas
- **Propósito:** Resaltar la formación académica terminada.
- **Contenido:** Ingeniería en Sistemas de Información (UTN, Graduado 2025) e Inglés B2.
- **UI:** Tarjeta o banner destacado antes del footer de la grid principal.

## 3. SEO y Accesibilidad (Requisitos No Funcionales)
- Estructura semántica estricta (`<header>`, `<article>`, `<section>`, `<nav>`).
- Enlaces a repositorios externos y referencias del Ministerio con atributo `target="_blank" rel="noopener noreferrer"`.
- Los textos del Hero serán etiquetas `<h1>` y las categorías de Tech Stack emplearán jerarquía `<h2>`/`<h3>`.
