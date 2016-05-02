// Escribe aquí tu codigo Javascript
// var numero= parseInt(prompt('ingrese un numero '))
// if (numero % 11 == 0){

// document.write("Es multiplo de 11");
// }
// else
// {
// document.write ("NO es múltiplo de 11");
// }

var multiplo='';
var suma=0;
for(i=11;i<3000;i=i+11)
{
multiplo=multiplo+i+' ';
suma=suma+i;
}
document.write('Los multiplos de 11 menores a 3000 son: <br> '+multiplo+'<br>'+'La Suma de los divisores de 11, es = '+suma);