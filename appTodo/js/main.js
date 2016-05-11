function getInputValue(){
	var inputBox = document.getElementById("inputBox");
	return inputBox.value;
}
function mensaje(){
	var inputBoxValue = getInputValue();
	if (inputBoxValue !== "") {
		doMensaje(inputBoxValue);
		clean();
	}
}
function doMensaje(mensajeText){
	var mensajes = document.getElementById("mensajes");
	//Crear el elemento
	var elemento = document.createElement("div");
	elemento.className = "mensaje";
	elemento.innerHTML = '<input id="tachado" class="checked" type="checkbox" value="checkbox"  onclick="tachar()">'+mensajeText+'<button id=btn> Eliminar </button>';
	
	//Agregar elementos a tweets
	mensajes.appendChild(elemento);
	var ex = mensajes.lastChild;
	alert(ex.innerHTML);
}
function clean(){
	var inputBox = document.getElementById("inputBox");
	inputBox.value = "";
	inputBox.focus();
}
function tachar(){
	tachado=document.getElementById("tachado").checked; //Checked: para que funcione la casilla de verificación como true o false.
	if(tachado==true){
		document.getElementById("mensaje").style.textDecoration="line-through";
	}
}