/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let numero1 = txtIdNumeroUno.value;
	let numero2 = txtIdNumeroDos.value;
	numero1 = parseInt (numero1);
	numero2 = parseInt (numero2);
	let sumar = numero1+numero2;
	alert("resultado= " + sumar);
}

