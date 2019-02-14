/* eslint-disable no-undef */
const { product } = require('./cartesianProduct');

describe('Cartesian product output', () => {
	it('Should return correct Cartesian product', () => {
		expect(product(['a', 'b', 'c'], ['d', 'e', 'f']).sort()).toEqual([['a', 'd'], ['a', 'e'], ['a', 'f'], ['b', 'd'], ['b', 'e'],['b', 'f'], ['c', 'd'], ['c', 'e'], ['c', 'f']]);
	});
});
