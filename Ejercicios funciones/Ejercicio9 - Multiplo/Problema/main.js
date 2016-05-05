// Escribe aquí tu codigo Javascript
function multiplo(a,b){
	var numero=a;
	var numero2=b;
	var respuesta= numero%numero2
	if (respuesta==0) {
		// return true
		alert('siii')
	}else{
		// return false//multiplo(numero,multiplos)
		alert('noooo')
	}
}

// function multiploss(){
var numero=parseInt(prompt('Ingrese un numero que desee sus multiplos'))
var multiplos=[];
	for (var i = 1; i <=10; i++) {
		if (multiplo(i,numero)) {
			multiplos.push(i);
		};
	};
	alert(multiplos)
// }


// multiploss()

