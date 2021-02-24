/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo;
	sexo = prompt("ingrese el sexo");
	while(sexo!="f" && sexo !="m")
	{
		sexo = prompt("ingrese un sexo correcto");

	}
	document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN
/*
1-declaro variables
2-crear un bucle
3-pedir dato
4-mostrar dato
*/