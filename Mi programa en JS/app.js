let nombre = prompt("Ingresa tu nombre");

let edad = prompt("Ingresa tu edad");

let peso = prompt("Ingresa tu peso");

let estatura = prompt("Ingresa tu estatura (expresada en metros)");

let imc = parseFloat(peso / (estatura * estatura));

console.log("Tu nombre es: " + nombre);
console.log("Tu edad es: " + edad + " años");
console.log("Tu peso es de: " + peso + " kg");
console.log("Tu estatura es de: " + estatura + " m");
console.log("Su indice de masa corporal (IMC) es: " + imc);