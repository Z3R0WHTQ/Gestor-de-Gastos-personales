const lista = document.getElementById('lista');
const balance = document.getElementById('balance');

const movimientos = JSON.parse(localStorage.getItem('movimientos')) || [];

let total = 0;

movimientos.forEach(function (m) {
    const li = document.createElement('li');
    li.textContent = m.descripcion + ' - $' + m.cantidad + ' (' + m.tipo + ')';
    lista.appendChild(li);

    if (m.tipo === 'ingreso') {
        total += m.cantidad;
    } else {
        total -= m.cantidad;
    }
});

balance.textContent = '$' + total;