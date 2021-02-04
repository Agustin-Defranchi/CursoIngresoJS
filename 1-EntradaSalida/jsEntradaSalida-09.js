/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);
	document.getElementById("txtIdResultado").value = sueldo * 1.10; 
	
/*	let sueldo = document.getElementById("txtIdSueldo").value;
	sueldo = parseFloat(sueldo);
	let resultado = sueldo + (sueldo * 10 / 100);
	
	document.getElementById("txtIdResultado").value = resultado;*/
}
//obtengo el valor del sueldo
//transformo el sueldo a entero
//obtengo el sueldo aumentado
//muestro el sueldo aumentado el el cuadro de texto
