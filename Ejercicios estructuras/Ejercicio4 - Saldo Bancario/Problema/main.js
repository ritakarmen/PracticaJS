// Escribe aquí tu codigo Javascript
var rayita='================================'
var cantidad=parseInt(prompt('Ingrese el numero de clientes '));
var suma=0;
for (var i = 1; i <= cantidad; i++)
{
var cuenta=parseInt(prompt('Ingrese el numero de cuenta '));
var cliente=prompt('Ingrese el nombre de cliente ');
var saldo=parseInt(prompt('Ingrese el saldo actual '));
suma=saldo+i;
if(saldo>0){
	var estado= 'Acreedor';
}
else{
	var estado= 'Deudor';
}
document.write(rayita+'<br>'+' Numero de cuenta corriente: '+cuenta+'<br>'+'Cliente: '+cliente+'<br>'+'Estado de cuenta: '+estado+'<br>'+rayita)
}
document.write('<br>'+'El total de saldo es: '+suma);