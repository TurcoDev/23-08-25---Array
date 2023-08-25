/*
Expresar cadenas de texto
let numero1 = 5
let numero2 = 8
"con comillas dobles tambien expreso cadenas de texto"
'hola' + 'este es el numero1 ' + numero1 + ' y este es numero2' + numero2
`hola este es el numero1 ${numero1} y este es numero2 ${numero2}`
*/

// Variables independientes
let persona1 = 'Pedro';
let persona2 = 'Marcos';
let persona3 = 'Federico';

// Solucion con estructura de array
let personas = ['Pedro', 'Marcos', 'Federico', 'Nicolas', 'Melisa'];

// Lerctura de datos de array
document.write('<p>' + personas[0] + '</p>');
document.write('<p>' + personas[1] + '</p>');
document.write('<p>' + personas[2] + '</p>');

// escritura de datos de array
personas[1] = 'Fernando';

// Mostrar los elementos de un arreglo
for (let index = 0; index < personas.length; index++) {
  document.write('<p>' + personas[index] + '</p>');
}

// Cargar un array con 5 numeros del 1 al 5

// let numeros = [1, 2, 3, 4, 5];
let numeros = [];
for (let index = 0; index < 5; index++) {
    numeros[index] = index + 1;
    console.log(`El indice es ${index} y el valor del elemento es ${numeros[index]}`);
}

// Crear una funcion que cargue un arreglo con numeros dado un tamaño
function cargarArray(tam) {
  let numeros = [];
  console.log('Carga de arreglo dentro de la funcion');
  for (let index = 0; index < tam; index++) {
    numeros[index] = index + 1;
    console.log(`El indice es ${index} y el valor del elemento es ${numeros[index]}`);
  }
}

cargarArray(6);
let miTamanio = 12;
cargarArray(miTamanio);

// Crear una funcion que cargue un arreglo con N numeros enteros aleatorios entre 1 y 100
function cargarArrayRandom(tam) {
  let numeros = [];
  console.log('Carga de arreglo dentro de la funcion');
  for (let index = 0; index < tam; index++) {
    numeros[index] = Math.floor(Math.random() * 100);
    console.log(`El indice es ${index} y el valor del elemento es ${numeros[index]}`);
  }
}

cargarArrayRandom(10);

// Version de la funcion anterior pero que retorna el array que genera
function getArrayRandom(tam) {
  let numeros = [];
  console.log('Carga de arreglo dentro de la funcion');
  for (let index = 0; index < tam; index++) {
    numeros[index] = Math.floor(Math.random() * 100);
    console.log(`El indice es ${index} y el valor del elemento es ${numeros[index]}`);
  }
  return numeros;
}

let tenNumbers = getArrayRandom(10);
document.write(tenNumbers);

// crea una funciona que devuelva el valor mas grande de un array de numeros

function getMaxNumber(array) {
  let max = array[0];
  for (let index = 0; index < array.length; index++) {
    if(max < array[index])
      max = array[index];
  }
  return max;  
}

let numerosAbuscar = getArrayRandom(15);
let maxNumber = getMaxNumber(numerosAbuscar);
document.write('<p>' + maxNumber + '</p>');





