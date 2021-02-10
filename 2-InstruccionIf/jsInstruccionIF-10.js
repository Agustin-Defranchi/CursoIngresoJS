function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let nota;
	let min = 1;
	let max = 10;
	nota = Math.floor(Math.random()*(max-min+1))+min;

	if(nota <= 4)
	{
		alert(nota + "vamos, la proxima se puede");
	}
	else if (nota < 9) 
	{
		alert(nota+"aprobado");
	}
	else
	{
		alert(nota+"exelente");
	}


}//FIN DE LA FUNCIÓN