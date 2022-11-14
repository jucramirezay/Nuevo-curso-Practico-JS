const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const boton = document.querySelector('#btnCalcular');
const resultado = document.querySelector('#resultado');

const formulario = document.querySelector('#form');
const calculo3 = document.querySelector('#calculo3');
const calculo4 = document.querySelector('#calculo4');
const boton2 = document.querySelector('#btnCalcular2');
const resultado2 = document.querySelector('#resultado2');

// Escucha cada vez que suceda un evento desde el HTML, ejecuta el código indicado
// los argumentos de la función son ('evento', función sin parentesis)
// Funciones que permiten tener el HTML limpio ya que dentro del mismo no se ejecutaría nada de JavaScript
boton.addEventListener('click', botonOnClick); // Evento de tipo click

// Para el evento submit se debe utilizar el query del formulario 
formulario.addEventListener('submit', sumarInputValues); // Evento de tipo submit

// Función que se va a ejecutar cada vez que se le da click a un botón 
function botonOnClick() {
    // Los valores que se obtienen de inputs son Strings, se deben convertir a números
    let resultadoSuma = 0;
    resultadoSuma = parseInt(calculo1.value) + parseInt(calculo2.value);
    resultado.innerText = 'Resultado: ' + resultadoSuma;
    console.log('Escuchando el evento de click');
}

function sumarInputValues(event) {
    event.preventDefault(); // Previene que se recargue la página una vez se oprime el botón de evento submit
    let resultadoSuma;
    resultadoSuma = calculo3.value + calculo4.value;
    resultado2.innerText = 'Resultado: ' + resultadoSuma;
    console.log('Escuchando el evento de submit');
}