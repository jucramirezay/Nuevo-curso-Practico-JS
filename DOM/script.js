console.log("Hola mundo");

// ? Métodos utilizados para leer elementos HTML desde JavaScript
/* Por medio de un String se debe enviar cual es el nombre de la etiqueta HTML que se desea obtener. Como
   en CSS, acá también se pueden seleccionar las etiquetas de HTML de diferentes formas
    - nombre etiqueta -> document.querySelector('nombreEtiqueta');
    - id -> document.querySelector('#nombreID');
    - clase -> document.querySelector('.nombreClase'); 
   En caso de haber varias etiquetas HTML con el mismo nombre, se toma solamente la primera de ellas.
   Este método provee propiedades o atributos que pueden ser utilizados con los valores de las constantes, por
   ejemplo, uno de ellos es el valor de los input.
   Se puede crear una lista con todas las etiquetas HTML del mismo nombre, por medio del siguiente método
   - nombre etiqueta -> document.querySelectorAll('nombreEtiqueta');
*/

const h1 = document.querySelector('h1');
const p = document.querySelectorAll('p'); // Pone en una lista TODAS las etiquetas HTML del mismo tipo
const parrafito = document.querySelector('.parrafo');
const pid = document.querySelector('#pid');
const input = document.querySelector('input');

console.log(p); // Imprime una lista con todas las etiquetas p que se encuentren en el HTML
console.log(input.value); // Si el input posee un valor, imprime dicho valor

// Imprimer un objeto con los valores de las etiquetas seleccionadas anteriormente
console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

// ? Escritura y edición de HTML desde JavaScript

// Permite editar la etiqueta indicada con los elementos escritos adentro del String
h1.innerHTML = 'Nuevo Titulo <br> en dos renglones'; // Se puede ingresar código HTML internamente
p[0].innerText = 'Nuevo parrafo escrito desde JavaScript <br>'; // No se puede ingresar código HTML, solo texto

// Lectura y edición de atributos en etiquetas HTML desde JavaScript
console.log(h1.getAttribute('pantalla')); // Lee el atributo indicado que tiene el elemento
console.log(p[1].getAttribute('class')); // Obtiene el atributo clase del elemento
p[1].setAttribute('class', 'parrafo_nuevo'); // Modifica el atributo indicado del elemento

// Método utilizado para editar las clases de las etiquetas en HTML
p[1].classList.add('clase_nueva'); // Añade la clase indicada a la etiqueta
p[1].classList.remove('parrafo_nuevo'); // Elimina la clase indicada a la etiqueta HTML

// Cuando se obtienen etiquetas HTML desde Javascript como en el paso anterior, se puede entrar a editar sus 
// atributos directamente, llamandolos desde el código sin necesidad de getAttribute o setAtttribute
input.value = 'valor_base'; // Altera el valor base del value de la etiqueta

// Creación de etiquetas HTML desde cero
// Para poder agregar una etiqueta desde JavaScript a HTML, se debe tener una etiqueta ya creada sobre la cual
// se va a  realizar el ingreso de la nueva etiqueta
const img = document.createElement('img'); // Crea la etiqueta HTML deseada
img.setAttribute('src', 'https://as01.epimg.net/meristation_en/imagenes/2022/05/09/news/1652110999_892487_1652111061_noticia_normal_recorte1.jpg');
pid.innerHTML = ''; // ELimina el contenido actual de la etiqueta
pid.append(img); // Agrega la etiqueta nueva, dentro de la etiqueta indicada