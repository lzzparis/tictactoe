$(document).ready(function(){

	var xTurn = true;
	//var xTurn = false;
	var playerX = Object.create(Player);
	$(".col").click(function(){
		if(xTurn){
			$(this).children(".x").css("display","inline-block");

			recordMove(playerX,0,0);
			recordMove(playerX,2,0);
			recordMove(playerX,1,1);
			recordMove(playerX,1,2);
			xTurn=false;
		}
		else {
			$(this).children(".o").css("display","inline-block");
			xTurn=true;
		}
			$(this).children(".blank").css("display","none");
	});

});

var Player= {
	numTurns:0,
	scoreCard:[[0,0,0],[0,0,0],[0,0,0]],
	reset: function(){
		scoreCard = [[0,0,0],[0,0,0],[0,0,0]];
	}
};

var recordMove = function(player,col,row){
	player.scoreCard[col][row]=1;
}


