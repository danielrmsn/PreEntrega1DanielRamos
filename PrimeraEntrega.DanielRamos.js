let productoUno = 10
let productoDos = 20
let productoTres = 30
const iva = 1.16
const total = 0

function costo (producto,iva){
    total = producto * iva
   
}

alert("Elige un producto de la lista: 1.-productoUno 2.-productoDos 3.-productoTres")

 let producto = prompt("Introduce el nombre")

 while producto > 0 {

    if producto < 0 {
        console.log("Introduce un producto valido")
        continue
    }
    console.log(costo(producto,iva))
 }
 


