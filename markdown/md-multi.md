# Markdown: Multimarkdown
<a id="header"></a>

### ¿Qué es Multimarkdown?

- Es una extensión de Markdown al que le añade más características.
- No es compatible con todas las aplicaciones.
- Abreviado como MMD.

## Índice

- Elementos de bloque:
    1. [Tablas](#section-1)
    1. [Definiciones](#section-2)
- Elementos de línea:
    1. [Abreviaciones](#section-3)
    1. [Notas al pie de página](#section-4)
    1. [Referencias cruzadas](#section-5)
    1. [Tachado](#section-6)
- Metadatos
    1. [Metadatos](#section-7)
    1. [Listado de tareas](#section-8)

[Portada][Index]

---
<a id="section-1"></a>

## Tablas

- Escribir en una línea los encabezados de la tabla separados por una barra vertical **`|`**.
- Escribir en la siguiente línea al menos un guión **`-`** por cada columna de la tabla separados por una barra vertical **`|`**.
- Para **justificación izquierda** escribir dos puntos **`:`** antes del guión **`-`** de la columna deseada.
- Para **justificación derecha** escribir dos puntos **`:`** después del guión **`-`** de la columna deseada.
- Para **justificación centro** escribir dos puntos **`:`** antes y después del guión **`-`** de la columna deseada.
- La justificación por defecto es izquierda.
- En las siguientes líneas escribir los datos de la tabla separados por una barra vertical **`|`**.
- Cada línea es una fila de la tabla.
- Opcional: Se puede añadir una barra vertical **`|`** al inicio y fin de cada línea.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|\| Columna 1 \| Columna 2 \| Columna 3 \||Crea un elemento **`<table>`**|
|\| --- \| --- \| --- \||"|
|\| Dato 1 \| Dato 2 \| Dato 3 \||"|

- Markdown

```markdown
|Columna 1|Columna 2|Columna 3|
|:---|:---:|---:|
|Dato 1|Dato 2|Dato 3|
|Dato 4|Dato 5|Dato 6|
|Dato 7|Dato 8|Dato 9|
```
- Render

> |Columna 1|Columna 2|Columna 3|
> |:---|:---:|---:|
> |Dato 1|Dato 2|Dato 3|
> |Dato 4|Dato 5|Dato 6|
> |Dato 7|Dato 8|Dato 9|

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-2"></a>

## Definiciones

- Indicar en una línea el término a definir.
- Indicar en cada una de las siguientes líneas las descripciones del término iniciando con dos puntos **`:`** y un espacio cada línea.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|Término|Crea un elemento **`<dl>`** + **`<dt>`**|
|`:` Descripción|Crea un elemento **`<dd>`**|

- Markdown

```markdown
Término 1
: Definición 1
: Definición 2

Término 2
: Definición 1
: Definición 2
```

- HTML

```HTML
<dl>
    <dt> Término 1 </dt>
    <dd> Definición 1 </dd>
    <dd> Definición 2 </dd>
    <dt> Término 2 </dt>
    <dd> Definición 1 </dd>
    <dd> Definición 2 </dd>
</dl>
```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-3"></a>

## Abreviaciones

- Escribir el término abreviado con un texto cualquiera.
- Aparte escribir un asterisco **`*`** seguido de la abreviación entre corchetes **`[ ]`** seguido de dos puntos **`:`** y el término sin abreviación.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`*[`Abbr`]:` Abbreviation|Crea un elemento **`<abbr title="">`**|

- Markdown

```markdown
Esta es una abbr.

*[abbr]: Abbreviation
```

- HTML

```HTML
Esta es una <abbr title="Abbreviation">abbr</abbr>.
```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-4"></a>

## Notas al pie de página

- Escribir la nota precedida de un acento circunflejo **`^`** y encerrada entre corchetes **`[ ]`**.
- Aparte escribir lo anterior seguido de dos puntos **`:`** y la extensión de la nota.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|Nota`[^`1`]`|Crea un enlace al pie de página|
|`[^`1`]:` Nota...|Contenido de la nota|

- Markdown

```markdown
Nota[^1]

[^1]: Nota...
```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-5"></a>

## Referencias cruzadas

- Similar a los enlaces normales pero dirigidos a una parte del actual documento.
- La sintaxis del enlace es similar, sólo hay que anteponer la almohadilla **`#`** antes de la **palabra clave**.
- En el lugar al que se desea ir con el enlace hay que escribir entre llaves **`{ }`** la **palabra clave** precedido de una almohadilla **`#`**.
- Otra alternativa es usar un **`<a id="">`** con el **id** como **palabra clave**.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`[`Text link`](#`Keyword`)`|Crea un enlace a otra parte del documento|
|`{#`Keyword`}`|Lugar al que lleva el enlace|
|`<a id="Keyword"></a>`|"|

- Markdown

```markdown
# Encabezado {#Encabezado}

...

[Ir al Encabezado](#Encabezado)
```

```markdown
# Encabezado
<a id="header"></a>

...

[Ir al Encabezado](#header)
```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-6"></a>

## Tachado

- Encerrar el texto entre doble virgulillas **`~~`**.
- Se puede combinar con los símbolos para énfasis.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`~~` Texto `~~`|Crea un elemento **`<s>`**|

- Markdown

```markdown
Este es un elemento ~~tachado~~.
```

- Render

> Este es un elemento ~~tachado~~.

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-7"></a>

## Metadatos

- Escribirlos al principio del documento.
- Cada uno en una línea diferente.
- Escribir el nombre del metadato seguido de dos puntos **`:`** y el contenido.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|Metadato`:` Contenido|Crea un nuevo metadato|

- Existen más de 30 metadatos en Multimarkdown, aquí algunos:

|METADATOS|
|:---:|
|`Address:` - `Author:` - `Affiliation:` - `Comment:` - `Copyright:` - `Date:` - `Email:` - `Keywords:` - `Subtitle:` - `Title:` - `Web:`|

- Markdown

```markdown
Title: Guía resumen sobre Markdown
Author: Frank Lazo
Date: 31 de marzo de 2020
```

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-8"></a>

## Listado de tareas

- Escribir dos corchetes separados por un espacio **`[ ]`** antes de la tarea sin realizar.
- Escribir dos corchetes separados por una x **`[x]`** antes de la tarea realizada.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`[ ]` Tarea a realizar|Crea un item sin check|
|`[x]` Tarea realizada|Crea un item con check|

[Portada][Index] - [Encabezado de página][Header]

[Index]: index.md
[Header]: #header