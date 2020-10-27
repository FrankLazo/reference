# Markdown: Elementos Varios
<a id="header"></a>

## Índice

1. [Links automáticos](#section-1)
1. [Omitir Markdown](#section-2)

[Portada][Index]

---
<a id="section-1"></a>

## Links automáticos

- Colocar la url completa entre signos menor que **`<`** y mayor que **`>`**.
- El texto de la url se mostrará completa como un enlace.

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`<` url `>`|Produce un elemento **`<a href="">`**|

- Markdown

```markdown
Este es un enlace a <https://github.com/>
```

- Render

> Este es un enlace a <https://github.com/>

[Portada][Index] - [Encabezado de página][Header]

---
<a id="section-2"></a>

## Omitir Markdown

- Permite escribir caracteres especiales:

|1|2|3|4|5|6|7|8|9|10|11|12|
|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|:---:|
|\\|\`|\*|\_|\{ \}|\[ \]|\( \)|\#|\+|\-|\.|\!|

- Escribir una barra invertida antes del caracter:

|CÓDIGO|DESCRIPCIÓN|
|:---|:---|
|`\` Caracter especial|Escribe el caracter especificado|

- Markdown

```markdown
Esta es la sintaxis para dar \*énfasis\*.
```

- Render

> Esta es la sintaxis para dar \*énfasis\*.

[Portada][Index] - [Encabezado de página][Header]

[Index]: index.md
[Header]: #header