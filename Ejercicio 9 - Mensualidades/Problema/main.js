//Escribe aquí tú código
var opcion = ['Monto por mes','Suma total de pago']
var mensaje = 'Elija la opcion que desee ejecutar \n'
var opciones = opcion.length
for (var i =0; i < opciones; i++) {
	mensaje+=(i+1)+'. '+opcion[i]+'\n';
};
do{
	var seleccion=parseInt(prompt(mensaje))
}while(seleccion<=0 || seleccion>=3)
for (var i = seleccion-1; i <opciones; i++) {
	if (i == 0) {
		mensaje = parseInt(prompt('ingrese el numero de mes, para saber el monto a pagar '));
		var opera = Math.pow(2,mensaje-1)*10;
		alert('El monto a pagar por este mes sera '+opera)
	}
	else if (i == 1) {
		var resultadoFinal=0; 
		var a= 10;
		var mes=0;
		mensaje2 = parseInt(prompt('ingrese el numero de meses que realizo el pago '));
		for (var j= 1; j <=mensaje2; j++) {
			mes= mes+a;
			a=mes;
			resultadoFinal= resultadoFinal+mes;
		};
		
		alert("La suma total de pago es: "+resultadoFinal);
	}
}