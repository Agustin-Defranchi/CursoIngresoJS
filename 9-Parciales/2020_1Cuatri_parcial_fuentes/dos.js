function mostrar()
{
  	let tipo;
  	let cantidad;
	let precio;
  	let salir;
  	let cantidadTotal;
  	let precioTotal;
	let precioConDescuento;
	let contadorCemento;
	let contadorCal;
	let contadorArena;
//	let precioMaxCal;
//	let precioMaxCemento;
//	let precioMaxArena;
	let flagPrecio;
	let precioMax;
	let tipoMax;

	cantidadTotal = 0;
	precioTotal = 0;
	contadorCemento = 0;
	contadorCal = 0;
	contadorArena = 0;
//	precioMaxCal = 0;
	//precioMaxCemento = 0;
	//precioMaxArena = 0;
	flagPrecio=0;

	do
	{
		tipo = prompt("ingrese el tipo de material (cal ,cemento o arena)");
		while(tipo !="cal" && tipo != "cemento" && tipo != "arena")
		{
			tipo = prompt("ingrese un tipo de material correcto (cal ,cemento o arena)")
		}

		cantidad = parseInt(prompt("ingrese la cantidad de bolsas"))
		while(cantidad <= 0 || isNaN(cantidad) )
		{
			cantidad = parseInt(prompt("ingrese una cantidad valida"));
		}

		precio = parseInt(prompt("ingrese el precio por bolsa (precio mayor a 0)"))
		while(precio <= 0 || isNaN(precio))
		{
			precio = parseInt(prompt("ingrece un precio mayor a 0"))
		}

		cantidadTotal += cantidad; 
		precioTotal += precio;

		if(tipo == "cemento") 
		{
			contadorCemento ++;
			//precioMaxCemento += precio;

		}
		else if(tipo == "cal")
		{
			contadorCal ++ ;
			//precioMaxCal += precio;
		}
		else
		{
			contadorArena ++;
			//precioMaxArena += precio;
		}

		if(flagPrecio == 0 || precio > precioMax)
		{
			precioMax = precio;
			tipoMax = tipo;
			flag = 1;
		}

		salir = prompt(" desea salir?");

	}while(salir!="s");

	alert("el importe total a pagar sin descuento es de "+precioTotal);

	if(cantidadTotal > 10 && cantidadTotal <= 30)
	{
		precioConDescuento = precioTotal - precioTotal * 15/100;

		alert("el precio con descuento es de "+precioConDescuento+", la cantidad de bolsas son: "+cantidadTotal+" y el descuento aplicado es del 15% ");
	}
	else if(cantidadTotal > 30)
	{
		precioConDescuento = precioTotal - precioTotal * 25/100;

		alert("el precio con descuento es de "+precioConDescuento+" y la cantidad de bolsas son: "+cantidadTotal + " y el descuento aplicado es del 25% ");
	}

	if (contadorArena > contadorCal && contadorArena > contadorCemento)
	{
		alert("el tipo con mayor cantidad de bolsas es la arena");
	}
	else if(contadorCal > contadorArena && contadorCal > contadorCemento)
	{
		alert("el tipo con mayor cantidad de bolsas es la cal");
	}
	else 
	{
		alert("el tipo con mayor cantidad de bolsas es el cemento");
	}

	alert("el tipo mas caro es: " + tipoMax);
	/*if(precioMaxCal > precioMaxArena && precioMaxCal > precioMaxCemento)
	{
		alert("el producto mas caro es la cal con un valor total de " + precioMaxCal);
	}
	else if(precioMaxArena > precioMaxCal && precioMaxArena > precioMaxCemento)
	{
		alert("el producto mas caro es la arena con un valor total de " + precioMaxArena);
	}
	else
	{
		alert("el producto mas caro es el cemento con un valor total de " + precioMaxCemento);
	}*/


}
//cal 100 precio 100   cemento 200 precio 200 arena 300 precio 300


/*Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.(terminado)
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.(terminado)
a) El importe total a pagar , bruto sin descuento y...(terminado)
b) el importe total a pagar con descuento(solo si corresponde) (terminado)
d) Informar el tipo con mas cantidad de bolsas.(terminado)
f) El tipo mas caro ()

*/