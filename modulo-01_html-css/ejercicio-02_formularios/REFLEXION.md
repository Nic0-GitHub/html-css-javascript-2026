# REFLEXION — Ejercicio 1.2: Formularios Accesibles

> **Instrucciones:** Reemplazá `[NÚMERO]` y `[NOMBRE]` con el número y nombre del ejercicio correspondiente. Completá este archivo DESPUÉS de terminar tu solución. Escribí con tus propias palabras.

---

## Sección 1 — Explicación de mi solución

*Describí en 150–250 palabras qué hace tu solución y cuáles fueron las decisiones principales que tomaste.*

> La solución presenta un formulario para pedir un sistema. La idea es que una persona pueda dejar sus datos, elegir qué tipo de sistema necesita, explicar su consulta, seleccionar si prefiere que la contacten por mail o por teléfono y adjuntar una imagen de referencia. Como era un formulario relativamente sencillo, decidí agregar un backend hecho en Google Apps Script para recibir los datos. Google Sheets guarda cada respuesta en forma de fila y Google Drive guarda la imagen que se envía, que llega convertida a Base64 desde la página.
>
> En la parte de HTML prioricé la accesibilidad: cada campo tiene un label visible asociado mediante `for` e `id`, los campos relacionados están agrupados con `fieldset` y `legend`, y se usan atributos como `required`, `aria-required` y `aria-describedby`. También mantuve la validación principal en HTML5 y CSS, sin depender de JavaScript para decidir si los campos son válidos. JavaScript se usa solamente para convertir la imagen y enviar el JSON al backend. Para el diseño mantuve la estética de papel y cartoon del ejercicio anterior, usando clases CSS y estados visuales para que todo tenga coherencia.

---

## Sección 2 — Preguntas conceptuales

*Las preguntas conceptuales específicas de este ejercicio están en el `SPEC.md`. Respondé cada una aquí.*

### 2.1 — Pregunta conceptual pendiente de identificar

> El `SPEC.md` no presenta una pregunta conceptual específica para responder en esta sección. La plantilla de reflexión indica que deberían estar allí, pero no aparecen desarrolladas. Sí confirmé que JavaScript se puede usar para el envío y la conversión de la imagen, siempre que la validación principal siga siendo HTML5 y CSS.

### 2.2 — Pregunta conceptual pendiente de identificar

> El `SPEC.md` no presenta una segunda pregunta conceptual específica. En el campo del motivo elegí `datalist`, porque el propio bonus B1 lo propone como reemplazo del `select` tradicional. Queda anotada la diferencia literal entre el requerimiento obligatorio y el opcional, pero la decisión está implementada y funciona.

### 2.3 — Pregunta conceptual pendiente de identificar

> El `SPEC.md` tampoco presenta una tercera pregunta conceptual. Para la subida de la imagen mantuve el `label` visible y además agregué el `aria-label` pedido por el bonus B2, porque en este caso la cátedra indica explícitamente que debe llevarlo. Hay un ciclo entre el SPEC y la plantilla de reflexión: uno remite al otro, pero no aparecen las preguntas concretas.

---

## Sección 3 — Decisiones técnicas

### 3.1 — ¿Qué fue lo más difícil de este ejercicio y cómo lo resolviste?

> Lo que más me costó fue la configuración del `datalist`, porque no conocía bien cómo funcionaba esta etiqueta. Tuve que investigar cómo se comporta y ajustar los estilos CSS, ya que no siempre se adapta visualmente igual que el resto de los elementos, como un `select`. El campo funciona como un input que muestra sugerencias, pero esas sugerencias dependen bastante del navegador y no se pueden personalizar completamente con CSS.

### 3.2 — ¿Qué cambiarías si tuvieras que hacerlo de nuevo?

> Si tuviera que hacerlo de nuevo, probablemente cambiaría parte del estilo visual y probaría otra distribución del formulario. Como se había pedido reutilizar el header del ejercicio anterior, preferí mantener la misma estética de papel/cartoon, usando clases CSS y colores parecidos para que los dos ejercicios tuvieran coherencia.

### 3.3 — ¿Qué alternativas consideraste y por qué las descartaste?

> Había considerado utilizar un dominio propio y hacer un backend pequeño en Python, posiblemente con Flask. Lo descarté porque me pareció demasiado complicado y enrevesado para un formulario tan sencillo. Google Apps Script me permitió recibir los datos y guardar los resultados en Sheets y Drive sin montar toda esa infraestructura.
>
> En el diseño también había pensado agregar animaciones y algunos efectos más interesantes, pero preferí mantenerlo simple. Aclaro que el SPEC no prohíbe JavaScript por completo: prohíbe usarlo como validación principal. En esta solución se utiliza JavaScript únicamente para convertir la imagen a Base64 y enviarla al backend.

Además, incorporé `setCustomValidity()` para validar el formato y el tamaño de la imagen seleccionada. Esto agrega una regla específica del formulario, pero no reemplaza `required`, `type`, `pattern` ni los estados `:valid` y `:invalid` de HTML5 y CSS.

---

## Sección 4 — Declaración de uso de IA

```
[ ] Resolví el ejercicio completamente sin ayuda de IA
[ ] Usé IA para entender algún concepto, pero escribí el código yo
[x] Usé IA para generar un borrador que luego modifiqué y entendí
[ ] Usé IA extensamente y completé la reflexión para entender lo que hice
```

*Si usaste IA, describí brevemente cómo:*

> Le pedi que me copie el código de mi header y me lo pase junto con los css para no tener que hacerlo a mano

---

## Sección 5 — Autoevaluación

En una escala del 1 al 5, ¿cuánto entendés ahora el concepto central de este ejercicio?

```
[ ] 1 — Muy poco, necesito repasar
[ ] 2 — Entiendo lo básico
[ ] 3 — Lo entiendo bien
[ ] 4 — Lo entiendo bien y puedo explicárselo a otro
[x] 5 — Podría dar una clase sobre esto

Formularios y como se usan es un tema interesante y muy trabajado en web.
Creo que podría explicarlo todo desde inicio a fin, me gustó el ejercicio y me pareció divertido.
```
