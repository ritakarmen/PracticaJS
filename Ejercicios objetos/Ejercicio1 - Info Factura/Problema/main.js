// Escribe aquí tu codigo Javascript
function factura(nombre, direccion, telefono, NIF){
	this.nombre=nombre;
	this.direccion=direccion;
	this.telefono=telefono;
	this.NIF=NIF;
} 

function lista(descripcion, precio, cantidad){
	this.descripcion=descripcion;
	this.precio=precio;
	this.cantidad=cantidad;
	this.informe=informeBasico;
}
function informeBasico(importeTotal, tipoIgv, formaPago){
	this.importeTotal=importeTotal;
	this.tipoIgv=tipoIgv;
	this.tipoPago=tipoPago;
}

function informeBasico(pago,igv,importeTotal){
	// var formaPago='credito'
	// var tipoIgv=0.03;
	// var importeTotal=0.03+this.precio;
	// return importeTotal;
	this.pago=pago;
	this.igv=igv;
	this.importeTotal=importeTotal;
}

var  empresa= new factura('SA Raul', 'Villa','333 333', "-----")
var cliente= new factura('Celia Buleje','Surco','222 222', '-----')

var chocolate= new lista('Chocolate',1.5, 12);
var caramelo= new lista('caramelo', 0.5, 20);

var informe1= new informeBasico('credito',0.2,'....')

document.write('Empresa: '+empresa.nombre+'<br>'+'Direccion: '+empresa.direccion+'<br>'+'Telefono: '+empresa.telefono+'<br>'+'NIF: '+empresa.NIF+'<br>'
	+'Nombre: '+cliente.nombre+'<br>'+'Direccion: '+cliente.direccion+'<br>'+'Telefono: '+cliente.telefono+'<br>'+'NIF: '+cliente.NIF+'<br>'
	+'Descripcion: '+chocolate.descripcion+'<br>'+'Precio: '+chocolate.precio+'<br>'+'Cantidad'+chocolate.cantidad+'<br>'
	+'Descripcion: '+caramelo.descripcion+'<br>'+'Precio: '+caramelo.precio+'<br>'+'Cantidad'+caramelo.cantidad+'<br>'
	+'Forma de pago: '+informe1.pago)