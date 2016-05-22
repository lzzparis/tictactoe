$(document).ready(function(){

	var xTurn = true;
	var playerX = Object.create(Player);
	playerX.name="X";
	var playerO = Object.create(Player);
	playerO.name="O";
	$(".col").click(function(){
		$(this).children(".blank").css("display","none");
		if(xTurn){
			$(this).children(".x").css("display","inline-block");
			takeTurn(playerX,this.id);
			xTurn=false;
		}
		else {
			$(this).children(".o").css("display","inline-block");
			takeTurn(playerO,this.id);
			xTurn=true;
		}
	});

});

var Player= {
	name:"",
	numTurns:0,
	scoreCard:[[0,0,0],[0,0,0],[0,0,0]],
	reset: function(){
		scoreCard = [[0,0,0],[0,0,0],[0,0,0]];
	}
};

var takeTurn =function(player,move){
	move=move.split("-");
	recordMove(player,move[0],move[1]);
	player.numTurns+=1;
	if(player.numTurns>=3){score(player,move[0],move[1])};
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
	alert(player.name+" wins!!");
}


