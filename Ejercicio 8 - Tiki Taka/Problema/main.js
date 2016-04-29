//Escribe aquí tú código
var numventa= parseInt(prompt('ingrese numero de venta'))
var sumaventa =0
var sumaventa2 =0
var sumaventa3 =0
var cantidadtotal =0
var cantidadtotal2 =0
var cantidadtotal3 =0
for (var i =1; i <=numventa; i++) {
	var montoventa=parseInt(prompt('ingrese monto por venta '+i))
	if (montoventa<=500) {
		cantidadtotal+=1
		sumaventa+=montoventa
		}
	else if(500<montoventa && montoventa<=1000){
		cantidadtotal2+=1
		sumaventa2+=montoventa	
	}
	else {
		cantidadtotal3+=1
		sumaventa3+=montoventa
	}
}
alert('La cantidad total de ventas menores a 500 es '+cantidadtotal +', La cantidad vendida suma '+sumaventa+'\n'+
	'La cantidad total de ventas mayor a 500 y menor o igual que 1000 es '+cantidadtotal2 +', La cantidad vendida suma '+sumaventa2+'\n'+
	'La cantidad total de ventas mayor a 1000 es '+cantidadtotal3 +', La cantidad vendida suma '+sumaventa3)