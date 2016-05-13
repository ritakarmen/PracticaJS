$(document).ready(function(){
	var player =1;
	$('.square').on('click',function(event){

		var squareSelected = $(this);
		if (squareSelected.hasClass('ex')||squareSelected.hasClass('oh')) {
			alert('Este cuadro ya ha sido seleccionado, seleccione otro. ')
		}else{
			if(player === 1){
				squareSelected.addClass('ex');
				player = 2;
			}else{
				squareSelected.addClass('oh');
				player = 1;
			}
		}
	})
	function checkIfPlayerWon(symbol){
		if ($('.sq1').hasClass(symbol)&& $('.sq2').hasClass(symbol)&& $('.sq3').hasClass(symbol)) {
			return true;
		}else if ($('.sq4').hasClass(symbol)&& $('.sq5').hasClass(symbol)&& $('.sq6').hasClass(symbol)) {
			return true;
		}else if ($('.sq7').hasClass(symbol)&& $('.sq8').hasClass(symbol)&& $('.sq9').hasClass(symbol)) {
			return true;
		}else{
			return false;
		}
	}
})