// Revert the order of the words in a string.

function reverseWords(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(reverseWords("yoda doesn't speak like this" ))

function reverseWords2(str) {
    let listOfWords = str.split(" ");
    let reverseList = [];
    for (let i = listOfWords.length - 1; i >= 0; i--) {
        reverseList.push(listOfWords[i])
    }
    return reverseList.join(" ")
}

console.log(reverseWords2("yoda doesn't speak like this"))