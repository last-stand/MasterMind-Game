var smod = {};
exports.smodule = smod;

smod.random = function(){
	return Math.floor(Math.random() * 8 + 1); 
};

smod.generateNumber = function(){
	var arr = [];
	var num = 1;
	var fillArray = function(){
		if(arr.length >= 5)
			return arr.join('');
		num = smod.random();
		arr.push(num);
		return fillArray();
	};
	return fillArray(arr);
}; 

smod.confirmNumber = function(number1,number2){
	var count = 0;
	number1.toString().split("").forEach(function(digit,index){
		if(digit == number2.toString()[index])
			++count;
	});
	return count;
};

smod.presentNumber = function(number1,number2){
	var arr1=number1.toString().split("");
	var arr2=number2.toString().split("");
	var code_arr = [];
	var user_arr = [];
	var count=0;
	arr1.forEach(function(digit,index){
		if(digit!=arr2[index]){
				code_arr.push(digit);
				user_arr.push(arr2[index]);
		}
	});
	code_arr.forEach(function(digit,index){
		if((user_arr.indexOf(digit)>=0) ){
			var i=user_arr.indexOf(digit);
			user_arr[i]=0;
			++count;
		}
	});
	return count;
};

smod.checkSpecial = function(userInput){
	var result = false;
	userInput.toString().split('').forEach(function(char){
		if(["+","-","*",".","/","!","@","#","%","$","&"].indexOf(char) >= 0)
			result = true;
	});
	return result;
};

smod.validator = function(userInput){
	var result = false;
	userInput = userInput.toString();
	userInput.split('').forEach(function(char){
		if(char>8 || char<1 || (userInput.length != 5) || (userInput*0 != 0) || smod.checkSpecial(char))	
			result = true;
		});
	return result;
};