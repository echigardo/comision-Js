
function calcular (largo, ancho, alto, coeficiente){

    alert  (largo * ancho * alto * coeficiente + " Kcal/h")  
}




let bienvenida = ("Bienvenido a su Balance Termico")
alert ("Bienvenido a su Balance Termico")

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


    let respuesta = (prompt ( "¿ desea ingresar otro calculo ?"))
    let nuevo = true 
do{
    calcular (largo, ancho, alto, coeficiente) 
    if (respuesta == si ){
        nuevo == true
    }else {
        respuesta == no 
        break 
    }
} while (nuevo == true)

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
*/