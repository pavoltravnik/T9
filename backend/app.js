const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const { numberToT9 } = require('./helpers/phone');
const { wordToNumbers } = require('./helpers/convertLettersToNumbers');

const app = express();
const port = process.env.PORT || 3000;

const t9Router = express.Router();

const content = fs.readFileSync('./dictionary/index.dic').toString('utf-8').split('\n');
const dictionary = content.map((line) => {
	const trimmedLine = line.substring(0, line.indexOf('/'));
	return { text: trimmedLine, nums: wordToNumbers(trimmedLine) };
});

const flatten = arr => [].concat(...arr);
const product = (...sets) => sets.reduce((acc, set) => flatten(acc.map(x => set.map(y => [...x, y]))), [[]]);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

t9Router.route('/cartesian')
	.post((req, res) => {
		const { number } = req.body;
		if (typeof number !== 'number') {
			return res.status(400).json({ err: 'not a number' });
		} if (number.toString().length > 7) {
			return res.status(400).json({ err: 'too long' });
		}
		const t9letters = numberToT9(number);
		return res.json({ resp: product(...t9letters) });
	});

t9Router.route('/dictionary')
	.post((req, res) => {
		const { number } = req.body;
		if (typeof number !== 'number') {
			return res.status(400).json({ err: 'not a number' });
		} if (number.toString().length > 20) {
			return res.status(400).json({ err: 'too long' });
		}
		// eslint-disable-next-line max-len
		const arrayResult = dictionary.filter((value => value.nums.startsWith(number.toString())));
		return res.json({
			resp: arrayResult,
		});
	});

app.use('/api', t9Router);

app.get('/', (req, res) => {
	res.send('Welcome to my Nodemon API!');
});

app.server = app.listen(port, () => {
	console.log(`Running on port ${port}`);
});

module.exports = app;
