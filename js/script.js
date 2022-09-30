alert ("Bienvenido a IVAEL Desarrollos Inmobiliarios");


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

const terrenoA = new Terreno ("herradura", "10x30", 1000000, 6);
const terrenoB = new Terreno ("san marcos", "10x40", 1200000, 10);
const terrenoC = new Terreno ("resguardo", "10x50", 1300000, 8);


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

let compra = prompt("Elija el numero del terreno que desa comprar \n1- herradura \n2- san marcos \n3-resguardo \n4- esc para salir");

    if (compra == 1){
        alert ("El Precio del Terreno elejido es " + precioTerrenoA);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        saldoACancelar = precioTerrenoA - montoDeEntrega;
        montoDeCuotas();
        alert ("Gracias por Elejir el terreno Herradura, el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);

    } else if (compra ==2){
        alert ("El Precio del Terreno elejido es " + precioTerrenoB);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        saldoACancelar = precioTerrenoB - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas)
        alert ("Gracias por Elejir el terreno San Marcos el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);  

    } else if (compra ==3){
        alert ("El Precio del Terreno elejido es " + precioTerrenoC);
        montoDeEntrega = parseInt(prompt("Ingrese en pesos el importe que desea entregar para la compra"))
        cantidadDeCuotas = parseInt(prompt("ingrese cantidad de cuotas para cancelar el terreno"));                 
        saldoACancelar = precioTerrenoC - montoDeEntrega;
        montoDeCuotas (saldoACancelar, cantidadDeCuotas)
        alert ("Gracias por Elejir el terreno Resguardo el precio a cancelar es de " + saldoACancelar + " en cuotas de " + montoDeCuotas);       
    } else {
        alert ("Gracias por su visita. Estamos a disposicion para la compra del terreno")
    }
   

