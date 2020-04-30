const assert = require('assert').strict;

const inputs = [
    [1, 2],
    [2, 1],
    [1],
    [1, 1, 3, 5, 4, 1, 2, 4],
    [1, 1, 1],
    [3, 2, 1],
    [0, 5, 7, 8, 9, 10],
    [10, 9, 8, 7, 6, 5]
];

const outputs = [2, 2, 1, 5, 1, 3, 10, 10];

function findPeek(arr) {
    if (arr.length === 1) {
        return arr[0];
    }

    const middleIndex = Math.floor(arr.length / 2)

    if (arr[middleIndex] > arr[middleIndex - 1]) {
        if (arr[middleIndex] > arr[middleIndex + 1]) {
            return arr[middleIndex];
        }

        return findPeek(arr.slice(middleIndex));
    } else {
        return findPeek(arr.slice(0, middleIndex));
    }
}

inputs.forEach((input, index) => {
    const peek = findPeek(input);

    // console.log(peek);
    assert.equal(peek, outputs[index]);
});

module.exports = findPeek;
