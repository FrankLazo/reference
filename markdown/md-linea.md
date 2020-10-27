# Markdown: Elementos de Línea
<a id="header"></a>

## Índice

1. [Énfasis](#section-1)
1. [Enlaces](#section-2)
1. [Código](#section-3)
1. [Imágenes](#section-4)

[Portada][Index]

---
<a id="section-1"></a>

## Énfasis

- Encerrar las palabras entre asteriscos **`*`** para dar énfasis.
- Encerrar las palabras entre dobles asteriscos `**` para dar importancia.
- Encerrar las palabras entre triples asteriscos `***` para dar importancia y énfasis a la vez.
- En vez de asteriscos **`*`** se pueden usar guiones bajos **`_`**.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`*` Texto `*`|Crea un elemento **`<em>`**|
|`_` Texto `_`|"|
|`**` Texto `**`|Crea un elemento **`<strong>`**|
|`__` Texto `__`|"|
|`***` Texto `***`|Crea un elemento **`<strong>`** + **`<em>`**|
|`___` Texto `___`|"|


- Markdown

```markdown
Este es un elemento con *énfasis*.
Este es un elemento con **importancia**.
Este es un elemento con ***importancia y énfasis***.
```

- Render

> Este es un elemento con *énfasis*.  
> Este es un elemento con **importancia**.  
> Este es un elemento con ***importancia y énfasis***.

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-2"></a>

## Enlaces

- Indicar el **texto del enlace** entre corchetes **`[ ]`** seguido de la **url** entre paréntesis **`( )`**.
- Opcional seguido entre comillas **`" "`** se puede incluir el contenido para **title**.
- Se puede reemplazar la **url** y el **title** por un **término clave** el cual irá entre corchetes **`[ ]`** y se detallará en otro lugar del documento.
- El **término clave** se detallará entre corchetes **`[ ]`** en una línea aparte seguido de dos puntos **`:`** y la **url** con el **title**.
- Generalmente se detallan al pie del documento.
- La **url** puede ser absoluta o relativa.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`[`Text link`](`url "title"`)`|Crea un elemento **`<a href="" title="">`**|
|`[`Text link`][`Keyword`]`|"|
|`[`Keyword`]`|"|
|`[`Keyword`]:` url "title"|Asocia la **url** y el **title** al **keyword**|

- Markdown

```markdown
Este es un enlace a [Github](https://github.com/ "Repositorio de código").
Este es un enlace a [Github][Repositorio].

[Repositorio]: https://github.com/ "Repositorio de código"
```

- Render

> Este es un enlace a [Github](https://github.com/ "Repositorio de código").  
> Este es un enlace a [Github][Repositorio].

[Repositorio]: https://github.com/ "Repositorio de código"

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-3"></a>

## Código

- Encerrar el código entre backticks **\`**.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|\` *code* \`|Crea un elemento **`<code>`**|

- Markdown

```markdown
Este es un elemento `<code>`.
```

- Render

> Este es un elemento `<code>`.

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-4"></a>

## Imágenes

- Similar a la sintaxis de los enlaces.
- Indicar un signo de admiración **`!`** seguido del **texto alternativo** entre corchetes **`[ ]`** y seguido de la **url** de la imagen entre paréntesis **`( )`**.
- Opcional seguido entre comillas **`" "`** se puede incluir el contenido para **title**.
- Se puede reemplazar la **url** de la imagen y el **title** por un **término clave** el cual irá entre corchetes **`[ ]`** y se detallará en otro lugar del documento.
- El **término clave** se detallará entre corchetes **`[ ]`** en una línea aparte seguido de dos puntos **`:`** y la **url** de la imagen con el **title**.
- Generalmente se detallan al pie del documento.
- La **url** de la imagen puede ser absoluta o relativa.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`![`Alt text`](`url de la imagen `"`title`")`|Crea un elemento **`<img>`**|
|`![`Alt text`][`Keyword`]`|"|
|`[`Keyword`]:` url de la imagen `"`title`"`|Asocia la **url** y el **title** al **keyword**|

- Markdown

```markdown
![Pato mandarín flotando sobre el agua](https://revistaepets.com/wp-content/uploads/2018/11/pato-mandarin-3-2.jpg "Tomado de revistaepets.com")

Este es un dibujo a lápiz: ![Retrato de mujer a lápiz][Retrato]

[Retrato]: retrato-a-lapiz.jpg "Tomado de algún lugar en la web"
```

- Render

![Pato mandarín flotando sobre el agua](https://revistaepets.com/wp-content/uploads/2018/11/pato-mandarin-3-2.jpg "Tomado de revistaepets.com")

Este es un dibujo a lápiz: ![Retrato de mujer a lápiz][Retrato]

[Retrato]: retrato-a-lapiz.jpg "Tomado de algún lugar en la web"

[Portada][Index] - [Encabezado de página][Header]

[Index]: index.md
[Header]: #header