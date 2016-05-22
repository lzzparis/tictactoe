$(document).ready(function(){

	var xTurn = true;
	//var xTurn = false;
	var playerX = Object.create(Player);
	$(".col").click(function(){
		if(xTurn){
			$(this).children(".x").css("display","inline-block");
			var testId= this.id;
			var move;
			move=testId.split("-");
			recordMove(playerX,move[0],move[1]);
			playerX.numTurns+=1;
			xTurn=false;
			if(playerX.numTurns==3){finish(playerX)};
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

var finish = function(player){
	console.log(player.scoreCard);
}


