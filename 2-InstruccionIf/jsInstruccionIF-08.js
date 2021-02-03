function mostrar()
{
	//tomo la edad  
	let indice = estadoCivil.selectedIndex
	if(txtIdEdad.value < 18 && indice != 0)
	{

	}
	else
	{
		if(txtIdEdad.value >=18 && indice == 0)
		{
			alert("El usuario es soltero y no es menor")
		}
	}
	


}//FIN DE LA FUNCIÓN