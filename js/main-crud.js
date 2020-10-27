// Variables

const formularioUI = document.querySelector('#formulario');
const listaActividadesUI = document.getElementById('listaActividades');
let arrayActividades = [];


// Funciones

const crearItem = (actividad) => {
    let item = {
        actividad: actividad,
        estado: false
    }

    arrayActividades.push(item);
}

const guardarDB = () => {
    localStorage.setItem('rutina', JSON.stringify(arrayActividades));

    pintarDB();
}

const pintarDB = () => {
    listaActividadesUI.innerHTML = '';
    arrayActividades = JSON.parse(localStorage.getItem('rutina'));

    if(arrayActividades === null)
    {
        arrayActividades = [];
    }
    else
    {
        arrayActividades.forEach(element => {
            if(element.estado)
            {
                listaActividadesUI.innerHTML += `<div id="listaActividades"><div class="alert alert-success mt-3" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - ${element.estado}<div class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></div></div></div>`
            }
            else
            {
                listaActividadesUI.innerHTML += `<div id="listaActividades"><div class="alert alert-danger mt-3" role="alert"><span class="material-icons float-left mr-2">accessibility_new</span><b>${element.actividad}</b> - ${element.estado}<div class="float-right"><span class="material-icons">done</span><span class="material-icons">delete</span></div></div></div>`
            }
        });
    }
}

const editarDB = (actividad) => {
    let indexArray = arrayActividades.findIndex(elemento => elemento.actividad === actividad);
    arrayActividades[indexArray].estado = true;
    guardarDB();
}

const eliminarDB = (actividad) => {
    let indexArray;
    arrayActividades.forEach((elemento, index) => {
        if(elemento === actividad)
        {
            indexArray = index;
        }
    })

    arrayActividades.splice(indexArray, 1);
    guardarDB();
}

// Eventos

formularioUI.addEventListener('submit', (e) => {
    e.preventDefault();
    let actividadUI = document.querySelector('#actividad').value;

    crearItem(actividadUI);
    guardarDB();

    formularioUI.reset();
});

document.addEventListener('DOMContentLoaded', pintarDB);

listaActividadesUI.addEventListener('click', (e) => {
    e.preventDefault();

    if(e.target.innerHTML === 'done' || e.target.innerHTML === 'delete')
    {
        let texto = e.path[2].childNodes[1].innerHTML;
        if(e.target.innerHTML === 'done')
        {
            editarDB(texto);
        }
        if(e.target.innerHTML === 'delete')
        {
            eliminarDB(texto);
        }
    }
});