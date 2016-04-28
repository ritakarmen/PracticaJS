//Escribe aquí tú código
var numero=parseInt(prompt('ingrese el numero de personas'));
var sumaestatura=0
for(i=1; i<=numero;i++){
	var estatura=parseInt(prompt('ingrese la estatura de la persona '+i));
	sumaestatura=sumaestatura+estatura
	promedio=sumaestatura/numero//en este caso cumple por propiedad de suma de fracciones
}
	console.log(promedio)
