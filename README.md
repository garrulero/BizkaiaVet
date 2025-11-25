# Clínica Veterinaria BizkaiaVet

Este proyecto es una aplicación web para la Clínica Veterinaria BizkaiaVet, construida con Next.js y React. El objetivo es ofrecer una experiencia de usuario ultraligera, rápida y accesible, con un código modular y fácil de mantener.

## Estructura del Proyecto

La estructura de carpetas está organizada para promover la modularidad y la claridad:

- **/src/app/**: Contiene las páginas y layouts principales de la aplicación, siguiendo la convención de Next.js App Router.
- **/src/components/**:
  - **/ui/**: Componentes de UI básicos y reutilizables (botones, tarjetas, etc.), generados por `shadcn/ui`.
  - **/shared/**: Componentes compartidos a través de la aplicación, como `Header`, `Footer` y `Logo`.
  - **/features/**: Componentes que encapsulan una funcionalidad o sección específica de la página. Cada "feature" tiene su propia carpeta.
    - **/booking/**: Lógica y componentes para el sistema de citas online.
    - **/reviews/**: Sección de reseñas de clientes.
    - **/services/**: Sección de servicios de la clínica.
    - **/team/**: Sección de presentación del equipo.
- **/src/lib/**: Utilidades, hooks personalizados y definiciones de datos.
- **/src/styles/**: Archivos de estilos globales.
- **/public/**: Archivos estáticos.

## Principios de Diseño

- **Rendimiento (Performance-first)**: Cada decisión, desde la elección de componentes hasta la optimización de imágenes, se toma con el rendimiento como prioridad. Se utiliza `next/image` para la optimización automática de imágenes.
- **Modularidad**: El código se divide en componentes pequeños y reutilizables. Las secciones principales de la página se organizan como "features" independientes para facilitar su mantenimiento.
- **Código Limpio y Mantenible**: Se siguen las mejores prácticas de React y TypeScript para asegurar un código claro, bien documentado y fácil de escalar.
- **SEO**: La estructura semántica de HTML, los metadatos y el contenido están optimizados para los motores de búsqueda.
