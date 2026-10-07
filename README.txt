# ServiceCard SVG fix

Problem solved: the service graphics no longer rely on CSS classes for SVG fills/strokes.
All important SVG presentation is defined directly on SVG elements, so Astro scoped CSS
cannot hide the graphics.

Replace:
src/components/ServiceCard.astro
