// Escribe aquí tu codigo Javascript
var listaA = [parseInt(prompt('Ingrese valor1 de listaA: ')),parseInt(prompt('Ingrese valor2 de listaA: ')),parseInt(prompt('Ingrese valor3 de listaA: '))];
var listaB = [parseInt(prompt('Ingrese valor1 de listaB: ')),parseInt(prompt('Ingrese valor2 de listaB: ')),parseInt(prompt('Ingrese valor3 de listaB: '))];
var sumaA = listaA[0]+listaA[1]+listaA[2];
var sumaB = listaB[0]+listaB[1]+listaB[2];
if (sumaA>sumaB) {
	alert('listaA es mayor')
};
if (sumaB>sumaA) {
	alert('listaB es mayor')
}
else{
	alert('listaA y listaB son iguales')
}