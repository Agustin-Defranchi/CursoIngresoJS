function mostrar()
{
	//tomo la edad  
	if(txtIdEdad.value >= 18)
	{
		alert("El usuario es mayor de edad");
	}
	if(txtIdEdad.value >=13 && txtIdEdad.value <=17)
	{
		alert("El usuario es adolecente");
	}
	if(txtIdEdad.value < 13)
	{
		alert("El usuario es un niño");
	}




}//FIN DE LA FUNCIÓN