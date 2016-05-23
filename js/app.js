$(document).ready(function(){

	var xTurn = true;
	var playerX = Player("X");
	var xTakeTurn =createTakeTurn(playerX);
	var playerO = Player("O");
	var oTakeTurn =createTakeTurn(playerO);
	var won = false;
	$(".col").click(function(){
		if(playerX.won || playerO.won){}
		else{ 	
			$(this).children(".blank").css("display","none");
			if(xTurn){
				$(this).children(".x").css("display","inline-block");
				xTakeTurn(this.id);
				xTurn=false;
			}
			else {
				$(this).children(".o").css("display","inline-block");
				oTakeTurn(this.id);
				xTurn=true;
			}
		}
	});
	$("#new-game").click(function(){
		playerX.reset();
		playerO.reset();
		$(".col").children(".blank").css("display","inline-block");
		$(".col").children(".x").css("display","none");
		$(".col").children(".o").css("display","none");
		$("#results").text("");
		$("#new-game").css("display","none");
	});

});

function Player(playerName)	{
	return {
		name:playerName,
		numTurns:0,
		won:false,
		scoreCard:[[0,0,0],[0,0,0],[0,0,0]],
		reset: function(){
			this.numTurns=0;
			this.won = false;
			this.scoreCard = [[0,0,0],[0,0,0],[0,0,0]];
		}
	}
};


	
var createTakeTurn = function(player){
	return function(move){
		move=move.split("-");
		recordMove(player,move[0],move[1]);
		player.numTurns+=1;
		if(player.numTurns>=3){score(player,move[0],move[1])};
	}
}

var recordMove = function(player,col,row){
	player.scoreCard[col][row]=1;
}

var score = function(player,col,row){
	col = parseInt(col);
	row = parseInt(row);
	//check the vertical
	if(player.scoreCard[col][0]&&player.scoreCard[col][1]&&player.scoreCard[col][2]){
		win(player);
	}
	//check the horizontal
	else if (player.scoreCard[0][row]&&player.scoreCard[1][row]&&player.scoreCard[2][row]){
		win(player);
	}
	//check the diagonal
	else if(col==row){
		if(player.scoreCard[0][0]&&player.scoreCard[1][1]&&player.scoreCard[2][2]){
			win(player);
		}
	}
	else if((col+row)==2){
		if(player.scoreCard[2][0]&&player.scoreCard[1][1]&&player.scoreCard[0][2]){
			win(player);
		}
	}
}


var win = function(player){
	$("#results").text(player.name+" wins!!");
	player.won=true;
	$("#new-game").css("display","inline-block");
	$(".col:hover").css("background-color","#998395");
}



