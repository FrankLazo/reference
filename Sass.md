# Sass (*Syntactically Awesome Style Sheets*)

<a id="indice"></a>

- [Instalación](#cap-1)
- [Compilación](#cap-2)
- [Variables](#cap-3)
- [Anidamiento](#cap-4)
- [Partials](#cap-5)
- [Módulos](#cap-6)
- [Mixins](#cap-7)
- [Extend/Inheritance](#cap-8)
- [Operators](#cap-9)

![Logo de Sass](images/sass.png)

[Ir al índice][indice]

<a id="cap-1"></a>

## Instalación

- Guía de instalación: [Sass](https://sass-lang.com/)
- Método 1: **Terminal**
    - Instalar node.js
    - Instalar sass:
    ```
    npm install -g sass
    ```
    - Para comprobar si la instalación fue satisfactoria:
    ```
    sass --version
    sass --help
    ```
- Método 2: **VS Code**
    - Instalar la extensión: **Live Sass Compiler**

[Ir al índice][indice]

<a id="cap-2"></a>

## Compilación

- Para el método 1: **Terminal**
    - Compilar:
    ```cmd
    sass sassfile.scss cssfile.css
    ```
    - Ello genera además un archivo `.map`
    - Para compilar con cada guardado:
    ```cmd
    sass --watch sassfile.scss cssfile.css
    ```
    - Para compilar automáticamente todo los archivos de un directorio:
    ```cmd
    sass --watch app/sass:public/stylesheets
    ```
- Para el método 2: **VS Code**
    - Recomendad para **proyectos personales** o **pequeños**.
    - Correr el documento HTML en **Live Server**.
    - Correr el archivo `.scss` con **Watch Sass**.
    - Mostrará algunos mensajes en OUTPUT en vscode.
    - Por defecto genera el archivo **css** en la misma carpeta de **sass**.
    - En opciones > Formats se puede cambiar la ruta para el css.
    - Por defecto completa para que sea compatible con todos los navegadores.
    - Se pueden excluir carpetas del compilado.
    - Formatos: **expanded** (por defecto), **compact**, **compressed** (recomendado) or **nested**.

[Ir al índice][indice]

<a id="cap-3"></a>

## Variables

- Se puede almacenar cualquier valor css o grupos de fuentes.

```scss
/* .scss */

$primary-color: #333;

body {
    color: $primary-color;
}
```

- En `.sass` se pueden obviar: `; { }`
- Respetar la **indentación**.

```sass
/* .sass */

$primary-color: #333

body
  color: $primary-color
```

[Ir al índice][indice]

<a id="cap-4"></a>

## Anidamiento

- Cuidado con anidar demasiadas reglas, genera una sobrecalificación en el css (mala práctica).
- Usar las llaves `{ }` para anidar.

```scss
nav {
    ul {
        /* Declarations... */
    }

    li {
        /* Declarations... */
    }

    a {
        /* Declarations... */
    }
}
```

[Ir al índice][indice]

<a id="cap-5"></a>

## Partials

- Se puede guardar pequeños fragmentos de sass o css para incluirlos en otros archivos sass.
- Nombrarlos con un guión bajo `_` al inicio, de esa manera el compilador los obvia.
- Usarlos con la regla `@use`.

```scss
/* Para el archivo _partial.scss
 */

@use 'partial';
```

[Ir al índice][indice]

<a id="cap-6"></a>

## Módulos

- Se puede referenciar a variables, mixins y funciones:

```scss
@use 'partial';

h1 {
    color: partial.$main-color;
}
```

[Ir al índice][indice]

<a id="cap-7"></a>

## Mixins

- Permite reutilizar código, incluso incluir parámetros.
- Para definirla se usa: `@mixin` y para llamarla: `@include`

```scss
/* .scss */

@mixin namemixin($parametro) {
    /* Code... */
}

.nameclass { @include namemixin(value);}
```

- Con sass para definirla se usa: `=` y para llamarla: `+`

```sass
/* .sass */

=namemixin($parametro)
  /* Code... */

.nameclass
  +namemixin(value)
```

[Ir al índice][indice]

<a id="cap-8"></a>

## Extend/Inheritance

- **Placeholder classes**: sólo serán escritas en **CSS** si son usadas.
- Van precedidas por un `%`
- Para llamarlas se usa `@extend`

```sass
%message-shared
  border: 1px solid #ccc
  padding: 10px
  color: #333

.message
  @extend %message-shared
  border-color: green
```

[Ir al índice][indice]

<a id="cap-9"></a>

## Operators

- Se pueden usar los operadores: `+` , `-` , `*` , `/` , `%`
- Nos permite tomar, por ejemplo, pixeles y convertirlos a porcentajes sin mucho engorro.

```scss
.container {
  width: 100%;
}

article[role="main"] {
  float: left;
  width: 600px / 960px * 100%;
}

aside[role="complementary"] {
  float: right;
  width: 300px / 960px * 100%;
}
```

[Ir al índice][indice]

[indice]: #indice