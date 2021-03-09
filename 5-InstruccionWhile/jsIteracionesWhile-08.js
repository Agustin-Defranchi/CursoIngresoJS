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
	let flag;
	//let contadorN;
	flag =0;
	numerosP =0;
	numerosN =1;
	//contadorN = 0;

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
			//contadorN ++;
			flag = 1
		}
		respuesta = prompt("desea seguir ingresando numeros?");
	}while(respuesta == "s");

	//if(contadorN == 0) //agregado del profe
	//{
	//	numerosN = 0;
	//	}
	if(flag == 0)
	{
		numerosN = 0;
	}

	document.getElementById("txtIdSuma").value = numerosP;
	document.getElementById("txtIdProducto").value = numerosN;

}//FIN DE LA FUNCIÓN