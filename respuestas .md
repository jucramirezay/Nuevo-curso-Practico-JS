## Variables

### Responde las siguientes preguntas 

- ¿Qué es una variable y para qué sirve?

Son espacios en memoria que permiten almacenar información, la cual depende de los tipos y estructuras de datos que soporte el lenguaje de programación.  

- ¿ Cúal es la diferencia entre declarar e inicializar una variable?

Declarar es cuando le decimos a JavaScript que vamos a crear una variable con cierto nombre.  
Inicializar (o reinicializar) es cuando se asigna un valor a dicha variable.

- ¿Cual es la diferencia entre sumar números y concatenar Strings?
- ¿Cúal es el operador que permite sumar o concatenar?

El operador que permite sumar o concatenar es. Este operador permite sumar números cuando se utilizar con valores númericos, pero cuando se utilizan valores de tipo String, lo que hace es unir o concatenar las cadenas de caracteres. 

### Determine el nombre y tipo de dato para almacenar en variables la siguiente información:

- Nombre: String
- Apellido: String
- Nombre de usuario en Platzi: String
- Edad: Int
- Correo Electrónico: String
- Mayor de edad: Booleano
- Dinero ahorrado: Float
- Deudas: Float

### Traduzca a código JavaScript las variiables del ejemplo anterior 

```
let name = 'Juan Camilo';
let lastName = 'Ramirez Ayala';
let username = 'jucramirezay';
let age = 27;
let email = 'jucramirezay@gmail.com';
let isAdult = true;
let saveMoney = 2000;
let debts = 100;
``` 

### Calcule e imprime las sigueintes variables a partir del ejemplo anterior

- Nombre completo (Nombre y apellido)
- Dinero real (dinero ahorrado menos deudas)

```
let nameComplete = name + ' ' + lastName;
let realMoney = saveMoney - debts;
```

## Funciones

### Responda las siguientes preguntas

- ¿Qué es una función?

Las funciones permiten encapsular (guardar) bloques de código para reutilizarlos y ejecutarlos en el futuro. 

- ¿Cuando sirve utilizar una función en el código?

Sirve para cuando se tienen variables o bloques de código muy parecidos (con cambios que podrían ser parámetros y argumentos) que se pueden encapsular para reutilizar más de una vez el código en el futuro. También sirve para mejorar la legibilidad del código. 

- ¿Cúal es la diferencia entre parámetro y argumento?

Parámetro es lo que recibe una función al momento en que se esta creando.
Cuando se llama la función, los valores que se envian a la misma en la ejecución son argumentos. 

### Convertir el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y arugmentos de una función 

```
const name = "Juan David";
const lastName = "Castro Gallego";
const completeName = name + " " + lastName;
const nickName = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");
```

```
function greeting(name, lastName, nickName) {
    let completeName = name + " " + lastName;
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickName + ".");
}
```

## Condicionales

### Responda las siguientes preguntas

- ¿Que es un condicional?

Son la forma en que ejecutamos un bloque de código u otro dependiendo de alguna condición o validación

- Qué tipos de condicionales existen en JavaScript y cúales son sus diferencias?

if (else y else if), switch

El condicional if (else y else if) nos permite hacer validaciones completamente distintas (si así queremos) en cada validación o condicional. En cambio, en el switch todos los cases se comparan con la misma variable o condición que definimos en el switch

- ¿Puedo combinar funciones y condicionales?

Si, las funciones pueden encapsular cualquier bloque de código, incluyendo condicionales.

### Replicar el comportamiento del siguiente código que usa la sentencia swtich utilizando if, else y else if:

```
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
}
```

```
if(tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis");
} else if(tipoDeSuscripcion == 'Basic') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert') {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if(tipoDeSuscripcion == 'ExpertPlus') {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```

## Ciclos 

### Responde las siguientes preguntas 

- ¿Qué es un ciclo?

Forma de ejecutar un bloque de código hasta que se cumpla cierta condición.

- ¿Qué tipo de ciclos existen en JavaScript?

While, for, do while

- ¿Qué es un ciclo infinito y porqué es un problema?

El ciclo infinito se da cuando la validación de los condicionales nunca se cumple y termina dañando la aplicación, por ejemplo, cuando el navegador ya no puede más de la ejecución de dicho código, se desborda la memoria. 

- ¿Se pueden mezclar ciclos y condicionales?

Si, aunque los ciclos son una especie de condicionales, nada impide agregar mas condicionales dentro del ciclo. 

### Replique el comportamiento de los siguientes ciclos for en un ciclo while 

```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
```

```
let i = 0;

while(i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

i = 10;

while(i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}
```

### Escriba un código que le pregunte al usuario cuando es 2+2, si la respuesta es correcta que indique un mensaje de felcitación, en caso de ser incorrecta que vuelva a preguntar. 

```
let respuesta;

while(respuesta != 4) {
    let pregunta = int(promp('¿Cúanto es 2+2?'))
    respuesta = pregunta;
}
```

## Listas y Objetos

### Responde las siguientes preguntas 

- ¿Qué es un array?

Es una lista de elementos. 

- ¿Qué es un objeto?

Es una lista de elementos, pero cada elemento tiene un nombre clave que permite el llamado de dicho elemento.

- ¿Cúando es mejor usar objetos o arrays?

Arrays cuando lo que se hace sobre un elemento es lo mismo que sobre todos los demás (la regla se puede incumplir).
Un objeto cuando los nombres de cada elemento son importantes para el algoritmo.

- ¿Se pueden mezclar arrays con objetos o incluso objetos con arrays?

Si, los arrays pueden guardar objetos. Y los objetos pueden guardar arrays

### Crear una función que pueda recibir cualquier array como parámetro e imprima su primer elemento. 

```
function primerElementoArray(array){
    console.log(array[0]);
}
```

### Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

```
function imprimirElementoPorElemento(array) {
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
```

### Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).

```
function imprimirElementoPorElementoObjeto(obj) {
    const array = Object.values(obj);
    for(let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
```

## Ejercicios Bonús

### Replicar el comportamiento del condicional utilizando solamente if

```
function conseguirTipoSuscripcion(suscripcion) {
    if(suscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;
    }
    if(suscripcion == 'Basic') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        return;
    }
    if(suscripcion == 'Expert') {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        return;
    } 
    if(suscripcion == 'ExpertPlus') {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        return;
    }

    console.warn("Ese tipo de suscripción no existe");
}
```

### Replicar el comportamiento anterior con arrays u objetos y un solo condicional 

```
const tiposDeSuscripciones = {
    free: console.log("Solo puedes tomar los cursos gratis"),
    basic: console.log("Puedes tomar casi todos los cursos de Platzi durante un mes"),
    expert: console.log("Puedes tomar casi todos los cursos de Platzi durante un año"),
    expertPlus: console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

function conseguirTipoSuscripcionObj(suscripcion) {
    if (tipoDeSuscripcion[suscripcion]) {
        console.log(tipoDeSuscripcion[suscripcion]);
    }

    console.warn("Ese tipo de suscripción no existe");
}
```
