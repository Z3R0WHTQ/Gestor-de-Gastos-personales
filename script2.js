const lista = document.getElementById('lista-movimientos');
const balance = document.getElementById('balance');
const mensajeVacio = document.getElementById('mensaje-vacio');

const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];

let total = 0;

if (movimientos.length > 0 && mensajeVacio) {
    mensajeVacio.remove();
}

movimientos.forEach(function (m) {
    const tr = document.createElement('tr');

    const tdDescripcion = document.createElement('td');
    tdDescripcion.textContent = m.descripcion;

    const tdTipo = document.createElement('td');
    tdTipo.textContent = m.tipo;
    tdTipo.className = m.tipo;

    const tdCantidad = document.createElement('td');
    tdCantidad.textContent = '$' + m.cantidad;
    tdCantidad.className = m.tipo;

    const tdAccion = document.createElement('td');

    tr.appendChild(tdDescripcion);
    tr.appendChild(tdTipo);
    tr.appendChild(tdCantidad);
    tr.appendChild(tdAccion);
    lista.appendChild(tr);

    if (m.tipo === 'ingreso') {
        total += m.cantidad;
    } else {
        total -= m.cantidad;
    }
});

balance.textContent = '$' + total;
