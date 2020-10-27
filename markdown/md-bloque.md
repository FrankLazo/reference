# Markdown: Elementos de Bloque
<a id="header"></a>

## Índice

1. [Párrafos](#section-1)
1. [Encabezados](#section-2)
1. [Citas](#section-3)
1. [Listas](#section-4)
1. [Códigos de bloque](#section-5)
1. [Reglas horizontales](#section-6)

[Portada][Index]

---
<a id="section-1"></a>

## Párrafos

- Para crear un párrafo hay que escribir directamente en una o varias líneas consecutivas.
- Para crear un salto de línea dentro de un párrafo hay que añadir dos espacios al final de la línea anterior al salto deseado.
- Para crear un nuevo párrafo hay que dejar una línea en blanco entre párrafos.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|Línea de texto (o más)|Crea un único párrafo **`<p>`**
|Línea de texto + `SPACE` x 2 + `ENTER`|Crea un salto de línea dentro del mismo párrafo **`<br>`**|
|Línea en texto + `ENTER` x 2|Crea un nuevo párrafo **`<p>`**|

- Markdown

```markdown
Párrafo de una sola línea.

Párrafo de varias líneas sin
salto de línea.

Párrafo de varias líneas con | |
salto de línea.
```

- HTML

```html
<p> Párrafo de una sola línea. </p>
<p> Párrafo de varias líneas sin salto de línea. </p>
<p> Párrafo de varias líneas con <br />salto de línea. </p>
```

- Render

> Párrafo de una sola línea.
>
> Párrafo de varias líneas sin
> salto de línea.
> 
> Párrafo de varias líneas con  
> salto de línea.

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-2"></a>

## Encabezados

- Los editores de markdown añaden clases y un enlace con id.
- Iniciar el encabezado con una o varias almohadillas **`#`** y un espacio.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`#` Encabezado|Crea un encabezado **`<h1>`**|
|`##` Encabezado|Crea un encabezado **`<h2>`**|
|`###` Encabezado|Crea un encabezado **`<h3>`**|
|`####` Encabezado|Crea un encabezado **`<h4>`**|
|`#####` Encabezado|Crea un encabezado **`<h5>`**|
|`######` Encabezado|Crea un encabezado **`<h6>`**|

- También se puede escribir debajo del texto del encabezado una o varias veces los siguientes símbolos:

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`===`|Crea un encabezado **`<h1>`**|
|`---`|Crea un encabezado **`<h2>`**|

- Markdown

```markdown
# Encabezado principal
## Subencabezado
### Sub-subencabezado
```

```markdown
Encabezado principal
===
Subencabezado
---
```

- HTML

```html
<h1> Encabezado principal </h1>
<h2> Subencabezado </h2>
<h3> Sub-subencabezado </h3>
```

```html
<h1> Encabezado principal </h1>
<h2> Subencabezado </h2>
```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-3"></a>

## Citas

- Escribir al inicio de cada párrafo de la cita el signo mayor que **`>`**.
- Dejar una línea con el signo mayor que **`>`** antes de un nuevo párrafo.
- Para anidar citas escribir varios signos mayor que **`>`** consecutivos.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`>` Contenido de la cita|Crea una cita en bloque **`<blockquote>`**|
|`>>` Contenido de la cita|Crea una cita en bloque **`<blockquote>`** anidada en otra cita en bloque|

- Markdown

```markdown
> Contenido de la cita en bloque.
Más contenido de la cita en bloque.
>
> Puede contener citas anidadas:
>> Contenido de la cita anidada.
>
> Final del contenido de la cita.
```

- Render

> Contenido de la cita en bloque.
Más contenido de la cita en bloque.
>
> Puede contener citas anidadas:
>> Contenido de la cita anidada.
>
> Final del contenido de la cita.

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-4"></a>

## Listas

- Para crear listas desordenadas usar un guión **`-`** un asterisco **`*`** o un signo más **`+`** seguido de un espacio antes de cada item.
- Para crear listas ordenadas usar un número seguido de un punto **`.`** y un espacio antes de cada item.
- Para crear un anidamiento de listas usar una tabulación o 4 espacios antes del símbolo de cada item.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`-` Item|Crea un item de una lista desordenada **`<ul>`** + **`<li>`**|
|`*` Item|"|
|`+` Item|"|
|`1.` Item|Crea un item de una lista ordenada **`<ol>`** + **`<li>`**|
|`TAB` ó `SPACE` x 4|Crea un anidamiento en la lista|

- Markdown

```markdown
* Item 1
* Item 2
* Item 3
    * Sub Item 1
    * Sub Item 2
* Item 4

1. Item 1
2. Item 2
3. Item 3
    * Sub Item 1
    * Sub Item 2
4. Item 4
```

- Render

> * Item 1
> * Item 2
> * Item 3
>     * Sub Item 1
>     * Sub Item 2
> * Item 4
> 
> 1. Item 1
> 2. Item 2
> 3. Item 3
>     * Sub Item 1
>     * Sub Item 2
> 4. Item 4

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-5"></a>

## Códigos de bloque

- Encerrar el código arriba y abajo con una línea con 3 backticks **`** ó 3 virgulillas **~**.
- Escribir después de los 3 primeros símbolos el **lenguaje del código** si se desea estilizarlo.
- También se puede generar el bloque indentando cada una de las líneas de código.
- Markdown transforma caracteres especiales a **HTML Entities**.
- La coloración depende de los estilos css.
- Librería recomendada: **PrismJS**.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|\`\`\`|Crea un bloque de código **`<pre>`**|
|\~\~\~|"|
|`TAB` ó `SPACE` x 4|"|
|`language`|Estiliza adecuadamente el lenguaje contenido en el bloque|

- Markdown

~~~markdown
```javascript
let name = 'Frank'
```
~~~

- Render

> ```javascript
> let name = 'Frank'
> ```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-6"></a>

## Reglas horizontales

- Escribir 3 guiones **`-`** asteriscos **`*`** ó guiones bajos **`_`** seguidos o separados por un espacio en la línea deseada.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`***`|Crea una línea horizontal **`<hr>`**|
|`---`|"|
|`___`|"|
|`* * *`|"|
|`- - -`|"|
|`_ _ _`|"|

[Portada][Index] - [Encabezado de página][Header]

[Index]: index.md
[Header]: #header