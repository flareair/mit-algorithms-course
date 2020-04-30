const assert = require('assert').strict;
const findPeek = require('./1d_peek');

const inputs = [
	[[5, 4, 1]],
	[
		[1, 2, 5],
		[2, 1, 1],
		[3, 0, 6]
	],
	[
		[1, 2, 5],
		[2, 1, 1],
		[3, 0, 6],
		[0, 9, 6]
	]
];

const outputs = [5, 3, 3];

function find2DPeek(arr) {
	if (arr.length === 1) {
		return findPeek(arr[0]);
	}

	const middleIndex = Math.floor(arr.length / 2);
	const row = arr[middleIndex];
	const rowPeek = findPeek(row);
	const rowPeekIndex = row.indexOf(rowPeek);

	if (!Array.isArray(arr[middleIndex - 1]) || rowPeek > arr[middleIndex - 1][rowPeekIndex]) {
		if (!Array.isArray(arr[middleIndex + 1]) || rowPeek > arr[middleIndex + 1][rowPeekIndex]) {
			return rowPeek
		}

		return find2DPeek(arr.slice(middleIndex));
	} else {
		return find2DPeek(arr.slice(0, middleIndex));
	}
}

inputs.forEach((input, index) => {
    const peek = find2DPeek(input);

    // console.log(peek);
	assert.equal(peek, outputs[index]);
});

module.exports = find2DPeek;
