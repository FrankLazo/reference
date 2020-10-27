# LaTeX

<a id="indice"></a>

1. [Introducción y primeros pasos](#seccion-1)
1. [Poniendo a punto el editor de LaTeX](#seccion-2)
1. [Estructura general de un documento LaTeX, uso de columnas](#seccion-3)
1. [Matemáticas](#seccion-4)
1. [Tomando el control de LaTeX](#seccion-5)
1. [Figuras y tablas](#seccion-6)

<a id="seccion-1"></a>

## 1. Introducción y primeros pasos

- **LaTex**: Lenguaje de marcado para la creación y edición de documentos.
- **Estructura** y **contenido** del documento, el cual se *compila* y devuelve un documento **PDF** final.
- Los **comandos** inician con backslash: `\`
- Los **argumentos** van entre llaves: `{ }`
- Los **comentarios** inician con: `%`

```tex
% Dos partes: Preámbulo y documento.

\documentclass{article} % Preámbulo
\usepackage[utf8]{inputenc}
\usepackage[spanish]{babel}

\begin{document} % Documento
    Hola mundo!
\end{document}
```

- Editores **de escritorio**: Hay que instalar cuando se necesite diferentes paquetes.
- Editores **en línea**: Proporcionan acceso a todos los paquetes necesarios y proporcionan almacenamiento en la nube.
- Editores de texto:
    - [Texmaker](https://www.xm1math.net/texmaker/) (Libre)
    - [TeXstudio](https://www.texstudio.org/) (Libre)
    - [Kile](https://kile.sourceforge.io/) (Libre)
    - [LyX](https://www.lyx.org/) (Libre)
    - [Overleaf](https://es.overleaf.com/) (Online)
    - [ShareLaTeX](https://www.sharelatex.com/) (Online)
    - [Scientific Word](https://www.mackichan.com/index.html?products/sw.html~mainFrame) (Pago)
    - [BaKoMa TeX](http://www.bakoma-tex.com/menu/about.php) (Pago)

```tex
% Uso de comillas:

`Texto entre comillas simples'
``Texto entre comillas dobles''
```

- Para **escapar** caracteres especiales anteceder un `\`.
- **Caracteres especiales**:

Caracter|Descripción
:---:|:---:
`%`|Comentarios
`#`|Argumentos de entrada
`&`|Separador de tabulaciones
`$`|Matemáticas en línea

- Primer ejercicio en Overleaf: **Plantilla** en blanco.

```tex
\documentclass{article}     % Tipo de documento
\usepackage[utf8]{inputenc} % Paquete de codificación
\usepackage[spanish]{babel} % Paquete de diccionario

\title{Hola Mundo!}     % Título del documento
\author{Frank Lazo}     % Autor del documento
\date{May 2020}         % Fecha del documento

\begin{document}        % Inicio del documento

\maketitle              % Escribe el título, autor y fecha

\section{Introduction}  % Inicia una sección del documento

    Hola Mundo!         % Contenido del documento

\end{document}          % Fin del documento
```

- Expresiones matemáticas **en línea** entre `$`.

```tex
Sean $a$ y $b$ dos enteros positivos diferentes, entonces $c = a - b + 1$.
```

- Los **espacios adicionales** se ignoran. Espacios en blanco y saltos de línea.

Caracteres|Descripción
:---:|:---:
`^`|Superíndices
`_`|Subíndices
`{ }`|Agrupar expresiones

- Comandos para letras griegas: `\alpha` - `\lambda` - `\phi` - `\mu`
- Comandos para simple integral: `\int`
- Comandos para doble integral: `\iint`

```tex
$A_1 = \int2x^{x + 1}dx$
```

- Ambientes: Espacios especiales del documento: `\begin` - `\end`

```tex
% Listas con viñetas y enumeradas:

\begin{itemize}
    \item Le\'on
    \item Tigre
    \item ...
\end{itemize}

\begin{enumerate}
    \item Criollo
    \item Angora
    \item ...
\end{enumerate}
```

- **Plantillas**: Documentos preformateados en los que básicamente se modifica el contenido, ideales para documentos rápidos y repetitivos.
- Se componen generalmente de los archivos de estilo `.sty` y la fuente del documento `.tex`
- Se trabaja en el archivo `main.tex`

[Ir al índice][Indice]

<a id="seccion-2"></a>

## 2. Poniendo a punto el editor de LaTeX

- **Fuente**: [VS Code y LaTeX](https://medium.com/@cr0wg4n/latex-y-visual-studio-code-gu%C3%ADa-de-instalaci%C3%B3n-ca8bef3935e3)
- Instalar [MiKTeX](https://miktex.org/download)
- Instalar [Perl](http://strawberryperl.com/)
- En **VS Code**:
    - Instalar `LaTeX Workshop`
    - Ir a **Settings** > **Extensions** > **LaTeX** > `Out dir`
    - Colocar: `%DIR%/build`
    - Directorio donde se almacenarán los residuos y el PDF en el proceso de compilación del documento.
- Escribir el documento con extensión `.tex`
- Guardar para que compile el código: `Ctrl + S`
- Aparecerán los archivos resultantes de la compilación en la carpeta `build`.

---

- Instalar **Texmaker** y **MiKTeK** para Windows.
- Instalar **paquetes** desde MiKTek a través de ventanas o línea de comandos.
- [CTAN](https://www.ctan.org/): Repositorio más grande de paquetes.

---

- **TeX Live** para Linux.
- Paquetes recomendados: `math-extra` , `luatex` , `publishers` , `science`.

---

- Configuración del paquete de idioma y pdf en Texmaker.
- Configuración para la compilación en Texmaker.
- Interfaz y prueba de Texmaker.

---

- **Overleaf**:
    - Crear cuenta nueva.
    - Por defecto 100MB expandible hasta 1GB invitando usuarios.
    - Llenar perfil para adquirir 100MB más.
    - En un proyecto: Ir a `menú` para cambiar opciones del editor.
    - **Spell check** para la autocorrección del idioma.
- Para subir un proyecto, guardarlo como: `.zip`
- El paquete de idioma por defecto es **Inglés**, no se necesita colocar el comando del paquete.

[Ir al índice][Indice]

<a id="seccion-3"></a>

## 3. Estructura general de un documento LaTeX, uso de columnas

- Documentación oficial: [The LaTeX Project](https://www.latex-project.org/)
- Repositorio más grande de paquetes y su documentación: [CTAN](https://www.ctan.org/)
- Dónde conseguir ayuda:
    - [Repositorio de plantillas en Overleaf](https://www.overleaf.com/latex/templates)
    - [Wikibook de LaTeX](https://en.wikibooks.org/wiki/LaTeX)
    - [Página de aprendizaje de Overleaf](https://www.overleaf.com/learn)
    - [Comunidad de LaTeX](https://tex.stackexchange.com/)
    - [Blog dedicado a LaTeX](http://minisconlatex.blogspot.com/)
- En `Share` de Overleaf se puede publicar un documento como **ejemplo** o **plantilla**.

```tex
% Encabezado del documento: (En el preámbulo)

\title
\author
\date

% Después de \begin{document}

\maketitle
```

```tex
\usepackage{amsmath}    % Paquete para ecuaciones
```

```tex
\date{\today}           % Para mostrar la fecha actual
```

```tex
\usepackage{lipsum}     % Paquete para texto aleatorio

% code...

    \begin{abstract}    % Ambiente para el resumen
        \lipsum[2-3]    % Número de párrafo, o inicial y final
    \end{abstract}
```

```tex
% Las secciones se numeran automáticamente

\section{Título de la sección}
\subsection{Título de la subsección}
\subsubsection{Título de la subsubsección}

% Para títulos sin numeración
\paragraph{Título del párrafo}

% Secciones sin numeración

\section*{Título de la sección}
\subsection*{Título de la subsección}
\subsubsection*{Título de la subsubsección}
```

```tex
% Columnas
% En el cambio de número de columnas, salta a una nueva página

\twocolumn
\onecolumn

% Paquete que permite crear varias columnas
% No permite utilizar elementos flotantes como figuras

\usepackage{multicol}

% Permite añadir una línea vertical entre columnas
\renewcommand{\columnseprule}{1}
% Separación entre columnas
\setlength\columnsep{7.5mm}
\begin{multicols}{2}
    % Contenido
\end{multicols}

% Paquete que permite crear varias columnas y elementos flotantes
% Permite sincronización de columnas: Idiomas, código fuente, etc

\usepackage{paracol}

% Para que el título no se corte por la columna
\begin{paracol}{2}[\section{Título muy largo de sección}]
    % contenido
    % Saltar a la siguiente columna
    \switchcolumn
    % Sincronización de las columnas
    \switchcolumn*
    % contenido
\end{paracol}

% Para variar el ancho de columna
\columnratio{.6}
\begin{paracol}{2}
    %contenido
\end{paracol}
```

- Ver la compatibilidad entre paquetes.
- `paracol` y `multicol` son compatibles.

```tex
% Paquete para el uso de colores

\usepackage{xcolor}

% Para pintar texto de una columna en paracol
\columncolor{red}

% Para pintar una porción de texto
\textcolor{green}{\lipsum[4]}
```

[Ir al índice][Indice]

<a id="seccion-4"></a>

## 4. Matemáticas

- Modo matemático: Ajuste de la ecuación al texto.
    - Modo **en línea**.
    - Modo **display**.

```tex
% Paquetes:

\usepackage{amsmath}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{mathtools}
```

```tex
% Modo en línea:

% El espacio se ajusta a la línea del texto
$\sum_{i = 1}^na_i$

% El espacio se ajusta a la expresión
$\displaystyle{\sum_{i = 1}^na_i}$
```

```tex
% Modo display:

% No muestra índice de referencia
\[
\binom{n}{r} = \frac{n!}{r!(n - r)}
\]

% Muestra índice de referencia (Ambiente)
\begin{equation}
_nP_r = \frac{n!}{(n - r)!}
\end{equation}

% No muestra índice de referencia (Ambiente)
\begin{equation*}
_nP_r = \frac{n!}{(n - r)!}
\end{equation*}

\;  % Añade un espacio en blanco dentro de una ecuación
```

- [Compendio de símbolos matemáticos, científicos y de ingeniería](https://archive.org/stream/symbols-a4#mode/2up).
- **Fracciones**:
    - Modo **automático**: Se ajusta al tamaño **en línea** o **display**.
    - Modo **display**: Se muestra en tamaño **display** dentro de una línea.
    - Modo **en línea**: Se muestra en tamaño **en línea** dentro de un modo display.
- En **fracciones continuas** los comandos anteriores no ajustarían bien el espacio.

Comando|Modo
:---:|:---:
`\frac{N}{D}`|Modo automático
`\dfrac{N}{D}`|Modo display
`\tfrac{N}{D}`|Modo en línea
`\cfrac{N}{D}`|Fracciones continuas
`\ddots`|Puntos suspensivos

- Signos de agrupación:

Comando|Signo
:---:|:---:
`\{ \}`|Llaves
`\langle \rangle`|Paréntesis angulares
\| ó `\vert`|Barra vertical
\|\| ó `\Vert`|Doble barra vertical
`\lfloor \rfloor`|Función piso
`\lceil \rceil`|Función techo

- Para ajustar el tamaño del signo de agrupación al contenido, escribir `\left` o `\right` antes del mismo.
- Si no se ajusta lo necesario se pueden usar:
    - `\bigl` y `\bigr`
    - `\Bigl` y `\Bigr`
    - `\biggl` y `\biggr`
    - `\Biggl` y `\Biggr`
- Ambientes para **Matrices**:

Ambiente|Símbolos
:---:|:---:
`matrix`|Sin paréntesis
`pmatrix`|Paréntesis
`bmatrix`|Corchetes
`vmatrix`|Barras verticales
`Bmatrix`|Llaves
`Vmatrix`|Dobles barras verticales

- Número de filas máximo: **30**.
- Para altenar entre columnas: `&` y filas: `\\`

```tex
\[
    W(f_1, f_2) =
    \begin{vmatrix}
        x^2 & x|x| \\
        2x & \dfrac{2x^2}{|x|}
    \end{vmatrix}
\]
```

- Por defecto la alineación de las columnas es **centro**.
- Para una diferente alineación usar el ambiente `array`.
- Este ambiente no define ningún paréntesis.
- No tiene ningún límite del número de filas.

```tex
% l: left, c: center, r: right

\[
    \left[
    \begin{array}{lcr}
        -0.1 & a & 0.1 \\
        -0.01 & a + 1 & 0.01
    \end{array}
    \right]
\]
```

- **Letras griegas**:
    - Minúscula: `\nombre-de-la-letra`.
    - Mayúscula: `\Nombre-de-la-letra`.
- **Alineación de ecuaciones**:
    - Ambiente `split` para usar un caracter de alineación.
    - Ambiente `multline` para ecuaciones muy largas. Con `\\` se salta a la siguiente línea.
    - Ambiente `gather` para ecuaciones sin alineación pero con numeración. Usar `\notag` para quitar la numeración.
    - Ambiente `align` similar a split pero permite alinear varias columnas. Columna y fila: `&` , `\\`. Usar `\notag` para quitar la numeración.
- Con `gather*` y `align*` se elimina la numeración.
- **Puntos suspensivos** en el centro de la línea: `\cdots`

```tex
\[
    \begin{split}
        L[c_1y_1 + c_2y_2] &= c_2L[y_1'' + py_1']\cdots \\
        &= c_2L[y_1] + c_2L[y_2]
    \end{split}
\]

\begin{gather}
    W' + p(x)W = 0 \\
    W(x) = Ce^{-\int p(x)dx} \notag \\
    E = mc^2 
\end{gather}
```

- Para teoremas, demostraciones, definiciones: `\newtheorem`.
- Permite definir nuevos ambientes.
- Generalmente en el preámbulo para un código más ordenado.

```tex
% El nombre del ambiente no debe contener caracteres utf8
% theorem, proof, def, ...

\newtheorem{nombre-del-ambiente}{leyenda}

\begin{nombre-del-ambiente}[Título del bloque]
    % Contenido
\end{nombre}
```

[Ir al índice][Indice]

<a id="seccion-5"></a>

## 5. Tomando el control de LaTeX

- Paletas de colores:

```tex
% Valores posibles de model_names:
% usenames      - 16 colores
% divpsnames    - 68 colores
% svgnames      - 150 colores
% x11names      - 300 colores

\usepackage[model_names]{xcolor}
```

- Definir colores:

```tex
\usepackage{xcolor}

% modelo:
% gray  Escala de grises entre 0 y 1    {.58}
% rgb   Tres valores entre 0 y 1        {0, .6, .8}
% RGB   Tres valores entre 0 y 255      {0, 155, 10}
% HTML  Seis valores en hexadecimal     {AC0031}
% cmyk  Cuatro valores entre 0 y 1      {0, .3, 1, 0}

\definecolor{nombre}{modelo}{color}

\textcolor{nombre}{Contenido}
```

- En un archivo aparte `.tex` cargar el paquete `xcolor` y definir la paleta de colores con `\definecolor`.
- Cargar el archivo con `\input{nombre-de-archivo.tex}`.
- **Nuevos comandos**: `\newcommand`
- Para **redefinir comandos**: `\renewcommand`
- En el preámbulo o en otro fichero.

```tex
% Máximo 9 parámetros
% El nombre no puede contener dígitos
\newcommand{\nombre}[parámetros]{definición}

% Por ejemplo:
\newcommand{\cuadratica}{
    \begin{equation}
        x_{1,2} = \frac{1}{2a}\Bigl(-b\pm \sqrt{b^2 - 4ac}\Bigr)
    \end{equation}
}

% Llamar al comando
\cuadratica
```

- Crear un **compendio** o **diccionario** de ecuaciones `.tex`
- Para añadir un marcador a la ecuación en vez de la numeración automática: `\tag{nombre}`
- Símbolo más/menos: `\pm`
- **Condicionales**:

```tex
% Paquete para cargar condicionales en newcommand:

\usepackage{xstring}

% [numero de parametros][parametro por defecto]
% #1, #2, #3 representan los valores tomados por los parámetros
\newcommand{\nombre}[1][eq]{
    \IfEqCase {#1}{
        {eq}{
            \begin{equation}
                \hat{f}(\xi) = \int_{-\infty}^{+\infty}f(x)e^{-2\pi ix\xi}dx
            \end{equation}
        }
        {disp}{
            \[
                \hat{f}(\xi) = \int_{-\infty}^{+\infty}f(x)e^{-2\pi ix\xi}dx
            \]
        }
        {inLine}{
            $\hat{f}(\xi) = \int_{-\infty}^{+\infty}f(x)e^{-2\pi ix\xi}dx$
        }
    }
}

% Si hubieran varios parámetros:
% Parámetro opcional entre corchetes y obligatorios entre llaves.
\nombre[param1]{param2}{...}
\nombre{param1}{param2}{...}
```

```tex
% Para dibujar estructuras químicas:

\usepackage{chemfig}

\chemfig{}
\definesubmol{}{}
```

```tex
% Para generar gráficos:

\usepackage{tikz}
\usetikzlibrary{babel, shapes}

\node
\draw
\PackageError
```

- Nuevos **ambientes numerados**:

```tex
% En numeración: section, subsection, ...
% Se numerará nuevamente por cada seccion.

\newtheorem{nombre-del-ambiente}{leyenda}[numeración]
```

- Logo de **LaTeX**: `\LaTeX`

```tex
% Nuevos ambientes

\newenvironment{nombre-del-ambiente}[parametro-opcional]
```

```tex
% Cajas de texto

\usepackage{tcolorbox}

\begin{tcolorbox}[parametros, ...]
\end{tcolorbox}
```

[Ir al índice][Indice]

<a id="seccion-6"></a>

## 6. Figuras y tablas

```tex
% Paquete para incluir imágenes:
\usepackage{graphicx}

% Paquete para incluir márgenes:
\usepackage{vmargin}

\setpapersize{A4}
\setmargins{2.5cm}  % Margen izquierdo
{1.5cm} % Margen superior
{16.5cm} % Ancho del área de impresión
{23.42cm} % Largo del área de impresión
{0pt} % Espacio para el encabezado
{5mm} % Espacio entre el encabezado y el texto
{0pt} % Espacio para el pie de página
{5mm} % Espacio entre el pie de página y el texto
```

```tex
% Índice:
% Cambiar el encabezado del índice
\renewcommand{\contentsname}{Tabla de contenido}
% Crear el índice
\tableofcontents
```

- **Objetos flotantes**: Figuras o tablas que deben aparecer lo más próximo al texto que hace referencia a él.

```tex
% La escala va de 0 a 1
% También se puede indicar con [width = 5cm]
% o [width = 5cm, height = 5cm]

% La ubicación puede ser:
% t: top, b: bottom, h: here

\begin{figure}[ht]
    \centering % Para centrar la imagen
    \includegraphics[scale = 1]{images/portada.jpg}
    \caption{Leyenda de imagen}
\end{figure}
```

```tex
% Índice de imágenes

\renewcommand{\listfigurename}{Lista de figuras}
\listoffigures

% Renombrar el caption. Colocar dentro del documento, no en el preámbulo
\renewcommand{\figurename}{fig.}
```

```tex
% Para la ubicación de las imágenes, evitará reescribir la ubicación y extensión de las imágenes en el documento
% En el preámbulo

\graphicspath{{./images/}}
```

```tex
\usepackage{wrapfig}

% Ubicar imágenes y tablas en un párrafo
% P1 Número de líneas que ocupará
% P2 Ubicación: L, R, I, O
% P3 Espacio de separación entre el elemento y el texto
% P4 El ancho de la figura
% El ancho de la figura no es el mismo que de la imagen
% Ancho de la figura respecto al ancho del texto: {.45\textwidth}

\begin{wrapfigure}[P1]{P2}[P3]{P4}
    \includegraphics...
\end{wrapfigure}

\begin{wraptable}[P1]{P2}[P3]{P4}
    % Similar a wrapfigure pero con el ambiente tabular
\end{wraptable}
```

```tex
\usepackage{subcaption}

% Permite usar subfiguras
\begin{figure}[posición]
    \centering
    \begin{subfigure}[posición]{ancho}
        \centering
        \includegraphics...
        \caption{...}
    \end{subfigure}
    \hfill % Rellenar el espacio entre figuras
    \begin{subfigure}[posición]{ancho}
        \centering
        \includegraphics...
        \caption{...}
    \end{subfigure}
    % etc...
    \caption{general...}
\end{figure
```

- **Tablas**:

```tex
% Permite crear arreglos de datos con o sin bordes
% Alineación: 
%   {ccc} Tres columnas centradas sin bordes
%   {|c|c|c|} Tres columnas centradas con bordes

\begin{tabular}{|c|c|}
    \hline
    celda 11 & celda 12 \\
    \hline
    celda 21 & celda 22 \\
    \hline
\end{tabular}
```

```tex
\renewcommand{\listtablename}{Lista de tablas} % En documento
\listoftables
```

```tex
% Redefinir antes de la tabla a utilizar
% Espacio horizontal entre columnas.
% Dimensión en pt, cm, mm, etc

\renewcommand{\tabcolsep}{dimension}

% Espacio vertical entre filas.
% Valor proporcional

\renewcommand{\arraystretch}{valor}
```

```tex
% Grosor de línea de la tabla
\renewcommand{\arrayrulewidth}{1pt}
```

```tex
% Paquete que no está en la librería estándar
% Para evitar errores, copiar el código .sty en la carpeta de trabajo
% Para crear diagonales en la tabla

\usepackage{slashbox}

% {Parte inferior de celda}{Parte superior de celda}
\backslashbox{Contenido 1}{Contenido 2}
```

```tex
% Para separar cabecera del cuerpo de la tabla:
\hline \hline

% O doble barra vertical ||
\begin{tabular}{|c||c|}
```

```tex
% Colores en tablas:

\usepackage{colortbl}

% No es necesario si ya se cargó el paquete xcolor
% Puede que no cargue desde un \input
\usepackage[table]{xcolor} 

% Color de fondo:

% Antes de la fila a colorear
% {color!valor} !valor: Cantidad de color a usar
\rowcolor{color}

% En la definición de columnas
{|>{\columncolor{color}}c|...}

% Justo en la celda a colorear
\cellcolor{color}Contenido

% Antes del ambiente tabular, alterna entre colores
\rowcolors{primera fila pintada}{color 1}{color 2}
```

```tex
% Combinar celdas
\usepackage{multicol}
\usepackage{multirow}
```

[Indice]: #indice