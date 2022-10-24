alert ("Bienvenido a IVAEL Desarrollos Inmobiliarios");
alert ("Con nosotros podes: Comprar Terreno, Solicitar Mensuras, Limpieza de terrenos y Instalacion de red de agua y energía");

/* funcion constructora de mensuras */
class Mensuras {
    constructor (nombreMensura,superficie, cantidadDePlanos, precioMensura) {
        this.nombreMensura = nombreMensura
        this.superficie = superficie
        this.cantidadDePlanos = cantidadDePlanos
        this.precioMensura = precioMensura
    }
    
}

let mensuraCampo = new Mensuras ("campo","mas de 500 hs", 5, 50000)
let mensuraTerreno = new Mensuras ("terreno","menos de 500 hs", 3, 25000)
let mensuraHorizontal = new Mensuras ("horizontal","1 hs", 10, 80000)

let listaDeMensuras = [mensuraCampo, mensuraTerreno, mensuraTerreno]

/* funcion constructora alquileres */
class Alquileres{
    constructor (tipo, ubicacion, precioMensual){
        this.tipo = tipo
        this.ubicacion = ubicacion
        this.precioMensual = precioMensual

    }
    disponible(){
        this.disponible = true
    }
}

const alquileres = []
alquileres.push(new Alquileres("casa", "zona Norte", 25000))
alquileres.push(new Alquileres("campo", "zona Sur", 85000))
alquileres.push(new Alquileres("departamento", "centro", 15000))



/*funcion constructora para crear los terrenos  */
class  Terreno {
    constructor (lugar, medidas, precio, stock) {
        this.lugar = lugar.toLowerCase();
        this.medidas = medidas;
        this.precio = precio;
        this.stock = stock;
    }
    vender (){

        this.vendido = false
    }

}
const terrenos = [];
terrenos.push( new Terreno ("herradura", "10x30", 1000000, 6));
terrenos.push (new Terreno ("san marcos", "10x40", 1200000, 10));
terrenos.push (new Terreno ("resguardo", "10x50", 1300000, 8));



let montoDeEntrega = 0
let cantidadDeCuotasMensuales = 0
let tasaDeInteresMensual = 0.03
let saldoACancelar

function calcularInteres (){
    let interes = saldoACancelar * tasaDeInteresMensual * cantidadDeCuotasMensuales
    return interes
}


function montoDeCuotas (){
    montoDeCuotas = saldoACancelar/cantidadDeCuotas
    return montoDeCuotas
}



/* EMPEZAMOS A UTILIZAR DOM EN PROYECTO HTML */

let contenedorMensuras = document.getElementById("contenedorMensuras")
for (const mensura of listaDeMensuras){
    let card = document.createElement ("div")
    card.className = "card"
    card.innerHTML = `<h2>${mensura.nombreMensura}</h2><p>Superficie: ${mensura.superficie}</p><p>Precio: $${mensura.precioMensura}</p>`
    contenedorMensuras.append(card)
    }

let contenedorCatalogoTerreno = document.getElementById("contenedorCatalogoTerreno")
for (const terreno of terrenos){
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<h2>${terreno.lugar}</h2><p>Medidas: ${terreno.medidas}</p><p>Precio: $${terreno.precio}</p>`
    contenedorCatalogoTerreno.append(card)
}

let contenedorCatalogoDeAlquileres = document.getElementById("contenedorCatalogoDeAlquileres")
for (const alq of alquileres){
    let card = document.createElement("div")
    card.className = "card"
    card.innerHTML = `<h2>${alquileres.tipo}</h2><p>Ubicación: ${alquileres.ubicacion}</p><p>Precio Mensual: $${alquileres.precioMensual}</p>`
    contenedorCatalogoDeAlquileres.append(card)

}







/* 

let compraDeTerreno = prompt("Elija el numero del terreno que desa comprar \n1- herradura \n2- san marcos \n3-resguardo \n4- esc para salir");

    if (compra == 1){
        alert ("El Precio del Terreno elejido es " + terrenos[0].precio);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        saldoACancelar = terrenos[0].precio - montoDeEntrega;
        montoDeCuotas();
        alert ("Gracias por Elejir el terreno Herradura, el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);

    } else if (compra ==2){
        alert ("El Precio del Terreno elejido es " + terrenos[1].precio);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        saldoACancelar = terrenos[1].precio - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas)
        alert ("Gracias por Elejir el terreno San Marcos el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);  

    } else if (compra ==3){
        alert ("El Precio del Terreno elejido es " + terrenos[2].precio);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        saldoACancelar = terrenos[2].precio - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas)
        alert ("Gracias por Elejir el terreno Resguardo el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);       
    } else {
        alert ("Gracias por su visita. Estamos a disposicion para la compra del terreno")
    }
   

 */