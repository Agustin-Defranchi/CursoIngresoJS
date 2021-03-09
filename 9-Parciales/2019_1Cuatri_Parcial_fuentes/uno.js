
function mostrar()
{
		let lado;
		let perimetro;

		lado = parseInt(prompt("ingrese el valor del lado"));
		while(isNaN(lado))
		{
			lado = parseInt(prompt("ingrese el valor correcto del lado"));
		}
		perimetro= lado*3;
		alert("el perimetro es "+perimetro);


}
//Enunciado:
//Al presionar el botón pedir números hasta que el usuario quiera, mostrar el número máximo y el número mínimo ingresado.