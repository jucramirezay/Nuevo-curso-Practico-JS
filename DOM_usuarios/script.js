const h1 = document.querySelector('h1');
const calculo1 = document.querySelector('#calculo1');
const calculo2 = document.querySelector('#calculo2');
const boton = document.querySelector('#botonCalcular');
const resultado = document.querySelector('#resultado');

// Función que se va a ejecutar cada vez que se le da click a un botón 
function botonOnClick() {
    // Los valores que se obtienen de inputs son Strings, se deben convertir a números
    let resultadoSuma = 0;
    resultadoSuma = parseInt(calculo1.value) + parseInt(calculo2.value);
    resultado.innerText = 'Reusltado: ' + resultadoSuma;
    console.log('Escuchando el evento de click');
}