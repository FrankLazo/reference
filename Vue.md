# Vue.js

<a id="indice"></a>

1. [Introducción](#seccion-1)
1. [Métodos, v-model y evento click](#seccion-2)
1. [Keyup, v-model y Computed](#seccion-3)
1. [Clases (v-bind:class)](#seccion-4)

- Fuente: [Bluuweb !](https://www.youtube.com/playlist?list=PLPl81lqbj-4J-gfAERGDCdOQtVgRhSvIT)

<a id="seccion-1"></a>

## 1. Introducción

- Sitio oficial: [Vue.js](https://vuejs.org/)
- Copiar script `CDN` versión **development** en el documento `HTML`.
- Ubicarlo antes del cierre de `body`, antes de los propios scripts.
- En el archivo `.js` definir un objeto `Vue`.
- `el:` para acceder al elemento `HTML` y `data:` para la información.
- **Bucle** for... of: `v-for="... of ..."`
- **Condicional** if: `v-if="condición"`

```html
<div id="app">
    <h1>{{titulo}}</h1>
    <ul>
        <li v-for="fruta of frutas">
            {{fruta.nombre}} - {{fruta.cantidad}}
            <span v-if="fruta.cantidad === 0">(Sin stock)</span>
        </li>
    </ul>
</div>
```

```javascript
const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo!',
        frutas: [
            {nombre: 'Pera', cantidad: 10}, 
            {nombre: 'Manzana', cantidad: 0}, 
            {nombre: 'Plátano', cantidad: 6}
        ]
    }
})
```

[Indice][indice]

<a id="seccion-2"></a>

## 2. Métodos, v-model y evento click

- **Manipular** data desde el `HTML`: `v-model="nombreData"`
- `methods:` para indicar los métodos asociados al elemento.
- **Evento** click:
    - `v-on:click="nombreMétodo"` ó
    - `@click="nombreMétodo"`
- `this`: acceder al propio objeto.
- `push()`: añade nuevos elementos al final de un array.

```html
<input type="text" v-model="nuevaFruta">
<button @click="agregarFruta">Agregar</button>
```

```javascript
const app = new Vue({
    // code...
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    }
})
```

[Indice][indice]

<a id="seccion-3"></a>

## 3. Keyup, v-model y Computed

- Evento con **teclado**: `@keyup.enter = "nombreMetodo"`
- `v-model` devuelve strings, para que devuelva números: `v-model.number`
- Dentro de los eventos `v-on:` u `@` se puede escribir javascript puro.
- `Computed:` conjunto de métodos.

```html
<p>Total: {{sumarFrutas}}</p>
```

```javascript
const app = new Vue({
    // code...
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas)
            {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
})
```

[Indice][indice]

<a id="seccion-4"></a>

## 4. Clases (v-bind:class)

- Agregar clases:
    - `:class="'nombreClase'"`
    - `:class="['nombreClase-1', 'nombreClase-2', ...]"`
- Con ello se pueden manipular las clases a través de las variables `JS`.

```html
<!-- Tomará bg-info si color es true o bg-success si es false -->
<div :class="{'bg-info' : color, 'bg-success' : !color}">
```



[indice]: #indice