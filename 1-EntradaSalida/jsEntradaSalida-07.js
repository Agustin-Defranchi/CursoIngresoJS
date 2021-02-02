/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	var sumar = numero1 + numero2;
	alert("Resultado= " + sumar);	
}

function restar()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	var restar = numero1 - numero2;
	alert("Resultado= " + restar);
}

function multiplicar()
{ 
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	var multiplicar = numero1 * numero2;
	alert("Resultado= " + multiplicar);
}

function dividir()
{
	var numero1 = txtIdNumeroUno.value;
	var numero2 = txtIdNumeroDos.value;
	numero1 = parseInt(numero1);
	numero2 = parseInt(numero2);
	var dividir = numero1 / numero2;
	alert("Resultado= " + dividir);

}

