## API Canvas

```html
<section id="dibujo">
    <canvas id="lienzo">
        fallback para navegadores que no soportan html5.
    </canvas>
</section>
```

```javascript
// Rectángulos
getContext('2d');               // La naturaleza del canvas: 2d, 3d
fillRect(x, y, ancho, alto);    // Dibuja rectángulo sólido
strokeRect(x, y, ancho, alto);  // Dibuja rectángulo vacío
clearRect(x, y, ancho, alto);   // Borrador rectangular
```

```javascript
// Colores. Especificar antes de dibujar
strokeStyle     // Color de contorno
fillStyle       // Color de relleno
globalAlpha     // Transparencia de todas las figuras del lienzo
```

```javascript
// Degradados
// Crea objeto para aplicar degradado al lienzo
var degradado = createLinearGradient(x1, y1, x2, y2);
// Crea objeto para aplicar degradado circular o radial
var degradado = createRadialGradient(x1, y1, r1, x2, y2, r2);
// Posición marca donde empieza el degradado. Valores entre 0.0 y 1.0
degradado.addColorStop(posicion, color);

lienzo.fillStyle = degradado;   // Asignar degradado al relleno
```

- Para profundizar en las **APIs**: [w3c](https://www.w3.org/).

```javascript
// Trazados

// Comenzar y terminar el trazado:
beginPath();    // Inicia la figura
closePath();    // Termina la figura. Si se usa fill(), closePath() puede ser ignorado

// Crear el trazado:
moveTo(x, y);   // Mueve el lápiz
lineTo(x, y);
rect(x, y, ancho, alto);
arc(x, y, radio, angulo_inicial, angulo_final, direccion);  // Angulos en radianes
// Curva bezier cuadrática.
// Punto de control: a, b. Punto final x, y.
quadraticCurveTo(a, b, x, y,);
bezierCurveTo(a, b, c, d, x, y);    // Curva bezier cúbica

// Dibujar el trazado:
stroke();   // Sólo contorno
fill();     // Figura sólida
clip();     // Crea una máscara
```

```javascript
// Propiedades para las líneas.
lineWidth   // Grosor de línea. Por defecto 1
lineCap     // Terminación de línea: butt - round - square
lineJoin    // Conexión entre líneas: round - bevel - miter
// Para usar con lineJoin + miter
miterLimit  // Cuánto ha de extenderse la unión entre líneas
```

```javascript
// Texto.

// Propiedades:
font            // Mismos valores que en CSS
textAlign       // Alineamiento horizontal: start - end - left - right - center
textBaseline    // Alineamiento vertical: top - hanging - middle - alphabetic - ideographic - bottom

// Creación:
strokeText(texto, x, y);    // Dibuja texto sin relleno
fillText(texto, x, y);      // Dibuja texto con relleno
measureText();              // Devuelve información sobre tamaño del texto

// Propiedades para sombras:
shadowColor     // Color de sombra
shadowOffsetX   // Desplazamiento horizontal de la sombra
shadowOffsetY   // Desplazamiento vertical de la sombra
shadowBlur      // Difuminado de la sombra
```

```javascript
// Transformaciones
// Son acumulativas, sus parámetros se suman a los especificados anteriormente
translate(x, y)     // Mueve el origen del lienzo
rotate(radianes)    // Rota el lienzo
scale(x, y)         // Aumenta o disminuye el lienzo
transform(sx, r, sesgar, sy, tx, ty)    // Cambia las características del lienzo
setTransform(m1, m2, m3, m4, dx, dy)    // Reinicia las características de la matriz
save()      // Graba el estado del lienzo: translate, rotate y scale
restore()   // Restaura el estado grabado del lienzo con save()
```

```javascript
// Superposiciones
// source-in - source-out - source-atop - lighter - xor
// destination-over - destination-in - destination-out
// destination-atop - darker - copy
globalCompositeOperation    // Toma uno de los valores anteriores
```

```javascript
// Imágenes
drawImage(imagen, x, y);
drawImage(imagen, x, y, ancho, alto);
// x, y, ancho y alto 1 corresponden sólo al recorte, los demás a la imagen en general
drawImage(imagen, x1, y1, ancho1, alto1, x2, y2, ancho2, alto2);

// Imágenes como datos
// Almacena en un array los datos de cada pixel en rgba
getImageData(x, y, ancho, alto);
putImageData(datosdeImagen, x, y);
createImageData(ancho, alto);
```

```javascript
// Animaciones
// En el ejemplo se usaron los siguientes métodos
clearRect()
setInterval()
clearInterval()
```