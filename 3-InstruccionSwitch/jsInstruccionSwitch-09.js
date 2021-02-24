function mostrar()
{
	var estacion =txtIdEstacion.value;
	let destino = document.getElementById("txtIdDestino").value;
	let precioBase =parseInt(15000);
	let precioTota;
	switch(estacion)
	{
		case "Invierno":
		if(destino == "Bariloche")
		{
			precioTotal=precioBase + precioBase * 20/100;
			alert("El precio total es: " + precioTotal);
		}
		else if(destino == "Mar del plata")
		{
			precioTotal = precioBase - precioBase * 20/100;
			alert("El precio total es: " + precioTotal);	
		}
		else
		{
			precioTotal = precioBase - precioBase * 10/100;
			alert("El precio total es: " + precioTotal);
		}
		break;

		case "Verano":
		if(destino == "Bariloche")
		{
			precioTotal=precioBase - precioBase * 20/100;
			alert("El precio total es: " + precioTotal);
		}
		else if(destino == "Mar del plata")
		{
			precioTotal = precioBase + precioBase * 20/100;
			alert("El precio total es: " + precioTotal);	
		}
		else
		{
			precioTotal = precioBase + precioBase * 10/100;
			alert("El precio total es: " + precioTotal);
		}
		break;

		case "Otoño":
		case "Primavera":
		if(destino == "Cordoba")
		{
			precioTotal = precioBase;
			alert("El precio total es: " + precioTotal + " (sin modificacion de precio)");
		}
		else
		{
			precioTotal = precioBase + precioBase * 10/100;
			alert("El precio total es: " + precioTotal);
		}
		break;


	}

}//FIN DE LA FUNCIÓN
/*

en Otoño y Primavera: bariloche tiene un aumento del 10% 
cataratas tiene un aumento del 10% 
Mar del plata tiene un aumento del 10% y 
Cordoba tiene el precio sin descuento*/