// Escribe aquí tu codigo Javascript
var mensaje =parseInt(prompt('Ingrese el numero que desee saber su factorial: '))
var factorial=1;
for (var i = 1; i <=mensaje; i++) {
	factorial*=i;
};
alert('El factorial sera: '+factorial)
