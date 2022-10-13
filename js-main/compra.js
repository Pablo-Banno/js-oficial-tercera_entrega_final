const compra = new Carrito();
const listaCompra = document.querySelector("#lista-compra tbody");

const carrito = document.getElementById("carrito");

const procesarCompraBtn = document.getElementById("procesar-compra");

const cliente = document.getElementById("cliente");
const correo = document.getElementById("correo");

cargarEventos();

function cargarEventos() {

    document.addEventListener("DOMContentLoaded", compra.leerLocalStorageCompra());

    carrito.addEventListener("click", (e) => { compra.eliminarProducto(e) });

    compra.calcularTotal();

    procesarCompraBtn.addEventListener("click", procesarCompra);

    carrito.addEventListener("change", (e) => { compra.obtenerEvento(e) });
    carrito.addEventListener("keyup", (e) => { compra.obtenerEvento(e) });

}

function procesarCompra(e) {
    e.preventDefault();
    if (compra.obtenerProductosLocalStorage().length === 0) {
        Swal.fire({
            type: 'error',
            title: 'Oops...',
            text: 'No se detectaron productos en el carrito, por favor seleccione alguno.',
            showConfirmButton: false,
            timer: 3500
        }).then(function () {
            window.location = "index.html";
        })
    }
    else if (cliente.value === "" || correo.value === "") {
        Swal.fire({
            type: 'warning',
            title: 'Oops...',
            text: 'Ingrese todos los campos requeridos',
            showConfirmButton: false,
            timer: 2500
        })
    }
    else {
        Swal.fire({
            type: 'success',
            title: 'Compra realizada',
            text: '¡Gracias por confiar en nosotros! Te enviaremos los detalles del pedido al correo de contacto.',
            showConfirmButton: true
        })
    }
}
