function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	let indice = document.getElementById("estadoCivil").selectedIndex;
	
	if(edad < 18 && indice != 0)
	{

	}
	else
	{
		if(edad >=18 && indice == 0)
		{
			alert("El usuario es soltero y no es menor");
		}
	}
	


}//FIN DE LA FUNCIÓN