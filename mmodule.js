var sm = require("./smodule.js").smodule;
var game = {};
var count = 0;
game.getNumber = sm.generateNumber();
game.userGuess = [];
game.prevResult = [];

game.attempt =function(){return ++count;};
game.timeTaken = function(startTime){
			var endTime = new Date();
			var millisec = (endTime - startTime);
			var sec = Math.floor(millisec/1000);
			var min = Math.floor(sec/60);
			sec = sec % 60;
			var hour = Math.floor(min/60);
			min = min % 60;	
			return [hour,min,sec];
};
game.checkNumber = function(userInput){
	var confirm = sm.confirmNumber(game.getNumber,userInput);
	var present = sm.presentNumber(game.getNumber,userInput);
	game.userGuess.push(userInput);
	game.prevResult.push([confirm,present]);
	return [confirm,present];
};
game.validation = function(userInput){
	return sm.validator(userInput);	
};
exports.createGame = game;