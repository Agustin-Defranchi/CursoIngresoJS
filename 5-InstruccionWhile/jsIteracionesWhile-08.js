/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let sumar;
	let numerosP;
	let numerosN;
	let multiplicar;
	let respuesta;
	let numero;

	numerosP =0;
	numerosN =1;
	do
	{
		numero = parseInt(prompt("ingrese un numero"));
		while(isNaN(numero))//agregado del profesor
		{
			numero = ParseInt(prompt("el dato ingresado no es un numero, ingrese nuevamente"));
		}
		if(numero >= 0)
		{
			numerosP += numero;
		}
		else
		{
			numerosN *= numero;
		}
		respuesta = prompt("desea seguir ingresando numeros?");
	}while(respuesta == "s");

	document.getElementById("txtIdSuma").value = numerosP;
	document.getElementById("txtIdProducto").value = numerosN;

}//FIN DE LA FUNCIÓN