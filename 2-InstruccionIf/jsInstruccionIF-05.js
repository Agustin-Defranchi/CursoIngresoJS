function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	
	if(edad < 13 || edad > 17)
	{
		alert("El usuario es No es adolecente");
	}

}//FIN DE LA FUNCIÓN