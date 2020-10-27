# HTML: HyperText Markup Language

## Generalidades

### Elementos HTML - *HTML Elements*

- Estructura general: 

```HTML
<tag name="value"> Contenido </tag>
```

Componente | Nombre | Descripción
:---:|:---:|:---
`<tag name="value"> </tag>`|Etiquetas - *Tags*|Contenedores que dicen algo sobre la información que llevan.
`Contenido`|Contenido - *Content*|La información dentro de las etiquetas.
`<tag name="value">`|Etiqueta de apertura - *Opening tag*|
`</tag>`|Etiqueta de cierre - *Closing tag*|
`<`|Corchete angular izquierdo, Signo menor que, Cuña izquierda - *Left-angle bracket, Less-than sign*|
`>`|Corchete angular derecho, Signo mayor que, Cuña derecha - *Right-angle bracket, More-than sign*|
`tag`|Caracter(es) - *Character(s)*|Indica la finalidad de la etiqueta.
`/`|Barra - *Forward slash*|
`name`|Nombre del atributo - *Attribute name*|Tipo de información adicional.
`value`|Valor del atributo - *Attribute value*|Información adicional sobre el contenido.
`=`|Signo de igualdad - *Equals sign*|
`" "`|Comillas dobles - *Double quotes*|
`' '`|Comillas simples - *Single quotes*|

- Nombres de símbolos:

Categoría | Tipo | Símbolo
---:|:---:|:---:
**Paréntesis**|Redondos|`( )`
"|Corchetes|`[ ]`
"|Llaves|`{ }`
"|Angulares|`< >`
**Comillas**|Angulares o bajas o latinas o españolas|`<< >>`
"|Altas o inglesas|`" "`
"|Simples|`' '`
**Barras**|Barra|`/`
"|Barra inversa|`\`

- **Nesting Elements** - *Elementos anidados*:

```HTML
<tag1> ... <tag2>...</tag2> ... </tag1>
```

- **Empty Elements** - Void elements: No tienen contenido. (No encierran a otro elemento, sólo se incrustan)

Version | Sintaxis
:---|:---
HTML|`<tag>`
XHTML|`<tag/>` ó `<tag></tag>`
XHTML -> HTML|`<tag />`