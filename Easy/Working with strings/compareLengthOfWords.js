// Find the shortest word in a string and return its length.
function findShort(str) {
    let listOfWords = str.split(' ');
    let currentlySmallestWordLength = listOfWords[0].length;
    for (let i = 1; i < listOfWords.length; i++) {
        if (listOfWords[i].length < currentlySmallestWordLength) {
            currentlySmallestWordLength = listOfWords[i].length;
        }
    }
    return currentlySmallestWordLength;
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))

function findShort2(str) {
    return Math.min(...str.split(' ').map(word => word.length))
}
