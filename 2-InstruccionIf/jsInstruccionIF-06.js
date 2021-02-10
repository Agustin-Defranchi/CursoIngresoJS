function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	
	if(edad >= 18)
	{
		alert("El usuario es mayor de edad");
	}
	else
	{
		if(edad >=13 /*&& edad <=17*/)  //no hace falta por que ya se descartaron
		{							    //los numeros del 18 para arriba
			alert("El usuario es adolecente");
		}
		else
		{
			
			alert("El usuario es un niño");
				
		}
	}
	/*
	if(edad >= 18)
	{
		alert("El usuario es mayor de edad");
	}
	else if(edad >=13 )  
		{				
			alert("El usuario es adolecente");
		}
		else
		{
			
			alert("El usuario es un niño");
				
		}
	}*/





}//FIN DE LA FUNCIÓN