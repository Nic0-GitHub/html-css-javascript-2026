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

## Contraste comprobado

Calculé el contraste WCAG de las combinaciones de texto y fondo utilizadas por los componentes, incluidos los estados de alerta y las tres tarjetas narrativas. El menor valor de las combinaciones principales es **5.29:1 en día**, **6.23:1 en noche** y **5.40:1 en sepia**. Los textos secundarios de controles deshabilitados usan la superficie del tema para conservar el contraste.

## Catálogo completo de tokens

Los valores base se definen en `tokens.css`; los temas oscuro y sepia sustituyen los tokens de color necesarios. La tabla enumera todos los tokens declarados en `:root`.

| Token | Uso |
| --- | --- |
| `--color-primario` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-secundario` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-fondo` | Fondo del estado o superficie indicado; cambiarlo junto con su color de texto. |
| `--color-superficie` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-texto` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-texto-suave` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-borde` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-acento` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-primario-suave` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-secundario-suave` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-acento-suave` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-info` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-info-fondo` | Fondo del estado o superficie indicado; cambiarlo junto con su color de texto. |
| `--color-exito` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-exito-fondo` | Fondo del estado o superficie indicado; cambiarlo junto con su color de texto. |
| `--color-aviso` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-aviso-fondo` | Fondo del estado o superficie indicado; cambiarlo junto con su color de texto. |
| `--color-error` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--color-error-fondo` | Fondo del estado o superficie indicado; cambiarlo junto con su color de texto. |
| `--color-texto-inverso` | Color semántico para el elemento indicado por el nombre; revisar contraste al modificarlo. |
| `--fuente-texto` | Familia tipográfica para texto. |
| `--fuente-titulos` | Familia tipográfica para titulos. |
| `--art-sky-dawn-top` | Detalle sky dawn top de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sky-dawn-mid` | Detalle sky dawn mid de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sky-dawn-bottom` | Detalle sky dawn bottom de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sky-glaze` | Detalle sky glaze de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sky-shade` | Detalle sky shade de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sun` | Detalle sun de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sun-halo` | Detalle sun halo de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sun-glow` | Detalle sun glow de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sun-shadow` | Detalle sun shadow de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-hero-shadow-suave` | Detalle de la portada shadow suave de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-hero-shadow-intensa` | Detalle de la portada shadow intensa de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-moon` | Detalle moon de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-cloud` | Detalle cloud de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-hill-back` | Detalle hill back de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-hill-front` | Detalle hill front de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-cabin` | Detalle cabin de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-cabin-inset` | Detalle cabin inset de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-cabin-shadow` | Detalle cabin shadow de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-window-frame` | Detalle window frame de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-window-light` | Detalle window light de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-door` | Detalle door de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-roof` | Detalle roof de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-path` | Detalle path de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-caption` | Detalle caption de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-caption-shadow` | Detalle caption shadow de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-inicial-shadow` | Detalle inicial shadow de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-borde` | Detalle pergamino borde de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-fondo` | Detalle pergamino fondo de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-tinta` | Detalle pergamino tinta de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-adornos` | Detalle pergamino adornos de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-textura` | Detalle pergamino textura de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-sombra` | Detalle pergamino sombra de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-filete` | Detalle pergamino filete de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-pergamino-resalte` | Detalle pergamino resalte de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-spark` | Detalle spark de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-morning-top` | Detalle morning top de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-morning-mid` | Detalle morning mid de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-morning-ground` | Detalle morning ground de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-day-top` | Detalle day top de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-day-mid` | Detalle day mid de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-day-ground` | Detalle day ground de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-night-top` | Detalle night top de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-night-mid` | Detalle night mid de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-night-ground` | Detalle night ground de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-sun` | Detalle scene sun de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-sun-halo` | Detalle scene sun halo de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-sun-shadow` | Detalle scene sun shadow de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-noon-sun` | Detalle noon sun de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-hill-back` | Detalle scene hill back de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-hill-front` | Detalle scene hill front de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-day-hill-back` | Detalle day hill back de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-day-hill-front` | Detalle day hill front de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-cabin` | Detalle scene cabin de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-roof` | Detalle scene roof de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-window` | Detalle scene window de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-scene-door` | Detalle scene door de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-smoke` | Detalle smoke de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-bird` | Detalle bird de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-road` | Detalle road de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-traveler` | Detalle traveler de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-skin` | Detalle skin de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-cloak` | Detalle cloak de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-starlight` | Detalle starlight de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-city-wall` | Detalle city wall de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-city-stone` | Detalle city stone de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-city-roof` | Detalle city roof de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-city-gate-stone` | Detalle city gate stone de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-city-gate` | Detalle city gate de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-sky` | Detalle card sky de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-horizon` | Detalle card horizon de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-ground` | Detalle card ground de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-sun` | Detalle card sun de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-hill` | Detalle card hill de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-roof` | Detalle card roof de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-card-tower` | Detalle card tower de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-ending-orbit` | Detalle ending orbit de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-ending-moon` | Detalle ending moon de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--chapter-morning-surface` | Color de surface en la tarjeta del capítulo morning. |
| `--chapter-morning-ink` | Color de ink en la tarjeta del capítulo morning. |
| `--chapter-morning-muted` | Color de muted en la tarjeta del capítulo morning. |
| `--chapter-morning-edge` | Color de edge en la tarjeta del capítulo morning. |
| `--chapter-morning-accent` | Color de accent en la tarjeta del capítulo morning. |
| `--chapter-sepia-surface` | Color de surface en la tarjeta del capítulo sepia. |
| `--chapter-sepia-ink` | Color de ink en la tarjeta del capítulo sepia. |
| `--chapter-sepia-muted` | Color de muted en la tarjeta del capítulo sepia. |
| `--chapter-sepia-edge` | Color de edge en la tarjeta del capítulo sepia. |
| `--chapter-sepia-accent` | Color de accent en la tarjeta del capítulo sepia. |
| `--chapter-night-surface` | Color de surface en la tarjeta del capítulo night. |
| `--chapter-night-ink` | Color de ink en la tarjeta del capítulo night. |
| `--chapter-night-muted` | Color de muted en la tarjeta del capítulo night. |
| `--chapter-night-edge` | Color de edge en la tarjeta del capítulo night. |
| `--chapter-night-accent` | Color de accent en la tarjeta del capítulo night. |
| `--art-sepia-top` | Detalle sepia top de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sepia-mid` | Detalle sepia mid de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sepia-ground` | Detalle sepia ground de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sepia-sun` | Detalle sepia sun de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sepia-hill-back` | Detalle sepia hill back de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--art-sepia-hill-front` | Detalle sepia hill front de las ilustraciones narrativas; modificarlo al ajustar esa escena. |
| `--fs-xs` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--fs-sm` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--fs-base` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--fs-lg` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--fs-xl` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--fs-2xl` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--fs-display` | Tamaño fluido de la escala tipográfica; usar en el nivel de texto indicado. |
| `--sp-xs` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-micro` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-mini` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-capitular-superior` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-capitular-lateral` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-sm` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-md` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-lg` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-xl` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--sp-2xl` | Separación de la escala; usar en márgenes, rellenos o huecos del elemento indicado. |
| `--ancho-contenido` | Ancho máximo del contenido central y cálculo de sus márgenes laterales. |
| `--tracking-marca` | Espaciado entre letras para marca. |
| `--tracking-etiqueta` | Espaciado entre letras para etiqueta. |
| `--tracking-titulo` | Espaciado entre letras para titulo. |
| `--tracking-titulo-seccion` | Espaciado entre letras para titulo seccion. |
| `--tracking-capitulo` | Espaciado entre letras para capitulo. |
| `--tracking-estrellas` | Espaciado entre letras para estrellas. |
| `--radius-sm` | Radio de esquinas para el tamaño de componente indicado. |
| `--radius-md` | Radio de esquinas para el tamaño de componente indicado. |
| `--radius-lg` | Radio de esquinas para el tamaño de componente indicado. |
| `--radius-pill` | Radio completo para botones e insignias con forma de píldora. |
| `--shadow-sm` | Sombra de elevación para componentes y superficies. |
| `--shadow-md` | Sombra de elevación para componentes y superficies. |
| `--transition-rapida` | Duración y curva para cambios de estado del componente. |
| `--transition-normal` | Duración y curva para cambios de estado del componente. |
