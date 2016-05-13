$(document).ready(function(){
	var player =1;
	$('.caja').on('click',function(event){

		var cajaSelected = $(this);
		if (cajaSelected.hasClass('fa fa-times')||cajaSelected.hasClass('fa fa-circle-o')) {
			alert('Este cuadro ya ha sido seleccionado, seleccione otro. ')
		}else{
			if(player === 1){
				cajaSelected.addClass('fa fa-times');
				if (checkIfPlayerWon('fa fa-times')) {
					alert('GANOOO el jugador '+player);
				}else{
				player = 2;
				}
			}else{
				cajaSelected.addClass('fa fa-circle-o');
				if (checkIfPlayerWon('fa fa-circle-o')) {
					alert('GANOOO el jugador '+player);
				}else{
				player = 1;
				}
			}
		}
	})
	function checkIfPlayerWon(symbol){
		if ($('.cj1').hasClass(symbol)&& $('.cj2').hasClass(symbol)&& $('.cj3').hasClass(symbol)) {
			return true;
		}else if ($('.cj4').hasClass(symbol)&& $('.cj5').hasClass(symbol)&& $('.cj6').hasClass(symbol)) {
			return true;
		}else if ($('.cj7').hasClass(symbol)&& $('.cj8').hasClass(symbol)&& $('.cj9').hasClass(symbol)) {
			return true;
		}else if ($('.cj1').hasClass(symbol)&& $('.cj4').hasClass(symbol)&& $('.cj7').hasClass(symbol)){
			return false;
		}else if ($('.cj2').hasClass(symbol)&& $('.cj5').hasClass(symbol)&& $('.cj8').hasClass(symbol)){
			return true;
		}else if ($('.cj3').hasClass(symbol)&& $('.cj6').hasClass(symbol)&& $('.cj9').hasClass(symbol)) {
			return true;
		}else if ($('.cj3').hasClass(symbol)&& $('.cj5').hasClass(symbol)&& $('.cj7').hasClass(symbol)) {
			return true
		}else if ($('.cj1').hasClass(symbol)&& $('.cj5').hasClass(symbol)&& $('.cj9').hasClass(symbol)) {
			return true
		}
	}
})