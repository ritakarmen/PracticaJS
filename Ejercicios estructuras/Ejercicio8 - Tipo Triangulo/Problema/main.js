// Escribe aquí tu codigo Javascript
var mensaje = [parseInt(prompt('ingrese medida1: ')),parseInt(prompt('ingrese medida2: ')),parseInt(prompt('ingrese medida3: '))]
if ((mensaje[0]+mensaje[1])>mensaje[2]>(mensaje[0]-mensaje[1])&&(mensaje[1]+mensaje[2])>mensaje[0]>(mensaje[1]-mensaje[2])&&(mensaje[0]+mensaje[2])>mensaje[1]>(mensaje[0]-mensaje[2])&&(mensaje[1]+mensaje[0])>mensaje[2]>(mensaje[1]-mensaje[0])&&(mensaje[2]+mensaje[1])>mensaje[0]>(mensaje[2]-mensaje[1])&&(mensaje[2]+mensaje[0])>mensaje[1]>(mensaje[2]-mensaje[0])) {
	alert('El triangulo existe')
	if(mensaje[0]==mensaje[1] && mensaje[2]==mensaje[1]){
				alert('Es un triangulo Equilatero')
			}else if (mensaje[0]==mensaje[1]||mensaje[2]==mensaje[1]||mensaje[0]==mensaje[2]  ){
				alert('Es un triangulo Isosceles')
			}else{
				alert('Es un triangulo Escaleno')
			}
}else{
	alert('El triangulo NO existe')
}