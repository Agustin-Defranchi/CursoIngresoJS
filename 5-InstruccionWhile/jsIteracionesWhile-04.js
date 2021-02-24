/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let i = 0;
	let numero;
	numero = parseInt(prompt("ingrese un número entre 0 y 9."));
	while(numero <0 || numero >9||isNaN(numero))
	{
		numero = parseInt(prompt("Numero incorrecto, ingrese un número entre 0 y 9."));
	}
	document.getElementById("txtIdNumero").value = numero;
	if(numero >0 || numero <9)
	{
	document.getElementById("txtIdNumero").value = numero;
	}
}//FIN DE LA FUNCIÓN