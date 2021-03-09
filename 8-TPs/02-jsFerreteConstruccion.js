/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/
	let largo;
	let ancho;
	let perimetro;
	let alambre;
	let cal;
	let cemento;

function Rectangulo () 
{
	



	largo = parseFloat(document.getElementById("txtIdLargo").value);
	ancho = parseFloat(document.getElementById("txtIdAncho").value);

	if(largo != ancho)
	{
		perimetro = parseFloat(largo*2+ancho*2);
		alambre = perimetro * 3;
		alert("la cantidad de alambre que se necesita es de: "+ alambre + "m de alambre");

	}
	else
	{
		alert("esto no es un rectangulo");
	}	
}

function Circulo () 
{
	let radio;
	let circunferencia;
	radio = parseFloat(document.getElementById("txtIdRadio").value);
	circunferencia = Math.PI * radio * radio;
	alambre = circunferencia * 3;
	alert("la cantidad de alambre es de: "+ alambre + "m de alambre");

}
function Materiales () 
{
	cal = 3;
	cemento = 2;
	if(ancho >largo)
	{
		cal *= ancho;
		cemento *= ancho;
	}
	else
	{
		cal *= largo;
		cemento *= largo;	
	}
	alert("la cantidad de cemento es: "+cemento+" y la cantidad de cal es de: "+ cal);
}
/*Enunciado:
2. Para el departamento de Construcción:
A. mostrar la cantidad de alambre a comprar si se ingresara el largo y 
el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.

B. mostrar la cantidad de alambre a comprar si se ingresara el radio de un terreno circular y se debe alambra con tres hilos de alambre.

C. Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, 
debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas del terreno rectangular.*/