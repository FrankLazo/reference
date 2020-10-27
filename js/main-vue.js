const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola Mundo!',
        frutas: [
            {nombre: 'Pera', cantidad: 10}, 
            {nombre: 'Manzana', cantidad: 0}, 
            {nombre: 'Plátano', cantidad: 6}
        ],
        nuevaFruta: '',
        total: 0,

        fondo: 'bg-warning',
        color: false
    },
    methods: {
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            });
            this.nuevaFruta = '';
        }
    },
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