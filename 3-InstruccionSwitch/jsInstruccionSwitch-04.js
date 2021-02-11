function mostrar()
{
	//tomo el mes
	var mes =txtIdMes.value;
		switch (mes)
	{

		case "Febrero":
		alert("Este mes tiene 28.");
		break;
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
		alert("Este mes tiene 30. ");
		break;
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
		alert("Este mes tiene 31.");
		break;
	}


}//FIN DE LA FUNCIÓN