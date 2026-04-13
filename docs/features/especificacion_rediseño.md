Esta especificación será la guía funcional y técnica para el agente, asegurando una migración de datos limpia y una adopción fiel del nuevo diseño oscuro y multi-sección.

Especificación para el Rediseño de la Landing Page
Este documento define el "Qué" y el "Cómo" para la transformación visual y estructural, preservando todos tus datos actuales.

1. Detección de Brechas y Estrategia de Migración de Datos
Antes de modificar el código, identificamos las diferencias de datos y estructuras:

Formato de Número de Teléfono: El formato actual es un solo bloque (+5493804509708). La referencia usa un formato internacional más legible. Estrategia: Normalizar el formato a uno internacional claro (por ejemplo, +54 9 3804-509708) en la estructura de datos.

Secciones Nuevas (Placeholders): La referencia tiene secciones como "Resume", "Portfolio", "Blog", "Service" y campos como "Age" y un botón "Download CV" que no existen en tus datos actuales. Estrategia: Generar marcadores de posición (placeholders) técnicos para estas secciones y componentes, permitiéndote agregar el contenido real más adelante.

Títulos Profesionales: Tus títulos actuales son "Ingeniero en Sistemas de Información / Full Stack & Backend Developer". Estrategia: Mapear estos títulos a la estructura del Hero y del About, reemplazando los títulos genéricos de la referencia.

2. Entrevista Adaptativa (Preguntas para Víctor)
Para evitar retrabajo, necesitamos confirmar algunos detalles clave antes de la implementación:

Foto de Perfil: "¿Tienes una foto de perfil profesional que podamos usar para la sección 'About Myself'? (La de la referencia es un marcador de posición)."

Menú de Navegación: "¿Qué enlaces te gustaría que aparezcan en el menú (Home, About, Service, Resume, Portfolio, Blog, Contact)? Algunos no tienen contenido aún."

Datos Específicos: "La referencia tiene campos específicos como 'Age' y un botón de 'Download CV'. ¿Tienes estos datos listos para integrar, o prefieres usar marcadores de posición por ahora?"

3. Estructura de Salida (Archivos Generados)
La especificación técnica se generará en los siguientes archivos dentro de docs/features/landing-design-update/:

1-functional.md: Mapeo detallado de UI y datos.

2-technical.md: Definición de componentes Astro, Props, esquemas Zod, y reglas de rendimiento.

Mapeo Funcional y Visual de la UI
Adoptaremos la jerarquía visual de image_1.png para todas las secciones.

A. Global

Tema: Oscuro, con tipografía y espaciado consistentes para una jerarquía visual clara.

B. Header (Navegación)

Logo/Título: Usar "Víctor Bouza" o iniciales profesionales.

Enlaces de Navegación: Home, About, Service, Resume, Portfolio, Blog, Contact (basado en la respuesta de la entrevista).

C. Sección Hero (Sección de Cabecera)

Fondo: Imagen de montaña oscura (con la superposición de red/constelación opcional).

Texto: "I Am" + Profesional Title (Mapear tus títulos profesionales, e.g., "I Am Victor Bouza | Backend & Data Architect").

Botones: "View Work" -> Anclar a la sección de Servicios/Portfolio; "Hire Me" -> Anclar a la sección de Contacto (mantener lógica del target).

D. Sección About Myself

Diseño: Fotografía grande y un bloque de texto y lista de información side-by-side.

Texto: "Hello, I Am Victor Bouza" (Mapear tu nombre).

Detalles: Mapear tu biografía y experiencia general.

Lista de Info: Nombre, Edad (placeholder), Dirección, Teléfono (formato limpio), Correo, Botón "Download CV".

E. Sección My Services

Diseño: Grilla de tarjetas.

Contenido: Definir servicios basados en tu stack real (e.g., Desarrollo Backend con Node.js, Ingeniería de Datos con Airflow/MongoDB, Integración de APIs RESTful). Incluir íconos y descripciones breves.

F. Secciones de Experiencia y Educación

Diseño: Adaptar a la visual de timeline o lista de tarjetas con el tema oscuro. Preservar toda la experiencia laboral y educación de image_2.png.

G. Sección Contacto

Contenido: Formulario de contacto y contacto de datos mapeado.

Detalles Técnicos (Astro)
Implementación: Componentes Astro modulares. Los componentes de sección (e.g., <HeroSection />, <AboutSection />, <ServicesSection />) serán responsables de su propia estructura y carga de datos.

Esquema de Datos (Zod): Definir un esquema robusto para la Content Collection que cubra:

Nombre, Títulos Profesionales, Bio, Edad (placeholder), Foto, CV, Localización.

Contacto Normalizado: Teléfono (formato internacional limpio), Correo, Enlaces de Perfil (LinkedIn, GitHub).

Experiencia: Lista completa con Fechas, Empresa, Título, Stack Técnico (array), Detalles.

Educación y Idiomas.

Servicios: Array estructurado para la grilla (Ícono, Título, Descripción).

Performance: Estricta regla de cero JS en el cliente; toda la web debe ser estática y con cero hidratación.

Regla de Oro: Mantene