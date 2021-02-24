function mostrar()
{
	let acumulador;
	let numeroIngresado;
	let prom;
	let total = 0;
	acumulador=0;
/*

	n1 = prompt("Ingrese un numero");
	n2 = prompt("Ingrese un numero");
	n3 = prompt("Ingrese un numero");
	n4 = prompt("Ingrese un numero");
	n5 = prompt("Ingrese un numero");

	n1 = parseInt(n1);
	n2 = parseInt(n2);
	n3 = parseInt(n3);
	n4 = parseInt(n4);
	n5 = parseInt(n5);

	acumulador = n1 + n2 + n3 + n4 +n5;
	

	
	document.getElementById("txtIdSuma").value=acumulador;
	document.getElementById("txtIdPromedio").value=acumulador/5;

	prueba sin while

	*/
	while(acumulador < 5)
	{
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		total=total+numeroIngresado;
		acumulador ++
	}
	prom = total / 5;
	document.getElementById("txtIdSuma").value = total;
	document.getElementById("txtIdPromedio").value = prom;
}//FIN DE LA FUNCIÓN