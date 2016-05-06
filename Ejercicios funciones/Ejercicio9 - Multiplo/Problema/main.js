// Escribe aquí tu codigo Javascript
function multiplos(a){
	var numero = "";
	for(var i=1; i<11;i++){
		numero +=  i*a + " ";
	}
	return numero;
}
var a = parseInt(prompt("Ingrese el numero a determinar sus multiplos:"));
alert('Los 10 primeros multiplos de: '+a+'\n'+ 'son '+multiplos(a))


// Multiplos de un  numero solo multiplos menores a 10
/*function esmultiplo(a,b){
	var numero=a;
	var numero2=b;
	var respuesta= numero%numero2
	if (respuesta==0) {
		return true

	}else{
		return false//multiplo(numero,multiplos)

	}
}

function multiploss(){
var numero=parseInt(prompt('Ingrese un numero que desee sus multiplos'))
var multiplos=[];
	for (var i = 1; i <=10; i++) {
		if (multiplo(i,numero)) {
			multiplos.push(i);
		};
	};
	alert(multiplos)
 }


 multiploss()*/

