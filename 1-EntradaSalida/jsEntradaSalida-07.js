/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let numero1 = document.getElementById("txtIdNumeroUno").value;
	let numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	let sumar = numero1 + numero2;
	alert("Resultado= " + sumar);	
}

function restar()
{
	let numero1 = document.getElementById("txtIdNumeroUno").value;
	let numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	let restar = numero1 - numero2;
	alert("Resultado= " + restar);
}

function multiplicar()
{ 
	let numero1 = document.getElementById("txtIdNumeroUno").value;
	let numero2 = document.getElementById("txtIdNumeroDos").value;

	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	let multiplicar = numero1 * numero2;
	alert("Resultado= " + multiplicar);
}

function dividir()
{
	let numero1 = document.getElementById("txtIdNumeroUno").value;
	let numero2 = document.getElementById("txtIdNumeroDos").value;
	
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	let dividir = numero1 / numero2;
	alert("Resultado= " + dividir);

}

