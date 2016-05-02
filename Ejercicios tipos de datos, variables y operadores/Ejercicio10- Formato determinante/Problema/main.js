// Escribe aquí tu codigo Javascript
var linea = '|';
var matriz =[parseInt(prompt('Ingrese a11: ')),parseInt(prompt('Ingrese a12: ')),parseInt(prompt('Ingrese a21: ')),parseInt(prompt('Ingrese a22: '))]
var determinante=matriz[0]*matriz[1]-matriz[2]*matriz[3];
alert('La determinante de \n '+'A= '+linea+'a11'+'  '+'a12'+linea+' \n'+'       '+linea+'a21'+'  '+'a22'+linea+'\n                     sera: '+determinante)



