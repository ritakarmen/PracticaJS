// Escribe aquí tu codigo Javascript - - DIFICIL ANOTACION PARA RECORADAR LO QUE INVESTIGUE E HICE 
function palindromo(oracion) {
	var resultado = "La oracion \""+oracion+"\" \n";
	var oracionfinal = oracion.toLowerCase();// convierte a minusculas la cadena
	var elimanaespacio = oracionfinal.split("");// Convierte la cadena en un array
	var oracionsinespacios = "";// Eliminar los espacios en blanco (Investiga la funcion "replace", dicen q con eso es corto :(  ))
	for(i in elimanaespacio) {
		if(elimanaespacio[i] != " ") {
			oracionsinespacios += elimanaespacio[i];
		}
	}  
	var letras = oracionsinespacios.split("");
	var letrasReves = oracionsinespacios.split("").reverse();// Si se utiliza la sentencia "break" es mas corto
	var iguales = true;
	for(i in letras) {
		if(letras[i] == letrasReves[i]) {
			}
			else {
				iguales = false;
			}
		}
		if(iguales) {
		resultado += " es un palíndromo";
		}
		else {
		resultado += " no es un palíndromo";
	}
	return resultado;
}
 
alert(palindromo(prompt('ingrese la oracion :')));
