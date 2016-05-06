// Escribe aquí tu codigo Javascript
function cantidadDigitos(a){
	var conteoDigito;
	if (a>0) {// paara numero positivos
		conteoDigito='Numero de digitos es: '+a.toString().length;//convierte la cifra a string para poder ser contada
	}else{
		conteoDigito='El numero ingresado no es un numero entero positivo'
	}
	return conteoDigito;
}
var numero=parseInt(prompt('Introducir un numero entero positivo'))
alert(cantidadDigitos(numero))

/*CANTIDAD DE DIGITOS PARA TODO TIPO DE NUMERO
function cantidadDigitos(){
var variable=prompt('Ingrese un numero entero positivo')
var digitos=variable.length
alert(digitos)
}

cantidadDigitos()*/
