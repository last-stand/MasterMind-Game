var sm = require("./smodule.js").smodule;
var assert = require("assert");
var test = {};

test["check random numbers are less than 9 and greater than 1"] = function(){
	assert.ok(sm.random()<9);
	assert.ok(!(sm.random()<1));
};

test["check number has five digits"] = function(){
	assert.deepEqual(5,sm.generateNumber().length);
	assert.notEqual(6,sm.generateNumber().length);
};

test["confirm_number gives 0 if none number on correct place"] = function(){
	assert.deepEqual(0,sm.confirmNumber('12345','87687'));
};

test["confirm_number counts the number on correct place"] = function(){
	assert.deepEqual(3,sm.confirmNumber('12345','12387'));
	assert.deepEqual(5,sm.confirmNumber('12345','12345'));
};

test["confirm_number counts the number on correct place when passing number"] = function(){
	assert.deepEqual(3,sm.confirmNumber(12345,12387));
	assert.deepEqual(5,sm.confirmNumber(12345,12345));
};

test["present_number counts the number of existing digits which are not on correct place"] = function(){
	assert.equal(0,sm.presentNumber(12867,12345));
	assert.equal(0,sm.presentNumber(12867,54354));
	assert.equal(1,sm.presentNumber(64444,41344));
	assert.equal(1,sm.presentNumber(41344,64444));
	assert.equal(2,sm.presentNumber(12867,76861));
	assert.equal(2,sm.presentNumber(76861,12867));
	assert.equal(0,sm.presentNumber(55555,55555));
	assert.equal(5,sm.presentNumber(12345,54231));
	assert.equal(5,sm.presentNumber(12332,33221));
	assert.equal(0,sm.presentNumber(13585,13385));
	assert.equal(0,sm.presentNumber(13385,13585));
	assert.equal(0,sm.presentNumber(12232,33333));
	assert.equal(0,sm.presentNumber(33333,12232));
};

test["present_number counts the number of existing digits which are not on correct place in string"] = function(){
	assert.deepEqual(0,sm.presentNumber("12345","12387"));
	assert.deepEqual(4,sm.presentNumber("54321","12345"));
	assert.deepEqual(1,sm.presentNumber("87658","12345"));
};

test["checkSpecial gives true if any special character is exist in input"] = function(){
	assert.ok(sm.validator("1@#23"));
	assert.ok(sm.validator("$1000"));
	assert.ok(sm.validator("12.36"));
	assert.ok(sm.validator("36/12"));
};

test["validator gives true if any digit is greater than 8 and less than 1"] = function(){
	assert.ok(sm.validator("12349"));
	assert.ok(sm.validator("10347"));
	assert.ok(!(sm.validator("12348")));
	assert.ok(!(sm.validator(12348)));
	assert.ok(sm.validator(10347));
};

test["validator gives true if any input length is not 5"] = function(){
	assert.ok(!(sm.validator("12342")));
	assert.ok(sm.validator("1234765"));
	assert.ok(!(sm.validator(18347)));
	assert.ok(sm.validator(1334723));
};

test["validator gives true if any special character in input"] = function(){
	assert.ok(!(sm.validator("12342")));
	assert.ok(sm.validator("12$45"));
	assert.ok(sm.validator("&&47^"));
	assert.ok(!(sm.validator(13347)));
	assert.ok(sm.validator("(334)"));
};

test["validator gives true if input is decimal or negative number"] = function(){
	assert.ok(sm.validator("23.42"));
	assert.ok(sm.validator("-1245"));
	assert.ok(sm.validator(-1285));
	assert.ok(sm.validator(13.34));
	assert.ok(sm.validator(-12.5));
	assert.ok(sm.validator("12*50"));
};

test["validator gives true if any alphabet is present in input"] = function(){
	assert.ok(sm.validator("23a42"));
	assert.ok(sm.validator("hello"));
	assert.ok(sm.validator("123ZZ"));
	assert.ok(!(sm.validator(12345)));
};

exports.test = test;