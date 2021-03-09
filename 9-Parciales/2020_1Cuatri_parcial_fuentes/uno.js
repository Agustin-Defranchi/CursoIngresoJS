
function mostrar()
{
	let tipo;
	let precio;
	let cantidad;
	let fabricante;
	let cantbarbijo;
	let cantalcohol;
	let cantjabon;
	let precioMinAlcohol;
	let flagAlcohol;
	flagAlcohol = 0;


	for(let i = 0;i<5;i++)
	{
		tipo = prompt("ingrese el tipo de producto");
		while(tipo != "barbijo" && tipo != "alcohol" && tipo != "jabon")
		{
			tipo = prompt(" ingrese un tipo valido");
		}
		precio= parseInt(prompt("ingrese el precio"));
		while(precio < 100 || precio > 300 || isNaN(precio))
		{
			precio = parseInt(prompt("ingrese un precio valido"));
		}
		cantidad = parseInt(prompt("ingrese la cantidad de unidades"));
		while(cantidad <= 0 || cantidad > 1000 || isNaN(cantidad))
		{
			cantidad = parseInt(prompt("ingrese una cantidad dentro de los limites"));
		}
		fabricante = prompt("ingrese el fabricante");

		if(tipo=="alcohol")//primero pregunto por el tipo para evaluar las siguientescaracteristicas
		{
			if(flagAlcohol==0 || precio < precioMinAlcohol)
			{
				precioMinAlcohol=precio;
				flagAlcohol = 1;
			}
		}

		
	}
	alert("el mas barato de los alcholes es: " +precioMinAlcohol+ " la cantidad de unidades es: " +cantidad+ " el fabricante es: "+fabricante);
}
/*Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total

1- declaro variables (cantidad precio marca tipo fabricante, contbarbijo,cont jabones,cont alchol)

*/