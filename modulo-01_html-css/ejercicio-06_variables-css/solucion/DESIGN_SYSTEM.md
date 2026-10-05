# Sistema de diseño — El camino de Nico

Este sistema visual acompaña un cuento medieval breve: Nico sale de su cabaña al amanecer y llega al castillo DesarrolloHold cuando cae la noche. Los tokens concentran las decisiones visuales para que la paleta, la tipografía y el ritmo puedan cambiarse sin revisar cada componente.

## Temas

- **Día:** pergamino, barro, musgo y luz dorada. Es el tema predeterminado.
- **Noche:** fondos azul carbón, superficies oscuras y acentos cálidos. Sigue la preferencia del sistema si todavía no se guardó una elección.
- **Sepia:** tonos de papel envejecido para una lectura cálida.

Las tarjetas del recorrido muestran por separado tres momentos y paletas: alba, atardecer sepia y noche. Comparten borde sólido de un píxel, el mismo radio y la misma estructura; el color del borde cambia con cada paleta.

El botón del encabezado recorre los tres temas. La elección se conserva en `localStorage`.

## Colores

| Token | Uso |
| --- | --- |
| `--color-primario` | Acciones principales y enlaces destacados. |
| `--color-secundario` | Apoyos, superficies narrativas y cierre del cuento. |
| `--color-fondo` | Fondo general de la página. |
| `--color-superficie` | Tarjetas y paneles sobre el fondo. |
| `--color-texto` | Texto principal y títulos. |
| `--color-texto-suave` | Párrafos secundarios, ayudas y metadatos. |
| `--color-borde` | Separadores, bordes y estados deshabilitados. |
| `--color-acento` | Detalles dorados, indicadores y foco. |
| `--color-*-suave` | Fondos tenues de botones, insignias y estados. |
| `--color-info`, `--color-exito`, `--color-aviso`, `--color-error` | Texto y señalización de alertas. |

Usar texto normal sobre fondos de superficie con contraste WCAG AA como objetivo (4.5:1 como mínimo). Si se modifica la paleta, volver a comprobar las combinaciones de texto y fondo.

## Tipografía

| Token | Uso |
| --- | --- |
| `--fs-xs` | Etiquetas, metadatos y notas. |
| `--fs-sm` | Navegación, controles y textos compactos. |
| `--fs-base` | Texto de lectura. |
| `--fs-lg` | Entradillas y subtítulos. |
| `--fs-xl` | Títulos de sección y encabezados intermedios. |
| `--fs-2xl` | Títulos destacados. |
| `--fs-display` | Título principal de la portada. |

`--fuente-texto` usa Alegreya para mantener una lectura cómoda. `--fuente-titulos` usa Cormorant Garamond en los encabezados: conserva un aire clásico con formas claras y legibles. La inicial «E» de la portada es una letra capitular ornamental dibujada como SVG; el título completo se conserva para lectores de pantalla. Las fuentes se cargan desde Google Fonts y tienen alternativas del sistema.

Los tamaños usan `clamp()` para adaptarse al ancho disponible.

## Espaciado y forma

- `--sp-xs`, `--sp-sm`, `--sp-md`, `--sp-lg`, `--sp-xl` y `--sp-2xl` marcan una escala de separación que va de controles compactos a secciones completas.
- `--radius-sm`, `--radius-md` y `--radius-lg` definen esquinas de controles, tarjetas y piezas grandes.
- `--shadow-sm` separa suavemente los componentes; `--shadow-md` reserva más profundidad para la ilustración principal.
- `--transition-rapida` se usa en controles. `--transition-normal` acompaña cambios de tema y movimiento de tarjetas.

## Componentes y movimiento

Los estilos de componentes están en `components.css`. La ilustración circular de la portada se construye con capas y formas CSS; la capitular está dibujada con SVG en el HTML. Las animaciones y la consulta `prefers-reduced-motion` mantienen el movimiento discreto y respetan la preferencia del sistema.
