 // Ejercicio 982

 function ingresenumero(numero) {
    return function(v, i, a) {
        return v > numero;
    }

 }

 let numeros = [9, 15, 30, 25, 22, 29, 33, 52];

let sonmayores = numeros.filter(ingresenumero(30));

console.log(sonmayores); 