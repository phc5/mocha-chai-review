module.exports = function(num) {
	if (typeof num !== 'number') {
		throw Error('`num` must be a number');
	}
	if (num % 15 === 0) {
		return 'FizzBuzz';
	}
	if (num % 5 === 0) {
		return 'Buzz';
	}
	if (num % 3 === 0) {
		return 'Fizz';
	}
	else {
		return num;
	}
}