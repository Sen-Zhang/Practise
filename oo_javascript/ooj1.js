//Prototypal Model

var AnswerPrototype = {
	constructor: function (value) {
		this._val = value;
	},
	get: function() {
		return this._val;
	}
};

var lifeAnswer = Object.create(AnswerPrototype);
lifeAnswer.constructor(42);
lifeAnswer.get(); // -> 42

var dessertAnswer = Object.create(AnswerPrototype);
dessertAnswer.constructor(3.14);
dessertAnswer.get(); // -> 3.14

// inheritance 
var FirmAnswerPrototype = Object.create(AnswerPrototype);
FirmAnswerPrototype.get = function () {
	return AnswerPrototype.get.call(this) + '!!';
}

var lifeFirmAnswer = Object.create(FirmAnswerPrototype);
lifeFirmAnswer.constructor(7);
lifeFirmAnswer.get(); // -> '7!!'

var dessertFirmAnswer = Object.create(FirmAnswerPrototype);
dessertFirmAnswer.constructor(3);
dessertFirmAnswer.get(); // -> '3!!'
