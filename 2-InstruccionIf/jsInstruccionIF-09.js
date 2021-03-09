function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let numero
	let min = 1;
	let max = 10;
    numero = Math.floor(Math.random()*(max-min+1))+min;
	alert(numero);
}//FIN DE LA FUNCIÓN