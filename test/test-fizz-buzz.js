const fizzBuzz = require('../fizzBuzz');
const should = require('chai').should();

// Unit tests for fizzBuzzer.js
describe('Testing fizzBuzzer', function() {
	it('should return fizz-buzz for multiples of 15', function() {
		[15, 30, 45].forEach(input => {
			fizzBuzz(input).should.equal('FizzBuzz');
		});
	});

	it('should return buzz for multiples of 5', function() {
		[5,10,20].forEach(input => {
			fizzBuzz(input).should.equal('Buzz');
		});
	});

	it('should return fizz for multiples of 3', function() {
		[3,6,9].forEach(input => {
			fizzBuzz(input).should.equal('Fizz');
		});
	});

	it('should return itself if not multple of 3, 5, or 15', function() {
		[1,2,4].forEach(input => {
			fizzBuzz(input).should.equal(input);
		});
	});

	// use a closure to check for error handling
	it('should throw an error if input is not a number', function() {
		['string', '!@#', '123'].forEach(input => {
			(function() {
				fizzBuzz(input)
			}).should.throw(Error);
		});
	});
});