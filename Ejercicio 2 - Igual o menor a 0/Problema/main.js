//Escribe aquí tú código
var cantidad=parseInt(prompt('ingrese la cantidad de numeros a ingresar'));
var suma =0
var sumanegativa=0
for (var i =1; i <=cantidad; i++) {
	var numero=parseInt(prompt('ingrese el numero '+i))
	if (numero>0) { 
		   suma= i;
	}
	else{
		sumanegativa= i-suma;
	}
}
alert('La cantidad de numeros mayores de cero es '+suma+'\n La cantidad de numeros menores o igual a cero es '+sumanegativa)