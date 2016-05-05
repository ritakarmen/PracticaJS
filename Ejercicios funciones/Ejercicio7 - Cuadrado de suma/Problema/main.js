// Escribe aquí tu codigo Javascript
//funcion elevar a la potencia que desees la suma de dos numeros
/*function potencia(){
var a=parseInt(prompt('Ingrese el primer numero'));
var b=parseInt(prompt('Ingrese el segundo numero'));
var c=parseInt(prompt('Ingrese el exponente'));
var suma=a+b;
var potenciar=Math.pow(suma,c)
alert('El resultado de la adicion '+a+'+'+b+' es : '+suma+'\n'+'Y la potencia al elevarlo a '+c+' es '+potenciar)

}
potencia()*/
function suma(){
	var a=parseInt(prompt('Ingrese el primer numero a sumar'));
	var b=parseInt(prompt('Ingrese el segundo numero a sumar'));
	var sumando=a+b;
	alert('La adicion es '+sumando)
	return sumando
}
function cuadrado(a){
	var base=a;
	var exponente=2;
	var potencia=Math.pow(base,exponente)
	alert('Y su potencia al elevarlo al cuadrado es: '+potencia)
}
cuadrado(suma())