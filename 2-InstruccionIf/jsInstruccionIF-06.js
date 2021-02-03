function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	
	if(edad >= 18)
	{
		alert("El usuario es mayor de edad");
	}
	if(edad >=13 && txtIdEdad.value <=17)
	{
		alert("El usuario es adolecente");
	}
	if(edad < 13)
	{
		alert("El usuario es un niño");
	}




}//FIN DE LA FUNCIÓN