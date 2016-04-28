//Escribe aquí tú código
// var numventa= parseInt(prompt('ingrese numero de venta'))
// var suma =0;
// var sumaventa=0
// for (var i =1; i <=numventa; i++) {
// 	var montoventa=parseInt(prompt('ingrese monto por venta '+i))
// 	sumaventa+=montoventa
// 	if (sumaventa>5) {
// 		suma= i-suma;
// 		}	
// }
// alert('La cantidad  es '+suma)
var n=parseInt(prompt("¿Cuántas ventas ha realizado durante el día?"))
var monto1=0
var monto2=0
var monto3=0
var precio1=0
var precio2=0
var precio3=0
for(var i=1;i<=n;i++){
	do{
		precio=parseFloat(prompt("El precio de la venta "+i))	
	}while(precio<=0)
	
	if(precio<=500){
		monto1+=1
		precio1+=precio
	}else if(500<precio && precio<=1000){
		monto2+=1
		precio2+=precio
	}else{
		monto3+=1
		precio3+=precio
	}
}
alert("Cantidad de ventas mayor a1000 son "+monto3+" Saldo total "+precio3+"\n"+
	   "Cantidad de ventas entre 500 y 1000 son "+monto2+" Saldo total "+precio2+"\n"+
	   "Cantidad de ventas menor a 500 inclusive son "+monto1+" Saldo total "+precio1)