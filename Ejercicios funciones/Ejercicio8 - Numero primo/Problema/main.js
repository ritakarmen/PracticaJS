// Escribe aquí tu codigo Javascript
function primo(){
	var numero=parseInt(prompt('Ingrese un numero que desee saber si es primo o no'))
	if (numero == 1 || numero==2) {
		alert('El numero '+numero+' es primo')
	}else{
		for (var i = 2; i < numero; i++) {
			if (numero%i==0) {
				alert('El numero '+numero+' NO es primo')
				break
			}else{
				alert('El numero '+numero+' es primo')
				break
			}
		};
	};
}


primo()