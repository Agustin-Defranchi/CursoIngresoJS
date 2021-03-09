function mostrar()
{

	let numero1;
	let numero2;
	let suma;
	let resta;

	numero1=parseInt(prompt("ingrese el numero 1"));
	numero2=parseInt(prompt("ingrese el numero 2"));

	if(numero1 == numero2 && numero1 != isNaN(numero1) && numero2 !=isNaN(numero2))
	{
		alert(numero1 + numero2);
	}
	else if(numero1 > numero2)
	{
		resta=numero1-numero2;
		if(resta > 10)
		{
			alert("el resultado es "+resta+" y supero el 10");
		}
		else
		{
			alert("la resta es "+resta);
		}
	}
	else
	{
		suma = numero1 + numero2;
		alert("la suma es "+suma);
	}
}
/*
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".
Curso de ingreso UTN FRA

*/