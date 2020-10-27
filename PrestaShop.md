# PRESTASHOP

<a id="indice"></a>

1. [Instalación](#seccion-1)

<a id="seccion-1"></a>

## Instalación

- Descargar desde: [PrestaShop](https://www.prestashop.com)
- Se puede usar un servidor local: **XAMPP**, **WAMP**, etc.
- Verificar la versión de **PHP** usada en PrestaShop.
- Crear carpeta de proyecto en `localhost`.
- Decomprimir PrestaShop en esa carpeta.
- Volver a descomprimir el archivo resultante, borrar los demás.
- Ingresar a `localhost/nombre-proyecto`
    - Elegir idioma de instalación.
    - Aceptar términos y condiciones.
    - Revisar la compatibilidad del sistema. Posibles problemas en `php.ini`.
    - Rellenar **datos de tienda** y del **administrador**.
    - Comprobar la conexión con la base de datos.
    - Esperar a que se configure e instale el sistema. Cualquier error en la instalación se corrige aumentando valores en `php.ini`.
    - Eliminar la carpeta `install`.
- **Back Office**: Al dar click cambiará el nombre de la carpeta `admin`.
- La dirección del **back office** será: `localhost/nombre-proyecto/admin****`.
- **Back Office**: `Ver mi tienda` para acceder al e-commerce.

### Instalación en servidor

- **cPanel** > Softaculous apps installer > `PrestaShop`.
- **Instalar**: Elegir versión, rellenar datos e instalar.

[Indice][indice]

<a id="seccion-2"></a>

## Panel de control

- Cambiar idioma:
    - Personalizar > Internacional > Traducciones
    - Personalizar > Internacional > Localización
- La sección de `VENTAS` es el **front office**.
- La secciones de `MEJORAS` y `CONFIGURAR` es el **back office**.
- Administrador de **productos** & Administrador del **sistema**.
- Inicio > Activar `Modo demo`.

## Módulos

- Diseño > `Posiciones`.
- La caja de borde gris: **Hook**. La caja de borde azul: **Módulo**.
- `displayNav1` > *Información de contacto*: **Modificar** o **Desenganchar**.
- Insertar un módulo:
    - Información de contacto.
    - displayNav1.
    - Sin excepciones.
- Personalizar módulos: Módulos > Module manager > `Configurar` o `Leer más` (del módulo).
- `displayNav2` > Idioma, moneda, sesión, carrito de compras.
- Arrastrar los módulos para reordenar.
- Si se cambia de hook a un módulo, es posible que no quede bien posicionado por el tema actual del sitio.
- `displayTop` > Menú principal y Barra de búsqueda. 
- `displayHome` > Carrusel, Productos destacados, Banner, Bloques de texto personalizado. 
- `displayFooterBefore` > Suscripción, Enlaces a redes. 


[indice]: #indice