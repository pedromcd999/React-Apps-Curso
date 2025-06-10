//Arreglos en Js

// const arreglo = new Array(10);
const arreglo = [5,2,3,6];
// arreglo.push(1);

const arreglo2 = [...arreglo,5];

const arreglo3 = arreglo2.map(function(x){return x ** 2})

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);