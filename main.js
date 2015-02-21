var game = require("./mmodule.js").createGame;
var readline = require("readline");
var colors = require("colors");
var read = readline.createInterface(process.stdin, process.stdout);
var str='\x1B[32m'+"Enter Guess>"+'\x1B[33m';
read.setPrompt(str,12);
var startTime = new Date();
var time;

var startGame = function(){
	console.log(colors.cyan("\n\t\t***"),colors.red(" Decode 5 digit code made of digits between 1 to 8 within 12 attempts (eg:12345) "),colors.cyan("***\n\n"));
	//console.log(game.getNumber);
	read.prompt();
};
var loseGame = function(){
	console.log('________________________________________________________________________'.rainbow);
	console.log('\t\t\t You loss!!'.cyan," Code is ",colors.red(game.getNumber));
	time = game.timeTaken(startTime);
	console.log('\t\t\t\t',colors.magenta(time[0]+" : "+time[1]+" : "+time[2]));
	read.close();
	process.exit(0);
};
var winGame = function(){
	console.log('________________________________________________________________________'.rainbow);
	console.log('\t\t\t Code matched with '.cyan,colors.red(game.getNumber),' You win...'.cyan);
	time = game.timeTaken(startTime);
	console.log('\t\t\t',colors.magenta(time[0]+" : "+time[1]+" : "+time[2]));
	read.close();
	process.exit(0);
};

var currentStatus = function(){
	console.log(colors.greyBG("\t\tGuess\t\t[C , P]\t\tAttempt\t\t\t".black));
	console.log(colors.greyBG("\t\t-----\t\t-------\t\t-------\t\t\t".black));
	var attempt = 0;
	game.userGuess.forEach(function(guess,index){
	console.log(colors.blueBG("\t\t"+guess+"\t\t"+"["+game.prevResult[index][0]+" , "+game.prevResult[index][1]+"]"+"\t\t  "+(++attempt)+"    \t\t\t"));
	});
	console.log("\n");
};
var onGuess = function(ans){
	if(!game.validation(ans)){
		var check = game.checkNumber(ans);
		((check[0] == 5) && winGame()) || currentStatus();
		((game.attempt() >= 12) && (check[0] != 5)) && loseGame();
	}
	else{
		console.log("\t\t\tInvalid Input!!\t\t\t\t\t".redBG);
		console.log("\n");
	}
	read.prompt();
};


read.on('line',onGuess);
startGame();
