function mostrar()
{
	let precio;
	let descuento;
	let precioFinal;

	precio = parseInt(prompt("ingrece el precio"));
	descuento = parseInt(prompt("ingrece el porcentaje de descuento"));
	precioFinal = precio - precio* descuento/100;
	document.getElementById("elPrecioFinal").value = precioFinal;
}
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.