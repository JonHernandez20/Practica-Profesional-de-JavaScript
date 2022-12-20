// Eventos en JavaScript: Interactuando con usuarios

const n1 = document.getElementById('numberOne');
const n2 = document.getElementById('numberTwo');
const resultado = document.getElementById('resultado');
const btn = document.getElementById('btnResult');

function suma () {
    resultado.innerHTML = Number(n1.value) + Number(n2.value);
}

function clean () {
    n1.value = "";
    n2.value = "";
    resultado.innerText = '';
}