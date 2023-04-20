/*
Code a function that rewrite a string in the way Jaden Smith writes: ç
With every first letter of a word in upper case.
*/

String.prototype.toJadenCase = function () {
    let listOfWords = this.split(' ');
    for (let i = 0; i < listOfWords.length; i ++) {
        listOfWords[i] = listOfWords[i][0].toUpperCase() + listOfWords[i].substring(1)
    }
    return listOfWords.join(' ')
}

console.log("How can mirrors be real if our eyes aren't real".toJadenCase())