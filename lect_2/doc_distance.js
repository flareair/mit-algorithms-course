const assert = require('assert').strict;

const inputs = [
	['Fox need some fox cheese', 'Fox need some fox bread'],
	['Fox need some fox cheese', ''],
	['', '']
];
const outputs = [6, 0, 0];

function docDistance(str1, str2) {
	const words1 = calculateWordFrequencies(str1);
	const words2 = calculateWordFrequencies(str2);

	const distance = calculateDistance(words1, words2);

	return distance;
}


function calculateWordFrequencies(str) {
	return str.split(' ').reduce((acc, word) => {
		if (!word) {
			return acc;
		}

		const lowerCasedWord = word.toLowerCase();

		acc[lowerCasedWord] ? acc[lowerCasedWord]++ : acc[lowerCasedWord] = 1;

		return acc;
	}, {});
}

function calculateDistance(words1, words2) {
	return Object.keys(words1).reduce((acc, word) => {
		if (words2[word]) {
			acc += words1[word] * words2[word];
		}

		return acc;
	}, 0);
}

inputs.forEach((input, index) => {
	assert.equal(docDistance(input[0], input[1]), outputs[index])
});
