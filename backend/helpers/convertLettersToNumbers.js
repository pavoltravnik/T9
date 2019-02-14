
function mapLetterToNumber(letter) {
	let number;
	switch (letter) {
		case 'a':
		case 'A':
		case 'b':
		case 'B':
		case 'c':
		case 'C':
			number = 2;
			break;
		case 'd':
		case 'D':
		case 'e':
		case 'E':
		case 'f':
		case 'F':
			number = 3;
			break;
		case 'g':
		case 'G':
		case 'h':
		case 'H':
		case 'i':
		case 'I':
			number = 4;
			break;
		case 'j':
		case 'J':
		case 'k':
		case 'K':
		case 'l':
		case 'L':
			number = 5;
			break;
		case 'm':
		case 'M':
		case 'n':
		case 'N':
		case 'o':
		case 'O':
			number = 6;
			break;
		case 'p':
		case 'P':
		case 'q':
		case 'Q':
		case 'r':
		case 'R':
		case 's':
		case 'S':
			number = 7;
			break;
		case 't':
		case 'T':
		case 'u':
		case 'U':
		case 'v':
		case 'V':
			number = 8;
			break;
		case 'w':
		case 'W':
		case 'x':
		case 'X':
		case 'y':
		case 'Y':
		case 'z':
		case 'Z':
			number = 9;
			break;
		default:
			number = 0;
	}
	return number;
}

function wordToNumbers(word) {
	return word
		.split('')
		.map(letter => mapLetterToNumber(letter))
		.join('');
}

module.exports = { mapLetterToNumber, wordToNumbers };
