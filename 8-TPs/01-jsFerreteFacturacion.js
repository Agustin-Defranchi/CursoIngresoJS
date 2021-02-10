/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	let producto1; 
	let producto2;
	let producto3; 
	producto1 = parseFloat (document.getElementById("txtIdPrecioUno").value);
	producto2 = parseFloat (document.getElementById("txtIdPrecioDos").value);
	producto3 = parseFloat (document.getElementById("txtIdPrecioTres").value);
	let precioT = producto1 + producto2 + producto3;
	alert("el precio total es: " + precioT );

}
function Promedio () 
{
	let producto1; 
	let producto2;
	let producto3; 

	producto1 = parseFloat (document.getElementById("txtIdPrecioUno").value);
	producto2 = parseFloat (document.getElementById("txtIdPrecioDos").value);
	producto3 = parseFloat (document.getElementById("txtIdPrecioTres").value);

	let promedio = (producto1 + producto2 + producto3) / 3;
	alert("el promedio es: "+promedio);

	
}
function PrecioFinal () 
{
	let producto1; 
	let producto2;
	let producto3; 
	producto1 = parseFloat (document.getElementById("txtIdPrecioUno").value);
	producto2 = parseFloat (document.getElementById("txtIdPrecioDos").value);
	producto3 = parseFloat (document.getElementById("txtIdPrecioTres").value);
	let precioF = (producto1+producto2+producto3)*121/100;
	alert("el precio final es: "+precioF);
}