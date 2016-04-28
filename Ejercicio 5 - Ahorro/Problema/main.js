//Escribe aquí tú código
var meses= ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"]
var mensaje='Seleccione el mes de ahorro \n' ;
var cantiMes= meses.length
for (var i = 0; i < cantiMes; i++) {
	mensaje+=(i+1)+'. '+meses[i]+'\n';
};
do{
var mes=parseInt(prompt(mensaje))
}while(mes<=0 || mes>=13)
// var mesResto = cantiMes-mes +1;
var ahorroTotal = 0;
//validar numero para evitar que sea cadena
for (var i = mes-1; i <cantiMes ;i++){
	mensaje = 'ingrese monto a ahorrar en el mes de ' + meses[i]

	var ahorro = parseFloat(prompt(mensaje))

	ahorroTotal+=ahorro 
}
alert('tu ahorro total es '+ahorroTotal)