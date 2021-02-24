/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let Intentos ;
let max =0;
let min =100
let num;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random()*(max-min+1))+min;//Genero el número RANDOM entre 1 y 100
	alert("el numero secreto es: "+numeroSecreto);
	Intentos = 0;

}


function verificar()
{
	/*while(num != numeroSecreto)
	{
		num = parseInt(document.getElementById("txtIdNumero").value);
		if(num < numeroSecreto)
		{
			alert("te falto");
			break;
		}
		else if(num > numeroSecreto)
		{
			alert("te pasaste");
			break;
		}
		Intentos ++;
		
	}
	if(num == numeroSecreto)
	{
	alert ("Usted es un ganador!!! y en tan solo " + Intentos + " Intentos");
	document.getElementById("txtIdIntentos").value = Intentos;
	}*/
	num = parseInt(document.getElementById("txtIdNumero").value);
	Intentos ++;
	if(num < numeroSecreto)
	{
		alert("te falto");
	
	}
	else if(num > numeroSecreto)
	{
		alert("te pasaste");
	}
	else if (num == numeroSecreto)
	{
	alert ("Usted es un ganador!!! y en tan solo " + Intentos + " Intentos");
	document.getElementById("txtIdIntentos").value = Intentos;
	
	}
}
