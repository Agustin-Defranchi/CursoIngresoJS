/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"*/
function mostrar()
{
	let salir;
	let nombre;
	do
	{
		nombre= prompt("ingrese un nombre").toLowerCase();
		while(isNaN(nombre))
		{
			nombre = prompt("ingrese un nombre valido");
		}
		salir = prompt("desea salir?");
	}while(salir != "s");
}

