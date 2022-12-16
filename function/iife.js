//TODO: Immediately Invoked Function Expression
{
  +function () {
    console.log('!');
	}();
	// '!'

	let result = function() {
		return 'Cool';
	}();
	console.log(result)

	let sum = 1 + function() {
		return 2;
	}();
	console.log(sum);

	(function() {
		console.log('Qu');
	})();

	(function() {
		console.log('Bo');
	}());

	(function() {
		return function() {
			console.log('IIFE');
		};
	})()()

	(function(a) {
		return function(b) {
			return a + b;
		}
	})(1)(2);

	(function (a) {
		return function (b) {
			return function (c) {
				return a + b + c;
			};
		};
	})(1)(2)(3);

	let result2 = (function() {
		return 'new';
	})();
	console.log(result2);

	let func = (function() {
		let num = 1;

		return function() {
			console.log(num);
			num++;
		}
	})();

	func(); // 1
	func(); // 2
	func(); // 3
	func(); // 4
	func(); // 5
}
