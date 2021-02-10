function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	let indice = document.getElementById("estadoCivil").value;// value es para seleccionar desde el valor directamente
															  // selectedIndex para seleccionar desde el orden de la lista 
	/*if(edad < 18 && indice != 0)
	{

	}
	else
	{*/
		if(edad >=18 && indice == "Soltero")
		{
			alert("El usuario es soltero y no es menor");
		}
//	} 	el if de arriba es totalmente innecesario
	


}//FIN DE LA FUNCIÓN