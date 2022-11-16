// Tarea n°1
let importe = +prompt("Ingresar valor de importe")

if (importe >= 150) {
    descuento_otorgado=importe*0.12;
    document.write("Valor de descuento otorgado: " + descuento_otorgado + "<br/>");
} else {
    document.write("Valor de importe de compra final: "+ importe);

    
}


//Tarea n°2
let nombre= prompt("Ingresar nombre ")
let notapar = +prompt("Ingresar nota parcial")
let examenFi = +prompt("Ingresar examen final")
let promPract = +prompt("Ingresar promedio")

const total=(notapar+examenFi+promPract)/3;
if (total>=10) {
    document.write(`El alumno `+nombre +` tiene de promedio`+total)
} else {
    document.write("El otro año será, con fé")
}

//Tarea n°3

let sueldo = +prompt("Ingresar sueldo: ")
let hijos = +prompt("Numeros de hijos")

let bonificacion =0.07*sueldo;

if (hijos>0) {
    sueldofinal=sueldo+bonificacion;
    document.write(`El Trabajador `+ nombre +` tiene hijos `+hijos+` su sueldo es:  `+ sueldofinal);
} else {
    document.write("No hay hijos")
}

//Tarea n°4

let Numeros = +prompt("Ingresar numero: ")

if (Numeros>500){
    let porciento = Numeros*0.18
    document.write("El porcentaje es: " + porciento)
}else{
    document.write("No hay valor");
}

//Tarea n°5

let e = 1
for (let i = Numeros; i > 00; i--) {
    e *=i;
}
document.write(`El factorial es `+ e);