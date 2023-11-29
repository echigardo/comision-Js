

let bienvenida = ("Bienvenido a su Balance Termico")
alert ("Bienvenido a su Balance Termico")

function calcular (largo, ancho, alto, coeficiente){

    alert  (largo * ancho * alto * coeficiente + " Kcal/h")  
}

let largo = parseFloat (prompt ("Ingrese el largo"))
let ancho = parseFloat (prompt ("Ingrese el ancho"))
let alto  = parseFloat (prompt ("Ingrese el alto"))
let coeficiente = 50 

alert ( " Potencia a instalar")
calcular (largo, ancho, alto, coeficiente) 


function radiadores (largo, ancho, alto, coeficiente, radiador){
    alert (largo * ancho * alto * coeficiente / radiador + " Elementos") 
}

let radiador = 200
//calcular (largo, ancho, alto, coeficiente)
alert ("Cantidad de Elementos")
radiadores (largo, ancho, alto, coeficiente, radiador) 

function kits (largo, ancho, alto, coeficiente, radiador, valvulas){
    alert (largo * ancho * alto * coeficiente / radiador / valvulas + "  Radiadores")
}

let valvulas = 12
alert (" Cantidad de Radiadores")
kits (largo, ancho, alto, coeficiente, radiador, valvulas)





let nuevocalculo = parseFloat (prompt ("desea un nuevo calculo"))
let si = calcular 
if (calcular == si){
    alert ("ingresa nuevos valores")
    function calcular (largo, ancho, alto, coeficiente){

        alert  (largo * ancho * alto * coeficiente + " Kcal/h")  
    }
    
    let largo = parseFloat (prompt ("Ingrese el largo"))
    let ancho = parseFloat (prompt ("Ingrese el ancho"))
    let alto  = parseFloat (prompt ("Ingrese el alto"))
    let coeficiente = 50 
    
    alert ( " Potencia a instalar")
    calcular (largo, ancho, alto, coeficiente) 
    
    
    function radiadores (largo, ancho, alto, coeficiente, radiador){
        alert (largo * ancho * alto * coeficiente / radiador + " Elementos") 
    }
    let radiador = 200
//calcular (largo, ancho, alto, coeficiente)
alert ("Cantidad de Elementos")
radiadores (largo, ancho, alto, coeficiente, radiador) 

function kits (largo, ancho, alto, coeficiente, radiador, valvulas){
    alert (largo * ancho * alto * coeficiente / radiador / valvulas + "  Radiadores")
}

let valvulas = 12
alert (" Cantidad de Radiadores")
kits (largo, ancho, alto, coeficiente, radiador, valvulas)
    }else{
        alert ("fallaste")
    }
    alert  (largo * ancho * alto * coeficiente + " Kcal/h") 



/*
do{

let respuesta = (prompt ( "¿ desea ingresar otro calculo ?")) 

    calcular (largo, ancho, alto, coeficiente){
    }
} while (respuesta != "si")
*/

/*
let nota = parseInt (prompt ("Ingrese las calorias")) 
    if (nota <= 200) {
        console.log("Un elemento")
        } else if (nota <= 400){
            console.log ("Dos elementos")
        }else if (nota <= 600){
            console.log("Tres elementos")
        }else if (nota <= 800){
            console.log ("Cuatro elementos")
        }else if (nota <= 1000){
            console.log ("Cinco elementos")
        }else if (nota <= 1200){
            console.log ("seis elementos")
        }else if (nota <= 1400){
            console.log("Siete elementos")
        }else if (nota <=1600){ 
            console.log ("ocho elementos")
        }else if (nota <= 1800){
            console.log("nueve elementos")
        }else if (nota <= 2000){
            console.log("Diez elementos")
        }else {
            console.log("valor no valido")
        }







// getElementById

let contenedor = document.getElementById("conteiner")
let titulo = document.getElementById ("titule")
let subtitulo = document.getElementById ("ya")
console.log (contenedor.innerHTML)
console.log (titulo.innerHTML)
console.log (subtitulo.innerHTML)

// get ElementsByclassName 

let pastas = document.getElementsByClassName ("pastas")
console.log (pastas [0].innerHTML)
console.log (pastas [1].innerHTML)
console.log (pastas [2].innerHTML)

//getElementByTagName

let articulos = document.getElementsByTagName ("article")
console.log (articulos [0].innerHTML)
console.log (articulos [1].innerHTML)
console.log (articulos [2].innerHTML)
console.log (articulos [3].innerHTML)

*/




