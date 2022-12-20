//addEventListener

const n1 = document.getElementById('numberOne');
const n2 = document.getElementById('numberTwo');
const resultado = document.getElementById('resultado');
const btnClear = document.getElementById('btnClear');
const btnResult = document.getElementById('btnResult');

/* btnResult.addEventListener('click', () => {
    resultado.innerText = Number(n1.value) + Number(n2.value);
})
 */

/* btnClear.addEventListener('click', () => {
    n1.value = '';
    n2.value = '';
    resultado.innerText = 'Resultado';
}) */

btnResult.addEventListener('click', sumarValores);
btnClear.addEventListener('click', limpiarValores)

function limpiarValores (event) {
    event.preventDefault();
    n1.value = '';
    n2.value = '';
    resultado.innerText = 'Resultado';
}

function sumarValores (event) {
    event.preventDefault();
    resultado.innerText = Number(n1.value) + Number(n2.value);
}