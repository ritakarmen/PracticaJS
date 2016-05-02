//Escribe aquí tú código
// function recaudo(){
// 	var c=parseInt(prompt("Ingresa el número de sucursales:"));
// 	var t=parseInt(prompt("Ingresa el número de tiendas en cada sucursal:"));
// 	var n=parseInt(prompt("Ingresa el número de empleados que trabajan en cada tienda:"));
// 	var vTienda=0;
// 	var vSucursal=0;
// 	for(i=1;i<=c;i++)
// 	for(j=1;j<=t;j++)
// 	for(k=1;k<=n;k++){
// 		var vEmpleado=parseInt(prompt("Ingresa la venta del empleado "+k+" de la tienda "+j+" y sucursal "+i));
// 		document.write("La venta del empleado "+k+" de la tienda "+j+" y sucursal "+i+" fue de s/."+vEmpleado+'<br>');
// 	}
// }

// recaudo();
var sucursal = parseInt(prompt('ingrese el numero de sucursales '))
var tienda = parseInt(prompt('ingrese el numero de tiendas '))
var empleado = parseInt(prompt('ingrese el numero de empleados '))
for (var i = 1; i <= sucursal; i++)
for (var j = 1; j <= tienda; j++)
for (var k = 1; k <= empleado; k++) {
	var venta = parseInt(prompt('ingrese la venta realizada por día '+ k +'de la tienda ' + j +' y sucursal '+i ))
	document.write("La venta del empleado "+k+" de la tienda "+j+" y sucursal "+i+" fue de s/."+venta+'<br>');
};