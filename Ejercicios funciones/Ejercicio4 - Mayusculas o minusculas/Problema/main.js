// Escribe aquí tu codigo Javascript
function mayusMin(){
	var mensaje=prompt('Ingresa una oracion, ya sea en mayusculas o minusculas: ')
	var mostrar=mensaje.toString()
	if (mostrar==mensaje.toUpperCase()) {
	alert('La oracion: '+mostrar+' esta escrita en mayuscula')
	}else if(mostrar==mensaje.toLowerCase()){
		alert('La oracion: '+mostrar+' esta escrita en minuscula')
		}else{
			alert('La oracion: '+mostrar+' esta escrita en mayuscula y minuscula')
			};
}
mayusMin()