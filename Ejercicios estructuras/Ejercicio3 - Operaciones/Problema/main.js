// Escribe aquí tu codigo Javascript
var numero1=parseInt(prompt('ingresa el primer numero: '));
var numero2=parseInt(prompt('ingresa el segundo numero: '));
if(numero1>numero2){
	var suma = numero1+numero2;
	var resta = numero1-numero2;
	alert('La adicion de ambos numeros es '+suma+'\n'+'La sustracion de ambos numeros es '+resta)
}
else if(numero1==numero2){
	alert('Los numeros son iguales')
}
else{
	var multi=numero1*numero2;
	var div=numero2/numero1;
	alert('La multiplicacion es '+multi+'\n'+'y su division sera '+div)
}