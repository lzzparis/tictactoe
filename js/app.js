$(document).ready(function(){

	var xTurn = true;

	$(".col").click(function(){
		if(xTurn){
			$(this).children(".x").css("display","block");
		}
		else {
			$(this).children(".o").css("display","block");
		}
			$(this).children(".blank").css("display","none");
	});

});

