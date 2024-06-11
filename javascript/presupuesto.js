// simulador de presupuesto de un consultorio medico y luego fichas medicas para ingreso de datos con ARRAYS para las/los terapeutas//

// variables declaradas y algunas inicializadas //

let mes = "";
let año = "";
let ingresos = 0;
let egresos = 0;
let respuesta = "";
let totalGastosProductos;
let totalGastosServicios;
let resultado;
let historial = "";


// funcion para validar el año ingresado //

function validarAño() {
    año = prompt("Ingrese el año a calcular: ");
    while (año < 2020 || isNaN(año) || año.toString() !== año) {
    console.log("El año ingresado no es válido.");
    año = prompt("Ingrese el año a calcular: ");    
    }
    return año;
}

// funciojn para validar el mes ingresado //

function validarMes() {
    mes = prompt("Ingrese el mes a calcular: ").toLowerCase();
    while (mes !== "enero" && mes !== "febrero" && mes !== "marzo" && mes !== "abril" && mes !== "mayo" && mes !== "junio" &&
    mes !== "julio" && mes !== "agosto" && mes !== "septiembre" && mes !== "octubre" && mes !== "noviembre" && mes !== "diciembre") {
    console.log("El mes ingresado no es válido.");
    mes = prompt("Ingrese el mes a calcular: ").toLowerCase();    
    }
    return mes;
}

// funcion para ingresar gastos de forma individual por cada producto //

function ingresarGastosProductos() {
    let totalGastosProductos = 0;
    let cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos comprados en el mes de " + mes));
    for (let i = 1; i < cantidadProductos + 1; i++) {
        let gasto = parseInt(prompt("Ingrese el monto del gasto individual del producto: " + i + " en el mes de " + mes));
        while (isNaN(gasto) || gasto < 0) {
            console.log("El monto ingresado no es válido.");
            gasto = parseInt(prompt("Ingrese el gasto del producto " + i + " en el mes de " + mes));
        }
        totalGastosProductos += gasto;
    }
    return totalGastosProductos;
}

// funcion para ingresar gastos de forma individual por servicios de empleados //

function ingresarGastosServicios(gastosServicios) {
    let totalGastosServicios = 0;
    let cantidadEmpleados = parseInt(prompt("Ingrese la cantidad de empleados:"));
    for (let i = 0; i < cantidadEmpleados; i++) {
        let gasto = parseInt(prompt("Ingrese el sueldo para el empleado " + (i + 1) + ":"));
        while (isNaN(gasto) || gasto < 0) {
            console.log("El monto ingresado no es válido.");
            gasto = parseInt(prompt("Ingrese el sueldo para el empleado " + (i + 1) + ":"));
        }
        totalGastosServicios += gasto;
    }
    return totalGastosServicios;
}

// funcion para registrar las ganancias de forma mensual //

function ingresarGanancias(mes, año) {
    let ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
    while (isNaN(ganancias) || ganancias < 0) {
        console.log("El monto ingresado no es válido.");
        ganancias = parseInt(prompt("Ingrese las ganancias del mes de " + mes + " del año " + año));
    }
    return ganancias;
}

// Función para calcular el saldo
function calcularSaldo(ingresos, egresos, mes, año) {
    let saldo = ingresos - egresos;
    let mensaje = `El saldo en el mes de ${mes} del año ${año} es ${saldo} `;
    if (saldo >= 0) {
        mensaje += "positivo";
    } else {
        mensaje += "negativo";
    }
    mensaje += ". Ingresos: " + ingresos + ", Egresos: " + egresos + ", Saldo: " + saldo + ".";    
    historial += mensaje + "\n";
}

//  funcion para gestionar el presupuesto //

function gestionarPresupuesto() {
    año = validarAño();
    mes = validarMes();
    totalGastosProductos = ingresarGastosProductos();
    totalGastosServicios = ingresarGastosServicios();
    ingresos = ingresarGanancias(mes, año);
    egresos = totalGastosProductos + totalGastosServicios;
    calcularSaldo(ingresos, egresos, mes, año);    
    do {
        respuesta = prompt("¿Desea seguir ingresando saldos? (si/no)").toLowerCase();
        if (respuesta === "si" || respuesta === "s") {
            año = validarAño();
            mes = validarMes();
            totalGastosProductos = ingresarGastosProductos();
            totalGastosServicios = ingresarGastosServicios();
            ingresos = ingresarGanancias(mes, año);
            egresos = totalGastosProductos + totalGastosServicios;
            calcularSaldo(ingresos, egresos, mes, año);
        }
    } while (respuesta === "si" || respuesta === "s");
}

gestionarPresupuesto();

console.log("Historial de saldos:\n" + historial);


/*
function miFuncion() {
    console.log("Ejecutando miFuncion");

}
miFuncion();


let numero = 1;
let maximo = 5;
let acumuladorSuma = 0;
while (numero <= maximo) {
    console.log(`${acumuladorSuma} + ${numero}`);
    acumuladorSuma += numero;
    console.log(acumuladorSuma);
    numero++;
}

function impares() {
    for (let i = 1; i <= 20; i++) {
        if (i % 2 !==0) {
        console.log(i + " es impar");
        }
    }
}

impares();

function mayorDeEdad(edad) {
    if (edad >= 18) {
        console.log("Eres mayor de edad");
    } else {
        console.log("Eres menor de edad");
    }
}

mayorDeEdad(19);

Consigna.
Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
Aspectos a incluir
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
Podrás encontrar un ejemplo en la carpeta “Ejemplos de actividades”

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado 

let suma = 0;
const CANTIDAD = 10;

for (let i = 1; i <= CANTIDAD; i++) {
    let num = parseInt(prompt("Ingrese un número"));
    suma += num;    
    alert(`${num} + ${suma - num} = ${suma}`);
}

function esPar() {
    let numero = prompt("Ingrese un numero: "); 
    numero = parseInt(numero);
    if (isNaN(numero)) {
        console.log("No ingresaste un número");
        return;
    }
    
    if (numero % 2 == 0) {        
        console.log("El número es par");
    } else {    
        console.log("El número es impar");
}
}
esPar();

Pedir un texto mediante prompt, concatenar un valor en cada repetición,
 realizando una salida por cada resultado, hasta que se ingresa “ESC”. 

let texto = prompt("Ingrese un texto");
let textoFinal = texto;
let textoJunto = " ";

while (textoJunto.toUpperCase() != "ESC") {
    textoJunto = prompt("Ingrese un texto para concatenar al anterior");     
    textoFinal = textoFinal + " " + textoJunto; 
    console.log(textoFinal); 
}

// ciclo por condiciones:

let suma2 = 0;
while (suma2 <= 100) {
    let num2 = parseInt(prompt("Ingrese un numero:"))    
    let sumaAnterior2 = suma2;
    suma2 += num2;
    console.log(`${num2} + ${sumaAnterior2} = ${suma2}`);   
}

Consigna. 
Tomando como base los ejemplos de la estructura for y while, crear un algoritmo que repita un bloque de instrucciones.
En cada repetición es necesario efectuar una operación o comparación para obtener una salida por alerta o consola.
Aspectos a incluir
Archivo HTML y Archivo JS, referenciado en el HTML por etiqueta <script src="js/miarchivo.js"></script>, 
que incluya la definición de un algoritmo en JavaScript que emplee bucles e instrucciones condicionales.
Podrás encontrar un ejemplo en la carpeta “Ejemplos de actividades”

Pedir número mediante prompt y sumarle otro número en cada repetición,realizando una salida por cada resultado 
ciclo por conteo/contador:


let suma = 0;
for (let i = 1; i <= 10; i++) {
    let num = parseInt(prompt("Ingrese un número"));
    let sumaAnterior = suma;    
    suma += num;    
    alert(`${num} + ${sumaAnterior} = ${suma}`);
}


let a, b, c, d, e, f;

// suma
a = 3 + 4;
console.log(a);

// resta
b = 6 -2
console.log(b)

// multiplicacion
c = a * 2;
console.log(c);

// division
d = b / 2.5;
console.log(d); 
console.log(typeof d);

// modulo
e = a % b;
console.log(e);

//potencia
f = 2 ** 3;
console.log(f);

a = 5;
b = 3;
c = ++a * b--;
console.log(c);
console.log(a);
console.log(b);

//  operadores logicos

let u = true;
let i = false;
console.log(u);
console.log(i);

// operador and

console.log(`${u} && ${i} -> ${u && i}`);

// operador ! not

console.log(`${u} -> ${!u}`)

let num1 = parseInt(prompt("Ingrese un numero del 1 al 1000"));

if ((num1 !="") && (num1 >1000)) {
    alert("el número elegido es mayor a 1000");
}

let texto = prompt("Hola");

if ((texto == "Hola") || (texto == "hola") || (texto == "HOLA") ) {
    alert("Hola, que tal?");
} else {
    alert("El texto ingresado es: "+texto+" y es distinto a Hola");
}

let num2 = parseInt(prompt("Ingrese otro número:"));

if ((num2 >10) && (num2 <50)) {
    alert("El número ingresado está entre 10 y 50");
}

let minimo = 10;
let maximo = 50;
let valor = parseInt(prompt("Ingrese un número entre 10 y 50"));
if (valor > minimo && valor < maximo) {
    alert("El número ingresado está entre 10 y 50");
}
*/