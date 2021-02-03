function mostrar()
{
	//tomo la edad  

	let indice = estadoCivil.selectedIndex;//llamo a la lista del select deseado
	if(txtIdEdad.value < 18 && indice != 0)
	{
		alert("El usuario es demasiado chico para no estar soltero");
	}
	


}//FIN DE LA FUNCIÓN