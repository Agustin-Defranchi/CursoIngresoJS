function mostrar()
{
	let persona1;
	let peso1;
	let persona2;
	let peso2;
	let pesoTotal;
	let promPeso;

	persona1=prompt("ingrese el nombre de la persona1");
	peso1=parseInt(prompt("ingrese el peso de la persona1"));
	while(isNaN(peso1))
	{
		peso1=parseInt(prompt("ingrese un peso valido de la persona1"));
	}

	persona2=prompt("ingrese el noombre de la persona2");
	peso2=parseInt(prompt("ingrese el peso de la persona2"));
	while(isNaN(peso2))
	{
		peso2=parseInt(prompt("ingrese un peso valido de la persona2"));
	}
	pesoTotal = peso1+peso2;
	promPeso = pesoTotal / 2;

	alert("ustedes se llaman "+persona1+" y "+persona2+" y pesan" + peso1 + " y "+peso2+" kilos, que sumados son "+pesoTotal+" y el promedio de peso es "+promPeso);
}
/*
Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje
 " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".

*/