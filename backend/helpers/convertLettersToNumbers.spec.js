/* eslint-disable no-undef */

const { mapLetterToNumber, wordToNumbers } = require('./convertLettersToNumbers');


describe('Letter to number conversion', () => {
	it(' "a" should return 2', () => {
		expect(mapLetterToNumber('a')).toEqual(2);
	});
	it(' "N" should return 6', () => {
		expect(mapLetterToNumber('N')).toEqual(6);
	});
	it(' "q" should return 7', () => {
		expect(mapLetterToNumber('q')).toEqual(7);
	});
	it(' "X" should return 9', () => {
		expect(mapLetterToNumber('X')).toEqual(9);
	});
	it(' Space should return 0', () => {
		expect(mapLetterToNumber(' ')).toEqual(0);
	});
	it(' ů should return 0', () => {
		expect(mapLetterToNumber('ů')).toEqual(0);
	});
});


describe('wordToNumbers', () => {
	it(' "alelujah" should return "25358524"', () => {
		expect(wordToNumbers('alelujah')).toEqual('25358524');
	});
});
