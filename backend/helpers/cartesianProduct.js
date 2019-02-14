// Credits https://eddmann.com/posts/cartesian-product-in-javascript/

const flatten = arr => [].concat(...arr);
const product = (...sets) => sets.reduce((acc, set) => flatten(acc.map(x => set.map(y => [...x, y]))), [[]]);

module.exports = { product };
