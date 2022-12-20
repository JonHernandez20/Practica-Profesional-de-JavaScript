// Escribiendo HTML desde JavaScript
const primerTexto = document.querySelector('h1');
const input = document.querySelector('input');
const pId = document.querySelector('#tercero');
const div = document.querySelector('.div');
const img = document.createElement('img');

primerTexto.innerHTML = 'Patito';
console.log(primerTexto.getAttribute('pantalla'));
//PlatziLG
console.log(primerTexto.getAttribute('class'));
//verde
primerTexto.setAttribute('class', 'rojo');
console.log(primerTexto.getAttribute('class'));
//rojo
primerTexto.classList.add('azul');
console.log(primerTexto.getAttribute('class'));
//rojo azul
primerTexto.classList.remove('azul');
console.log(primerTexto.getAttribute('class'));
//rojo 

input.value = '456';
img.setAttribute('src', 'https://i.pinimg.com/564x/be/92/c4/be92c4bc802f17a50dbee4b22e61ad99.jpg');

console.log(img);
//<img src="https://i.pinimg.com/564x/be/92/c4/be92c4bc802f17a50dbee4b22e61ad99.jpg">

div.appendChild(img);