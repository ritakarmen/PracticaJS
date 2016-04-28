//Escribe aquí tú código
// var horasTrabajo= parseInt(prompt('Ingrese horas trabajadas'))
// var sueldoHora= parseInt(prompt('Ingrese monto a ganar por horas trabajadas'))
// var sueldoTotal= horasTrabajo*sueldoHora
// alert('El sueldo a recibir sera '+ sueldoTotal)
var semana=["lunes","martes","miercoles","jueves","viernes","sabado"]
var sueldoHora= parseInt(prompt('Ingrese monto a ganar por horas trabajadas'))
var horasTotal=0
var sueldoTotal=0
for (var i = 0; i < semana.length; i++) {
	var horasTrabajo= parseInt(prompt('Ingrese horas trabajadas '+semana[i]))
	horasTotal+=horasTrabajo
	sueldoTotal= horasTotal*sueldoHora
};
	alert('sueldo total sera '+sueldoTotal)