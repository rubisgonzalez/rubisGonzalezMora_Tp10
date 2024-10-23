/*calcular el nuevo sueldo a un
trabajador*/
let nombre = "Rubis";
let apellido = "Gonzalez";
let sueldoActual = 300000;
let porcentajeAumento = 20;

let calculoAumento = sueldoActual*porcentajeAumento/100;
let nuevoSueldo = calculoAumento+sueldoActual;

/*
console.log(calculoAumento)
console.log(nuevoSueldo);*/


console.log("Hola, estimad@ " + nombre + " " + apellido);
console.log("En base a su sueldo actual: $" + sueldoActual);
console.log("Ha recibido un aumento del: $" + porcentajeAumento + "%");
console.log("y su nuevo sueldo es de: $" + nuevoSueldo);