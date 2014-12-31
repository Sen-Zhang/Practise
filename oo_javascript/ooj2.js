// Classical Model

function Answer(value) {
	this._val = value;
};

Answer.prototype.get = function() {
	return this._val;
}

var goodAnswer = new Answer(43);
goodAnswer.get() // -> 43

var badAnswer = new Answer(3.12);
badAnswer.get() // -> 3.12

// inheritance
function FirmAnswer (value) {
	Answer.call(this, value);
};

FirmAnswer.prototype = Object.create(Answer.prototype);
FirmAnswer.prototype.constructor = FirmAnswer;
FirmAnswer.prototype.get = function() {
	return Answer.prototype.get.call(this) + '!!';
}

var goodFirmAnswer = new FirmAnswer(7);
goodFirmAnswer.get() // -> '7!!'

var badFirmAnswer = new FirmAnswer(3);
badFirmAnswer.get() // -> '3!!'
