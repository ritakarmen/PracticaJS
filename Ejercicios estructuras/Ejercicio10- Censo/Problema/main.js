// Escribe aquí tu codigo Javascript
var total=1;
var totalfeminas=0;
var totalmasculinos=0;
var masculinos=0;
while(mensaje!=0){
var mensaje =prompt('Si tiene datos para agregar presione "1"'+'\n'+'Si no tiene datos para agregar presione "0" ')
if(mensaje==1){
	var rayita= '============================'
	var dni=prompt('Ingrese el numero de su DNI: ')
	var edad=parseInt(prompt('Ingrese su edad: '))
	var sexo=prompt('Ingrese si pertenece al sexo "Femenino" o si pertenece al sexo "Masculino": ')
	}
	if (mensaje=='1') {
	total=total+1
	}
	if (sexo=='Femenino') {
	totalfeminas=totalfeminas+1
	}
	if (sexo=='Masculino') {
	totalmasculinos=totalmasculinos+1
	}
	if (edad>=16&&edad<=65) {
	masculinos=masculinos+1
	}
	document.write(rayita+'<br>'+'N° de DNI: '+dni+'<br>')
	document.write('Edad: '+edad+'<br>')
	document.write('Sexo: '+sexo+'<br>')
}
document.write(rayita+'<br>'+'Hay un total de '+total+' personas Censadas'+'<br>')
document.write('Hay un total de '+totalfeminas+' damas Censadas'+'<br>')
document.write('Hay un total de '+totalmasculinos+' caballeros Censados'+'<br>')
document.write('De los cuales hay '+masculinos+' caballeros entre las edades de 16 hasta 65 años'+'<br>')
// switch(sexo){
// 	case 'F':
// 		document.write('Sexo : Femenino');
// 	break;
// 	case 'M':
// 		document.write('Sexo : masculino');
// 	break;
// }
