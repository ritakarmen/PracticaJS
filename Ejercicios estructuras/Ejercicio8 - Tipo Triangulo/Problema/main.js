// Escribe aquí tu codigo Javascript
var mensaje = [parseInt(prompt('ingrese medida1: ')),parseInt(prompt('ingrese medida2: ')),parseInt(prompt('ingrese medida3: '))]
var triangulo1 = 2*(mensaje[0]+mensaje[1]+mensaje[2])>(mensaje[0]+mensaje[1]+mensaje[2]);
// var triangulo2 = mensaje[1]+mensaje[2]>mensaje[0];
// var triangulo3 = mensaje[2]+mensaje[0]>mensaje[1];
if (triangulo1=true) {
	alert('El triangulo existe')
}else{
	alert('El triangulo NO existe')
}