function mostrar()
{
	//tomo la edad  
	let edad = document.getElementById("txtIdEdad").value;
	let indice = document.getElementById("estadoCivil").value;//llamo a la lista del select deseado
	
	if(edad < 18 && indice != 0)//"Soltero" igual que en el value
	{
		alert("El usuario es demasiado chico para no estar soltero");
	}
	


}//FIN DE LA FUNCIÓN