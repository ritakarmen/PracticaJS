// Escribe aquí tu codigo Javascript
function operaciones(){
var simbolo=prompt('Ingrese el simbolo de la operacion que desee realizar: ')
var numero1=parseInt(prompt('Ingrese primer numero a operar; '))
var numero2=parseInt(prompt('Ingrese segundo numero a operar; '))
var resultado=1;
if (simbolo=='x') {
		resultado=numero1*numero2
	}else if (simbolo=='/') {
		resultado=numero1/numero2
	}else if (simbolo=='+') {
		resultado=numero1+numero2
	}else if (simbolo=='-') {
		resultado=numero1-numero2
	};
alert(resultado)
}

operaciones()
