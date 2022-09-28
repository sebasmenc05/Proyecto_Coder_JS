alert ("Bienvenido a IVAEL Desarrollos Inmobiliarios");
let terrenoA = "herradura";
let terrenoB = "san marcos";
let terrenoC = "resguardo";

let precioTerrenoA = 1000000
let precioTerrenoB = 1200000
let precioTerrenoC = 1250000
let montoDeEntrega = 0
let cantidadDeCuotas = 0

function montoDeCuotas (saldoACancelar, cantidadDeCuotas){
    montoDeCuotas = saldoACancelar/cantidadDeCuotas
    return 
}

let compra = prompt("Elija el numero del terreno que desa comprar \n1- herradura \n2- san marcos \n3-resguardo \n4- esc para salir");

    if (compra == 1){
        alert ("El Precio del Terreno elejido es " + precioTerrenoA);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        let saldoACancelar = precioTerrenoA - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas);
        alert ("Gracias por Elejir el terreno Herradura, el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);

    } else if (compra ==2){
        alert ("El Precio del Terreno elejido es " + precioTerrenoB);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        let saldoACancelar = precioTerrenoB - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas)
        alert ("Gracias por Elejir el terreno San Marcos el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);  

    } else if (compra ==3){
        alert ("El Precio del Terreno elejido es " + precioTerrenoC);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        let saldoACancelar = precioTerrenoC - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas)
        alert ("Gracias por Elejir el terreno Resguardo el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);       
    } else {
        alert ("Gracias por su visita. Estamos a disposicion para la compra del terreno")
    }
   

