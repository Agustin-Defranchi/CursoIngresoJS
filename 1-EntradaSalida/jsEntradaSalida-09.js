/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = txtIdSueldo.value;
	sueldo = parseInt(sueldo);
	txtIdResultado.value = sueldo * 1.10; 
}
