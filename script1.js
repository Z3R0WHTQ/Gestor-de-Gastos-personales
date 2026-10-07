const inputDescripcion = document.getElementById('descripcion');
const inputCantidad = document.getElementById('cantidad');
const selectTipo = document.getElementById('tipo');
const formulario = document.getElementById('formulario');

let movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];

formulario.addEventListener('submit', function (event) {
    event.preventDefault();

    const nuevoMovimiento = {
        descripcion: inputDescripcion.value,
        cantidad: Number(inputCantidad.value),
        tipo: selectTipo.value
    };

    movimientos.push(nuevoMovimiento);
    localStorage.setItem('movimientos', JSON.stringify(movimientos));
    formulario.reset();
});