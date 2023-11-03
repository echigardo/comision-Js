// este tipo de marca es un comentario de una linea 
/*
Este es un comentario multi-linea 
 */

// formato String o sea texto 
/* 
var nombre = "Edgardo"
var apellido = "Lamas"
var email = "d@gmail.com"

//Number.estos van sin comillas. para Js es lo mismo un numero entero que uno decimal  

// signo = es una asignacion. Cuando asigno aplico valor y tipo de dato 
var edad = 40 
var sueldo = 100.5 


// boolean o logicos 
var alumno = false 
var profesor = true 

// para la mayoria de los lenguajes de programacion al final del dato que cargue debo colocar  el punto  coma. 
// pero para Js no es necesario colocar el punto y coma, ya que igualmente lo toma como valido


// cuando a la variable no le asigno un valor se denomina Undefined o sea indefinido 
var casapropia
//NaN = Not a Number, no es un numero. NaN no es igual a Undefined 

var bebidaEnCasa = null 
// Null significa que no hay nada, es algo vacio. No es lo mismo que Undefinded. 

// esto que escribo es para mostrar informacion en el navegador 
console.log(nombre)

// Js es un lenguaje debilmente tipado 
var nombre = 4
console.log(nombre)
var nombre = true 
console,log(nombre)
var nombre = undefined
*/
/*
direccion = "calle vedadera 456"  // Antes asi o = 
var direccion = "calle verdadera 456" // de esta forma. 

direccion = "calle Falsa 234" // si no declaro la variable la declaro por defecto 
let direccion = "calle verdadera 456"
let direccion = "calle Falsa 123"
console.log(direccion)
*/

// Las variables se escriben con minusculas y las constantes con mayusculas.
/*
const IVA = 1.21 
console.log (IVA) 
const URL_PRESTAMOS = "http://prestamosya.com"
console.log(URL_PRESTAMOS)
*/
/*
let numero1 = 5 
let numero2 = 6 
console.log( numero1 + numero2)
console.log(numero1 * numero2)
console.log(numero1-numero2)
console.log(numero1/numero2)
console.log(numero1**numero2) // este signo es potencia 

//debilmente tipado 
let numero3 = "palabra1"
let numero4 = "palabra2"
console.log(numero3 + numero4) // el signo mas provoca que se concatenen los valores

let numero5 = 5
let numero6 = "9"
console.log (numero5 * numero6) // como en string no hay multiplicacion lo multiplica. 

console.log(2000 + 1500 +1000 +1250)
console.log (2000 + 1500 + 1000 * "") // en este caso multiplica 1000 por el string o comillas
console.log (2000 + 1500 + 1000 + null) // para que lo tome como string debe tener comillas


// CLASE FUNCIONES 

if(true) { // dentro del bloque escribo que es lo que sucede si se cumplo la condicion
console.log("Es verdadero")
}
*/
// EJEMPLO 
/*
let numeropar = parseInt( prompt("Ingrese un numero")) // entre parentesis va el mensaje
console.log(numeropar + 5)
// si ingreso una letra, como no es numero me devuelve NaN (Not a Number)
// CUANDO EN LA CONSOLA EL VALOR QUE ME MUESTRA ESTA EN COLOR BLANCO INDICA QUE ES UN STRING
//Cuando en la consola da un valor de color azul significa que es un numerico

if(espar) { parseInt(prompt ("ingrese un numero"))
    console.log("El numero es par")
} else{
    console.log("Es numero impar")
}
*/
/*
let numeropar = parseInt(prompt("Ingrese un numero"))

if (numeropar % 2==0){
    console.log("El numero es par")
} else{
    console.log("El numero es impar")
}
// operacion / es division, esto es % que seria el resto de la division entera y la que me debe importar


let numero1 = parseFloat(prompt("Ingrese un numero para multiplicar por dos"))


    console.log(numero1 * 2)
*/

// CONDICIONALES ANIDADAS 
/*
let nota = parseInt(prompt ("Ingrese una nota"))


    son operadores logicos de comparacion
    < menor 
    < = menor o igual 
    == igual 
    > mayor 
    > = mayor o igual  ( no es lo mismo que  =>)
*/
/*
if (nota >= 1){
    // nota valida 
    if(nota <=5) {
        console.log("Desaprobado") // como el 1 es mi nota minima, solo debo establecer la nota maxima, en este caso es 5 para desaprobado
    } else if (nota <= 7) { // abarca el 6 y 7 
        console.log("Aprobado")
    } else if (nota <=9) {
        console.log("Muy bien")
    } else if (nota == 10) {
        console.log("Exelente")
    } else {
        console.log("Nota no valida")  // me ingresan por ejemplo 11 o 12
    }
    } else {
        console.log( "Nota no valida") // ingresan -1 por ejemplo
    }


// NUEVOS OPERADORES LOGICOS 

let numero1 = "5" 
let numero2 = 5
console.log (numero1 === numero2)

// caso de error comun confundir asignacion (=) con igualdad (==)
if (numero1 = numero2) {
    console.log("V")
} else {
    console.log("F")

}
*/


    /*
    =  esto es asignacion, o sea me devuelve el valor que se le coloco a la variable 
    == analizo el VALOR de las variables  ==========>  esto es igualdad 
    === analizo el VALOR y el TIPO  de las variables =========> esto es estrictamente igual 

    

let numero = 0 
// el cero reporesenta una compuerta logica cerrada ( da siempres false)
// y cualquier numero que no sea cero para Js representa una compuerta logica abierta (siempre true)
if (numero == 0) {
    console.log("V")
} else {
    console.log("F")

}

// OTRO EJEMPLO OTRO EJEMPLO 
let nota = parseInt(prompt("ingrese una nota"))
if (nota >= 1 && nota <= 10){
    // nota valida 
    if(nota <=5) {
        console.log("Desaprobado") // como el 1 es mi nota minima, solo debo establecer la nota maxima, en este caso es 5 para desaprobado
    } else if (nota <= 7) { // abarca el 6 y 7 
        console.log("Aprobado")
    } else if (nota <=9) {
        console.log("Muy bien")
    } else  {
        console.log("Exelente")
    } 
    }  else {
        console.log( "Nota no valida") // ingresan -1 por ejemplo
    }

    // Estos operadores los utillizo para mrcar el rango de variables maximas y minimas 
    // en el ejemplo anterior, evitando colocar dos "else"
/*
        OPERADOR AND (  operador Si )
    p           &&          q
    V           V           V
    V           F           F
    F           F           V
    F           F           F

        OPERADOR OR (operador o)
    p           ||          q
    V           V           V
    V           V           F
    F           F           F
    F           V           V



// CLASE 3 CLASE 3 CLASSE 3 
// ESTRUCTURA FOR ESTRUCTURA FOR ESTRUCTURA FOR
CICLO FOR CICLO FOR CICLO FOR 
    for( let i = 1; i <= 5; i = i + 1) {  // las variables en algebra al igual que aqui son "i" "j" o "k"
        console.log(i)

}
*/
/* 

    i       i <= 5      i = i +1 
    1           V          2           
    2           V          3 
    3           V          4
    4           V          5
    5           V          6 
    6           F                     


// OTRO EJEMPLO OTRO EJEMPLO OTRO EJEMPLO 

let fin = parseInt(prompt("Ingrese un numero par"))

for ( let i = 0; i <= fin; i = i + 2) {  
    console.log(i)
}

/*
Si mi inicio nunca llega a mi fin, genero un ciclo infinito
for ( let i = 0; i <= fin; i = i - 2) {  si ingreso 2, el ciclo hace 0, -2, -4,-6 nunca termina
    console.log(i)
}


// CICLO WHILE  CICLO WHILE CICLO WHILE 

let condition = true 
while (condition) {
    let numero = parseInt (prompt("Ingrese un numero par"))
    if(numero % 2 == 0){
        
    }
}
*/


//CLASE CUATRO CLASE CUATRO CLASE CUATRO 
/*
// declaracion de la funcion 
function saludar() {
    let nombre = prompt("Ingrese su nombre") 
    alert ("Hola" +  nombre)
}
// llamado a la funcion
saludar() 
saludar() 
saludar() 



// FUNCIONES PARAMETROS PARAMETROS PARAMETROS 

function sumar (num1 , num2) { // son parametros de mi funcion
    alert (num1 + num2 )
}

let numero1 = parseFloat (prompt("Ingrese el primer numero"))
let numero2 = parseFloat (prompt("Ingrese el segundo numero"))

sumar(numero1, numero2)

*/

/*  
-------FOR --CICLO FOR ---CICLO FOR -----CICLO


let fin = parseInt(prompt("Ingrese un numero"))


for(let i = 12; i <= fin; i = i + 4) {
    console.log(i)
}


// CICLO WHILE-----CICLO WHILE-------CICLO WHILE -----CICLO WHILE

let ejecucionwhile = true 
let contador = 0
while ( ejecucionwhile == true) {  // es lo mismo que While ( ejecucionwhile)
    let numero = parseInt(prompt ( "Ingrese un numero par"))
    if (numero % 2 == 0) {
        alert("Gracias por ingresar un numero par")
        ejecucionwhile = false 
        }else{
            contador ++// =====> igual a contador= contador + 1 ====> contador += 1
            if (contador >= 5){
                alert ("ingrese please un numero par")
                
                }else {
                    alert("por favor ingresa un numero par")
                    }
            }
        }

 // ------OTRO EJEMPLOWHILE----OTRO EJEMPLO WHILE

let userinvalido = true
let contador = 0
while(userinvalido) {
    let password = prompt("ingrese contraseña de la cuenta")
    if (password == "CoderHouse") {
        userinvalido = false
    } else {
        contador ++
        alert ("contraseña no valida")
        if (contador == 3) { // corto el ciclo de ejecucion
            alert ("llegaste al maximo de intentos")
            break // se utiliza para cortar ciclos de ejecucion de errores 
        }
    }
}
if (userinvalido == true) {
    alert ("usuario bloqueado")
} else {
    alert ("bienvenido")
}
 
// -----CICLO DE EJECUCION DO WHILE----CICLODE EJECUCION DO WHILE

//-----caso SWITCH ------CASO SWITCH------CASO SWITCH






let numero1 =  parseFloat(prompt("ingrese el primer numero"))
let numero2 =  parseFloat(prompt("ingrese el segundo numero"))
let operacion = prompt("ingrese la operacion (+,-, *,/")

switch (operacion) {
    case "+" :
        alert ("El resultado de la suma es:" + (numero1 + numero2))
        break 
    case "*" :
        alert ("El resultado de la multiplicacion es:" + (numero1 * numero2))
        break 
    case "/" :
        alert ("El resultado de la division es:" + (numero1 / numero2))
        break 
    case "-" :
        alert ("El resultado de la resta es:" + (numero1 - numero2))
        break 
    default :
        alert ("La operacion ingresada no es valida ")
        break
}


// -----EJEMPLO DE CALCULO DE KILOCALORIAS PARA UNA HABITACION ----//
let ancho = parseFloat (prompt("ingrese el ancho"))
let largo = parseFloat (prompt ("ingrese el largo"))
let alto = parseFloat (prompt ("ingrese el alto"))
let operacion = prompt ("ingrese la operacion (*)")
let calorias = prompt ("ingrese la operacion (ancho, largo, alto, 50")


switch (operacion) {
    case "*":
        alert ( "Las kilocalorias necesarias son:" + (ancho * largo * alto * 50))
        break 
        default: 
        alert ( "la operacion ingresada no es valida")
}



// -----------------------EJEMPLOS DE LOS APUNTES -------//
ejemplos de FOR ----FOR ---FOR--

let ingresarNumero = parseInt(prompt("Ingresar numero")); 
for (let i = 1; i <=10; i++){
    let resultado = ingresarNumero * i; 
    alert (ingresarNumero + "x" + i + " = " + resultado);
}

// -------EJEMPLO DE MATERIAL ----
-----EJEMPLO DE WHILE---EJEMPLO DE WHILE -----

for (let i = 1; i<= 20; i++) {
    let ingresarNombre = prompt ("ingresar nombre"); 
    alert ("turno N°" + i + "nombre :" + ingresarNombre); 
}
  

let entrada = prompt ("Ingresar un dato"); 

while (entrada != "ESC") {
    alert ("El usuario ingreso" + ":" + " " + entrada);
    entrada = prompt ("Ingresar otro dato");
}


// --- DO WHILE---DO WHILE--- DO WHILE---DO WHILE---
do while ---DO WHILE---DO WHILE---DO WHILE---
let repetir = false 
do{
    console.log ("solo una vez")
} while (repetir)


let numero = 0 ; 
do{
    // repetimos con do while  mientras el usuario ingresa un N°
    numero = prompt (" Ingresar Numero")
    console.log (numero) 
    // si el parseo no resulta un numero se interrumpe el ciclo

} while (parseInt(numero))


// ---SWITCH---SWITCH---SWITCH ----SWITCh--- 
let entrada = prompt ("Ingresar un nombre")
// repetimos hasta que se ingrese ESC
while(entrada != "ESC"){
    switch (entrada ) {
        case "ANA" :
            alert ("HOLA ANA");
            break;
        case "JUAN" : 
            alert ("HOLA JUAN")
            break 
        default :
            alert ("¿quien sos?")
            break 
        
    }
    entrada = prompt ("ingresar un nombre")
}

let numero1 = parseInt(prompt("Ingrese el numero que sera sumado en cada iteracion"))
let suma = 0 

for (let i = 0; i < 10; i++) {
    let numero2 = parseInt(prompt ("Ingrese el numero para sumar"))
    suma = numero1 + numero2 
    console.log (suma)
}




let texto = prompt ("Ingrese un texto")
let resultado = texto;
let textoconcatenar = " "
while ( textoconcatenar != "ESC") {
    textoconcatenar = prompt ("ingrese el texto para concatenar al inicial")
    resultado = resultado + " " + textoconcatenar
    console.log(resultado)
}

let numero1 = parseInt (prompt ("Ingrese un numero para repetir el mensaje",0))
for (let i = 1; i <= numero1; i++){
    alert ("Hola")
}

// declaro la funcion primero
function saludar (){
    let nombre = prompt("ingrese su nombre")
    alert ("Hola" + " " + nombre)
}
// llamo a la funcion declarada
    saludar () 
    saludar ()
    saludar ()
*/
/* no esta resuelto bien este ejercicio. NO ESTA RESUELTO EL EJERCICIO
function balanceTermico( coeficiente, largo, ancho, alto){
    let calculo = coeficiente * largo * ancho * alto ;
    alert (coeficiente * largo * ancho * alto )
    return caculo
}
let largo = parseFloat (prompt("ingrese el largo"))
let ancho = parseFloat (prompt("ingrese el ancho"))
let alto = parseFloat (prompt("ingrese el alto"))
let coeficiente = 50
alert ("su balance Termico" + calculo )

multiplicar (largo, ancho, alto, cargatermica)
   

    // CLASE 6 OBJETOS -------CLASE 6 OBJETOS----CLASE 6 OBJETOS--
// un objeto se compone de atributos clave- valor 
    const alumno = {
        nombre : "Edgardo" ,
        apellido : "logos",
        email : "edgardologos@gmail.com",
        password : "edlogo", 
        dni : "123456"
    }
    // puedo consultar por todos los elementos que componen ese objeto o
    // indivuidualmente colocando un punto luego del nombre del objeto y seleccionando 
    // la clave del valor que estoy interesado. Colocando una coma consulto por varios valores


    // CLASES----CLASE----CLASE-----CLASE ----CLASE 


class Producto {
    constructor (code, nombre, categoria, precio, stock) {
        this.code = code 
        this.nombre = nombre 
        this.categoria = categoria 
        this.precio = precio 
        this.stock = stock 
    }
    aumentarPrecio (porcentajeAumento) {  // por ejemplo 1.3 
            this.precio *= porcentajeAumento // esto es igual this.precio = this.precio * porcentajeAumento
    }
    aumentarStock (cantidadProductos) {
        this.stock += cantidadProductos
    }
}

const producto1 = new Producto ("A123", "Arroz", "Legumbre", 450, 20)
producto1.aumentarPrecio (1.30)
producto1.aumentarStock (20)
console.log(producto1)



// ----OBJETOS----OBJETOS----OBJETOS----OBJETOS---

const alumno  = {
    nombre : "Edgard", 
    apellido : "Lomos",
    email : "edgard@gmail.com",
    password : "23456",
    dni : "202234",
}
console.log(alumno)

const tutor = {
    cargo : "jefe",
    funcion : "supervisar",
    tiempo : "nocturno",
    zona : "norte",
}
console.log(tutor.zona)


class Producto {
    constructor ( code, nombre, categoria, precio, stock) {
        this.code = code   // estoy definiendo que mi propiedad this.code sea igual a mi code
        this.nombre = nombre 
        this.categoria = categoria 
        this.precio = precio
        this.stock = stock 
    }
    aumentarPrecio (porcentajeAumento){ // por ejemplo 1,3
        this.precio *= porcentajeAumento  // esto es igual a this.precio = this.precio * porecentajeAumento
    }  
    aumentarStock (cantidadProductos){
        this.stock += cantidadProductos  // esto es igual a this.stock = this.stock + cantidadProductos
    }
}
const producto1 = new Producto ( "A123", "arroz", "legumbres", 450, 20) // estoy generando una nueva instancia de la Class producto
const producto2 = new Producto ( "A124", "fideo", "pastas", 350, 30)
const producto3 = new Producto ( "A125", "harina", "panaderia", 380, 286)
const producto4 = new Producto ( "A126", "amargo", "jugos", 380, 98)
const producto5 = new Producto ( "A127", "queso", "fiambres", 970, 34)

producto1.aumentarPrecio, producto3.aumentarPrecio, producto5.aumentarPrecio (1.30)
producto1.aumentarStock (28)

producto2.aumentarPrecio (1.20)
producto2.aumentarStock (30)

console.log(producto1, producto2, producto3, producto5)  



class Animal {
    constructor ( nombre, nombrecientifico, habitat){
        this.nombre = nombre 
        this.nombrecientifico = nombrecientifico
        this.habitat = habitat 
    }
    duerme () {
        console.log ("Estoy durmiendo")
    }
    come () {
        console.log ("Estoy comiendo")
    }
}
class Mamifero extends Animal{  //La clas Mamifero va a ser una extension de la class Animal
    constructor (colorpelaje, nombre, nombrecientifico, habitat) {
        super ( nombre, nombrecientifico, habitat)
        this.colorpelaje = colorpelaje 
        // con estapalabra reservada estoy llamando a la clase padre. 
    }
    amamantar () {
        console.log("Estoy amamantando")

    }
}
class Reptiles extends Animal {
    constructor (venenoso, nombre, nombrecientifico, habitat) {
        super ( nombre, nombrecientifico, habitat)
        this.venenoso = venenoso
        
    }
    muerde () {
        console.log("estoy mordiendo")

    }
}
const mamifero1 = new Mamifero ("negro", "toro", "toritusman", "El campo")
const reptiles1 =  new Reptiles ("si", "mamba", "mambabarius", "africa")

console.log(mamifero1)
console.log(reptiles1) 


// CLASE  ARRAYS-----CLASE ARRAYS----CLASE ARRAYS------CLASE ARRAYS--- 

const nombres = [ "jorge", "juan", "maria", "miriam", "josu", "jando","fernando", "edgardo", ]
  // si coloco entre corchetes el indice de alguno de los nombres , solo me muestra ese indice

for (let i = 0; i <nombres.length; i++) { //con este comando me entrega en tiempo real el total del contenido del arays. 
    console.log (nombres [i])
}

// COMO  AGREGAR ELEMENTOS EN UN ARRAYS-----
// --------METODO PUSH----METODO PUSH---

const nombres1 = [ "jorge", "juan", "maria", "miriam", "josu", "jando","fernando", "edgardo", ]
console.log (nombres)

nombres.push ("miguel") // este comando agrega el elemento en ultimo lugarclear
console.log (nombres)

nombres.unshift("Federico") //  este comando agrega el elemento al principio del arraysgit 
console.log (nombres)

nombres.splice (4,0, "ludmila") // este comando agrega el elemento en el indice que determine
console.log (nombres) 
 */ 















