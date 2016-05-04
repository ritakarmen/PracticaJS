// Escribe aquí tu codigo Javascript
function par_impar(numero) {
  numero=parseInt(prompt('Ingrese el numero '))
  resultado = numero%2;

  if(resultado==0){
  	alert("El residuo es " + resultado+' por lo tanto es par');
	}else{
		alert("El residuo es " + resultado+' por lo tanto es impar');
	}
}
 
var resultado;
par_impar();
