/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	let min;
	let max;
	let numero;
	let seguir;
	let flag;
	
	flag = 0;
	do
	{
		numero = parseInt(prompt("ingrese un numero"))
		while(isNaN(numero))
		{
			numero = parseInt(prompt("eso no es un numero ingrese nuevamente"))
		}
		if(flag == 0)
		{
			max = numero;
			min = numero;
			flag = 1;			
		}
		else if (max < numero)
		{
			max = numero;
		}
		else if(min > numero)
		{
			min = numero;
		}
		seguir=prompt("desea seguir?");
	}while(seguir == "s");
	//otra forma mejor que la anterior
	/*	do   
	{
		numero = parseInt(prompt("ingrese un numero"))
		while(isNaN(numero))
		{
			numero = parseInt(prompt("eso no es un numero ingrese nuevamente"))
		}
		if(flag == 0 || numero < min)
		{
			min = numero;
						
		}
		if(flag == 0 || numero > max)
		{
			min = numero;
			//flag = 1;	
		}
		flag = 1;	

		
		seguir=prompt("desea seguir?");
	}while(seguir == "s");*/

	//otra forma mejor que la anterior

	/*	do
	{
		flag = 1
		numero = parseInt(prompt("ingrese un numero"))
		while(isNaN(numero))
		{
			numero = parseInt(prompt("eso no es un numero ingrese nuevamente"))
		}
		if(flag || numero < min)
		{
			min = numero;
						
		}
		if(flag || numero > max)
		{
			min = numero;
			flag = 0;	//aca la cambia solo cuando entre
		}
		//flag = 1;	//aca lo cambia todo el tiempo

		
		seguir=prompt("desea seguir?");
	}while(seguir == "s");*/

	document.getElementById("txtIdMaximo").value=max;
	document.getElementById("txtIdMinimo").value=min;
}//FIN DE LA FUNCIÓN
//declaroe variables
//creo el bucle hata que el usuario no quiera ingrear mas numeros
//pido numero
//si estoy en la primera iteracion guardar el valor en min y max
//despues de la primera iteracion comparo min y max y los guardo en caso de ser necesario
//pregunto si desea seguir poniendo numeros
//mostrar la informacion