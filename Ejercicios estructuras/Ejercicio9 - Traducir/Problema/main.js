// Escribe aquí tu codigo Javascript
var palabra;
palabra = prompt ('Por favor introduce una de estas palabras "casa, mesa, perro o gato" para traducir:');
if (palabra =="") { alert ('No has introducido ninguna palabra'); }
        switch (palabra) {
            case 'casa': 
            	alert ("house"); 
            break;
            case 'mesa':
            	alert ("table"); 
            break;
            case 'perro': 
            	alert ("dog"); 
            break;
            case 'gato': 
            	alert ("cat"); 
            break;
            default: alert ("Solo puedo traducir las palabras indicadas"); 
            break;
        }