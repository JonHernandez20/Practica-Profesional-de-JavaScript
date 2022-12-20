// Clase 2 - Test de JavaScript

//Variables
/*  Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios. */
const name = 'Jonathan Alejandro ';
const lastName = 'Hernandez Arriaga';
const nickName = 'Jon';
const yearOld = 20;
const mail = 'pgr.gni.20@gmail.com';
const yearMax = True;
const moneySaved = 1500;
const deps = 840;
/* Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas) */
const completeName = nombre + apellido;
const completeMoney = dineroAhorrado - deudas;

//funciones

/* Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función: 
const namej = "Juan David";
const lastname = "Castro Gallego";
const completeNamej = name + lastname;
const nickname = "juandc";
console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + "."); */
function saludar(completeName, nickName) {
    console.log('Hello my name is' + completeName + 'but i preferer what name Jon' + nickName);
}

saludar('Jonathan Hernandez', 'Jon');

//condicionales

/* Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
    const tipoDeSuscripcion = "Basic";
    switch (tipoDeSuscripcion) {
        case "Free":
            console.log("Solo puedes tomar los cursos gratis");
            break;
        case "Basic":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
            break;
        case "Expert":
            console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
            break;
        case "ExpertPlus":
            console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
            break;
    }. */
const tipoDeSuscripcion = 'Basic';

if(tipoDeSuscripcion == 'Free') {
    console.log('Solo puedes tomar cursos gratis.');
} else if(tipoDeSuscripcion == 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante 1 mes');
} else if(tipoDeSuscripcion == 'Expert') {
    console.log('Puedes tomar casi todos los cursos durante 1 año');
} else if(tipoDeSuscripcion == 'ExpertPlus') {
    console.log('Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante 1 año');
} else {
    console.log('No tienes ninguna suscripcion');
}

/* Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if). */
if(tipoDeSuscripcion == 'Free') {
    console.log('Solo puedes tomar cursos gratis.');
} 
if(tipoDeSuscripcion == 'Basic') {
    console.log('Puedes tomar casi todos los cursos de Platzi durante 1 mes');
} 
if(tipoDeSuscripcion == 'Expert') {
    console.log('Puedes tomar casi todos los cursos durante 1 año');
} 
if(tipoDeSuscripcion == 'ExpertPlus') {
    console.log('Tu y alguien mas pueden tomar TODOS los cursos de Platzi durante 1 año');
} 

// ciclos

/* Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}*/ 
n = 0;
while (n < 5) {
    console.log('El valor de n es: ' + n);
    n++;
}

n = 10;
while (n >= 2) {
    console.log('El valor de n es: ' + n);
    n--;
}

/* Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar. */
for(let i = 0; i == 0; i) {
    let pregunta = prompt('Cuanto es 2+2');
    if(pregunta == 4) {
        alert('Felicidades eres un campeon');
        break;
    }
    if(pregunta != 4) {
        alert('Error');
    }
}
const exercise = () => {
    let pregunta = prompt('Cuanto es 2+2');
    if(pregunta == 4) {
        alert('Felicidades eres un campeon');
    }
    if(pregunta != 4) {
        alert('Error');
        exercise();
    }
}

// listas

/* Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. */
function imprimir(array) {
    console.log(array[0]);
}
imprimir(['Manzana', 'Uvas', 'Peras', 'Sandias']);

/* Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo). */
function imprimirList (array) {
    for (let i = 0; array.length > i; i++) {
        console.log(array[i]);
    }
}
imprimirList(['Manzana', 'Uvas', 'Peras', 'Sandias']);

/* Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo). */

const persona = {
    nombre: 'Jonathan',
    edad: 20,
    estudiante: true
};

function objectImp (object) {
    const entry = Object.entries(object);
    for (let i = 0; entry.length > i; i++) {
        console.log(entry[i]);
    }
}

objectImp(persona);