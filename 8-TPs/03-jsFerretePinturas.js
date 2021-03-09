/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let celcius;
	let temperatura;
	temperatura = document.getElementById("txtIdTemperatura").value;
	celcius = (temperatura -32) / 1.8;
	alert("la temperatura ingresada es de "+ temperatura+" Fahrenheit, esto equivale a " + celcius+" celcius");
}

function CentigradosFahrenheit () 
{
	let Fahrenheit;
	let temperatura;
	temperatura = document.getElementById("txtIdTemperatura").value;
	Fahrenheit = (temperatura * 1.8)+32;
	alert("la temperatura ingresada es de "+ temperatura+" celcius, esto equivale a " + Fahrenheit+" Fahrenheit");
	
}


/*Enunciado:
3. Para el departamento de Pinturas:

A. Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado
 (ej.: " 32 Fahrenheit son 0 centígrados").

B. Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0 centígrados son 32 Fahrenheit ").
Curso de ingreso UTN FRA
*/