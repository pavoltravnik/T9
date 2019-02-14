/* eslint-disable no-undef */

const { numberToT9 } = require('./phone');

describe('Phone number to T9', () => {
	it('23 Should return [[\'a\', \'b\', \'c\'], [\'d\', \'e\', \'f\']]', () => {
		expect(numberToT9(23)).toEqual(expect.arrayContaining([['a', 'b', 'c'], ['d', 'e', 'f']]));
	});
});
