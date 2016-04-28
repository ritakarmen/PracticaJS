//Escribe aquí tú código
var numero=parseInt(prompt("Sucesión de Fibonacci \n Introduzca la cantidad de números a generar"));
var cadena=""
for(var n=0;n<numero;n++){
	var resultado=0
	
	resultado=Fibonacci(n)
	cadena+=resultado.toString()+" "
	// console.log("La sucesión de Fibonacci es \n"+Fibonacci(n));
}
alert("["+cadena+"]")
function Fibonacci(i){
	if(i<2){
		return i
	}
	else{
		return Fibonacci(i-1) + Fibonacci(i-2);
	}
}